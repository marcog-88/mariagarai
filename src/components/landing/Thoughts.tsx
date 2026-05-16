export const Thoughts = () => {
  return (
    <section className="py-24 md:py-32 border-t border-border text-foreground" style={{ backgroundColor: "#f9f9f7" }}>
      <div className="container-tight">
        <div className="text-left">
          <p className="mb-16 md:mb-20 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-accent">
            Esto es lo que quieres
          </p>

          <div className="font-serif text-3xl md:text-[2.75rem] leading-[1.3] tracking-tight text-foreground space-y-6">
            <p>Sacar todas mis ideas locas de la cabeza.</p>
            <p>Filtrarlas. Acotarlas. Claridad total.</p>
            <p>Un servicio que funciona.</p>
            <p>Listo para salir y vender.</p>
            <p>Ahorrar un montón de dinero.</p>
            <p>No tener que contratar a 17 personas distintas para lo mismo.</p>
            <p>Dejar de estar atascada.</p>
            <p>
              <span
                className="px-2"
                style={{ backgroundColor: "rgba(147, 120, 254, 0.4)", boxDecorationBreak: "clone", WebkitBoxDecorationBreak: "clone" }}
              >
                Algo real que me pague.
              </span>
            </p>
            <p>Independencia. Ser mi propia jefa.</p>
            <p className="font-bold text-accent">Construir algo que sea mío.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
