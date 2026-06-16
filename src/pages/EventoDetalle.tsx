import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { Video, Users, Linkedin, MessageCircle, Link as LinkIcon } from "lucide-react";
import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";
import { Cover, TagPill } from "@/components/eventos/EventCard";
import { RegistrationForm } from "@/components/eventos/RegistrationForm";
import mariaFallback from "@/assets/maria-profile-zoom.jpg";
import {
  fetchEventBySlug,
  fetchEventosPageSettings,
  formatEventLong,
  type EventRow,
} from "@/lib/eventos";

const APRENDIZAJES = [
  "Cómo validar tu primer servicio sin audiencia ni equipo.",
  "El criterio para poner precio y cerrar tu primera venta.",
  "Qué hacer (y qué evitar) en tus primeros meses como founder.",
];

const ShareButtons = ({ title }: { title: string }) => {
  const url = typeof window !== "undefined" ? window.location.href : "";
  const linkedin = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
  const whatsapp = `https://wa.me/?text=${encodeURIComponent(`${title} — ${url}`)}`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast.success("Enlace copiado");
    } catch {
      toast.error("No se pudo copiar el enlace");
    }
  };

  const cls =
    "inline-flex h-9 w-9 items-center justify-center rounded-full bg-foreground/8 text-foreground/50 transition-colors hover:bg-foreground/12 hover:text-foreground";

  return (
    <div className="flex items-center gap-2">
      <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="Compartir en LinkedIn" className={cls}>
        <Linkedin className="h-4 w-4" />
      </a>
      <a href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Compartir por WhatsApp" className={cls}>
        <MessageCircle className="h-4 w-4" />
      </a>
      <button type="button" onClick={copy} aria-label="Copiar enlace" className={cls}>
        <LinkIcon className="h-4 w-4" />
      </button>
    </div>
  );
};

const EventoDetalle = () => {
  const { slug = "" } = useParams();

  const { data: settings } = useQuery({
    queryKey: ["eventos", "page-settings"],
    queryFn: fetchEventosPageSettings,
  });

  const { data: event, isLoading, isError } = useQuery<EventRow | null>({
    queryKey: ["eventos", "event", slug],
    queryFn: () => fetchEventBySlug(slug),
    enabled: !!slug,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    if (event) document.title = `${event.title} · María Garaí`;
  }, [event]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Nav />
        <div className="container-tight pt-32 text-foreground/50">Cargando evento…</div>
      </div>
    );
  }

  if (isError || !event) {
    return (
      <div className="min-h-screen bg-background">
        <Nav />
        <div className="container-tight pt-32 pb-20 text-center">
          <h1 className="display-md text-foreground">Evento no encontrado</h1>
          <p className="mt-3 text-foreground/60">Puede que ya no esté disponible.</p>
          <Link to="/eventos" className="btn-primary mt-6 inline-flex">
            Ver todos los eventos
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const guests = event.guest_count ?? 0;

  return (
    <div id="top" className="min-h-screen bg-background">
      <Nav forceLight />

      <section className="bg-[#f9f9f7] border-b border-border pt-24 pb-6 lg:pb-14">
        <div className="container-tight">
          <Link to="/eventos" className="text-sm text-foreground/50 transition-colors hover:text-foreground">
            ← Todos los eventos
          </Link>

          {/* Cover — full-width below title on mobile */}
          <div className="mt-4 lg:hidden w-2/3 aspect-square overflow-hidden rounded-xl ring-1 ring-border">
            <Cover event={event} />
          </div>

          <div className="mt-6 grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_22rem]">
            <div>
              {event.tag && <TagPill tag={event.tag} />}
              <h1 className="mt-3 display-md text-foreground">{event.title}</h1>

              <p className="mt-4 text-lg text-foreground/70">{formatEventLong(event.event_date)}</p>

              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-foreground/55">
                {event.platform && (
                  <span className="inline-flex items-center gap-1.5">
                    <Video className="h-4 w-4" /> {event.platform} — online
                  </span>
                )}
                <span className="inline-flex items-center gap-1.5">
                  <Users className="h-4 w-4" />
                  {guests > 0 ? `${guests} personas ya apuntadas` : "Sé la primera en apuntarte"}
                </span>
              </div>

              <div className="mt-4 hidden lg:flex">
                <ShareButtons title={event.title} />
              </div>
            </div>

            {/* Cover — desktop right column */}
            <div className="hidden lg:block aspect-square overflow-hidden rounded-xl ring-1 ring-border">
              <Cover event={event} />
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <main className="container-tight py-12 md:py-16">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_22rem]">
          <div className="space-y-12">
            {/* About the event */}
            <section>
              <h2 className="font-serif text-2xl text-foreground">Sobre el evento</h2>
              {event.description && (
                <p className="mt-3 text-lg leading-relaxed text-foreground/75">{event.description}</p>
              )}
              <h3 className="mt-8 font-serif text-xl text-foreground">Lo que vas a aprender</h3>
              <ul className="mt-3 space-y-2">
                {APRENDIZAJES.map((item) => (
                  <li key={item} className="flex gap-3 text-foreground/75">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* About María */}
            <section className="flex items-start gap-4 border-t border-border pt-10">
              <img
                src={settings?.profile_image_url || mariaFallback}
                alt="María Garaí"
                className="h-16 w-16 shrink-0 rounded-2xl object-cover ring-1 ring-border"
              />
              <div>
                <h2 className="font-serif text-xl text-foreground">Sobre María</h2>
                <p className="mt-1 text-foreground/75">
                  Mentora del Método Exponencial. Ex ONU · P&amp;G · startups internacionales.
                </p>
              </div>
            </section>
          </div>

          {/* Registration — sticky on desktop, below content on mobile */}
          <div className="lg:sticky lg:top-24">
            <RegistrationForm event={event} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EventoDetalle;
