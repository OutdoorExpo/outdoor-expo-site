"use client";

import { useEffect, useRef } from "react";

/**
 * HubSpot embedded form — loads the HubSpot library and renders the form
 * inside the target div. The library script is loaded once per page.
 *
 * Form: Outdoor Expo Exhibitor Application
 * portalId: 44544113 · region: ap1
 */
type Props = {
  portalId: string;
  formId: string;
  region: string;
  /**
   * Optional callback that fires when the HubSpot form is successfully
   * submitted. Used to fire GA4 conversion events (newsletter_signup,
   * exhibitor_form_submit, sponsor_inquiry) without coupling the form
   * library to our analytics layer.
   */
  onFormSubmitted?: () => void;
};

let scriptPromise: Promise<void> | null = null;

function loadHubSpotScript(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  // Already loaded?
  // @ts-expect-error - window.hbspt added by HubSpot script
  if (window.hbspt) return Promise.resolve();
  if (scriptPromise) return scriptPromise;
  scriptPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://js-ap1.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load HubSpot script"));
    document.body.appendChild(script);
  });
  return scriptPromise;
}

export function HubSpotForm({
  portalId,
  formId,
  region,
  onFormSubmitted,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const targetId = `hs-form-${formId}`;

  useEffect(() => {
    let cancelled = false;
    loadHubSpotScript()
      .then(() => {
        if (cancelled) return;
        // @ts-expect-error - hbspt added by HubSpot script
        if (window.hbspt && containerRef.current) {
          // Clear any existing form to avoid double-render in dev
          containerRef.current.innerHTML = "";
          // @ts-expect-error
          window.hbspt.forms.create({
            portalId,
            formId,
            region,
            target: `#${targetId}`,
          });
        }
      })
      .catch(() => {
        // Silently fail — fallback link below covers this
      });
    return () => {
      cancelled = true;
    };
  }, [portalId, formId, region, targetId]);

  /**
   * Listen for HubSpot's postMessage events. HubSpot sends
   * { type: "hsFormCallback", eventName: "onFormSubmitted", id: formId }
   * to window when a submission succeeds. We filter by formId so a
   * Newsletter form on a page that also has a Sponsor form doesn't fire
   * both callbacks for one submission.
   *
   * Note: HubSpot also emits "onFormReady" and "onBeforeFormSubmit"
   * (different eventNames). We deliberately only listen for
   * "onFormSubmitted" because that's the success signal.
   */
  useEffect(() => {
    if (!onFormSubmitted) return;
    function handleMessage(event: MessageEvent) {
      const data = event.data as
        | { type?: string; eventName?: string; id?: string }
        | undefined;
      if (
        data &&
        data.type === "hsFormCallback" &&
        data.eventName === "onFormSubmitted" &&
        data.id === formId
      ) {
        onFormSubmitted?.();
      }
    }
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [formId, onFormSubmitted]);

  return (
    <div className="bg-white rounded-lg p-3 md:p-6 border border-light-grey">
      <div ref={containerRef} id={targetId} />
      <noscript>
        <p className="text-body text-dark-grey">
          The application form requires JavaScript. Please email{" "}
          <a
            href="mailto:info@outdoorexpo.co.nz"
            className="text-orange-500 underline"
          >
            info@outdoorexpo.co.nz
          </a>{" "}
          and we&apos;ll send you the application directly.
        </p>
      </noscript>
    </div>
  );
}
