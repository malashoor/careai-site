-- Add contact_messages table to CareAI Supabase schema
-- Run this in your Supabase SQL Editor

-- Contact Messages table for storing contact form submissions
create table if not exists public.contact_messages (
  id bigserial primary key,
  full_name text not null,
  email text not null,
  subject text,
  message text not null,
  locale text default 'en',
  path text,
  user_agent text,
  source text default 'web',
  status text default 'new' check (status in ('new', 'read', 'replied', 'closed')),
  admin_notes text,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Enable RLS
alter table public.contact_messages enable row level security;

-- Policies: allow anyone to insert (public forms), only admin can read
create policy "public can insert contact messages" on public.contact_messages
for insert with check (true);

create policy "admin can read contact messages" on public.contact_messages
for select using (public.is_admin());

create policy "admin can update contact messages" on public.contact_messages
for update using (public.is_admin());

-- Create indexes for better performance
create index if not exists contact_messages_email_idx on public.contact_messages(email);
create index if not exists contact_messages_status_idx on public.contact_messages(status);
create index if not exists contact_messages_created_at_idx on public.contact_messages(created_at);

-- Function to update updated_at timestamp
create or replace function update_contact_message_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end$$;

-- Trigger to automatically update updated_at
create trigger contact_messages_updated_at
  before update on public.contact_messages
  for each row
  execute function update_contact_message_updated_at();

-- Insert sample data for testing (optional)
-- insert into public.contact_messages (full_name, email, subject, message, locale, source) 
-- values ('Test User', 'test@example.com', 'Test Message', 'This is a test contact message', 'en', 'web');
