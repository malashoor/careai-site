"use client";

import { useState } from "react";
import { type Locale } from "@/lib/i18n";
import { dictionary } from "@/lib/dictionary";
import { getSupabase } from "@/lib/supabase";

interface PartnerFormProps {
  locale: Locale;
  type: "doctors" | "hospitals" | "insurance" | "charities";
}

export default function PartnerForm({ locale, type }: PartnerFormProps) {
  const i = dictionary[locale];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    role: "",
    phone: "",
    message: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const supabase = getSupabase();
      if (!supabase) {
        throw new Error("Supabase client not available");
      }
      
      // Insert into partner_leads table
      const { data, error } = await supabase
        .from("partner_leads")
        .insert([
          {
            name: formData.name,
            email: formData.email,
            organization: formData.organization,
            role: formData.role,
            phone: formData.phone,
            message: formData.message,
            partner_type: type,
            status: "new"
          }
        ])
        .select()
        .single();

      if (error) throw error;

      // Handle file upload if present
      if (file && data) {
        const fileName = `${data.id}_${file.name}`;
        const { error: uploadError } = await supabase.storage
          .from("partner_documents")
          .upload(fileName, file);

        if (uploadError) {
          console.error("File upload error:", uploadError);
        }
      }

      setIsSuccess(true);
      setFormData({ name: "", email: "", organization: "", role: "", phone: "", message: "" });
      setFile(null);
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was an error submitting your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section id="partner-form" className="py-16 bg-brand-50">
        <div className="max-w-2xl mx-auto text-center px-4">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">✅</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Thank You!
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              {i.partners.form.success}
            </p>
            <button
              onClick={() => setIsSuccess(false)}
              className="px-6 py-3 bg-brand-600 text-white rounded-xl hover:bg-brand-700 transition-colors"
              aria-label="Submit another partnership request"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="partner-form" className="py-16 bg-brand-50">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              {i.partners.form.title}
            </h2>
            <p className="text-lg text-slate-600">
              {i.partners.form.subtitle}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  {i.partners.form.fields.name} *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                  aria-label={i.partners.form.fields.name}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  {i.partners.form.fields.email} *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                  aria-label={i.partners.form.fields.email}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-slate-700 mb-2">
                  {i.partners.form.fields.organization} *
                </label>
                <input
                  id="organization"
                  type="text"
                  required
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                  aria-label={i.partners.form.fields.organization}
                />
              </div>
              
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-slate-700 mb-2">
                  {i.partners.form.fields.role} *
                </label>
                <input
                  id="role"
                  type="text"
                  required
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                  aria-label={i.partners.form.fields.role}
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                {i.partners.form.fields.phone}
              </label>
              <input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                aria-label={i.partners.form.fields.phone}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                {i.partners.form.fields.message} *
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                placeholder="Tell us about your organization and how you'd like to partner with CareAI..."
                aria-label={i.partners.form.fields.message}
              />
            </div>

            <div>
              <label htmlFor="file" className="block text-sm font-medium text-slate-700 mb-2">
                {i.partners.form.fields.file}
              </label>
              <input
                id="file"
                type="file"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                accept=".pdf,.doc,.docx,.txt"
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-brand-50 file:text-brand-700 hover:file:bg-brand-100"
                aria-label={i.partners.form.fields.file}
              />
              <p className="text-sm text-slate-500 mt-2">
                Accepted formats: PDF, DOC, DOCX, TXT (max 10MB)
              </p>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-brand-600 text-white font-semibold rounded-xl hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-label={isSubmitting ? "Submitting form" : i.partners.form.submit}
            >
              {isSubmitting ? "Submitting..." : i.partners.form.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
