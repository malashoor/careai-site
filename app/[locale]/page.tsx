import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import { type Locale } from "@/lib/i18n";

export default function Home({ params }: { params: { locale: Locale } }) {
  return (
    <>
      <Hero locale={params.locale} />
      <Features locale={params.locale} />
      <Pricing locale={params.locale} />
    </>
  );
}
