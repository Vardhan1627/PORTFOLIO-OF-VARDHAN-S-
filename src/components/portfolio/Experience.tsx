import { Briefcase } from "lucide-react";
import { Section } from "./Section";

const experiences = [
  {
    role: "Quality Assurance Intern",
    company: "Instawork Services Pvt. Ltd.",
    detail: "Validated data pipelines and reporting outputs, wrote test cases, and helped ensure accuracy of analytics dashboards.",
  },
  {
    role: "Cloud Computing Intern",
    company: "Slash Mark IT Solutions",
    detail: "Explored cloud fundamentals, deployment workflows, and hands-on labs across storage, compute, and identity services.",
  },
  {
    role: "Data Entry Operator Intern",
    company: "Sunglare Technologies Pvt. Ltd.",
    detail: "Structured and cleaned business records for downstream reporting, improving data consistency and turnaround time.",
  },
];

export const Experience = () => (
  <Section
    id="experience"
    eyebrow="Experience"
    title={<>Internships & <span className="gradient-text">early roles</span></>}
  >
    <div className="grid md:grid-cols-3 gap-5">
      {experiences.map((e) => (
        <article key={e.role} className="glass-card glow-border rounded-2xl p-6 transition-smooth hover:-translate-y-1">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
            <Briefcase className="w-5 h-5 text-primary-foreground" />
          </div>
          <h3 className="font-semibold">{e.role}</h3>
          <p className="text-sm text-accent mt-1">{e.company}</p>
          <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{e.detail}</p>
        </article>
      ))}
    </div>
  </Section>
);
