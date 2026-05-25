import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "¿Necesito tener experiencia en LinkedIn o Substack?", a: "No. El programa empieza desde cero en ambas plataformas. Si ya tienes algo montado, lo optimizamos desde donde estás." },
  { q: "¿Por qué Substack y no Instagram?", a: "Instagram pide contenido constante, formatos perfectos y diseño impecable. Cuando paras, desapareces. Substack es diferente. Las personas que están ahí buscan profundidad, no entretenimiento. Es donde se construye cercanía real — y de la cercanía nacen las ventas. Además, cada pieza que publicas en Substack se convierte en la base de todo tu contenido. Un artículo largo se convierte en diez piezas cortas. Con IA, en minutos." },
  { q: "¿Cuánto tiempo tengo que dedicar al día?", a: "Una acción al día. Entre 45 y 60 minutos. Los días de sesión grupal con María, una hora más." },
  { q: "¿En qué se diferencia de otros cursos de LinkedIn?", a: "Aquí trabajamos LinkedIn y Substack juntos como un sistema integrado. Y el objetivo no es crecer — es vender. Todo está orientado a conseguir clientes, no seguidores." },
  { q: "¿Qué pasa si ya tengo LinkedIn pero nunca he usado Substack?", a: "Perfecto. Empezamos optimizando lo que ya tienes en LinkedIn y lanzamos Substack desde cero. Las dos cosas en paralelo." },
  { q: "¿Y si ya tengo email marketing?", a: "Puedes tener los dos. Substack funciona como canal de contenido y comunidad, no solo como email. Son complementarios, no excluyentes." },
  { q: "¿Puedo hacerlo si tengo un trabajo a tiempo completo?", a: "Sí. Una acción al día está diseñado precisamente para personas con tiempo limitado. 45–60 minutos al día es todo lo que necesitas." },
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
          Todo lo que necesitas saber antes de entrar.
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
