import { Button } from "../Button";
import { Eyebrow } from "../Eyebrow";

export function ZonesPreview() {
  return (
    <section
      className="relative text-white section-content"
      style={{
        backgroundImage:
          "linear-gradient(rgba(15,14,12,0.7), rgba(15,14,12,0.7)), url('https://images.unsplash.com/photo-1487730116645-74489c95b41b?w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container-site">
        <div className="container-prose">
          <Eyebrow variant="orange">Outdoor Expo 2026</Eyebrow>
          <h2 className="text-h1 font-extrabold text-white mb-3 mt-2">
            13 zones.
            <br />
            Bigger than ever.
          </h2>
          <p className="text-body-l opacity-92 mb-5">
            From boating to bikes, 4×4 to family camping — the full 2026 zone
            line-up is coming soon. Get a feel for the scale with last year&apos;s guide.
          </p>
          <div className="flex flex-col md:flex-row gap-2">
            <Button href="/register-interest" variant="primary">
              Register Your Interest
            </Button>
            <Button href="/downloads/2025-programme.pdf" variant="outline-white">
              View 2025 Programme (PDF)
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
