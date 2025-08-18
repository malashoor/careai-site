import "./globals.css";
import { Inter, Noto_Kufi_Arabic } from "next/font/google";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const kufi = Noto_Kufi_Arabic({ subsets: ["arabic"], variable: "--font-kufi" });

export const metadata = {
  title: "CareAI",
  description: "Companionship, reminders, and safety — powered by AI.",
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
