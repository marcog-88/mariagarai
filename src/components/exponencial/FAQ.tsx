import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Quizás no estoy lista todavía?",
    a: "Si esperas a estar lista, no vas a empezar nunca. Lista no es un estado. Es una decisión. La mitad del trabajo de los primeros meses es precisamente construir esa claridad.",
  },
  {
    q: "No sé si tengo tiempo para dedicarle.",
    a: "Estás dedicando tiempo a cosas que no te hacen avanzar. Aquí quitamos el ruido y solo trabajamos lo que mueve la aguja. Una hora de sesión semanal más implementación — si no tienes eso, el momento no es ahora.",
  },
  {
    q: "No sé nada de IA ni se me da bien la tecnología.",
    a: "Yo tampoco sabía. Si fuera para perfiles técnicos, no la usaría. La IA no es un don. Es una ventaja competitiva que se aprende. Te llevo paso a paso, sin jerga, sin frustración, sin necesidad de saber programar.",
  },
  {
    q: "No tengo muy claro qué vender.",
    a: "Eso lo dejamos claro en las primeras 2 sesiones. Y luego lo validamos con clientes reales. La claridad no es un requisito de entrada — es uno de los primeros entregables del programa.",
  },
  {
    q: "¿Y si ya he hecho otros programas contigo?",
    a: "Aquí me tienes a tu lado co-lanzando tu negocio. No repetimos contenido — empezamos desde donde estás. Todo lo que has hecho hasta ahora cuenta y lo integramos.",
  },
  {
    q: "¿4 meses van a ser suficientes?",
    a: "Para montar todo lo descrito, sí. Para escalar sin límites, no — pero ese no es el objetivo de estos 4 meses. El objetivo es tener un negocio funcionando con clientes reales. Muchas clientas continúan con programas de seguimiento después.",
  },
  {
    q: "¿Cómo funciona el proceso para entrar?",
    a: "Solicitas una llamada de valoración de 20–30 minutos. Hablamos, vemos si encajamos y, si es el caso, te explico cómo funciona y cuándo podemos empezar. No hay presión. Si no encajamos, te lo digo.",
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
          Lo que te estás preguntando.
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
