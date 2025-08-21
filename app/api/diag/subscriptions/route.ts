import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabaseAdmin';

export async function GET() {
  try {
    // Query subscriptions table - limit to 1000 rows for safety
    const { data: subscriptions, error: subError } = await supabaseAdmin
      .from('subscriptions')
      .select('plan_type, billing_period, status')
      .limit(1000);

    if (subError) {
      return NextResponse.json({ 
        ok: false, 
        error: 'Failed to query subscriptions table',
        details: subError.message 
      }, { status: 500 });
    }

    // Query subscription_trials table - limit to 1000 rows for safety
    const { data: trials, error: trialError } = await supabaseAdmin
      .from('subscription_trials')
      .select('plan_type, converted_to_paid')
      .limit(1000);

    if (trialError) {
      return NextResponse.json({ 
        ok: false, 
        error: 'Failed to query subscription_trials table',
        details: trialError.message 
      }, { status: 500 });
    }

    // Check if subscription_metrics view exists
    let metrics = null;
    try {
      const { data: metricsData, error: metricsError } = await supabaseAdmin
        .from('subscription_metrics')
        .select('*')
        .limit(1);
      
      if (!metricsError && metricsData && metricsData.length > 0) {
        metrics = metricsData[0];
      }
    } catch (viewError) {
      // View doesn't exist, which is fine
      console.log('subscription_metrics view not found, omitting gracefully');
    }

    // Generate breakdowns
    const subscriptionBreakdown = {
      total: subscriptions?.length || 0,
      by_plan: subscriptions?.reduce((acc, sub) => {
        acc[sub.plan_type] = (acc[sub.plan_type] || 0) + 1;
        return acc;
      }, {} as Record<string, number>) || {},
      by_billing: subscriptions?.reduce((acc, sub) => {
        acc[sub.billing_period] = (acc[sub.billing_period] || 0) + 1;
        return acc;
      }, {} as Record<string, number>) || {},
      by_status: subscriptions?.reduce((acc, sub) => {
        acc[sub.status] = (acc[sub.status] || 0) + 1;
        return acc;
      }, {} as Record<string, number>) || {}
    };

    const trialBreakdown = {
      total: trials?.length || 0,
      by_plan: trials?.reduce((acc, trial) => {
        acc[trial.plan_type] = (acc[trial.plan_type] || 0) + 1;
        return acc;
      }, {} as Record<string, number>) || {},
      converted: trials?.filter(t => t.converted_to_paid).length || 0,
      open: trials?.filter(t => !t.converted_to_paid).length || 0
    };

    return NextResponse.json({
      ok: true,
      subscriptions: subscriptionBreakdown,
      trials: trialBreakdown,
      metrics: metrics,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Error querying subscription data:', error);
    return NextResponse.json({ 
      ok: false, 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
