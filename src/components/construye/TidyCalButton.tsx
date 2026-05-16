import { useEffect, useRef, useState, ReactNode } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

let scriptInjected = false;

interface Props {
  children: ReactNode;
  className?: string;
}

export const TidyCalButton = ({ children, className }: Props) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    if (!scriptInjected) {
      const s = document.createElement("script");
      s.src = "https://asset-tidycal.b-cdn.net/js/embed.js";
      s.async = true;
      document.body.appendChild(s);
      scriptInjected = true;
    } else {
      // re-trigger embed render
      // @ts-expect-error tidycal global
      if (window.TidyCal && window.TidyCal.renderEmbeds) window.TidyCal.renderEmbeds();
    }
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={className ?? "btn-mint-lg !text-base"}
      >
        {children}
      </button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogTitle className="sr-only">Reserva una llamada de exploración</DialogTitle>
          <div ref={containerRef}>
            <div className="tidycal-embed" data-path="mariagarai/exploracion"></div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
