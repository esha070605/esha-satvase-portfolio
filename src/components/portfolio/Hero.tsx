import { ArrowDown, MapPin } from "lucide-react";
import portrait from "@/assets/portrait.jpg";
import { profile } from "@/data/portfolio";

export const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen pt-32 pb-16 px-4 overflow-hidden grain">
      {/* Aurora + mesh background */}
      <div className="absolute inset-0 bg-mesh -z-10" />
      <div className="absolute -top-1/3 left-1/2 -translate-x-1/2 w-[120vw] h-[120vw] max-w-[1400px] max-h-[1400px] bg-aurora opacity-40 blur-3xl animate-aurora -z-10 rounded-full" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background -z-10" />

      {/* Floating blobs */}
      <div className="absolute top-20 -left-24 w-96 h-96 rounded-full bg-rose/70 blur-3xl animate-blob -z-10" />
      <div className="absolute bottom-10 -right-24 w-[28rem] h-[28rem] rounded-full bg-lilac/70 blur-3xl animate-blob -z-10" style={{ animationDelay: "4s" }} />
      <div className="absolute top-1/2 left-1/3 w-72 h-72 rounded-full bg-peach/60 blur-3xl animate-blob -z-10" style={{ animationDelay: "8s" }} />

      {/* Sparkles */}
      <span className="sparkle top-[15%] left-[10%]" />
      <span className="sparkle top-[25%] right-[15%]" style={{ animationDelay: "1s" }} />
      <span className="sparkle top-[60%] left-[8%]" style={{ animationDelay: "2s" }} />
      <span className="sparkle bottom-[20%] right-[25%]" style={{ animationDelay: "1.5s" }} />
      <span className="sparkle top-[40%] right-[8%]" style={{ animationDelay: "0.5s" }} />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center relative">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Available for collaborations
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight">
            Hi, I'm <span className="text-gradient">{profile.name.split(" ")[0]}</span>.<br />
            I build things <em className="font-serif italic font-normal text-shine">people love</em>.
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            {profile.tagline} I blend design, code, and community — turning ideas into
            shipped products and unforgettable events.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-foreground text-background font-medium hover:bg-primary transition shadow-soft hover:shadow-glow"
            >
              See my work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full glass font-medium hover:bg-white/80 transition"
            >
              Get in touch →
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4" /> {profile.location}
            </span>
            <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
            <span>{profile.role}</span>
          </div>
        </div>

        {/* Portrait card */}
        <div className="relative animate-scale-in" style={{ animationDelay: "0.2s" }}>
          {/* Animated rotating aurora ring behind portrait */}
          <div className="absolute -inset-8 bg-aurora rounded-[2.5rem] blur-2xl opacity-60 animate-aurora" />
          <div className="absolute -inset-2 bg-gradient-primary rounded-[2rem] blur-xl opacity-40 animate-float" />
          <div className="relative rounded-[2rem] overflow-hidden shadow-glow border-2 border-white/80 aspect-[4/5] glass">
            <img
              src={portrait}
              alt={`${profile.name} portrait`}
              width={1024}
              height={1280}
              className="w-full h-full object-cover object-top"
            />
            {/* Soft gradient overlay for legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 glass rounded-2xl px-4 py-3 flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground">Currently</p>
                <p className="text-sm font-medium">Designing & shipping ✨</p>
              </div>
              <span className="text-2xl animate-float">🌸</span>
            </div>
          </div>
          {/* Floating badge */}
          <div className="absolute -top-4 -right-4 glass rounded-2xl px-3 py-2 shadow-glow animate-float" style={{ animationDelay: "1s" }}>
            <p className="text-xs font-medium">✨ Open to work</p>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 grid place-items-center h-10 w-10 rounded-full glass animate-float"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-4 w-4" />
      </a>
    </section>
  );
};
