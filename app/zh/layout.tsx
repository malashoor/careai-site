import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CareAI - AI驱动的医疗解决方案',
  description: '为老年人提供AI伴侣，包括药物提醒、健康检查和SOS警报。',
  alternates: {
    canonical: 'https://www.careai.app/zh',
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

export default function ChineseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh" dir="ltr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
