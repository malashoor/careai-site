-- Add email acknowledgment tracking to contact_messages table
-- Run this in your Supabase SQL Editor

-- Add columns to track email delivery status
alter table public.contact_messages
  add column if not exists email_ack_status text check (email_ack_status in ('sent', 'failed', null)),
  add column if not exists email_ack_error text,
  add column if not exists email_ack_at timestamptz;

-- Add index for email acknowledgment queries
create index if not exists contact_messages_email_ack_status_idx 
  on public.contact_messages(email_ack_status);

-- Optional: Add email format validation constraint
create or replace function is_valid_email(e text)
returns boolean language sql immutable as $$
  select e ~* '^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$'
$$;

-- Add constraint (only if you want strict email validation)
-- alter table public.contact_messages
--   add constraint email_format_chk check (is_valid_email(email));

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
