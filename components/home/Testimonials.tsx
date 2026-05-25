import { Eyebrow } from "../Eyebrow";

const quotes = [
  {
    text: "Came for the boats, left with a tent and a fishing rod we'd been talking about for two years.",
    name: "The Patersons",
    location: "Rangiora",
    avatar: "P",
  },
  {
    text: "Best place to compare gear without the sales pressure. Talked to the people who actually make the stuff.",
    name: "Marcus W.",
    location: "Christchurch",
    avatar: "M",
  },
  {
    text: "The kids loved the demos. We loved the variety. Already planning next year.",
    name: "Kate & Tom",
    location: "Timaru",
    avatar: "K",
  },
];

export function Testimonials() {
  return (
    <section className="bg-green-500 text-white section-content">
      <div className="container-site">
        <Eyebrow variant="orange">From 2025 visitors</Eyebrow>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {quotes.map((q) => (
            <div key={q.name} className="flex flex-col">
              <p className="font-heading text-h4 font-semibold leading-snug mb-3">
                &ldquo;{q.text}&rdquo;
              </p>
              <div className="flex items-center gap-2 mt-auto">
                <div className="w-touch-rec h-touch-rec rounded-full bg-green-200 flex items-center justify-center font-heading font-bold text-green-700 text-h4">
                  {q.avatar}
                </div>
                <div>
                  <div className="text-body-s font-semibold">{q.name}</div>
                  <div className="text-body-s opacity-80">{q.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
