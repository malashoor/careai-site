import Navbar from "@/components/Navbar";
import SiteFooter from "@/app/components/SiteFooter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — CareAI",
  description: "CareAI Terms of Service - Learn about the terms and conditions for using our services.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-ink-50">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-ink-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-ink-500 max-w-3xl mx-auto">
              Please read these terms carefully before using our services.
            </p>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4">
            <div className="prose prose-lg max-w-none">
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing and using CareAI services, you accept and agree to be bound by the terms and provision of this agreement.
              </p>

              <h2>2. Description of Service</h2>
              <p>
                CareAI provides AI-powered healthcare companion services including medication reminders, health check-ins, and emergency alerts.
              </p>

              <h2>3. User Responsibilities</h2>
              <p>
                Users are responsible for providing accurate health information and understanding that CareAI is not a substitute for professional medical advice.
              </p>

              <h2>4. Privacy and Data</h2>
              <p>
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service.
              </p>

              <h2>5. Medical Disclaimer</h2>
              <p>
                CareAI is not a medical device and should not be used as a substitute for professional medical advice, diagnosis, or treatment.
              </p>

              <h2>6. Limitation of Liability</h2>
              <p>
                CareAI shall not be liable for any indirect, incidental, special, consequential, or punitive damages.
              </p>

              <h2>7. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Continued use of the service constitutes acceptance of modified terms.
              </p>

              <h2>8. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at legal@careai.app
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
