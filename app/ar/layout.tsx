import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://careai.app'),
  title: 'CareAI — حلول الرعاية الصحية المدعومة بالذكاء الاصطناعي',
  description: 'حوّل رعاية المرضى بالذكاء الاصطناعي والتحليلات التنبؤية.',
  alternates: {
    canonical: '/ar',
    languages: { 'en-US': '/', 'ar': '/ar' },
  },
  openGraph: {
    title: 'CareAI — حلول الرعاية الصحية المدعومة بالذكاء الاصطناعي',
    description: 'أدوات ذكاء اصطناعي للعائلات ومقدمي الرعاية.',
    url: 'https://careai.app/ar',
    images: ['/images/welcome_ai_hero.png'],
  },
  icons: {
    icon: [
      { url: '/images/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/icon.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/images/adaptive-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/images/favicon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased bg-white text-gray-900">{children}</body>
    </html>
  );
}
