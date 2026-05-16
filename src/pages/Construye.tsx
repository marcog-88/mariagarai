import { Nav } from "@/components/construye/Nav";
import { Hero } from "@/components/construye/Hero";
import { Problem } from "@/components/construye/Problem";
import { Truth } from "@/components/construye/Truth";
import { Letras } from "@/components/construye/Letras";
import { ParaEso } from "@/components/construye/ParaEso";
import { OnlyDifference } from "@/components/construye/OnlyDifference";
import { Deliverables } from "@/components/construye/Deliverables";
import { AntesDespues } from "@/components/construye/AntesDespues";
import { ForYou } from "@/components/construye/ForYou";
import { Testimonios } from "@/components/construye/Testimonios";
import { PorQueAhora } from "@/components/construye/PorQueAhora";
import { Comparativa } from "@/components/construye/Comparativa";
import { TresOpciones } from "@/components/construye/TresOpciones";
import { PreguntaReal } from "@/components/construye/PreguntaReal";
import { Pricing } from "@/components/construye/Pricing";
import { Garantia } from "@/components/construye/Garantia";
import { Bonuses } from "@/components/construye/Bonuses";
import { AntesDespuesProof } from "@/components/construye/AntesDespuesProof";
import { FAQ } from "@/components/construye/FAQ";
import { FinalCTA } from "@/components/construye/FinalCTA";
import { Footer } from "@/components/construye/Footer";

const Construye = () => (
  <main className="min-h-screen bg-background text-foreground">
    <Nav />
    <Hero />
    <Problem />
    <Truth />
    <Testimonios />
    <hr className="border-t border-[#e5e7eb] my-0 mx-0 w-full" />
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

export default Construye;
