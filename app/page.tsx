import Navbar from '@/components/Navbar';
import SiteFooter from './components/SiteFooter';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import Testimonial from './components/Testimonial';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero locale="en" />
        <FeatureGrid locale="en" />
        <Testimonial />
      </main>
      <SiteFooter />
    </>
  );
}
