import { dictionary } from "@/lib/dictionary";
import Navbar from "@/components/Navbar";
import SiteFooterAr from "@/app/components/SiteFooterAr";
import ContactForm from "@/app/components/ContactForm";

export default function ContactArPage() {
  const i = dictionary.ar;

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-ink-50">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-ink-900 mb-6">
              {i.contact.title}
            </h1>
            <p className="text-xl text-ink-500 max-w-3xl mx-auto">
              {i.contact.subtitle}
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16">
          <div className="mx-auto max-w-2xl px-4">
            <ContactForm locale="ar" />
          </div>
        </section>
      </main>
      <SiteFooterAr />
    </>
  );
}
