import Container from "./Container";
import { type Locale } from "@/lib/i18n";
import { t } from "@/lib/dictionary";

export default function Footer({ locale }: { locale: Locale }) {
  const i = t(locale);
  return (
    <footer className="mt-20 border-t bg-slate-50">
      <Container>
        <div className="py-8 text-sm text-slate-600 flex items-center justify-between">
          <p>© {new Date().getFullYear()} CareAI. {i.footer.rights}</p>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:underline">Privacy</a>
            <a href="/terms" className="hover:underline">Terms</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
