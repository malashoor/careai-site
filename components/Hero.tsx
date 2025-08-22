"use client";

import { dictionary } from "@/lib/dictionary";
import { trackEvents } from "@/lib/analytics";
import SmartLink from "@/components/Ui/SmartLink";
import { getGetStartedHref, getLearnMoreHref, isAppStoreLink, isDeepLink } from "@/lib/cta";

interface HeroProps {
  locale: "en" | "ar" | "es" | "fr" | "de" | "zh" | "ja" | "ko" | "hi" | "pt";
}

export default function Hero({ locale }: HeroProps) {
  const i = dictionary[locale];
  const isRTL = locale === "ar";

  const handleCTAClick = (type: "primary" | "secondary") => {
    trackEvents.ctaHero(type, locale);
  };

  const getStartedHref = getGetStartedHref(locale);
  const learnMoreHref = getLearnMoreHref(locale);

  return (
    <section className="relative section bg-white">
      <div className="mx-auto max-w-5xl px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-ink-900 mb-6 leading-tight">
            {i.hero.title}
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-ink-500 mb-8 leading-relaxed max-w-3xl mx-auto">
            {i.hero.subtitle}
          </p>

          {/* CTA Buttons - Ensure they're always on top */}
          <div className="relative z-20 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <SmartLink
              href={getStartedHref}
              variant="button"
              aria-label="Get started with CareAI"
              onClick={() => handleCTAClick("primary")}
              {...(isAppStoreLink() && { target: "_blank", rel: "noopener noreferrer" })}
              {...(isDeepLink() && { "data-deeplink": "true" })}
              className="cursor-pointer relative z-10"
            >
              {i.hero.ctaPrimary}
            </SmartLink>
            <SmartLink
              href={learnMoreHref}
              variant="ghost"
              aria-label="Learn more about CareAI features"
              onClick={() => handleCTAClick("secondary")}
              className="cursor-pointer relative z-10"
            >
              {i.hero.ctaSecondary}
            </SmartLink>
          </div>

          {/* Trust indicators - Ensure they don't interfere with CTAs */}
          <div className="relative z-10 mt-12 pt-8 border-t border-ink-150 ink-on-light pointer-events-none">
            <p className="text-sm text-ink-400 mb-4">
              {locale === "ar" ? "مستخدم من قبل آلاف العائلات ومقدمي الرعاية" : "Trusted by thousands of families and caregivers"}
            </p>
            <div className="flex justify-center items-center space-x-8 text-ink-500">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🛡️</span>
                <span className="text-sm font-medium">
                  {locale === "ar" ? "آمن ومحمي" : "Safe & Secure"}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">⚡</span>
                <span className="text-sm font-medium">
                  {locale === "ar" ? "سهل الاستخدام" : "Easy to Use"}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">💙</span>
                <span className="text-sm font-medium">
                  {locale === "ar" ? "مصمم للعائلة" : "Family-First"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
