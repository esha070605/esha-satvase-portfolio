import { Award, ExternalLink } from "lucide-react";
import { certifications } from "@/data/portfolio";

export const Certifications = () => (
  <section id="certs" className="py-24 px-4">
    <div className="max-w-6xl mx-auto">
      <div className="mb-12">
        <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-3">Always learning</p>
        <h2 className="font-display text-4xl md:text-5xl font-semibold">Certifications</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certifications.map((c) => (
          <div
            key={c.id}
            className="group relative rounded-2xl p-5 bg-card border border-border hover-lift cursor-pointer"
          >
            <div className="flex items-start gap-4">
              <div className="grid place-items-center h-11 w-11 rounded-xl bg-gradient-primary text-primary-foreground shadow-soft shrink-0">
                <Award className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-display font-semibold leading-tight">{c.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{c.issuer}</p>
                <div className="flex items-center justify-between mt-3 text-xs text-muted-foreground">
                  <span className="font-mono">{c.id}</span>
                  <span>{c.year}</span>
                </div>
              </div>
            </div>
            <ExternalLink className="absolute top-4 right-4 h-4 w-4 opacity-0 group-hover:opacity-100 text-primary transition" />
          </div>
        ))}
      </div>
    </div>
  </section>
);
