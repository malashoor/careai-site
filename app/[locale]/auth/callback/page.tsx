'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { getSupabase } from '@/lib/supabase';
import Container from '@/components/Container';

export default function AuthCallbackPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const router = useRouter();
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('');
  const [errorDetails, setErrorDetails] = useState('');
  const isAR = locale === 'ar';

  useEffect(() => {
    const handleEmailConfirmation = async () => {
      try {
        const supabase = getSupabase();
        if (!supabase) {
          throw new Error('Supabase not initialized');
        }

        const accessToken = searchParams.get('access_token');
        const refreshToken = searchParams.get('refresh_token');
        const error = searchParams.get('error');
        const errorDescription = searchParams.get('error_description');

        if (error) {
          setStatus('error');
          setErrorDetails(errorDescription || error);
          
          if (error === 'access_denied') {
            setMessage(isAR 
              ? 'رابط التأكيد غير صالح أو منتهي الصلاحية. يرجى طلب رابط جديد.'
              : 'Confirmation link is invalid or expired. Please request a new link.'
            );
          } else {
            setMessage(isAR 
              ? 'حدث خطأ أثناء تأكيد بريدك الإلكتروني.'
              : 'An error occurred while confirming your email.'
            );
          }
          return;
        }

        if (accessToken && refreshToken) {
          const { error: sessionError } = await supabase.auth.setSession({
            access_token: accessToken,
            refresh_token: refreshToken,
          });

          if (sessionError) {
            throw sessionError;
          }

          const { data: { user }, error: userError } = await supabase.auth.getUser();
          
          if (userError || !user) {
            throw new Error('Failed to get user information');
          }

          const { error: profileError } = await supabase
            .from('profiles')
            .update({ 
              status: 'active',
              email_confirmed_at: new Date().toISOString(),
              updated_at: new Date().toISOString()
            })
            .eq('id', user.id);

          if (profileError) {
            console.warn('Profile update warning:', profileError);
          }

          // Update user metadata in auth.users table to include display name
          if (user.user_metadata?.full_name) {
            const { error: updateError } = await supabase.auth.updateUser({
              data: { 
                full_name: user.user_metadata.full_name,
                display_name: user.user_metadata.full_name
              }
            });
            
            if (updateError) {
              console.warn('User metadata update warning:', updateError);
            }
          }

          setStatus('success');
          setMessage(isAR 
            ? 'تم تأكيد بريدك الإلكتروني بنجاح! يمكنك الآن تسجيل الدخول.'
            : 'Your email has been confirmed successfully! You can now sign in.'
          );

          setTimeout(() => {
            router.push(`/${locale}/auth/login`);
          }, 3000);
        } else {
          throw new Error('Missing authentication tokens');
        }
      } catch (error) {
        console.error('Email confirmation error:', error);
        setStatus('error');
        setMessage(isAR 
          ? 'حدث خطأ أثناء تأكيد بريدك الإلكتروني. يرجى المحاولة مرة أخرى.'
          : 'An error occurred while confirming your email. Please try again.'
        );
        setErrorDetails(error instanceof Error ? error.message : 'Unknown error');
      }
    };

    handleEmailConfirmation();
  }, [locale, router, searchParams, isAR]);

  const handleResendEmail = async () => {
    try {
      const supabase = getSupabase();
      if (!supabase) {
        throw new Error('Supabase not initialized');
      }

      const { error } = await supabase.auth.resend({
        type: 'signup',
        email: searchParams.get('email') || '',
      });

      if (error) {
        throw error;
      }

      setMessage(isAR 
        ? 'تم إرسال رابط تأكيد جديد إلى بريدك الإلكتروني.'
        : 'A new confirmation link has been sent to your email.'
      );
    } catch (error) {
      console.error('Resend error:', error);
      setMessage(isAR 
        ? 'فشل في إرسال رابط التأكيد. يرجى المحاولة مرة أخرى.'
        : 'Failed to send confirmation link. Please try again.'
      );
    }
  };

  const handleGoToLogin = () => {
    router.push(`/${locale}/auth/login`);
  };

  return (
    <main className="py-16">
      <Container>
        <div className="max-w-md mx-auto text-center">
          {status === 'loading' && (
            <div>
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-6"></div>
              <h1 className="text-2xl font-bold text-slate-900 mb-4">
                {isAR ? 'جاري تأكيد بريدك الإلكتروني...' : 'Confirming your email...'}
              </h1>
              <p className="text-slate-600">
                {isAR ? 'يرجى الانتظار...' : 'Please wait...'}
              </p>
            </div>
          )}

          {status === 'success' && (
            <div>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-green-900 mb-4">
                {isAR ? 'تم التأكيد بنجاح!' : 'Successfully Confirmed!'}
              </h1>
              <p className="text-green-700 mb-6">
                {message}
              </p>
                              <button
                  onClick={handleGoToLogin}
                  className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
                >
                  {isAR ? 'تسجيل الدخول' : 'Sign In'}
                </button>
            </div>
          )}

          {status === 'error' && (
            <div>
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-red-900 mb-4">
                {isAR ? 'خطأ في التأكيد' : 'Confirmation Error'}
              </h1>
              <p className="text-red-700 mb-4">
                {message}
              </p>
              {errorDetails && (
                <p className="text-sm text-red-600 mb-6">
                  {errorDetails}
                </p>
              )}
              
              <div className="space-y-3">
                <button
                  onClick={handleResendEmail}
                  className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
                >
                  {isAR ? 'إعادة إرسال رابط التأكيد' : 'Resend Confirmation Link'}
                </button>
                
                <button
                  onClick={handleGoToLogin}
                  className="w-full px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-300 transition-colors"
                >
                  {isAR ? 'العودة لتسجيل الدخول' : 'Back to Sign In'}
                </button>
              </div>
            </div>
          )}
        </div>
      </Container>
    </main>
  );
}
