/**
 * Eyebrow — small uppercase label that sits above a heading.
 * Per Rule #4: must have 16px gap to the heading below.
 * Default color: orange-500. On dark backgrounds, use variant="white".
 */
export function Eyebrow({
  children,
  variant = "orange",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "orange" | "white";
  className?: string;
}) {
  const colorClass =
    variant === "white" ? "text-white opacity-90" : "text-orange-500";
  return (
    <span
      className={`inline-block text-eyebrow uppercase tracking-[0.08em] font-semibold mb-2 ${colorClass} ${className}`}
    >
      {children}
    </span>
  );
}
