// Build-time prerender entry (never shipped to the browser). scripts/prerender.mjs
// renders each route in src/seo/routes.ts to HTML so the served file already
// carries the page's headings and text; src/main.tsx then hydrates it.
import { renderToPipeableStream, renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { AppRoutes } from "./App";
import { NOT_FOUND_META, ROUTE_META } from "./seo/routes";

/** Every static HTML file the build writes, with a URL that renders it. */
export const routes = [
  ...Object.entries(ROUTE_META).map(([url, m]) => ({ url, file: m.file })),
  // 404.html is served for any unknown path; any unmatched URL renders NotFound.
  { url: "/__not-found__", file: NOT_FOUND_META.file },
];

const tree = (url: string) => (
  <StaticRouter location={url}>
    <AppRoutes />
  </StaticRouter>
);

/** Streams one render to completion so every lazy route chunk on `url` loads. */
const loadLazyRoutes = (url: string) =>
  new Promise<void>((resolve, reject) => {
    const stream = renderToPipeableStream(tree(url), {
      onAllReady: () => {
        stream.abort(); // everything rendered; only the loaded chunks matter
        resolve();
      },
      onShellError: reject,
      onError: reject,
    });
  });

/**
 * Renders one URL to HTML. Two passes: the first lets the lazy route
 * components (App.tsx) resolve, the second renders synchronously with nothing
 * left to suspend, so the output is the full page.
 */
export const render = async (url: string) => {
  await loadLazyRoutes(url);
  return renderToString(tree(url));
};
