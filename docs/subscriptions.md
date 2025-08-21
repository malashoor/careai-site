# CareAI Subscription System Documentation

**Version:** 1.0.0  
**Status:** Production Ready

## Overview

The CareAI subscription system provides a robust foundation for managing user subscriptions, trials, and billing with proper security and performance optimizations.

## Business Model & Cost Coverage

### Subscription Tiers & Pricing (US Billing)

#### Consumer Plans
- **Essential** → $9.99/month ($99.99/year, ~17% off)
- **Standard (Most Popular)** → $14.99/month ($149.99/year, ~17% off)  
- **Premium** → $29.99/month ($299.99/year, ~17% off)
- **Family Care** → $69.99/month ($699.99/year, ~17% off)

#### B2B / Professional Plans
- **Professional (5 users)** → $119.99/month ($1,199/year)
- **Enterprise (Custom)** → Starts at $249.99/month, annual contract required

### Cost Coverage Analysis (Internal Use Only)

| Plan | Fee (Monthly) | Est. Cost / User | Gross Margin |
|------|---------------|------------------|--------------|
| Essential | $9.99 | ~$5 | ~50% |
| Standard | $14.99 | ~$8 | ~47% |
| Premium | $29.99 | ~$12 | ~60% |
| Family Care | $69.99 | ~$15 (per senior) | ~78% |
| Professional | $119.99 | ~$20 (5 users) | ~83% |
| Enterprise | $249.99+ | ~$40+ | ~84% |

**Notes for Internal Validation:**
- **Essential & Standard margins are thinner** but attractive entry tiers to capture users
- **Premium & Family Care are the profit drivers** with strong margins
- **Professional & Enterprise remain B2B-focused** with strong margins
- Costs include infrastructure, support, and operational overhead
- Margins improve with scale and annual commitments
- Family Care and Professional plans offer better per-user economics
- Enterprise plans provide highest margins with custom contracts

### Technical Readiness Status

| Plan | Technical Readiness | Notes |
|------|-------------------|-------|
| Essential | ✅ Ready | Free/low tier supported by current schema |
| Standard | ✅ Ready | Billing + features align with schema |
| Premium | ✅ Ready | Supported with current subscription fields |
| Family Care | ⚠️ Partial | Needs multi-user linking (parent → seniors) |
| Professional | ⚠️ Partial | Needs 5-user bundle assignment |
| Enterprise | ❌ Not Ready | Needs custom contract support + admin panel |

**Implementation Strategy:**
- **Phase 1 (Complete):** Essential, Standard, Premium with Stripe integration
- **Phase 2 (Next):** Family Care and Professional multi-user support
- **Phase 3 (Future):** Enterprise custom contracts and admin panel

## Table Structure and Constraints

### Subscriptions Table

**Location:** `supabase/migrations/20250321094818_green_king.sql` (lines 25-40)

```sql
CREATE TABLE subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) NOT NULL,
  plan_type text NOT NULL CHECK (plan_type IN ('free', 'premium', 'family', 'professional')),
  billing_period text NOT NULL CHECK (billing_period IN ('monthly', 'annual')),
  status text NOT NULL CHECK (status IN ('active', 'cancelled', 'past_due')),
  current_period_start timestamptz NOT NULL,
  current_period_end timestamptz NOT NULL,
  cancel_at_period_end boolean DEFAULT false,
  payment_method jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);
```

### Subscription Trials Table

**Location:** `supabase/migrations/20250321094818_green_king.sql` (lines 42-50)

```sql
CREATE TABLE subscription_trials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) NOT NULL,
  plan_type text NOT NULL CHECK (plan_type IN ('premium', 'family', 'professional')),
  start_date timestamptz NOT NULL DEFAULT now(),
  end_date timestamptz NOT NULL,
  converted_to_paid boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);
```

## Business Rules and Constraints

### One-Active-Subscription-Per-User Rule

**Location:** `supabase/migrations/20250820000000_harden_subscriptions.sql`

```sql
-- Partial unique index ensures only one active subscription per user
CREATE UNIQUE INDEX idx_subscriptions_one_active_per_user 
ON subscriptions(user_id) 
WHERE status = 'active';
```

### Plan Type Validation

The system enforces valid plan types through CHECK constraints:
- **Consumer:** `free`, `premium`, `family`
- **Professional:** `professional` (5-user bundles)
- **Enterprise:** Custom contracts (future implementation)

### Billing Period Options

- **Monthly:** Standard billing cycle
- **Annual:** 17% discount for annual commitment
- **Custom:** Enterprise contracts (future)

## Performance Optimizations

### Database Indexes

**Location:** `supabase/migrations/20250820000000_harden_subscriptions.sql`

```sql
-- Performance indexes for common lookups
CREATE INDEX IF NOT EXISTS idx_subscriptions_user_id ON subscriptions(user_id);
CREATE INDEX IF NOT EXISTS idx_subscriptions_status ON subscriptions(status);
CREATE INDEX IF NOT EXISTS idx_subscriptions_plan_type ON subscriptions(plan_type);
CREATE INDEX IF NOT EXISTS idx_subscriptions_billing_period ON subscriptions(billing_period);
CREATE INDEX IF NOT EXISTS idx_subscriptions_current_period_end ON subscriptions(current_period_end);
CREATE INDEX IF NOT EXISTS idx_subscriptions_created_at ON subscriptions(created_at);
```

### Analytics Views

**Location:** `supabase/migrations/20250820000001_add_subscription_views.sql`

- **`subscription_metrics`**: Aggregated counts and statistics
- **`subscription_next_renewals`**: Upcoming renewal dates

## API Endpoints

### Diagnostics Route

**Path:** `/api/diag/subscriptions`

**Purpose:** Safe server-side endpoint for subscription analytics

**Features:**
- Uses service role key (server-side only)
- Returns subscription and trial breakdowns
- Includes metrics view data when available
- No PII or sensitive data exposure

**Response Format:**
```json
{
  "ok": true,
  "subscriptions": {
    "total": 150,
    "by_plan": { "premium": 80, "family": 45, "professional": 25 },
    "by_billing": { "monthly": 100, "annual": 50 },
    "by_status": { "active": 140, "cancelled": 10 }
  },
  "trials": {
    "total": 75,
    "converted": 45,
    "open": 30
  },
  "metrics": { /* from subscription_metrics view */ },
  "timestamp": "2025-01-20T10:00:00Z"
}
```

## Development and Testing

### Dev Seeding Script

**Location:** `scripts/seed-dev-subscriptions.js`

**Usage:**
```bash
NODE_ENV=development TEST_USER_ID=<uuid> node scripts/seed-dev-subscriptions.js
```

**Safety Features:**
- Never runs in production (`NODE_ENV !== 'production'`)
- Requires explicit environment variables
- Uses service role key for database access
- Creates test subscription and trial data

### Testing Checklist

1. **Diagnostics Route:** Verify endpoint returns correct data structure
2. **Unique Constraint:** Confirm one-active-subscription-per-user rule
3. **Empty Tables:** Handle gracefully when no data exists
4. **Views:** Test subscription_metrics and subscription_next_renewals
5. **Security:** Verify no service role key exposure

## Security Posture

### Row Level Security (RLS)

- **Enabled:** All subscription tables maintain RLS policies
- **No Anon Access:** Anonymous users cannot read/write subscription data
- **Authenticated Only:** Users can only access their own subscription data
- **Admin Access:** Service role key bypasses RLS for administrative operations

### Service Role Usage

- **Server-Side Only:** Service role key never exposed to client
- **Diagnostics API:** Uses service role for aggregated analytics
- **Admin Operations:** Service role for seeding and maintenance
- **No Client Exposure:** All sensitive operations remain server-side

### Data Protection

- **No PII in Responses:** Diagnostics return only aggregated counts
- **No Payment Data:** Payment information handled by Stripe only
- **Encrypted Storage:** All sensitive data encrypted at rest
- **Audit Trail:** Full logging of all subscription operations

## Billing Integration

### Stripe Integration (Phase 2)

**Products to Create:**
- Essential: $9.99/month, $99.99/year
- Standard: $14.99/month, $149.99/year  
- Premium: $29.99/month, $299.99/year

**Features:**
- 14-day trial for Standard and Premium plans
- Webhook integration for real-time status updates
- Automatic subscription management
- PCI compliance through Stripe

### Webhook Handlers

**Events to Handle:**
- `customer.subscription.created`
- `customer.subscription.updated`
- `customer.subscription.deleted`
- `invoice.payment_succeeded`
- `invoice.payment_failed`

**Database Updates:**
- Sync subscription status
- Update trial conversion status
- Handle payment failures
- Maintain billing period information

## Future Enhancements

### Multi-User Support (Phase 2)

**Family Care Plan:**
- Parent account with up to 5 senior family members
- Shared medical records and care coordination
- Family dashboard and group activities

**Professional Plan:**
- 5 user licenses included
- Team management tools
- Advanced analytics dashboard
- HIPAA compliance features

### Enterprise Features (Phase 3)

**Custom Contracts:**
- Unlimited users
- White-label options
- Dedicated account management
- SLA guarantees
- Custom development services

### Admin Panel

**Features:**
- Subscription management interface
- User onboarding flows
- Billing analytics dashboard
- Support ticket integration
- Revenue reporting

## Troubleshooting

### Common Issues

1. **Unique Constraint Violations**
   - Ensure one-active-subscription-per-user rule
   - Check for duplicate active subscriptions
   - Verify user_id references in profiles table

2. **Trial Conversion Failures**
   - Check trial end dates
   - Verify Stripe webhook delivery
   - Confirm payment method setup

3. **Performance Issues**
   - Verify indexes are created
   - Check query execution plans
   - Monitor database connection limits

### Monitoring

**Key Metrics:**
- Subscription conversion rates
- Trial-to-paid conversion
- Churn rates by plan type
- Revenue per user (ARPU)
- Customer lifetime value (CLV)

**Alerts:**
- Failed payment notifications
- Webhook delivery failures
- Database performance issues
- Security audit failures

## Migration Strategy

### Database Changes

**Safe Operations:**
- All migrations are idempotent
- No data loss during updates
- Backward compatibility maintained
- Rollback procedures documented

**Testing:**
- Run migrations in staging first
- Verify data integrity after changes
- Test rollback procedures
- Performance impact assessment

### Feature Rollouts

**Phased Approach:**
- **Phase 1:** Core subscription system (Complete)
- **Phase 2:** Stripe integration + multi-user (In Progress)
- **Phase 3:** Enterprise features + admin panel (Future)

**Risk Mitigation:**
- Feature flags for gradual rollout
- A/B testing for pricing changes
- User feedback collection
- Performance monitoring

## Support and Maintenance

### Documentation

- **API Reference:** Complete endpoint documentation
- **Database Schema:** Up-to-date table structures
- **Integration Guides:** Stripe, webhook, and admin setup
- **Troubleshooting:** Common issues and solutions

### Maintenance Tasks

**Regular Operations:**
- Monitor subscription metrics
- Review failed payment reports
- Update Stripe products and prices
- Database performance optimization
- Security audit reviews

**Emergency Procedures:**
- Service outage response
- Data recovery procedures
- Security incident handling
- Customer communication protocols

---

**Last Updated:** January 20, 2025  
**Next Review:** February 20, 2025  
**Maintainer:** Development Team  
**Contact:** dev@careai.app
