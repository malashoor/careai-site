import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CareAI - Solutions de Santé Alimentées par l\'IA',
  description: 'Companion IA pour les personnes âgées avec des rappels de médicaments, des contrôles de santé et des alertes SOS.',
  alternates: {
    canonical: 'https://www.careai.app/fr',
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

export default function FrenchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div lang="fr" dir="ltr" className={inter.className}>
      {children}
    </div>
  );
}
