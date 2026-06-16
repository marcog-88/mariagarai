import { Link } from "react-router-dom";
import { Video, Users } from "lucide-react";
import mariaAvatar from "@/assets/maria-profile-zoom.jpg";
import { formatTime, type EventRow } from "@/lib/eventos";

/** Hot-pink filter/category pill, e.g. "Exponencial". */
export const TagPill = ({ tag, className = "" }: { tag: string; className?: string }) => (
  <span
    className={`inline-flex items-center rounded-full bg-hot-pink px-2.5 py-0.5 text-xs font-medium text-hot-pink-foreground ${className}`}
  >
    {tag}
  </span>
);

/** Cover image with a branded purple-gradient placeholder when none is set. */
export const Cover = ({ event, className = "" }: { event: EventRow; className?: string }) => {
  if (event.cover_image_url) {
    return (
      <img
        src={event.cover_image_url}
        alt={event.title}
        loading="lazy"
        className={`h-full w-full object-cover ${className}`}
      />
    );
  }
  return (
    <div
      className={`flex h-full w-full items-center justify-center bg-gradient-to-br from-accent/80 via-accent/40 to-hot-pink/30 ${className}`}
      aria-hidden
    >
      <span className="font-serif text-2xl text-white/90">{event.tag ?? "Exponencial"}</span>
    </div>
  );
};

type Props = { event: EventRow; view: "card" | "list" };

export const EventCard = ({ event, view }: Props) => {
  const time = formatTime(event.event_date);
  const guests = event.guest_count ?? 0;

  if (view === "list") {
    return (
      <Link
        to={`/eventos/${event.slug}`}
        className="group flex items-center gap-4 rounded-lg border border-border bg-card px-4 py-3 transition-colors hover:border-accent/60"
      >
        <span className="w-16 shrink-0 text-sm font-medium tabular-nums text-foreground/70">{time}</span>
        <div className="min-w-0 flex-1">
          <h3 className="truncate font-serif text-lg leading-snug text-foreground transition-colors group-hover:text-accent">
            {event.title}
          </h3>
          <p className="mt-0.5 flex items-center gap-2 text-xs text-foreground/55">
            {event.platform && (
              <span className="inline-flex items-center gap-1">
                <Video className="h-3.5 w-3.5" /> {event.platform}
              </span>
            )}
            <span className="inline-flex items-center gap-1">
              <Users className="h-3.5 w-3.5" /> {guests}
            </span>
          </p>
        </div>
        {event.tag && <TagPill tag={event.tag} />}
      </Link>
    );
  }

  // Card view (default) — Luma-style with cover image.
  return (
    <Link
      to={`/eventos/${event.slug}`}
      className="group grid grid-cols-1 overflow-hidden rounded-xl border border-border bg-card transition-all hover:-translate-y-0.5 hover:border-accent/60 hover:shadow-[0_14px_36px_-18px_hsl(var(--accent)/0.5)] sm:grid-cols-[1fr_9rem]"
    >
      <div className="order-2 p-5 sm:order-1">
        <p className="text-sm font-medium tabular-nums text-foreground/70">{time}</p>
        <h3 className="mt-1 font-serif text-xl leading-snug text-foreground transition-colors group-hover:text-accent">
          {event.title}
        </h3>
        <div className="mt-2 flex items-center gap-2">
          <img src={mariaAvatar} alt="" className="h-5 w-5 rounded-full object-cover" />
          <span className="text-sm text-foreground/60">Por María Garaí</span>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-foreground/55">
          {event.platform && (
            <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2 py-0.5">
              <Video className="h-3.5 w-3.5" /> {event.platform}
            </span>
          )}
          {event.tag && <TagPill tag={event.tag} />}
          <span className="inline-flex items-center gap-1">
            <Users className="h-3.5 w-3.5" /> {guests}
          </span>
        </div>
      </div>
      <div className="order-1 aspect-square sm:order-2 sm:aspect-square overflow-hidden">
        <Cover event={event} />
      </div>
    </Link>
  );
};
