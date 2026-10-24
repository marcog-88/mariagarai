import { defineConfig, loadEnv, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { NOT_FOUND_META, ROUTE_META, SITE, type PageMeta } from "./src/seo/routes";
import { HOME_JSON_LD, jsonLdScript } from "./src/seo/structuredData";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/**
 * Search Console / Bing Webmaster ownership tags, from build-time env vars
 * (Vercel project env or .env.local). Unset = no tag.
 */
const verificationTags = (env: Record<string, string>) =>
  [
    ["google-site-verification", env.VITE_GOOGLE_SITE_VERIFICATION],
    ["msvalidate.01", env.VITE_BING_SITE_VERIFICATION],
  ]
    .filter(([, v]) => v && v.trim())
    .map(([name, v]) => `<meta name="${name}" content="${esc(v.trim())}" />`);

/** Rewrites the <head> tags of the built index.html for one route. */
const withMeta = (html: string, m: PageMeta, headExtra: string[]) => {
  const url = m.path && !m.noindex ? SITE + m.path : null;
  const social = m.socialTitle ?? m.title;
  let out = html
    .replace(/<title>[^<]*<\/title>/, `<title>${esc(m.title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${esc(m.description)}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${esc(social)}$2`)
    .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${esc(social)}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${esc(m.description)}$2`)
    .replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${esc(m.description)}$2`);
  out = url
    ? out
        .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
        .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
    : out.replace(/\s*<link rel="canonical"[^>]*>/, "").replace(/\s*<meta property="og:url"[^>]*>/, "");
  if (m.noindex) out = out.replace("</title>", `</title>\n    <meta name="robots" content="noindex" />`);
  // Verification tags on every page; the JSON-LD (Person, WebSite) on the home only.
  const extra = [...headExtra, ...(m.file === "index.html" ? [jsonLdScript(HOME_JSON_LD)] : [])];
  if (extra.length) out = out.replace("</head>", `  ${extra.join("\n    ")}\n  </head>`);
  return out;
};

/**
 * One static HTML file per route (legal.html, links.html, …) plus 404.html, so
 * crawlers and link previews get each page's own title/description/canonical
 * without running JS, and unknown paths return a real HTTP 404 (Vercel serves
 * 404.html; cleanUrls maps /legal to legal.html). Each file boots the same SPA.
 */
const routeHtml = (env: Record<string, string>): Plugin => ({
  name: "route-html",
  apply: "build",
  enforce: "post",
  generateBundle(_, bundle) {
    const index = bundle["index.html"];
    if (!index || index.type !== "asset") return;
    const html = String(index.source);
    const headExtra = verificationTags(env);
    for (const m of [...Object.values(ROUTE_META), NOT_FOUND_META]) {
      const source = withMeta(html, m, headExtra);
      if (m.file === "index.html") index.source = source;
      else this.emitFile({ type: "asset", fileName: m.file, source });
    }
    this.emitFile({ type: "asset", fileName: "sitemap.xml", source: sitemap() });
  },
});

/** sitemap.xml from the indexable routes, lastmod = the build date. */
const sitemap = () => {
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = Object.values(ROUTE_META)
    .filter((m) => m.path && !m.noindex)
    .map((m) => `  <url><loc>${SITE}${m.path}</loc><lastmod>${lastmod}</lastmod></url>`);
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`;
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: Number(process.env.PORT) || 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), routeHtml(loadEnv(mode, process.cwd(), "VITE_"))],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
  },
  build: {
    rollupOptions: {
      output: {
        // Only React gets its own long-lived chunk. (Listing libraries here
        // forces them into the bundle even when no page imports them.)
        manualChunks: {
          "vendor-react": ["react", "react-dom", "react-router-dom"],
        },
      },
    },
  },
}));
