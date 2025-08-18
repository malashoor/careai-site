import Container from "./Container";
import { type Locale } from "@/lib/i18n";
import { t } from "@/lib/dictionary";

export default function Footer({ locale }: { locale: Locale }) {
  const i = t(locale);
  return (
    <footer className="mt-20 border-t bg-slate-50">
      <Container>
        <div className="py-8 text-sm text-slate-600">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-slate-800 mb-4">CareAI</h3>
              <p className="text-slate-600">Compassionate AI for seniors, providing companionship, reminders, and safety.</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-slate-800 mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href={`/${locale}/features`} className="hover:underline">{i.footer.links.features}</a></li>
                <li><a href={`/${locale}/pricing`} className="hover:underline">{i.footer.links.pricing}</a></li>
                <li><a href={`/${locale}/onboarding`} className="hover:underline">Get Started</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-slate-800 mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href={`/${locale}/about`} className="hover:underline">{i.footer.links.about}</a></li>
                <li><a href={`/${locale}/partners`} className="hover:underline">Partners</a></li>
                <li><a href={`/${locale}/contact`} className="hover:underline">{i.footer.links.contact}</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-slate-800 mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="/privacy" className="hover:underline">{i.footer.links.privacy}</a></li>
                <li><a href="/terms" className="hover:underline">{i.footer.links.terms}</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t pt-8 flex items-center justify-between">
            <p>© {new Date().getFullYear()} CareAI. {i.footer.rights}</p>
            <div className="flex gap-4">
              <a href="/privacy" className="hover:underline">{i.footer.links.privacy}</a>
              <a href="/terms" className="hover:underline">{i.footer.links.terms}</a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
