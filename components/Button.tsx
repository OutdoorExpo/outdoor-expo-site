import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

/**
 * Button — single source of truth for all CTAs across the site.
 *
 * Variants enforce Rule #6 (Button Hierarchy):
 * - primary: orange solid — ONE per section maximum
 * - outline-charcoal: dark outline on light backgrounds
 * - outline-white: white outline on dark backgrounds
 * - outline-orange: orange outline for secondary CTAs in orange-emphasis sections
 *
 * Sizes:
 * - md: 48px height (default, touch-rec compliant)
 * - lg: 56px height (used for primary CTAs on Hero, Submit)
 *
 * External links: if href starts with http(s), automatically opens in new tab.
 */

type Variant = "primary" | "outline-charcoal" | "outline-white" | "outline-orange";
type Size = "md" | "lg";

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  href?: string;
  external?: boolean;
  children: React.ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<"button">, "className">;

const variantClasses: Record<Variant, string> = {
  primary: "bg-orange-500 text-white hover:bg-orange-400",
  "outline-charcoal":
    "bg-transparent text-charcoal border-2 border-charcoal hover:bg-charcoal hover:text-white",
  "outline-white":
    "bg-transparent text-white border-2 border-white hover:bg-white hover:text-charcoal",
  "outline-orange":
    "bg-transparent text-orange-500 border-2 border-orange-500 hover:bg-orange-500 hover:text-white",
};

const sizeClasses: Record<Size, string> = {
  md: "h-btn px-4 text-label",
  lg: "h-btn-lg px-5 text-label",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  children,
  className = "",
  ...rest
}: ButtonProps) {
  const classes = [
    "inline-flex items-center justify-center",
    "font-semibold uppercase tracking-[0.08em]",
    "rounded-full transition-all",
    "no-underline",
    variantClasses[variant],
    sizeClasses[size],
    className,
  ].join(" ");

  if (href) {
    // Auto-detect external links (http/https)
    const isExternal = external ?? /^https?:\/\//.test(href);
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
