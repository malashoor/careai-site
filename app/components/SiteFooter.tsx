import Link from 'next/link';
import { useLocale } from '@/lib/hooks/useLocale';

export default function SiteFooter() {
  const locale = useLocale();
  
  // Generate localized legal links
  const legalLinks = {
    privacy: locale === 'en' ? '/legal/privacy' : `/${locale}/legal/privacy`,
    terms: locale === 'en' ? '/legal/terms' : `/${locale}/legal/terms`
  };

  return (
    <footer className="mt-16 border-t">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        <div className="space-y-2">
          <div className="font-semibold">CareAI</div>
          <p className="text-gray-600">AI‑powered tools for families and caregivers.</p>
        </div>
        <div className="space-y-2">
          <div className="font-semibold">Product</div>
          <ul className="space-y-1">
            <li><Link href="/#features" className="text-gray-600 hover:text-gray-900">Features</Link></li>
          </ul>
        </div>
        <div className="space-y-2">
          <div className="font-semibold">Company</div>
          <ul className="space-y-1">
            <li><Link href={locale === 'en' ? '/about' : `/${locale}/about`} className="text-gray-600 hover:text-gray-900">About</Link></li>
            <li><Link href={locale === 'en' ? '/contact' : `/${locale}/contact`} className="text-gray-600 hover:text-gray-900">Contact</Link></li>
            <li><Link href={legalLinks.privacy} className="text-gray-600 hover:text-gray-900">Privacy</Link></li>
            <li><Link href={legalLinks.terms} className="text-gray-600 hover:text-gray-900">Terms</Link></li>
          </ul>
        </div>
      </div>
      <div className="px-6 lg:px-8 pb-8 text-xs text-gray-500 text-center">
        © {new Date().getFullYear()} CareAI. All rights reserved.
      </div>
    </footer>
  );
}
