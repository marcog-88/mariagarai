import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Legal from "./pages/Legal.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import TermsOfService from "./pages/TermsOfService.tsx";
import CookiePolicy from "./pages/CookiePolicy.tsx";
import Construye from "./pages/Construye.tsx";
import LanzaYVende from "./pages/LanzaYVende.tsx";
import RedesQueVenden from "./pages/RedesQueVenden.tsx";
import OfertaPrivadaLanza from "./pages/OfertaPrivadaLanza.tsx";
import OfertaPrivadaConstruye from "./pages/OfertaPrivadaConstruye.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/construye" element={<Construye />} />
          <Route path="/lanza-y-vende" element={<LanzaYVende />} />
          <Route path="/redes-que-venden" element={<RedesQueVenden />} />
          <Route path="/oferta-privada-lanza" element={<OfertaPrivadaLanza />} />
          <Route path="/oferta-privada-construye" element={<OfertaPrivadaConstruye />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
