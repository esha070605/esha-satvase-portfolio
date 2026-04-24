import { stats } from "@/data/portfolio";

export const About = () => (
  <section id="about" className="py-24 px-4">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">About</p>
        <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
          A student with a builder's heart and a designer's eye.
        </h2>
        <p className="mt-6 text-muted-foreground leading-relaxed">
          I'm a CS undergrad who fell in love with the intersection of design and engineering.
          I spend my days writing TypeScript, sketching interfaces in Figma, and rallying
          friends to ship side projects nobody asked for.
        </p>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          When I'm not coding, you'll find me organizing campus hackathons, mentoring juniors,
          or hunting for the city's best matcha.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {stats.map((s, i) => {
          const colors = ["bg-rose", "bg-peach", "bg-lilac", "bg-mint"];
          return (
            <div
              key={s.label}
              className={`${colors[i]} rounded-3xl p-6 hover-lift cursor-default`}
            >
              <p className="font-display text-4xl md:text-5xl font-semibold">{s.value}</p>
              <p className="mt-2 text-sm text-foreground/70">{s.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);
