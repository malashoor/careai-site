import Link from "next/link";
import { type Locale } from "@/lib/i18n";
import FooterLegalLinks from "./FooterLegalLinks";

interface FooterProps {
  locale: Locale;
}

export default function Footer({ locale }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">CareAI</h3>
            <p className="text-slate-300 mb-4 max-w-md">
              {locale === "ar" 
                ? "رفيق الذكاء الاصطناعي لكبار السن ومقدمي الرعاية. تذكيرات الأدوية، فحوصات الصحة، وتنبيهات SOS."
                : "AI companion for seniors and caregivers. Medication reminders, health check-ins, and SOS alerts."
              }
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <Link href={`/${locale}/onboarding`} className="btn btn-primary">
                {locale === "ar" ? "ابدأ الآن" : "Get Started"}
              </Link>
              <Link href={`/${locale}/contact`} className="btn btn-ghost">
                {locale === "ar" ? "تواصل معنا" : "Contact Us"}
              </Link>
            </div>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {locale === "ar" ? "المميزات" : "Features"}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/features`} className="text-slate-300 hover:text-white transition-colors">
                  {locale === "ar" ? "المميزات" : "Features"}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/pricing`} className="text-slate-300 hover:text-white transition-colors">
                  {locale === "ar" ? "الأسعار" : "Pricing"}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/onboarding`} className="text-slate-300 hover:text-white transition-colors">
                  {locale === "ar" ? "البدء" : "Onboarding"}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/about`} className="text-slate-300 hover:text-white transition-colors">
                  {locale === "ar" ? "حول" : "About"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {locale === "ar" ? "الشركاء" : "Partners"}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/doctors`} className="text-slate-300 hover:text-white transition-colors">
                  {locale === "ar" ? "الأطباء" : "Doctors"}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/hospitals`} className="text-slate-300 hover:text-white transition-colors">
                  {locale === "ar" ? "المستشفيات" : "Hospitals"}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/insurance`} className="text-slate-300 hover:text-white transition-colors">
                  {locale === "ar" ? "التأمين" : "Insurance"}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/charities`} className="text-slate-300 hover:text-white transition-colors">
                  {locale === "ar" ? "الجمعيات الخيرية" : "Charities"}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Transparency Note */}
        <div className="border-t border-slate-700 mt-8 pt-8">
          <div className="text-center">
            <p className="text-slate-400 text-xs leading-relaxed max-w-3xl mx-auto">
              {locale === "ar" 
                ? "CareAI هي شركة ناشئة في مرحلة مبكرة. لا تشكل ادعاءات المنتج استشارة طبية أو بديلاً عن خدمات الطوارئ."
                : "CareAI is an early-stage company. Product claims do not constitute medical advice or replace emergency services."
              }
            </p>
          </div>
        </div>

        {/* Compliance Disclaimer */}
        <div className="border-t border-slate-700 mt-8 pt-8">
          <div className="text-center">
            <p className="text-slate-400 text-sm font-medium mb-2">
              ⚠️ {locale === "ar" ? "تنبيه مهم" : "Important Notice"}
            </p>
            <p className="text-slate-400 text-xs leading-relaxed max-w-3xl mx-auto">
              {locale === "ar" 
                ? "كيرAI ليس جهازاً طبياً ولا بديلاً عن خدمات الطوارئ. استشر دائماً مقدم الرعاية الصحية المؤهل للحصور على المشورة الطبية."
                : "CareAI is not a medical device or a substitute for emergency services. Always consult with a qualified healthcare provider for medical advice."
              }
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2024 CareAI. {locale === "ar" ? "جميع الحقوق محفوظة" : "All rights reserved"}.
          </p>
          <FooterLegalLinks locale={locale} />
        </div>
      </div>
    </footer>
  );
}
