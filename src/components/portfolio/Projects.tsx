import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";

export const Projects = () => (
  <section id="projects" className="py-24 px-4 bg-soft">
    <div className="max-w-6xl mx-auto">
      <div className="mb-12">
        <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-3">Selected work</p>
        <h2 className="font-display text-4xl md:text-5xl font-semibold">Things I've shipped</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {projects.map((p, i) => {
          const tints = ["bg-rose", "bg-lilac", "bg-peach"];
          return (
            <a
              key={p.title}
              href={p.href}
              className="group relative rounded-3xl p-6 bg-card shadow-card hover-lift overflow-hidden flex flex-col min-h-[260px]"
            >
              <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full ${tints[i]} blur-2xl opacity-70 group-hover:scale-125 transition-transform duration-700`} />
              <span className="text-xs px-2.5 py-1 rounded-full bg-muted self-start">{p.tag}</span>
              <h3 className="font-display text-2xl font-semibold mt-auto pt-8">{p.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{p.desc}</p>
              <ArrowUpRight className="absolute top-6 right-6 h-5 w-5 text-foreground/60 group-hover:text-primary group-hover:rotate-45 transition" />
            </a>
          );
        })}
      </div>
    </div>
  </section>
);
