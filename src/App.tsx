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
const Exponencial = lazy(() => import("./pages/Exponencial.tsx"));
const Eventos = lazy(() => import("./pages/Eventos.tsx"));
const EventoDetalle = lazy(() => import("./pages/EventoDetalle.tsx"));
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
            <Route path="/exponencial" element={<Exponencial />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/eventos/:slug" element={<EventoDetalle />} />
            {/* Unlisted lead magnet — not in nav or sitemap */}
            <Route path="/disena-tu-oferta" element={<DisenatuOferta />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
