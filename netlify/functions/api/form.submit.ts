
import type { Handler } from '@netlify/functions';
import fetch from 'node-fetch';
import { createClient } from '@supabase/supabase-js';
import { corsHeaders, handleOptions, assertAllowedOrigin } from '../_lib/cors';
import { rateLimitOrThrow, clientKeyFromReq } from '../_lib/rateLimit';
import { logError } from '../_lib/monitor';

const supa = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);

async function verifyHCaptcha(token: string, remoteip?: string) {
  if (!process.env.HCAPTCHA_SECRET) {
    throw Object.assign(new Error('Server misconfigured (captcha)'), { status: 500 });
  }
  const res = await fetch('https://hcaptcha.com/siteverify', {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      secret: process.env.HCAPTCHA_SECRET!,
      response: token,
      remoteip: remoteip || ''
    })
  });
  const data = await res.json();
  if (!data.success) {
    const e: any = new Error('hCaptcha failed');
    e.status = 400;
    throw e;
  }
}

export const handler: Handler = async (event) => {
  // Helper to get origin from event.headers
  const req = { headers: { get: (k: string) => event.headers[k.toLowerCase()] || '' } } as any;

  if (event.httpMethod === 'OPTIONS') {
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
    if (!body.hcaptcha_token) {
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders(req) },
        body: JSON.stringify({ error: 'Missing hcaptcha_token' }),
      };
    }

    await verifyHCaptcha(body.hcaptcha_token as string, (event.headers['x-forwarded-for'] as string) || undefined);

    if (body.kind === 'onboarding') {
      await supa.from('leads').insert({
        role: body.role,
        email: body.email,
        first_name: body.first_name,
        last_name: body.last_name,
        phone: body.phone,
        plan: body.plan,
        consent: !!body.consent,
        source: 'onboarding',
      });
    } else if (body.kind === 'partner') {
      await supa.from('partner_leads').insert({
        name: body.contact_name,
        email: body.work_email,
        organization: body.org_name,
        role: body.role || 'contact',
        phone: body.phone,
        message: body.message,
        partner_type: body.type,
        status: 'new',
      });
    } else {
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders(req) },
        body: JSON.stringify({ error: 'Unknown form kind' }),
      };
    }

    return {
      statusCode: 200,
      headers: { ...corsHeaders(req) },
      body: JSON.stringify({ ok: true }),
    };
  } catch (e: any) {
    await logError(e, { fn: 'form.submit', event });
    return {
      statusCode: e.status || 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders(req) },
      body: JSON.stringify({ error: e.message || 'error' }),
    };
  }
};
