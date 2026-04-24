import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#events", label: "Clubs" },
  { href: "#projects", label: "Work" },
  { href: "#education", label: "Education" },
  { href: "#certs", label: "Certs" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500",
        scrolled ? "w-[min(95%,860px)]" : "w-[min(95%,920px)]"
      )}
    >
      <nav
        className={cn(
          "flex items-center justify-between gap-2 px-4 py-2.5 rounded-full transition-all duration-500",
          scrolled ? "glass shadow-soft" : "bg-white/40 backdrop-blur-md border border-white/40"
        )}
      >
        <a href="#top" className="flex items-center gap-2 px-2 group">
          <span className="grid place-items-center h-8 w-8 rounded-full bg-gradient-primary text-primary-foreground shadow-soft group-hover:rotate-12 transition-transform">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="font-display font-semibold tracking-tight">esha.</span>
        </a>
        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-3 py-1.5 text-sm rounded-full text-foreground/70 hover:text-foreground hover:bg-white/60 transition"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="px-4 py-2 text-sm font-medium rounded-full bg-foreground text-background hover:bg-primary transition shadow-soft"
        >
          Let's talk
        </a>
      </nav>
    </header>
  );
};
