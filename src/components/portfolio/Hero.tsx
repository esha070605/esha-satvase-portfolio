import { ArrowDown, MapPin, Sparkles, Code2, Heart, Star, Zap } from "lucide-react";
import portrait from "@/assets/portrait.jpg";
import { profile } from "@/data/portfolio";

export const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen pt-32 pb-16 px-4 overflow-hidden grain">
      {/* Big rotating aurora */}
      <div className="absolute -top-1/3 left-1/2 -translate-x-1/2 w-[120vw] h-[120vw] max-w-[1400px] max-h-[1400px] bg-aurora opacity-50 blur-3xl animate-aurora -z-10 rounded-full" />

      {/* Sparkles */}
      <span className="sparkle top-[15%] left-[10%]" />
      <span className="sparkle top-[25%] right-[15%]" style={{ animationDelay: "1s" }} />
      <span className="sparkle top-[60%] left-[8%]" style={{ animationDelay: "2s" }} />
      <span className="sparkle bottom-[20%] right-[25%]" style={{ animationDelay: "1.5s" }} />
      <span className="sparkle top-[40%] right-[8%]" style={{ animationDelay: "0.5s" }} />
      <span className="sparkle top-[8%] left-[45%]" style={{ animationDelay: "2.5s" }} />
      <span className="sparkle bottom-[35%] left-[50%]" style={{ animationDelay: "0.8s" }} />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center relative">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-strong text-xs font-medium mb-6 shadow-soft">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Available for collabs · Hyderabad 🌸
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-[5.5rem] font-bold leading-[0.95] tracking-tight">
            Hi, I'm{" "}
            <span className="relative inline-block">
              <span className="text-gradient animate-gradient-x bg-gradient-primary [-webkit-background-clip:text] [background-clip:text] [color:transparent]">
                {profile.name.split(" ")[0]}
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                <path d="M2 8 Q 50 2, 100 7 T 198 5" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" fill="none" />
              </svg>
            </span>
            .<br />
            I build things{" "}
            <em className="font-serif italic font-normal text-shine">people love</em>.
          </h1>

          <p className="mt-8 text-lg text-foreground/70 max-w-xl leading-relaxed">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group relative px-6 py-3 rounded-full bg-foreground text-background font-medium overflow-hidden shadow-soft hover:shadow-glow transition"
            >
              <span className="relative z-10 flex items-center gap-2">
                See my work <Zap className="h-4 w-4 group-hover:rotate-12 transition" />
              </span>
              <span className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-100 transition" />
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full glass-strong font-medium hover:bg-white/90 transition shadow-soft"
            >
              Say hi 👋
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

        {/* Portrait card with orbiting badges */}
        <div className="relative animate-scale-in" style={{ animationDelay: "0.2s" }}>
          {/* Rotating aurora glow */}
          <div className="absolute -inset-10 bg-aurora rounded-full blur-3xl opacity-70 animate-aurora" />
          <div className="absolute -inset-2 bg-gradient-primary rounded-[2rem] blur-xl opacity-50 animate-float" />

          {/* Tilted portrait */}
          <div className="relative tilt-card rounded-[2rem] overflow-hidden shadow-glow border-[3px] border-white/90 aspect-[4/5] glass-strong rotate-2">
            <img
              src={portrait}
              alt={`${profile.name} portrait`}
              width={1024}
              height={1280}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 glass-strong rounded-2xl px-4 py-3 flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Currently</p>
                <p className="text-sm font-semibold">Building cool AI ✨</p>
              </div>
              <span className="text-2xl animate-float">🌸</span>
            </div>
          </div>

          {/* Floating decorative badges */}
          <div className="absolute -top-4 -left-6 glass-strong rounded-2xl px-3 py-2 shadow-glow animate-float -rotate-6 z-10">
            <p className="text-xs font-semibold flex items-center gap-1.5">
              <Heart className="h-3.5 w-3.5 text-primary fill-primary" /> open to work
            </p>
          </div>
          <div className="absolute top-1/4 -right-8 glass-strong rounded-2xl px-3 py-2 shadow-glow animate-float rotate-6 z-10" style={{ animationDelay: "1s" }}>
            <p className="text-xs font-semibold flex items-center gap-1.5">
              <Code2 className="h-3.5 w-3.5 text-primary" /> AI dev
            </p>
          </div>
          <div className="absolute -bottom-4 -right-4 glass-strong rounded-2xl px-3 py-2 shadow-glow animate-float -rotate-3 z-10" style={{ animationDelay: "2s" }}>
            <p className="text-xs font-semibold flex items-center gap-1.5">
              <Star className="h-3.5 w-3.5 text-primary fill-primary" /> SIH top 50
            </p>
          </div>
          <div className="absolute bottom-1/3 -left-8 glass-strong rounded-2xl px-3 py-2 shadow-glow animate-float rotate-3 z-10" style={{ animationDelay: "3s" }}>
            <p className="text-xs font-semibold flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-primary" /> 9.21 CGPA
            </p>
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
