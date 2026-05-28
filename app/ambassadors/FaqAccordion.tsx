"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "Is there a cash payment?",
    a: "No — this is an in-kind programme. We offer real promotional value: a profile page on outdoorexpo.co.nz, newsletter feature, social media posts, a Demo Tent session, and an Exhibitor Function invite. If cash is a firm requirement, this programme likely isn't the right fit — and that's completely okay.",
  },
  {
    q: "What's the Demo Tent session?",
    a: "A 30-min stage slot in the Expo's busiest zone. Teach, demonstrate, and (if relevant) sell direct to a live audience. We supply the stage — you bring the content.",
  },
  {
    q: "What is the Exhibitor Function?",
    a: "A pre-event networking dinner the night before the Expo (Thu 1 Oct, 4–8pm) where 200+ exhibitors and sponsors gather. A great opportunity to meet brands face to face.",
  },
  {
    q: "How much content is required?",
    a: "Minimum 3 pieces total: 2 pre-event posts/Stories + 1 post at or after the event. We'd love more organic content, but three is genuinely all we ask.",
  },
  {
    q: "When do I need to confirm by?",
    a: "We're building the ambassador roster now (April–May 2026). Earlier confirmations get more website and newsletter lead time — but reach out any time before July.",
  },
  {
    q: "Any other questions?",
    a: "Reply to any of our emails, or DM us @outdoorexponz on Instagram. We're a small team — you'll get a real, timely response.",
  },
];

export function FaqAccordion() {
  return (
    <div className="divide-y divide-light-grey">
      {FAQS.map((faq) => (
        <FaqItem key={faq.q} q={faq.q} a={faq.a} />
      ))}
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-4">
      <button
        className="w-full flex items-center justify-between gap-4 text-left group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-body font-semibold text-charcoal group-hover:text-green-500 transition-colors">
          {q}
        </span>
        <span
          className={`flex-shrink-0 w-6 h-6 rounded-full border border-light-grey flex items-center justify-center text-charcoal transition-transform ${
            open ? "rotate-45" : ""
          }`}
        >
          <svg
            viewBox="0 0 12 12"
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="6" y1="1" x2="6" y2="11" />
            <line x1="1" y1="6" x2="11" y2="6" />
          </svg>
        </span>
      </button>
      {open && (
        <p className="text-body text-dark-grey mt-3 leading-relaxed">{a}</p>
      )}
    </div>
  );
}
