import { Nav } from "@/components/redes/Nav";
import { Hero } from "@/components/redes/Hero";
import { Problem } from "@/components/redes/Problem";
import { Truth } from "@/components/redes/Truth";
import { Testimonios } from "@/components/redes/Testimonios";
import { Letras } from "@/components/redes/Letras";
import { ParaEso } from "@/components/redes/ParaEso";
import { OnlyDifference } from "@/components/redes/OnlyDifference";
import { Deliverables } from "@/components/redes/Deliverables";
import { AntesDespues } from "@/components/redes/AntesDespues";
import { ForYou } from "@/components/redes/ForYou";
import { PorQueAhora } from "@/components/redes/PorQueAhora";
import { Comparativa } from "@/components/redes/Comparativa";
import { TresOpciones } from "@/components/redes/TresOpciones";
import { Garantia } from "@/components/redes/Garantia";
import { Pricing } from "@/components/redes/Pricing";
import { PreguntaReal } from "@/components/redes/PreguntaReal";
import { Bonuses } from "@/components/redes/Bonuses";
import { AntesDespuesProof } from "@/components/redes/AntesDespuesProof";
import { FAQ } from "@/components/redes/FAQ";
import { FinalCTA } from "@/components/redes/FinalCTA";
import { Footer } from "@/components/redes/Footer";

// Page-scoped color tokens. Remap --mint → orange #e88f00 within .redes-scope only.
// CTA buttons (.btn-mint-lg) are remapped to near-black bg + white text.
// No edits to src/index.css, tailwind.config.ts, or any other page.
const scopedStyles = `
.redes-scope {
  --mint: 36 100% 46%;
  --mint-foreground: 0 0% 100%;
  --accent-glow: 36 100% 46%;
}
.redes-scope .btn-mint-lg,
.redes-scope .btn-mint {
  background-color: #e88f00;
  color: #ffffff;
}
.redes-scope .btn-mint-lg:hover,
.redes-scope .btn-mint:hover {
  background-color: #d18000;
  box-shadow: 0 14px 36px -12px rgb(232 143 0 / 0.55);
}
`;

const RedesQueVenden = () => (
  <main className="redes-scope min-h-screen bg-background text-foreground">
    <style>{scopedStyles}</style>
    <Nav />
    <Hero />
    <Problem />
    <Truth />
    <Testimonios />
    <Letras />
    <ParaEso />
    <OnlyDifference />
    <Deliverables />
    <AntesDespues />
    <ForYou />
    <PorQueAhora />
    <Comparativa />
    <TresOpciones />
    <Garantia />
    <Pricing />
    <PreguntaReal />
    <Bonuses />
    <AntesDespuesProof />
    <FAQ />
    <FinalCTA />
    <Footer />
  </main>
);

export default RedesQueVenden;
