/*
  # Subscription Database Hardening Migration
  
  This migration adds performance indexes and business logic constraints
  to the subscription system without affecting existing data.
  
  Features:
  - Performance indexes for common lookups
  - One-active-subscription-per-user constraint
  - Additional business logic constraints
  - All operations are idempotent and safe to re-run
*/

-- ========================================
-- PERFORMANCE INDEXES
-- ========================================

-- Indexes for subscriptions table
CREATE INDEX IF NOT EXISTS idx_subscriptions_user_id ON subscriptions(user_id);
CREATE INDEX IF NOT EXISTS idx_subscriptions_status ON subscriptions(status);
CREATE INDEX IF NOT EXISTS idx_subscriptions_plan_type ON subscriptions(plan_type);
CREATE INDEX IF NOT EXISTS idx_subscriptions_billing_period ON subscriptions(billing_period);
CREATE INDEX IF NOT EXISTS idx_subscriptions_current_period_end ON subscriptions(current_period_end);
CREATE INDEX IF NOT EXISTS idx_subscriptions_created_at ON subscriptions(created_at);

-- Indexes for subscription_trials table
CREATE INDEX IF NOT EXISTS idx_subscription_trials_user_id ON subscription_trials(user_id);
CREATE INDEX IF NOT EXISTS idx_subscription_trials_plan_type ON subscription_trials(plan_type);
CREATE INDEX IF NOT EXISTS idx_subscription_trials_end_date ON subscription_trials(end_date);
CREATE INDEX IF NOT EXISTS idx_subscription_trials_converted ON subscription_trials(converted_to_paid);
CREATE INDEX IF NOT EXISTS idx_subscription_trials_created_at ON subscription_trials(created_at);

-- ========================================
-- BUSINESS LOGIC CONSTRAINTS
-- ========================================

-- Partial unique index: one active subscription per user
-- This prevents multiple active subscriptions for the same user
CREATE UNIQUE INDEX IF NOT EXISTS idx_subscriptions_one_active_per_user 
ON subscriptions(user_id) 
WHERE status = 'active';

-- Add constraint to ensure current_period_end is after current_period_start
ALTER TABLE subscriptions 
DROP CONSTRAINT IF EXISTS check_period_dates;

ALTER TABLE subscriptions 
ADD CONSTRAINT check_period_dates 
CHECK (current_period_end > current_period_start);

-- Add constraint to ensure end_date is after start_date for trials
ALTER TABLE subscription_trials 
DROP CONSTRAINT IF EXISTS check_trial_dates;

ALTER TABLE subscription_trials 
ADD CONSTRAINT check_trial_dates 
CHECK (end_date > start_date);

-- ========================================
-- ADDITIONAL SAFETY CONSTRAINTS
-- ========================================

-- Ensure user_id is not null (redundant but explicit)
ALTER TABLE subscriptions 
ALTER COLUMN user_id SET NOT NULL;

ALTER TABLE subscription_trials 
ALTER COLUMN user_id SET NOT NULL;

-- Add comment for documentation
COMMENT ON TABLE subscriptions IS 'User subscription data with one-active-per-user constraint';
COMMENT ON TABLE subscription_trials IS 'User trial data for premium plans';
COMMENT ON INDEX idx_subscriptions_one_active_per_user IS 'Ensures only one active subscription per user';
