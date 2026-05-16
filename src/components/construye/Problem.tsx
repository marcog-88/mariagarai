export const Problem = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container-tight">
        <p className="mb-10 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-foreground">
          El problema
        </p>
        <h2 className="font-serif text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05] tracking-tight max-w-4xl">
          Tu negocio funciona. Pero se siente a medio montar y atado con pinzas.
        </h2>

        <div className="mt-16 max-w-3xl space-y-8 text-sm md:text-base leading-relaxed text-foreground/80">
          <p>
            Tienes clientes que te pagan. Bien. Pero cuando alguien te pregunta
            "¿dónde puedo ver lo que haces?" no tienes una web que enseñar. Cuando quieres
            captar nuevos clientes no tienes un embudo que los recoja. Cuando un cliente te
            contrata no tienes un sistema detrás que lo sostenga.
          </p>
          <p>
            Todo es manual. Todo depende de ti. Tus escaparates no están a la altura de lo que
            ofreces.
          </p>
          <p>
            Has intentado montarlo por tu cuenta. Has probado algunas herramientas. Has hablado
            con ChatGPT. Has visto tutoriales. Pero no has conseguido que todo funcione junto
            de forma profesional.
          </p>
          <p>
            Y eso se nota. Lo notas tú cada vez que envías un PDF por WhatsApp en lugar de
            tener una sales page. Lo nota tu cliente cuando todo pasa por mensajes en vez de
            por un portal profesional. Lo notan tus leads cuando buscan tu web y no la
            encuentran.
          </p>
        </div>
      </div>
    </section>
  );
};
