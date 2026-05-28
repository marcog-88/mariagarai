export const Problem = () => {
  return (
    <section className="py-24 md:py-32" style={{ background: "#f9f9f7" }}>
      <div className="container-tight">
        <p className="mb-10 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-foreground">
          El problema
        </p>
        <h2 className="font-serif text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05] tracking-tight max-w-4xl">
          Tú quieres vivir bien de lo tuyo. No quieres ser una mantenida.
        </h2>

        <div className="mt-16 max-w-3xl space-y-8 text-sm md:text-base leading-relaxed text-foreground/80">
          <p>
            No quieres depender de tu pareja. De tus ahorros. Ni de ese trabajo que no te gusta pero te paga.
          </p>
          <p>
            Tienes el potencial. Tienes las ganas. Llevas meses con la idea en la cabeza, probando cosas. Pero no acabas de aterrizar qué vendes, a quién, ni qué pasos dar para convertir todo eso en un negocio que realmente funcione.
          </p>
          <p>
            Todo es más fácil y más difícil que en 2017. Hoy no vale con postear algo en Instagram y esperar que te compren. Pero hoy también, con criterio, sistemas e IA, una persona sola hace en semanas lo que antes requería un equipo y varios años.
          </p>
          <div className="space-y-6">
            <p className="border-l-2 border-[#9378fe] pl-4 font-medium italic">
              😔 Los que siguen cambiando su tiempo por un sueldo y cero libertad. Saben que hay algo más, pero no se atreven.
            </p>
            <p className="border-l-2 border-[#9378fe] pl-4 font-medium italic">
              🔄 Los que se han lanzado pero siguen replicando el modelo antiguo — más horas, más esfuerzo, más cursos, más herramientas. Facturan poco o se queman intentándolo.
            </p>
            <p className="border-l-2 border-[#9378fe] pl-4 font-medium italic">
              🚀 Los que han entendido que el juego cambió. Combinan su experiencia profesional, los sistemas correctos y la IA para construir carreras modernas que facturan en meses, no en años.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
