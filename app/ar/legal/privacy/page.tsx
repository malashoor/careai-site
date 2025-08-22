import SiteHeaderUnified from '../../../components/SiteHeaderUnified';
import SiteFooterAr from '../../../components/SiteFooterAr';

export const metadata = { title: 'سياسة الخصوصية — CareAI' };

export default function PrivacyAr() {
  return (
    <>
      <SiteHeaderUnified locale="ar" />
      <main className="mx-auto max-w-3xl px-6 lg:px-8 py-16 prose">
        <h1>سياسة الخصوصية</h1>
        <p>نحترم خصوصيتك. تشرح هذه الصفحة البيانات التي نجمعها وكيفية استخدامها.</p>
      </main>
      <SiteFooterAr />
    </>
  );
}
