interface PostIntroProps {
  /** Small uppercase tag above the hook. */
  tag?: string;
  /** Italicised hook sentence — sets the scene. */
  children: React.ReactNode;
}

/**
 * Opening block of a blog post — eyebrow tag + italic hook line.
 * Sits at the top of the article body.
 */
export function PostIntro({ tag, children }: PostIntroProps) {
  return (
    <div className="mb-6">
      {tag && (
        <div className="text-eyebrow uppercase tracking-[0.1em] font-bold text-green-500 mb-3">
          {tag}
        </div>
      )}
      <p className="text-h3 font-bold italic text-charcoal leading-snug">
        {children}
      </p>
    </div>
  );
}
