import { Button } from "../Button";
import { Eyebrow } from "../Eyebrow";

// Order: 1, 3, 10 first (highest priority), then the rest in random order.
// To re-order later, swap entries. To swap a logo, replace `file` only —
// `name` is used for alt text.
const LOGOS = [
  // Priority lead-ins
  { file: "pulsar.svg", name: "Pulsar" },
  { file: "black-sheep-trading.svg", name: "Black Sheep Trading" },
  { file: "cmg-campers.svg", name: "CMG Campers" },
  // Remaining in randomised order
  { file: "action-power-water-sports.svg", name: "Action Power & Water Sports" },
  { file: "mountain-high.svg", name: "Mountain High Clothing" },
  { file: "pure-salt.svg", name: "Pure Salt" },
  { file: "canterbury-vehicle-accessories.svg", name: "Canterbury Vehicle Accessories" },
  { file: "bays-boating.svg", name: "Bays Boating" },
  { file: "bush-bath.svg", name: "Bush Bath" },
  { file: "white-pointer-boats.svg", name: "White Pointer Boats" },
  { file: "kaweka.svg", name: "Kaweka Outdoor Equipment" },
  { file: "sports-marine.svg", name: "Sports Marine" },
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
          {LOGOS.map((logo) => (
            <div
              key={logo.file}
              className="bg-sand aspect-[3/2] flex items-center justify-center rounded p-3 md:p-4 hover:bg-green-50 transition-colors"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/home/logos/${logo.file}`}
                alt={`${logo.name} logo`}
                loading="lazy"
                className="max-w-full max-h-full object-contain"
              />
            </div>
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
