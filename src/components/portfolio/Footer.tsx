import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => (
  <footer className="border-t border-border/60 mt-10">
    <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-6">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Yanamula Vardhan Kumar. Built with React & Tailwind.
      </p>
      <div className="flex items-center gap-3">
        {[
          { icon: Github, href: "https://github.com/", label: "GitHub" },
          { icon: Linkedin, href: "https://www.linkedin.com/in/vardhan-kumar-171772334/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BrOfX1z2TRDC8esE6qyoKug%3D%3D", label: "LinkedIn" },
          { icon: Mail, href: "mailto:vardhankumar687@gmail.com", label: "Email" },
        ].map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            aria-label={label}
            className="w-10 h-10 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-smooth"
          >
            <Icon size={18} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);
