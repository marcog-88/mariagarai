import { useMemo } from "react";
import { Calendar } from "@/components/ui/calendar";
import { dayKey, type EventRow } from "@/lib/eventos";

type Timeframe = "upcoming" | "past";

type Props = {
  events: EventRow[]; // all active events — dots derive from these (no extra query)
  timeframe: Timeframe;
  onTimeframeChange: (t: Timeframe) => void;
  selectedKey: string | null;
  onSelectDay: (key: string | null) => void;
};

const pad = (n: number) => String(n).padStart(2, "0");
const localKey = (d: Date) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const keyToDate = (key: string) => {
  const [y, m, d] = key.split("-").map(Number);
  return new Date(y, m - 1, d);
};

export const EventCalendar = ({
  events,
  timeframe,
  onTimeframeChange,
  selectedKey,
  onSelectDay,
}: Props) => {
  // Map each event day (visitor zone) to a local Date for react-day-picker.
  const { eventDays, eventKeys, defaultMonth } = useMemo(() => {
    const keys = new Set(events.map((e) => dayKey(e.event_date)));
    const days = Array.from(keys).map(keyToDate);
    const first = events.length ? keyToDate(dayKey(events[0].event_date)) : new Date();
    return { eventDays: days, eventKeys: keys, defaultMonth: first };
  }, [events]);

  const tfBtn = (active: boolean) =>
    `flex-1 rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
      active ? "bg-accent text-accent-foreground" : "text-foreground/55 hover:text-foreground"
    }`;

  return (
    <div className="rounded-xl border border-border bg-card p-2">
      <Calendar
        mode="single"
        showOutsideDays
        defaultMonth={defaultMonth}
        selected={selectedKey ? keyToDate(selectedKey) : undefined}
        onDayClick={(day) => {
          const key = localKey(day);
          if (eventKeys.has(key)) {
            onSelectDay(selectedKey === key ? null : key);
          } else {
            onSelectDay(null);
          }
        }}
        modifiers={{ hasEvent: eventDays }}
        modifiersClassNames={{
          hasEvent:
            "relative font-semibold text-accent after:content-[''] after:absolute after:bottom-1 after:left-1/2 after:h-1.5 after:w-1.5 after:-translate-x-1/2 after:rounded-full after:bg-accent",
        }}
      />

      {selectedKey && (
        <button
          type="button"
          onClick={() => onSelectDay(null)}
          className="mb-2 w-full text-center text-xs text-accent hover:underline"
        >
          Quitar filtro de día
        </button>
      )}

      {/* Upcoming / Past toggle (Luma-style), under the calendar */}
      <div className="mt-1 flex items-center gap-1 rounded-lg border border-border p-0.5">
        <button type="button" className={tfBtn(timeframe === "upcoming")} onClick={() => onTimeframeChange("upcoming")}>
          Próximos
        </button>
        <button type="button" className={tfBtn(timeframe === "past")} onClick={() => onTimeframeChange("past")}>
          Pasados
        </button>
      </div>
    </div>
  );
};
