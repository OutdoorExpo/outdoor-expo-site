import { Eyebrow } from "../Eyebrow";

const stats = [
  { value: "300+", label: "Exhibitors" },
  { value: "13", label: "Zones" },
  { value: "3", label: "Days" },
  { value: "20K+", label: "Visitors" },
];

export function Stats() {
  return (
    <section className="bg-white section-content text-center">
      <div className="container-site">
        <Eyebrow>The Numbers</Eyebrow>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-[960px] mx-auto mt-6">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-heading font-extrabold text-[48px] md:text-[72px] text-green-500 leading-none">
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
