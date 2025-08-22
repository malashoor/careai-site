
import 'server-only';
if (typeof window !== 'undefined') {
  throw new Error('Illegal import: Supabase admin client must not run on the client.');
}
import { createClient } from '@supabase/supabase-js';

export const supaAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!, // server only
  { 
    auth: { 
      persistSession: false,
      autoRefreshToken: false
    }
  }
);

// Test connection on import
(async () => {
  try {
    await supaAdmin.from('profiles').select('count').limit(1);
    console.log('✅ Supabase admin client connected successfully');
  } catch (error) {
    console.error('❌ Supabase admin client connection failed:', error);
  }
})();
