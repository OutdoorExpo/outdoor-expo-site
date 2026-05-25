import { Eyebrow } from "@/components/Eyebrow";
import { Button } from "@/components/Button";
import { Newsletter } from "@/components/home/Newsletter";

export const metadata = {
  title: "Plan Your Visit",
  description:
    "Hours, parking, food, accessibility — everything you need before you arrive at Outdoor Expo 2026. Canterbury Agricultural Park, Christchurch · 2–4 October 2026.",
};

export default function VisitPage() {
  return (
    <>
      <VisitHero />
      <QuickFacts />
      <GettingHere />
      <WhatsOn />
      <Accessibility />
      <FamilySection />
      <Faqs />
      <Newsletter />
    </>
  );
}

/* ============== 1 · HERO ============== */
const ANCHORS = [
  { href: "#getting-here", label: "Getting here" },
  { href: "#whats-on", label: "What's on" },
  { href: "#accessibility", label: "Accessibility" },
  { href: "#family", label: "Bringing the family" },
  { href: "#faqs", label: "FAQs" },
];

function VisitHero() {
  return (
    <section
      className="relative flex items-center text-white py-12 md:py-15 overflow-hidden"
      style={{
        minHeight: "56vh",
        backgroundImage:
          "linear-gradient(rgba(15,14,12,0.55), rgba(15,14,12,0.35)), url('/visit/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container-site relative z-10">
        <div className="container-prose">
          <Eyebrow variant="orange">Plan your visit · 2–4 October 2026</Eyebrow>
          <h1 className="text-h1 font-extrabold text-white mb-3 mt-2">
            Everything you need
            <br />
            before you arrive.
          </h1>
          <p className="text-body-l text-white opacity-95 mb-5">
            Hours, parking, food, accessibility — sorted, so you can focus on
            what&apos;s actually on.
          </p>
          <div className="flex flex-wrap gap-2">
            {ANCHORS.map((a) => (
              <a
                key={a.href}
                href={a.href}
                className="inline-flex items-center px-3 py-1 text-body-s text-white border border-white/40 rounded-full hover:bg-white/15 transition-colors no-underline"
              >
                → {a.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============== 2 · QUICK FACTS ============== */
const FACTS = [
  { label: "Dates", value: "2–4 October 2026", sub: "Fri · Sat · Sun" },
  { label: "Hours", value: "9am – 5pm daily", sub: "Last entry 4pm" },
  { label: "Venue", value: "Canterbury Agricultural Park", sub: "Christchurch" },
  { label: "Parking", value: "Free on-site", sub: "3,000+ spaces" },
];

function QuickFacts() {
  return (
    <section className="bg-white section-compact border-b border-light-grey">
      <div className="container-site">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {FACTS.map((f) => (
            <div key={f.label}>
              <div className="text-eyebrow uppercase tracking-[0.12em] font-semibold text-orange-500 mb-2">
                {f.label}
              </div>
              <div className="font-heading text-h4 font-bold text-charcoal leading-tight">
                {f.value}
              </div>
              <div className="text-body-s text-mid-grey mt-1">{f.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============== 3 · GETTING HERE ============== */
const TRANSPORT = [
  {
    icon: "📍",
    title: "Address",
    body: "Canterbury Agricultural Park, Curletts Road, Christchurch 8042.",
  },
  {
    icon: "🚗",
    title: "By car",
    body: "15 minutes from Cathedral Square. Exit State Highway 1 at Curletts Road. Free on-site parking with 3,000+ spaces — follow event signage.",
  },
  {
    icon: "🚌",
    title: "By bus",
    body: "Metro Bus routes Yellow Line and 28 stop within walking distance. Plan your trip at metroinfo.co.nz.",
  },
  {
    icon: "🚴",
    title: "By bike",
    body: "Secure bike racks at the main entrance. Cycleway access from Hagley Park via Riccarton Avenue.",
  },
  {
    icon: "♿",
    title: "Drop-off zone",
    body: "Accessible drop-off at the main entrance — flag staff in hi-vis on arrival.",
  },
];

function GettingHere() {
  return (
    <section id="getting-here" className="bg-paper section-content scroll-mt-20">
      <div className="container-site">
        <div className="max-w-prose mb-8 md:mb-10">
          <Eyebrow>Getting Here</Eyebrow>
          <h2 className="text-h1 font-extrabold text-green-500 mb-3 mt-2">
            The easiest weekend
            <br />
            in Canterbury.
          </h2>
          <p className="text-body-l text-dark-grey">
            Free parking, easy access from State Highway 1, and just 15 minutes
            from central Christchurch.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-6 items-start">
          <MapPlaceholder />
          <div>
            {TRANSPORT.map((t) => (
              <div
                key={t.title}
                className="py-3 border-b border-light-grey last:border-b-0"
              >
                <h3 className="flex items-center gap-2 text-body font-bold text-charcoal mb-1">
                  <span
                    className="bg-green-50 rounded-full inline-flex items-center justify-center text-body"
                    style={{ width: 32, height: 32, minWidth: 32 }}
                  >
                    {t.icon}
                  </span>
                  {t.title}
                </h3>
                <p
                  className="text-body-s text-dark-grey"
                  style={{ paddingLeft: 40 }}
                >
                  {t.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Embedded Google Map of the venue + Get Directions CTA.
 *
 * Uses Google Maps' keyless query embed (works without an API key) — the
 * iframe shows an interactive map centred on the venue. The orange overlay
 * button opens the Maps directions URL in a new tab so visitors can launch
 * navigation in their own Maps app.
 */
const VENUE_ADDRESS =
  "Canterbury Park A&P Showgrounds, Curletts Road, Wigram, Christchurch 8042, New Zealand";

const GOOGLE_MAPS_EMBED_URL =
  "https://maps.google.com/maps?q=" +
  encodeURIComponent(VENUE_ADDRESS) +
  "&hl=en&output=embed";

const GOOGLE_MAPS_DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=" +
  encodeURIComponent(VENUE_ADDRESS);

function MapPlaceholder() {
  return (
    <div
      className="bg-white rounded border border-light-grey relative overflow-hidden"
      style={{ minHeight: 380 }}
    >
      <iframe
        src={GOOGLE_MAPS_EMBED_URL}
        title="Canterbury Park A&P Showgrounds map"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="block w-full h-full"
        style={{ minHeight: 380, border: 0 }}
      />
      <a
        href={GOOGLE_MAPS_DIRECTIONS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-3 right-3 inline-flex items-center gap-1 bg-orange-500 hover:bg-orange-400 text-white px-3 py-2 text-label font-semibold uppercase tracking-[0.08em] rounded-sm no-underline transition-colors"
        style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.18)" }}
      >
        Get Directions →
      </a>
    </div>
  );
}

/* ============== 4 · WHAT'S ON ============== */
const ZONES = [
  "Boating & Watersports",
  "Caravans & Motorhomes",
  "4×4 Outfitters",
  "Adventure Gear & Apparel",
  "Cycling",
  "Outdoor Living",
  "Cars & Motorbikes",
  "Mounted Games",
  "Food Court",
  "Amusements",
  "Tourism & Artisan",
  "Demonstration Tent",
  "Adventure Gear Marquee",
];

function WhatsOn() {
  return (
    <section
      id="whats-on"
      className="relative text-white section-content overflow-hidden scroll-mt-20"
      style={{
        backgroundImage:
          "linear-gradient(rgba(15,14,12,0.75), rgba(15,14,12,0.75)), url('/visit/whats-on.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container-site">
        <div className="container-prose">
          <Eyebrow variant="orange">What&apos;s On</Eyebrow>
          <h2 className="text-h1 font-extrabold text-white mb-3 mt-2">
            13 zones.
            <br />
            Three days to see them.
          </h2>
          <p className="text-body-l opacity-92 mb-5">
            From boating to bikes, 4×4 to family camping — 300+ brands across
            13 themed zones. The full programme and demo schedule drops in
            August.
          </p>
          <div className="flex flex-wrap gap-1 mb-5">
            {ZONES.map((z) => (
              <span
                key={z}
                className="inline-block bg-white/10 border border-white/30 text-white px-3 py-1 text-body-s rounded-full"
              >
                {z}
              </span>
            ))}
          </div>
          <Button
            href="https://drive.google.com/file/d/1npR9zs8aHHDqrEyQ_IHNdsArKFkS018L/view?usp=sharing"
            variant="outline-white"
          >
            View All Zones
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ============== 5 · ACCESSIBILITY ============== */
const ACCESS = [
  {
    title: "Wheelchair access",
    body: "Step-free access throughout. Flat, firm pathways between zones. Accessible toilets in all main blocks.",
  },
  {
    title: "Accessible parking",
    body: "Dedicated accessible parking near the main entrance — display your mobility card on arrival.",
  },
  {
    title: "Dogs welcome",
    body: "All dogs are welcome on a lead. Bring water and clean up after them — it's an outdoor venue with plenty of space to stretch.",
  },
  {
    title: "Companion card",
    body: "NZ Companion Card accepted — companion enters free with a card holder's ticket.",
  },
];

function Accessibility() {
  return (
    <section
      id="accessibility"
      className="bg-white section-content scroll-mt-20"
    >
      <div className="container-site">
        <div className="max-w-prose mb-7">
          <Eyebrow>Accessibility</Eyebrow>
          <h2 className="text-h1 font-extrabold text-charcoal mb-2 mt-2">
            Built for everyone.
          </h2>
          <p className="text-body-l text-dark-grey">
            If you&apos;re planning a visit and want to check anything in
            advance, get in touch and we&apos;ll sort it.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {ACCESS.map((a) => (
            <div
              key={a.title}
              className="p-3 bg-paper rounded border-l-4 border-green-500"
            >
              <h3 className="text-body font-bold text-charcoal mb-1">
                {a.title}
              </h3>
              <p className="text-body-s text-dark-grey">{a.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============== 6 · FAMILY ============== */
const FAMILY_ITEMS = [
  { strong: "Under-12s free", rest: "with a paying adult — no separate ticket needed" },
  { strong: "Stroller-friendly", rest: "wide aisles throughout" },
  { strong: "Bounce castle", rest: "for the kids, near the food court" },
  { strong: "Family seating", rest: "in the food court" },
  { strong: "Lost child point", rest: "at the main info desk" },
];

function FamilySection() {
  return (
    <section id="family" className="bg-paper section-content scroll-mt-20">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div>
            <Eyebrow>Bringing the family</Eyebrow>
            <h2 className="text-h1 font-extrabold text-green-500 mb-3 mt-2">
              Plenty for the kids,
              <br />
              too.
            </h2>
            <p className="text-body-l text-dark-grey mb-4">
              Outdoor Expo is built for families — wide aisles, free entry for
              under-12s, plenty of things for kids to do while you compare gear.
            </p>
            <ul className="list-none p-0">
              {FAMILY_ITEMS.map((item) => (
                <li
                  key={item.strong}
                  className="relative py-2 border-b border-light-grey last:border-b-0"
                  style={{ paddingLeft: 36 }}
                >
                  <span
                    className="absolute left-0 bg-green-500 text-white rounded-full inline-flex items-center justify-center text-body-s font-bold"
                    style={{ width: 24, height: 24, top: 12 }}
                  >
                    ✓
                  </span>
                  <strong>{item.strong}</strong> {item.rest}
                </li>
              ))}
            </ul>
          </div>
          <div
            className="rounded-lg overflow-hidden bg-cover bg-center w-full mx-auto"
            style={{
              aspectRatio: "4/3",
              backgroundImage: "url('/visit/family.jpg')",
            }}
            role="img"
            aria-label="Family enjoying outdoor expo"
          />
        </div>
      </div>
    </section>
  );
}

/* ============== 7 · FAQS ============== */
const FAQS = [
  {
    q: "Can I re-enter on the same day?",
    a: "Yes — keep your wristband on. You can come and go all day with a valid wristband.",
  },
  {
    q: "Are tickets refundable?",
    a: "Tickets are non-refundable but transferable. If you can't make it, give your ticket to a mate.",
  },
  {
    q: "Can I bring my dog?",
    a: "Yes — all dogs are welcome, from certified assistance animals to the family pet. Keep them on a lead, bring water, pick up after them, and please be mindful of crowds and other dogs so everyone (and every pup) has a great day out.",
  },
  {
    q: "Is photography allowed?",
    a: "Personal photography is welcome. Tag us on Instagram @outdoorexponz. Commercial filming requires advance media accreditation — contact us at least two weeks ahead.",
  },
  {
    q: "Are there ATMs on-site?",
    a: "Yes — two ATMs in the main entrance area. Most exhibitors accept EFTPOS and contactless. Cash is handy for food court vendors during peak times.",
  },
  {
    q: "What if it rains?",
    a: "Rain or shine, the expo goes ahead — and honestly, what better way to test-drive the outdoor gear you're about to buy? Pack a jacket, embrace the Kiwi weather, and consider it part of the experience. Cancellation only in extreme weather; we'll post updates on social media and email ticket holders.",
  },
  {
    q: "Can I buy tickets at the door?",
    a: "Yes, but advance tickets save you $5 and skip the queue. Door sales open at 8:30am daily.",
  },
];

function Faqs() {
  return (
    <section id="faqs" className="bg-white section-content scroll-mt-20">
      <div className="container-site">
        <div className="max-w-prose mx-auto mb-7 text-center">
          <Eyebrow>Before you come</Eyebrow>
          <h2 className="text-h1 font-extrabold text-charcoal mb-2 mt-2">
            Quick answers.
          </h2>
          <p className="text-body-l text-dark-grey">
            Common questions — if it&apos;s not here, drop us a line.
          </p>
        </div>
        <div className="max-w-prose mx-auto">
          {FAQS.map((faq, idx) => (
            <details
              key={faq.q}
              className="border-b border-light-grey py-3 group"
              open={idx === 0}
            >
              <summary className="font-heading text-h4 font-bold text-charcoal cursor-pointer flex items-center justify-between gap-3 list-none">
                <span>{faq.q}</span>
                <span className="text-h3 text-orange-500 font-normal transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="text-body text-dark-grey mt-2">{faq.a}</p>
            </details>
          ))}
        </div>
        <div className="text-center mt-6">
          <Button href="/contact" variant="outline-charcoal">
            Contact us
          </Button>
        </div>
      </div>
    </section>
  );
}
