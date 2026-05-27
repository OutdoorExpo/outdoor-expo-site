"use client";

import { FLICKET_TICKETS_URL } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";

/**
 * Ticket CTA — every "Get Tickets" button on the site funnels through
 * this component so we always fire the `ticket_intent` GA4 event before
 * the user leaves for Flicket.
 *
 * Why intent and not purchase:
 *   Flicket is an external domain we don't control, so we can't fire a
 *   purchase event server-to-server. Intent — the click — is the
 *   strongest B2C conversion signal we can capture from our own site,
 *   and that's what Google Ads optimises against.
 *
 * Why a click handler instead of a plain <a target="_blank">:
 *   gtag/google-analytics events are async. If we just used a normal
 *   <a target="_blank">, the new tab opens *before* the event finishes
 *   sending, and ad-blockers / fast browsers may drop it. We let GA fire
 *   first, then open Flicket in a new tab.
 *
 * Usage matches the Button component's variant/size API so it can drop
 * into the same places where Button currently renders.
 */

type Variant = "primary" | "outline-charcoal" | "outline-white" | "outline-orange";
type Size = "md" | "lg";

type Props = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
  /** Where on the site this CTA was placed — sent as a GA4 event param. */
  location: string;
};

const variantClasses: Record<Variant, string> = {
  primary: "bg-orange-500 text-white hover:bg-orange-400",
  "outline-charcoal":
    "bg-transparent text-charcoal border-2 border-charcoal hover:bg-charcoal hover:text-white",
  "outline-white":
    "bg-transparent text-white border-2 border-white hover:bg-white hover:text-charcoal",
  "outline-orange":
    "bg-transparent text-orange-500 border-2 border-orange-500 hover:bg-orange-500 hover:text-white",
};

const sizeClasses: Record<Size, string> = {
  md: "h-btn px-4 text-label",
  lg: "h-btn-lg px-5 text-label",
};

export function TicketCTA({
  variant = "primary",
  size = "md",
  className = "",
  children,
  location,
}: Props) {
  const classes = [
    "inline-flex items-center justify-center",
    "font-semibold uppercase tracking-[0.08em]",
    "rounded-full transition-all",
    "no-underline cursor-pointer",
    variantClasses[variant],
    sizeClasses[size],
    className,
  ].join(" ");

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    // Fire the GA4 event. Track event is sync from our side — it pushes
    // to dataLayer, then GA4's script handles the network call. We don't
    // need to await it: ~30–50ms later the event is in flight, and the
    // new tab opens immediately so the user doesn't feel a delay.
    trackEvent("ticket_intent", { cta_location: location });
    // Don't preventDefault — let the default href + target=_blank carry
    // the navigation. This keeps middle-click / ⌘-click behavior intact.
  }

  return (
    <a
      href={FLICKET_TICKETS_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={classes}
    >
      {children}
    </a>
  );
}
