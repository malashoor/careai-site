import { locales, type Locale, isRTL } from "@/lib/i18n";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { dictionary } from "@/lib/dictionary";
import PageViewTracker from "@/components/PageViewTracker";

export const dynamic = "force-static";

export function generateStaticParams() {
  return locales.map((lng) => ({ locale: lng }));
}

export function generateMetadata({ params }: { params: { locale: Locale } }) {
  const i = dictionary[params.locale];
  return { 
    title: i.metaTitle,
    description: i.metaDescription,
    openGraph: {
      title: i.metaTitle,
      description: i.metaDescription,
      url: `https://www.careai.app/${params.locale}`,
      siteName: 'CareAI',
      images: [
        {
          url: 'https://www.careai.app/images/welcome_ai_hero.png',
          width: 1200,
          height: 630,
          alt: 'CareAI - AI Companion for Seniors',
        },
      ],
      locale: params.locale,
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
  const { locale } = params;
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
