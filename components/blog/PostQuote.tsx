/**
 * Pull quote — large italic block used inside a post for emphasis.
 */
export function PostQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="my-10 border-l-[4px] border-green-500 pl-6 pr-2 py-2 text-h3 italic text-charcoal/85 leading-snug">
      {children}
    </blockquote>
  );
}
