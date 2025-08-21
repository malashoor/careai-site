-- Production Hardening: Contact Messages Schema Updates
-- Run this in your Supabase SQL Editor FIRST before applying the API patches

-- 0.1 Ensure ticket_id is unique (protects you from collisions)
alter table public.contact_messages
  add column if not exists ticket_id text;
create unique index if not exists contact_messages_ticket_id_uidx
  on public.contact_messages(ticket_id);

-- 0.2 Email ack tracking
alter table public.contact_messages
  add column if not exists email_ack_status text check (email_ack_status in ('sent','failed', null)),
  add column if not exists email_ack_error text,
  add column if not exists email_ack_at timestamptz;
create index if not exists contact_messages_email_ack_status_idx
  on public.contact_messages(email_ack_status);

-- 0.3 Operational metadata
alter table public.contact_messages
  add column if not exists ip_address text,       -- raw x-forwarded-for first IP
  add column if not exists user_agent text;       -- for moderation & triage

-- 0.4 Helpful indexes
create index if not exists contact_messages_created_at_idx on public.contact_messages(created_at);
create index if not exists contact_messages_email_idx on public.contact_messages(email);

-- Verify the changes
select 
  column_name, 
  data_type, 
  is_nullable,
  column_default
from information_schema.columns 
where table_name = 'contact_messages' 
  and table_schema = 'public'
order by ordinal_position;
