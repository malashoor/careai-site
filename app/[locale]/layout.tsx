import { locales, type Locale, isRTL, defaultLocale } from "../../lib/i18n";
import { ReactNode } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { dictionary } from "../../lib/dictionary";
import PageViewTracker from "../../components/PageViewTracker";

export const dynamic = "force-static";

export function generateStaticParams() {
  return locales.map((lng) => ({ locale: lng }));
}

export function generateMetadata({ params }: { params: { locale: Locale } }) {
  // Validate locale parameter and fallback to default
  const locale = params?.locale && locales.includes(params.locale as Locale) 
    ? params.locale as Locale 
    : defaultLocale;
  
  const i = dictionary[locale];
  
  // Ensure we have valid dictionary data
  if (!i) {
    console.error(`Invalid locale or missing dictionary for: ${locale}`);
    return {
      title: "CareAI - AI-Powered Healthcare Solutions",
      description: "AI companion for seniors with medication reminders, health check-ins, and SOS alerts.",
    };
  }
  
  return { 
    title: i.metaTitle,
    description: i.metaDescription,
    openGraph: {
      title: i.metaTitle,
      description: i.metaDescription,
      url: `https://www.careai.app/${locale}`,
      siteName: 'CareAI',
      images: [
        {
          url: 'https://www.careai.app/images/welcome_ai_hero.png',
          width: 1200,
          height: 630,
          alt: 'CareAI - AI Companion for Seniors',
        },
      ],
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: i.metaTitle,
      description: i.metaDescription,
      images: ['https://www.careai.app/images/welcome_ai_hero.png'],
    },
  };
}

export default function LocaleLayout({ children, params }: { children: ReactNode; params: { locale: Locale } }) {
  // Validate locale parameter and fallback to default
  const locale = params?.locale && locales.includes(params.locale as Locale) 
    ? params.locale as Locale 
    : defaultLocale;
  
  const dir = isRTL(locale) ? "rtl" : "ltr";
  
  return (
    <div dir={dir} className={isRTL(locale) ? "font-arabic" : "font-sans"}>
      <PageViewTracker locale={locale} />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} />
      </div>
    </div>
  );
}
