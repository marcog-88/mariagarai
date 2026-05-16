import { Nav } from "@/components/lanza/Nav";
import { Hero } from "@/components/lanza/Hero";
import { Problem } from "@/components/lanza/Problem";
import { Truth } from "@/components/lanza/Truth";
import { Testimonios } from "@/components/lanza/Testimonios";

import { ParaEso } from "@/components/lanza/ParaEso";
import { OnlyDifference } from "@/components/lanza/OnlyDifference";
import { Deliverables } from "@/components/lanza/Deliverables";
import { ForYou } from "@/components/lanza/ForYou";
import { PorQueAhora } from "@/components/lanza/PorQueAhora";
import { Comparativa } from "@/components/lanza/Comparativa";
import { TresOpciones } from "@/components/lanza/TresOpciones";
import { Garantia } from "@/components/lanza/Garantia";
import { Pricing } from "@/components/lanza/Pricing";
import { PreguntaReal } from "@/components/lanza/PreguntaReal";
import { Bonuses } from "@/components/lanza/Bonuses";
import { AntesDespuesProof } from "@/components/lanza/AntesDespuesProof";
import { AntesDespues } from "@/components/lanza/AntesDespues";
import { FAQ } from "@/components/lanza/FAQ";
import { FinalCTA } from "@/components/lanza/FinalCTA";
import { Footer } from "@/components/lanza/Footer";

const LanzaYVende = () => (
  <main className="lanza-scope min-h-screen bg-background text-foreground">
    <Nav />
    <Hero />
    <Problem />
    <Truth />
    <Testimonios />
    
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

export default LanzaYVende;
