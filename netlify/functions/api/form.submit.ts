import type { Handler } from '@netlify/functions';
import fetch from 'node-fetch';
import { createClient } from '@supabase/supabase-js';

const supa = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);

async function verifyHCaptcha(token: string, remoteip?: string) {
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

function cors(origin?: string) {
  return {
    'access-control-allow-origin': origin || '*',
    'access-control-allow-methods': 'POST,OPTIONS',
    'access-control-allow-headers': 'content-type'
  } as Record<string, string>;
}

export const handler: Handler = async (event) => {
  try {
    if (event.httpMethod === 'OPTIONS') return { statusCode: 204, headers: cors(event.headers.origin) };
    if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'Method not allowed' };

    const body = JSON.parse(event.body || '{}');
    if (!body.hcaptcha_token) {
      const e: any = new Error('Missing hcaptcha_token');
      e.status = 400; throw e;
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
        source: 'onboarding'
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
        status: 'new'
      });
    } else {
      const e: any = new Error('Unknown form kind');
      e.status = 400; throw e;
    }

    return { statusCode: 200, headers: cors(event.headers.origin), body: JSON.stringify({ ok: true }) };
  } catch (e: any) {
    return { statusCode: e.status || 500, headers: cors(event.headers.origin), body: JSON.stringify({ error: e.message || 'error' }) };
  }
};
