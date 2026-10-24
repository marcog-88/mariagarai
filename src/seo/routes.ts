// Per-route <head> metadata, single source for both:
//  - the build (vite.config.ts writes one static HTML file per route, so
//    crawlers and link previews see the right title/canonical without JS), and
//  - the app (RouteMeta keeps <head> in sync on client-side navigation).
// Plain data only: vite.config.ts imports this file directly.

export const SITE = "https://www.mariagarai.com";

export interface PageMeta {
  title: string;
  /** og:title / twitter:title when it should differ from <title>. */
  socialTitle?: string;
  description: string;
  /** Canonical path; omitted for pages that must not be indexed. */
  path?: string;
  noindex?: boolean;
  /** Static HTML file the build writes for this route (cleanUrls serves it). */
  file: string;
}

// María's hero lead, trimmed (clauses cut, nothing rewritten) to stay under
// ~155 characters so search results don't truncate it.
export const HOME_DESCRIPTION =
  "Ayudo a profesionales con experiencia a construir un negocio altamente rentable alrededor de un programa propio, que les posicione como referentes.";

export const ROUTE_META: Record<string, PageMeta> = {
  "/": {
    title: "María Garai | Exponencial",
    socialTitle: "María Garai · Fundadora de Exponencial y consultora de negocio",
    description: HOME_DESCRIPTION,
    path: "/",
    file: "index.html",
  },
  "/legal": {
    title: "Aviso legal · María Garai",
    description: "Aviso legal de mariagarai.com: datos de la titular, condiciones de uso, propiedad intelectual y legislación aplicable.",
    path: "/legal",
    file: "legal.html",
  },
  "/privacy-policy": {
    title: "Política de privacidad · María Garai",
    description: "Cómo se tratan tus datos personales en mariagarai.com: responsable, finalidades, base legal, conservación y tus derechos.",
    path: "/privacy-policy",
    file: "privacy-policy.html",
  },
  "/terms-of-service": {
    title: "Términos y condiciones · María Garai",
    description: "Términos y condiciones de uso de mariagarai.com: servicios, obligaciones, propiedad intelectual y responsabilidad.",
    path: "/terms-of-service",
    file: "terms-of-service.html",
  },
  "/cookie-policy": {
    title: "Política de cookies · María Garai",
    description: "Qué cookies usa mariagarai.com, para qué sirven y cómo gestionarlas desde tu navegador.",
    path: "/cookie-policy",
    file: "cookie-policy.html",
  },
  // Instagram bio page: shareable, but kept out of the index so it doesn't
  // compete with the home.
  "/links": {
    title: "María Garai · Links",
    description:
      "Para quienes se reinventan de profesionales a dueños de negocio. Estrategia y mindset para vivir muy bien de tu conocimiento.",
    path: "/links",
    noindex: true,
    file: "links.html",
  },
};

/** Served (with HTTP 404) for every path vercel.json doesn't otherwise match. */
export const NOT_FOUND_META: PageMeta = {
  title: "Página no encontrada · María Garai",
  description: HOME_DESCRIPTION,
  noindex: true,
  file: "404.html",
};

export const metaForPath = (pathname: string): PageMeta => {
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  return ROUTE_META[clean] ?? NOT_FOUND_META;
};
