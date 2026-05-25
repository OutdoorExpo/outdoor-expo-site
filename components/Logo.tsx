import Image from "next/image";

/**
 * Outdoor Expo logo — uses real PNG files in /public/
 *
 * Fixed display height with auto width to preserve 5.6:1 aspect ratio
 * regardless of container width. The `style` prop guarantees the constraint
 * even when Tailwind classes don't apply (e.g. our custom 8pt spacing scale
 * doesn't include h-9, h-11, etc.).
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
      style={{ height: "40px", width: "auto" }}
      className={className}
    />
  );
}
