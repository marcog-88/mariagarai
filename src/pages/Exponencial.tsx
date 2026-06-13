import { Nav } from "@/components/exponencial/Nav";
import { Hero } from "@/components/exponencial/Hero";
import { Problem } from "@/components/exponencial/Problem";
import { Truth } from "@/components/exponencial/Truth";
import { Testimonios } from "@/components/exponencial/Testimonios";
import { Letras } from "@/components/exponencial/Letras";
import { ParaEso } from "@/components/exponencial/ParaEso";
import { OnlyDifference } from "@/components/exponencial/OnlyDifference";
import { AntesDespues } from "@/components/exponencial/AntesDespues";
import { Comparacion } from "@/components/exponencial/Comparacion";
import { ForYou } from "@/components/exponencial/ForYou";
import { PorQueAhora } from "@/components/exponencial/PorQueAhora";
import { Comparativa } from "@/components/exponencial/Comparativa";
import { TresOpciones } from "@/components/exponencial/TresOpciones";
import { Garantia } from "@/components/exponencial/Garantia";
import { Pricing } from "@/components/exponencial/Pricing";
import { PreguntaReal } from "@/components/exponencial/PreguntaReal";
import { Bonuses } from "@/components/exponencial/Bonuses";
import { FAQ } from "@/components/exponencial/FAQ";
import { FinalCTA } from "@/components/exponencial/FinalCTA";
import { Footer } from "@/components/exponencial/Footer";
import { StickyCTA } from "@/components/exponencial/StickyCTA";

const Exponencial = () => (
  <main className="exponencial-scope min-h-screen bg-background text-foreground">
    <Nav />
    <Hero />
    <Problem />
    <Truth />
    <Letras />
    <ParaEso />
    <Testimonios />
    <OnlyDifference />
    <AntesDespues />
    <Comparacion />
    <ForYou />
    <PorQueAhora />
    <Comparativa />
    <TresOpciones />
    <Garantia />
    <Pricing />
    <PreguntaReal />
    <Bonuses />
    <FAQ />
    <FinalCTA />
    <Footer />
    <StickyCTA />
  </main>
);

export default Exponencial;
