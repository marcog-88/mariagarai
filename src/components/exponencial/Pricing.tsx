const includes = [
  "Diseño completo de tu ecosistema de ofertas — qué vendes, a quién, a qué precio",
  "Tu manual de marca personal — quién eres, qué problema resuelves, cómo te posicionas",
  "Tu manual de ventas adaptado 100% a ti — vender sin manipulación, con criterio",
  "Tu sistema de prospección activa — conversaciones que terminan en ventas",
  "17 sesiones 1:1 con María (60 minutos, semanales)",
  "WhatsApp directo entre sesiones para dudas urgentes",
  "Tu LinkedIn optimizado y publicando con criterio de negocio",
  "Tu Substack lanzado y creciendo desde el día 1",
  "Tu web personal montada durante las sesiones",
  "Tu sales page — copy, estructura y página publicada",
  "Tu lead magnet interactivo con IA, conectado a email marketing",
  "Tu embudo de captación completo — del lead a la venta automática",
  "Tu Notion como sistema operativo — CRM, finanzas, contenido, clientes",
  "Claude configurado como cofundador — automatizaciones de contenido y gestión",
  "Tu biblioteca de prompts personalizada para tu negocio",
  "Acceso vitalicio a workshops mensuales de Carreras Modernas",
  "Acceso completo a Lanza y Vende, Redes que Venden y Construye",
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
          EXPONENCIAL · 4 MESES · 1:1
        </h2>

        <ul className="mt-12 space-y-4 max-w-3xl">
          {includes.map((it, i) => (
            <li key={i} className="flex gap-3 text-primary-foreground/90 leading-relaxed text-base md:text-lg">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-mint text-white text-xs flex-shrink-0 mt-1.5">
                ✓
              </span>
              <span>{it}</span>
            </li>
          ))}
        </ul>

        <div className="mt-16 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.24em] text-mint mb-2">Tu inversión</p>
          <p className="font-serif text-7xl md:text-8xl text-primary-foreground">€4500</p>
          <p className="mt-2 text-primary-foreground/60">Pago único o 2 pagos de €2500 · Plazas limitadas · Por aplicación</p>

          <a
            href={TIDYCAL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-mint-lg !text-lg mt-12 mb-6 inline-flex"
          >
            Solicitar llamada de valoración
            <span aria-hidden>→</span>
          </a>
          <p className="text-xs md:text-sm uppercase tracking-widest text-mint">
            Máximo 2 clientas nuevas al mes · Por aplicación
          </p>

          <a
            href={TIDYCAL}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-10 text-[11px] md:text-sm whitespace-nowrap text-primary-foreground/75 hover:text-mint underline underline-offset-4"
          >
            ¿Tienes dudas antes de entrar? → Reservar llamada de exploración
          </a>
        </div>
      </div>
    </section>
  );
};
