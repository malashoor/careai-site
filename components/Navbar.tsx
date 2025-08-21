"use client";
import Link from "next/link";
import { useLocale } from "@/lib/hooks/useLocale";

export default function Navbar() {
  const locale = useLocale();
  const isAr = locale === "ar";

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href={isAr ? "/ar" : "/"} className="flex-shrink-0 flex items-center space-x-2">
              <img 
                src="/icons/app_icon.png" 
                alt="CareAI Logo" 
                className="w-8 h-8 md:w-10 md:h-10 rounded-lg shadow-sm"
              />
              <span className="text-2xl font-bold text-brand-600">CareAI</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href={isAr ? "/ar#features" : "/#features"} className="text-gray-700 hover:text-brand-600 px-3 py-2 rounded-md text-sm font-medium">
              {isAr ? "المميزات" : "Features"}
            </Link>
            <Link href={isAr ? "/ar/partners" : "/partners"} className="text-gray-700 hover:text-brand-600 px-3 py-2 rounded-md text-sm font-medium">
              {isAr ? "الشركاء" : "Partners"}
            </Link>
            <Link href={isAr ? "/ar/about" : "/about"} className="text-gray-700 hover:text-brand-600 px-3 py-2 rounded-md text-sm font-medium">
              {isAr ? "عنّا" : "About"}
            </Link>
            <Link href={isAr ? "/ar/contact" : "/contact"} className="text-gray-700 hover:text-brand-600 px-3 py-2 rounded-md text-sm font-medium">
              {isAr ? "اتصل بنا" : "Contact"}
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/app" className="bg-brand-600 text-white px-4 py-2 rounded-lg hover:bg-brand-700 transition-colors">
              {isAr ? "ابدأ الآن" : "Get Started"}
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-brand-600 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1">
                {isAr ? "English" : "العربية"}
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
