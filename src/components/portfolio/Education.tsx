import { GraduationCap, Trophy } from "lucide-react";
import { education, achievements } from "@/data/portfolio";

export const Education = () => (
  <section id="education" className="py-24 px-4">
    <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
      {/* Education */}
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-3">Education</p>
        <h2 className="font-display text-4xl md:text-5xl font-semibold mb-8 leading-tight">
          Where I've <em className="font-serif italic font-normal text-gradient">studied</em>.
        </h2>
        <div className="space-y-4">
          {education.map((e) => (
            <div key={e.school} className="bg-card rounded-2xl p-5 shadow-card hover-lift flex gap-4">
              <div className="grid place-items-center h-11 w-11 rounded-xl bg-lilac shrink-0">
                <GraduationCap className="h-5 w-5 text-lilac-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 flex-wrap">
                  <h3 className="font-display font-semibold leading-tight">{e.school}</h3>
                  <span className="text-xs text-muted-foreground shrink-0">{e.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{e.degree}</p>
                <p className="text-sm font-medium text-primary mt-1">{e.score}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-3">Achievements</p>
        <h2 className="font-display text-4xl md:text-5xl font-semibold mb-8 leading-tight">
          Wins worth <em className="font-serif italic font-normal text-gradient">celebrating</em>.
        </h2>
        <div className="space-y-3">
          {achievements.map((a, i) => {
            const tints = ["bg-rose", "bg-peach", "bg-mint", "bg-butter"];
            return (
              <div key={i} className={`${tints[i % 4]} rounded-2xl p-5 hover-lift flex gap-4`}>
                <Trophy className="h-5 w-5 shrink-0 mt-0.5 text-foreground/70" />
                <p className="text-sm leading-relaxed">{a}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);
