/**
 * Wrapper for the article body. Applies editorial typography
 * (generous spacing, readable line-length) to all child elements
 * via Tailwind arbitrary variants, so individual post pages can
 * just write semantic JSX (h2, p, ul, blockquote) and look right.
 */
export function PostBody({ children }: { children: React.ReactNode }) {
  return (
    <article
      className={[
        "max-w-[760px] mx-auto px-4 md:px-6 py-10 md:py-14",
        // Paragraphs
        "[&_p]:text-body [&_p]:text-charcoal [&_p]:leading-[1.75] [&_p]:mb-5",
        // Section headings (h2)
        "[&_h2]:text-h2 [&_h2]:font-extrabold [&_h2]:text-charcoal [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:pt-3 [&_h2]:border-t-[3px] [&_h2]:border-green-500 [&_h2]:inline-block",
        // Subheadings (h3)
        "[&_h3]:text-h3 [&_h3]:font-bold [&_h3]:text-charcoal [&_h3]:mt-8 [&_h3]:mb-3",
        // Bold inline
        "[&_strong]:text-charcoal [&_strong]:font-bold",
        // Links
        "[&_a]:text-green-500 [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-green-600",
        // Lists
        "[&_ul]:mb-5 [&_ul]:pl-5 [&_li]:text-body [&_li]:text-charcoal [&_li]:leading-[1.7] [&_li]:mb-2",
        // Em / italics
        "[&_em]:italic",
      ].join(" ")}
    >
      {children}
    </article>
  );
}
