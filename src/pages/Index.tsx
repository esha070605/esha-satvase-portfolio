import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Events } from "@/components/portfolio/Events";
import { Marquee } from "@/components/portfolio/Marquee";
import { Projects } from "@/components/portfolio/Projects";
import { Certifications } from "@/components/portfolio/Certifications";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Site-wide animated background */}
      <div className="fixed inset-0 -z-50 bg-mesh opacity-70 pointer-events-none" />
      <div className="fixed inset-0 -z-50 bg-gradient-to-b from-transparent via-background/40 to-background pointer-events-none" />
      {/* Floating ambient orbs */}
      <div className="fixed top-[20%] -left-32 w-96 h-96 rounded-full bg-rose/40 blur-3xl animate-blob -z-40 pointer-events-none" />
      <div className="fixed top-[60%] -right-32 w-[30rem] h-[30rem] rounded-full bg-lilac/40 blur-3xl animate-blob -z-40 pointer-events-none" style={{ animationDelay: "6s" }} />
      <div className="fixed bottom-[10%] left-1/3 w-80 h-80 rounded-full bg-peach/40 blur-3xl animate-blob -z-40 pointer-events-none" style={{ animationDelay: "12s" }} />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Events />
        <Marquee />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
