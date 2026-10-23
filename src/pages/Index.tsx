import "@/components/portada/portada.css";
import { Nav } from "@/components/portada/Nav";
import { Hero } from "@/components/portada/Hero";
import { Wishes } from "@/components/portada/Wishes";
import { Doors } from "@/components/portada/Doors";
import { TrabajaConmigo } from "@/components/portada/TrabajaConmigo";
import { About } from "@/components/portada/About";
import { Closing, ForWho, NewsletterSpeaking } from "@/components/portada/Closing";

// "Portada con firma" home (oct 2026): direction D of the María Garai
// Redesign artifact, aligned with laexponencial.com v2. All styles are scoped
// to .pd in components/portada/portada.css.
const Index = () => {
  return (
    <main className="pd" id="top">
      <Nav />
      <Hero />
      <Wishes />
      <div className="pd-wrap">
        <Doors />
        <TrabajaConmigo />
        <About />
        <ForWho />
        <NewsletterSpeaking />
        <Closing />
      </div>
    </main>
  );
};

export default Index;
