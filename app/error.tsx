'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Something went wrong!</h1>
        <p className="mt-2 text-slate-600">We&apos;re sorry, but something unexpected happened.</p>
        <div className="mt-6 space-x-4">
          <button
            onClick={reset}
            className="px-5 py-3 rounded-2xl bg-brand-600 text-white hover:bg-brand-700 transition-colors"
          >
            Try again
          </button>
          <a
            href="mailto:support@careai.app"
            className="px-5 py-3 rounded-2xl border border-brand-600 text-brand-600 hover:bg-brand-50 transition-colors"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}
