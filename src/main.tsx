import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Production HTML is prerendered at build time (scripts/prerender.mjs), so
// hydrate it; the dev server serves an empty #root, so render from scratch.
const root = document.getElementById("root")!;
if (root.hasChildNodes()) hydrateRoot(root, <App />);
else createRoot(root).render(<App />);
