import { mentors } from "@/data/programs";
import { Building2, GraduationCap } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const colors = ["#142850", "#1e3a6e", "#2a4d8f", "#3a5fa5"];

export function MentorShowcase() {
  return (
    <section id="mentors" className="container-px mx-auto max-w-7xl py-20">
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div>
          <div className="inline-block rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Mentor Network
          </div>
          <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">
            Learn from India's top 1%
          </h2>
          <p className="mt-2 max-w-xl text-muted-foreground">
            50+ industry mentors from MBB, FAANG, Big-4 and India's most loved consumer brands.
          </p>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {mentors.map((m, i) => {
          const initials = m.name.split(" ").map((p) => p[0]).slice(0, 2).join("");
          const bg = colors[i % colors.length];
          return (
            <ScrollReveal key={m.name} delay={i * 60}>
              <div className="group rounded-2xl border border-border bg-card p-4 transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-[var(--shadow-card)]">
                <div className="grid h-16 w-16 place-items-center rounded-2xl text-xl font-bold text-white" style={{ background: bg }}>
                  {initials}
                </div>
                <h3 className="mt-3 font-display text-base font-bold text-primary">{m.name}</h3>
                <p className="text-xs font-medium text-accent-foreground/80">{m.role}</p>
                <div className="mt-2 space-y-1 border-t border-border pt-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1.5"><GraduationCap className="h-3.5 w-3.5 text-primary" />{m.college}</div>
                  <div className="flex items-center gap-1.5"><Building2 className="h-3.5 w-3.5 text-primary" />{m.company}</div>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
