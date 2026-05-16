import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Qué pasa cuando compro?",
    a: "Nada más completar el pago recibes un email con acceso inmediato al programa en la Escuela de Carreras Modernas. Dentro encontrarás un formulario de bienvenida para que me cuentes tu situación de partida. En 48 horas agendamos tu primera sesión 1:1 — la auditoría inicial de negocio — y arrancamos. Todo está pensado para que empieces a construir desde el primer día.",
  },
  {
    q: "¿Necesito saber de tecnología o programación?",
    a: "No. Todo lo que usamos — Notion, Lovable, Claude — son herramientas que no requieren programar. Pero sí necesitas estar abierta a aprender y a dedicar tiempo a montar los sistemas. Ten en cuenta que las herramientas tienen sus propios costes — te orientamos sobre qué plan necesitas en cada caso.",
  },
  {
    q: "¿Qué pasa si todavía no tengo claro qué vendo?",
    a: "Construye asume que ya tienes una oferta o al menos una dirección clara. Si todavía no la tienes, empieza por Lanza y Vende y después ven aquí.",
  },
  {
    q: "¿Cuánto tiempo tengo que dedicar a la semana?",
    a: "Entre 4 y 6 horas semanales más la sesión 1:1 quincenal. Algunas semanas serán más intensas cuando estemos montando la web o el embudo.",
  },
  {
    q: "¿La web que monto es realmente profesional?",
    a: "Sí. Lovable genera webs que se ven y funcionan como si las hubiera hecho un diseñador profesional. No son plantillas genéricas — son webs reales, adaptadas a tu negocio.",
  },
  {
    q: "¿Puedo hacerlo si tengo un trabajo a tiempo completo?",
    a: "Sí. Las sesiones son quincenales y el trabajo entre sesiones es flexible.",
  },
  {
    q: "¿Puedo traer a mi asistente virtual?",
    a: "Sí. Tu asistente puede participar en las sesiones y aprender a gestionar y actualizar los sistemas por ti. Hablemos para ver cómo adaptarlo.",
  },
  {
    q: "¿Hay opción de que lo hagáis vosotros por mí?",
    a: "Sí. Si prefieres que María y su equipo monten toda la infraestructura, ponte en contacto para un presupuesto personalizado.",
  },
  {
    q: "¿Qué pasa cuando termina el programa?",
    a: "Tienes 3 meses de acceso a la Escuela de Carreras Modernas — comunidad, sesiones grupales y materiales. Tu web, tu Notion, tu embudo y tu lead magnet son tuyos para siempre.",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="pt-8 md:pt-12 lg:pt-16 pb-8 md:pb-16"
      style={{ background: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
    >
      <div className="container-tight">
        <p className="mb-10 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-mint">
          Preguntas frecuentes
        </p>
        <h2 className="font-serif text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05] tracking-tight text-primary-foreground max-w-4xl">
          Lo que se pregunta antes de entrar.
        </h2>

        <Accordion type="single" collapsible className="mt-16 border-t border-primary-foreground/15">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-b border-primary-foreground/15"
            >
              <AccordionTrigger className="text-left font-serif text-xl md:text-2xl leading-snug py-6 hover:no-underline text-primary-foreground">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed pb-6 text-primary-foreground/70">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
