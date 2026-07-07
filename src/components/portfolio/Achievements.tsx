import { Award, Trophy } from "lucide-react";
import { Section } from "./Section";

const items = [
  {
    icon: Award,
    title: "Industrial Training",
    org: "Sunglare Technologies Pvt. Ltd.",
    detail: "Hands-on industrial training focused on data handling, workflow automation, and IT operations.",
  },
  {
    icon: Trophy,
    title: "IMPACTX-2025 Hackathon",
    org: "Participation Certificate",
    detail: "Collaborated in a fast-paced hackathon, shipping a data-driven solution within tight deadlines.",
  },
];

export const Achievements = () => (
  <Section
    id="achievements"
    eyebrow="Achievements"
    title={<>Milestones & <span className="gradient-text">recognition</span></>}
  >
    <div className="grid md:grid-cols-2 gap-5">
      {items.map((a) => (
        <div key={a.title} className="glass-card glow-border rounded-2xl p-6 flex gap-5 items-start transition-smooth hover:-translate-y-1">
          <div className="w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <a.icon className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-semibold">{a.title}</h3>
            <p className="text-sm text-accent mt-1">{a.org}</p>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{a.detail}</p>
          </div>
        </div>
      ))}
    </div>
  </Section>
);
