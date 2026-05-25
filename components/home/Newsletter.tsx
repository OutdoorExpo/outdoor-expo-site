"use client";

import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    // TODO: wire up to HubSpot / Mailchimp endpoint
    await new Promise((r) => setTimeout(r, 600));
    setStatus("success");
    setEmail("");
  }

  return (
    <section className="bg-charcoal text-white section-conversion text-center">
      <div className="container-site">
        <h2 className="text-h1 font-extrabold text-white mb-2">Stay in the loop.</h2>
        <p className="text-body-l opacity-85 mb-5">
          Early-bird ticket alerts, zone announcements, and exhibitor news —
          direct to your inbox.
        </p>
        {status === "success" ? (
          <p className="text-orange-500 text-body-l">
            Thanks — we&apos;ll be in touch soon.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row max-w-[520px] mx-auto gap-2 md:gap-0"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="flex-1 h-input px-3 text-body bg-white text-charcoal rounded-sm md:rounded-r-none"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="h-input px-4 bg-orange-500 text-white text-label font-bold uppercase tracking-[0.08em] rounded-sm md:rounded-l-none hover:bg-orange-400 disabled:opacity-50"
            >
              {status === "loading" ? "Sending..." : "Subscribe"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
