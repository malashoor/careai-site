import { type Locale } from "@/lib/i18n";
import { dictionary } from "@/lib/dictionary";

interface PartnerHeroProps {
  locale: Locale;
  type: "doctors" | "hospitals" | "insurance" | "charities";
}

export default function PartnerHero({ locale, type }: PartnerHeroProps) {
  const i = dictionary[locale];
  const partner = i.partners[type];

  return (
    <section className="bg-gradient-to-br from-brand-50 via-white to-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
          {partner.title}
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto">
          {partner.subtitle}
        </p>
        <div className="mt-8">
          <a
            href="#partner-form"
            className="inline-flex items-center px-8 py-4 rounded-2xl bg-brand-600 text-white font-semibold hover:bg-brand-700 transition-colors"
          >
            {i.partners.form.submit}
          </a>
        </div>
      </div>
    </section>
  );
}
