import SmartLink from "@/components/Ui/SmartLink";

export default function FooterLegalLinks({ locale = "en" }: { locale?: "en"|"ar" }) {
  return (
    <nav className="space-x-6 rtl:space-x-reverse text-sm text-ink-600">
      <SmartLink href={`/${locale}/legal/terms`} className="hover:text-link">
        {locale === "ar" ? "الشروط" : "Terms"}
      </SmartLink>
      <SmartLink href={`/${locale}/legal/privacy`} className="hover:text-link">
        {locale === "ar" ? "الخصوصية" : "Privacy"}
      </SmartLink>
    </nav>
  );
}
