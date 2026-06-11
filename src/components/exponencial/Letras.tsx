import { Reveal } from "@/components/landing/Reveal";

export const Letras = () => {
  return (
    <section className="py-24 md:py-32 border-t border-border" style={{ background: "#f9f9f7" }}>
      <div className="container-tight">
        <Reveal>
          <p className="mb-10 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-foreground">
            Lo que nadie te cuenta
          </p>
          <div
            className="pl-6 md:pl-8 border-l-4 mb-12"
            style={{ borderColor: "#9378fe" }}
          >
            <p className="font-serif text-2xl md:text-3xl italic leading-snug" style={{ color: "#9378fe" }}>
              "Tardé 3 años en construir lo que te enseño a hacer en 4 meses."
            </p>
          </div>
        </Reveal>

        <Reveal delay={150} className="max-w-3xl space-y-6 text-lg text-foreground/80 leading-relaxed">
          <p>
            Salí del corporate con experiencia, ahorros y ganas de emprender. Los 3 años siguientes fui una mantenida.
          </p>
          <p>
            Nada terminaba de encajar. Trabajaba más horas que en corporate. Vender era imposible. Crear contenido me abrumaba. Tardaba semanas en crear cosas que luego no me servían.
          </p>
          <p>
            Te resumo el sufrimiento en 3 palabras: dudas, deudas y desesperación.
          </p>
          <p>
            Lo que nadie me había enseñado era esto: tener el conocimiento no es suficiente. Vendía poco, por debajo de mi valor y sin apalancarme en mis ventajas competitivas.
          </p>
          <p>El punto de inflexión fue cuando toqué fondo, frené e hice lo que estaba evitando:</p>
          <ul className="space-y-3">
            {[
              "Crear una oferta insignia de alto valor (en vez de vender cosas sueltas y servir a todos).",
              "Elegir el sistema de captación que encajaba conmigo (en vez de estar en todas partes sin estrategia).",
              "Construir autoridad en redes para que los clientes llegaran a mí (en vez de perseguirlos).",
              "Usar la IA como mi socia para acelerar y escalar (en vez de hacerlo todo a mano).",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-foreground/80 leading-relaxed">
                <span className="text-[#9378fe] flex-shrink-0">→</span>
                <span className="italic">{item}</span>
              </li>
            ))}
          </ul>
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
