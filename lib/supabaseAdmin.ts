import { createClient } from '@supabase/supabase-js';

const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const serviceRole = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !serviceRole) {
  // Never leak secrets; just state which is missing
  throw new Error(
    `Supabase admin env missing: ` +
    `${!url ? 'NEXT_PUBLIC_SUPABASE_URL ' : ''}` +
    `${!serviceRole ? 'SUPABASE_SERVICE_ROLE_KEY' : ''}`.trim()
  );
}

// IMPORTANT: never ship this to the browser.
// No auth helpers, just raw admin client.
export const supabaseAdmin = createClient(url, serviceRole, {
  auth: { persistSession: false, autoRefreshToken: false },
});
