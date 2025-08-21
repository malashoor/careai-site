import Navbar from '@/components/Navbar';
import SiteFooterAr from '../../components/SiteFooterAr';
import Pricing from '../../../components/Pricing';

export const metadata = { title: 'الأسعار — CareAI' };

export default function PricingAr() {
  return (
    <>
      <Navbar />
      <main>
        <Pricing locale="ar" />
      </main>
      <SiteFooterAr />
    </>
  );
}
