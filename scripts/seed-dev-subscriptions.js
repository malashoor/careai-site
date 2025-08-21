#!/usr/bin/env node

/**
 * Dev-Only Subscription Seeding Script
 * 
 * This script seeds test subscription data for development purposes only.
 * It will NEVER run in production and requires explicit environment setup.
 * 
 * Usage:
 *   NODE_ENV=development TEST_USER_ID=<uuid> node scripts/seed-dev-subscriptions.js
 */

const { createClient } = require('@supabase/supabase-js');

// Safety check - NEVER run in production
if (process.env.NODE_ENV === 'production') {
  console.error('❌ This script is for development only and cannot run in production!');
  process.exit(1);
}

// Check for required environment variables
const requiredEnvVars = [
  'SUPABASE_URL',
  'SUPABASE_SERVICE_ROLE_KEY',
  'TEST_USER_ID'
];

for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    console.error(`❌ Missing required environment variable: ${envVar}`);
    console.error('Please set all required environment variables before running this script.');
    process.exit(1);
  }
}

// Initialize Supabase client with service role key
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const TEST_USER_ID = process.env.TEST_USER_ID;

async function seedDevSubscriptions() {
  console.log('🌱 Starting dev subscription seeding...');
  console.log(`📝 Test User ID: ${TEST_USER_ID}`);
  console.log(`🔒 Environment: ${process.env.NODE_ENV}`);
  
  try {
    // 1. Create a test subscription
    console.log('\n📊 Creating test subscription...');
    const subscriptionData = {
      user_id: TEST_USER_ID,
      plan_type: 'premium',
      billing_period: 'monthly',
      status: 'active',
      current_period_start: new Date().toISOString(),
      current_period_end: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
      cancel_at_period_end: false,
      payment_method: { type: 'test', last4: '1234' }
    };

    const { data: subscription, error: subError } = await supabase
      .from('subscriptions')
      .insert(subscriptionData)
      .select()
      .single();

    if (subError) {
      throw new Error(`Failed to create subscription: ${subError.message}`);
    }

    console.log('✅ Test subscription created:', subscription.id);

    // 2. Create a test trial
    console.log('\n🆓 Creating test trial...');
    const trialData = {
      user_id: TEST_USER_ID,
      plan_type: 'family',
      start_date: new Date().toISOString(),
      end_date: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
      converted_to_paid: false
    };

    const { data: trial, error: trialError } = await supabase
      .from('subscription_trials')
      .insert(trialData)
      .select()
      .single();

    if (trialError) {
      throw new Error(`Failed to create trial: ${trialError.message}`);
    }

    console.log('✅ Test trial created:', trial.id);

    // 3. Verify the data was created
    console.log('\n🔍 Verifying seeded data...');
    
    const { count: subCount } = await supabase
      .from('subscriptions')
      .select('*', { count: 'exact', head: true });

    const { count: trialCount } = await supabase
      .from('subscription_trials')
      .select('*', { count: 'exact', head: true });

    console.log(`📊 Total subscriptions: ${subCount}`);
    console.log(`🆓 Total trials: ${trialCount}`);

    console.log('\n🎉 Dev subscription seeding completed successfully!');
    console.log('\n📋 Summary:');
    console.log(`   • Created subscription: ${subscription.id}`);
    console.log(`   • Created trial: ${trial.id}`);
    console.log(`   • Test user: ${TEST_USER_ID}`);
    console.log(`   • Environment: ${process.env.NODE_ENV}`);
    
    console.log('\n🧪 You can now test the subscription system with this data.');
    console.log('   Run: curl http://localhost:3000/api/diag/subscriptions');

  } catch (error) {
    console.error('❌ Error seeding dev subscriptions:', error.message);
    process.exit(1);
  }
}

// Run the seeding function
seedDevSubscriptions();
