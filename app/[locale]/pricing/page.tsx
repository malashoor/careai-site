"use client";

import { dictionary } from "@/lib/dictionary";
import { trackEvents } from "@/lib/analytics";

export default function PricingPage({ params: { locale } }: { params: { locale: "en" | "ar" } }) {
  const i = dictionary[locale];

  return (
    <main className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {i.pricing.title}
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {i.pricing.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {i.pricing.tiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`bg-white rounded-2xl p-8 shadow-sm border-2 ${
                tier.popular ? "border-brand-500 ring-2 ring-brand-500/20" : "border-slate-200"
              }`}
            >
              {tier.popular && (
                <div className="inline-block bg-brand-500 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
                  {locale === "ar" ? "الأكثر شعبية" : "Most Popular"}
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{tier.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-slate-900">${tier.price}</span>
                <span className="text-slate-600 ml-2">
                  {locale === "ar" ? "/شهر" : "/month"}
                </span>
              </div>
              
              <p className="text-slate-600 mb-6">{tier.description}</p>
              
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href={tier.cta.href}
                className={`block w-full py-3 px-6 rounded-xl font-semibold text-center transition-colors ${
                  tier.popular
                    ? "bg-brand-600 text-white hover:bg-brand-700"
                    : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                }`}
                onClick={() => trackEvents.ctaStartTrial(locale)}
              >
                {tier.cta.text}
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
