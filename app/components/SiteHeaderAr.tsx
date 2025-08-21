'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function SiteHeaderAr() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 h-16 flex items-center justify-between">
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/ar#features" className="text-gray-700 hover:text-gray-900">المميزات</Link>
          <Link href="/ar/partners" className="text-gray-700 hover:text-gray-900">الشركاء</Link>
          <Link href="/ar/about" className="text-gray-700 hover:text-gray-900">عنّا</Link>
          <Link href="/ar/contact" className="text-gray-700 hover:text-gray-900">اتصل بنا</Link>
          <Link href="/" className="ml-2 font-semibold text-gray-900">English</Link>
        </nav>
        <Link href="/ar" className="flex items-center gap-2">
          <Image src="/images/careai_logo.png" alt="CareAI" width={32} height={32} className="rounded-md" />
          <span className="font-semibold">CareAI</span>
        </Link>
      </div>
    </header>
  );
}
