# Supabase Setup for CareAI Onboarding

## Required Environment Variables

Add these to your `.env.local` file:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

## Database Schema

### Table: `leads`

```sql
CREATE TABLE leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  phone TEXT,
  role TEXT NOT NULL CHECK (role IN ('senior', 'family', 'professional')),
  plan TEXT NOT NULL,
  consent BOOLEAN NOT NULL DEFAULT false,
  source TEXT NOT NULL DEFAULT 'onboarding',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Allow inserts from authenticated and anonymous users
CREATE POLICY "Allow inserts" ON leads FOR INSERT WITH CHECK (true);
```

### Table: `role_data`

```sql
CREATE TABLE role_data (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  lead_id UUID NOT NULL REFERENCES leads(id) ON DELETE CASCADE,
  role TEXT NOT NULL CHECK (role IN ('senior', 'family', 'professional')),
  senior_data JSONB,
  family_data JSONB,
  professional_data JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE role_data ENABLE ROW LEVEL SECURITY;

-- Allow inserts from authenticated and anonymous users
CREATE POLICY "Allow inserts" ON role_data FOR INSERT WITH CHECK (true);
```

## Fallback to Netlify Forms

If Supabase is unavailable, the form automatically falls back to Netlify Forms. The hidden field `form-name="onboarding"` ensures Netlify can process the submission.

## Testing

1. Set up your Supabase project
2. Create the tables above
3. Add environment variables
4. Test the onboarding flow
5. Check both Supabase and Netlify Forms for submissions
