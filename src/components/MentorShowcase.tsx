import { mentors } from "@/data/programs";
import { Building2, GraduationCap } from "lucide-react";

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
            <div key={m.name} className="group rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-[var(--shadow-card)]">
              <div className="grid h-20 w-20 place-items-center rounded-2xl text-2xl font-bold text-white" style={{ background: bg }}>
                {initials}
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-primary">{m.name}</h3>
              <p className="text-xs font-medium text-accent-foreground/80">{m.role}</p>
              <div className="mt-3 space-y-1.5 border-t border-border pt-3 text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5"><GraduationCap className="h-3.5 w-3.5 text-primary" />{m.college}</div>
                <div className="flex items-center gap-1.5"><Building2 className="h-3.5 w-3.5 text-primary" />{m.company}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
