import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import CookieBanner from '@/components/CookieBanner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.careai.app'),
  title: 'CareAI — AI‑Powered Healthcare Solutions',
  description: 'Transform patient care with intelligent automation and predictive analytics.',
  alternates: {
    canonical: '/',
    languages: {
      en: '/en',
      ar: '/ar',
      es: '/es',
      fr: '/fr',
      de: '/de',
      zh: '/zh',
      ja: '/ja',
      ko: '/ko',
      hi: '/hi',
      pt: '/pt',
    },
  },
  openGraph: {
    title: 'CareAI — AI‑Powered Healthcare Solutions',
    description: 'AI tools for families, caregivers, and providers.',
    url: 'https://careai.app',
    images: ['/images/welcome_ai_hero.png'],
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'CareAI',
              url: 'https://www.careai.app',
              logo: 'https://www.careai.app/favicon-32x32.png',
              sameAs: ['https://www.linkedin.com/company/careai'],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Product',
              name: 'CareAI Companion',
              brand: 'CareAI',
              description: 'AI companion for seniors with medication reminders, health check-ins, and SOS alerts.',
              offers: {
                '@type': 'Offer',
                priceCurrency: 'USD',
                price: '9',
              },
            }),
          }}
        />
        <script
          defer
          data-domain="careai.app"
          src="https://plausible.io/js/script.js"
        />
        <script
          async
          defer
          src="https://js.hcaptcha.com/1/api.js"
        />
      </head>
      <body className="min-h-full font-sans bg-[var(--bg-ghost)] text-ink-800 antialiased">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
