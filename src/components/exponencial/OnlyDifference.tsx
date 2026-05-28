const pillars = [
  {
    n: "01",
    title: "CLARIDAD",
    body: "Tus habilidades, experiencia y red convertidos en un mapa concreto de vías de ingreso.",
    result: "Sales con un mapa de tu carrera moderna, no con más ideas en la cabeza.",
  },
  {
    n: "02",
    title: "POSICIONAMIENTO",
    body: "Tu ecosistema de ofertas, precios, promesa y narrativa. Lo que te diferencia y por qué te eligen a ti.",
    result: "Sales con una propuesta que se vende sola en 10 segundos.",
  },
  {
    n: "03",
    title: "VENTAS",
    body: "Validamos con personas reales. Cerramos primeras ventas. Hasta que vender se sienta natural.",
    result: "Sales con clientes pagando, no con suposiciones.",
  },
  {
    n: "04",
    title: "ACTIVOS",
    body: "LinkedIn como canal de venta. Substack como canal de autoridad. Web, embudo, lead magnet con IA.",
    result: "Sales con una presencia digital que abre puertas.",
  },
  {
    n: "05",
    title: "SISTEMAS",
    body: "Notion como sistema operativo. Claude como cofundador. Automatizaciones donde tocan.",
    result: "Sales con un negocio que funciona aunque te tomes el lunes libre.",
  },
];

export const OnlyDifference = () => {
  return (
    <section
      className="pt-0 pb-24 md:pb-32"
      style={{ background: "#0c0d0e", color: "#ffffff" }}
    >
      <div className="container-tight">
        <p className="mb-8 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-mint">
          La única diferencia
        </p>
        <h2 className="font-serif text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05] tracking-tight text-white max-w-4xl">
          Por qué yo
        </h2>
        <div className="mt-10 max-w-3xl space-y-6 text-lg text-white/80 leading-relaxed">
          <p>
            Te podría decir que trabajé 10 años en la ONU y el mundo corporativo en 8 países. Que he acompañado a más de 20 clientas. O que mi metodología es la única del mercado hispano que integra IA como infraestructura para negocios unipersonales.
          </p>
          <p>Pero si me preguntas "por qué yo" te diré esto:</p>
          <p>
            Porque he caído en cada trampa de las que tú estás esquivando ahora. Y porque sé exactamente cómo salir de ellas.
          </p>
          <p>
            No me avergüenza haber pasado por cada miseria de emprender. Algunos lo tuvieron fácil. Yo no.
          </p>
          <p>
            Sé todo lo que NO tienes que hacer. Sé lo que NO vende. Sé cómo te saboteas. Las trampas en las que caes y el ruido que te distrae.
          </p>
          <p>
            Trabajar conmigo no tiene escapatoria: voy a derribar cada objeción y obligarte a pensar en grande. Por eso cada hora de estos 4 meses tendrá un impacto exponencial.
          </p>
        </div>

        {/* Method block */}
        <div className="mt-16 max-w-3xl">
          <div className="pt-10">
            <p className="text-xs uppercase tracking-[0.24em] text-mint mb-6">
              EL MÉTODO EXPONENCIAL
            </p>
            <p className="font-serif text-xl md:text-2xl text-white/70 italic mb-12">
              No es una lista de cosas que hacer. Es la secuencia exacta que separa a las que construyen un negocio rentable de las que llevan años intentándolo.
            </p>

            <ol className="mt-10 md:mt-16 space-y-10">
              {pillars.map((p) => (
                <li key={p.n} className="flex gap-6">
                  <span
                    className="font-serif text-3xl flex-shrink-0 leading-none"
                    style={{ color: "#9378fe" }}
                  >
                    {p.n}
                  </span>
                  <div>
                    <h3 className="font-bold text-white text-lg mb-2 tracking-wide">{p.title}</h3>
                    <p className="text-white/75 leading-relaxed">{p.body}</p>
                    <p className="mt-2 text-sm italic text-[#9378fe]">→ {p.result}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <p className="mt-16 font-serif text-xl md:text-2xl italic text-center max-w-3xl mx-auto text-white">
          El efecto exponencial no viene de añadir cosas. Viene de hacer las correctas, en el orden correcto, con alguien con criterio que ya conoce el camino.
        </p>
      </div>
    </section>
  );
};
