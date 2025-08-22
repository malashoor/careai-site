import Navbar from '@/components/Navbar';
import SiteFooter from '../components/SiteFooter';
import Hero from '../components/Hero';
import FeatureGrid from '../components/FeatureGrid';
import Testimonial from '../components/Testimonial';

export default function PtHomePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero locale="pt" />
        <FeatureGrid locale="pt" />
        <Testimonial />
      </main>
      <SiteFooter />
    </>
  );
}