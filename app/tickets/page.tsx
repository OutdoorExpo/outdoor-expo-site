import { Eyebrow } from "@/components/Eyebrow";
import { TicketCTA } from "@/components/TicketCTA";
import { Newsletter } from "@/components/home/Newsletter";
import {
  EVENT_DATES,
  EVENT_HOURS,
  EVENT_VENUE_FULL,
} from "@/lib/constants";

/**
 * /tickets — dedicated ticket-purchase landing page.
 *
 * Purpose:
 *   - Phase 3 (Conversion Peak) Google Ads campaign sends paid traffic
 *     here directly with intent to buy. The plan's PMax asset group is
 *     built around this URL.
 *   - On the new site this page also serves as a clean linkable
 *     destination from emails and social posts about ticket sales.
 *
 * Every CTA on this page funnels through <TicketCTA>, which fires the
 * `ticket_intent` GA4 event before bouncing the user to Flicket.
 */

export const metadata = {
  title: "Tickets",
  description: `Buy tickets for Outdoor Expo 2026 — ${EVENT_DATES}, ${EVENT_VENUE_FULL}. Adult $20, Youth $15, Family Pass $55, Under 13 free.`,
};

export default function TicketsPage() {
  return (
    <>
      <Hero />
      <Pricing />
      <WhatsIncluded />
      <Practical />
      <FinalCTA />
      <Newsletter />
    </>
  );
}

/* ============== HERO ============== */
function Hero() {
  return (
    <section
      className="relative flex items-center text-white py-12 md:py-15 overflow-hidden"
      style={{
        minHeight: "60vh",
        backgroundImage:
          "linear-gradient(rgba(15,14,12,0.55), rgba(15,14,12,0.35)), url('/hero-poster.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container-site relative z-10">
        <div className="container-prose">
          <Eyebrow variant="orange">Outdoor Expo 2026 Tickets</Eyebrow>
          <h1 className="text-h1 font-extrabold text-white mb-3 mt-2 leading-[1.1]">
            Three days outside.
            <br />
            One ticket.
          </h1>
          <p className="text-body-l text-white opacity-95 mb-5 max-w-[560px]">
            {EVENT_DATES} · {EVENT_VENUE_FULL}. 300+ brands, 12 themed zones,
            live demos, and family-friendly fun across the whole weekend.
          </p>
          <TicketCTA variant="primary" size="lg" location="tickets_hero">
            Get Tickets
          </TicketCTA>
        </div>
      </div>
    </section>
  );
}

/* ============== PRICING ============== */
const TIERS = [
  {
    name: "Adult",
    age: "18+",
    price: "$20",
    blurb:
      "One full day of outdoor inspiration. Access all 12 zones, 300+ exhibitor stands, demos, and guest sessions.",
  },
  {
    name: "Youth",
    age: "13–17",
    price: "$15",
    blurb:
      "All the gear, all the demos — same access as an adult ticket at a youth rate.",
  },
  {
    name: "Family Pass",
    age: "2 adults + 2 youths",
    price: "$55",
    blurb:
      "The best value for the whole whānau. Two adults (18+) and two youths (13–17), one day.",
    highlight: true,
  },
  {
    name: "Child",
    age: "0–12",
    price: "Free",
    blurb:
      "Children under 13 enter free of charge. Must be accompanied by a ticketed adult.",
  },
];

function Pricing() {
  return (
    <section className="bg-paper section-content">
      <div className="container-site">
        <div className="container-prose mx-auto text-center mb-7">
          <Eyebrow>Pricing</Eyebrow>
          <h2 className="text-h1 font-extrabold text-charcoal mb-3 mt-2">
            Pick your ticket.
          </h2>
          <p className="text-body-l text-dark-grey">
            One-day tickets — pick the day that works for you at checkout.
            Children under 13 enter free with a ticketed adult.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {TIERS.map((t) => (
            <div
              key={t.name}
              className={`flex flex-col bg-white p-4 rounded ${
                t.highlight
                  ? "border-t-4 border-orange-500 shadow-lg"
                  : "border border-light-grey"
              }`}
            >
              <h3 className="font-heading font-bold text-h3 text-charcoal mb-1">
                {t.name}
              </h3>
              <div className="text-eyebrow uppercase tracking-[0.08em] text-mid-grey mb-3">
                {t.age}
              </div>
              <div className="font-heading font-extrabold text-[40px] md:text-[44px] text-orange-500 leading-none mb-3">
                {t.price}
                {t.price !== "Free" && (
                  <span className="text-body-s font-semibold text-mid-grey ml-1">
                    NZD
                  </span>
                )}
              </div>
              <p className="text-body-s text-dark-grey flex-grow mb-3">
                {t.blurb}
              </p>
              <TicketCTA
                variant={t.highlight ? "primary" : "outline-charcoal"}
                size="md"
                location={`tickets_card_${t.name.toLowerCase().replace(/\s+/g, "_")}`}
                className="w-full"
              >
                {t.price === "Free" ? "Learn More" : "Get Tickets"}
              </TicketCTA>
            </div>
          ))}
        </div>

        <p className="text-body-s text-mid-grey text-center mt-4 max-w-prose mx-auto">
          Tickets are sold via Flicket. You&apos;ll be redirected to a secure
          Flicket page to complete your purchase. Multi-day passes available at
          checkout.
        </p>
      </div>
    </section>
  );
}

/* ============== WHAT'S INCLUDED ============== */
const INCLUDED = [
  "Access to all 12 themed zones across the showgrounds",
  "300+ exhibitor stands — boats, campers, gear, food, and more",
  "Live demos and guest sessions throughout each day",
  "Family-friendly activities — kids' zone, games, food trucks",
  "Free on-site parking — 3,000+ spaces",
  "Free entry for under-13s with a ticketed adult",
];

function WhatsIncluded() {
  return (
    <section className="bg-white section-content">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div>
            <Eyebrow>What&apos;s included</Eyebrow>
            <h2 className="text-h1 font-extrabold text-charcoal mb-3 mt-2">
              Your ticket gets you in.
              <br />
              Everything else is on the house.
            </h2>
            <p className="text-body-l text-dark-grey mb-4">
              One ticket. Three days of options. Every zone, every demo, every
              exhibitor stand — yours to explore at your own pace.
            </p>
            <ul className="list-none p-0">
              {INCLUDED.map((item) => (
                <li
                  key={item}
                  className="relative py-2 border-b border-light-grey last:border-b-0"
                  style={{ paddingLeft: 36 }}
                >
                  <span
                    className="absolute left-0 bg-green-500 text-white rounded-full inline-flex items-center justify-center text-body-s font-bold"
                    style={{ width: 24, height: 24, top: 12 }}
                  >
                    ✓
                  </span>
                  <span className="text-body text-dark-grey">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="rounded-lg overflow-hidden bg-cover bg-center w-full mx-auto"
            style={{
              aspectRatio: "4/3",
              backgroundImage: "url('/exhibit/audience.jpg')",
            }}
            role="img"
            aria-label="Outdoor Expo crowd"
          />
        </div>
      </div>
    </section>
  );
}

/* ============== PRACTICAL ============== */
function Practical() {
  return (
    <section className="bg-paper section-content">
      <div className="container-site">
        <div className="container-prose mx-auto text-center mb-6">
          <Eyebrow>The practical stuff</Eyebrow>
          <h2 className="text-h2 font-extrabold text-charcoal mb-2 mt-2">
            Before you book.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 max-w-[920px] mx-auto">
          <Fact label="When" value={EVENT_DATES} sub={EVENT_HOURS + " daily"} />
          <Fact
            label="Where"
            value="Canterbury Agricultural Park"
            sub="Christchurch · Free parking"
          />
          <Fact
            label="How"
            value="Buy online via Flicket"
            sub="Show ticket at entry"
          />
        </div>
      </div>
    </section>
  );
}

function Fact({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="bg-white p-4 rounded border border-light-grey">
      <div className="text-eyebrow uppercase tracking-[0.08em] text-mid-grey mb-1">
        {label}
      </div>
      <div className="font-heading font-bold text-h4 text-charcoal mb-1">
        {value}
      </div>
      <div className="text-body-s text-dark-grey">{sub}</div>
    </div>
  );
}

/* ============== FINAL CTA ============== */
function FinalCTA() {
  return (
    <section
      className="relative text-white section-content overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(30,120,58,0.85), rgba(30,120,58,0.85)), url('/exhibit/audience.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container-site text-center">
        <Eyebrow variant="orange">See you in October</Eyebrow>
        <h2 className="text-h1 font-extrabold text-white mb-3 mt-2 max-w-prose mx-auto">
          Lock in your spot at Outdoor Expo 2026.
        </h2>
        <p className="text-body-l text-white opacity-95 mb-5 max-w-prose mx-auto">
          {EVENT_DATES} · {EVENT_VENUE_FULL}.
        </p>
        <TicketCTA variant="primary" size="lg" location="tickets_final_cta">
          Get Tickets
        </TicketCTA>
      </div>
    </section>
  );
}
