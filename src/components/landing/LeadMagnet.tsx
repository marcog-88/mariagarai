import { useState } from "react";
import mockup from "@/assets/lead-magnet-white.webp";

export const LeadMagnet = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="py-24 md:py-32 border-t border-border bg-[#f9f9f7]">
      <div className="container-tight">
        <div className="flex flex-col md:flex-row md:items-center md:gap-16 lg:gap-24">
          {/* Left: text + form */}
          <div className="flex-1 min-w-0">
            <p
              className="mb-8 text-xs md:text-sm font-medium uppercase tracking-[0.24em]"
              style={{ color: "#9378fe" }}
            >
              Diseña tu Carrera Moderna
            </p>
            <h2 className="display-md">
              ¿Qué puedes{" "}
              <span className="font-serif italic" style={{ color: "#9378fe" }}>
                vender hoy
              </span>{" "}
              con lo que ya sabes?
            </h2>
            <p className="mt-6 text-lg md:text-xl text-foreground/75 leading-relaxed max-w-2xl">
              Deja de darle vueltas. Descubre cómo monetizar tu trayectoria con un negocio
              propio: qué vender, a quién, por cuánto y por dónde empezar. En 90 segundos.
            </p>
            <form
              className="mt-10 flex flex-col sm:flex-row gap-3 max-w-lg"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                required
                className="flex-1 rounded-full border border-border bg-white px-5 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-[#9378fe]"
              />
              <button
                type="submit"
                className="rounded-full px-6 py-3 text-sm font-medium text-white whitespace-nowrap transition-opacity hover:opacity-90"
                style={{ background: "#9378fe" }}
              >
                Quiero probarlo →
              </button>
            </form>
            <p className="mt-3 text-xs text-foreground/50">
              100% Personalizado. Gratis.
            </p>
          </div>

          {/* Right: mockup image */}
          <div className="mt-14 md:mt-0 md:w-[56%] lg:w-[54%] flex-shrink-0">
            <img
              src={mockup}
              alt="Tu mapa de monetización personalizado con IA"
              className="w-full h-auto"
              style={{ filter: "drop-shadow(0px 6px 20px rgba(0,0,0,0.13))" }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
