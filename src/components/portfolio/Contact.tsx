import { useState } from "react";
import { Github, Linkedin, Twitter, Mail, Send, Check } from "lucide-react";
import { profile } from "@/data/portfolio";
import { toast } from "sonner";

export const Contact = () => {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill out all fields ✨");
      return;
    }
    setSent(true);
    toast.success("Message sent! I'll reply soon 💌");
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", message: "" });
    }, 2500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-60 -z-10" />
      <div className="max-w-5xl mx-auto rounded-[2.5rem] glass p-8 md:p-14 shadow-soft">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-3">Say hi</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
              Let's create something <em className="font-serif italic font-normal text-gradient">beautiful</em>.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Got a project, an event idea, or just want to chat about design? My inbox is open.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-6 inline-flex items-center gap-2 font-display text-lg font-medium hover:text-primary transition"
            >
              <Mail className="h-5 w-5" /> {profile.email}
            </a>
            <div className="mt-8 flex gap-3">
              {[
                { icon: Github, href: profile.social.github, label: "GitHub" },
                { icon: Linkedin, href: profile.social.linkedin, label: "LinkedIn" },
                { icon: Twitter, href: profile.social.twitter, label: "Twitter" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid place-items-center h-11 w-11 rounded-full bg-card border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition shadow-soft"
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={submit} className="space-y-3">
            <input
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-5 py-3.5 rounded-2xl bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
            />
            <input
              type="email"
              placeholder="Email address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-5 py-3.5 rounded-2xl bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
            />
            <textarea
              placeholder="Tell me about your idea..."
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-5 py-3.5 rounded-2xl bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 transition resize-none"
            />
            <button
              type="submit"
              disabled={sent}
              className="w-full py-3.5 rounded-2xl bg-foreground text-background font-medium hover:bg-primary transition shadow-soft hover:shadow-glow inline-flex items-center justify-center gap-2"
            >
              {sent ? (<><Check className="h-4 w-4" /> Sent!</>) : (<><Send className="h-4 w-4" /> Send message</>)}
            </button>
          </form>
        </div>
      </div>

      <footer className="max-w-5xl mx-auto mt-12 pb-4 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} {profile.name}. Made with care, chai, and CSS.
      </footer>
    </section>
  );
};
