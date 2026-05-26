import Image from "next/image";

/**
 * Outdoor Expo logo — uses real PNG files in /public/
 *
 * Responsive height via clamp(): smaller on mobile so header fits
 * within the 375px viewport alongside GET TICKETS + hamburger menu.
 * - Mobile (<= 600px): ~32px height
 * - Desktop: ~40px height
 *
 * Variants:
 * - default: full colour horizontal logo (white/light backgrounds)
 * - white: all-white horizontal logo (dark backgrounds — footer, mobile menu)
 */
export function Logo({
  variant = "default",
  className = "",
}: {
  variant?: "default" | "white";
  className?: string;
}) {
  const src =
    variant === "white" ? "/logo-horizontal-white.png" : "/logo-horizontal.png";

  return (
    <Image
      src={src}
      alt="Outdoor Expo 2026"
      width={224}
      height={40}
      priority
      style={{ height: "clamp(28px, 5vw, 40px)", width: "auto" }}
      className={className}
    />
  );
}
