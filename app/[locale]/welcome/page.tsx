'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function WelcomePage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const router = useRouter();
  const isAR = locale === 'ar';

  const handleSignIn = () => {
    router.push(`/${locale}/auth/login`);
  };

  const handleCreateProfile = () => {
    router.push(`/${locale}/auth/login?mode=signup`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Image */}
          <div className="mb-12">
            <Image
              src="/images/welcome_ai_hero.png"
              alt="CareAI Welcome"
              width={400}
              height={300}
              className="mx-auto rounded-2xl shadow-lg"
              priority
            />
          </div>

          {/* Welcome Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            {isAR ? 'مرحباً بك في CareAI' : 'Welcome to CareAI'}
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            {isAR 
              ? 'رفيق الذكاء الاصطناعي الشخصي لمراقبة صحتك والتوجيه. ابق على اتصال مع عائلتك ومقدمي الرعاية الصحية.'
              : 'Your personal AI companion for health monitoring and guidance. Stay connected with your family and healthcare providers.'
            }
          </p>

          {/* Profile Images Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">
              {isAR ? 'من نحن' : 'Who We Are'}
            </h2>
            <div className="flex justify-center items-center space-x-8 md:space-x-12">
              {/* Guardian */}
              <div className="text-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden mx-auto mb-3 shadow-lg">
                  <Image
                    src="/images/guardian_1.png"
                    alt="Guardian"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm font-medium text-gray-700">
                  {isAR ? 'مقدم الرعاية' : 'Guardian'}
                </p>
              </div>

              {/* Senior */}
              <div className="text-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden mx-auto mb-3 shadow-lg">
                  <Image
                    src="/images/elderly_couple.png"
                    alt="Senior"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm font-medium text-gray-700">
                  {isAR ? 'المسن' : 'Senior'}
                </p>
              </div>

              {/* Doctor */}
              <div className="text-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden mx-auto mb-3 shadow-lg">
                  <Image
                    src="/images/doctor_1.png"
                    alt="Doctor"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm font-medium text-gray-700">
                  {isAR ? 'الطبيب' : 'Doctor'}
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4 md:space-y-0 md:space-x-6">
            <button
              onClick={handleSignIn}
              className="w-full md:w-auto px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors text-lg"
            >
              {isAR ? 'تسجيل الدخول' : 'Sign In'}
            </button>
            
            <button
              onClick={handleCreateProfile}
              className="w-full md:w-auto px-8 py-4 bg-transparent text-blue-600 font-semibold border-2 border-blue-600 rounded-xl hover:bg-blue-50 transition-colors text-lg"
            >
              {isAR ? 'إنشاء ملف شخصي' : 'Create Profile'}
            </button>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-gray-500">
            <p className="text-sm">
              {isAR 
                ? 'هل لديك حساب بالفعل؟ يمكنك تسجيل الدخول أو إنشاء حساب جديد.'
                : 'Already have an account? You can sign in or create a new profile.'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
