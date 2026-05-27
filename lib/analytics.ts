/**
 * GA4 analytics utility — single source of truth for the GA4 Measurement ID
 * and a tiny helper that lets any component fire a custom event safely.
 *
 * Why a helper instead of calling window.gtag directly:
 *   - Server-side renders (Next.js builds) would crash on window.gtag
 *   - Even on the client, gtag may not be loaded yet on the very first paint
 *   - Keeping event names + params in one place is the simplest path to
 *     auditing what we're actually sending to GA4
 *
 * Event name conventions (must match Conversion Action names in Google Ads):
 *   - newsletter_signup     — HubSpot Newsletter form success
 *   - exhibitor_form_submit — Exhibit With Us application form success
 *   - sponsor_inquiry       — Sponsor inquiry form success
 *   - ticket_intent         — User clicked Get Tickets (going to Flicket).
 *                             We can't track the actual purchase because
 *                             Flicket is an external domain, so intent is
 *                             our strongest B2C conversion signal.
 */

export const GA_MEASUREMENT_ID = "G-5NRGZQBLVT";

// Typed window.gtag so we don't sprinkle @ts-expect-error everywhere.
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Toggle to log every analytics call to the browser console. Useful for
 * verifying conversion events fire during launch. Set to false once the
 * Google Ads campaign is stable.
 */
const DEBUG = true;

/**
 * Fire a GA4 custom event. Safe to call from anywhere — no-ops during SSR
 * or before gtag has loaded.
 */
export function trackEvent(
  name: string,
  params?: Record<string, unknown>
): void {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") {
    if (DEBUG) {
      // eslint-disable-next-line no-console
      console.warn(
        `[analytics] trackEvent("${name}") SKIPPED — window.gtag not loaded yet`,
        params
      );
    }
    return;
  }
  window.gtag("event", name, params || {});
  if (DEBUG) {
    // eslint-disable-next-line no-console
    console.log(`[analytics] event fired → ${name}`, params || {});
  }
}
