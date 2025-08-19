"use client";

import { dictionary } from "@/lib/dictionary";
import { trackEvents } from "@/lib/analytics";
import { Check } from "lucide-react";
import Icon from "@/components/Ui/Icon";

interface PricingProps {
  locale: "en" | "ar";
}

export default function Pricing({ locale }: PricingProps) {
  const i = dictionary[locale];

  const handlePricingClick = (tierName: string, tierPrice: string) => {
    trackEvents.ctaPricing(tierName, tierPrice, locale);
  };

  return (
    <section className="py-20 bg-ink-50">
      <div className="mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ink-900 mb-6">
            {i.pricing.title}
          </h2>
          <p className="text-xl text-ink-500 max-w-3xl mx-auto">
            {i.pricing.subtitle}
          </p>
        </div>

        {/* Pricing Tiers */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {i.pricing.tiers.map((tier, index) => (
            <div
              key={index}
              className={`card p-8 relative ink-on-light ${
                tier.popular ? 'ring-2 ring-brand-blue shadow-lift' : ''
              }`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-brand-blue text-white px-4 py-2 rounded-pill text-sm font-medium">
                    {locale === "ar" ? "الأكثر شعبية" : "Most Popular"}
                  </span>
                </div>
              )}

              {/* Tier Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-ink-900 mb-2">
                  {tier.name}
                </h3>
                <p className="text-ink-500 mb-4">
                  {tier.description}
                </p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-ink-900">
                    ${tier.price}
                  </span>
                  <span className="text-ink-500 ml-1">
                    {tier.period}
                  </span>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Icon as={Check} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-ink-600">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={() => handlePricingClick(tier.name, tier.price)}
                className={`w-full ${
                  tier.popular ? "btn btn-primary" : "btn btn-ghost"
                }`}
              >
                {tier.cta.text}
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <div className="card p-6 max-w-2xl mx-auto ink-on-light">
            <p className="text-ink-500 mb-4">
              {locale === "ar" 
                ? "جميع الخطط تشمل دعم العملاء وضمان استرداد الأموال لمدة 30 يوماً"
                : "All plans include customer support and 30-day money-back guarantee"
              }
            </p>
            <p className="text-sm text-ink-400">
              {locale === "ar"
                ? "هل لديك أسئلة؟ تواصل مع فريق الدعم لدينا"
                : "Have questions? Contact our support team"
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
