-- CareAI Supabase Schema
-- Run this in your Supabase SQL editor

-- Profiles (role-bearing)
create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  role text check (role in ('admin','staff','user')) default 'user',
  created_at timestamp with time zone default now()
);

-- Leads
create table if not exists leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamp with time zone default now(),
  role text check (role in ('senior','family','care_pro')),
  first_name text, 
  last_name text, 
  email text, 
  phone text,
  locale text, 
  source text, 
  consent boolean default false,
  data jsonb
);

-- Partner leads
create table if not exists partner_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamp with time zone default now(),
  type text check (type in ('doctor','hospital','insurer','charity')),
  org_name text, 
  contact_name text, 
  work_email text, 
  phone text,
  country text, 
  message text, 
  stage text default 'new',
  file_url text
);

-- Storage bucket for partner documents
insert into storage.buckets (id, name, public) values ('partner_documents','partner_documents', false)
on conflict (id) do nothing;

-- Enable RLS
alter table profiles enable row level security;
alter table leads enable row level security;
alter table partner_leads enable row level security;

-- Helper function: is_admin()
create or replace function public.is_admin() returns boolean
language sql stable as $$
  select exists(
    select 1 from profiles p
    where p.id = auth.uid() and p.role = 'admin'
  );
$$;

-- Profiles policies
create policy "owner can read own profile" on profiles
for select using (id = auth.uid());
create policy "user can insert own profile" on profiles
for insert with (id = auth.uid());
create policy "admin can read all profiles" on profiles
for select using (public.is_admin());

-- Leads policies: allow anyone to insert (public forms), only admin can read
create policy "public can insert" on leads
for insert with (true);
create policy "admin can read" on leads
for select using (public.is_admin());

-- Partner leads policies: same model
create policy "public can insert" on partner_leads
for insert with (true);
create policy "admin can read" on partner_leads
for select using (public.is_admin());

-- PARTNER INTEGRATION WORKFLOW
-- INTEGRATIONS
create table if not exists public.integrations (
  id uuid primary key default gen_random_uuid(),
  partner_lead_id uuid references public.partner_leads(id) on delete set null,
  org_name text not null,
  type text check (type in ('doctor','hospital','insurer','charity')) not null,
  status text check (status in ('pending','approved','live','suspended','revoked')) default 'pending',
  api_key_prefix text,                 -- first 8 chars to identify
  api_key_hash text,                   -- bcrypt/argon2 hash
  webhook_url text,
  webhook_secret text,                 -- random base64; send to partner once
  rate_limit_per_min int default 60,   -- simple throttle
  credit_cents_balance int default 0,  -- prepaid credit
  billing_account_id text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- CREDITS LEDGER
create table if not exists public.credit_ledger (
  id uuid primary key default gen_random_uuid(),
  integration_id uuid references public.integrations(id) on delete cascade,
  delta_cents int not null,
  reason text check (reason in ('credit_purchase','monthly_grant','usage_charge','manual_adjustment')) not null,
  memo text,
  created_at timestamptz default now()
);

-- USAGE WINDOWS (for rate limiting / billing samples)
create table if not exists public.api_usage (
  id bigserial primary key,
  integration_id uuid references public.integrations(id) on delete cascade,
  endpoint text not null,
  window_start timestamptz not null,
  window_end timestamptz not null,
  count int not null default 0
);

-- AUDIT LOG (admin actions)
create table if not exists public.audit_log (
  id bigserial primary key,
  actor_user uuid,    -- profiles.id (admin)
  action text not null,     -- 'approve_integration', 'issue_key', etc.
  target uuid,              -- integrations.id or partner_leads.id
  ip inet,
  meta jsonb,
  created_at timestamptz default now()
);

-- RLS
alter table public.integrations enable row level security;
alter table public.credit_ledger enable row level security;
alter table public.api_usage enable row level security;
alter table public.audit_log enable row level security;

-- helper: is_admin()
create or replace function public.is_admin() returns boolean
language sql stable as $$
  select exists(select 1 from public.profiles p where p.id = auth.uid() and p.role='admin');
$$;

-- Policies: admin read/write, public none
create policy "admin read integrations" on public.integrations
for select using (public.is_admin());
create policy "admin write integrations" on public.integrations
for insert with (public.is_admin())  -- we create from server function too
  to authenticated;
create policy "admin update integrations" on public.integrations
for update using (public.is_admin());

create policy "admin read credits" on public.credit_ledger
for select using (public.is_admin());
create policy "admin write credits" on public.credit_ledger
for insert with (public.is_admin());

create policy "admin read usage" on public.api_usage
for select using (public.is_admin());
create policy "admin write usage" on public.api_usage
for insert with (public.is_admin());

create policy "admin read audit" on public.audit_log
for select using (public.is_admin());
create policy "admin write audit" on public.audit_log
for insert with (public.is_admin());

-- Helpful indexes
create index if not exists integrations_status_idx on public.integrations(status);
create index if not exists usage_window_idx on public.api_usage(integration_id, window_start, window_end);

-- SQL helper for atomic credit operations
create or replace function perform_charge(i_id uuid, charge int, reason text)
returns void language plpgsql as $$
begin
  update integrations set credit_cents_balance = credit_cents_balance - charge where id = i_id;
  insert into credit_ledger (integration_id, delta_cents, reason, memo) values (i_id, -charge, reason, 'api usage');
end$$;

-- Insert your admin user (replace with your actual user ID)
-- insert into profiles (id, role) values ('your-user-uuid-here', 'admin');
