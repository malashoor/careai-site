import type { Metadata } from "next";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  title: "CareAI - AI-Powered Healthcare Solutions",
  description: "AI companion for seniors with medication reminders, health check-ins, and SOS alerts. Transform patient care with intelligent automation and predictive analytics.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "CareAI",
              url: "https://www.careai.app",
              logo: "https://www.careai.app/icon.png",
              sameAs: ["https://www.linkedin.com/company/careai"]
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "CareAI Companion",
              brand: "CareAI",
              description:
                "AI companion for seniors with medication reminders, health check-ins, and SOS alerts.",
              offers: { "@type": "Offer", priceCurrency: "USD", price: "9" }
            }),
          }}
        />
        
        {/* Plausible Analytics */}
        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN && (
          <script
            defer
            data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
            src="https://plausible.io/js/script.js"
          />
        )}
        {/* hCaptcha */}
        <script async defer src="https://js.hcaptcha.com/1/api.js" />
      </head>
      <body className="min-h-full font-sans bg-[var(--bg-ghost)] text-ink-800 antialiased">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
