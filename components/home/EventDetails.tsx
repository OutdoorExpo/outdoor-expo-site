import {
  EVENT_DATES,
  EVENT_VENUE_SHORT,
  EVENT_LOCATION,
  EVENT_HOURS,
} from "@/lib/constants";

/**
 * Event Details Strip — DATES / VENUE / HOURS
 *
 * Compact data section (Rule #2: 40-64 px desktop, 32-48 px mobile)
 * Center alignment (Rule #5: data sections center)
 * Background: Paper (Rule #7 alternation between Orange Countdown and White Stats)
 *
 * Eyebrow labels in orange (Rule #4 consistent eyebrow treatment).
 * Values in Sora bold for prominence.
 */
export function EventDetails() {
  const items = [
    {
      label: "Dates",
      value: EVENT_DATES,
      sub: "Fri · Sat · Sun",
    },
    {
      label: "Venue",
      value: (
        <>
          {EVENT_VENUE_SHORT},<br />
          {EVENT_LOCATION}
        </>
      ),
      sub: null,
    },
    {
      label: "Hours",
      value: EVENT_HOURS,
      sub: "Last entry 4pm",
    },
  ];

  return (
    <section className="bg-paper section-compact border-b border-light-grey">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
          {items.map((item, idx) => (
            <div
              key={item.label}
              className={`text-center ${
                idx > 0 ? "md:border-l border-light-grey md:pl-3" : ""
              }`}
            >
              <div className="text-eyebrow uppercase tracking-[0.12em] font-semibold text-orange-500 mb-2">
                {item.label}
              </div>
              <div className="font-heading text-h3 font-bold text-charcoal leading-tight">
                {item.value}
              </div>
              {item.sub && (
                <div className="text-body-s text-mid-grey mt-1">{item.sub}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
