'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Container from '@/components/Container';

export default function TestVerificationPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const router = useRouter();
  const [email, setEmail] = useState('');
  const isAR = locale === 'ar';

  const simulateSuccessCallback = () => {
    const callbackUrl = `/${locale}/auth/callback?access_token=test_token&refresh_token=test_refresh`;
    router.push(callbackUrl);
  };

  const simulateErrorCallback = () => {
    const callbackUrl = `/${locale}/auth/callback?error=access_denied&error_description=Email+link+is+invalid+or+has+expired`;
    router.push(callbackUrl);
  };

  const simulateExpiredCallback = () => {
    const callbackUrl = `/${locale}/auth/callback?error=otp_expired&error_description=OTP+has+expired`;
    router.push(callbackUrl);
  };

  return (
    <main className="py-16">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-slate-900 mb-8">
            {isAR ? 'اختبار التحقق من البريد الإلكتروني' : 'Test Email Verification'}
          </h1>
          
          <div className="space-y-6">
            <div className="p-6 bg-blue-50 border border-blue-200 rounded-xl">
              <h2 className="text-xl font-semibold text-blue-900 mb-4">
                {isAR ? 'محاكاة سيناريوهات التحقق' : 'Simulate Verification Scenarios'}
              </h2>
              <p className="text-blue-800 mb-6">
                {isAR 
                  ? 'استخدم هذه الصفحة لاختبار سيناريوهات التحقق من البريد الإلكتروني دون الحاجة لإرسال رسائل فعلية.'
                  : 'Use this page to test email verification scenarios without sending actual emails.'
                }
              </p>
              
              <div className="space-y-4">
                <button
                  onClick={simulateSuccessCallback}
                  className="w-full px-6 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors"
                >
                  {isAR ? 'محاكاة نجاح التحقق' : 'Simulate Successful Verification'}
                </button>
                
                <button
                  onClick={simulateErrorCallback}
                  className="w-full px-6 py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-colors"
                >
                  {isAR ? 'محاكاة خطأ في الرابط' : 'Simulate Invalid Link Error'}
                </button>
                
                <button
                  onClick={simulateExpiredCallback}
                  className="w-full px-6 py-3 bg-yellow-600 text-white font-semibold rounded-xl hover:bg-yellow-700 transition-colors"
                >
                  {isAR ? 'محاكاة انتهاء صلاحية الرابط' : 'Simulate Expired Link Error'}
                </button>
              </div>
            </div>

            <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {isAR ? 'تعليمات الاختبار' : 'Testing Instructions'}
              </h3>
              <ol className="text-left text-gray-700 space-y-2">
                <li>1. {isAR ? 'انقر على أحد الأزرار أعلاه لمحاكاة سيناريو التحقق' : 'Click one of the buttons above to simulate a verification scenario'}</li>
                <li>2. {isAR ? 'ستتم إعادة توجيهك إلى صفحة معالجة التحقق' : 'You will be redirected to the verification processing page'}</li>
                <li>3. {isAR ? 'راقب الرسائل والأخطاء المعروضة' : 'Observe the messages and errors displayed'}</li>
                <li>4. {isAR ? 'تحقق من تحديث حالة الملف الشخصي في قاعدة البيانات' : 'Check if the profile status is updated in the database'}</li>
              </ol>
            </div>

            <div className="p-6 bg-amber-50 border border-amber-200 rounded-xl">
              <h3 className="text-lg font-semibold text-amber-900 mb-3">
                {isAR ? 'ملاحظة مهمة' : 'Important Note'}
              </h3>
              <p className="text-amber-800">
                {isAR 
                  ? 'هذه الصفحة مخصصة للاختبار فقط. في الإنتاج، سيتم إرسال روابط التحقق الفعلية عبر البريد الإلكتروني.'
                  : 'This page is for testing only. In production, actual verification links will be sent via email.'
                }
              </p>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
