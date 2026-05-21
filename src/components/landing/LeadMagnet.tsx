import { useState } from "react";

export const LeadMagnet = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="py-24 md:py-32 border-t border-border bg-[#f9f9f7]">
      <div className="container-tight">
        <p
          className="mb-8 text-xs md:text-sm font-medium uppercase tracking-[0.24em]"
          style={{ color: "#9378fe" }}
        >
          Empieza aquí
        </p>
        <h2 className="display-md">
          Diseña tu{" "}
          <span className="font-serif italic" style={{ color: "#9378fe" }}>
            Carrera Moderna
          </span>
        </h2>
        <p className="mt-6 text-lg md:text-xl text-foreground/75 leading-relaxed max-w-2xl">
          La herramienta gratuita para profesionales con trayectoria corporativa que
          quieren monetizar su conocimiento. Descubre qué puedes vender y a quién.
        </p>
        <form
          className="mt-10 flex flex-col sm:flex-row gap-3 max-w-lg"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            required
            className="flex-1 rounded-full border border-border bg-white px-5 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-[#9378fe]"
          />
          <button
            type="submit"
            className="rounded-full px-6 py-3 text-sm font-medium text-white whitespace-nowrap transition-opacity hover:opacity-90"
            style={{ background: "#9378fe" }}
          >
            Lo quiero gratis →
          </button>
        </form>
        <p className="mt-3 text-xs text-foreground/50">
          Sin spam. Solo lo que importa.
        </p>
      </div>
    </section>
  );
};
