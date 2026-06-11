import { Reveal } from "@/components/landing/Reveal";

export const Problem = () => {
  return (
    <section className="py-24 md:py-32" style={{ background: "#f9f9f7" }}>
      <div className="container-tight">
        <Reveal>
          <p className="mb-10 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-foreground">
            El problema
          </p>
          <h2 className="font-serif text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05] tracking-tight max-w-4xl">
            Ya vendes. Pero solo a la gente de tu entorno.
          </h2>
        </Reveal>

        <Reveal delay={150} className="mt-16 max-w-3xl space-y-8 text-sm md:text-base leading-relaxed text-foreground/80">
          <p className="border-l-2 border-[#9378fe] pl-4 font-medium italic">
            Eres una profesional con experiencia. Sabes que lo que tienes vale mucho. Pero el negocio no termina de despegar.
          </p>
          <p>Lo que sientes es esto:</p>
          <ul className="space-y-3">
            {[
              "Vendes a contactos y referidos, pero no sabes cómo conseguir clientes más allá de tu círculo.",
              "Tu negocio no se ve tan profesional como tú eres.",
              "No tienes claro qué vender exactamente, ni cómo empaquetarlo, ni a qué precio.",
              "Cobras por debajo de lo que vales y te da miedo subir.",
              "Lo haces todo a mano. Sin sistemas. Dependes de tu tiempo cada hora.",
              "Sabes que la IA debería estar ayudándote, pero no sabes cómo.",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-foreground/75">
                <span className="text-[#9378fe] flex-shrink-0 font-bold">✕</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="font-medium italic text-foreground/80">
            Conclusión: haces un poco de todo, sin orden ni criterio. Pero no terminas de dar con la tecla para que tu negocio facture más sin que dependa 100% de ti.
          </p>
        </Reveal>
      </div>
    </section>
  );
};
