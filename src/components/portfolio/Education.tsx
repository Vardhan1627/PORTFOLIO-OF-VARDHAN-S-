import { GraduationCap } from "lucide-react";
import { Section } from "./Section";

const items = [
  {
    title: "B.Tech — Computer Science Engineering (Data Science)",
    institution: "Madanapalle Institute of Technology & Science",
    period: "Pursuing",
    score: "79%",
    detail: "Coursework in Data Structures, Machine Learning, Statistics, Databases, and Data Visualization.",
  },
  {
    title: "Diploma — Computer Science & Engineering",
    institution: "State Board of Technical Education",
    period: "Completed",
    score: "70%",
    detail: "Foundations in programming, computer systems, and software engineering.",
  },
];

export const Education = () => (
  <Section
    id="education"
    eyebrow="Education"
    title={<>Academic <span className="gradient-text">journey</span></>}
  >
    <div className="relative">
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent -translate-x-px" />
      <div className="space-y-10">
        {items.map((it, i) => (
          <div
            key={it.title}
            className={`relative md:grid md:grid-cols-2 md:gap-10 ${i % 2 === 1 ? "md:[&>*:first-child]:col-start-2" : ""}`}
          >
            <div className="absolute left-4 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-gradient-to-br from-primary to-secondary ring-4 ring-background" />
            <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10"}`}>
              <div className="glass-card glow-border rounded-2xl p-6 transition-smooth hover:-translate-y-1 inline-block text-left">
                <div className="flex items-center gap-2 text-xs text-accent font-medium uppercase tracking-widest mb-2">
                  <GraduationCap size={14} /> {it.period}
                </div>
                <h3 className="font-semibold text-lg">{it.title}</h3>
                <p className="text-muted-foreground text-sm mt-1">{it.institution}</p>
                <p className="mt-3 text-sm text-muted-foreground">{it.detail}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm">
                  <span className="text-muted-foreground">Score</span>
                  <span className="font-bold gradient-text text-lg">{it.score}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Section>
);
