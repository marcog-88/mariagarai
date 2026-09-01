import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import WhatsAppBubble from "./components/WhatsAppBubble.tsx";

const NotFound = lazy(() => import("./pages/NotFound.tsx"));
const Legal = lazy(() => import("./pages/Legal.tsx"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy.tsx"));
const TermsOfService = lazy(() => import("./pages/TermsOfService.tsx"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy.tsx"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <WhatsAppBubble />
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            {/* /eventos, /eventos/:slug and /exponencial moved to
                laexponencial.com earlier (Phase 1 migration, Session 5) —
                301 redirects in vercel.json, applied BEFORE the SPA catch-all
                rewrite, so they never reach this router. */}
            {/* Retired 2026-09-01 — these pages no longer live on
                mariagarai.com:
                /construye and /disena-tu-oferta MOVED to laexponencial.com
                (as /lanzadera and /disena-tu-curso) and 301 there via
                vercel.json, which Vercel applies BEFORE the SPA catch-all
                rewrite, so they never reach this router.
                /oferta-privada-construye and /redes-que-venden were retired
                permanently — no redirect, they 404 and drop out of the index.
                All retired code is archived under _archive/retired-2026-09/. */}
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
