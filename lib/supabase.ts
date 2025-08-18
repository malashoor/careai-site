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

export interface PartnerLead {
  id?: string;
  name: string;
  email: string;
  organization: string;
  role: string;
  phone?: string;
  message: string;
  partner_type: 'doctors' | 'hospitals' | 'insurance' | 'charities';
  status: 'new' | 'contacted' | 'qualified' | 'converted' | 'rejected';
  created_at?: string;
}

export interface Profile {
  id: string;
  email: string;
  role: 'user' | 'admin';
  created_at?: string;
  updated_at?: string;
}

// Admin helper functions
export async function checkAdminRole(userId: string): Promise<boolean> {
  const supabase = getSupabase();
  if (!supabase) return false;

  const { data, error } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', userId)
    .single();

  if (error || !data) return false;
  return data.role === 'admin';
}

export async function getCurrentUser() {
  const supabase = getSupabase();
  if (!supabase) return null;

  const { data: { user }, error } = await supabase.auth.getUser();
  if (error || !user) return null;
  return user;
}
