import Image from "next/image";

/**
 * Outdoor Expo logo — uses real PNG files in /public/
 *
 * Variants:
 * - default: full colour horizontal logo (for white/light backgrounds)
 * - white: all-white horizontal logo (for dark backgrounds like footer, mobile menu)
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
      width={2157}
      height={386}
      priority
      className={`h-9 md:h-10 w-auto ${className}`}
    />
  );
}
