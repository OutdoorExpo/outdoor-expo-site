import { Eyebrow } from "@/components/Eyebrow";
import { Newsletter } from "@/components/home/Newsletter";
import exhibitors from "@/lib/exhibitors-2025.json";

export const metadata = {
  title: "Exhibitors",
  description:
    "Outdoor Expo brings together camping, campervan, boating, outdoor gear, adventure, lifestyle, and specialist brands. See who's confirmed for 2026 and explore the 2025 line-up.",
};

type Exhibitor = {
  slug: string;
  name: string;
  description: string;
  logo: string | null;
  website: string | null;
  instagram: string | null;
  facebook: string | null;
  youtube: string | null;
};

const data = exhibitors as Exhibitor[];

/**
 * Slugs (in display order) of exhibitors already confirmed for 2026.
 * These are pulled to the top of the unified grid.
 * The rest of the 2025 line-up follows in its original order.
 * Update this list as new confirmations come in.
 */
const CONFIRMED_2026_SLUGS: string[] = [
  "advanced-optics",
  "bays-boating",
  "black-sheep-trading",
  "the-bush-baths",
  "canterbury-vehicle-accessories",
  "cjm-s-events-ltd",
  "cmg-campers",
  "cohesive-construction",
  "ebikeznz",
  "falcon-overland",
  "hybrid-bikes",
  "kaweka-outdoor-equipment",
  "lifestyle-builds",
  "lysaght-ltd",
  "manchester-unity",
  "mountain-high-clothing",
  "night-owl-outdoor-gear",
  "north-to-south-first-aid-supplies",
  "osprey-boats-new-zealand",
  "ponies2go",
  "sports-marine",
  "the-shed-specialists-co",
  "white-pointer-boats",
];

const CONFIRMED_SET = new Set(CONFIRMED_2026_SLUGS);

// Build a single ordered list: 2026-confirmed first (in spec order), then the
// rest of the 2025 line-up in its original JSON order. Visually no distinction
// between the two groups — they share the same card style and grid.
const orderedExhibitors: Exhibitor[] = [
  ...CONFIRMED_2026_SLUGS
    .map((slug) => data.find((e) => e.slug === slug))
    .filter((e): e is Exhibitor => Boolean(e)),
  ...data.filter((e) => !CONFIRMED_SET.has(e.slug)),
];

export default function ExhibitorsPage() {
  return (
    <>
      <Hero />
      <Grid items={orderedExhibitors} />
      <Newsletter />
    </>
  );
}

/* ============== HERO ============== */
function Hero() {
  return (
    <section className="bg-paper section-content">
      <div className="container-site">
        <div className="container-prose">
          <Eyebrow>The Line-up</Eyebrow>
          <h1 className="text-h1 font-extrabold text-charcoal mb-3 mt-2">
            Brands Kiwis love.
            <br />
            New ones you&apos;ll want to discover.
          </h1>
          <p className="text-body-l text-dark-grey mb-3">
            Outdoor Expo brings together a wide mix of camping, campervan,
            boating, outdoor gear, adventure, lifestyle, and local specialist
            brands. See who&apos;s already confirmed for 2026, and explore the
            exhibitors who helped make the 2025 show such a great one.
          </p>
          <p className="text-body text-dark-grey">
            <strong>New exhibitors are joining the line-up regularly</strong> —
            follow us on{" "}
            <a
              href="https://www.instagram.com/outdoorexponz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 underline hover:text-orange-700"
            >
              Instagram
            </a>{" "}
            or{" "}
            <a
              href="https://www.facebook.com/outdoorexponz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 underline hover:text-orange-700"
            >
              Facebook
            </a>{" "}
            to be the first to hear who&apos;s next.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============== GRID ============== */
function Grid({ items }: { items: Exhibitor[] }) {
  return (
    <section className="bg-white section-content">
      <div className="container-site">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {items.map((e) => (
            <Card key={e.slug} e={e} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============== CARD ============== */
function Card({ e }: { e: Exhibitor }) {
  const primaryLink =
    e.website || e.instagram || e.facebook || e.youtube || null;
  const description =
    e.description && e.description.length > 140
      ? e.description.slice(0, 137).trim() + "…"
      : e.description;

  return (
    <article className="flex flex-col bg-white border border-light-grey rounded p-3 hover:border-green-500 transition-colors">
      {/* Logo */}
      <a
        href={primaryLink ?? "#"}
        target={primaryLink ? "_blank" : undefined}
        rel={primaryLink ? "noopener noreferrer" : undefined}
        className="block aspect-[3/2] bg-sand rounded mb-2 flex items-center justify-center overflow-hidden p-2"
        aria-label={`${e.name} — open website`}
      >
        {e.logo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={e.logo}
            alt={`${e.name} logo`}
            loading="lazy"
            className="max-w-full max-h-full object-contain"
          />
        ) : (
          <span className="text-mid-grey font-heading text-h3">
            {e.name[0]}
          </span>
        )}
      </a>

      {/* Name */}
      <h3 className="font-heading font-bold text-charcoal text-body-l mb-1 leading-tight">
        {primaryLink ? (
          <a
            href={primaryLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 no-underline"
          >
            {e.name}
          </a>
        ) : (
          e.name
        )}
      </h3>

      {/* Description */}
      {description && (
        <p className="text-body-s text-dark-grey mb-2 flex-grow">
          {description}
        </p>
      )}

      {/* Links */}
      <div className="flex flex-wrap gap-1 mt-auto pt-1">
        {e.website && <Pill href={e.website} label="Website" />}
        {e.instagram && <Pill href={e.instagram} label="Instagram" />}
        {e.facebook && <Pill href={e.facebook} label="Facebook" />}
        {e.youtube && <Pill href={e.youtube} label="YouTube" />}
      </div>
    </article>
  );
}

function Pill({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-2 py-0.5 text-[11px] uppercase tracking-[0.06em] font-semibold text-mid-grey bg-sand rounded-sm hover:bg-green-50 hover:text-green-500 transition-colors no-underline"
    >
      {label}
    </a>
  );
}
