'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function SiteHeaderUnified({ locale = 'en' as 'en' | 'ar' }) {
  const isAr = locale === 'ar';
  const nav = isAr
    ? [
        { href: '/ar#features', label: 'المميزات' },
        { href: '/ar/partners', label: 'الشركاء' },
        { href: '/ar/about', label: 'عنّا' },
        { href: '/ar/contact', label: 'اتصل بنا' },
      ]
    : [
        { href: '/#features', label: 'Features' },
        { href: '/en/partners', label: 'Partners' },
        { href: '/en/about', label: 'About' },
        { href: '/en/contact', label: 'Contact' },
      ];

  const authLinks = isAr
    ? [
        { href: '/app', label: 'ابدأ الآن' },
      ]
    : [
        { href: '/app', label: 'Get Started' },
      ];

  // International language codes for better scalability
  const supportedLanguages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'ko', name: '한국어', flag: '🇰🇷' },
    { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
  ];

  const currentLanguage = supportedLanguages.find(lang => lang.code === locale) || supportedLanguages[0];

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* LTR: logo left, RTL: logo right */}
        {isAr ? (
          <>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              {nav.map((n) => (
                <Link key={n.href} href={n.href} className="text-gray-700 hover:text-gray-900">{n.label}</Link>
              ))}
              <div className="flex items-center gap-3 ml-4 pl-4 border-l border-gray-200">
                {authLinks.map((link) => (
                  <Link 
                    key={link.href} 
                    href={link.href} 
                    className="text-gray-700 hover:text-gray-900 font-medium"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="relative group ml-4 pl-4 border-l border-gray-200">
                <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium">
                  <span>{currentLanguage.flag}</span>
                  <span>{currentLanguage.name}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {supportedLanguages.map((lang) => (
                    <Link
                      key={lang.code}
                      href={lang.code === 'en' ? '/' : `/${lang.code}`}
                      className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </nav>
            <Link href={isAr ? '/ar' : '/'} className="flex items-center gap-2">
              <Image src="/images/careai_logo.png" alt="CareAI" width={32} height={32} className="rounded-md" />
              <span className="font-semibold">CareAI</span>
            </Link>
          </>
        ) : (
          <>
            <Link href={isAr ? '/ar' : '/'} className="flex items-center gap-2">
              <Image src="/images/careai_logo.png" alt="CareAI" width={32} height={32} className="rounded-md" />
              <span className="font-semibold">CareAI</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              {nav.map((n) => (
                <Link key={n.href} href={n.href} className="text-gray-700 hover:text-gray-900">{n.label}</Link>
              ))}
              <div className="flex items-center gap-3 ml-4 pl-4 border-l border-gray-200">
                {authLinks.map((link) => (
                  <Link 
                    key={link.href} 
                    href={link.href} 
                    className="text-gray-700 hover:text-gray-900 font-medium"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="relative group ml-4 pl-4 border-l border-gray-200">
                <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium">
                  <span>{currentLanguage.flag}</span>
                  <span>{currentLanguage.name}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {supportedLanguages.map((lang) => (
                    <Link
                      key={lang.code}
                      href={lang.code === 'en' ? '/' : `/${lang.code}`}
                      className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </nav>
          </>
        )}
        
        {/* Mobile Language Selector */}
        <div className="md:hidden border-t border-gray-200 px-6 py-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">
              {isAr ? 'اختر اللغة' : 'Choose Language'}
            </span>
            <div className="flex gap-2">
              {supportedLanguages.slice(0, 6).map((lang) => (
                <Link
                  key={lang.code}
                  href={lang.code === 'en' ? '/' : `/${lang.code}`}
                  className={`px-3 py-1 rounded-full text-sm border transition-colors ${
                    locale === lang.code
                      ? 'bg-brand-500 text-white border-brand-500'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <span className="hidden sm:inline">{lang.flag}</span>
                  <span className="sm:hidden">{lang.code.toUpperCase()}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
