import { HeroPrivada } from "@/components/oferta-privada-construye/HeroPrivada";
import { Deliverables } from "@/components/oferta-privada-construye/Deliverables";
import { Garantia } from "@/components/construye/Garantia";
import { Pricing } from "@/components/oferta-privada-construye/Pricing";

const OfertaPrivadaConstruye = () => (
  <main className="min-h-screen bg-background text-foreground">
    <HeroPrivada />
    <Deliverables />
    <Garantia />
    <Pricing />
  </main>
);

export default OfertaPrivadaConstruye;
