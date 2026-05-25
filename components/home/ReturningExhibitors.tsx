import { Button } from "../Button";
import { Eyebrow } from "../Eyebrow";

// Placeholder list — replace with Sanity CMS data once schema is connected
const placeholderLogos = [
  "Kathmandu", "Fishing & Outdoor", "Hunting & Fishing NZ", "Burnsco",
  "Macpac", "Torpedo7", "Bivouac Outdoor", "Honda Marine",
  "Suzuki Marine", "Coleman", "Stoney Creek", "Swazi",
];

export function ReturningExhibitors() {
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
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3 mb-7">
          {placeholderLogos.map((name) => (
            <div
              key={name}
              className="bg-sand aspect-[3/2] flex items-center justify-center rounded font-heading font-bold text-body-s text-mid-grey text-center p-2 hover:bg-green-50 hover:text-green-500 transition-colors"
            >
              {name}
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row gap-2 justify-center items-center">
          <Button href="/exhibitors/2025" variant="primary">
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
