import { Button } from "../Button";
import { EVENT_DATES, EVENT_VENUE_FULL, FLICKET_TICKETS_URL } from "@/lib/constants";

interface PostCTAProps {
  /** Headline for the CTA block. Default tied to current Outdoor Expo. */
  title?: string;
  /** Supporting copy beneath the headline. */
  body?: string;
}

/**
 * End-of-article CTA pointing readers to Outdoor Expo tickets/exhibitors.
 * Dark forest-green background to break from the article body.
 */
export function PostCTA({
  title = "Keen to Gear Up for Outdoor Expo 2026?",
  body = "Whether you're a first-timer who's just been bitten by the bug, or a seasoned hunter looking to upgrade your setup, Outdoor Expo 2026 is where you'll find everything you need — all under one roof.",
}: PostCTAProps) {
  return (
    <aside className="mt-4 md:mt-6 bg-charcoal text-white rounded-lg p-7 md:p-10 text-center">
      <h3 className="text-h2 font-extrabold text-white mb-2">{title}</h3>
      <p className="text-body text-white/80 max-w-[560px] mx-auto mb-4">{body}</p>
      <div className="text-body-s text-white/70 mb-6 flex flex-wrap justify-center gap-x-4 gap-y-1">
        <span>📍 {EVENT_VENUE_FULL}</span>
        <span>📅 {EVENT_DATES}</span>
      </div>
      <div className="flex flex-col md:flex-row gap-2 justify-center">
        <Button href={FLICKET_TICKETS_URL} variant="primary">
          Get Tickets
        </Button>
        <Button href="/exhibitors" variant="outline-white">
          View Exhibitors
        </Button>
      </div>
    </aside>
  );
}
