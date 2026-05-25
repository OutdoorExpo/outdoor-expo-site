import { ReactNode } from "react";
import { Eyebrow } from "@/components/Eyebrow";

type Props = {
  title: string;
  lastUpdated?: string;
  children: ReactNode;
};

/**
 * Shared layout for legal pages (Privacy, Terms, Exhibitor T&Cs).
 * Provides consistent typography, max-width prose container, and styled
 * h2/h3/p/ul/strong elements via Tailwind utility selectors.
 */
export function LegalLayout({ title, lastUpdated, children }: Props) {
  return (
    <article className="bg-white section-content">
      <div className="container-site">
        <div className="container-prose mx-auto">
          <Eyebrow>Legal</Eyebrow>
          <h1 className="text-h1 font-extrabold text-charcoal mb-2 mt-2">
            {title}
          </h1>
          {lastUpdated && (
            <p className="text-body-s text-mid-grey mb-5">
              Last updated: {lastUpdated}
            </p>
          )}

          <div
            className="
              [&_h2]:text-h3 [&_h2]:font-bold [&_h2]:text-charcoal
              [&_h2]:mt-6 [&_h2]:mb-2 [&_h2]:leading-tight
              [&_h3]:text-body-l [&_h3]:font-bold [&_h3]:text-charcoal
              [&_h3]:mt-4 [&_h3]:mb-2
              [&_p]:text-body [&_p]:text-dark-grey [&_p]:leading-[1.7] [&_p]:mb-3
              [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-3
              [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:mb-3
              [&_li]:text-body [&_li]:text-dark-grey [&_li]:leading-[1.6] [&_li]:mb-1
              [&_strong]:text-charcoal [&_strong]:font-semibold
              [&_a]:text-orange-500 [&_a]:underline hover:[&_a]:text-orange-700
            "
          >
            {children}
          </div>
        </div>
      </div>
    </article>
  );
}
