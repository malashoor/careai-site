import { Handler } from '@netlify/functions';
import { createClient } from '@supabase/supabase-js';
import { corsHeaders, handleOptions, assertAllowedOrigin } from './_lib/cors';
import { rateLimitOrThrow, clientKeyFromReq } from './_lib/rateLimit';
import { logError } from './_lib/monitor';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

export const handler: Handler = async (event) => {

  // Helper to get origin from event.headers
  const origin = event.headers['origin'] || '';
  // Helper to create a pseudo-request-like object for CORS helpers
  const req = { headers: { get: (k: string) => event.headers[k.toLowerCase()] || '' } } as any;

  if (event.httpMethod === 'OPTIONS') {
    // Return Netlify-compatible response
    return {
      statusCode: 204,
      headers: { ...corsHeaders(req), 'Access-Control-Max-Age': '86400' },
      body: '',
    };
  }

  const forbidden = assertAllowedOrigin(req);
  if (forbidden) {
    return {
      statusCode: 403,
      headers: { 'Content-Type': 'application/json', ...corsHeaders(req) },
      body: JSON.stringify({ error: 'Forbidden origin' }),
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: { ...corsHeaders(req) },
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    // Rate limit by IP+UA
    try {
      rateLimitOrThrow(clientKeyFromReq(req));
    } catch {
      return {
        statusCode: 429,
        headers: { 'Content-Type': 'application/json', ...corsHeaders(req) },
        body: JSON.stringify({ error: 'Too many requests' }),
      };
    }

    const body = JSON.parse(event.body || '{}');
    const { fullName, email, subject, message, locale = 'en', path = '/' } = body;

    // Basic validation
    if (!fullName || !email || !message) {
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders(req) },
        body: JSON.stringify({ error: 'Missing required fields: fullName, email, message' }),
      };
    }
    // Email validation
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email || '');
    if (!emailOk) {
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders(req) },
        body: JSON.stringify({ error: 'Invalid email' }),
      };
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from('contact_messages')
      .insert([
        {
          full_name: fullName,
          email,
          subject: subject || 'Contact Form Submission',
          message,
          locale,
          path,
          user_agent: event.headers['user-agent'] || '',
          status: 'new',
        },
      ])
      .select()
      .single();

    if (error) {
      await logError(error, { fn: 'contact', body });
      return {
        statusCode: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders(req) },
        body: JSON.stringify({ error: 'Failed to save message', details: error.message }),
      };
    }

    // Generate ticket ID
    const ticketId = `CM-${data.id.slice(0, 8).toUpperCase()}`;

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json', ...corsHeaders(req) },
      body: JSON.stringify({
        success: true,
        message: 'Message sent successfully',
        ticketId,
        id: data.id,
      }),
    };
  } catch (error) {
    await logError(error, { fn: 'contact', event });
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders(req) },
      body: JSON.stringify({
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error',
      }),
    };
  }
};
