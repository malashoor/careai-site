import "./globals.css";
import { Inter, Noto_Kufi_Arabic } from "next/font/google";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const kufi = Noto_Kufi_Arabic({ subsets: ["arabic"], variable: "--font-kufi" });

export const metadata = {
  title: "CareAI — Compassionate AI for Seniors",
  description: "CareAI supports seniors with friendly conversations, medication reminders, and an SOS that alerts family and caregivers. Start your free trial today.",
  keywords: "AI companion, senior care, medication reminders, health monitoring, emergency SOS, elderly assistance, caregiving technology",
  authors: [{ name: "CareAI Team" }],
  creator: "CareAI",
  publisher: "CareAI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://careai.app"),
  alternates: {
    canonical: "/",
    languages: {
      "en": "/en",
      "ar": "/ar",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://careai.app",
    siteName: "CareAI",
    title: "CareAI — Compassionate AI for Seniors",
    description: "CareAI supports seniors with friendly conversations, medication reminders, and an SOS that alerts family and caregivers.",
    images: [
      {
        url: "/images/welcome_ai_hero.png",
        width: 1200,
        height: 630,
        alt: "CareAI companion preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CareAI — Compassionate AI for Seniors",
    description: "CareAI supports seniors with friendly conversations, medication reminders, and an SOS that alerts family and caregivers.",
    images: ["/images/welcome_ai_hero.png"],
    creator: "@careai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/site.webmanifest",
};

export const viewport = {
  themeColor: "#1aaeff",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body className={`${inter.variable} ${kufi.variable} font-sans min-h-screen bg-white text-slate-900`}>
        {children}
      </body>
    </html>
  );
}
