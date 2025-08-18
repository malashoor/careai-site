import Container from "@/components/Container";
import { t } from "@/lib/dictionary";
import { type Locale } from "@/lib/i18n";

/**
 * Netlify Forms ready: add data-netlify and a hidden input "form-name".
 * Netlify will detect this static form at build time.
 */
export default function Contact({ params }: { params: { locale: Locale } }) {
  const i = t(params.locale);
  return (
    <section className="mt-10">
      <Container>
        <h1 className="text-3xl font-bold">{i.contact.title}</h1>
        <p className="mt-2 text-slate-600">{i.contact.subtitle}</p>

        <form name="contact" method="POST" data-netlify="true" action="/thank-you" className="card p-6 mt-6 space-y-4">
          <input type="hidden" name="form-name" value="contact" />
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input name="name" required className="w-full p-3 rounded-xl border border-slate-300" />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input type="email" name="email" required className="w-full p-3 rounded-xl border border-slate-300" />
            </div>
          </div>
          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea name="message" rows={5} required className="w-full p-3 rounded-xl border border-slate-300" />
          </div>
          <button className="px-5 py-3 rounded-xl bg-brand-600 text-white hover:bg-brand-700">{i.contact.submit}</button>
        </form>
      </Container>
    </section>
  );
}
