"use client";

import { HubSpotForm } from "../HubSpotForm";

/**
 * Newsletter sign-up section ("Stay in the loop.")
 *
 * Submissions are handled by HubSpot Forms — the embedded form below
 * collects First Name + Last Name + Email, then a HubSpot workflow tags
 * the contact as "Newsletter Only" engagement segment.
 *
 * Form: Website Newsletter Signup
 * portalId: 44544113 · region: ap1
 */
const NEWSLETTER_FORM = {
  portalId: "44544113",
  formId: "13b473b7-43f5-4370-bde4-0add6b1798ef",
  region: "ap1",
};

export function Newsletter() {
  return (
    <section className="bg-charcoal text-white py-10 md:py-14 text-center">
      <div className="container-site">
        <div className="max-w-[520px] mx-auto">
          <h2 className="text-h2 md:text-h1 font-extrabold text-white mb-2">
            Stay in the loop.
          </h2>
          <p className="text-body opacity-85 mb-5 md:mb-6">
            Early-bird ticket alerts, zone announcements, and exhibitor news —
            direct to your inbox.
          </p>

          {/* HubSpot embedded form — minimal styling overrides below. */}
          <div className="newsletter-form text-left">
            <HubSpotForm
              portalId={NEWSLETTER_FORM.portalId}
              formId={NEWSLETTER_FORM.formId}
              region={NEWSLETTER_FORM.region}
            />
          </div>

          {/* Implied-consent notice — NZ Privacy Act compliant when paired
              with Privacy Policy + Terms pages linked below. */}
          <p className="text-body-s text-white/55 mt-3">
            By subscribing you agree to our{" "}
            <a href="/privacy" className="text-white/80 underline hover:text-white">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="/terms" className="text-white/80 underline hover:text-white">
              Terms &amp; Conditions
            </a>
            .
          </p>
        </div>
      </div>

      {/*
        Scoped style overrides for the HubSpot form. Targets every
        possible label location so they reliably stay hidden, and
        compresses spacing so the section is as short as possible.
      */}
      <style jsx global>{`
        /* Reset HubSpot's wrapper card */
        .newsletter-form,
        .newsletter-form > div,
        .newsletter-form .hs-form,
        .newsletter-form .hs-form-private {
          background: transparent !important;
          border: none !important;
          padding: 0 !important;
          margin: 0 !important;
        }

        /* Hide ALL labels — aggressive, targets every variant HubSpot uses */
        .newsletter-form label,
        .newsletter-form .hs-form-field > label,
        .newsletter-form .hs-fieldtype-text > label,
        .newsletter-form .hs-form-required {
          display: none !important;
        }

        /* Compact field spacing */
        .newsletter-form .hs-form-field {
          margin: 0 0 8px 0 !important;
        }
        .newsletter-form .form-columns-1,
        .newsletter-form .form-columns-2 {
          max-width: 100% !important;
          margin-bottom: 0 !important;
        }

        /* Input styling — rounded pills, white background, dark text */
        .newsletter-form .hs-input {
          width: 100% !important;
          height: 44px;
          padding: 0 16px;
          font-size: 15px;
          color: #2c2a26;
          background: #ffffff;
          border: none;
          border-radius: 9999px;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
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
          padding: 10px 16px;
          border-radius: 14px;
        }

        /* Force First/Last in 2 columns on desktop, stacked on mobile */
        .newsletter-form .hs_firstname,
        .newsletter-form .hs_lastname {
          display: inline-block;
          width: calc(50% - 4px) !important;
          vertical-align: top;
        }
        .newsletter-form .hs_firstname {
          margin-right: 8px;
        }
        @media (max-width: 640px) {
          .newsletter-form .hs_firstname,
          .newsletter-form .hs_lastname {
            width: 100% !important;
            margin-right: 0;
          }
        }

        /* Submit button — orange pill, centered, fixed width */
        .newsletter-form .hs-submit,
        .newsletter-form .actions {
          margin-top: 10px !important;
          text-align: center;
        }
        .newsletter-form .hs-button {
          display: inline-block !important;
          width: auto !important;
          min-width: 200px;
          height: 44px;
          padding: 0 28px;
          background: #f97316 !important;
          color: #ffffff !important;
          font-family: inherit;
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          border: none !important;
          border-radius: 9999px !important;
          cursor: pointer;
          transition: background 0.15s ease;
        }
        .newsletter-form .hs-button:hover {
          background: #ea580c !important;
        }

        /* Error messages — soft red, compact */
        .newsletter-form .hs-error-msgs label,
        .newsletter-form .hs-error-msg {
          color: #fca5a5 !important;
          font-size: 12px !important;
          display: block !important; /* override the universal display:none above */
          margin-top: 4px;
          padding-left: 4px;
        }

        /* Thank-you message after submit */
        .newsletter-form .submitted-message {
          color: #ffffff !important;
          font-size: 16px;
          text-align: center;
          padding: 16px 0;
        }
      `}</style>
    </section>
  );
}
