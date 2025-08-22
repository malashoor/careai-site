import SiteHeaderUnified from '../../../components/SiteHeaderUnified';
import SiteFooterAr from '../../../components/SiteFooterAr';

export const metadata = { title: 'الشروط والأحكام — CareAI' };

export default function TermsAr() {
  return (
    <>
      <SiteHeaderUnified locale="ar" />
      <main className="mx-auto max-w-3xl px-6 lg:px-8 py-16 prose">
        <h1>الشروط والأحكام</h1>
        <p>تنظّم هذه الشروط استخدامك لموقع CareAI وخدماته.</p>
      </main>
      <SiteFooterAr />
    </>
  );
}
