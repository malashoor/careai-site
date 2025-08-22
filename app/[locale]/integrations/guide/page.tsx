"use client";

import { dictionary } from "../../../../lib/dictionary";
import Container from "../../../../components/Container";

export default function IntegrationsGuidePage({ params: { locale } }: { params: { locale: "en" | "ar" } }) {
  const i = dictionary[locale];
  const isRTL = locale === "ar";

  return (
    <main className="py-16">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              {locale === "ar" ? "دليل التكامل مع API" : "API Integration Guide"}
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {locale === "ar"
                ? "تعلم كيفية دمج CareAI مع أنظمتك الصحية"
                : "Learn how to integrate CareAI with your healthcare systems"
              }
            </p>
          </div>

          {/* Authentication */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              {locale === "ar" ? "المصادقة" : "Authentication"}
            </h2>
            <div className="bg-slate-50 rounded-lg p-6">
              <p className="text-slate-700 mb-4">
                {locale === "ar"
                  ? "جميع طلبات API تتطلب مفتاح API صالح في رأس الطلب:"
                  : "All API requests require a valid API key in the request header:"
                }
              </p>
              <div className="bg-slate-800 text-green-400 rounded p-4 font-mono text-sm">
                Authorization: Bearer cai_abc123...
              </div>
            </div>
          </section>

          {/* Rate Limiting */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              {locale === "ar" ? "حدود المعدل" : "Rate Limiting"}
            </h2>
            <div className="bg-slate-50 rounded-lg p-6">
              <p className="text-slate-700 mb-4">
                {locale === "ar"
                  ? "الحد الافتراضي هو 60 طلب في الدقيقة. يمكن تخصيص هذا الحد حسب احتياجاتك."
                  : "Default limit is 60 requests per minute. This limit can be customized based on your needs."
                }
              </p>
              <div className="bg-slate-800 text-green-400 rounded p-4 font-mono text-sm">
                Rate-Limit: 60/minute
              </div>
            </div>
          </section>

          {/* Billing & Credits */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              {locale === "ar" ? "الفواتير والرصيد" : "Billing & Credits"}
            </h2>
            <div className="bg-slate-50 rounded-lg p-6">
              <p className="text-slate-700 mb-4">
                {locale === "ar"
                  ? "يتم خصم رسوم من رصيدك المسبق الدفع لكل طلب API. عند نفاد الرصيد، ستحصل على خطأ 402."
                  : "Charges are deducted from your prepaid credit balance for each API request. When credit is depleted, you'll receive a 402 error."
                }
              </p>
              <div className="bg-slate-800 text-red-400 rounded p-4 font-mono text-sm">
                HTTP 402 Payment Required
              </div>
            </div>
          </section>

          {/* Webhooks */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              {locale === "ar" ? "Webhooks" : "Webhooks"}
            </h2>
            <div className="bg-slate-50 rounded-lg p-6">
              <p className="text-slate-700 mb-4">
                {locale === "ar"
                  ? "للتحقق من صحة webhooks، تحقق من توقيع HMAC:"
                  : "To verify webhook authenticity, check the HMAC signature:"
                }
              </p>
              <div className="bg-slate-800 text-green-400 rounded p-4 font-mono text-sm">
                X-CAI-Signature: sha256=&lt;hex&gt;
              </div>
            </div>
          </section>

          {/* Sample Requests */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              {locale === "ar" ? "أمثلة على الطلبات" : "Sample Requests"}
            </h2>
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                {locale === "ar" ? "اختبار الاتصال" : "Ping Test"}
              </h3>
              <div className="bg-slate-800 text-green-400 rounded p-4 font-mono text-sm overflow-x-auto">
                <div>curl -H &quot;Authorization: Bearer cai_abc123...&quot; \</div>
                <div className="ml-4">https://www.careai.app/api/ping</div>
              </div>
              
              <h3 className="text-lg font-semibold text-slate-900 mb-3 mt-6">
                {locale === "ar" ? "إنشاء حدث صحي" : "Create Health Event"}
               </h3>
              <pre className="bg-slate-800 text-green-400 rounded p-4 font-mono text-sm overflow-x-auto whitespace-pre-wrap">
{`curl -X POST \\
  -H &quot;Authorization: Bearer cai_abc123...&quot; \\
  -H &quot;Content-Type: application/json&quot; \\
  -d '{\"type\": \"medication_reminder\", \"patient_id\": \"123\"}' \\
  https://www.careai.app/api/events/create`}
              </pre>
            </div>
          </section>

          {/* Response Format */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              {locale === "ar" ? "تنسيق الاستجابة" : "Response Format"}
            </h2>
            <div className="bg-slate-50 rounded-lg p-6">
              <p className="text-slate-700 mb-4">
                {locale === "ar"
                  ? "جميع الاستجابات تأتي بتنسيق JSON:"
                  : "All responses come in JSON format:"
                }
              </p>
              <div className="bg-slate-800 text-green-400 rounded p-4 font-mono text-sm">
                <div>{"{"}</div>
                <div className="ml-4">&quot;ok&quot;: true,</div>
                <div className="ml-4">&quot;ts&quot;: 1640995200000,</div>
                <div className="ml-4">&quot;data&quot;: {"{"}...{"}"}</div>
                <div>{"}"}</div>
              </div>
            </div>
          </section>

          {/* Error Handling */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              {locale === "ar" ? "معالجة الأخطاء" : "Error Handling"}
            </h2>
            <div className="bg-slate-50 rounded-lg p-6">
              <div className="space-y-3">
                <div className="bg-slate-800 text-red-400 rounded p-4 font-mono text-sm">
                  <div>HTTP 401 - Missing or invalid API key</div>
                </div>
                <div className="bg-slate-800 text-red-400 rounded p-4 font-mono text-sm">
                  <div>HTTP 402 - Insufficient credit</div>
                </div>
                <div className="bg-slate-800 text-red-400 rounded p-4 font-mono text-sm">
                  <div>HTTP 429 - Rate limit exceeded</div>
                </div>
                <div className="bg-slate-800 text-red-400 rounded p-4 font-mono text-sm">
                  <div>HTTP 500 - Internal server error</div>
                </div>
              </div>
            </div>
          </section>

          {/* Safety Notice */}
          <section className="mb-12">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">
                    {locale === "ar" ? "تنبيه مهم" : "Important Notice"}
                  </h3>
                  <div className="mt-2 text-sm text-red-700">
                    <p>
                      {locale === "ar"
                        ? "CareAI ليس جهازاً طبياً ولا بديلاً عن خدمات الطوارئ. استشر دائماً مقدم الرعاية الصحية المؤهل للحصول على المشورة الطبية."
                        : "CareAI is not a medical device or a substitute for emergency services. Always consult with a qualified healthcare provider for medical advice."
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Support */}
          <section className="text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              {locale === "ar" ? "هل تحتاج مساعدة؟" : "Need Help?"}
            </h2>
            <p className="text-slate-600 mb-6">
              {locale === "ar"
                ? "فريق الدعم لدينا هنا لمساعدتك في التكامل"
                : "Our support team is here to help with integration"
              }
            </p>
            <a
              href="mailto:support@careai.app"
              className="inline-block px-8 py-4 bg-brand-600 text-white rounded-2xl font-semibold hover:bg-brand-700 transition-colors"
            >
              {locale === "ar" ? "اتصل بالدعم" : "Contact Support"}
            </a>
          </section>
        </div>
      </Container>
    </main>
  );
}
