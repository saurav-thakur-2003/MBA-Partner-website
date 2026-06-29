import { GraduationCap, Briefcase, Trophy, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

const stages = [
  {
    title: "Before MBA",
    icon: GraduationCap,
    items: ["CAT / OMET prep", "College selection", "Profile planning", "GDPI readiness"],
    cta: "/cat",
  },
  {
    title: "During MBA",
    icon: Briefcase,
    items: ["Placements bootcamp", "Live projects", "Case competitions", "Mentor sessions"],
    cta: "/programs",
  },
  {
    title: "After MBA",
    icon: Trophy,
    items: ["Offer conversion", "Career switching", "Promotion support", "Alumni network"],
    cta: "/programs/all-in-one-combo",
  },
];

export function CareerStageGuide() {
  return (
    <section className="container-px mx-auto max-w-7xl py-20">
      <div className="rounded-[2rem] border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8">
        <div className="inline-block rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
          Where are you in your journey?
        </div>
        <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">
          One platform for every MBA stage
        </h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          The owner’s brief is to support students before admission, during MBA, and after placement with a single premium system.
        </p>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {stages.map((stage) => {
            const Icon = stage.icon;
            return (
              <div key={stage.title} className="rounded-3xl border border-border bg-background p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">{stage.title}</div>
                    <h3 className="mt-2 font-display text-2xl font-bold text-primary">Guided path</h3>
                  </div>
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-accent text-accent-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  {stage.items.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                      <CheckCircle2 className="h-4 w-4 text-success" />
                      {item}
                    </div>
                  ))}
                </div>
                <Button asChild variant="outline" className="mt-5 w-full">
                  <Link to={stage.cta}>
                    Explore path <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
