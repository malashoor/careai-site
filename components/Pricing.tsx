"use client";

import { useState } from 'react';
import { dictionary } from '@/lib/dictionary';

interface PricingTier {
  name: string;
  nameAr: string;
  price: {
    monthly: number;
    annual: number;
  };
  features: string[];
  featuresAr: string[];
  popular?: boolean;
  comingSoon?: boolean;
  enterprise?: boolean;
  trialEligible?: boolean;
}

export default function Pricing({ locale = 'en' as 'en' | 'ar' }) {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');
  const i = dictionary[locale];

  const pricingTiers: PricingTier[] = [
    {
      name: 'Essential',
      nameAr: 'أساسي',
      price: { monthly: 9.99, annual: 99.99 },
      features: [
        'Basic health monitoring',
        'Medication tracking',
        'Appointment scheduling',
        'Voice messaging (limited)',
        'Community support'
      ],
      featuresAr: [
        'مراقبة صحية أساسية',
        'تتبع الأدوية',
        'جدولة المواعيد',
        'رسائل صوتية (محدودة)',
        'دعم المجتمع'
      ],
      trialEligible: false
    },
    {
      name: 'Standard',
      nameAr: 'قياسي',
      price: { monthly: 14.99, annual: 149.99 },
      features: [
        'Everything in Essential',
        'Advanced health analytics',
        'AI health insights',
        'Priority medical support',
        'Unlimited voice messaging',
        'Video consultations',
        'Personalized exercise plans',
        'Health data export'
      ],
      featuresAr: [
        'كل ما في الخطة الأساسية',
        'تحليلات صحية متقدمة',
        'رؤى صحية بالذكاء الاصطناعي',
        'دعم طبي ذو أولوية',
        'رسائل صوتية غير محدودة',
        'استشارات فيديو',
        'خطط تمارين شخصية',
        'تصدير البيانات الصحية'
      ],
      popular: true,
      trialEligible: true
    },
    {
      name: 'Premium',
      nameAr: 'مميز',
      price: { monthly: 29.99, annual: 299.99 },
      features: [
        'Everything in Standard',
        'Advanced fall detection',
        'Emergency response system',
        '24/7 medical monitoring',
        'Custom health alerts',
        'Priority customer support',
        'Advanced reporting',
        'API access'
      ],
      featuresAr: [
        'كل ما في الخطة القياسية',
        'كشف السقوط المتقدم',
        'نظام الاستجابة للطوارئ',
        'مراقبة طبية على مدار الساعة',
        'تنبيهات صحية مخصصة',
        'دعم العملاء ذو أولوية',
        'تقارير متقدمة',
        'وصول API'
      ],
      trialEligible: true
    },
    {
      name: 'Family Care',
      nameAr: 'رعاية عائلية',
      price: { monthly: 69.99, annual: 699.99 },
      features: [
        'Everything in Premium',
        'Up to 5 family members',
        'Family dashboard',
        'Shared medical records',
        'Care coordination tools',
        'Group activities',
        'Family chat',
        'Emergency notifications'
      ],
      featuresAr: [
        'كل ما في الخطة المميزة',
        'حتى 5 أفراد من العائلة',
        'لوحة تحكم عائلية',
        'سجلات طبية مشتركة',
        'أدوات تنسيق الرعاية',
        'أنشطة جماعية',
        'دردشة عائلية',
        'إشعارات الطوارئ'
      ],
      comingSoon: true
    },
    {
      name: 'Professional',
      nameAr: 'احترافي',
      price: { monthly: 119.99, annual: 1199.99 },
      features: [
        'Everything in Family Care',
        '5 user licenses included',
        'Professional health reports',
        'Team management tools',
        'Advanced analytics dashboard',
        'Priority support',
        'Custom integrations',
        'HIPAA compliance'
      ],
      featuresAr: [
        'كل ما في خطة الرعاية العائلية',
        '5 تراخيص مستخدم مدمجة',
        'تقارير صحية احترافية',
        'أدوات إدارة الفريق',
        'لوحة تحكم تحليلات متقدمة',
        'دعم ذو أولوية',
        'تكاملات مخصصة',
        'امتثال HIPAA'
      ],
      comingSoon: true
    },
    {
      name: 'Enterprise',
      nameAr: 'مؤسسات',
      price: { monthly: 249.99, annual: 2999.99 },
      features: [
        'Everything in Professional',
        'Unlimited users',
        'Custom contract terms',
        'Dedicated account manager',
        'White-label options',
        'Advanced security features',
        'Custom development',
        'SLA guarantees'
      ],
      featuresAr: [
        'كل ما في الخطة الاحترافية',
        'مستخدمين غير محدودين',
        'شروط عقد مخصصة',
        'مدير حساب مخصص',
        'خيارات العلامة البيضاء',
        'ميزات أمان متقدمة',
        'تطوير مخصص',
        'ضمانات SLA'
      ],
      enterprise: true
    }
  ];

  const handlePricingClick = (planName: string, price: number) => {
    if (planName === 'Enterprise' || planName === 'مؤسسات') {
      // Redirect to contact sales form
      window.location.href = `/${locale}/contact?plan=enterprise`;
      return;
    }

    if (pricingTiers.find(tier => tier.name === planName || tier.nameAr === planName)?.comingSoon) {
      // Show coming soon message
      const message = locale === 'ar' 
        ? `خطة ${planName} قريباً! نحن نعمل بجد لجلب هذه الخطة الرائعة.`
        : `${planName} plan is coming soon! We're working hard to bring you this amazing plan.`;
      alert(message);
      return;
    }

    // Handle regular plan selection
    console.log(`Selected plan: ${planName} at $${price}/${billingPeriod}`);
    // TODO: Integrate with Stripe checkout
  };

  const getAnnualSavings = (monthly: number, annual: number) => {
    const monthlyTotal = monthly * 12;
    const savings = monthlyTotal - annual;
    const savingsPercent = Math.round((savings / monthlyTotal) * 100);
    return { savings, savingsPercent };
  };

  const getLocalizedContent = (tier: PricingTier) => {
    return {
      name: locale === 'ar' ? tier.nameAr : tier.name,
      features: locale === 'ar' ? tier.featuresAr : tier.features
    };
  };

  return (
    <section className="py-16 lg:py-24" id="pricing">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            {locale === 'ar' ? 'خطط الاشتراك' : 'Simple, Transparent Pricing'}
          </h2>
          <p className="mt-6 text-lg leading-8 text-ink-600">
            {locale === 'ar' 
              ? 'اختر الخطة المناسبة لاحتياجاتك الصحية. جميع الخطط تشمل دعم العملاء وضمان استرداد الأموال لمدة 30 يوماً.'
              : 'Choose the plan that fits your health needs. All plans include customer support and 30-day money-back guarantee.'
            }
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="mt-12 flex justify-center">
          <div className="relative rounded-lg bg-ink-100 p-1">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`relative rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                billingPeriod === 'monthly'
                  ? 'bg-white text-ink-900 shadow-sm'
                  : 'text-ink-600 hover:text-ink-900'
              }`}
            >
              {locale === 'ar' ? 'شهرياً' : 'Monthly'}
            </button>
            <button
              onClick={() => setBillingPeriod('annual')}
              className={`relative rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                billingPeriod === 'annual'
                  ? 'bg-white text-ink-900 shadow-sm'
                  : 'text-ink-600 hover:text-ink-900'
              }`}
            >
              {locale === 'ar' ? 'سنوياً' : 'Annual'}
              <span className="ml-1 text-xs text-green-600">
                {locale === 'ar' ? '(توفير 17%)' : '(Save 17%)'}
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:gap-6">
          {pricingTiers.map((tier, index) => {
            const currentPrice = billingPeriod === 'monthly' ? tier.price.monthly : tier.price.annual;
            const annualSavings = getAnnualSavings(tier.price.monthly, tier.price.annual);
            const localized = getLocalizedContent(tier);
            
            return (
              <div
                key={index}
                className={`card p-8 relative ink-on-light flex flex-col ${
                  tier.popular ? 'ring-2 ring-brand-blue shadow-lift' : ''
                } ${tier.comingSoon ? 'opacity-75' : ''}`}
              >
                {/* Popular Badge */}
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-brand-blue text-white px-4 py-1 rounded-full text-sm font-medium">
                      {locale === 'ar' ? 'الأكثر شعبية' : 'Most Popular'}
                    </span>
                  </div>
                )}

                {/* Coming Soon Badge */}
                {tier.comingSoon && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-ink-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      {locale === 'ar' ? 'قريباً' : 'Coming Soon'}
                    </span>
                  </div>
                )}

                {/* Enterprise Badge */}
                {tier.enterprise && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      {locale === 'ar' ? 'مؤسسي' : 'Enterprise'}
                    </span>
                  </div>
                )}

                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-ink-900">{localized.name}</h3>

                {/* Price */}
                <div className="mt-4">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-ink-900">${currentPrice}</span>
                    <span className="ml-2 text-lg text-ink-600">
                      /{billingPeriod === 'monthly' ? (locale === 'ar' ? 'شهر' : 'month') : (locale === 'ar' ? 'سنة' : 'year')}
                    </span>
                  </div>
                  
                  {/* Annual Savings */}
                  {billingPeriod === 'annual' && (
                    <p className="mt-2 text-sm text-green-600">
                      {locale === 'ar' 
                        ? `توفير $${annualSavings.savings} سنوياً (${annualSavings.savingsPercent}%)`
                        : `Save $${annualSavings.savings}/year (${annualSavings.savingsPercent}% off)`
                      }
                    </p>
                  )}
                </div>

                {/* Features */}
                <ul className="mt-8 space-y-4 flex-grow">
                  {localized.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="ml-3 text-ink-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={() => handlePricingClick(localized.name, currentPrice)}
                  className={`w-full mt-auto ${
                    tier.popular ? "btn btn-primary" : "btn btn-ghost"
                  } ${tier.comingSoon ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={tier.comingSoon}
                >
                  {tier.enterprise 
                    ? (locale === 'ar' ? 'اتصل بالمبيعات' : 'Contact Sales')
                    : tier.comingSoon
                    ? (locale === 'ar' ? 'قريباً' : 'Coming Soon')
                    : tier.trialEligible
                    ? (locale === 'ar' ? 'ابدأ التجربة المجانية' : 'Start Free Trial')
                    : (locale === 'ar' ? 'ابدأ الآن' : 'Get Started')
                  }
                </button>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <div className="card p-6 max-w-2xl mx-auto ink-on-light">
            <p className="text-ink-500 mb-2">
              {locale === "ar" 
                ? "جميع الخطط تشمل دعم العملاء وضمان استرداد الأموال لمدة 30 يوماً • هل لديك أسئلة؟ تواصل مع فريق الدعم لدينا"
                : "All plans include customer support and 30-day money-back guarantee • Have questions? Contact our support team"
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
