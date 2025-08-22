import Navbar from '@/components/Navbar';
import SiteFooter from '../components/SiteFooter';
import Hero from '../components/Hero';
import FeatureGrid from '../components/FeatureGrid';
import Testimonial from '../components/Testimonial';

export default function FrenchHomePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero locale="fr" />
        <FeatureGrid locale="fr" />
        <Testimonial />
      </main>
      <SiteFooter />
    </>
  );
}
