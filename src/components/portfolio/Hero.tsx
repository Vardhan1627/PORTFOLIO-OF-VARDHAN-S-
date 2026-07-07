import { Download, Github, Linkedin, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div
        className="absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      <div className="absolute -z-10 top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -z-10 bottom-0 -right-32 w-96 h-96 rounded-full bg-secondary/20 blur-3xl" />

      <div className="container grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs font-medium text-muted-foreground mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Available for internships & opportunities
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
            Hi, I'm <span className="gradient-text animate-gradient">Vardhan Kumar</span>
          </h1>
          <p className="mt-5 text-lg md:text-xl text-muted-foreground font-medium">
            Data Analyst <span className="text-primary">|</span> Data Science Student{" "}
            <span className="text-primary">|</span> Power BI & Python Enthusiast
          </p>
          <p className="mt-6 max-w-xl text-muted-foreground leading-relaxed">
            I turn raw data into clear stories and interactive dashboards. Currently pursuing
            B.Tech in CSE (Data Science), building projects that blend analytics, machine learning,
            and business intelligence.
          </p>
          <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin size={16} className="text-accent" />
            Dharmavaram, Andhra Pradesh, India
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="lg">
              <a href="/resume.pdf" download>
                <Download /> Download Resume
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                <Github /> GitHub
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="https://www.linkedin.com/in/vardhan-kumar-171772334/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BrOfX1z2TRDC8esE6qyoKug%3D%3D" target="_blank" rel="noreferrer">
                <Linkedin /> LinkedIn
              </a>
            </Button>
          </div>
        </div>

        <div className="relative mx-auto lg:mx-0 animate-fade-in">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-primary/40 to-secondary/40 blur-2xl opacity-70" />
          <div className="relative animate-float">
            <div className="p-1.5 rounded-[2rem] bg-gradient-to-br from-primary via-secondary to-accent">
              <div className="rounded-[1.75rem] w-64 h-64 sm:w-80 sm:h-80 lg:w-[380px] lg:h-[380px] bg-card flex items-center justify-center">
                <span className="text-7xl sm:text-8xl lg:text-9xl font-bold gradient-text select-none">VK</span>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 glass-card rounded-xl px-4 py-3 text-sm">
              <div className="text-xs text-muted-foreground">Focus</div>
              <div className="font-semibold gradient-text">Data Analytics</div>
            </div>
            <div className="absolute -top-4 -right-4 glass-card rounded-xl px-4 py-3 text-sm">
              <div className="text-xs text-muted-foreground">Stack</div>
              <div className="font-semibold">Power BI • Python</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
