import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Section } from "./Section";
import { Button } from "@/components/ui/button";

const items = [
  { icon: Mail, label: "Email", value: "vardhankumar687@gmail.com", href: "mailto:vardhankumar687@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 94928 33708", href: "tel:+919492833708" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/vardhan-kumar-171772334", href: "https://www.linkedin.com/in/vardhan-kumar-171772334/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BrOfX1z2TRDC8esE6qyoKug%3D%3D" },
  { icon: Github, label: "GitHub", value: "github.com/vardhankumar", href: "https://github.com/" },
];

export const Contact = () => (
  <Section
    id="contact"
    eyebrow="Contact"
    title={<>Let's build something with <span className="gradient-text">data</span></>}
    subtitle="Open to internships, entry-level Data Analyst roles, and collaboration on analytics projects."
  >
    <div className="glass-card rounded-3xl p-8 md:p-12 grid lg:grid-cols-2 gap-10 items-center">
      <div>
        <h3 className="text-2xl font-semibold">Get in touch</h3>
        <p className="mt-3 text-muted-foreground">
          The fastest way to reach me is email. I usually reply within a day.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild variant="hero" size="lg">
            <a href="mailto:vardhankumar687@gmail.com"><Mail /> Send Email</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="https://www.linkedin.com/in/vardhan-kumar-171772334/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BrOfX1z2TRDC8esE6qyoKug%3D%3D" target="_blank" rel="noreferrer"><Linkedin /> Connect</a>
          </Button>
        </div>
      </div>
      <ul className="grid sm:grid-cols-2 gap-4">
        {items.map((it) => (
          <li key={it.label}>
            <a
              href={it.href}
              target={it.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="flex items-center gap-4 p-4 rounded-2xl border border-border/60 hover:border-primary/50 hover:bg-muted/40 transition-smooth"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0">
                <it.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{it.label}</div>
                <div className="text-sm font-medium truncate">{it.value}</div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </Section>
);
