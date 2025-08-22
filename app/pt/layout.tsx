import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CareAI - Soluções de Saúde Alimentadas por IA',
  description: 'Companheiro de IA para idosos com lembretes de medicamentos, verificações de saúde e alertas SOS.',
  alternates: {
    canonical: 'https://www.careai.app/pt',
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

export default function PtLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" dir="ltr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}