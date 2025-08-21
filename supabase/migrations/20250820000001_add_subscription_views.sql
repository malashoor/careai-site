/*
  # Subscription Views Migration
  
  This migration adds read-only views for subscription analytics
  and monitoring without requiring new permissions.
  
  Views:
  - subscription_metrics: Aggregated counts and statistics
  - subscription_next_renewals: Upcoming renewal dates
*/

-- ========================================
-- SUBSCRIPTION METRICS VIEW
-- ========================================

-- Drop view if it exists (idempotent)
DROP VIEW IF EXISTS subscription_metrics;

-- Create metrics view with comprehensive subscription statistics
CREATE VIEW subscription_metrics AS
SELECT 
  -- Subscription counts
  (SELECT COUNT(*) FROM subscriptions) as total_subscriptions,
  (SELECT COUNT(*) FROM subscriptions WHERE status = 'active') as active_subscriptions,
  (SELECT COUNT(*) FROM subscriptions WHERE status = 'cancelled') as cancelled_subscriptions,
  (SELECT COUNT(*) FROM subscriptions WHERE status = 'past_due') as past_due_subscriptions,
  
  -- Trial counts
  (SELECT COUNT(*) FROM subscription_trials) as total_trials,
  (SELECT COUNT(*) FROM subscription_trials WHERE converted_to_paid = true) as trials_converted,
  (SELECT COUNT(*) FROM subscription_trials WHERE converted_to_paid = false) as trials_open,
  
  -- Plan distribution
  (SELECT COUNT(*) FROM subscriptions WHERE plan_type = 'free') as free_plans,
  (SELECT COUNT(*) FROM subscriptions WHERE plan_type = 'premium') as premium_plans,
  (SELECT COUNT(*) FROM subscriptions WHERE plan_type = 'family') as family_plans,
  (SELECT COUNT(*) FROM subscriptions WHERE plan_type = 'professional') as professional_plans,
  
  -- Billing distribution
  (SELECT COUNT(*) FROM subscriptions WHERE billing_period = 'monthly') as monthly_billing,
  (SELECT COUNT(*) FROM subscriptions WHERE billing_period = 'annual') as annual_billing,
  
  -- Recent activity (last 30 days)
  (SELECT COUNT(*) FROM subscriptions WHERE created_at >= NOW() - INTERVAL '30 days') as new_subscriptions_30d,
  (SELECT COUNT(*) FROM subscription_trials WHERE created_at >= NOW() - INTERVAL '30 days') as new_trials_30d,
  
  -- Timestamp for when metrics were calculated
  NOW() as calculated_at;

-- ========================================
-- SUBSCRIPTION NEXT RENEWALS VIEW
-- ========================================

-- Drop view if it exists (idempotent)
DROP VIEW IF EXISTS subscription_next_renewals;

-- Create renewals view showing upcoming subscription renewals
CREATE VIEW subscription_next_renewals AS
SELECT 
  s.id,
  s.user_id,
  s.plan_type,
  s.billing_period,
  s.status,
  s.current_period_end,
  s.current_period_start,
  -- Calculate days until renewal
  EXTRACT(EPOCH FROM (s.current_period_end - NOW())) / 86400 as days_until_renewal,
  -- Calculate renewal amount (placeholder - would integrate with billing system)
  CASE 
    WHEN s.plan_type = 'premium' AND s.billing_period = 'monthly' THEN 9.99
    WHEN s.plan_type = 'premium' AND s.billing_period = 'annual' THEN 99.99
    WHEN s.plan_type = 'family' AND s.billing_period = 'monthly' THEN 19.99
    WHEN s.plan_type = 'family' AND s.billing_period = 'annual' THEN 199.99
    WHEN s.plan_type = 'professional' AND s.billing_period = 'monthly' THEN 49.99
    WHEN s.plan_type = 'professional' AND s.billing_period = 'annual' THEN 499.99
    ELSE 0
  END as renewal_amount,
  s.created_at,
  s.updated_at
FROM subscriptions s
WHERE s.status = 'active'
  AND s.current_period_end > NOW()
  AND s.cancel_at_period_end = false
ORDER BY s.current_period_end ASC
LIMIT 50;

-- ========================================
-- VIEW PERMISSIONS
-- ========================================

-- Grant select permissions to authenticated users (same as underlying tables)
GRANT SELECT ON subscription_metrics TO authenticated;
GRANT SELECT ON subscription_next_renewals TO authenticated;

-- Add comments for documentation
COMMENT ON VIEW subscription_metrics IS 'Aggregated subscription statistics and metrics';
COMMENT ON VIEW subscription_next_renewals IS 'Upcoming subscription renewals for active subscriptions';
