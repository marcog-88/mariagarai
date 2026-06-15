import { useState } from "react";
import mariaCafe from "@/assets/maria-cafe.png";
import { Reveal } from "./Reveal";

const SUBSCRIBE_URL =
  "https://whrkikscasyanowzncmm.supabase.co/functions/v1/subscribe";

type Status = "idle" | "loading" | "success" | "error";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(SUBSCRIBE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          source: "website",
          tags: ["newsletter"],
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="newsletter"
      className="py-24 md:py-32 border-t border-border bg-secondary/40"
    >
      <div className="container-tight">
        {/* Headline + subheadline — full width */}
        <Reveal>
          <p className="mb-10 text-xs md:text-sm font-medium uppercase tracking-[0.24em] text-accent">
            Hazte Grande · Newsletter
          </p>
          <h2 className="display-md whitespace-normal md:whitespace-nowrap">
            Aprende a construir tu{" "}
            <br className="md:hidden" />
            <span className="font-serif italic text-accent">negocio</span>{" "}
            con <span className="font-serif italic text-accent">IA</span>.
          </h2>
          <p className="mt-8 text-lg md:text-xl text-foreground/75 leading-relaxed max-w-4xl">
            Cada semana escribo sobre monetización, redes que venden y la IA como socia.
            Destripo la trastienda de mi negocio y entrevisto a otros founders que se
            hacen grandes.
          </p>
        </Reveal>

        {/* Form on left, mockups on right — beneath subheadline */}
        <div className="mt-16 grid md:grid-cols-12 gap-12 md:gap-16 items-stretch">
          <Reveal variant="left" delay={120} className="md:col-span-6 flex justify-center md:justify-start">
            <div className="w-full h-full relative mx-auto md:mx-0">
              <div
                className="relative rounded-2xl overflow-hidden bg-white border border-gray-200 w-full h-full flex flex-col items-center justify-center gap-3 px-6 py-10 text-center min-h-[260px]"
                style={{
                  boxShadow:
                    "0 20px 40px -20px rgba(139,92,246,0.35), 0 8px 24px -12px rgba(139,92,246,0.2), 0 0 0 1px rgba(139,92,246,0.06)",
                }}
              >
                <p className="font-bold text-xl text-foreground">Hazte · Grande</p>
                <p className="text-sm text-foreground/60 max-w-xs leading-relaxed">
                  Ponte incómoda, esto va de crecer. Guía semanal sobre negocio con IA.
                </p>
                <p className="text-xs italic text-foreground/40">By Maria Garai</p>

                {status === "success" ? (
                  <p className="mt-3 text-sm font-medium text-foreground max-w-xs">
                    ¡Ya estás dentro! Revisa tu bandeja de entrada.
                  </p>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-xs mt-2 flex flex-col gap-2"
                  >
                    <div className="flex flex-col sm:flex-row gap-2">
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Tu email"
                        className="flex-1 rounded border border-border px-3 py-2 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-accent/40"
                      />
                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full sm:w-auto rounded px-4 py-2 text-sm text-white font-medium disabled:opacity-70"
                        style={{ background: "#9378fe" }}
                      >
                        {status === "loading" ? "Enviando…" : "Suscribirme"}
                      </button>
                    </div>
                    {status === "error" && (
                      <p className="text-xs text-red-500">
                        Algo fue mal. Inténtalo de nuevo.
                      </p>
                    )}
                  </form>
                )}
              </div>
            </div>
          </Reveal>

          {/* María writing — real, warm, weekly */}
          <Reveal variant="right" delay={250} className="hidden md:block md:col-span-6">
            <div className="rounded-2xl overflow-hidden h-full">
              <img
                src={mariaCafe}
                alt="María Garaí escribiendo su newsletter desde una cafetería"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
