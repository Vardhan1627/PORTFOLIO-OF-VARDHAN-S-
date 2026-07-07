import { BarChart3, Brain, Database, Sparkles } from "lucide-react";
import { Section } from "./Section";

const highlights = [
  { icon: BarChart3, title: "Business Intelligence", text: "Building interactive Power BI & Tableau dashboards that surface insights leaders can act on." },
  { icon: Database, title: "Data Engineering Basics", text: "Comfortable with SQL, MySQL, and Python (Pandas/NumPy) for cleaning and shaping messy data." },
  { icon: Brain, title: "Machine Learning", text: "Applying Scikit-Learn to classification and prediction problems, from churn to forecasting." },
  { icon: Sparkles, title: "Continuous Learning", text: "Currently exploring Generative AI, MLOps, and modern data stack tooling." },
];

export const About = () => (
  <Section
    id="about"
    eyebrow="About Me"
    title={<>Passionate about turning <span className="gradient-text">data into decisions</span></>}
    subtitle="I'm an aspiring Data Analyst who loves the moment when a chart clicks and a business story becomes obvious. I combine curiosity, statistical thinking, and clean visual design to make analytics accessible."
  >
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {highlights.map((h) => (
        <div key={h.title} className="glass-card glow-border rounded-2xl p-6 transition-smooth hover:-translate-y-1">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
            <h.icon className="w-5 h-5 text-primary-foreground" />
          </div>
          <h3 className="font-semibold mb-2">{h.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{h.text}</p>
        </div>
      ))}
    </div>
  </Section>
);
