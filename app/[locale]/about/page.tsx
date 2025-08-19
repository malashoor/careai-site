"use client";

import Link from "next/link";
import { dictionary } from "@/lib/dictionary";

interface AboutPageProps {
  params: {
    locale: string;
  };
}

export default function AboutPage({ params }: AboutPageProps) {
  const { locale } = params;
  const i = dictionary[locale as keyof typeof dictionary];
  const t = i.about; // Both locales have the same structure
  const isAR = locale === "ar";

  return (
    <main dir={isAR ? "rtl" : "ltr"} className="bg-gradient-subtle">
      <div className="pt-16 md:pt-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center">{t.title}</h1>
        <p className="mt-4 text-center text-muted-foreground max-w-3xl mx-auto">
          {t.subtitle}
        </p>
      </div>

      {/* Mission */}
      <div className="mt-16 md:mt-20 grid md:grid-cols-2 gap-10">
        <section>
          <h2 className="text-2xl font-semibold">{t.mission.title}</h2>
          <p className="mt-3 leading-relaxed">{t.mission.body}</p>
        </section>

        {/* Partners invite */}
        <section className="rounded-2xl border p-6 bg-muted/30">
          <h2 className="text-2xl font-semibold">{t.partners.title}</h2>
          <p className="mt-3 leading-relaxed">{t.partners.body}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href={`/${locale}/partners`} className="btn btn-primary rounded-2xl px-5 py-2">
              {t.ctas.organizations}
            </Link>
            <Link href={`/${locale}/doctors`} className="btn rounded-2xl px-5 py-2 border">
              {t.ctas.doctors}
            </Link>
            <Link href={`/${locale}/contact`} className="btn rounded-2xl px-5 py-2 border">
              {t.ctas.contact}
            </Link>
          </div>
        </section>
      </div>

      {/* Advisory (placeholder) */}
      <div className="mt-16 md:mt-20">
        <div className="rounded-2xl border p-6 md:p-8 bg-background">
          <h2 className="text-2xl font-semibold">{t.advisory.title}</h2>
          <p className="mt-3 text-muted-foreground">{t.advisory.note}</p>
        </div>
      </div>
    </main>
  );
}
