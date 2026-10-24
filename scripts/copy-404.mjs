// Emits dist/404.html as a copy of dist/index.html. vercel.json only rewrites
// the SPA's known routes to /index.html; any other path falls through to
// Vercel's 404 handling, which serves this file with a real HTTP 404 while the
// SPA boots and renders its NotFound page.
import { copyFileSync, existsSync } from "node:fs";

const src = "dist/index.html";
const dest = "dist/404.html";

if (!existsSync(src)) {
  console.error(`copy-404: ${src} not found (run vite build first)`);
  process.exit(1);
}
copyFileSync(src, dest);
console.log(`copy-404: ${src} -> ${dest}`);
