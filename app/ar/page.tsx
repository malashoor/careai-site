import Hero from '../components/Hero';
import FeatureGrid from '../components/FeatureGrid';
import Testimonial from '../components/Testimonial';
import Navbar from '@/components/Navbar';
import SiteFooterAr from '../components/SiteFooterAr';

export default function HomeAr() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero locale="ar" />
        <FeatureGrid locale="ar" />
        <Testimonial locale="ar" />
      </main>
      <SiteFooterAr />
    </>
  );
}
