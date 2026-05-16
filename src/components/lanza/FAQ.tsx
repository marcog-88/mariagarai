import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Necesito tener clara mi oferta antes de entrar?",
    a: "No. Definir tu oferta es exactamente el trabajo de las primeras semanas.",
  },
  {
    q: "¿Qué pasa si no consigo ventas en 8 semanas?",
    a: "El objetivo son 10 conversaciones reales de venta. Las ventas son el resultado probable. Lo que sí garantizo es que sabrás exactamente qué funciona y qué ajustar para vender en las semanas siguientes.",
  },
  {
    q: "¿Cuánto tiempo tengo que dedicar a la semana?",
    a: "Entre 4 y 6 horas semanales más la sesión 1:1 quincenal. Es un programa de ejecución, no de consumo.",
  },
  {
    q: "¿En qué se diferencia esto de otros programas de la Escuela?",
    a: "Lanza y Vende se centra exclusivamente en validar, vender y conseguir tus primeros clientes. No tocamos infraestructura digital ni sistemas. Si quieres montar tu web, tu embudo y tus sistemas con IA, el siguiente paso es Construye.",
  },
  {
    q: "¿Puedo entrar si sigo trabajando mientras emprendo?",
    a: "Sí. Está diseñado precisamente para personas con tiempo limitado que necesitan resultados concretos.",
  },
  {
    q: "¿Qué pasa cuando termina el programa?",
    a: "Tienes 3 meses de acceso a la Escuela de Carreras Modernas — comunidad, sesiones grupales y materiales. Si quieres seguir con el siguiente paso, Construye te espera para montar toda la infraestructura digital de tu negocio.",
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
