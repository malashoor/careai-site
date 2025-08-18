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
          {i.features.items.map((f, index) => (
            <div key={f.title} className="card p-5">
              <div className="w-12 h-12 mb-3 rounded-xl bg-brand-100 flex items-center justify-center">
                <img
                  src={[
                    '/images/AI_Assistance.png',
                    '/images/notification-icon.png',
                    '/images/health_icons/heart.png',
                    '/images/emergency_icons/emergency.png'
                  ][index]}
                  alt={`${f.title} icon`}
                  className="w-6 h-6"
                />
              </div>
              <h3 className="font-semibold">{f.title}</h3>
              <p className="text-sm text-slate-600 mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
