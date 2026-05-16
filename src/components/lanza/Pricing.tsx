const includes = [
  "4 sesiones 1:1 quincenales con María (60 minutos cada una)",
  "Acceso completo al programa en la Escuela de Carreras Modernas",
  "3 meses de acceso a la comunidad y la academia",
  "2 sesiones grupales quincenales con toda la Escuela",
  "Workbooks, plantillas y herramientas accionables",
  "Manual de marca, pitch, ecosistema de ofertas, producto creado, oferta validada, prospección, webinar, método LAPS, script de llamadas, manual de ventas humanas, rutina de ventas, CRM y portal de clientes",
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
          Lanza y Vende · 8 semanas · Tus Primeros 3K
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
            style={{ background: "#ff4295", color: "#ffffff" }}
          >
            Cohorte 01 · Septiembre 2026
          </span>
          <p className="text-primary-foreground/40 line-through text-2xl mb-2">€4382</p>
          <p className="text-xs uppercase tracking-[0.24em] text-mint mb-2">Tu inversión</p>
          <p className="font-serif text-7xl md:text-8xl text-primary-foreground">€1750</p>
          <p className="mt-2 text-primary-foreground/60">Pago único</p>

          <a href="#" className="btn-mint-lg !text-lg mt-12 mb-6">
            UNIRME A LA LISTA DE ESPERA
            <span aria-hidden>→</span>
          </a>
          <p className="text-xs md:text-sm uppercase tracking-widest text-mint">
            Solo 8 plazas por cohorte. Las plazas se asignan por orden de lista de espera.
          </p>

          <a
            href={TIDYCAL}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-10 text-[11px] md:text-sm whitespace-nowrap text-primary-foreground/75 hover:text-mint underline underline-offset-4"
          >
            ¿Tienes dudas antes de entrar? → Reservar llamada de valoración
          </a>
        </div>
      </div>
    </section>
  );
};
