import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index.tsx";
import WhatsAppBubble from "./components/WhatsAppBubble.tsx";
import { RouteMeta } from "./seo/RouteMeta";

const NotFound = lazy(() => import("./pages/NotFound.tsx"));
const Legal = lazy(() => import("./pages/Legal.tsx"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy.tsx"));
const TermsOfService = lazy(() => import("./pages/TermsOfService.tsx"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy.tsx"));
const Links = lazy(() => import("./pages/Links.tsx"));

// Per-route <title>/description/canonical/robots live in src/seo/routes.ts.
// AppRoutes is router-agnostic so the build can prerender it with a
// StaticRouter (src/entry-server.tsx); the browser wraps it in BrowserRouter.
export const AppRoutes = () => (
  <>
    <RouteMeta />
    <WhatsAppBubble />
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        {/* Instagram bio link page (Linktree-style), noindex. */}
        <Route path="/links" element={<Links />} />
        {/* Moved to laexponencial.com: /eventos, /eventos/:slug, /exponencial,
            /construye (→ home) and /disena-tu-oferta (→ /disena-tu-programa)
            301 in vercel.json before anything is served, so they never
            reach this router. /oferta-privada-construye and /redes-que-venden
            were retired 2026-09 with no redirect: like every unknown path
            they get 404.html (HTTP 404 + noindex) and render NotFound.
            Retired code is archived under _archive/retired-2026-09/. */}
        {/* A new route also needs an entry in src/seo/routes.ts (its static
            HTML file + meta) or Vercel will answer it with a 404. */}
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </>
);

const App = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);

export default App;
