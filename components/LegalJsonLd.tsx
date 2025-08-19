export default function LegalJsonLd({
  url, name, dateModified,
}: { url: string; name: "Privacy Policy" | "Terms of Service"; dateModified: string }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `CareAI ${name}`,
    "url": url,
    "dateModified": dateModified,
    "isPartOf": { "@type": "WebSite", "name": "CareAI", "url": "https://www.careai.app" },
  };
  
  return (
    <script
      id={`legal-jsonld-${name.toLowerCase().replace(/\s+/g, '-')}`}
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
