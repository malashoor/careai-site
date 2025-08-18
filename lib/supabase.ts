import { createClient } from '@supabase/supabase-js';

let supabaseClient: ReturnType<typeof createClient> | null = null;

export function getSupabase() {
  if (supabaseClient) return supabaseClient;
  
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Missing Supabase environment variables');
    return null;
  }

  supabaseClient = createClient(supabaseUrl, supabaseAnonKey);
  return supabaseClient;
}

// Types for our database tables
export interface Lead {
  id?: string;
  email: string;
  first_name: string;
  last_name: string;
  phone?: string;
  created_at?: string;
  role: 'senior' | 'family' | 'professional';
  plan?: string;
  consent: boolean;
  source: 'onboarding' | 'contact' | 'partners';
}

export interface RoleData {
  id?: string;
  lead_id: string;
  role: 'senior' | 'family' | 'professional';
  senior_data?: {
    age?: number;
    living_situation?: string;
    primary_concern?: string;
  };
  family_data?: {
    relationship?: string;
    senior_age?: number;
    care_level?: string;
    primary_concern?: string;
  };
  professional_data?: {
    organization?: string;
    role?: string;
    organization_type?: string;
    use_case?: string;
  };
  created_at?: string;
}
