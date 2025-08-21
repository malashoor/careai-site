'use client';

import { useEffect, useState } from 'react';

type Props = {
  action?: string;               // e.g., 'contact'
  onVerify: (token: string) => void;
  className?: string;
};

declare global {
  interface Window { grecaptcha?: any }
}

export default function ReCaptcha({ action = 'contact', onVerify, className }: Props) {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!;
  const [ready, setReady] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const id = 'recaptcha-script';
    if (document.getElementById(id)) {
      setReady(true);
      return;
    }

    const script = document.createElement('script');
    script.id = id;
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.async = true;
    script.defer = true;
    
    script.onload = () => {
      console.log('[ReCaptcha] Script loaded successfully');
      setReady(true);
      setError(null);
    };
    
    script.onerror = () => {
      console.error('[ReCaptcha] Failed to load script');
      setError('Failed to load reCAPTCHA');
    };

    document.head.appendChild(script);

    return () => {
      // Cleanup if component unmounts
      const existingScript = document.getElementById(id);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [siteKey]);

  async function getToken() {
    if (!window.grecaptcha || !ready) {
      setError('reCAPTCHA not ready');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      console.log('[ReCaptcha] Executing with action:', action);
      
      const token = await window.grecaptcha.execute(siteKey, { action });
      console.log('[ReCaptcha] Token received:', token ? '✅' : '❌');
      
      if (token) {
        onVerify(token);
        setError(null);
      } else {
        setError('Failed to get reCAPTCHA token');
      }
    } catch (err: any) {
      console.error('[ReCaptcha] Execution failed:', err);
      setError(`reCAPTCHA error: ${err?.message || 'Unknown error'}`);
    } finally {
      setLoading(false);
    }
  }

  if (!siteKey) {
    return (
      <div className={`text-sm text-red-500 ${className}`}>
        reCAPTCHA not configured (missing site key)
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <button
        type="button"
        onClick={getToken}
        disabled={!ready || loading}
        className={`${className ?? 'rounded-lg px-3 py-2 border'} ${
          !ready || loading 
            ? 'opacity-50 cursor-not-allowed bg-gray-100' 
            : 'hover:bg-gray-50'
        }`}
        aria-label="Get reCAPTCHA token"
      >
        {loading ? 'Verifying...' : 'Verify'}
      </button>
      
      {error && (
        <p className="text-sm text-red-600">
          ⚠️ {error}
        </p>
      )}
      
      {ready && !error && (
        <p className="text-xs text-gray-500">
          Protected by reCAPTCHA v3
        </p>
      )}
    </div>
  );
}
