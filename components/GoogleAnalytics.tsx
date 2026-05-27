"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import { GA_MEASUREMENT_ID } from "@/lib/analytics";

/**
 * GA4 (Google Analytics 4) for Next.js App Router.
 *
 * Why this lives in its own component:
 *   - Next.js App Router doesn't fire a full browser page load on
 *     internal navigation (e.g. clicking a <Link>), so the default
 *     gtag config never sees the new URL. We disable auto page_view
 *     in the config and fire it ourselves in RouteChangeTracker.
 *   - useSearchParams() requires a Suspense boundary in App Router,
 *     so the route tracker is wrapped accordingly.
 *
 * Where this is wired in:
 *   app/layout.tsx — placed once in <body> so it renders on every page.
 */

function RouteChangeTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (typeof window.gtag !== "function") return;
    const search = searchParams?.toString() || "";
    const url = pathname + (search ? `?${search}` : "");
    window.gtag("event", "page_view", {
      page_path: url,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname, searchParams]);

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
      <Suspense fallback={null}>
        <RouteChangeTracker />
      </Suspense>
    </>
  );
}
