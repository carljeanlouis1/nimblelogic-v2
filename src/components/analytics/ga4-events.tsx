"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function GA4Events() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href") || "";
      const text = anchor.textContent?.trim() || "";

      if (typeof window.gtag !== "function") return;

      // Book a call (cal.com links)
      if (href.includes("cal.com")) {
        window.gtag("event", "book_call", {
          event_category: "conversion",
          link_url: href,
        });
      }

      // Demo phone call
      if (href === "tel:8566663692") {
        window.gtag("event", "call_demo", {
          event_category: "conversion",
        });
      }

      // Email contact
      if (href.startsWith("mailto:")) {
        window.gtag("event", "email_contact", {
          event_category: "conversion",
          link_url: href,
        });
      }

      // CTA button clicks
      const ctaTexts = [
        "get started",
        "contact us",
        "learn more",
        "book a discovery call",
        "book your discovery call",
        "try our ai live",
        "book a free call",
      ];
      if (ctaTexts.some((cta) => text.toLowerCase().includes(cta))) {
        window.gtag("event", "cta_click", {
          event_category: "engagement",
          cta_text: text,
          cta_destination: href,
        });
      }
    }

    document.body.addEventListener("click", handleClick);
    return () => document.body.removeEventListener("click", handleClick);
  }, []);

  return null;
}
