import { Eyebrow } from "../Eyebrow";

const stats = [
  { value: "300+", label: "Exhibitors" },
  { value: "12", label: "Zones" },
  { value: "3", label: "Days" },
];

export function Stats() {
  return (
    <section className="bg-white section-content text-center">
      <div className="container-site">
        <Eyebrow>The Numbers</Eyebrow>
        {/*
          Use flexbox (not grid) so the visible gap between items is the
          actual flex gap — not "equal cells with content centered inside."
          With grid, "300+" / "12" / "3" each sit at the centre of their
          own equal-width cell, which makes the spaces BETWEEN them look
          uneven because the items themselves have very different widths.
          With flex + gap-x, the gap between every adjacent pair is exactly
          the same regardless of item width.
        */}
        {/*
          flex-nowrap forces all 3 stats onto a single row on mobile.
          Smaller mobile font + tighter gap keeps "300+ 12 3" comfortably
          inside even the narrowest phone viewport.
        */}
        <div className="flex flex-nowrap justify-center items-start gap-x-6 md:gap-x-20 mx-auto mt-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center text-center"
            >
              <div className="font-heading font-extrabold text-[40px] md:text-[72px] text-green-500 leading-none">
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
