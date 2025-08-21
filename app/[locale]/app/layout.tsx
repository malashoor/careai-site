import { ReactNode } from 'react';
import { getCurrentUser } from '@/lib/supabase';
import { redirect } from 'next/navigation';
import AppNavigation from '@/components/AppNavigation';

interface AppLayoutProps {
  children: ReactNode;
  params: { locale: string };
}

export default async function AppLayout({ children, params }: AppLayoutProps) {
  const { locale } = params;
  
  // Check if user is authenticated
  const user = await getCurrentUser();
  if (!user) {
    redirect(`/${locale}/auth/login`);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AppNavigation locale={locale} user={user} />
      <main className="pt-16">
        {children}
      </main>
    </div>
  );
}
