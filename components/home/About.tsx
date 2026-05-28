import { Eyebrow } from "../Eyebrow";

const columns = [
  {
    eyebrow: "300+ Brands",
    heading: "One place, every category.",
    body: "Boating, camping, fishing, 4×4, cycling, and everything in between — compared side by side in a single afternoon.",
  },
  {
    eyebrow: "South Island's Own",
    heading: "The industry comes to you.",
    body: "The only place the entire outdoor industry gathers in the South Island. No flight to the North Island required.",
  },
  {
    eyebrow: "Built for Everyone",
    heading: "First-timers to veterans.",
    body: "Bring the family, bring the questions, leave with what you need. Made for how Kiwis enjoy the outdoors.",
  },
];

export function About() {
  return (
    <section className="bg-paper section-content">
      <div className="container-site">
        <div className="max-w-[780px] mb-8 md:mb-10">
          <Eyebrow>About the Expo</Eyebrow>
          <h2 className="text-h1 font-extrabold text-green-500 mb-3 mt-2">
            Everything outdoor
            <br />
            Under the Canterbury sky.
          </h2>
          <p className="text-body-l text-dark-grey">
            For every Kiwi who wants to spend more time outside — whether it&apos;s
            your first kayak or your tenth fishing rod. Outdoor Expo is the
            South Island&apos;s home of the outdoor community.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {columns.map((c) => (
            <div key={c.eyebrow}>
              <Eyebrow>{c.eyebrow}</Eyebrow>
              <h4 className="text-h3 font-bold text-charcoal mb-2 mt-2">{c.heading}</h4>
              <p className="text-body text-dark-grey">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
