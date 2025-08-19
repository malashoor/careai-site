import { supaAdmin } from './supa';

export async function chargeOrThrow(integration_id: string, cents: number, reason='usage_charge') {
  // fetch balance
  const { data: integ, error } = await supaAdmin.from('integrations').select('credit_cents_balance').eq('id', integration_id).single();
  if (error) throw error;
  if ((integ.credit_cents_balance ?? 0) - cents < 0) {
    const err:any = new Error('Insufficient credit');
    err.status = 402; // Payment Required
    throw err;
  }
  const { error: err1 } = await supaAdmin.rpc('perform_charge', { i_id: integration_id, charge: cents, reason });
  if (err1) throw err1;
}
