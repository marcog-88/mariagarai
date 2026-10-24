// Post-build step: fills <div id="root"> of every route HTML in dist/ (written
// by the route-html plugin in vite.config.ts) with that route's React tree,
// rendered by the SSR bundle in dist-ssr/ (src/entry-server.tsx). Crawlers and
// link previews then get the headings and text without running JS, and
// src/main.tsx hydrates the markup instead of re-rendering it.
import { readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

// Production React for the render (set before the SSR bundle loads react).
process.env.NODE_ENV = "production";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const ssrDir = path.join(root, "dist-ssr");
const { render, routes } = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href);

const EMPTY_ROOT = '<div id="root"></div>';

for (const { url, file } of routes) {
  const target = path.join(root, "dist", file);
  const html = await readFile(target, "utf8");
  if (!html.includes(EMPTY_ROOT)) throw new Error(`${file}: no empty #root to fill`);
  const app = await render(url);
  if (!app) throw new Error(`${file}: rendered nothing for ${url}`);
  await writeFile(target, html.replace(EMPTY_ROOT, `<div id="root">${app}</div>`));
  console.log(`prerendered ${url.padEnd(20)} -> dist/${file} (${(app.length / 1024).toFixed(1)} KB)`);
}

await rm(ssrDir, { recursive: true, force: true });
