import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { NOT_FOUND_META, ROUTE_META, SITE, type PageMeta } from "./src/seo/routes";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Rewrites the <head> tags of the built index.html for one route. */
const withMeta = (html: string, m: PageMeta) => {
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
  return out;
};

/**
 * One static HTML file per route (legal.html, links.html, …) plus 404.html, so
 * crawlers and link previews get each page's own title/description/canonical
 * without running JS, and unknown paths return a real HTTP 404 (Vercel serves
 * 404.html; cleanUrls maps /legal to legal.html). Each file boots the same SPA.
 */
const routeHtml = (): Plugin => ({
  name: "route-html",
  apply: "build",
  enforce: "post",
  generateBundle(_, bundle) {
    const index = bundle["index.html"];
    if (!index || index.type !== "asset") return;
    const html = String(index.source);
    for (const m of [...Object.values(ROUTE_META), NOT_FOUND_META]) {
      const source = withMeta(html, m);
      if (m.file === "index.html") index.source = source;
      else this.emitFile({ type: "asset", fileName: m.file, source });
    }
  },
});

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    host: "::",
    port: Number(process.env.PORT) || 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), routeHtml()],
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
