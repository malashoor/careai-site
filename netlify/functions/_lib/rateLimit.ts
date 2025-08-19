import { supaAdmin } from './supa';

export async function rateLimitOrThrow(integration_id: string, limitPerMin: number, endpoint: string) {
  const now = new Date();
  const start = new Date(now); start.setSeconds(0,0);
  const end = new Date(start); end.setMinutes(start.getMinutes()+1);

  const { data, error } = await supaAdmin
    .from('api_usage')
    .select('id,count')
    .eq('integration_id', integration_id)
    .eq('endpoint', endpoint)
    .gte('window_start', start.toISOString())
    .lt('window_end', end.toISOString())
    .maybeSingle();

  if (error) throw error;

  let count = 0;
  if (!data) {
    const ins = await supaAdmin.from('api_usage').insert({
      integration_id, endpoint, window_start: start.toISOString(),
      window_end: end.toISOString(), count: 1
    }).select('count').single();
    count = ins.data?.count ?? 1;
  } else {
    const upd = await supaAdmin.from('api_usage').update({ count: data.count + 1 }).eq('id', data.id).select('count').single();
    count = upd.data?.count ?? (data.count + 1);
  }
  if (count > limitPerMin) {
    const e:any = new Error('Rate limit exceeded');
    e.status = 429;
    throw e;
  }
}
