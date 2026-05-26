import { Button } from "../Button";
import { Eyebrow } from "../Eyebrow";

export function DualCTA() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-[280px] md:min-h-[380px]">
      {/* LEFT — Plan Your Visit (soft CTA, NO Get Tickets per v1.8 fix) */}
      <div className="bg-green-500 text-white p-4 md:p-9 flex flex-col justify-center">
        <Eyebrow variant="white">Planning your visit?</Eyebrow>
        <h2 className="text-h2 font-bold text-white mb-3 mt-2">
          Hours, parking, food,
          <br />
          and everything in between.
        </h2>
        <p className="text-body opacity-92 mb-4 max-w-[420px]">
          The practical stuff — sorted before you arrive.
        </p>
        <div>
          <Button href="/visit" variant="outline-white">
            Plan Your Visit
          </Button>
        </div>
      </div>

      {/* RIGHT — Exhibit With Us */}
      <div className="bg-charcoal text-white p-4 md:p-9 flex flex-col justify-center">
        <Eyebrow variant="orange">Want to exhibit?</Eyebrow>
        <h2 className="text-h2 font-bold text-white mb-3 mt-2">
          Get in front of thousands
          <br />
          of excited outdoor enthusiasts.
        </h2>
        <p className="text-body opacity-92 mb-4 max-w-[420px]">
          NZ&apos;s largest outdoor expo. South Island&apos;s only.
        </p>
        <div>
          <Button href="/exhibit-with-us" variant="primary">
            Exhibit With Us
          </Button>
        </div>
      </div>
    </section>
  );
}
