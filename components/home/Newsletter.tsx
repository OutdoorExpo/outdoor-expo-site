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
    <section className="bg-charcoal text-white py-8 md:py-10 text-center">
      <div className="container-site">
        <div className="max-w-[820px] mx-auto">
          <h2 className="text-h2 font-extrabold text-white mb-2">
            Stay in the loop.
          </h2>
          <p className="text-body opacity-85 mb-4">
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

        /*
          Hide ALL labels aggressively — HubSpot has multiple label
          rendering variants depending on form version. We hide ALL of them
          using maximum specificity + multiple selectors + multiple
          CSS hide techniques so at least one wins the cascade fight.
        */
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

        /* Compact field spacing — base (mobile stacked) */
        .newsletter-form .hs-form-field {
          margin: 0 0 8px 0 !important;
        }
        .newsletter-form .form-columns-1,
        .newsletter-form .form-columns-2,
        .newsletter-form .form-columns-3 {
          max-width: 100% !important;
          margin-bottom: 0 !important;
        }

        /*
          DESKTOP/TABLET: All 4 elements on a single horizontal row.
          [First name] [Last name] [Email] [SUBSCRIBE]

          We use display:flex on the <form> and display:contents on
          HubSpot's column wrappers so the fields become direct flex
          children, ignoring HubSpot's own column grouping.
        */
        @media (min-width: 768px) {
          .newsletter-form form {
            display: flex !important;
            flex-direction: row !important;
            flex-wrap: nowrap !important;
            gap: 8px !important;
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

        /* Submit button — orange pill, centered, fixed width.
           Extra-specific selectors to beat HubSpot's brand-coloured CSS. */
        .newsletter-form .hs-submit,
        .newsletter-form .actions {
          margin-top: 10px !important;
          text-align: center;
        }
        section .newsletter-form .hs-button,
        section .newsletter-form input.hs-button,
        section .newsletter-form input[type="submit"],
        section .newsletter-form .hs-form input.hs-button.primary {
          display: inline-block !important;
          width: auto !important;
          min-width: 200px !important;
          height: 44px !important;
          padding: 0 28px !important;
          background-color: #f97316 !important;
          background: #f97316 !important;
          background-image: none !important;
          color: #ffffff !important;
          font-family: inherit !important;
          font-size: 13px !important;
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
