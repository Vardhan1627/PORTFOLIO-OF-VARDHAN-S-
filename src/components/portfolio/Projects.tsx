import { ExternalLink, Github, BarChart3, Users, Briefcase, Bot } from "lucide-react";
import { Section } from "./Section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    icon: BarChart3,
    title: "Retail Sales Analytics & BI Dashboard",
    description: "End-to-end retail analytics: cleaned sales data with Python, modeled in SQL, and shipped interactive Power BI dashboards to track revenue, category performance, and regional trends.",
    tech: ["Power BI", "SQL", "Python", "Excel"],
    github: "https://github.com/",
    demo: "",
  },
  {
    icon: Users,
    title: "Customer Churn Prediction (ML)",
    description: "Built a classification model to predict subscriber churn. Feature engineering with Pandas, model training with Scikit-Learn, and evaluation with ROC-AUC / confusion matrix.",
    tech: ["Python", "Scikit-Learn", "Pandas", "Matplotlib"],
    github: "https://github.com/",
    demo: "",
  },
  {
    icon: Briefcase,
    title: "HR Analytics Dashboard",
    description: "Workforce dashboard tracking attrition drivers, department performance, and diversity KPIs. Designed with Power BI for HR leaders to make people decisions faster.",
    tech: ["Power BI", "DAX", "Excel"],
    github: "https://github.com/",
    demo: "",
  },
  {
    icon: Bot,
    title: "AI Interview Simulator (GenAI)",
    description: "A conversational interview practice tool using generative AI to ask domain-specific questions, evaluate answers, and give structured feedback to candidates.",
    tech: ["Python", "GenAI", "LLM APIs"],
    github: "https://github.com/",
    demo: "",
  },
];

export const Projects = () => (
  <Section
    id="projects"
    eyebrow="Projects"
    title={<>Selected <span className="gradient-text">work</span></>}
    subtitle="A mix of analytics dashboards, ML models, and applied AI experiments."
  >
    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((p) => (
        <article key={p.title} className="glass-card glow-border rounded-2xl overflow-hidden group transition-smooth hover:-translate-y-1 flex flex-col">
          <div className="relative h-40 bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/20 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.4),transparent_60%)]" />
            <p.icon className="w-14 h-14 text-foreground/80 relative z-10 group-hover:scale-110 transition-transform" />
            <span className="absolute top-3 right-3 text-[10px] uppercase tracking-widest text-muted-foreground bg-background/60 backdrop-blur px-2 py-1 rounded-md">
              Screenshot placeholder
            </span>
          </div>
          <div className="p-6 flex-1 flex flex-col">
            <h3 className="font-semibold text-lg">{p.title}</h3>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed flex-1">{p.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {p.tech.map((t) => (
                <Badge key={t} variant="skill">{t}</Badge>
              ))}
            </div>
            <div className="flex gap-2 mt-5">
              <Button asChild size="sm" variant="hero">
                <a href={p.github} target="_blank" rel="noreferrer"><Github /> Code</a>
              </Button>
              {p.demo && (
                <Button asChild size="sm" variant="outline">
                  <a href={p.demo} target="_blank" rel="noreferrer"><ExternalLink /> Demo</a>
                </Button>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  </Section>
);
