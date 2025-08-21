import Navbar from '@/components/Navbar';
import SiteFooter from '../components/SiteFooter';
import Pricing from '../../components/Pricing';

export const metadata = { title: 'Pricing — CareAI' };

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Pricing locale="en" />
      </main>
      <SiteFooter />
    </>
  );
}
