import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Thoughts } from "@/components/landing/Thoughts";
import { Formas } from "@/components/landing/Formas";
import { Newsletter } from "@/components/landing/Newsletter";
import { About } from "@/components/landing/About";
import { Testimonials } from "@/components/landing/Testimonials";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Thoughts />
      <Formas />
      <About />
      <Newsletter />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
