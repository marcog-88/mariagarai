import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Thoughts } from "@/components/landing/Thoughts";
import { Exponencial } from "@/components/landing/Exponencial";
import { LeadMagnet } from "@/components/landing/LeadMagnet";
import { Newsletter } from "@/components/landing/Newsletter";
import { About } from "@/components/landing/About";
import { ForWho } from "@/components/landing/ForWho";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";
import { Speaking } from "@/components/home/Speaking";
import { DisenaTuPrograma } from "@/components/home/DisenaTuPrograma";
import { Trayectoria } from "@/components/home/Trayectoria";

// Section order follows docs/mariagarai-home-diseno.html (Oct 2026 redesign).
const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <DisenaTuPrograma />
      <LeadMagnet />
      <About />
      <Trayectoria />
      <Thoughts />
      <Exponencial />
      <ForWho />
      <Newsletter />
      <Speaking />
      <CTA />
      <Footer dark />
    </main>
  );
};

export default Index;
