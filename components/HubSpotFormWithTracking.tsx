"use client";

import { HubSpotForm } from "./HubSpotForm";
import { trackEvent } from "@/lib/analytics";

/**
 * Thin client wrapper around HubSpotForm that fires a GA4 event on a
 * successful submission.
 *
 * Why this exists:
 *   Server Components (the default in App Router) can't pass function
 *   props to client components — those would have to be serialized over
 *   the RSC boundary. Instead, server pages pass an `eventName` string,
 *   and this client wrapper turns it into a `trackEvent()` call.
 *
 *   Pages that are already "use client" (e.g. Newsletter) can keep using
 *   HubSpotForm directly with an inline onFormSubmitted handler.
 */

type Props = {
  portalId: string;
  formId: string;
  region: string;
  /** GA4 event name to fire on successful submit. */
  eventName: string;
  /** Optional extra params to send with the event. */
  eventParams?: Record<string, unknown>;
};

export function HubSpotFormWithTracking({
  portalId,
  formId,
  region,
  eventName,
  eventParams,
}: Props) {
  return (
    <HubSpotForm
      portalId={portalId}
      formId={formId}
      region={region}
      onFormSubmitted={() => trackEvent(eventName, eventParams)}
    />
  );
}
