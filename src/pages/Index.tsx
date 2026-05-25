import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Thoughts } from "@/components/landing/Thoughts";
import { Exponencial } from "@/components/landing/Exponencial";
import { TestimonialsRow } from "@/components/landing/TestimonialsRow";
import { LeadMagnet } from "@/components/landing/LeadMagnet";
import { Formas } from "@/components/landing/Formas";
import { Newsletter } from "@/components/landing/Newsletter";
import { About } from "@/components/landing/About";
import { Testimonials } from "@/components/landing/Testimonials";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";
import { Speaking } from "@/components/home/Speaking";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <LeadMagnet />
      <About />
      <Testimonials />
      <Thoughts />
      <Exponencial />
      <Formas />
      <TestimonialsRow />
      <Newsletter />
      <Speaking />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
