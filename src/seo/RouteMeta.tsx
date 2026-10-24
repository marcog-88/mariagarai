import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SITE, metaForPath } from "./routes";

const setMeta = (attr: "name" | "property", key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = content;
};

/**
 * Keeps <head> in sync with the current route on client-side navigation. The
 * first paint already has the right tags: the build writes one HTML file per
 * route from the same table (see vite.config.ts).
 */
export const RouteMeta = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = metaForPath(pathname);
    document.title = meta.title;
    setMeta("name", "description", meta.description);
    const social = meta.socialTitle ?? meta.title;
    setMeta("property", "og:title", social);
    setMeta("property", "og:description", meta.description);
    setMeta("name", "twitter:title", social);
    setMeta("name", "twitter:description", meta.description);

    const canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const ogUrl = document.head.querySelector<HTMLMetaElement>('meta[property="og:url"]');
    if (meta.path && !meta.noindex) {
      const url = SITE + meta.path;
      if (canonical) canonical.href = url;
      else {
        const link = document.createElement("link");
        link.rel = "canonical";
        link.href = url;
        document.head.appendChild(link);
      }
      setMeta("property", "og:url", url);
    } else {
      canonical?.remove();
      ogUrl?.remove();
    }

    const robots = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (meta.noindex) setMeta("name", "robots", "noindex");
    else robots?.remove();
  }, [pathname]);

  return null;
};
