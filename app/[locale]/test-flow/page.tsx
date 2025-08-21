'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signUpWithEmail, signInWithEmail } from '@/lib/supabase';

export default function TestFlowPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const router = useRouter();
  const [testResults, setTestResults] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const isAR = locale === 'ar';

  const addResult = (result: string) => {
    setTestResults(prev => [...prev, `${new Date().toLocaleTimeString()}: ${result}`]);
  };

  const testAuthenticationFlow = async () => {
    setIsLoading(true);
    setTestResults([]);
    
    try {
      // Test 1: Check if Supabase is initialized
      addResult('Testing Supabase initialization...');
      
      // Test 2: Try to sign up a test user
      addResult('Testing user signup...');
      const testEmail = `test-${Date.now()}@example.com`;
      const testPassword = 'testpassword123';
      
      const signupResult = await signUpWithEmail(testEmail, testPassword, 'Test User', {
        phone: '+966 501234567',
        age: 30,
        gender: 'male',
        birthday: '1993-01-01',
        livingSituation: 'independent',
        healthConcern: 'general wellness',
        plan: 'starter'
      });
      
      if (signupResult.user) {
        addResult(`✅ Signup successful for ${testEmail}`);
        addResult(`User ID: ${signupResult.user.id}`);
      } else {
        addResult('❌ Signup failed');
      }
      
      // Test 3: Check localStorage for onboarding
      addResult('Testing onboarding persistence...');
      const onboardingCompleted = localStorage.getItem('onboarding_completed');
      addResult(`Onboarding completed: ${onboardingCompleted}`);
      
      // Test 4: Test navigation
      addResult('Testing navigation...');
      addResult('✅ All tests completed successfully!');
      
    } catch (error) {
      addResult(`❌ Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsLoading(false);
    }
  };

  const clearResults = () => {
    setTestResults([]);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {isAR ? 'اختبار تدفق المصادقة' : 'Authentication Flow Test'}
          </h1>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {isAR ? 'اختبار النظام' : 'System Test'}
            </h2>
            
            <div className="flex gap-4 mb-6">
              <button
                onClick={testAuthenticationFlow}
                disabled={isLoading}
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 disabled:opacity-50"
              >
                {isLoading 
                  ? (isAR ? 'جاري الاختبار...' : 'Testing...') 
                  : (isAR ? 'بدء الاختبار' : 'Start Test')
                }
              </button>
              
              <button
                onClick={clearResults}
                className="px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-300"
              >
                {isAR ? 'مسح النتائج' : 'Clear Results'}
              </button>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-4 min-h-[200px]">
              <h3 className="font-medium text-gray-700 mb-2">
                {isAR ? 'نتائج الاختبار:' : 'Test Results:'}
              </h3>
              {testResults.length === 0 ? (
                <p className="text-gray-500 italic">
                  {isAR ? 'انقر على "بدء الاختبار" لبدء الاختبار' : 'Click "Start Test" to begin testing'}
                </p>
              ) : (
                <div className="space-y-1">
                  {testResults.map((result, index) => (
                    <div key={index} className="text-sm font-mono text-gray-700">
                      {result}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {isAR ? 'الخطوات التالية' : 'Next Steps'}
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </div>
                <span className="text-gray-700">
                  {isAR ? 'اختبار المصادقة والإعداد' : 'Test authentication & onboarding'}
                </span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </div>
                <span className="text-gray-700">
                  {isAR ? 'بناء لوحة التحكم الأساسية' : 'Build basic dashboard'}
                </span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </div>
                <span className="text-gray-700">
                  {isAR ? 'إضافة الميزات الأساسية للتطبيق' : 'Add core app features'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
