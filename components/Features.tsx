import Container from "./Container";
import { type Locale } from "@/lib/i18n";
import { t } from "@/lib/dictionary";

export default function Features({ locale }: { locale: Locale }) {
  const i = t(locale);
  return (
    <section id="features" className="mt-12">
      <Container>
        <h2 className="text-2xl md:text-3xl font-bold">{i.features.title}</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {i.features.items.map((f) => (
            <div key={f.title} className="card p-5">
              <h3 className="font-semibold">{f.title}</h3>
              <p className="text-sm text-slate-600 mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
