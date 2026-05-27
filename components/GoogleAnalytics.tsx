"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { GA_MEASUREMENT_ID } from "@/lib/analytics";

/**
 * GA4 (Google Analytics 4) for Next.js App Router.
 *
 * Why this lives in its own component:
 *   - Next.js App Router doesn't fire a full browser page load on
 *     internal navigation (e.g. clicking a <Link>), so the default
 *     gtag config never sees the new URL. We disable the inline-script
 *     auto page_view and fire it ourselves on pathname change.
 *
 * We deliberately don't read useSearchParams() here:
 *   - It would require wrapping the component in a Suspense boundary
 *   - That boundary has triggered React hydration warnings (#418/#423/
 *     #425) in this codebase
 *   - For event tracking, page_path without query-string params is the
 *     pragmatic trade-off — query strings rarely change what content
 *     the user is looking at, and we keep the search params via
 *     page_location anyway.
 *
 * Where this is wired in:
 *   app/layout.tsx — placed once in <body> so it renders on every page.
 */

function RouteChangeTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (typeof window.gtag !== "function") return;
    window.gtag("event", "page_view", {
      page_path: pathname,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname]);

  return null;
}

export function GoogleAnalytics() {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            send_page_view: false
          });
        `}
      </Script>
      <RouteChangeTracker />
    </>
  );
}
