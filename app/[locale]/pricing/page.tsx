"use client";

import { useState } from 'react';
import { dictionary } from "@/lib/dictionary";
import { trackEvents } from "@/lib/analytics";

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
  trialEligible?: boolean;
}

export default function PricingPage({ params: { locale } }: { params: { locale: "en" | "ar" } }) {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');
  const i = dictionary[locale];
  const isAR = locale === 'ar';

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
      trialEligible: true
    }
  ];

  const getLocalizedContent = (tier: PricingTier) => ({
    name: isAR ? tier.nameAr : tier.name,
    features: isAR ? tier.featuresAr : tier.features
  });

  return (
    <main className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {isAR ? 'أسعار بسيطة وشفافة' : 'Simple, Transparent Pricing'}
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {isAR 
              ? 'اختر الخطة التي تناسب احتياجاتك واحتياجات عائلتك'
              : 'Choose the plan that fits your needs and your family'
            }
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-100 rounded-2xl p-1">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-3 rounded-xl font-semibold transition-colors ${
                billingPeriod === 'monthly'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {isAR ? 'شهري' : 'Monthly'}
            </button>
            <button
              onClick={() => setBillingPeriod('annual')}
              className={`px-6 py-3 rounded-xl font-semibold transition-colors ${
                billingPeriod === 'annual'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {isAR ? 'سنوي' : 'Annual'}
              <span className="ml-2 text-sm text-green-600">
                {isAR ? '(17% خصم)' : '(17% off)'}
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingTiers.map((tier, index) => {
            const localized = getLocalizedContent(tier);
            const price = billingPeriod === 'monthly' ? tier.price.monthly : tier.price.annual;
            const period = billingPeriod === 'monthly' 
              ? (isAR ? '/شهر' : '/month') 
              : (isAR ? '/سنة' : '/year');

            return (
              <div
                key={tier.name}
                className={`bg-white rounded-2xl p-8 shadow-sm border-2 flex flex-col ${
                  tier.popular 
                    ? "border-blue-500 ring-2 ring-blue-500/20 relative" 
                    : "border-slate-200"
                }`}
              >
                {tier.popular && (
                  <div className="inline-block bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
                    {isAR ? 'الأكثر شعبية' : 'Most Popular'}
                  </div>
                )}

                <h3 className="text-2xl font-bold text-slate-900 mb-2">{localized.name}</h3>
                
                <div className="mb-4">
                  <span className="text-4xl font-bold text-slate-900">${price}</span>
                  <span className="text-slate-600 ml-2">{period}</span>
                </div>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {localized.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="/en/onboarding"
                  className={`block w-full py-3 px-6 rounded-xl font-semibold text-center transition-colors ${
                    tier.popular
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                  }`}
                  onClick={() => trackEvents.ctaStartTrial(locale)}
                >
                  {tier.trialEligible 
                    ? (isAR ? 'ابدأ التجربة المجانية' : 'Start Free Trial')
                    : (isAR ? 'ابدأ الآن' : 'Get Started')
                  }
                </a>

                {tier.trialEligible && (
                  <p className="text-xs text-slate-500 text-center mt-3">
                    {isAR ? 'تجربة مجانية لمدة 14 يوم' : '14-day free trial'}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Information */}
        <div className="mt-16 text-center">
          <div className="bg-slate-50 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              {isAR ? 'أسئلة شائعة' : 'Frequently Asked Questions'}
            </h3>
            <div className="space-y-4 text-left">
              <div>
                <h4 className="font-medium text-slate-900 mb-2">
                  {isAR ? 'هل يمكنني إلغاء الاشتراك في أي وقت؟' : 'Can I cancel my subscription anytime?'}
                </h4>
                <p className="text-slate-600 text-sm">
                  {isAR 
                    ? 'نعم، يمكنك إلغاء اشتراكك في أي وقت. لن يتم خصم أي رسوم إضافية.'
                    : 'Yes, you can cancel your subscription at any time. No additional charges will be applied.'
                  }
                </p>
              </div>
              <div>
                <h4 className="font-medium text-slate-900 mb-2">
                  {isAR ? 'هل التجربة المجانية تتطلب بطاقة ائتمان؟' : 'Does the free trial require a credit card?'}
                </h4>
                <p className="text-slate-600 text-sm">
                  {isAR 
                    ? 'لا، التجربة المجانية لا تتطلب بطاقة ائتمان. يمكنك البدء مجاناً.'
                    : 'No, the free trial does not require a credit card. You can start completely free.'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
