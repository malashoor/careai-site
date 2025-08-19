"use client";
import { useEffect, useState } from "react";
import SmartLink from "@/components/Ui/SmartLink";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Check if user has already given consent
    if (!document.cookie.includes("careai_consent=accepted")) {
      setShow(true);
    }
  }, []);

  if (!show) return null;

  const accept = async () => {
    try {
      await fetch("/api/consent", { method: "POST" });
      setShow(false);
    } catch (error) {
      console.warn("Failed to set consent cookie:", error);
      setShow(false); // Still hide the banner
    }
  };

  const reject = () => {
    setShow(false);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 mx-auto mb-4 w-[min(92vw,900px)] rounded-2xl bg-white/90 p-4 shadow-lg backdrop-blur border border-ink-150">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex-1">
          <p className="text-ink-700 text-sm leading-relaxed">
            We use essential cookies to run CareAI and optional analytics with your consent.{" "}
            See our{" "}
            <SmartLink href="/en/legal/privacy" className="underline text-link hover:text-link-hover">
              Privacy Policy
            </SmartLink>.
          </p>
        </div>
        <div className="flex gap-2 flex-shrink-0">
          <button 
            onClick={reject} 
            className="btn btn-ghost text-sm px-4 py-2"
          >
            Reject
          </button>
          <button 
            onClick={accept} 
            className="btn btn-primary text-sm px-4 py-2"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
