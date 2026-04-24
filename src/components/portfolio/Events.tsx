import { useState } from "react";
import { Calendar, Users, X } from "lucide-react";
import { events } from "@/data/portfolio";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const bgMap: Record<string, string> = {
  rose: "bg-rose",
  peach: "bg-peach",
  lilac: "bg-lilac",
  mint: "bg-mint",
};

export const Events = () => {
  const [open, setOpen] = useState<number | null>(null);
  const active = open !== null ? events[open] : null;

  return (
    <section id="events" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-3">Clubs & community</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold">
              Events I helped bring to life
            </h2>
          </div>
        </div>

        {/* Bento grid */}
        <div className="grid md:grid-cols-6 auto-rows-[minmax(200px,auto)] gap-4">
          {events.map((e, i) => {
            const span = [
              "md:col-span-4",
              "md:col-span-2",
              "md:col-span-2",
              "md:col-span-4",
            ][i % 4];
            return (
              <button
                key={e.title}
                onClick={() => setOpen(i)}
                className={`${bgMap[e.color]} ${span} text-left rounded-3xl p-6 md:p-8 relative overflow-hidden hover-lift group`}
              >
                <div className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full bg-white/60 text-foreground/70">
                  {e.date}
                </div>
                <p className="text-xs uppercase tracking-wider text-foreground/60 mb-2">{e.club}</p>
                <h3 className="font-display text-2xl md:text-3xl font-semibold mb-2 pr-20">{e.title}</h3>
                <p className="text-sm text-foreground/70 mb-4 line-clamp-2">{e.description}</p>
                <div className="flex items-center gap-4 text-xs text-foreground/70">
                  <span className="inline-flex items-center gap-1.5"><Users className="h-3.5 w-3.5" />{e.role}</span>
                </div>
                <span className="absolute bottom-6 right-6 text-xs font-medium opacity-0 group-hover:opacity-100 transition">
                  View details →
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <Dialog open={open !== null} onOpenChange={(o) => !o && setOpen(null)}>
        <DialogContent className="max-w-lg rounded-3xl">
          {active && (
            <>
              <DialogHeader>
                <p className="text-xs uppercase tracking-wider text-primary font-medium">{active.club}</p>
                <DialogTitle className="font-display text-3xl">{active.title}</DialogTitle>
                <DialogDescription className="flex items-center gap-3 text-sm">
                  <span className="inline-flex items-center gap-1.5"><Calendar className="h-4 w-4" />{active.date}</span>
                  <span className="inline-flex items-center gap-1.5"><Users className="h-4 w-4" />{active.role}</span>
                </DialogDescription>
              </DialogHeader>
              <p className="text-foreground/80 leading-relaxed">{active.description}</p>
              <div className={`${bgMap[active.color]} rounded-2xl p-4`}>
                <p className="text-xs uppercase tracking-wider text-foreground/60 mb-1">Impact</p>
                <p className="font-medium">{active.impact}</p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
