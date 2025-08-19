# Environment Variables for CareAI

## Required Variables

### Supabase Configuration
```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
```

### Site Configuration
```bash
NEXT_PUBLIC_SITE_URL=https://www.careai.app
NEXT_PUBLIC_CTA_DESTINATION=contact
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=careai.app
```

## Optional Variables

### Email (Resend)
```bash
RESEND_API_KEY=your-resend-api-key-here
CONTACT_TO_EMAIL=support@careai.app
CONTACT_FROM_EMAIL=no-reply@careai.app
```

### Slack Notifications
```bash
SLACK_WEBHOOK_URL=your-slack-webhook-url-here
```

## Security Notes

- **Never commit real API keys** to version control
- **Use environment variables** in production
- **Keep service role keys private** (server-side only)
- **Public keys** (NEXT_PUBLIC_*) are safe for client-side use
