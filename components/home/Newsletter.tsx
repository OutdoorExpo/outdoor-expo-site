"use client";

import { HubSpotForm } from "../HubSpotForm";

/**
 * Newsletter sign-up section ("Stay in the loop.")
 *
 * Submissions are handled by HubSpot Forms — the embedded form below
 * collects Email + First Name + consent, then a HubSpot workflow tags
 * the contact as "Newsletter Only" engagement segment and adds them
 * to the "All Subscribers" list.
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
    <section className="bg-charcoal text-white section-conversion text-center">
      <div className="container-site">
        <div className="max-w-[560px] mx-auto">
          <h2 className="text-h1 font-extrabold text-white mb-2">
            Stay in the loop.
          </h2>
          <p className="text-body-l opacity-85 mb-5">
            Early-bird ticket alerts, zone announcements, and exhibitor news —
            direct to your inbox.
          </p>

          {/* HubSpot embedded form.
              Wrapper styles override the form's white card so it blends with
              the dark section, and recolour fields/buttons to brand. */}
          <div className="newsletter-form text-left">
            <HubSpotForm
              portalId={NEWSLETTER_FORM.portalId}
              formId={NEWSLETTER_FORM.formId}
              region={NEWSLETTER_FORM.region}
            />
          </div>
        </div>
      </div>

      {/*
        Scoped style overrides for the HubSpot form inside this section.
        HubSpot injects raw HTML with class names like .hs-form, .hs-button,
        .hs-input, etc. We target those to match Outdoor Expo's brand on the
        dark Newsletter section without changing the form's behaviour.
      */}
      <style jsx global>{`
        .newsletter-form > div {
          background: transparent !important;
          border: none !important;
          padding: 0 !important;
        }
        .newsletter-form .hs-form-field > label,
        .newsletter-form .hs-form-field > label > span {
          color: #ffffff !important;
          opacity: 0.85;
          font-size: 14px;
          font-weight: 600;
        }
        .newsletter-form .hs-input {
          width: 100% !important;
          height: 48px;
          padding: 0 14px;
          font-size: 16px;
          color: #2c2a26;
          background: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 9999px;
        }
        .newsletter-form textarea.hs-input {
          height: auto;
          padding: 12px 14px;
          border-radius: 14px;
        }
        .newsletter-form .hs-form-field {
          margin-bottom: 12px;
        }
        .newsletter-form .legal-consent-container,
        .newsletter-form .legal-consent-container p,
        .newsletter-form .legal-consent-container span {
          color: rgba(255, 255, 255, 0.75) !important;
          font-size: 13px;
        }
        .newsletter-form .legal-consent-container a {
          color: #f97316 !important;
          text-decoration: underline;
        }
        .newsletter-form input[type="checkbox"] {
          width: 16px;
          height: 16px;
          margin-right: 8px;
          accent-color: #f97316;
        }
        .newsletter-form .hs-button {
          width: 100%;
          height: 48px;
          margin-top: 8px;
          padding: 0 20px;
          background: #f97316 !important;
          color: #ffffff !important;
          font-family: inherit;
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          border: none;
          border-radius: 9999px;
          cursor: pointer;
          transition: background 0.15s ease;
        }
        .newsletter-form .hs-button:hover {
          background: #ea580c !important;
        }
        .newsletter-form .hs-error-msgs label,
        .newsletter-form .hs-error-msg {
          color: #fca5a5 !important;
          font-size: 13px;
        }
        /* Submitted thank-you message */
        .newsletter-form .submitted-message {
          color: #ffffff !important;
          font-size: 18px;
          text-align: center;
          padding: 12px 0;
        }
      `}</style>
    </section>
  );
}
