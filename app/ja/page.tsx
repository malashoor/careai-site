import Navbar from '@/components/Navbar';
import SiteFooter from '../components/SiteFooter';
import Hero from '../components/Hero';
import FeatureGrid from '../components/FeatureGrid';
import Testimonial from '../components/Testimonial';

export default function JaHomePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero locale="ja" />
        <FeatureGrid locale="ja" />
        <Testimonial />
      </main>
      <SiteFooter />
    </>
  );
}