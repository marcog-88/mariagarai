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
            Ya vendes. Pero no te hace tan feliz como te gustaría.
          </h2>
        </Reveal>

        <Reveal delay={150} className="mt-16 max-w-3xl space-y-8 text-sm md:text-base leading-relaxed text-foreground/80">
          <p className="border-l-2 border-[#9378fe] pl-4 font-medium italic">
            Cada venta es más trabajo, más reuniones, más carga mental.
          </p>
          <p>Sientes que:</p>
          <ul className="space-y-3">
            {[
              "Quieres salir del modelo de vender tu tiempo, pero no sabes cómo.",
              "Cobras por debajo de lo que vales y te da miedo subir.",
              "Sirves a todos porque te da miedo sonar específica y ahuyentar clientes.",
              "Tu negocio no se ve tan profesional como tú eres.",
              "Vendes a contactos y referidos, pero te cuesta conseguir clientes más allá de tu círculo.",
              "Tienes ideas de productos, membresías, grupales… pero no sabes cuál es el mejor formato ni cómo crearlo.",
              "Sabes que necesitas web, sistemas, una academia, pero lo técnico te abruma y te paraliza.",
              "Pagas cuotas a plataformas que no entiendes del todo y que nunca serán tuyas.",
              "No sabes cuál es el mejor formato para escalar tus ingresos sin que dependa de ti.",
              "Lo haces todo a mano. Sabes que la IA debería ayudarte, pero no sabes cómo.",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-foreground/75">
                <span className="text-[#9378fe] flex-shrink-0 font-bold">✕</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="font-medium italic text-foreground/80">
            Conclusión: haces un poco de todo, sin orden ni criterio. Pero no consigues salir de la rueda para que tu negocio facture más sin que dependa 100% de ti.
          </p>
        </Reveal>
      </div>
    </section>
  );
};
