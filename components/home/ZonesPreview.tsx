import { Button } from "../Button";
import { Eyebrow } from "../Eyebrow";

export function ZonesPreview() {
  return (
    <section
      className="relative text-white section-content"
      style={{
        backgroundImage:
          "linear-gradient(rgba(15,14,12,0.55), rgba(15,14,12,0.65)), url('/home/zones-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container-site">
        <div className="container-prose">
          <Eyebrow variant="orange">Outdoor Expo 2026</Eyebrow>
          <h2 className="text-h1 font-extrabold text-white mb-3 mt-2">
            12 Zones.
            <br />
            Bigger than ever.
          </h2>
          <p className="text-body-l opacity-92 mb-5">
            From boating to bikes, 4×4 to family camping — the full 2026 zone
            line-up is coming soon.
          </p>
          <div className="flex flex-col md:flex-row gap-2">
            <Button href="/tickets" variant="primary">
              Get Tickets
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
