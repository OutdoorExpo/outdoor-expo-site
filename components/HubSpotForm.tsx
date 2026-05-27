"use client";

import { useEffect, useRef } from "react";

/**
 * HubSpot embedded form — loads the HubSpot library and renders the form
 * inside the target div. The library script is loaded once per page.
 *
 * Submission callback strategy:
 *   We use BOTH the official `hbspt.forms.create({ onFormSubmitted })`
 *   callback AND the postMessage event from HubSpot's iframe. Empirically
 *   either one alone misses some submissions — small-payload forms like
 *   Newsletter occasionally don't trigger the postMessage, while older
 *   form versions can miss the inline callback. Using both is the only
 *   reliable way to capture every success across all form types.
 *
 *   A `firedRef` flag dedupes — if both channels fire for the same
 *   submission, we only invoke onFormSubmitted once.
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

  // Keep the latest callback in a ref so we can reference it from the
  // form-create effect (whose deps deliberately exclude onFormSubmitted
  // — otherwise the form would re-create itself on every parent render
  // because the parent typically passes an inline arrow function).
  const onFormSubmittedRef = useRef(onFormSubmitted);
  useEffect(() => {
    onFormSubmittedRef.current = onFormSubmitted;
  });

  // Dedupe flag — if both the inline callback AND postMessage fire for
  // the same submission, we still only call onFormSubmitted once. Resets
  // when the form identifiers change (i.e., a different form is rendered).
  const firedRef = useRef(false);
  useEffect(() => {
    firedRef.current = false;
  }, [formId]);

  function safelyFire(source: string) {
    if (firedRef.current) {
      // eslint-disable-next-line no-console
      console.log(
        `[HubSpotForm] ${source} fired AGAIN for ${formId} — deduped`
      );
      return;
    }
    firedRef.current = true;
    // eslint-disable-next-line no-console
    console.log(
      `[HubSpotForm] success fired via ${source} for formId=${formId}`
    );
    onFormSubmittedRef.current?.();
  }

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
            // Official HubSpot v2 callback — fires after a successful
            // submission. This is the most reliable channel for inline
            // embedded forms.
            onFormSubmitted: () => {
              safelyFire("hbspt.forms.create callback");
            },
          });
        }
      })
      .catch(() => {
        // Silently fail — fallback link below covers this
      });
    return () => {
      cancelled = true;
    };
    // Intentionally NOT including safelyFire — it's stable enough (uses
    // refs internally) and including it would re-create the form on
    // every render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [portalId, formId, region, targetId]);

  /**
   * Fallback channel: HubSpot's iframe-based form embeds also post
   * messages back to the parent window. Format:
   *   { type: "hsFormCallback", eventName: "onFormSubmitted", id: formId }
   * We filter by formId so a Newsletter form on a page that also has a
   * different HubSpot form doesn't fire the wrong callback.
   */
  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      const data = event.data as
        | { type?: string; eventName?: string; id?: string }
        | undefined;
      // Diagnostic: log every hsFormCallback we see so we can spot
      // mismatched formIds or unexpected eventNames.
      if (data && data.type === "hsFormCallback") {
        // eslint-disable-next-line no-console
        console.log(
          `[HubSpotForm] postMessage received (listening for ${formId}):`,
          data
        );
      }
      if (
        data &&
        data.type === "hsFormCallback" &&
        data.eventName === "onFormSubmitted" &&
        data.id === formId
      ) {
        safelyFire("postMessage");
      }
    }
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formId]);

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
