import { HeroPrivada } from "@/components/oferta-privada-lanza/HeroPrivada";
import { Deliverables } from "@/components/oferta-privada-lanza/Deliverables";
import { Garantia } from "@/components/lanza/Garantia";
import { Pricing } from "@/components/oferta-privada-lanza/Pricing";

const OfertaPrivadaLanza = () => (
  <>
    <style>{`
      .oferta-privada-lanza-scope .btn-mint-lg { background:#ff4295 !important; color:#ffffff !important; }
      .oferta-privada-lanza-scope .btn-mint-lg:hover { background:#e6397f !important; }
      .oferta-privada-lanza-scope .text-mint { color:#ff4295 !important; }
      .oferta-privada-lanza-scope .bg-mint { background-color:#ff4295 !important; }
      .oferta-privada-lanza-scope .border-mint { border-color:#ff4295 !important; }
    `}</style>
    <main className="oferta-privada-lanza-scope lanza-scope min-h-screen bg-background text-foreground">
      <HeroPrivada />
      <Deliverables />
      <Garantia />
      <Pricing />
    </main>
  </>
);

export default OfertaPrivadaLanza;
