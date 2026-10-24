import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ORIGIN = "https://www.mariagarai.com";

/**
 * Per-route head tags for the SPA. index.html carries the home's tags; every
 * other route used to inherit them, so /legal & co. told crawlers their
 * canonical URL was the home. This points canonical/og:url at the route
 * itself (or drops canonical for pages that shouldn't be indexed), sets the
 * title and, optionally, the description, and restores everything on leave.
 */
export function usePageMeta({
  title,
  description,
  noindex = false,
}: {
  title: string;
  description?: string;
  noindex?: boolean;
}) {
  const { pathname } = useLocation();

  useEffect(() => {
    const head = document.head;
    const prevTitle = document.title;
    document.title = title;

    const canonical = head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const prevCanonical = canonical?.getAttribute("href") ?? null;
    const ogUrl = head.querySelector<HTMLMetaElement>('meta[property="og:url"]');
    const prevOgUrl = ogUrl?.content ?? null;
    const desc = head.querySelector<HTMLMetaElement>('meta[name="description"]');
    const prevDesc = desc?.content ?? null;

    const url = ORIGIN + (pathname === "/" ? "/" : pathname.replace(/\/$/, ""));
    if (canonical) {
      if (noindex) canonical.remove();
      else canonical.href = url;
    }
    if (ogUrl) ogUrl.content = url;
    if (desc && description) desc.content = description;

    let robots: HTMLMetaElement | null = null;
    if (noindex) {
      robots = document.createElement("meta");
      robots.name = "robots";
      robots.content = "noindex";
      head.appendChild(robots);
    }

    return () => {
      document.title = prevTitle;
      if (canonical && prevCanonical !== null) {
        canonical.href = prevCanonical;
        if (!canonical.isConnected) head.appendChild(canonical);
      }
      if (ogUrl && prevOgUrl !== null) ogUrl.content = prevOgUrl;
      if (desc && prevDesc !== null) desc.content = prevDesc;
      robots?.remove();
    };
  }, [title, description, noindex, pathname]);
}
