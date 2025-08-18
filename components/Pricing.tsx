import Container from "./Container";
import { type Locale } from "@/lib/i18n";
import { dictionary } from "@/lib/dictionary";

export default function Pricing({ locale }: { locale: Locale }) {
  const i = dictionary[locale];
  const tiers = i.pricing.tiers;
  return (
    <section id="pricing" className="mt-16">
      <Container>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-bold">{i.pricing.title}</h2>
          <span className="text-sm text-slate-600">Monthly</span>
        </div>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tiers.map((tier, idx) => (
            <div key={tier.name} className={"card p-6 " + (idx === 1 ? "ring-2 ring-brand-500" : "")}>
              {idx === 1 && <p className="text-xs uppercase tracking-widest text-brand-700 mb-2">Most Popular</p>}
              <h3 className="text-xl font-bold">{tier.name}</h3>
              <p className="text-4xl font-extrabold mt-2">{tier.price}<span className="text-base font-normal text-slate-500">/mo</span></p>
              <ul className="mt-4 text-sm text-slate-700 space-y-2">
                {tier.features.map((f) => <li key={f}>• {f}</li>)}
              </ul>
              <a href="/signup" className="mt-6 inline-block px-5 py-3 rounded-2xl bg-brand-600 text-white hover:bg-brand-700">Choose plan</a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
