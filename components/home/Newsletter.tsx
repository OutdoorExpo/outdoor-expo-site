"use client";

import { HubSpotForm } from "../HubSpotForm";
import { trackEvent } from "@/lib/analytics";

/**
 * Newsletter sign-up section ("Stay in the loop.")
 *
 * Layout — compact two-column on desktop:
 *   ┌──────────────────────────────┬───────────────────────────────────────┐
 *   │ Stay in the loop.            │ [First] [Last] [Email] [SUBSCRIBE]    │
 *   │ Early-bird alerts + news.    │ By subscribing… Privacy + Terms       │
 *   └──────────────────────────────┴───────────────────────────────────────┘
 *
 * Stacks to single column on mobile (form below text).
 *
 * Submissions handled by HubSpot Forms — a workflow tags new contacts
 * as "Newsletter Only" engagement segment.
 *
 * Form: Website Newsletter Signup
 * portalId: 44544113 · region: ap1
 */
const NEWSLETTER_FORM = {
  portalId: "44544113",
  // Replaced 2026-05-27: original form (13b473b7-43f5-4370-bde4-0add6b1798ef)
  // returned 403 from HubSpot's embed endpoint on the new domain, blocking
  // the form from rendering. The form was rebuilt with the same fields and
  // a new ID — the rebuild inherits current HubSpot security defaults and
  // works correctly from www.outdoorexpo.co.nz.
  formId: "4c8498c7-cf87-422f-918f-b3d224722e24",
  region: "ap1",
};

export function Newsletter() {
  return (
    <section className="bg-charcoal text-white py-5 md:py-6">
      <div className="container-site">
        <div className="max-w-[1080px] mx-auto md:flex md:items-center md:gap-8 lg:gap-12">
          {/* LEFT — heading + subline. On desktop, this sits to the left of the form. */}
          <div className="md:flex-shrink-0 md:max-w-[300px] md:text-left text-center mb-2 md:mb-0">
            <h2 className="text-h4 md:text-h3 font-extrabold text-white leading-tight">
              Stay in the loop.
            </h2>
            <p className="text-body-s text-white/70 mt-0.5 leading-snug">
              Early-bird alerts, zone news &amp; exhibitor announcements.
            </p>
          </div>

          {/* RIGHT — form + consent line stacked tight. */}
          <div className="md:flex-1 md:min-w-0">
            <div className="newsletter-form text-left">
              <HubSpotForm
                portalId={NEWSLETTER_FORM.portalId}
                formId={NEWSLETTER_FORM.formId}
                region={NEWSLETTER_FORM.region}
                onFormSubmitted={() =>
                  trackEvent("newsletter_signup", {
                    form_location: "newsletter_section",
                  })
                }
              />
            </div>

            {/* Implied-consent notice — NZ Privacy Act compliant when paired
                with Privacy Policy + Terms pages linked here. */}
            <p className="text-[11px] text-white/50 mt-1.5 leading-snug md:text-left text-center">
              By subscribing you agree to our{" "}
              <a href="/privacy" className="text-white/75 underline hover:text-white">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="/terms" className="text-white/75 underline hover:text-white">
                Terms &amp; Conditions
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      {/*
        Scoped style overrides for the HubSpot form. Targets every
        possible label location so they reliably stay hidden, and
        compresses spacing so the section is as short as possible.
      */}
      <style jsx global>{`
        /* Reset HubSpot's wrapper card + remove any margins it adds */
        .newsletter-form,
        .newsletter-form > div,
        .newsletter-form form,
        .newsletter-form .hs-form,
        .newsletter-form .hs-form-private,
        .newsletter-form fieldset {
          background: transparent !important;
          border: none !important;
          padding: 0 !important;
          margin: 0 !important;
          max-width: 100% !important;
        }

        /* Hide ALL labels aggressively */
        section .newsletter-form label,
        section .newsletter-form form label,
        section .newsletter-form .hs-form label,
        section .newsletter-form .hs-form-field label,
        section .newsletter-form .hs-fieldtype-text > label,
        section .newsletter-form .field > label,
        section .newsletter-form [class*="hs-fieldlabel"],
        section .newsletter-form [class*="field-label"],
        section .newsletter-form .hs-form-required {
          display: none !important;
          visibility: hidden !important;
          height: 0 !important;
          width: 0 !important;
          margin: 0 !important;
          padding: 0 !important;
          position: absolute !important;
          left: -9999px !important;
        }

        /*
          MOBILE (stacked): zero-out HubSpot's default margins/padding on
          every possible wrapper, then add a precise 6px gap between fields
          using adjacent-sibling selectors. This guarantees consistent
          tight spacing regardless of which wrapper HubSpot uses.
        */
        .newsletter-form .hs-form-field,
        .newsletter-form .form-columns-1,
        .newsletter-form .form-columns-2,
        .newsletter-form .form-columns-3,
        .newsletter-form .hs-fieldtype-text,
        .newsletter-form .hs-fieldtype-email,
        .newsletter-form .hs-fieldtype-phonenumber,
        .newsletter-form .input,
        .newsletter-form .hs-input-wrapper,
        .newsletter-form .hs-submit,
        .newsletter-form .actions {
          margin: 0 !important;
          padding: 0 !important;
          max-width: 100% !important;
        }
        /* Add 6px gap BETWEEN adjacent items only (not before first) */
        .newsletter-form .hs-form-field + .hs-form-field,
        .newsletter-form .form-columns-1 + .form-columns-1,
        .newsletter-form .form-columns-2 + .form-columns-2,
        .newsletter-form .form-columns-3 + .form-columns-3,
        .newsletter-form .form-columns-1 + .hs-submit,
        .newsletter-form .form-columns-1 + .actions {
          margin-top: 6px !important;
        }
        /* MOBILE — tighter gap before submit button (was 8px, now 6px to
           match the field-to-field spacing above) */
        .newsletter-form .hs-submit,
        .newsletter-form .actions {
          margin-top: 6px !important;
          text-align: center !important;
        }
        /* MOBILE — make submit button full-width so it visually matches
           the input fields (was inline-block, ~130px wide, which left a
           large empty space to the right and made the form look
           left-skewed). Full-width also bumps tap target — Apple HIG.
           Note the section prefix on each selector below: it is there
           to match the specificity of the base button rules further
           down — without it those !important declarations would still
           win at desktop specificity. */
        @media (max-width: 767px) {
          section .newsletter-form .hs-button,
          section .newsletter-form input.hs-button,
          section .newsletter-form input[type="submit"],
          section .newsletter-form .hs-form input.hs-button.primary {
            width: 100% !important;
            min-width: 0 !important;
            display: block !important;
          }
        }

        /* DESKTOP/TABLET: all 4 elements on one horizontal row */
        @media (min-width: 768px) {
          .newsletter-form form {
            display: flex !important;
            flex-direction: row !important;
            flex-wrap: nowrap !important;
            gap: 6px !important;
            align-items: stretch !important;
          }
          .newsletter-form .form-columns-1,
          .newsletter-form .form-columns-2,
          .newsletter-form .form-columns-3 {
            display: contents !important;
          }
          .newsletter-form .hs-form-field {
            flex: 1 1 0 !important;
            min-width: 0 !important;
            margin: 0 !important;
          }
          .newsletter-form .hs-submit,
          .newsletter-form .actions {
            flex: 0 0 auto !important;
            margin: 0 !important;
          }
        }

        /* Input styling — rounded pills, white background, dark text */
        .newsletter-form .hs-input {
          width: 100% !important;
          height: 40px !important;
          padding: 0 14px !important;
          font-size: 14px !important;
          color: #2c2a26 !important;
          background: #ffffff !important;
          border: none !important;
          border-radius: 9999px !important;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15) !important;
          margin: 0 !important;
          display: block !important;
        }
        .newsletter-form .hs-input:focus {
          outline: 2px solid #f97316;
          outline-offset: 2px;
        }
        .newsletter-form .hs-input::placeholder {
          color: #8a8a85;
          opacity: 1;
        }
        .newsletter-form textarea.hs-input {
          height: auto;
          padding: 10px 14px;
          border-radius: 12px;
        }

        /* Submit button — orange pill, brand colour forced over HubSpot defaults */
        .newsletter-form .hs-submit,
        .newsletter-form .actions {
          margin: 6px 0 0 0 !important;
          text-align: center;
        }
        @media (min-width: 768px) {
          .newsletter-form .hs-submit,
          .newsletter-form .actions {
            margin: 0 !important;
          }
        }
        section .newsletter-form .hs-button,
        section .newsletter-form input.hs-button,
        section .newsletter-form input[type="submit"],
        section .newsletter-form .hs-form input.hs-button.primary {
          display: inline-block !important;
          width: auto !important;
          min-width: 130px !important;
          height: 40px !important;
          padding: 0 22px !important;
          background-color: #f97316 !important;
          background: #f97316 !important;
          background-image: none !important;
          color: #ffffff !important;
          font-family: inherit !important;
          font-size: 12px !important;
          font-weight: 700 !important;
          text-transform: uppercase !important;
          letter-spacing: 0.08em !important;
          border: none !important;
          border-radius: 9999px !important;
          cursor: pointer !important;
          transition: background 0.15s ease !important;
          box-shadow: none !important;
        }
        section .newsletter-form .hs-button:hover,
        section .newsletter-form input[type="submit"]:hover {
          background-color: #ea580c !important;
          background: #ea580c !important;
        }

        /* Error messages — soft red, compact */
        .newsletter-form .hs-error-msgs label,
        .newsletter-form .hs-error-msg {
          color: #fca5a5 !important;
          font-size: 11px !important;
          display: block !important;
          margin-top: 2px;
          padding-left: 4px;
          /* override the universal hide-label position trickery for errors */
          position: static !important;
          left: auto !important;
          visibility: visible !important;
          height: auto !important;
          width: auto !important;
        }

        /* Thank-you message after submit */
        .newsletter-form .submitted-message {
          color: #ffffff !important;
          font-size: 14px;
          text-align: center;
          padding: 8px 0;
        }
      `}</style>
    </section>
  );
}
