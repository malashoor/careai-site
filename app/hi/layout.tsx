import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CareAI - AI-संचालित स्वास्थ्य समाधान',
  description: 'दवा अनुस्मारक, स्वास्थ्य जांच और SOS अलर्ट के साथ वरिष्ठ नागरिकों के लिए AI साथी।',
  alternates: {
    canonical: 'https://www.careai.app/hi',
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

export default function HiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div lang="hi" dir="rtl" className={inter.className}>
      {children}
    </div>
  );
}