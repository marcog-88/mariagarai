import { useState, useRef, useEffect } from "react";

type CalendarEvent = {
  title: string;
  startIso: string;
  endIso?: string;
  location?: string;
  description?: string;
};

function toICSDate(iso: string): string {
  return iso.replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}

function buildICS(ev: CalendarEvent): string {
  const start = toICSDate(ev.startIso);
  const end = ev.endIso
    ? toICSDate(ev.endIso)
    : toICSDate(new Date(new Date(ev.startIso).getTime() + 60 * 60 * 1000).toISOString());

  const joinLine = ev.location ? `\nÚnete aquí: ${ev.location}` : "";
  const desc = ((ev.description || "") + joinLine).trim();

  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Exponencial//AnadirAlCalendario//ES",
    "BEGIN:VEVENT",
    `UID:${start}-${Math.random().toString(36).slice(2)}@exponencial`,
    `DTSTAMP:${toICSDate(new Date().toISOString())}`,
    `DTSTART:${start}`,
    `DTEND:${end}`,
    `SUMMARY:${ev.title}`,
    desc ? `DESCRIPTION:${desc.replace(/\n/g, "\\n")}` : "",
    ev.location ? `LOCATION:${ev.location}` : "",
    "END:VEVENT",
    "END:VCALENDAR",
  ]
    .filter(Boolean)
    .join("\r\n");

  return lines;
}

function googleUrl(ev: CalendarEvent): string {
  const start = toICSDate(ev.startIso);
  const end = ev.endIso
    ? toICSDate(ev.endIso)
    : toICSDate(new Date(new Date(ev.startIso).getTime() + 60 * 60 * 1000).toISOString());
  const joinLine = ev.location ? `\nÚnete aquí: ${ev.location}` : "";
  const details = ((ev.description || "") + joinLine).trim();
  const p = new URLSearchParams({
    action: "TEMPLATE",
    text: ev.title,
    dates: `${start}/${end}`,
    ...(details && { details }),
    ...(ev.location && { location: ev.location }),
  });
  return `https://calendar.google.com/calendar/render?${p.toString()}`;
}

function outlookUrl(ev: CalendarEvent): string {
  const end = ev.endIso
    ? ev.endIso
    : new Date(new Date(ev.startIso).getTime() + 60 * 60 * 1000).toISOString();
  const joinLine = ev.location ? `\nÚnete aquí: ${ev.location}` : "";
  const body = ((ev.description || "") + joinLine).trim();
  const p = new URLSearchParams({
    path: "/calendar/action/compose",
    rru: "addevent",
    subject: ev.title,
    startdt: ev.startIso,
    enddt: end,
    ...(body && { body }),
    ...(ev.location && { location: ev.location }),
  });
  return `https://outlook.live.com/calendar/0/deeplink/compose?${p.toString()}`;
}

function downloadICS(ev: CalendarEvent) {
  const content = buildICS(ev);
  const blob = new Blob([content], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${ev.title.replace(/\s+/g, "-").toLowerCase()}.ics`;
  a.click();
  URL.revokeObjectURL(url);
}

export function AnadirAlCalendario({ event }: { event: CalendarEvent }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onOutside);
    return () => document.removeEventListener("mousedown", onOutside);
  }, []);

  return (
    <div ref={ref} className="relative inline-block mt-5">
      <button
        onClick={() => setOpen((v) => !v)}
        className="btn-primary flex items-center gap-2 w-full justify-center"
      >
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
          <rect x="1" y="2.5" width="13" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
          <path d="M1 6.5h13" stroke="currentColor" strokeWidth="1.3"/>
          <path d="M4.5 1v3M10.5 1v3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        </svg>
        Añadir al calendario
      </button>

      {open && (
        <div className="absolute left-0 right-0 mt-2 bg-background border border-border rounded-xl shadow-lg py-1 z-50">
          <a
            href={googleUrl(event)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-foreground/70 hover:bg-muted hover:text-foreground transition-colors"
          >
            Google Calendar
          </a>
          <a
            href={outlookUrl(event)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-foreground/70 hover:bg-muted hover:text-foreground transition-colors"
          >
            Outlook / Microsoft 365
          </a>
          <button
            onClick={() => { downloadICS(event); setOpen(false); }}
            className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-foreground/70 hover:bg-muted hover:text-foreground transition-colors"
          >
            Apple Calendar (.ics)
          </button>
        </div>
      )}
    </div>
  );
}
