'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getCurrentUser, signOut } from '@/lib/supabase';
import Container from '@/components/Container';

export default function DashboardPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const isAR = locale === 'ar';

  useEffect(() => {
    const checkUser = async () => {
      try {
        const currentUser = await getCurrentUser();
        if (!currentUser) {
          router.push(`/${locale}/auth/login`);
          return;
        }
        setUser(currentUser);
      } catch (error) {
        console.error('Error checking user:', error);
        router.push(`/${locale}/auth/login`);
      } finally {
        setLoading(false);
      }
    };

    checkUser();
  }, [locale, router]);

  const handleSignOut = async () => {
    try {
      await signOut();
      router.push(`/${locale}/welcome`);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (loading) {
    return (
      <main className="py-16">
        <Container>
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-500 mx-auto"></div>
            <p className="mt-4 text-slate-600">
              {isAR ? 'جاري التحميل...' : 'Loading...'}
            </p>
          </div>
        </Container>
      </main>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <main className="py-16">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              {isAR ? 'لوحة التحكم' : 'Dashboard'}
            </h1>
            <p className="text-xl text-slate-600">
              {isAR ? 'مرحباً بك في CareAI' : 'Welcome to CareAI'}
            </p>
          </div>

          {/* User Info Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-6">
              {isAR ? 'معلومات الحساب' : 'Account Information'}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-2">
                  {isAR ? 'البريد الإلكتروني' : 'Email'}
                </label>
                <p className="text-slate-800 font-medium">{user.email}</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-2">
                  {isAR ? 'معرف المستخدم' : 'User ID'}
                </label>
                <p className="text-slate-800 font-mono text-sm">{user.id}</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-2">
                  {isAR ? 'تاريخ الإنشاء' : 'Created At'}
                </label>
                <p className="text-slate-800">
                  {new Date(user.created_at).toLocaleDateString(
                    locale === 'ar' ? 'ar-SA' : 'en-US',
                    { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    }
                  )}
                </p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-2">
                  {isAR ? 'آخر تحديث' : 'Last Updated'}
                </label>
                <p className="text-slate-800">
                  {new Date(user.updated_at || user.created_at).toLocaleDateString(
                    locale === 'ar' ? 'ar-SA' : 'en-US',
                    { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    }
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-6">
              {isAR ? 'إجراءات سريعة' : 'Quick Actions'}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-4">
              <button
                onClick={() => router.push('/app')}
                className="p-4 bg-blue-50 border border-blue-200 rounded-xl hover:bg-blue-100 transition-colors text-left"
              >
                <h3 className="font-semibold text-blue-800 mb-2">
                  {isAR ? 'العودة للتطبيق' : 'Back to App'}
                </h3>
                <p className="text-sm text-blue-600">
                  {isAR ? 'العودة إلى التطبيق الرئيسي' : 'Return to main application'}
                </p>
              </button>
              
              <button
                onClick={() => router.push(`/${locale}/contact`)}
                className="p-4 bg-green-50 border border-green-200 rounded-xl hover:bg-green-100 transition-colors text-left"
              >
                <h3 className="font-semibold text-green-800 mb-2">
                  {isAR ? 'خطط الاشتراك' : 'Subscription Plans'}
                </h3>
                <p className="text-sm text-green-600">
                  {isAR ? 'عرض خطط الاشتراك المتاحة' : 'View available subscription plans'}
                </p>
              </button>
              
              <button
                onClick={() => router.push(`/${locale}/contact`)}
                className="p-4 bg-purple-50 border border-purple-200 rounded-xl hover:bg-purple-100 transition-colors text-left"
              >
                <h3 className="font-semibold text-purple-800 mb-2">
                  {isAR ? 'الدعم' : 'Support'}
                </h3>
                <p className="text-sm text-purple-600">
                  {isAR ? 'الحصول على المساعدة والدعم' : 'Get help and support'}
                </p>
              </button>
            </div>
          </div>

          {/* Sign Out */}
          <div className="text-center">
            <button
              onClick={handleSignOut}
              className="px-8 py-3 bg-red-500 text-white font-semibold rounded-xl hover:bg-red-600 transition-colors"
            >
              {isAR ? 'تسجيل الخروج' : 'Sign Out'}
            </button>
          </div>
        </div>
      </Container>
    </main>
  );
}
