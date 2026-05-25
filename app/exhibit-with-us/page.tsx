import { Eyebrow } from "@/components/Eyebrow";
import { Button } from "@/components/Button";
import { Newsletter } from "@/components/home/Newsletter";
import { HubSpotForm } from "@/components/HubSpotForm";

export const metadata = {
  title: "Exhibit With Us",
  description:
    "Engage with 20,000+ expected visitors — outdoor enthusiasts and families — at NZ's largest outdoor expo. Canterbury Agricultural Park, Christchurch · 2–4 October 2026.",
};

const PROSPECTUS_URL =
  "https://drive.google.com/file/d/1ZAaa9-QF9tZhEvcAKaEQxPRwAmbdEXJm/view";

export default function ExhibitWithUsPage() {
  return (
    <>
      <Hero />
      <WhyExhibit />
      <Stats />
      <WhatsIncluded />
      <ProspectusCTA />
      <ApplicationForm />
      <Testimonial />
      <Faqs />
      <ContactStrip />
      <Newsletter />
    </>
  );
}

/* ============== 1 · HERO ============== */
function Hero() {
  return (
    <section
      className="relative flex items-center text-white py-12 md:py-15 overflow-hidden"
      style={{
        minHeight: "60vh",
        backgroundImage:
          "linear-gradient(rgba(15,14,12,0.55), rgba(15,14,12,0.35)), url('/exhibit/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container-site relative z-10">
        <div className="container-prose">
          <Eyebrow variant="orange">Exhibit at Outdoor Expo 2026</Eyebrow>
          <h1 className="text-display font-extrabold text-white mb-3 mt-2">
            Engage With 20,000+
            <br />
            Ready-to-Buy Visitors
            <br />
            From All Walks of Life
          </h1>
          <p className="text-body-l text-white opacity-95 mb-5 max-w-[560px]">
            20,000+ expected visitors. 300+ exhibitors. Three days. The South
            Island&apos;s biggest gathering of outdoor enthusiasts and their
            families — and the only event where the entire industry meets them
            face-to-face.
          </p>
          <div className="flex flex-wrap gap-2">
            <Button href="#apply" variant="primary" size="lg">
              Apply to Exhibit
            </Button>
            <Button href={PROSPECTUS_URL} variant="outline-white" size="lg">
              Download Prospectus
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============== 2 · WHY EXHIBIT ============== */
const REASONS = [
  {
    eyebrow: "Ready to buy",
    title: "Visitors with high purchase intent.",
    body: "Attendees come to compare gear, talk to the makers, and buy. The average household spend on outdoor gear in NZ is among the highest in the world.",
  },
  {
    eyebrow: "South Island only",
    title: "Be the brand they meet in person.",
    body: "Most major outdoor events are in Auckland. Outdoor Expo is the only large-scale outdoor expo in the South Island — and your audience is here.",
  },
  {
    eyebrow: "Three days, one place",
    title: "Three days of high-intent foot traffic.",
    body: "Families, hunters, fishers, boaties, 4×4 enthusiasts, cyclists, campers — all in one place, ready to talk gear and make decisions.",
  },
];

function WhyExhibit() {
  return (
    <section className="bg-paper section-content">
      <div className="container-site">
        <div className="container-prose mb-8 md:mb-10">
          <Eyebrow>Why exhibit</Eyebrow>
          <h2 className="text-h1 font-extrabold text-green-500 mb-3 mt-2">
            Where the South Island
            <br />
            outdoor industry meets.
          </h2>
          <p className="text-body-l text-dark-grey">
            Outdoor Expo isn&apos;t a trade show. It&apos;s where Kiwi
            outdoor enthusiasts and their families — your customers — come to
            discover, compare, and buy.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {REASONS.map((r) => (
            <div key={r.title} className="bg-white p-4 rounded border-t-4 border-orange-500">
              <Eyebrow>{r.eyebrow}</Eyebrow>
              <h3 className="text-h3 font-bold text-charcoal mb-2 mt-2 leading-tight">
                {r.title}
              </h3>
              <p className="text-body text-dark-grey">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============== 3 · STATS ============== */
const STATS = [
  { value: "20K+", label: "Expected Visitors" },
  { value: "300+", label: "Exhibitor Stands" },
  { value: "13", label: "Themed Zones" },
  { value: "3", label: "Days" },
];

function Stats() {
  return (
    <section className="bg-white section-compact">
      <div className="container-site">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="font-heading font-extrabold text-[44px] md:text-[64px] text-green-500 leading-none">
                {s.value}
              </div>
              <div className="text-eyebrow uppercase tracking-[0.1em] font-semibold text-charcoal mt-2">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============== 4 · WHAT'S INCLUDED ============== */
const INCLUDED = [
  "Branded exhibitor profile on outdoorexpo.co.nz (200+ visits each)",
  "Three days of high-intent foot traffic in your stand",
  "Inclusion in pre-event social campaigns reaching 100K+ Kiwis",
  "Access to a hands-on event team — our exhibitor specialists personally onboard every exhibitor",
  "Exclusive discounts and benefits through our trusted preferred suppliers",
  "Pre-event marketing toolkit (graphics, copy, hashtags)",
  "Post-event recap report with footfall and engagement data",
];

function WhatsIncluded() {
  return (
    <section className="bg-paper section-content">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div>
            <Eyebrow>What you get</Eyebrow>
            <h2 className="text-h1 font-extrabold text-charcoal mb-3 mt-2">
              More than a stand.
            </h2>
            <p className="text-body-l text-dark-grey mb-4">
              Every exhibitor package includes practical marketing,
              operational support, and access to a team that genuinely wants
              your stand to succeed.
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
              backgroundImage: "url('/exhibit/stand.jpg')",
            }}
            role="img"
            aria-label="Exhibitor stand example"
          />
        </div>
      </div>
    </section>
  );
}

/* ============== 5 · PROSPECTUS CTA ============== */
function ProspectusCTA() {
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
        <Eyebrow variant="orange">Stand options &amp; pricing</Eyebrow>
        <h2 className="text-h1 font-extrabold text-white mb-3 mt-2 max-w-prose mx-auto">
          Read the 2026 Exhibitor Prospectus.
        </h2>
        <p className="text-body-l text-white opacity-95 mb-5 max-w-prose mx-auto">
          Stand sizes, pricing, package inclusions, marquee layout, and
          audience demographics — all in one document.
        </p>
        <Button href={PROSPECTUS_URL} variant="primary" size="lg">
          Download Prospectus (PDF)
        </Button>
      </div>
    </section>
  );
}

/* ============== 6 · APPLICATION FORM ============== */
function ApplicationForm() {
  return (
    <section id="apply" className="bg-white section-content scroll-mt-20">
      <div className="container-site">
        <div className="container-prose mx-auto mb-7">
          <Eyebrow>Apply to exhibit</Eyebrow>
          <h2 className="text-h1 font-extrabold text-charcoal mb-3 mt-2">
            Join the 2026 Outdoor Expo!
          </h2>
          <p className="text-body-l text-dark-grey mb-2">
            Complete the form below to express interest. This is{" "}
            <strong>not a booking commitment</strong> — our team will get in
            touch to discuss your requirements and finalise details together.
          </p>
          <p className="text-body text-dark-grey">
            Before applying, we recommend reviewing the{" "}
            <a
              href={PROSPECTUS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 underline hover:text-orange-700"
            >
              2026 Exhibitor Prospectus
            </a>{" "}
            for pricing and site options.
          </p>
        </div>
        <div className="max-w-prose mx-auto">
          <HubSpotForm
            portalId="44544113"
            formId="56c77ba0-3eb8-4c6a-8b24-33afced7b616"
            region="ap1"
          />
        </div>
      </div>
    </section>
  );
}

/* ============== 7 · TESTIMONIAL ============== */
function Testimonial() {
  return (
    <section
      className="relative text-white section-content overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(15,14,12,0.7), rgba(15,14,12,0.7)), url('/exhibit/quote-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container-site">
        <div className="container-prose mx-auto text-center">
          <Eyebrow variant="orange">From a 2025 exhibitor</Eyebrow>
          <blockquote className="font-heading text-h2 font-bold text-white mt-3 mb-4 leading-snug">
            &ldquo;We had a great show! The other exhibitors, the staff, Marc
            — all so amazing! Marc, you ran a great show and were SOOOO
            helpful and friendly! Will definitely be doing the show again in
            the future.&rdquo;
          </blockquote>
          <div className="text-body-l font-semibold text-white opacity-90">
            Warthog Sharpeners
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============== 8 · FAQS ============== */
const FAQS = [
  {
    q: "When does the application close?",
    a: "Applications stay open until we sell out, but popular categories fill quickly — especially boating, 4×4, and food. Apply early to secure your preferred location in the marquee.",
  },
  {
    q: "How much does a stand cost?",
    a: "Stand prices vary by size and location — full details are in the 2026 Exhibitor Prospectus. Packages start with small footprint options ideal for first-time exhibitors and scale up to premium feature stands.",
  },
  {
    q: "Can I see where my stand will be located?",
    a: "Yes. Once you submit your application, our team will share the marquee layout and discuss the best location for your category, target audience, and any specific requirements (power, water, vehicle access).",
  },
  {
    q: "What's included with my stand?",
    a: "Most packages include the stand footprint, walls/dividers, basic lighting, power access, and your exhibitor profile on outdoorexpo.co.nz. Larger packages include furniture and signage. Full details in the Prospectus.",
  },
  {
    q: "I'm a small or new brand — is this right for me?",
    a: "Absolutely. We've supported plenty of first-time exhibitors and small brands. Our team helps you plan a stand that works at your scale, and our pre-event marketing toolkit gives you a strong foundation to drive traffic to your stand.",
  },
  {
    q: "What if I have a question not answered here?",
    a: "Email Marc directly at info@outdoorexpo.co.nz. We answer every enquiry personally — usually within one working day.",
  },
];

function Faqs() {
  return (
    <section className="bg-white section-content">
      <div className="container-site">
        <div className="container-prose mx-auto mb-7 text-center">
          <Eyebrow>Common questions</Eyebrow>
          <h2 className="text-h1 font-extrabold text-charcoal mb-2 mt-2">
            Before you apply.
          </h2>
        </div>
        <div className="container-prose mx-auto">
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
      </div>
    </section>
  );
}

/* ============== 9 · CONTACT STRIP ============== */
function ContactStrip() {
  return (
    <section className="bg-charcoal text-white section-compact">
      <div className="container-site text-center">
        <Eyebrow variant="orange">Talk to Marc</Eyebrow>
        <p className="text-h3 font-bold mt-2 mb-3">
          Questions? Want to chat through the options?
        </p>
        <a
          href="mailto:info@outdoorexpo.co.nz"
          className="inline-block text-body-l text-orange-500 underline hover:text-orange-400"
        >
          info@outdoorexpo.co.nz
        </a>
      </div>
    </section>
  );
}
