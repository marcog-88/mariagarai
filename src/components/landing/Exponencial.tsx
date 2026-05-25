import { TidyCalButton } from "@/components/construye/TidyCalButton";
import expoMockup from "@/assets/exponencial-premium-card.webp";

export const Exponencial = () => {
  return (
    <section
      className="py-24 md:py-32 border-t border-white/10"
      style={{ background: "#0c0d0e" }}
    >
      <div className="container-tight">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left — text */}
          <div>
            <p
              className="mb-8 text-xs md:text-sm font-medium uppercase tracking-[0.24em]"
              style={{ color: "#9378fe" }}
            >
              Programa Premium 1:1 · 4 Meses · Por Aplicación
            </p>
            <h2 className="display-md text-white">
              Construye tu{" "}
              <span className="font-serif italic" style={{ color: "#9378fe" }}>
                Carrera Moderna
              </span>
            </h2>
            <p className="mt-6 text-lg md:text-xl text-white/70 leading-relaxed max-w-xl">
              Para profesionales con experiencia corporativa que quieren monetizar su
              conocimiento con un negocio propio que reemplace su sueldo y les dé
              libertad.
            </p>
            <div className="mt-10">
              <TidyCalButton className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 bg-[#9378fe]">
                Solicitar llamada de valoración →
              </TidyCalButton>
            </div>
          </div>

          {/* Right — mockup image */}
          <div className="aspect-[4/3] rounded-[1.25rem] overflow-hidden border border-white/10">
            <img
              src={expoMockup}
              alt="Exponencial — Notion, Claude, LinkedIn y Substack."
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
