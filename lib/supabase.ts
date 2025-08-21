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
  
  supabaseClient = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true
    }
  });
  return supabaseClient;
}

// Types for our database tables (matching Flutter app)
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
  
  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', userId)
      .single();
    
    if (error || !data) return false;
    return data.role === 'admin';
  } catch (error) {
    console.error('Error checking admin role:', error);
    return false;
  }
}

export async function getCurrentUser() {
  const supabase = getSupabase();
  if (!supabase) return null;
  
  try {
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error || !user) return null;
    return user;
  } catch (error) {
    console.error('Error getting current user:', error);
    return null;
  }
}

// Authentication functions matching Flutter app
export async function signUpWithEmail(email: string, password: string, fullName?: string, additionalData?: {
  phone?: string;
  age?: number;
  gender?: string;
  birthday?: string;
  livingSituation?: string;
  healthConcern?: string;
  plan?: string;
}) {
  const supabase = getSupabase();
  if (!supabase) throw new Error('Supabase not initialized');
  
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: process.env.NODE_ENV === 'production' 
          ? 'https://careai.app/en/auth/callback'
          : 'http://localhost:3000/en/auth/callback'
      }
    });
    
    if (error) throw error;
    
    // Create pending profile with all enhanced fields
    if (data.user) {
      await supabase.rpc('create_pending_profile', {
        user_id: data.user.id,
        user_full_name: fullName,
        user_email: email,
        user_phone: additionalData?.phone,
        user_age: additionalData?.age,
        user_gender: additionalData?.gender,
        user_birthday: additionalData?.birthday,
        user_living_situation: additionalData?.livingSituation,
        user_health_concern: additionalData?.healthConcern,
        user_plan: additionalData?.plan
      });
    }
    
    return data;
  } catch (error) {
    console.error('Sign up error:', error);
    throw error;
  }
}

export async function signInWithEmail(email: string, password: string) {
  const supabase = getSupabase();
  if (!supabase) throw new Error('Supabase not initialized');
  
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    
    if (error) throw error;
    
    // Check if profile is active (matching Flutter app)
    if (data.user) {
      const { data: profile } = await supabase
        .from('profiles')
        .select('status')
        .eq('id', data.user.id)
        .single();
      
      if (profile?.status === 'pending') {
        throw new Error('Please check your email and click the verification link to activate your account.');
      } else if (profile?.status !== 'active') {
        throw new Error('Your account is not active. Please contact support.');
      }
    }
    
    return data;
  } catch (error) {
    console.error('Sign in error:', error);
    throw error;
  }
}

export async function signOut() {
  const supabase = getSupabase();
  if (!supabase) return;
  
  try {
    await supabase.auth.signOut();
  } catch (error) {
    console.error('Sign out error:', error);
  }
}
