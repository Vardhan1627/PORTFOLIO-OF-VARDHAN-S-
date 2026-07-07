import { Section } from "./Section";
import { Badge } from "@/components/ui/badge";

const groups = [
  { title: "Languages", items: ["SQL", "Python"] },
  { title: "Data & ML Libraries", items: ["Pandas", "NumPy", "Scikit-Learn", "Matplotlib"] },
  { title: "BI & Analytics", items: ["Power BI", "Tableau", "Excel"] },
  { title: "Databases", items: ["MySQL"] },
  { title: "Tools", items: ["Git", "GitHub", "Jupyter Notebook", "VS Code", "IntelliJ IDEA"] },
];

export const Skills = () => (
  <Section
    id="skills"
    eyebrow="Skills"
    title={<>Tools I use to <span className="gradient-text">ship insights</span></>}
  >
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {groups.map((g) => (
        <div key={g.title} className="glass-card glow-border rounded-2xl p-6 transition-smooth hover:-translate-y-1">
          <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-4">{g.title}</h3>
          <div className="flex flex-wrap gap-2">
            {g.items.map((s) => (
              <Badge key={s} variant="skill">{s}</Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  </Section>
);
