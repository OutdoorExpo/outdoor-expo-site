/**
 * Outdoor Expo logo — refreshed colour version per Phase 1 lock.
 * Mountain + waves circle + wordmark.
 *
 * Pass `variant="white"` for use on dark backgrounds (footer).
 */
export function Logo({ variant = "default" }: { variant?: "default" | "white" }) {
  const isWhite = variant === "white";
  const ringColor = isWhite ? "border-white" : "border-green-500";
  const mountainFill = isWhite ? "#FFFFFF" : "#1E783A";
  const textColor = isWhite ? "text-white" : "text-green-500";

  return (
    <div className="flex items-center gap-2">
      <div
        className={`w-touch-rec h-touch-rec rounded-full border-2 ${ringColor} flex items-center justify-center`}
      >
        <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none">
          <path d="M4 22 L11 12 L16 18 L22 8 L28 22 Z" fill={mountainFill} />
          <path d="M2 24 Q8 22 16 24 T30 24" stroke="#F97316" strokeWidth="2" fill="none" />
          <path d="M2 28 Q8 26 16 28 T30 28" stroke="#0EA5E9" strokeWidth="2" fill="none" />
        </svg>
      </div>
      <span className={`font-heading font-extrabold text-[18px] tracking-wide ${textColor}`}>
        OUTDOOR EXPO
      </span>
    </div>
  );
}
