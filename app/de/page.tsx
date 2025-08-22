import Navbar from '@/components/Navbar';
import SiteFooter from '../components/SiteFooter';
import Hero from '../components/Hero';
import FeatureGrid from '../components/FeatureGrid';
import Testimonial from '../components/Testimonial';

export default function GermanHomePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero locale="de" />
        <FeatureGrid locale="de" />
        <Testimonial />
      </main>
      <SiteFooter />
    </>
  );
}
