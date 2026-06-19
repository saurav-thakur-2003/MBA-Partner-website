import { useState } from "react";
import {
  UserCircle, FileText, BookOpen, Briefcase, Trophy, MessagesSquare, Target, TrendingUp,
} from "lucide-react";

const steps = [
  { icon: UserCircle, title: "Profile Building", desc: "CV foundation, LinkedIn, personal brand." },
  { icon: FileText, title: "CV Review", desc: "3 rounds with Tier-1 recruiters." },
  { icon: BookOpen, title: "Domain Sessions", desc: "Consulting, Product, Marketing, Finance." },
  { icon: Briefcase, title: "Live Projects", desc: "2 real industry projects with LORs." },
  { icon: Trophy, title: "Case Competitions", desc: "Win AIRs at national comps." },
  { icon: MessagesSquare, title: "Mock Interviews", desc: "8+ graded mocks, MBB mentors." },
  { icon: Target, title: "Placement Prep", desc: "Day-Zero readiness, negotiation." },
  { icon: TrendingUp, title: "Career Growth", desc: "Lifetime alumni network." },
];

export function Roadmap() {
  const [active, setActive] = useState(0);
  return (
    <section className="container-px mx-auto max-w-7xl py-20">
      <div className="text-center">
        <div className="inline-block rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
          The MBA Career OS
        </div>
        <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl lg:text-5xl">
          Your <span className="text-gradient-amber">8-Step Career Roadmap</span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          From profile foundation to your first promotion — every step engineered for the top 1% of MBA careers.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <ol className="space-y-2">
          {steps.map((s, i) => {
            const Icon = s.icon;
            const isActive = i === active;
            return (
              <li key={s.title}>
                <button
                  onClick={() => setActive(i)}
                  className={`group flex w-full items-center gap-4 rounded-xl border p-3 text-left transition-all ${
                    isActive
                      ? "border-accent bg-primary text-white shadow-[var(--shadow-elegant)]"
                      : "border-border bg-card hover:border-primary/40 hover:bg-primary-soft"
                  }`}
                >
                  <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg ${isActive ? "bg-accent text-accent-foreground" : "bg-primary-soft text-primary"}`}>
                    <span className="font-display text-sm font-bold">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className={`truncate font-display text-sm font-semibold ${isActive ? "text-white" : "text-primary"}`}>{s.title}</div>
                  </div>
                  <Icon className={`h-4 w-4 shrink-0 ${isActive ? "text-accent" : "text-muted-foreground"}`} />
                </button>
              </li>
            );
          })}
        </ol>

        <div className="rounded-3xl border border-border gradient-navy p-8 text-white shadow-[var(--shadow-elegant)] lg:sticky lg:top-24 lg:h-fit">
          <div className="flex items-center gap-3">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-accent text-accent-foreground">
              {(() => {
                const ActiveIcon = steps[active].icon;
                return <ActiveIcon className="h-6 w-6" />;
              })()}
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-accent">Step {active + 1} of 8</div>
              <h3 className="font-display text-2xl font-bold">{steps[active].title}</h3>
            </div>
          </div>
          <p className="mt-6 text-white/85">{steps[active].desc}</p>
          <div className="mt-6 grid grid-cols-3 gap-2">
            {steps.map((_, i) => (
              <div key={i} className={`h-1.5 rounded-full transition-all ${i <= active ? "bg-accent" : "bg-white/15"}`} />
            ))}
          </div>
          <p className="mt-6 text-sm text-white/70">
            Each step is supported by 1:1 mentorship and live cohort sessions.
          </p>
        </div>
      </div>
    </section>
  );
}
