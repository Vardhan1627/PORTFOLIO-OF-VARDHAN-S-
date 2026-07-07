import { ReactNode } from "react";

interface SectionProps {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export const Section = ({ id, eyebrow, title, subtitle, children, className = "" }: SectionProps) => (
  <section id={id} className={`py-20 md:py-28 ${className}`}>
    <div className="container">
      <div className="max-w-2xl mb-12 md:mb-16 animate-fade-up">
        {eyebrow && (
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent mb-3">
            {eyebrow}
          </p>
        )}
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{title}</h2>
        {subtitle && <p className="mt-4 text-muted-foreground text-lg">{subtitle}</p>}
      </div>
      {children}
    </div>
  </section>
);
