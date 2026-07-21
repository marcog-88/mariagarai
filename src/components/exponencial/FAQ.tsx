import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/landing/Reveal";

const faqs = [
  {
    q: "¿Quizás no estoy lista todavía?",
    a: "¿Lista para qué? Llevas tiempo regalando tu valor y haciendo cosas sin dirección. Tu negocio es el mejor activo que tienes y lo estás dejando a medias. La cuestión no es si estás lista. Es cuánto más vas a esperar mientras sigues sin avanzar.",
  },
  {
    q: "No sé si tengo tiempo para dedicarle.",
    a: "Pierdes más tiempo del que crees haciendo cosas sin criterio: viendo vídeos en YouTube, copiando estrategias de otros, probando cosas que no funcionan. Aquí, en 90 días, sales con todo lo que sola te costaría años montar. Dejas de perder tiempo, no le añades más.",
  },
  {
    q: "No sé nada de IA ni se me da bien la tecnología.",
    a: "No necesitas ser técnica. Te enseño desde cero, paso a paso, con lo que de verdad sirve para tu negocio. La IA es precisamente lo que hace que no tengas que ser técnica: hace el trabajo pesado por ti. Si sabes usar WhatsApp, puedes con esto.",
  },
  {
    q: "No tengo muy claro qué vender.",
    a: "Perfecto, porque la Fórmula es exactamente para eso. Empezamos por tu Plan de Negocio y tu Oferta: qué vendes, a quién y a qué precio. Salimos de la dispersión y nos centramos en un solo programa de más de 2.000€ que puedas vender con orgullo.",
  },
  {
    q: "¿90 días van a ser suficientes?",
    a: "Sí, porque el orden está resuelto. La Fórmula define y valida tu programa en las primeras semanas, y la Máquina lo monta a partir de ahí. El trabajo semanal es constante, pero va guiado paso a paso: tu asesora experta bloquea contigo cada activo y la sesión grupal semanal te mantiene en ritmo. Además tienes mínimo 3 meses de soporte tras la construcción.",
  },
  {
    q: "¿En qué se diferencia de Skool, Systeme o Kajabi?",
    a: "Esas plataformas te alquilan una habitación: pagas cada mes, montas tú sola y el espacio nunca es tuyo. En Exponencial construyes tu casa: tu academia, tu página de venta y tu embudo, con ayuda paso a paso, en propiedad y sin comisiones. Y además sales con tu programa validado y vendido, que es lo que ninguna plataforma hace por ti.",
  },
  {
    q: "¿Qué pasa cuando acaban los 90 días y el soporte?",
    a: "Tienes mínimo 3 meses de soporte tras la construcción, y después puedes renovar y quedarte todo el tiempo que quieras, con soporte técnico y estratégico y la comunidad. El objetivo es que te vuelvas autosuficiente y no nos necesites. Y que, aun así, estemos cerca siempre que quieras.",
  },
  {
    q: "¿Y si tengo más de un programa o más de una oferta?",
    a: "Vamos a centrarnos en consolidar y vender una oferta insignia, que es lo que de verdad mueve la aguja. Si tienes varias cosas en marcha, lo vemos caso a caso en la llamada y decidimos juntas cuál priorizar.",
  },
  {
    q: "No sé si esto funcionaría para mi nicho.",
    a: "He trabajado con profesionales de sectores muy distintos: consultoras, coaches, terapeutas, abogadas, especialistas en salud, profesionales que venden incluso en presencial. El método no depende del nicho, depende de que tengas expertise real y clientes a los que servir. Si los tienes, funciona.",
  },
  {
    q: "¿Cómo funciona el proceso para entrar?",
    a: "Rellenas el formulario de compatibilidad (toma 3 minutos). Si encajas, agendamos una llamada para conocernos y ver si tiene sentido trabajar juntas. Si las dos lo vemos claro, entras.",
  },
  {
    q: "¿Voy a facturar 10.000€ con este programa?",
    a: "No te puedo garantizar cifras, nadie honesto lo hace. Lo que garantizo es el activo: tu programa de más de 2.000€ montado y validado con clientes reales, con las primeras ventas que consigues durante el proceso de validación. A partir de ahí tienes la infraestructura, el modelo y la estrategia para escalarlo.",
  },
  {
    q: "¿Y la academia? ¿En qué plataforma la monto?",
    a: "Te enseño a montar tu academia y te doy mi sistema para hacerlo. Y te asesoro en qué herramienta encaja mejor contigo según tu caso: tu propia plataforma, Circle, School o la que sea. No te dejo sola con lo técnico, pero tampoco te obligo a una herramienta concreta.",
  },
  {
    q: "¿Voy a tener que grabarme en video para mi programa?",
    a: "Sí, pero en el momento oportuno. Primero tenemos que validar con un producto mínimo viable que no te cueste meses crear, sino días. Una vez validado, incorporaremos los elementos (videos, ejercicios, plantillas, herramientas de IA) que crean un efecto WOW en tu cliente. Todo está pensado para que no te atasques.",
  },
  {
    q: "¿Tengo que pagar otras aplicaciones aparte?",
    a: "Sí, yo te asesoraré. Vas a necesitar Claude Pro o Max y alguna otra para alojar tu email marketing, academia etc. Esto es un modelo de negocio altamente rentable, en el que tus gastos recurrentes no deberían ser más del 5-10% de tus ingresos.",
  },
  {
    q: "¿Hay opción de pago fraccionado?",
    a: (
      <>
        Sí. Puedes dividir tu inversión en 2, 3 o 4 pagos mensuales con un recargo del 10%:
        <br /><br />
        · Pago único: 3.000€ (sin recargo)<br />
        · 2 pagos: 1.650€<br />
        · 3 pagos: 1.100€<br />
        · 4 pagos: 825€
        <br /><br />
        Todos los precios sin IVA. El fraccionamiento se gestiona en el momento de la aplicación.
      </>
    ),
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="py-24 md:py-32"
      style={{ background: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
    >
      <div className="container-tight">
        <Reveal>
          <p className="mb-10 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-mint">
            Preguntas frecuentes
          </p>
          <h2 className="font-serif text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05] tracking-tight text-primary-foreground max-w-4xl">
            Lo que te estás preguntando.
          </h2>
        </Reveal>

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
