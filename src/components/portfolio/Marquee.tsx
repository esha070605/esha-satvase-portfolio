const words = ["Design", "✦", "Engineering", "✦", "Community", "✦", "Curiosity", "✦", "Storytelling", "✦", "Joy", "✦"];

export const Marquee = () => (
  <section aria-hidden className="py-12 overflow-hidden bg-foreground text-background">
    <div className="flex animate-marquee whitespace-nowrap">
      {[...Array(2)].map((_, i) => (
        <div key={i} className="flex shrink-0 items-center gap-10 pr-10">
          {words.map((w, j) => (
            <span key={j} className="font-display text-4xl md:text-6xl font-semibold tracking-tight">
              {w}
            </span>
          ))}
        </div>
      ))}
    </div>
  </section>
);
