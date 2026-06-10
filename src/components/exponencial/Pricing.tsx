const includes = [
  "Diseño completo de tu oferta de alto valor: qué vendes, a quién, a qué precio",
  "Tu manual de marca personalizado: mensaje, posicionamiento, diferenciación",
  "Tu manual de ventas adaptado 100% a ti, con guión de objeciones reales",
  "Tu sistema de prospección activa más allá de tu entorno",
  "17 sesiones 1:1 con María (60 minutos, semanales)",
  "WhatsApp directo entre sesiones para dudas urgentes",
  "Tu LinkedIn optimizado y publicando con criterio de negocio",
  "Tu Substack lanzado y creciendo",
  "Tu estrategia de contenido mensual con sistema de reutilización con IA",
  "Tu web personal montada durante las sesiones",
  "Tu Notion como sistema operativo: CRM, finanzas, contenido, clientes",
  "Claude configurado como tu socia operativa",
  "Reunión de Socias mensual (sesiones grupales en directo)",
  "Acceso a la comunidad de founders",
];

const TIDYCAL = "https://tidycal.com/mariagarai/exploracion";

export const Pricing = () => {
  return (
    <section
      id="precio"
      className="pt-12 pb-24 md:pb-32"
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
          <p className="mt-2 italic text-primary-foreground/60">
            • Pago único o 2 pagos de €2.250
          </p>
          <p className="italic text-primary-foreground/60">
            • Máximo 2 clientas nuevas al mes
          </p>

          <a
            href={TIDYCAL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-mint-lg !text-lg mt-12 mb-6 w-full md:w-auto justify-center whitespace-nowrap border-2 border-[#0c0d0e] !text-[#0c0d0e]"
            style={{
              boxShadow:
                "4px 4px 0 0 #0c0d0e, 8px 8px 28px rgba(147, 120, 254, 0.6), 14px 14px 56px rgba(147, 120, 254, 0.35)",
            }}
          >
            Comprueba si encajas
            <span aria-hidden>→</span>
          </a>

          <a
            href={TIDYCAL}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-3 text-[11px] md:text-sm italic whitespace-nowrap text-primary-foreground/75 hover:text-mint underline underline-offset-4"
          >
            ¿Tienes dudas? → Llamada de exploración
          </a>
        </div>
      </div>
    </section>
  );
};
