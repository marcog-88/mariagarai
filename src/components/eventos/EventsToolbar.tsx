import { LayoutGrid, List, Search } from "lucide-react";

type Props = {
  view: "card" | "list";
  onViewChange: (v: "card" | "list") => void;
};

export const EventsToolbar = ({ view, onViewChange }: Props) => {
  const btn = (active: boolean) =>
    `inline-flex h-8 w-8 items-center justify-center rounded-md transition-colors ${
      active ? "bg-accent text-accent-foreground" : "text-foreground/50 hover:text-foreground"
    }`;

  return (
    <div className="flex items-center justify-between">
      <h2 className="font-serif text-2xl text-foreground">Eventos</h2>

      <div className="flex items-center gap-1">
        {/* Search — visual placeholder for parity with Luma (no-op in v1). */}
        <button
          type="button"
          aria-label="Buscar (próximamente)"
          className="inline-flex h-8 w-8 items-center justify-center rounded-md text-foreground/40"
          tabIndex={-1}
        >
          <Search className="h-4 w-4" />
        </button>

        <div className="ml-1 flex items-center gap-1 rounded-lg border border-border p-0.5">
          <button
            type="button"
            aria-label="Vista de tarjetas"
            aria-pressed={view === "card"}
            className={btn(view === "card")}
            onClick={() => onViewChange("card")}
          >
            <LayoutGrid className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Vista de lista"
            aria-pressed={view === "list"}
            className={btn(view === "list")}
            onClick={() => onViewChange("list")}
          >
            <List className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
