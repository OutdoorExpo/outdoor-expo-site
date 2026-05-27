import { readFileSync } from "fs";
import path from "path";
import Link from "next/link";
import { Button } from "../Button";
import { Eyebrow } from "../Eyebrow";

// 12 returning brands, displayed left-to-right in the home Line-up grid.
// Each `slug` must match an entry in lib/exhibitors-2025.json — that's what
// gives us a working /exhibitors/<slug> detail page to link to. A few of the
// slugs look odd (e.g. "christchurch-mini-garage" → Actions Power & Water
// Sports) because they were carried over verbatim from the Wix import.
const LOGOS = [
  { file: "pulsar.svg", name: "Pulsar", slug: "pulsar" },
  { file: "black-sheep-trading.svg", name: "Black Sheep Trading", slug: "black-sheep-trading" },
  { file: "cmg-campers.svg", name: "CMG Campers", slug: "cmg-campers" },
  { file: "action-power-water-sports.svg", name: "Action Power & Water Sports", slug: "christchurch-mini-garage" },
  { file: "mountain-high.svg", name: "Mountain High Clothing", slug: "mountain-high-clothing" },
  { file: "pure-salt.svg", name: "Pure Salt", slug: "pure-salt" },
  { file: "canterbury-vehicle-accessories.svg", name: "Canterbury Vehicle Accessories", slug: "canterbury-vehicle-accessories" },
  { file: "arctic-sammy.svg", name: "Arctic Sammy", slug: "arctic-sammy" },
  { file: "bush-bath.svg", name: "Bush Bath", slug: "the-bush-baths" },
  { file: "white-pointer-boats.svg", name: "White Pointer Boats", slug: "white-pointer-boats" },
  { file: "kaweka.svg", name: "Kaweka Outdoor Equipment", slug: "kaweka-outdoor-equipment" },
  { file: "hybrid-bikes.svg", name: "Hybrid Bikes", slug: "hybrid-bikes" },
];

/**
 * Read an SVG file at build time and normalise it so CSS can control the
 * size. Inline SVG is the only reliable way to avoid the Safari-iOS bug
 * where <img src="*.svg"> gets rasterised once at low resolution and
 * looks blurry on retina screens.
 */
function loadSvg(file: string): string {
  const fullPath = path.join(process.cwd(), "public", "home", "logos", file);
  let svg = readFileSync(fullPath, "utf-8");

  // Strip fixed width/height attributes from the root <svg> so CSS wins.
  svg = svg.replace(
    /<svg\b([^>]*)>/i,
    (_match, attrs: string) => {
      const cleaned = attrs
        .replace(/\s+width="[^"]*"/i, "")
        .replace(/\s+height="[^"]*"/i, "")
        .replace(/\s+preserveAspectRatio="[^"]*"/i, "");
      return `<svg${cleaned} width="100%" height="100%" preserveAspectRatio="xMidYMid meet">`;
    }
  );

  return svg;
}

export function ReturningExhibitors() {
  const logos = LOGOS.map((l) => ({ ...l, svg: loadSvg(l.file) }));

  return (
    <section className="bg-white section-content">
      <div className="container-site">
        <div className="max-w-[680px] mb-8">
          <Eyebrow>2026 Line-up</Eyebrow>
          <h2 className="text-h1 font-extrabold text-charcoal mb-2 mt-2">
            Some familiar faces
            <br />
            are already back.
          </h2>
          <p className="text-body-l text-dark-grey">
            The full exhibitor directory drops closer to the event. Here&apos;s a
            preview of brands returning from 2025.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-2 md:gap-3 mb-7">
          {logos.map((logo) => (
            <Link
              key={logo.file}
              href={`/exhibitors/${logo.slug}`}
              aria-label={`${logo.name} — view exhibitor details`}
              className="bg-sand aspect-[4/3] flex items-center justify-center rounded p-2 hover:bg-green-50 transition-colors"
            >
              <div
                role="img"
                aria-label={`${logo.name} logo`}
                className="w-full h-full flex items-center justify-center [&>svg]:w-full [&>svg]:h-full [&>svg]:max-w-full [&>svg]:max-h-full"
                dangerouslySetInnerHTML={{ __html: logo.svg }}
              />
            </Link>
          ))}
        </div>
        <div className="flex flex-col md:flex-row gap-2 justify-center items-center">
          <Button href="/exhibitors" variant="primary">
            View All 2025 Exhibitors
          </Button>
          <Button href="/exhibit-with-us" variant="outline-orange">
            Apply to Exhibit
          </Button>
        </div>
      </div>
    </section>
  );
}
