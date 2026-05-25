const items = [
  "El primero es dispersión. El segundo es distribución.",
  "Tu negocio necesita puentes que te conecten con potenciales clientes.",
  "Activos optimizados para vender, no para conseguir likes.",
  "Aquí entras con dos canales dormidos y sales con un sistema que abre carteras y oportunidades.",
];

export const ParaEso = () => {
  return (
    <section
      className="py-24 md:py-32"
      style={{ background: "#f0eeeb", color: "#0c0d0e" }}
    >
      <div className="container-tight">
        <p className="mb-10 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-mint">
          Para eso existe Redes que Venden
        </p>
        <h2 className="font-serif text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05] tracking-tight text-foreground max-w-5xl">
          Hay una diferencia entre estar en redes y usar las redes como{" "}
          <em className="font-serif italic text-mint">activos de autoridad y ventas.</em>
        </h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((it, i) => (
            <div key={i} className="border-l-2 border-mint pl-6 py-2">
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">{it}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-lg md:text-xl text-foreground/75 leading-relaxed max-w-3xl">
          No es publicar a ver qué pasa. Es construir un sistema: contenido que posiciona, prospección que conecta, y email que convierte. Una máquina que funciona con 3 horas semanales.
        </p>

        <p className="mt-8 font-serif italic text-2xl md:text-4xl text-mint">
          Eso son Redes que Venden.
        </p>
      </div>
    </section>
  );
};
