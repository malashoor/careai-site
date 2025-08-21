-- Production-ready contact_messages table updates
-- Run this in your Supabase SQL Editor

-- Add email acknowledgment tracking columns
alter table public.contact_messages
  add column if not exists email_ack_status text check (email_ack_status in ('sent', 'failed', null)),
  add column if not exists email_ack_error text,
  add column if not exists email_ack_at timestamptz;

-- Add IP address tracking for moderation and rate limiting
alter table public.contact_messages
  add column if not exists ip_address inet;

-- Add captcha verification tracking
alter table public.contact_messages
  add column if not exists captcha_verified boolean default false,
  add column if not exists captcha_provider text;

-- Add rate limit tracking
alter table public.contact_messages
  add column if not exists rate_limit_bucket text;

-- Add indexes for better performance
create index if not exists contact_messages_email_ack_status_idx 
  on public.contact_messages(email_ack_status);

create index if not exists contact_messages_ip_address_idx 
  on public.contact_messages(ip_address);

create index if not exists contact_messages_captcha_verified_idx 
  on public.contact_messages(captcha_verified);

create index if not exists contact_messages_created_at_ip_idx 
  on public.contact_messages(created_at, ip_address);

-- Add email format validation function
create or replace function is_valid_email(e text)
returns boolean language sql immutable as $$
  select e ~* '^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$'
$$;

-- Optional: Add email format constraint (uncomment if you want strict validation)
-- alter table public.contact_messages
--   add constraint email_format_chk check (is_valid_email(email));

-- Add function to get contact statistics
create or replace function get_contact_stats(
  days_back integer default 30
)
returns table (
  total_contacts bigint,
  emails_sent bigint,
  emails_failed bigint,
  avg_response_time interval,
  top_subjects jsonb
) language sql as $$
  select 
    count(*) as total_contacts,
    count(*) filter (where email_ack_status = 'sent') as emails_sent,
    count(*) filter (where email_ack_status = 'failed') as emails_failed,
    avg(updated_at - created_at) as avg_response_time,
    jsonb_object_agg(
      coalesce(subject, 'No Subject'), 
      count
    ) as top_subjects
  from (
    select 
      subject,
      count(*) as count
    from contact_messages 
    where created_at > now() - interval '1 day' * days_back
    group by subject
    order by count desc
    limit 10
  ) subjects
  cross join (
    select 
      count(*) as total,
      count(*) filter (where email_ack_status = 'sent') as sent,
      count(*) filter (where email_ack_status = 'failed') as failed,
      avg(updated_at - created_at) as response_time
    from contact_messages 
    where created_at > now() - interval '1 day' * days_back
  ) stats;
$$;

-- Add RLS policy for IP address privacy (only admins can see IPs)
create policy "admin can view ip addresses" on public.contact_messages
  for select using (public.is_admin());

-- Verify the changes
select 
  column_name, 
  data_type, 
  is_nullable,
  column_default,
  is_identity
from information_schema.columns 
where table_name = 'contact_messages' 
  and table_schema = 'public'
order by ordinal_position;

-- Test the stats function
select * from get_contact_stats(7); -- Last 7 days
