import { locales, type Locale, isRTL } from "@/lib/i18n";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { t } from "@/lib/dictionary";

export const dynamic = "force-static";

export function generateStaticParams() {
  return locales.map((lng) => ({ locale: lng }));
}

export function generateMetadata({ params }: { params: { locale: Locale } }) {
  const i = t(params.locale);
  return { title: i.metaTitle };
}

export default function LocaleLayout({ children, params }: { children: ReactNode; params: { locale: Locale } }) {
  const { locale } = params;
  return (
    <html lang={locale} dir={isRTL(locale) ? "rtl" : "ltr"}>
      <body className={isRTL(locale) ? "font-arabic" : ""}>
        <div className="min-h-screen flex flex-col">
          <div className="container-p max-w-6xl mx-auto">
            <Navbar locale={locale} />
          </div>
          <main className="flex-1">{children}</main>
          <Footer locale={locale} />
        </div>
      </body>
    </html>
  );
}
