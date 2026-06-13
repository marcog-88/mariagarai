import { groupByDay, type EventRow } from "@/lib/eventos";
import { EventCard } from "./EventCard";

type Props = {
  events: EventRow[];
  view: "card" | "list";
  /** dayKey currently surfaced from a calendar click — highlights that group. */
  highlightKey?: string | null;
};

export const EventList = ({ events, view, highlightKey }: Props) => {
  if (events.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-border bg-card/50 px-6 py-16 text-center">
        <p className="font-serif text-xl text-foreground/70">No hay eventos por aquí todavía.</p>
        <p className="mt-1 text-sm text-foreground/50">Vuelve pronto — publicamos sesiones cada semana.</p>
      </div>
    );
  }

  const groups = groupByDay(events);

  return (
    <div className="space-y-10">
      {groups.map((group) => (
        <section
          key={group.key}
          id={`day-${group.key}`}
          className={`scroll-mt-24 transition-colors ${
            highlightKey === group.key ? "rounded-xl ring-2 ring-accent/50 ring-offset-4 ring-offset-background" : ""
          }`}
        >
          {/* Luma-style day heading with timeline dot */}
          <div className="relative mb-4 flex items-baseline gap-3 pl-6">
            <span
              aria-hidden
              className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-background"
            />
            <span
              aria-hidden
              className="absolute left-[4px] top-5 h-[calc(100%+1.5rem)] w-px bg-border"
            />
            <span className="font-serif text-2xl text-foreground">{group.label.dayNum}</span>
            <span className="text-sm uppercase tracking-wide text-foreground/50">{group.label.month}</span>
            <span className="text-sm capitalize text-foreground/50">{group.label.weekday}</span>
          </div>

          <div className="space-y-3 pl-6">
            {group.events.map((ev: EventRow) => (
              <EventCard key={ev.id} event={ev} view={view} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};
