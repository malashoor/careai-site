import SmartLink from "@/components/Ui/SmartLink";

export default function FooterLegalLinks({ locale = "en" }: { locale?: string }) {
  // Legal links text dictionary for all supported languages
  const legalText = {
    en: {
      terms: "Terms",
      privacy: "Privacy"
    },
    ar: {
      terms: "الشروط",
      privacy: "الخصوصية"
    },
    es: {
      terms: "Términos",
      privacy: "Privacidad"
    },
    fr: {
      terms: "Conditions",
      privacy: "Confidentialité"
    },
    de: {
      terms: "Bedingungen",
      privacy: "Datenschutz"
    },
    zh: {
      terms: "条款",
      privacy: "隐私"
    },
    ja: {
      terms: "利用規約",
      privacy: "プライバシー"
    },
    ko: {
      terms: "이용약관",
      privacy: "개인정보처리방침"
    },
    hi: {
      terms: "शर्तें",
      privacy: "गोपनीयता"
    },
    pt: {
      terms: "Termos",
      privacy: "Privacidade"
    }
  };

  const t = legalText[locale as keyof typeof legalText] || legalText.en;

  return (
    <nav className="space-x-6 rtl:space-x-reverse text-sm text-ink-600">
      <SmartLink href={`/${locale}/legal/terms`} className="hover:text-link">
        {t.terms}
      </SmartLink>
      <SmartLink href={`/${locale}/legal/privacy`} className="hover:text-link">
        {t.privacy}
      </SmartLink>
    </nav>
  );
}
