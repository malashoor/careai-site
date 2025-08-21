import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CareAI - حلول الرعاية الصحية المدعومة بالذكاء الاصطناعي',
  description: 'رفيق الذكاء الاصطناعي لكبار السن مع تذكيرات الأدوية وفحوصات الصحة وتنبيهات SOS.',
  alternates: {
    canonical: 'https://www.careai.app/ar',
    languages: {
      'en': 'https://www.careai.app',
      'ar': 'https://www.careai.app/ar',
      'es': 'https://www.careai.app/es',
      'fr': 'https://www.careai.app/fr',
      'de': 'https://www.careai.app/de',
      'zh': 'https://www.careai.app/zh',
      'ja': 'https://www.careai.app/ja',
      'ko': 'https://www.careai.app/ko',
      'hi': 'https://www.careai.app/hi',
      'pt': 'https://www.careai.app/pt'
    }
  }
};

export default function ArabicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div lang="ar" dir="rtl" className={inter.className}>
      {children}
    </div>
  );
}
