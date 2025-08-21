"use client";
import Link from "next/link";
import { useLocale } from "@/lib/hooks/useLocale";

export default function Navbar() {
  const locale = useLocale();
  
  // Localized text for all languages
  const localizedText = {
    en: {
      features: "Features",
      partners: "Partners", 
      about: "About",
      contact: "Contact",
      getStarted: "Get Started",
      languageToggle: "العربية"
    },
    ar: {
      features: "المميزات",
      partners: "الشركاء",
      about: "عنّا", 
      contact: "اتصل بنا",
      getStarted: "ابدأ الآن",
      languageToggle: "English"
    },
    es: {
      features: "Características",
      partners: "Socios",
      about: "Acerca de",
      contact: "Contacto", 
      getStarted: "Comenzar",
      languageToggle: "English"
    },
    fr: {
      features: "Fonctionnalités",
      partners: "Partenaires",
      about: "À propos",
      contact: "Contact",
      getStarted: "Commencer", 
      languageToggle: "English"
    },
    de: {
      features: "Funktionen",
      partners: "Partner",
      about: "Über uns",
      contact: "Kontakt",
      getStarted: "Loslegen",
      languageToggle: "English"
    },
    zh: {
      features: "功能",
      partners: "合作伙伴",
      about: "关于我们",
      contact: "联系我们",
      getStarted: "开始使用",
      languageToggle: "English"
    },
    ja: {
      features: "機能",
      partners: "パートナー",
      about: "会社概要",
      contact: "お問い合わせ",
      getStarted: "始める",
      languageToggle: "English"
    },
    ko: {
      features: "기능",
      partners: "파트너",
      about: "회사 소개",
      contact: "연락처",
      getStarted: "시작하기",
      languageToggle: "English"
    },
    hi: {
      features: "सुविधाएं",
      partners: "साझेदार",
      about: "हमारे बारे में",
      contact: "संपर्क करें",
      getStarted: "शुरू करें",
      languageToggle: "English"
    },
    pt: {
      features: "Recursos",
      partners: "Parceiros",
      about: "Sobre",
      contact: "Contato",
      getStarted: "Começar",
      languageToggle: "English"
    }
  };

  const t = localizedText[locale] || localizedText.en;
  const isAr = locale === "ar";

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href={locale === 'en' ? "/" : `/${locale}`} className="flex-shrink-0 flex items-center space-x-2">
              <img 
                src="/icons/app_icon.png" 
                alt="CareAI Logo" 
                className="w-8 h-8 md:w-10 md:h-10 rounded-lg shadow-sm"
              />
              <span className="text-2xl font-bold text-brand-600">CareAI</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href={locale === 'en' ? "/#features" : `/${locale}#features`} className="text-gray-700 hover:text-brand-600 px-3 py-2 rounded-md text-sm font-medium">
              {t.features}
            </Link>
            <Link href={locale === 'en' ? "/partners" : `/${locale}/partners`} className="text-gray-700 hover:text-brand-600 px-3 py-2 rounded-md text-sm font-medium">
              {t.partners}
            </Link>
            <Link href={locale === 'en' ? "/about" : `/${locale}/about`} className="text-gray-700 hover:text-brand-600 px-3 py-2 rounded-md text-sm font-medium">
              {t.about}
            </Link>
            <Link href={locale === 'en' ? "/contact" : `/${locale}/contact`} className="text-gray-700 hover:text-brand-600 px-3 py-2 rounded-md text-sm font-medium">
              {t.contact}
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/app" className="bg-brand-600 text-white px-4 py-2 rounded-lg hover:bg-brand-700 transition-colors">
              {t.getStarted}
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-brand-600 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1">
                {t.languageToggle}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link href="/" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 first:rounded-t-lg">
                  🇺🇸 English
                </Link>
                <Link href="/ar" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  🇸🇦 العربية
                </Link>
                <Link href="/es" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  🇪🇸 Español
                </Link>
                <Link href="/fr" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  🇫🇷 Français
                </Link>
                <Link href="/de" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  🇩🇪 Deutsch
                </Link>
                <Link href="/zh" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  🇨🇳 中文
                </Link>
                <Link href="/ja" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  🇯🇵 日本語
                </Link>
                <Link href="/ko" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  🇰🇷 한국어
                </Link>
                <Link href="/hi" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  🇮🇳 हिन्दी
                </Link>
                <Link href="/pt" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 last:rounded-b-lg">
                  🇵🇹 Português
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
