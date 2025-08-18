"use client";
import { useState, useRef, useEffect } from "react";
import Container from "@/components/Container";
import { t } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import { getSupabase, type Lead, type RoleData } from "@/lib/supabase";

type Role = 'senior' | 'family' | 'professional';
type Step = 'role' | 'details' | 'success';

interface FormData {
  role: Role | null;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  plan: string;
  consent: boolean;
  // Senior-specific fields
  age?: number;
  livingSituation?: string;
  primaryConcern?: string;
  // Family-specific fields
  relationship?: string;
  seniorAge?: number;
  careLevel?: string;
  // Professional-specific fields
  organization?: string;
  professionalRole?: string;
  organizationType?: string;
  useCase?: string;
}

export default function OnboardingPage({ params }: { params: { locale: Locale } }) {
  const i = t(params.locale);
  const [currentStep, setCurrentStep] = useState<Step>('role');
  const [formData, setFormData] = useState<FormData>({
    role: null,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    plan: 'starter',
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  
  // Accessibility refs
  const stepRef = useRef<HTMLDivElement>(null);
  const roleRefs = useRef<{ [key in Role]: HTMLButtonElement | null }>({
    senior: null,
    family: null,
    professional: null,
  });

  // Focus management for accessibility
  useEffect(() => {
    if (currentStep === 'role' && stepRef.current) {
      stepRef.current.focus();
    }
  }, [currentStep]);

  const handleRoleSelect = (role: Role) => {
    setFormData(prev => ({ ...prev, role }));
    setCurrentStep('details');
    setSubmitError(null);
  };

  const handleInputChange = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateForm = (): boolean => {
    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim()) {
      setSubmitError('Please fill in all required fields');
      return false;
    }
    
    if (!formData.consent) {
      setSubmitError('Please accept the terms and conditions');
      return false;
    }

    // Role-specific validation
    if (formData.role === 'senior') {
      if (!formData.age || !formData.livingSituation || !formData.primaryConcern) {
        setSubmitError('Please fill in all senior-specific fields');
        return false;
      }
    } else if (formData.role === 'family') {
      if (!formData.relationship || !formData.seniorAge || !formData.careLevel || !formData.primaryConcern) {
        setSubmitError('Please fill in all family-specific fields');
        return false;
      }
    } else if (formData.role === 'professional') {
      if (!formData.organization || !formData.professionalRole || !formData.organizationType || !formData.useCase) {
        setSubmitError('Please fill in all professional-specific fields');
        return false;
      }
    }

    return true;
  };

  const submitToSupabase = async (): Promise<boolean> => {
    const supabase = getSupabase();
    if (!supabase) return false;
    
    try {
      // Insert lead
      const { data: leadData, error: leadError } = await supabase
        .from('leads')
        .insert([{
          email: formData.email,
          first_name: formData.firstName,
          last_name: formData.lastName,
          phone: formData.phone || null,
          role: formData.role!,
          plan: formData.plan,
          consent: formData.consent,
          source: 'onboarding'
        }])
        .select()
        .single();

      if (leadError) throw leadError;
      if (!leadData?.id) throw new Error('No lead ID returned');

      // Insert role-specific data
      const roleData: Partial<RoleData> = {
        lead_id: leadData.id as string,
        role: formData.role!,
      };

      if (formData.role === 'senior') {
        roleData.senior_data = {
          age: formData.age,
          living_situation: formData.livingSituation,
          primary_concern: formData.primaryConcern,
        };
      } else if (formData.role === 'family') {
        roleData.family_data = {
          relationship: formData.relationship,
          senior_age: formData.seniorAge,
          care_level: formData.careLevel,
          primary_concern: formData.primaryConcern,
        };
      } else if (formData.role === 'professional') {
        roleData.professional_data = {
          organization: formData.organization,
          role: formData.professionalRole,
          organization_type: formData.organizationType,
          use_case: formData.useCase,
        };
      }

      const { error: roleError } = await supabase
        .from('role_data')
        .insert([roleData]);

      if (roleError) throw roleError;

      return true;
    } catch (error) {
      console.error('Supabase error:', error);
      return false;
    }
  };

  const submitToNetlifyForms = async (): Promise<boolean> => {
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('form-name', 'onboarding');
      formDataToSend.append('role', formData.role!);
      formDataToSend.append('firstName', formData.firstName);
      formDataToSend.append('lastName', formData.lastName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('plan', formData.plan);
      formDataToSend.append('consent', formData.consent.toString());
      
      // Add role-specific data
      if (formData.role === 'senior') {
        formDataToSend.append('age', formData.age?.toString() || '');
        formDataToSend.append('livingSituation', formData.livingSituation || '');
        formDataToSend.append('primaryConcern', formData.primaryConcern || '');
      } else if (formData.role === 'family') {
        formDataToSend.append('relationship', formData.relationship || '');
        formDataToSend.append('seniorAge', formData.seniorAge?.toString() || '');
        formDataToSend.append('careLevel', formData.careLevel || '');
        formDataToSend.append('primaryConcern', formData.primaryConcern || '');
      } else if (formData.role === 'professional') {
        formDataToSend.append('organization', formData.organization || '');
        formDataToSend.append('professionalRole', formData.professionalRole || '');
        formDataToSend.append('organizationType', formData.organizationType || '');
        formDataToSend.append('useCase', formData.useCase || '');
      }

      const response = await fetch('/', {
        method: 'POST',
        body: formDataToSend,
      });

      return response.ok;
    } catch (error) {
      console.error('Netlify Forms error:', error);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    // Try Supabase first
    let success = await submitToSupabase();
    
    // Fallback to Netlify Forms if Supabase fails
    if (!success) {
      success = await submitToNetlifyForms();
    }

    if (success) {
      setCurrentStep('success');
    } else {
      setSubmitError('Failed to submit. Please try again or contact support.');
    }

    setIsSubmitting(false);
  };

  const renderRoleSelection = () => (
    <div className="max-w-4xl mx-auto text-center" ref={stepRef} tabIndex={-1}>
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
        {i.cta.onboarding.title}
      </h1>
      <p className="text-xl text-slate-600 mb-12">
        {i.cta.onboarding.subtitle}
      </p>
      
      <div className="grid md:grid-cols-3 gap-8">
        {(['senior', 'family', 'professional'] as Role[]).map((role) => (
          <button
            key={role}
            ref={(el) => { roleRefs.current[role] = el; }}
            onClick={() => handleRoleSelect(role)}
            className="card p-8 text-center hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-brand-500 focus:ring-opacity-50"
            aria-label={`Select ${i.cta.onboarding.roles[role].title}`}
          >
            <div className="text-6xl mb-4">{i.cta.onboarding.roles[role].icon}</div>
            <h3 className="text-2xl font-bold mb-3">{i.cta.onboarding.roles[role].title}</h3>
            <p className="text-slate-600">{i.cta.onboarding.roles[role].subtitle}</p>
          </button>
        ))}
      </div>
    </div>
  );

  const renderDetailsForm = () => (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">{i.cta.onboarding.steps.details}</h1>
        <p className="text-slate-600">Tell us more about yourself</p>
      </div>

             <form onSubmit={handleSubmit} className="card p-8">
         {/* Hidden Netlify Forms field */}
         <input type="hidden" name="form-name" value="onboarding" />
         
         {/* Basic Fields */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">
              {i.cta.onboarding.fields.basic.firstName} *
            </label>
            <input
              type="text"
              id="firstName"
              value={formData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-brand-500 focus:border-transparent"
              required
              aria-required="true"
            />
          </div>
          
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">
              {i.cta.onboarding.fields.basic.lastName} *
            </label>
            <input
              type="text"
              id="lastName"
              value={formData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-brand-500 focus:border-transparent"
              required
              aria-required="true"
            />
          </div>
        </div>
        
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
            {i.cta.onboarding.fields.basic.email} *
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-brand-500 focus:border-transparent"
            required
            aria-required="true"
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
            {i.cta.onboarding.fields.basic.phone}
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-brand-500 focus:border-transparent"
          />
        </div>

        {/* Role-specific Fields */}
        {formData.role === 'senior' && (
          <div className="space-y-4 mb-6">
            <div>
              <label htmlFor="age" className="block text-sm font-medium text-slate-700 mb-2">
                {i.cta.onboarding.fields.senior.age} *
              </label>
              <input
                type="number"
                id="age"
                min="55"
                max="120"
                value={formData.age || ''}
                onChange={(e) => handleInputChange('age', parseInt(e.target.value))}
                className="w-full px-4 py-3 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                required
                aria-required="true"
              />
            </div>
            
            <div>
              <label htmlFor="livingSituation" className="block text-sm font-medium text-slate-700 mb-2">
                {i.cta.onboarding.fields.senior.livingSituation} *
              </label>
              <select
                id="livingSituation"
                value={formData.livingSituation || ''}
                onChange={(e) => handleInputChange('livingSituation', e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                required
                aria-required="true"
              >
                <option value="">Select living situation</option>
                <option value="independent">Living independently</option>
                <option value="assisted">Assisted living</option>
                <option value="nursing">Nursing home</option>
                <option value="family">With family</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="primaryConcern" className="block text-sm font-medium text-slate-700 mb-2">
                {i.cta.onboarding.fields.senior.primaryConcern} *
              </label>
              <select
                id="primaryConcern"
                value={formData.primaryConcern || ''}
                onChange={(e) => handleInputChange('primaryConcern', e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                required
                aria-required="true"
              >
                <option value="">Select primary concern</option>
                <option value="companionship">Companionship</option>
                <option value="medication">Medication reminders</option>
                <option value="safety">Safety monitoring</option>
                <option value="health">Health check-ins</option>
              </select>
            </div>
          </div>
        )}

        {formData.role === 'family' && (
          <div className="space-y-4 mb-6">
            <div>
              <label htmlFor="relationship" className="block text-sm font-medium text-slate-700 mb-2">
                {i.cta.onboarding.fields.family.relationship} *
              </label>
              <select
                id="relationship"
                value={formData.relationship || ''}
                onChange={(e) => handleInputChange('relationship', e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                required
                aria-required="true"
              >
                <option value="">Select relationship</option>
                <option value="child">Child</option>
                <option value="spouse">Spouse</option>
                <option value="sibling">Sibling</option>
                <option value="grandchild">Grandchild</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="seniorAge" className="block text-sm font-medium text-slate-700 mb-2">
                {i.cta.onboarding.fields.family.seniorAge} *
              </label>
              <input
                type="number"
                id="seniorAge"
                min="55"
                max="120"
                value={formData.seniorAge || ''}
                onChange={(e) => handleInputChange('seniorAge', parseInt(e.target.value))}
                className="w-full px-4 py-3 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                required
                aria-required="true"
              />
            </div>
            
            <div>
              <label htmlFor="careLevel" className="block text-sm font-medium text-slate-700 mb-2">
                {i.cta.onboarding.fields.family.careLevel} *
              </label>
              <select
                id="careLevel"
                value={formData.careLevel || ''}
                onChange={(e) => handleInputChange('careLevel', e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                required
                aria-required="true"
              >
                <option value="">Select care level</option>
                <option value="minimal">Minimal assistance needed</option>
                <option value="moderate">Moderate assistance needed</option>
                <option value="high">High assistance needed</option>
                <option value="full">Full-time care needed</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="primaryConcern" className="block text-sm font-medium text-slate-700 mb-2">
                {i.cta.onboarding.fields.family.primaryConcern} *
              </label>
              <select
                id="primaryConcern"
                value={formData.primaryConcern || ''}
                onChange={(e) => handleInputChange('primaryConcern', e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                required
                aria-required="true"
              >
                <option value="">Select primary concern</option>
                <option value="companionship">Companionship</option>
                <option value="medication">Medication reminders</option>
                <option value="safety">Safety monitoring</option>
                <option value="health">Health check-ins</option>
              </select>
            </div>
          </div>
        )}

        {formData.role === 'professional' && (
          <div className="space-y-4 mb-6">
            <div>
              <label htmlFor="organization" className="block text-sm font-medium text-slate-700 mb-2">
                {i.cta.onboarding.fields.professional.organization} *
              </label>
              <input
                type="text"
                id="organization"
                value={formData.organization || ''}
                onChange={(e) => handleInputChange('organization', e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                required
                aria-required="true"
              />
            </div>
            
            <div>
              <label htmlFor="professionalRole" className="block text-sm font-medium text-slate-700 mb-2">
                {i.cta.onboarding.fields.professional.role} *
              </label>
              <input
                type="text"
                id="professionalRole"
                value={formData.professionalRole || ''}
                onChange={(e) => handleInputChange('professionalRole', e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                required
                aria-required="true"
              />
            </div>
            
            <div>
              <label htmlFor="organizationType" className="block text-sm font-medium text-slate-700 mb-2">
                {i.cta.onboarding.fields.professional.organizationType} *
              </label>
              <select
                id="organizationType"
                value={formData.organizationType || ''}
                onChange={(e) => handleInputChange('organizationType', e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                required
                aria-required="true"
              >
                <option value="">Select organization type</option>
                <option value="hospital">Hospital</option>
                <option value="clinic">Clinic</option>
                <option value="senior-living">Senior Living Community</option>
                <option value="home-care">Home Care Agency</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="useCase" className="block text-sm font-medium text-slate-700 mb-2">
                {i.cta.onboarding.fields.professional.useCase} *
              </label>
              <select
                id="useCase"
                value={formData.useCase || ''}
                onChange={(e) => handleInputChange('useCase', e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                required
                aria-required="true"
              >
                <option value="">Select primary use case</option>
                <option value="patient-monitoring">Patient monitoring</option>
                <option value="family-communication">Family communication</option>
                <option value="care-coordination">Care coordination</option>
                <option value="quality-improvement">Quality improvement</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        )}

        {/* Plan Selection */}
        <div className="mb-6">
          <label htmlFor="plan" className="block text-sm font-medium text-slate-700 mb-2">
            Plan Selection
          </label>
          <select
            id="plan"
            value={formData.plan}
            onChange={(e) => handleInputChange('plan', e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-brand-500 focus:border-transparent"
          >
            <option value="starter">Starter - $9/month</option>
            <option value="family">Family - $19/month</option>
            <option value="professional">Professional - $39/month</option>
          </select>
        </div>

        {/* Consent Checkbox */}
        <div className="mb-6">
          <label className="flex items-start gap-3">
            <input
              type="checkbox"
              checked={formData.consent}
              onChange={(e) => handleInputChange('consent', e.target.checked)}
              className="mt-1 w-4 h-4 text-brand-600 border-slate-300 rounded focus:ring-brand-500"
              required
              aria-required="true"
            />
            <span className="text-sm text-slate-600">
              {i.cta.onboarding.fields.consent}
            </span>
          </label>
        </div>

        {/* Error Message */}
        {submitError && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl text-red-700" role="alert" aria-live="polite">
            {submitError}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 bg-brand-600 text-white rounded-2xl font-semibold hover:bg-brand-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-brand-500 focus:ring-opacity-50"
          aria-live="polite"
        >
          {isSubmitting ? i.cta.onboarding.fields.submitting : i.cta.onboarding.fields.submit}
        </button>

        {/* Back Button */}
        <button
          type="button"
          onClick={() => setCurrentStep('role')}
          className="w-full mt-4 py-3 border-2 border-slate-300 text-slate-700 rounded-2xl font-semibold hover:bg-slate-50 transition-colors focus:outline-none focus:ring-4 focus:ring-slate-500 focus:ring-opacity-50"
        >
          Back to Role Selection
        </button>
      </form>
    </div>
  );

  const renderSuccess = () => (
    <div className="max-w-2xl mx-auto text-center">
      <div className="card p-12">
        <div className="text-6xl mb-6">🎉</div>
        <h1 className="text-3xl font-bold mb-4">{i.cta.onboarding.success.title}</h1>
        <p className="text-xl text-slate-600 mb-8">{i.cta.onboarding.success.subtitle}</p>
        
        <div className="text-left mb-8">
          <h3 className="font-semibold mb-4">Next Steps:</h3>
          <ul className="space-y-2">
            {i.cta.onboarding.success.nextSteps.map((step, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-brand-600 font-bold">{index + 1}.</span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <a 
          href={`/${params.locale}`}
          className="inline-block px-8 py-4 bg-brand-600 text-white rounded-2xl font-semibold hover:bg-brand-700 transition-colors focus:outline-none focus:ring-4 focus:ring-brand-500 focus:ring-opacity-50"
        >
          {i.cta.onboarding.success.cta}
        </a>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50 via-white to-white">
      <Container>
        {/* Progress Indicator */}
        {currentStep !== 'success' && (
          <div className="py-8">
            <div className="max-w-md mx-auto">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-slate-600">Step {currentStep === 'role' ? 1 : 2} of 2</span>
                <span className="text-sm font-medium text-slate-600">{Math.round((currentStep === 'role' ? 1 : 2) / 2 * 100)}%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div 
                  className="bg-brand-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(currentStep === 'role' ? 1 : 2) / 2 * 100}%` }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Step Content */}
        {currentStep === 'role' && renderRoleSelection()}
        {currentStep === 'details' && renderDetailsForm()}
        {currentStep === 'success' && renderSuccess()}
      </Container>
    </div>
  );
}
