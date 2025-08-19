import type { Handler } from '@netlify/functions';
import bcrypt from 'bcryptjs';
import { supaAdmin } from '../_lib/supa';
import { rateLimitOrThrow } from '../_lib/rateLimit';
import { chargeOrThrow } from '../_lib/credits';

async function getIntegrationByPrefix(prefix: string) {
  const { data } = await supaAdmin.from('integrations')
    .select('id, api_key_hash, rate_limit_per_min, status')
    .eq('api_key_prefix', prefix)
    .single();
  return data;
}

export const handler: Handler = async (event) => {
  try {
    if (event.httpMethod === 'OPTIONS') {
      return { statusCode: 204, headers: corsHeaders(event.headers.origin) };
    }
    const auth = event.headers['authorization'] || '';
    const m = auth.match(/^Bearer\s+(cai_[a-f0-9]+)/i);
    if (!m) return resp(401, { error: 'Missing API key' }, event);

    const rawKey = m[1];
    const prefix = rawKey.slice(0,8);
    const integ = await getIntegrationByPrefix(prefix);
    if (!integ || integ.status !== 'live') return resp(403, { error: 'Invalid or inactive key' }, event);

    const ok = await bcrypt.compare(rawKey, integ.api_key_hash);
    if (!ok) return resp(403, { error: 'Invalid key' }, event);

    await rateLimitOrThrow(integ.id, integ.rate_limit_per_min ?? 60, 'ping');
    
    // Charge 1 cent per ping (adjust as needed)
    await chargeOrThrow(integ.id, 1, 'ping');

    return resp(200, { ok: true, ts: Date.now() }, event);
  } catch (e:any) {
    const status = e.status || 500;
    return { statusCode: status, headers: corsHeaders(event.headers.origin), body: JSON.stringify({ error: e.message || 'error' }) };
  }
};

function corsHeaders(origin?: string) {
  return {
    'access-control-allow-origin': origin || '*',
    'access-control-allow-methods': 'GET,POST,OPTIONS',
    'access-control-allow-headers': 'authorization,content-type'
  };
}

function resp(status: number, body: any, event: any) {
  return { statusCode: status, headers: corsHeaders(event.headers.origin), body: JSON.stringify(body) };
}
