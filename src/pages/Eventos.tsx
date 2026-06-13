import { useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";
import { PageHeader } from "@/components/eventos/PageHeader";
import { EventsToolbar } from "@/components/eventos/EventsToolbar";
import { EventList } from "@/components/eventos/EventList";
import { EventCalendar } from "@/components/eventos/EventCalendar";
import { TagPill } from "@/components/eventos/EventCard";
import {
  dayKey,
  fetchEvents,
  fetchEventosPageSettings,
  isPast,
  type EventRow,
} from "@/lib/eventos";

const Eventos = () => {
  const [view, setView] = useState<"card" | "list">("card");
  const [timeframe, setTimeframe] = useState<"upcoming" | "past">("upcoming");
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    document.title = "Eventos · María Garaí";
    window.scrollTo(0, 0);
  }, []);

  // Live clock for the header "Horarios en … · HH:mm" line.
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(id);
  }, []);

  const { data: settings } = useQuery({
    queryKey: ["eventos", "page-settings"],
    queryFn: fetchEventosPageSettings,
  });

  const { data: events = [], isLoading, isError } = useQuery({
    queryKey: ["eventos", "events"],
    queryFn: fetchEvents,
  });

  // Events for the active timeframe (drives both the calendar dots and the list).
  const timeframeEvents = useMemo(
    () =>
      events.filter((e: EventRow) => (timeframe === "past" ? isPast(e.event_date) : !isPast(e.event_date))),
    [events, timeframe],
  );

  // A calendar-day click further narrows the list to that day.
  const listEvents = useMemo(
    () => (selectedKey ? timeframeEvents.filter((e) => dayKey(e.event_date) === selectedKey) : timeframeEvents),
    [timeframeEvents, selectedKey],
  );

  // Reset a stale day filter when switching timeframe.
  useEffect(() => setSelectedKey(null), [timeframe]);

  // Scroll the surfaced day group into view after a calendar click.
  useEffect(() => {
    if (!selectedKey) return;
    document.getElementById(`day-${selectedKey}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [selectedKey]);

  return (
    <div id="top" className="min-h-screen bg-background">
      <Nav />

      <PageHeader settings={settings ?? null} now={now} />

      <main className="container-tight py-10 md:py-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_20rem]">
          {/* Main column — event list */}
          <div>
            <EventsToolbar view={view} onViewChange={setView} />

            <div className="mt-4 mb-8 flex items-center gap-2">
              <TagPill tag="Exponencial" />
              <span className="text-sm text-foreground/45">Sesiones en directo</span>
            </div>

            {isLoading && <p className="text-foreground/50">Cargando eventos…</p>}
            {isError && (
              <p className="text-foreground/50">No hemos podido cargar los eventos. Recarga la página.</p>
            )}
            {!isLoading && !isError && (
              <EventList events={listEvents} view={view} highlightKey={selectedKey} />
            )}
          </div>

          {/* Right column — desktop-only interactive calendar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <EventCalendar
                events={timeframeEvents}
                timeframe={timeframe}
                onTimeframeChange={setTimeframe}
                selectedKey={selectedKey}
                onSelectDay={setSelectedKey}
              />
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Eventos;
