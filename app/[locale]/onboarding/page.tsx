'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface OnboardingSlide {
  imagePath: string;
  title: string;
  description: string;
}

// Localized onboarding content - keeping the approved structure
const getOnboardingSlides = (locale: string): OnboardingSlide[] => {
  if (locale === 'ar') {
    return [
      {
        imagePath: '/images/Hospital.png',
        title: 'مساعد الصحة الذكي',
        description: 'رفيقك الشخصي الذكي لمراقبة الصحة والتوجيه.',
      },
      {
        imagePath: '/images/Insurance.png',
        title: 'التغطية الذكية والرؤى',
        description: 'افهم وحسّن خطط الرعاية مع التوصيات الذكية.',
      },
      {
        imagePath: '/images/Caregiver.png',
        title: 'دعم العائلة ومقدمي الرعاية',
        description: 'أبقِ أحباءك متصلين برحلتك الصحية.',
      },
      {
        imagePath: '/images/Pharmacies.png',
        title: 'الأدوية والتذكيرات',
        description: 'لا تفوت الأدوية أو المواعيد أو المهام الصحية المهمة.',
      },
    ];
  }
  
  // English content (approved and unchanged)
  return [
    {
      imagePath: '/images/Hospital.png',
      title: 'AI Health Assistant',
      description: 'Your personal AI companion for health monitoring and guidance.',
    },
    {
      imagePath: '/images/Insurance.png',
      title: 'Smart Coverage & Insights',
      description: 'Understand and optimize care plans with intelligent recommendations.',
    },
    {
      imagePath: '/images/Caregiver.png',
      title: 'Family & Caregiver Support',
      description: 'Keep your loved ones connected to your health journey.',
    },
    {
      imagePath: '/images/Pharmacies.png',
      title: 'Medication & Reminders',
      description: 'Never miss medications, appointments, or important health tasks.',
    },
  ];
};

export default function OnboardingPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const isAR = locale === 'ar';
  
  // Get localized slides based on user's language selection
  const slides = getOnboardingSlides(locale);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      completeOnboarding();
    }
  };

  const previousSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const completeOnboarding = async () => {
    if (isLoading) return;
    
    setIsLoading(true);
    try {
      // Set localStorage flag (mirrors Flutter SharedPreferences)
      localStorage.setItem('onboarding_completed', 'true');
      
      // Navigate to welcome page (mirrors Flutter navigation)
      router.push(`/${locale}/welcome`);
    } catch (error) {
      console.error('Error completing onboarding:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const skipOnboarding = async () => {
    if (isLoading) return;
    
    setIsLoading(true);
    try {
      // Set localStorage flag (mirrors Flutter SharedPreferences)
      localStorage.setItem('onboarding_completed', 'true');
      
      // Navigate to welcome page (mirrors Flutter navigation)
      router.push(`/${locale}/welcome`);
    } catch (error) {
      console.error('Error skipping onboarding:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Skip button - top right */}
      <div className="absolute top-4 right-4 z-10">
        <button
          onClick={skipOnboarding}
          disabled={isLoading}
          className="px-4 py-2 text-blue-600 font-semibold hover:text-blue-700 disabled:opacity-50"
        >
          {isAR ? 'تخطي' : 'Skip'}
        </button>
      </div>

      {/* Main content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-6">
        {/* Image */}
        <div className="w-80 h-60 mb-8 relative">
          <Image
            src={slides[currentSlide].imagePath}
            alt={slides[currentSlide].title}
            fill
            className="rounded-2xl object-cover shadow-lg"
            sizes="(max-width: 768px) 100vw, 320px"
          />
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">
          {slides[currentSlide].title}
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-600 text-center max-w-md mb-12 leading-relaxed">
          {slides[currentSlide].description}
        </p>

        {/* Page indicators */}
        <div className="flex space-x-2 mb-8">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Navigation buttons */}
        <div className="flex space-x-4">
          {currentSlide > 0 && (
            <button
              onClick={previousSlide}
              disabled={isLoading}
              className="px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-300 disabled:opacity-50 transition-colors"
            >
              {isAR ? 'السابق' : 'Previous'}
            </button>
          )}
          
          <button
            onClick={nextSlide}
            disabled={isLoading}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 disabled:opacity-50 transition-colors"
          >
            {currentSlide === slides.length - 1 
              ? (isAR ? 'ابدأ الآن' : 'Get Started')
              : (isAR ? 'التالي' : 'Next')
            }
          </button>
        </div>
      </div>
    </div>
  );
}
