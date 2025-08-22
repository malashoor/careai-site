import SiteHeaderUnified from "@/app/components/SiteHeaderUnified";
import SiteFooter from "@/app/components/SiteFooter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — CareAI",
  description: "CareAI Privacy Policy - Learn how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeaderUnified locale="en" />
      <main>
        <div className="mx-auto max-w-4xl px-4 py-16">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-ink-900 mb-8">CareAI Privacy Policy</h1>
            
            <div className="text-ink-600 mb-8">
              <p><strong>Last updated:</strong> August 19, 2025</p>
              <p>
                This Privacy Policy explains how CareAI (&ldquo;CareAI,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, and shares information when you use our websites, applications, and related services (collectively, the &ldquo;Services&rdquo;).
              </p>
            </div>

            <div className="bg-ink-50 border-l-4 border-brand-blue p-6 mb-8">
              <p className="text-ink-700 font-medium">
                <strong>Plain language summary</strong> (not a substitute for the full policy): we collect account, device, and health‑related information to provide the Services, keep people safe, improve reliability, and meet legal requirements. You control your data and can access, correct, export, or delete it.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">1. Who we are</h2>
            <p><strong>Data controller:</strong> CareAI Co.</p>
            <p><strong>Contact:</strong> privacy@careai.com.</p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">2. Scope</h2>
            <p>
              This policy applies to the Services and to individuals who use them (patients, caregivers, family members, and clinicians). If you use CareAI through a healthcare provider, we may process data as a <strong>processor</strong> on the provider&apos;s behalf subject to a Business Associate Agreement (BAA) or Data Processing Agreement (DPA).
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">3. Information we collect</h2>
            <p>We collect information <strong>you provide</strong>, information <strong>automatically</strong>, and information from <strong>integrations</strong> you connect.</p>

            <h3 className="text-xl font-bold text-ink-900 mt-8 mb-3">A) You provide</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Profile & contact: name, email, phone, preferred language, emergency contacts.</li>
              <li>Health information you enter or authorize us to access: symptoms, medications, schedules, notes.</li>
              <li>Communications: messages, support requests, recorded voice notes (if you enable recording).</li>
              <li>Payment & subscription details (processed by third‑party payment providers—CareAI does not store full card numbers).</li>
            </ul>

            <h3 className="text-xl font-bold text-ink-900 mt-8 mb-3">B) Automatically collected</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Device & app data: device model/OS, app version, unique identifiers, crash logs, performance metrics.</li>
              <li>Usage data: features used, buttons clicked, pages viewed, session timestamps, approximate location derived from IP.</li>
            </ul>

            <h3 className="text-xl font-bold text-ink-900 mt-8 mb-3">C) From integrations you connect</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Wearables / health platforms (e.g., HealthKit / Google Fit, Bluetooth devices).</li>
              <li>EHR/EMR systems or clinic software (if your organization connects these).</li>
            </ul>
            <p>We only access data you explicitly authorize.</p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">4. Why we use your information (purposes & legal bases)</h2>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Provide and secure the Services</strong> (perform the contract; legitimate interests).</li>
              <li><strong>Care features</strong> such as medication reminders, adherence tracking, fall alerts, voice assistant, and sharing with approved caregivers (consent; vital interests; substantial public interest where permitted).</li>
              <li><strong>Research and product improvement</strong> such as analytics, debugging, A/B testing (legitimate interests; consent where required).</li>
              <li><strong>Communications</strong> like service messages, security alerts, and—with your opt‑in—marketing (consent; legitimate interests).</li>
              <li><strong>Legal compliance</strong> including responding to lawful requests and enforcing terms (legal obligation; legitimate interests).</li>
            </ul>

            <div className="bg-ink-50 border-l-4 border-brand-blue p-6 mb-8">
              <p className="text-ink-700">
                <strong>Special category / health data (GDPR):</strong> We process health data only with your <strong>explicit consent</strong>, to protect vital interests, or as permitted under a contract with your healthcare provider subject to appropriate safeguards (Art. 9 GDPR). You may withdraw consent at any time.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">5. Sharing your information</h2>
            <p>We share information only with:</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Your authorized contacts</strong> (family, caregivers, clinicians) when you enable sharing.</li>
              <li><strong>Service providers</strong> (cloud hosting, analytics, crash reporting, support). They may access data <strong>only</strong> to perform services for us under contract.</li>
              <li><strong>Emergency services</strong> if you trigger SOS or we reasonably believe there is imminent risk to life or safety.</li>
              <li><strong>Legal & compliance</strong> when required by law, to protect rights and safety, or in a corporate transaction (with notice and safeguards).</li>
            </ul>
            <p>We <strong>do not sell</strong> your personal information and we do not use sensitive health data for targeted advertising.</p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">6. International transfers</h2>
            <p>
              We may transfer data to countries with different privacy laws. Where we do, we use safeguards such as <strong>Standard Contractual Clauses (SCCs)</strong> and, for transfers to the U.S., participation in the <strong>EU‑U.S. Data Privacy Framework (DPF)</strong> (if certified). Copies of relevant safeguards are available upon request.
            </p>
            <div className="bg-ink-50 border-l-4 border-brand-blue p-6 mb-8">
              <p className="text-ink-700 italic">
                Note: The prior &ldquo;Privacy Shield&rdquo; framework has been replaced; we rely on SCCs and/or DPF where applicable.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">7. Security</h2>
            <p>
              We use technical, organizational, and physical safeguards, including: TLS 1.3 in transit, encryption at rest for sensitive data, access controls, logging and monitoring, routine security testing, and incident response procedures. No method is 100% secure; we continuously improve our protections.
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">8. Retention</h2>
            <p>
              We retain data for as long as needed to deliver the Services and for legitimate purposes such as security, auditing, and legal compliance. Typical periods:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Active accounts:</strong> retained while your account is active.</li>
              <li><strong>After deletion request:</strong> deleted or anonymized within <strong>30 days</strong> (backups within <strong>90 days</strong>).</li>
              <li><strong>Analytics & crash logs:</strong> up to <strong>12 months</strong>, then aggregated or deleted.</li>
            </ul>
            <p>Actual periods may vary by record type and law.</p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">9. Your choices & rights</h2>
            <p>
              Depending on where you live, you may have rights to <strong>access, correct, delete, restrict, object to processing, portability,</strong> and <strong>withdraw consent</strong>.
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>EEA/UK/Swiss:</strong> rights under GDPR/UK GDPR; you may contact your Supervisory Authority.</li>
              <li><strong>California:</strong> rights under CCPA/CPRA, including to know, delete, correct, and opt‑out of the sale/share of personal information (we do not sell/share in the CPRA sense).</li>
            </ul>
            <p>Request via <strong>privacy@careai.com</strong> or in‑app settings. We will verify your request and respond within required timeframes.</p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">10. Children&apos;s privacy</h2>
            <p>
              CareAI is not directed to children under 13 and does not knowingly collect their data without verifiable parental consent. If you believe a child provided data, contact us and we will take appropriate action.
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">11. Cookies & similar technologies</h2>
            <p>
              Our web properties use cookies/SDKs to remember preferences, secure sessions, measure usage, and improve performance. You can manage cookies in your browser and opt‑out of certain analytics where available. Some features may not function without essential cookies.
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">12. Third‑party services</h2>
            <p>
              We integrate with analytics, crash reporting, performance monitoring, health platforms, and payment processors. Their use of information is governed by their own privacy policies. We contractually require appropriate safeguards and minimize sharing.
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">13. Automated decision‑making</h2>
            <p>
              We may use automated processing to detect anomalies (e.g., potential falls or medication non‑adherence). These detections are designed to assist—not replace—clinical judgment. You can request human review via support.
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">14. Security incidents</h2>
            <p>
              If we discover a breach of security that affects your data, we will investigate, notify you and regulators when required, and take remedial steps.
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">15. Changes to this policy</h2>
            <p>
              We will post updates here and update the &ldquo;Last updated&rdquo; date. If changes materially affect your rights, we will provide additional notice and seek consent where required.
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">16. Contact</h2>
            <p>Questions or requests: <strong>privacy@careai.com</strong></p>
            <p>Postal: Saudi Arabia, Eastern Region, Khobar 31952 P.O. Box 32035</p>
            <p>Telephone: +966 5333 53318</p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
