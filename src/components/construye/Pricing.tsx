const includes = [
  "4 sesiones 1:1 quincenales con María (60 minutos cada una)",
  "Tu sistema operativo completo en Notion — CRM, finanzas, contenido, clientes, planificación — personalizado para ti",
  "Tu web personal montada en Lovable — con el copy escrito contigo",
  "Tu sales page — copy, estructura y página montada",
  "Tu lead magnet en formato app — interactivo, conectado a email marketing, con vídeo de ventas",
  "Claude configurado como cofundador de tu negocio — automatizaciones y prompts",
  "Acceso completo al programa en la Escuela de Carreras Modernas",
  "3 meses de acceso a la comunidad y la academia",
];

const TIDYCAL = "https://tidycal.com/mariagarai/exploracion";

export const Pricing = () => {
  return (
    <section
      id="precio"
      className="pt-12 pb-8 md:pb-12 lg:pb-32"
      style={{ background: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
    >
      <div className="container-tight">
        <p className="mb-6 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-mint">
          Qué incluye exactamente
        </p>
        <h2 className="font-serif text-[clamp(2.25rem,5vw,3.75rem)] leading-tight tracking-tight text-primary-foreground">
          Construye · 8 semanas
        </h2>

        <ul className="mt-12 space-y-4 max-w-3xl">
          {includes.map((it, i) => (
            <li key={i} className="flex gap-3 text-primary-foreground/90 leading-relaxed text-base md:text-lg">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-mint text-mint-foreground text-xs flex-shrink-0 mt-1.5">
                ✓
              </span>
              <span>{it}</span>
            </li>
          ))}
        </ul>

        <div className="mt-16 max-w-2xl">
          <span
            className="inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] mb-4"
            style={{ background: "#d0fcd0", color: "#0a0a0a" }}
          >
            Cohorte 01 · Julio 2026
          </span>
          <p className="text-primary-foreground/40 line-through text-2xl mb-2">€5882</p>
          <p className="text-xs uppercase tracking-[0.24em] text-mint mb-2">Tu inversión</p>
          <p className="font-serif text-7xl md:text-8xl text-primary-foreground">€1997</p>
          <p className="mt-2 text-primary-foreground/60">Pago único</p>

          <p className="mt-12 mb-8 text-xs md:text-sm uppercase tracking-widest text-mint">
            Solo 2 plazas disponibles este mes
          </p>
          <a href="https://mariagarai.activehosted.com/f/11" target="_blank" rel="noopener noreferrer" className="btn-mint-lg !text-lg mt-0 mb-4">
            UNIRME A LA LISTA DE ESPERA
            <span aria-hidden>→</span>
          </a>

          <a
            href={TIDYCAL}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-10 text-[11px] md:text-sm whitespace-nowrap text-primary-foreground/75 hover:text-mint underline underline-offset-4"
          >
            ¿Tienes dudas antes de entrar? → Reservar llamada de valoración
          </a>
        </div>

        <div className="mt-8 md:mt-10 max-w-3xl space-y-3 md:space-y-4 text-sm md:text-xs lg:text-sm text-primary-foreground/55 leading-relaxed">
          <p className="hidden md:block">
            <span className="font-medium text-primary-foreground/80">IMPORTANTE:</span> El programa
            no incluye el coste de las herramientas (Notion, Lovable, Claude, email marketing).
            Estas herramientas tienen planes gratuitos o de bajo coste. Te orientamos sobre qué
            plan necesitas.
          </p>
          <p className="hidden md:block">
            <span className="font-medium text-primary-foreground/80">¿Quieres que lo haga yo por ti?</span>{" "}
            Si prefieres que María y su equipo monten toda la infraestructura sin que tú tengas
            que aprender — ponte en contacto para un presupuesto personalizado.
          </p>
        </div>
      </div>
    </section>
  );
};
