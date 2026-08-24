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
const Construye = lazy(() => import("./pages/Construye.tsx"));
const RedesQueVenden = lazy(() => import("./pages/RedesQueVenden.tsx"));
const OfertaPrivadaConstruye = lazy(() => import("./pages/OfertaPrivadaConstruye.tsx"));
const DisenatuOferta = lazy(() => import("./pages/DisenatuOferta.tsx"));

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
            <Route path="/construye" element={<Construye />} />
            <Route path="/redes-que-venden" element={<RedesQueVenden />} />
            <Route path="/oferta-privada-construye" element={<OfertaPrivadaConstruye />} />
            <Route path="/disena-tu-oferta" element={<DisenatuOferta />} />
            {/* /eventos and /eventos/:slug moved to laexponencial.com (Phase 1
                migration, Session 5). They are 301 redirects in vercel.json —
                which Vercel applies BEFORE the SPA catch-all rewrite, so they
                never reach this router.
                /exponencial also 301s to laexponencial.com now (same reason) —
                that page and its components were retired here, laexponencial.com
                is the only live sales page.
                /disena-tu-oferta was restored as its own page (not a redirect):
                it now lives independently here AND at laexponencial.com/disena-tu-curso,
                intentionally duplicated so each can be edited separately. */}
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
