import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CareAI - AI駆動のヘルスケアソリューション',
  description: '薬のリマインダー、健康チェック、SOSアラートを備えた高齢者向けAIコンパニオン。',
  alternates: {
    canonical: 'https://www.careai.app/ja',
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

export default function JaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div lang="ja" dir="ltr" className={inter.className}>
      {children}
    </div>
  );
}