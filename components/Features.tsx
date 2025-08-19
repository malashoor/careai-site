"use client";

import { dictionary } from "@/lib/dictionary";
import { trackEvents } from "@/lib/analytics";
import { Check, Heart, Shield, Zap } from "lucide-react";
import Icon from "@/components/Ui/Icon";
import Link from "next/link";
import { getGetStartedHref, isAppStoreLink, isDeepLink } from "@/lib/cta";

interface FeaturesProps {
  locale: "en" | "ar";
}

export default function Features({ locale }: FeaturesProps) {
  const i = dictionary[locale];

  const handleFeatureClick = (featureTitle: string) => {
    trackEvents.ctaFeature(featureTitle, locale);
  };

  const features = [
    {
      icon: <Icon as={Check} className="text-brand-blue" />,
      title: i.features.items[0]?.title || "Smart Reminders",
      description: i.features.items[0]?.description || "Never miss a dose with intelligent medication scheduling",
      slug: "smart-reminders"
    },
    {
      icon: <Icon as={Heart} className="text-brand-blue" />,
      title: i.features.items[1]?.title || "Health Monitoring",
      description: i.features.items[1]?.description || "Track vital signs and health trends over time",
      slug: "health-monitoring"
    },
    {
      icon: <Icon as={Shield} className="text-brand-blue" />,
      title: i.features.items[2]?.title || "Emergency Alerts",
      description: i.features.items[2]?.description || "Instant SOS notifications to caregivers and family",
      slug: "emergency-alerts"
    },
    {
      icon: <Icon as={Zap} className="text-brand-blue" />,
      title: i.features.items[3]?.title || "AI Companion",
      description: i.features.items[3]?.description || "Friendly AI that provides daily check-ins and support",
      slug: "ai-companion"
    },
  ];

  const getStartedHref = getGetStartedHref(locale);

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ink-900 mb-6">
            {i.features.title}
          </h2>
          <p className="text-xl text-ink-500 max-w-3xl mx-auto">
            {i.features.subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Link
              key={index}
              href={`/${locale}/features#${feature.slug}`}
              className="group relative block rounded-2xl border border-ink-150 bg-white p-6 shadow-[0_6px_24px_rgba(16,24,40,.05)] transition-all duration-200 hover:shadow-[0_8px_32px_rgba(16,24,40,.08)] hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-brand-blue ink-on-light cursor-pointer"
              onClick={() => handleFeatureClick(feature.title)}
            >
              {/* Feature Icon */}
              <div className="w-16 h-16 bg-ink-50 rounded-xl2 flex items-center justify-center mx-auto mb-4 group-hover:bg-ink-100 transition-colors">
                {feature.icon}
              </div>

              {/* Feature Content */}
              <h3 className="text-2xl font-semibold text-ink-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-ink-500 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover indicator */}
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-link text-sm font-medium">
                  {locale === "ar" ? "تعرف على المزيد" : "Learn more"} →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-ink-900 mb-4">
              {locale === "ar" ? "ابدأ رحلتك مع CareAI" : "Start Your CareAI Journey"}
            </h3>
            <p className="text-ink-500 mb-6">
              {locale === "ar" 
                ? "انضم إلى آلاف العائلات ومقدمي الرعاية الذين يثقون بنا"
                : "Join thousands of families and caregivers who trust us"
              }
            </p>
            <Link
              href={getStartedHref}
              className="btn btn-primary"
              onClick={() => trackEvents.ctaGetStarted(locale)}
              {...(isAppStoreLink() && { target: "_blank", rel: "noopener noreferrer" })}
              {...(isDeepLink() && { "data-deeplink": "true" })}
            >
              {locale === "ar" ? "ابدأ الآن" : "Get Started"}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
