import { useEffect, useRef, useState } from "react";
import { skills } from "@/data/portfolio";

const colorMap: Record<string, string> = {
  rose: "bg-rose",
  lilac: "bg-lilac",
  peach: "bg-peach",
  mint: "bg-mint",
  butter: "bg-butter",
};

export const Skills = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 px-4 bg-soft">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-3">Toolkit</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold">Skills & superpowers</h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Things I've spent enough late nights with to call them friends.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {skills.map((s, i) => (
            <div
              key={s.name}
              className="group bg-card rounded-2xl p-5 shadow-card hover-lift"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-display font-medium">{s.name}</span>
                <span className="text-xs text-muted-foreground tabular-nums">{s.level}%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                <div
                  className={`h-full rounded-full ${colorMap[s.color]} transition-all duration-1000 ease-out`}
                  style={{ width: visible ? `${s.level}%` : "0%" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
