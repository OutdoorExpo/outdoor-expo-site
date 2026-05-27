import { Eyebrow } from "@/components/Eyebrow";
import { Button } from "@/components/Button";
import { TicketCTA } from "@/components/TicketCTA";
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
      <Tickets />
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
  { href: "#tickets", label: "Tickets" },
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
  { label: "Hours", value: "9am – 4pm daily", sub: null },
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
              {f.sub && (
                <div className="text-body-s text-mid-grey mt-1">{f.sub}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============== 3 · TICKETS ============== */
const TICKETS = [
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
      "The best value for the whole whānau. Covers two adults (18+) and two youths (13–17) for one day.",
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

function Tickets() {
  return (
    <section id="tickets" className="bg-paper section-content scroll-mt-20">
      <div className="container-site">
        <div className="container-prose mx-auto text-center mb-7">
          <Eyebrow>Tickets</Eyebrow>
          <h2 className="text-h1 font-extrabold text-green-500 mb-3 mt-2 leading-tight">
            Join the adventure.
          </h2>
          <p className="text-body-l text-dark-grey">
            Secure your tickets for New Zealand&rsquo;s largest celebration of
            the great outdoors. Tickets are valid for{" "}
            <strong className="text-charcoal">one day only</strong> — pick the
            day that works for you and your whānau.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {TICKETS.map((t) => (
            <div
              key={t.name}
              className={`bg-white rounded p-4 md:p-5 flex flex-col ${
                t.highlight
                  ? "border-2 border-orange-500 lg:scale-[1.02] shadow-md"
                  : "border border-light-grey"
              }`}
            >
              {t.highlight && (
                <span className="inline-block self-start mb-2 uppercase tracking-[0.1em] font-extrabold text-body-s px-2 py-1 rounded bg-orange-500 text-white">
                  Best Value
                </span>
              )}
              <h3 className="font-heading font-bold text-h3 text-charcoal mb-1 leading-tight">
                {t.name}
              </h3>
              <div className="text-eyebrow uppercase tracking-[0.08em] font-semibold text-mid-grey mb-3">
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
                location={`visit_ticket_card_${t.label.toLowerCase().replace(/\s+/g, "_")}`}
                className="w-full"
              >
                {t.price === "Free" ? "Learn More" : "Get Tickets"}
              </TicketCTA>
            </div>
          ))}
        </div>

        <p className="text-body-s text-mid-grey text-center mt-5">
          Tickets are sold via Flicket. Prices in NZD and include GST. Children
          0–12 must be accompanied by a ticketed adult to enter.
        </p>
      </div>
    </section>
  );
}

/* ============== 4 · GETTING HERE ============== */
const TRANSPORT = [
  {
    icon: "📍",
    title: "Address",
    body: "Canterbury Agricultural Park, Curletts Road, Christchurch 8042.",
  },
  {
    icon: "🚗",
    title: "By car",
    body: "15 minutes from Cathedral Square. Exit State Highway 1 near Curletts Road. Please note: General public parking entry is via Hayton Road or Augustine Drive. (Curletts Road entry is strictly reserved for Mobility Pass holders). Free on-site parking with 3,000+ spaces — follow event signage.",
  },
  {
    icon: "🚌",
    title: "By bus",
    body: "Take Metro Bus Route 7 to Halswell Road, which stops within walking distance of the venue. Plan your trip and check timetables at metroinfo.co.nz.",
  },
  {
    icon: "🚴",
    title: "By bike",
    body: "Secure bike racks are available at the main entrance. Enjoy easy and safe access from Hagley Park via the Little River Link cycleway.",
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
            12 Zones.
            <br />
            Three days to see them.
          </h2>
          <p className="text-body-l opacity-92 mb-5">
            From boating to bikes, 4×4 to family camping — 300+ brands across
            12 themed zones. The full programme and demo schedule drops in
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
    body: "Step-free access throughout. Flat pathways between zones. Accessible toilets are available.",
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
    title: "Carer entry",
    body: "Bringing a support worker or carer? They enter at no charge with the person they're assisting — just let our entry team know on arrival. The Hāpai Access Card is recognised here too.",
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
  { strong: "Kids' amusements", rest: "near the food court — rides, a bounce castle, face painting and more" },
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
    a: "Yes — just let our ticketing team know before you leave. They'll give you a wristband so you can come and go on the same day with your valid ticket.",
  },
  {
    q: "Are tickets refundable?",
    a: "Tickets are non-refundable but transferable. If you can't make it, give your ticket to a mate.",
  },
  {
    q: "Can I bring my dog?",
    a: "Yes — dogs are welcome, from certified assistance animals to the family pet. Please keep them on a lead, bring water, pick up after them, and be mindful of crowds and other dogs so everyone has a great day out. You'll also find dog-friendly outdoor brands, including Arctic Sammy, helping Kiwis enjoy more adventures with their pups.",
  },
  {
    q: "Is photography allowed?",
    a: "Personal photography is welcome. Tag us on Instagram @outdoorexponz. Commercial filming requires advance media accreditation — contact us at least two weeks ahead.",
  },
  {
    q: "What if it rains?",
    a: "Rain or shine, the expo goes ahead — and honestly, what better way to test-drive the outdoor gear you're about to buy? Pack a jacket, embrace the Kiwi weather, and consider it part of the experience. Cancellation only in extreme weather; we'll post updates on social media and email ticket holders.",
  },
  {
    q: "Can I buy tickets at the door?",
    a: "Yes — door sales open at 9:00am daily, with cash and EFTPOS payments accepted. Online tickets are $5 cheaper, so booking ahead is the best way to save and skip the queue.",
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
