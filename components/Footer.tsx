import Container from "./Container";
import { type Locale } from "@/lib/i18n";
import { dictionary } from "@/lib/dictionary";

export default function Footer({ locale }: { locale: Locale }) {
  const i = dictionary[locale];

  return (
    <footer className="bg-slate-900 text-white">
      <Container>
        <div className="py-8 text-sm text-slate-400 flex items-center justify-between">
          <p>© {new Date().getFullYear()} CareAI. {i.footer.rights}</p>
          <div className="flex gap-4">
            {i.footer.links.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
