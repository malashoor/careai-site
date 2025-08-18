import Container from "./Container";
import { type Locale } from "@/lib/i18n";
import { t } from "@/lib/dictionary";

export default function Hero({ locale }: { locale: Locale }) {
  const i = t(locale);
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-100 via-white to-white" />
      <Container>
        <div className="relative py-16 md:py-24 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">{i.hero.title}</h1>
            <p className="mt-5 text-lg md:text-xl text-slate-700 max-w-2xl">{i.hero.subtitle}</p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#pricing" className="px-6 py-3 rounded-2xl bg-brand-600 text-white hover:bg-brand-700">{i.hero.ctaPrimary}</a>
              <a href="#features" className="px-6 py-3 rounded-2xl border border-slate-300 bg-white hover:bg-slate-50">{i.hero.ctaSecondary}</a>
            </div>
          </div>
          <div className="card p-0 overflow-hidden">
            <img
              src="/images/welcome_ai_hero.png"
              alt="CareAI companion preview"
              className="w-full h-auto"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
