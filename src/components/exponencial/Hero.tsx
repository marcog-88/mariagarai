import expoMockup from "@/assets/exponencial-hero.webp";
import expoMockupMobile from "@/assets/exponencial-premium-card.webp";

const TIDYCAL = "https://tidycal.com/mariagarai/exploracion";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative pt-20 md:pt-28 lg:pt-36 pb-20 md:pb-24 lg:pb-36 overflow-hidden"
      style={{ background: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 65% at 92% 8%, hsl(var(--mint) / 0.18), transparent 70%)",
        }}
      />
      <div className="container-tight relative">
        <div className="max-w-5xl flex flex-col md:block">
          <div
            className="animate-fade-up mb-4 md:mb-14 order-[-2] md:order-none inline-flex items-center gap-2.5 self-start rounded-full px-4 py-1.5 text-[11px] md:text-xs uppercase tracking-[0.24em] text-white/90"
            style={{
              border: "1px solid rgba(147,120,254,0.5)",
              background: "rgba(147,120,254,0.08)",
            }}
          >
            <span className="badge-pulse-dot rounded-full bg-[#9378fe]" style={{ width: 8, height: 8 }} aria-hidden />
            EXPONENCIAL · 90 DÍAS
          </div>
          <h1
            className="animate-fade-up mt-6 md:mt-0 font-serif text-[2rem] md:text-[clamp(2.75rem,6vw,5rem)] leading-[1.15] md:leading-[1.05] tracking-tight text-primary-foreground"
            style={{ animationDelay: "120ms" }}
          >
            Monta y vende tu programa de formación online{" "}
            <em className="font-serif italic text-mint">en 90 días.</em>
          </h1>
          <p
            className="animate-fade-up mt-10 text-sm md:text-base lg:text-xl text-primary-foreground/80 leading-relaxed max-w-4xl"
            style={{ animationDelay: "240ms" }}
          >
            Para profesionales con un conocimiento valioso: sales con tu oferta, tu academia, tu página de venta y tu embudo montados, validados con clientes reales y en propiedad. Sin pagar comisiones a plataformas ni agencias.
          </p>

          {/* Hero mockup — below headline on mobile */}
          <div
            className="animate-fade-up mt-12 md:mt-14 mx-auto"
            style={{ maxWidth: "1000px", animationDelay: "400ms" }}
          >
            {/* Mobile: product shot — readable at small sizes */}
            <img
              src={expoMockupMobile}
              alt="Exponencial: tu programa online montado en 90 días."
              className="md:hidden w-full rounded-2xl object-cover"
              style={{ boxShadow: "0 30px 80px -30px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.06)" }}
              loading="eager"
            />
            {/* Desktop: full collage */}
            <img
              src={expoMockup}
              alt="Exponencial: tu academia, tu página de venta, tu embudo y tu CRM montados con IA."
              className="hidden md:block w-full rounded-2xl object-cover"
              style={{ boxShadow: "0 30px 80px -30px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.06)" }}
              loading="eager"
            />
          </div>

          <div
            className="animate-fade-up flex flex-col-reverse md:flex-row md:items-center gap-4 md:gap-8 mt-12"
            style={{ animationDelay: "520ms" }}
          >
            <a
              href={TIDYCAL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-mint-lg !text-base md:!text-lg w-full md:w-auto justify-center self-start md:self-auto whitespace-nowrap border-2 border-[#0c0d0e] !text-[#0c0d0e]"
              style={{
                boxShadow:
                  "4px 4px 0 0 #0c0d0e, 8px 8px 28px rgba(147, 120, 254, 0.6), 14px 14px 56px rgba(147, 120, 254, 0.35)",
              }}
            >
              Comprueba si encajas
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
