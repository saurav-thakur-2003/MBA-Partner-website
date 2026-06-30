import { useState } from "react";
import {
  UserCircle,
  FileText,
  BookOpen,
  Briefcase,
  Trophy,
  MessagesSquare,
  Target,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const steps = [
  {
    icon: UserCircle,
    title: "Profile Building",
    desc: "CV foundation, LinkedIn, personal brand.",
    points: ["Profile audit", "Story framing", "LinkedIn optimisation"],
  },
  {
    icon: FileText,
    title: "CV Review",
    desc: "3 rounds with Tier-1 recruiters.",
    points: ["Three revision cycles", "ATS-friendly structure", "Mentor feedback"],
  },
  {
    icon: BookOpen,
    title: "Domain Sessions",
    desc: "Consulting, Product, Marketing, Finance.",
    points: ["Domain exposure", "Role mapping", "Industry basics"],
  },
  {
    icon: Briefcase,
    title: "Live Projects",
    desc: "2 real industry projects with LORs.",
    points: ["Real briefs", "Weekly checkpoints", "LOR-worthy output"],
  },
  {
    icon: Trophy,
    title: "Case Competitions",
    desc: "Win AIRs at national comps.",
    points: ["Framework practice", "Deck structure", "Jury simulation"],
  },
  {
    icon: MessagesSquare,
    title: "Mock Interviews",
    desc: "8+ graded mocks, MBB mentors.",
    points: ["Behavioral rounds", "Case interviews", "Feedback reports"],
  },
  {
    icon: Target,
    title: "Placement Prep",
    desc: "Day-Zero readiness, negotiation.",
    points: ["Offer strategy", "Negotiation", "Final readiness check"],
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    desc: "Lifetime alumni network.",
    points: ["Community access", "Alumni support", "Long-term growth"],
  },
];

export function Roadmap() {
  const [active, setActive] = useState(0);

  const current = steps[active];
  const ActiveIcon = current.icon;

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
          From profile foundation to your first promotion — every step is engineered for high-conviction career outcomes.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <ol className="space-y-2">
          {steps.map((step, index) => {
            const StepIcon = step.icon;
            const isActive = index === active;
            return (
              <ScrollReveal key={step.title} delay={index * 60} effect="slide-left">
                <button
                  onClick={() => setActive(index)}
                  className={`group flex w-full items-center gap-4 rounded-xl border p-3 text-left transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)] ${
                    isActive
                      ? "border-accent bg-accent/20 shadow-[var(--shadow-elegant)] scale-[1.01]"
                      : "border-border bg-card hover:border-primary/40 hover:bg-primary-soft/70"
                  }`}
                >
                  <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg ${isActive ? "bg-accent text-accent-foreground" : "bg-primary-soft text-primary"}`}>
                    <span className="font-display text-sm font-bold">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="truncate font-display text-sm font-semibold text-foreground">{step.title}</div>
                    <div className="mt-0.5 text-xs text-muted-foreground">{step.desc}</div>
                  </div>
                  <StepIcon className={`h-4 w-4 shrink-0 ${isActive ? "text-foreground" : "text-muted-foreground"}`} />
                </button>
              </ScrollReveal>
            );
          })}
        </ol>

          <div className="rounded-3xl border border-border gradient-navy p-8 text-white shadow-[var(--shadow-elegant)] lg:sticky lg:top-24 lg:h-fit animate-shimmer transition-transform duration-300 hover:-translate-y-1">
          <div className="flex items-center gap-3">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-accent text-accent-foreground">
              <ActiveIcon className="h-6 w-6" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-accent">Step {active + 1} of 8</div>
              <h3 className="font-display text-2xl font-bold">{current.title}</h3>
            </div>
          </div>

          <p className="mt-6 text-white/85">{current.desc}</p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {current.points.map((point) => (
              <div key={point} className="rounded-2xl border border-white/10 bg-white/10 p-4 text-sm text-white/90 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/15">
                <CheckCircle2 className="mb-2 h-4 w-4 text-accent" />
                {point}
              </div>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-3 gap-2">
            {steps.map((_, index) => (
              <div key={index} className={`h-1.5 rounded-full transition-all duration-300 ${index <= active ? "bg-accent shadow-[0_0_16px_rgba(248,246,131,0.55)]" : "bg-white/15"}`} />
            ))}
          </div>

          <p className="mt-6 text-sm text-white/70">
            Each step is supported by 1:1 mentorship, live sessions and portfolio-driven proof.
          </p>
        </div>
      </div>
    </section>
  );
}
