import { Check, Star } from "lucide-react";
import { TidyCalButton } from "./TidyCalButton";
import deliverablesVideo from "@/assets/construye-delivberables-final-mockup.mp4";

const timeline = [
  {
    n: "1",
    week: "Semana 1-2",
    title: "Un sistema operativo a lo Silicon Valley",
    body: "Nada de seguir improvisando. Mapeamos tus procesos y las tareas que implica cada uno y creamos rutinas optimizadas que te ahorren +10 horas semanales.",
    bullets: [
      "Todos los procesos de tu negocio bajo control: CRM y gestión de clientes, calendario de lanzamientos, finanzas y 5 más.",
      "Tu nueva oficina digital: todo tu negocio vive en un Notion estructurado, pulcro y fácil de usar.",
      "Proyectos y agenda: tienes un proceso de planificación trimestral, mensual y semanal para saber exactamente qué toca hacer y revisar cada día.",
      "Más contenido en menos horas: el mejor sistema para planificar y reutilizar tus ideas en tu newsletter, podcast, LinkedIn e Instagram desde un solo lugar.",
      "La mejor combinación de herramientas: analizamos qué herramientas puedes incorporar para multiplicar tu impacto, reducir horas y escalar tu negocio.",
    ],
    outcome: "Tu sistema operativo está listo",
  },
  {
    n: "2",
    week: "Semana 3-4",
    title: "Claude como tu cofundador",
    body: "Deja de usar la IA como una normie. Exprime Claude en todos tus procesos como tu co-fundador.",
    bullets: [
      "La configuración inicial de los pros. Proyectos, artefactos, Skills, MCPs. Todos los básicos imprescindibles (que ahora te suenan a chino) explicados paso a paso.",
      "Aprende a nutrir a Claude con tu contexto: manual de marca, branding, estrategia de productos, lanzamientos.",
      "Claude Design y otras IAs que te ahorran horas en Canva.",
      "Conecta Notion con Claude y déjate volar la cabeza con lo que puede hacer por ti.",
      "Los prompts y automatizaciones que yo uso cada día.",
    ],
    outcome: "Claude trabaja para ti",
  },
  {
    n: "3",
    week: "Semana 5-6",
    title: "Una web de WOW",
    body: "Una que te posiciona y dice quién eres, qué haces y cómo trabajar contigo con claridad absoluta.",
    bullets: [
      "Montamos paso a paso tu web desde cero en Lovable.",
      "El copy completo y coherente escrito y revisado (sin sonar a IA).",
      "Una estructura profesional, minimalista y ultra eficiente que potencie sin abrumar.",
      "Añadimos tus imágenes, branding, dominio, links y queda 100% a tu gusto.",
      "Aprendes a hacer todos los cambios en minutos. Sin diseñador ni programador.",
    ],
    outcome: "Tu web está activa",
  },
  {
    n: "4",
    week: "Semana 7",
    title: "Una página de ventas ultra convincente",
    body: "Para que puedas subir los precios sin que el envoltorio te perjudique. La página que vende tu oferta por ti a todas horas.",
    bullets: [
      "Plantilla con la estructura que usan los emprendedores anglosajones para facturar millones.",
      "Guía y revisión del copy completo sección por sección (sin que suene a IA).",
      "Montada en Lovable como página independiente y conectada a Stripe u otros links.",
      "Lista para compartir, enviar después de una llamada, poner en tu LinkedIn.",
      "Duplica y modifica el copy en 90 segundos para aprovecharla en otros programas.",
    ],
    outcome: "Tu oferta acepta pagos",
  },
  {
    n: "5",
    week: "Semana 8",
    title: "Un lead magnet que engancha",
    body: "Deja de mandar PDFs y ebooks que nadie lee. Crea algo interactivo que les vuela la cabeza a tus leads. Sé la primera en ofrecer algo así en tu sector. Verás la diferencia.",
    bullets: [
      "Paso a paso de cómo crear tu lead magnet tipo app interactiva.",
      "Conectado a tu Notion + email marketing para capturar leads automáticamente.",
      "Con un vídeo de ventas que convierte — guión y estructura incluidos.",
      "Tu embudo de captación completo montado y funcionando.",
    ],
    outcome: "Tu embudo funciona",
  },
];

export const Deliverables = () => {
  return (
    <section id="metodo" className="py-24 md:py-32 bg-background">
      <div className="container-tight">
        <p className="mb-6 text-xs md:text-sm font-medium uppercase tracking-[0.24em]" style={{ color: "#9378fe" }}>
          Lo que montamos
        </p>
        <p className="text-base md:text-2xl text-foreground/70 mb-12 font-sans">
          Sales con infraestructura real. No con apuntes.
        </p>

        {/* Mockup */}
        <div className="mb-16 rounded-2xl overflow-hidden bg-[#f9f9f7] relative">
          <video
            src={deliverablesVideo}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-label="Lo que montamos en Construye: web, dashboard Notion, embudo, automatización IA, CRM y primera venta"
            className="w-full h-auto block"
          />
        </div>

        {/* Timeline header */}
        <p
          className="mt-16 md:mt-24 mb-10 text-xs md:text-sm font-medium uppercase tracking-[0.24em]"
          style={{ color: "#0c0d0e" }}
        >
          Qué pasa cada semana
        </p>
        <h2 className="font-serif text-[clamp(1rem,4.5vw,3.25rem)] leading-tight tracking-tight max-w-3xl mb-14 whitespace-nowrap">
          Los 5 sistemas que construimos juntas
        </h2>

        {/* Vertical timeline: 5 modules + week info combined */}
        <div className="relative">
          <div className="space-y-8">
            {timeline.map((step, idx) => (
              <div key={step.n} className="relative pl-16 md:pl-24">
                {/* Connecting line segment (skip after last) */}
                <div
                  className="absolute left-6 md:left-8 -translate-x-1/2 top-14 md:top-[4.5rem] -bottom-10 w-px"
                  style={{ background: "#0c0d0e" }}
                  aria-hidden
                />
                {/* Numbered marker */}
                <div
                  className="absolute left-0 top-2 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center font-serif text-xl md:text-2xl text-[#0c0d0e] shadow-md"
                  style={{ background: "#d0fcd0", border: "2px solid #0c0d0e" }}
                >
                  {step.n}
                </div>

                {/* Card */}
                <div className="rounded-xl bg-[#0c0d0e] text-white p-8 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-4 mb-3">
                    <span
                      className="self-start text-xs uppercase tracking-[0.18em] font-semibold px-2.5 py-1 rounded-full flex-shrink-0 md:order-2"
                      style={{ background: "#d0fcd0", color: "#0c0d0e" }}
                    >
                      {step.week}
                    </span>
                    <h3 className="font-serif text-xl md:text-2xl text-white leading-tight md:order-1">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-white/75 leading-relaxed mb-6">{step.body}</p>

                  <ul className="space-y-2.5 mb-6">
                    {step.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/85">
                        <Check
                          className="w-5 h-5 text-white flex-shrink-0 mt-0.5"
                          strokeWidth={2.5}
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 pt-4 border-t border-[#d0fcd0]/40 flex items-start gap-3">
                    <Check
                      className="w-5 h-5 text-[#d0fcd0] flex-shrink-0 mt-0.5"
                      strokeWidth={2.5}
                    />
                    <span
                      className="text-sm font-semibold whitespace-nowrap"
                      style={{ color: "#d0fcd0" }}
                    >
                      {step.outcome}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live session panel */}
        <div className="relative pl-0 mt-8">
          {/* Connector line from step 5 down into the Live Session card */}
          <div
            className="absolute left-6 md:left-8 -translate-x-1/2 -top-8 h-8 w-px"
            style={{ background: "#0c0d0e" }}
            aria-hidden
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* LEFT — Video panel */}
            <div className="rounded-xl bg-[#0c0d0e] p-5 flex flex-col gap-4">
              <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-gray-900 border border-white/10">
                <video
                  src={new URL("@/assets/live-session.mp4", import.meta.url).href}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                  aria-label="Vista previa de una sesión en vivo con María y participantes"
                />
                <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-[#ff0000] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" aria-hidden />
                  LIVE SESSION
                </div>
              </div>
              <div>
                <p className="text-white font-bold text-sm">Construye · 8 semanas</p>
                <p className="text-white/60 text-sm mt-1">
                  Las participantes construyen su negocio completo: web, embudo, sistemas y primera venta.
                </p>
                <div className="flex items-center gap-2 mt-3">
                  <div className="flex">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-white font-bold text-sm">4.9</span>
                  <span className="text-white/60 text-sm">· 12 alumnas</span>
                </div>
              </div>
            </div>

            {/* RIGHT — Info grid (2x2) */}
            <div className="grid grid-cols-2 gap-3 h-full">
              {[
                { label: "DURACIÓN", value: "8 SEM", sub: "Programa en vivo" },
                { label: "FORMATO", value: "EN VIVO", sub: "Sesiones quincenales" },
                { label: "PRECIO", value: "€1997", sub: "Pago único" },
                { label: "INICIO", value: "PRÓXIMAMENTE", sub: "", compact: true },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border bg-[#0c0d0e] p-4 flex flex-col justify-start"
                  style={{ borderColor: "rgba(255,255,255,0.08)" }}
                >
                  <p className="text-[10px] md:text-xs uppercase tracking-widest text-white/50">{item.label}</p>
                  <p
                    className={`${item.compact ? "text-lg md:text-2xl" : "text-xl md:text-3xl"} font-black leading-none mt-2`}
                    style={{ color: "#d0fcd0" }}
                  >
                    {item.value}
                  </p>
                  {item.sub && <p className="text-xs text-white/60 mt-1.5">{item.sub}</p>}
                </div>
              ))}
            </div>
          </div>
          <p className="mt-6 italic text-sm md:text-base text-center" style={{ color: "#0c0d0e" }}>
            Tu mayor activo no es el contenido. Es el acceso directo.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="https://mariagarai.activehosted.com/f/11"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-mint-lg !text-sm md:!text-lg whitespace-nowrap border-2 border-[#0c0d0e]"
            style={{ boxShadow: "4px 4px 0 0 #0c0d0e" }}
          >
            Unirme a la lista de espera <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};
