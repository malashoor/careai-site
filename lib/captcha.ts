/**
 * Captcha verification utilities
 * Supports both hCaptcha and reCAPTCHA v3
 */

export interface CaptchaConfig {
  provider: 'hcaptcha' | 'recaptcha';
  secret: string;
  minScore?: number; // For reCAPTCHA v3
}

/**
 * Verify hCaptcha token
 */
async function verifyHCaptcha(token: string, secret: string): Promise<boolean> {
  try {
    const response = await fetch('https://hcaptcha.com/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ secret, response: token }),
    });
    
    const result = await response.json();
    return result.success === true;
  } catch (error) {
    console.error('[captcha] hCaptcha verification failed:', error);
    return false;
  }
}

/**
 * Verify reCAPTCHA v3 token
 */
async function verifyReCaptcha(token: string, secret: string, minScore = 0.5): Promise<boolean> {
  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ secret, response: token }),
    });
    
    const result = await response.json();
    return result.success === true && (result.score || 0) >= minScore;
  } catch (error) {
    console.error('[captcha] reCAPTCHA verification failed:', error);
    return false;
  }
}

// lib/captcha.ts - Production reCAPTCHA v3 integration
export async function verifyCaptcha(token: string | undefined) {
  const hSecret = process.env.HCAPTCHA_SECRET;
  const rSecret = process.env.RECAPTCHA_SECRET;
  const minScore = Number(process.env.NEXT_PUBLIC_RECAPTCHA_MIN_SCORE ?? '0.3');

  // Dev bypass (never active in production)
  if ((process.env.CONTACT_CAPTCHA_BYPASS === 'true') && process.env.NODE_ENV !== 'production') {
    return { ok: true, provider: 'bypass' as const, score: 1 };
  }

  if (!token || (!hSecret && !rSecret)) {
    return { ok: false, provider: 'none' as const, score: 0 };
  }

  try {
    if (rSecret) {
      const resp = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ secret: rSecret, response: token }),
      });
      const json: any = await resp.json();
      const ok = json.success === true && (typeof json.score !== 'number' || json.score >= minScore);
      
      console.log(`[captcha] reCAPTCHA v3 verification:`, {
        success: json.success,
        score: json.score,
        threshold: minScore,
        passed: ok,
        action: json.action,
        hostname: json.hostname
      });
      
      return { ok, provider: 'recaptcha' as const, score: json.score ?? null };
    }

    if (hSecret) {
      const resp = await fetch('https://hcaptcha.com/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ secret: hSecret, response: token }),
      });
      const json: any = await resp.json();
      return { ok: json.success === true, provider: 'hcaptcha' as const, score: json.score ?? null };
    }

    return { ok: false, provider: 'unknown' as const, score: 0 };
  } catch (error) {
    console.error('[captcha] Verification failed:', error);
    return { ok: false, provider: 'error' as const, score: 0 };
  }
}

/**
 * Get captcha configuration from environment variables
 */
export function getCaptchaConfig(): CaptchaConfig | null {
  if (process.env.HCAPTCHA_SECRET) {
    return {
      provider: 'hcaptcha',
      secret: process.env.HCAPTCHA_SECRET,
    };
  }
  
  if (process.env.RECAPTCHA_SECRET_KEY) {
    return {
      provider: 'recaptcha',
      secret: process.env.RECAPTCHA_SECRET_KEY,
      minScore: parseFloat(process.env.RECAPTCHA_MIN_SCORE || '0.5'),
    };
  }
  
  return null; // No captcha configured
}
