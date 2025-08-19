"use client";

import { type Locale } from "@/lib/i18n";
import PartnerHero from "@/components/PartnerHero";
import ValueProps from "@/components/ValueProps";
import WorkflowDiagram from "@/components/WorkflowDiagram";
import CaseStudy from "@/components/CaseStudy";
import PartnerForm from "@/components/PartnerForm";
import { trackEvents } from "@/lib/analytics";

export default function DoctorsPage({ params: { locale } }: { params: { locale: "en" | "ar" } }) {
  return (
    <main>
      <PartnerHero locale={locale} type="doctors" />
      <ValueProps locale={locale} type="doctors" />
      <WorkflowDiagram locale={locale} type="doctors" />
      <CaseStudy locale={locale} />
      <section className="py-16 bg-brand-50">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                {locale === "ar" ? "انضم إلينا كشريك" : "Partner With Us"}
              </h2>
              <p className="text-lg text-slate-600">
                {locale === "ar"
                  ? "ساعد في تحسين رعاية المرضى من خلال الذكاء الاصطناعي"
                  : "Help improve patient care with AI"
                }
              </p>
            </div>
            <PartnerForm type="doctors" locale={locale} />
          </div>
        </div>
      </section>
    </main>
  );
}
