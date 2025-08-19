# Environment Variables

## Required for CareAI Website (Same Supabase project as Flutter app)

### Supabase (Production - wpzpmgvqcanvtjusxbeg)
```bash
# These MUST match the Flutter app's credentials
NEXT_PUBLIC_SUPABASE_URL=https://wpzpmgvqcanvtjusxbeg.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndwenBtZ3ZxY2FudnRqdXN4YmVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2MjIxNjAsImV4cCI6MjA2OTE5ODE2MH0.IQdx9OdqUaeaS5SEX8eGORvJlfjT2ZuPtKRb0w0ZCaA

# Server-side only (Netlify Functions)
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndwenBtZ3ZxY2FudnRqdXN4YmVnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MzYyMjE2MCwiZXhwIjoyMDY5MTk4MTYwfQ.-82LoQfUTzHFYx6jkFKNTPTEbyWcg8sfOp4xWvUzuT0
```

### Email Service (Resend)
```bash
RESEND_API_KEY=re_e3gE3zVG_7m4GhwrNvGzwrnXCxBgeKWCL
```

### hCaptcha (Forms protection)
```bash
# Public (client)
NEXT_PUBLIC_HCAPTCHA_SITE_KEY=your_hcaptcha_site_key_here
# Server (Netlify Functions)
HCAPTCHA_SECRET=your_hcaptcha_secret_here
```

### Analytics
```bash
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=careai.app
```

## How to Set Up

### 1. Local Development (.env.local)
Create `.env.local` in the project root with the above variables.

### 2. Netlify Environment Variables
1. Go to Site settings → Environment variables
2. Add all the variables above
3. **Important**: `SUPABASE_SERVICE_ROLE_KEY` must be server-side only

## Database Tables (Matching Flutter app)

The website uses the same Supabase project as the Flutter app, so these tables should already exist:
- `profiles` - User profiles with role-based access
- `leads` - Onboarding form submissions  
- `partner_leads` - Partner inquiry submissions
- `integrations` - API integrations (for partner workflow)

## Authentication Flow (Matching Flutter app)

1. **Sign Up**: Creates user + pending profile (48h expiry)
2. **Email Confirmation**: Activates profile via `activate_profile` RPC
3. **Sign In**: Checks profile status before allowing access
4. **Role Selection**: Users must select role (senior/family/professional)

## Security Notes

- **NEVER** expose `SUPABASE_SERVICE_ROLE_KEY` in client-side code
- The service role key bypasses RLS - only use in Netlify Functions
- All admin operations are protected by `is_admin()` RPC checks
- CSP updated to allow hCaptcha scripts/frames
