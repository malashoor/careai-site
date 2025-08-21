import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CareAI - AI 기반 의료 솔루션',
  description: '약물 알림, 건강 체크, SOS 경고를 갖춘 노인을 위한 AI 동반자.',
  alternates: {
    canonical: 'https://www.careai.app/ko',
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

export default function KoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div lang="ko" dir="ltr" className={inter.className}>
      {children}
    </div>
  );
}