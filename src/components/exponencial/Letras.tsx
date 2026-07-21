import { Reveal } from "@/components/landing/Reveal";

export const Letras = () => {
  return (
    <section className="py-24 md:py-32 border-t border-border" style={{ background: "#f9f9f7" }}>
      <div className="container-tight">
        <Reveal>
          <p className="mb-10 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-foreground">
            Déjame que te confiese
          </p>
          <div
            className="pl-6 md:pl-8 border-l-4 mb-12"
            style={{ borderColor: "#9378fe" }}
          >
            <p className="font-serif text-2xl md:text-3xl italic leading-snug" style={{ color: "#9378fe" }}>
              "Tardé 3 años en construir lo que te enseño a hacer en 90 días."
            </p>
          </div>
        </Reveal>

        <Reveal delay={150} className="max-w-3xl space-y-6 text-lg text-foreground/80 leading-relaxed">
          <p>
            Salí del corporate con experiencia, ahorros y ganas de emprender. Los 3 años siguientes fui una mantenida.
          </p>
          <p>
            Nada terminaba de encajar. Trabajaba más horas que por cuenta ajena. Vendía de todo, por debajo de mi valor y luchándolo mucho. Cambiaba de estrategia cada mes y nada se veía claro o profesional.
          </p>
          <p>
            Quería ser madre, pero ¿cómo iba a compaginar la maternidad con un negocio que me devoraba entera?
          </p>
          <p>
            Te resumo el sufrimiento en 3 palabras: dudas, deudas y desesperación.
          </p>
          <p>El punto de inflexión fue cuando toqué fondo, frené e hice lo que estaba evitando:</p>
          <ul className="space-y-3">
            {[
              "Dejar de vender mi tiempo en trozos y cursos sueltos a 97€, y crear un solo programa de formación de alto valor (en vez de servir a todos con cosas sueltas).",
              "Elegir el sistema de captación que encajaba conmigo (en vez de estar en todas partes sin estrategia).",
              "Usar la IA como mi socia para montar la infraestructura sin gastar en agencias ni demorarme meses (en vez de hacerlo todo a mano).",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-foreground/80 leading-relaxed">
                <span className="text-[#9378fe] flex-shrink-0">→</span>
                <span className="italic">{item}</span>
              </li>
            ))}
          </ul>
          <p>
            Resultado: ingresos escalables, flexibilidad, más disfrute trabajando.
          </p>
          <p>
            Hoy mi objetivo es más grande: revolucionar la formación online en español. Que crear un programa de calidad, venderlo bien y vivir de tu conocimiento deje de ser un privilegio de unos pocos, y que no nos frenemos a nosotras mismas con un mindset que el mercado anglosajón superó hace años.
          </p>
        </Reveal>

        <Reveal variant="blur">
          <p className="mt-14 font-serif text-3xl md:text-4xl leading-tight max-w-3xl text-foreground">
            Este camino que me costó años de sufrimiento y deudas tiene un regalo. Uno para ti.
          </p>
        </Reveal>
      </div>
    </section>
  );
};
