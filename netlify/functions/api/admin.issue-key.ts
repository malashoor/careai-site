import type { Handler } from '@netlify/functions';
import { supaAdmin } from '../_lib/supa';
import { generateApiKey, hashApiKey, newWebhookSecret } from '../_lib/crypto';

export const handler: Handler = async (event) => {
  try {
    if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'Method not allowed' };
    const { integration_id, start_credit_cents = 10000, rate_limit_per_min = 60 } = JSON.parse(event.body || '{}');

    // Create key
    const { raw, prefix } = generateApiKey();
    const hash = await hashApiKey(raw);
    const webhook_secret = newWebhookSecret();

    const { data, error } = await supaAdmin
      .from('integrations')
      .update({
        api_key_prefix: prefix,
        api_key_hash: hash,
        webhook_secret,
        status: 'live',
        rate_limit_per_min: rate_limit_per_min,
        credit_cents_balance: start_credit_cents
      })
      .eq('id', integration_id)
      .select('org_name, webhook_secret')
      .single();

    if (error) throw error;

    // Return the raw key ONCE (admin will copy and send in email)
    return {
      statusCode: 200,
      body: JSON.stringify({ api_key: raw, api_key_prefix: prefix, webhook_secret: data.webhook_secret })
    };
  } catch (e:any) {
    return { statusCode: e.status || 500, body: e.message || 'error' };
  }
};
