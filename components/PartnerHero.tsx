import { dictionary } from "@/lib/dictionary";

interface PartnerHeroProps {
  locale: "en" | "ar";
  type: "doctors" | "hospitals" | "insurance" | "charities";
}

export default function PartnerHero({ locale, type }: PartnerHeroProps) {
  const i = dictionary[locale];
  const partner = i.partners[type];

  return (
    <section className="py-20 bg-gradient-to-br from-brand-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
          {partner.title}
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto">
          {partner.subtitle}
        </p>
      </div>
    </section>
  );
}
