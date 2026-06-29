import { Calculator, FileText, Target, ChartColumn, Brain } from "lucide-react";

const tools = [
  { icon: FileText, title: "50 Free sectional mocks", desc: "VARC, QA and LRDI practice blocks with score tracking." },
  { icon: Brain, title: "Free RCs and tricks", desc: "Aristotle-style reading comprehension tips and quick strategies." },
  { icon: Calculator, title: "Percentile vs score", desc: "Visual calculator for planning scores and target percentiles." },
  { icon: ChartColumn, title: "Safe / ambitious colleges", desc: "College planning support for application strategy." },
  { icon: Target, title: "Domain Q&A prep", desc: "Questions for GDPI and domain-specific interview prep." },
  { icon: FileText, title: "Leaderboard", desc: "Compete on mocks and track rank across the cohort." },
  { icon: Brain, title: "SNAP / NMAT / XAT", desc: "Coverage for OMETs and alternate exam prep." },
  { icon: Target, title: "Profile improvement", desc: "Answer the 'why you?' question with stronger story framing." },
];

export function CatToolsSection() {
  return (
    <section className="container-px mx-auto max-w-7xl py-20">
      <div className="rounded-[2rem] border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8">
        <div className="inline-block rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
          CAT / OMET Free Tools
        </div>
        <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">Everything the CAT aspirant asked for</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <div key={tool.title} className="rounded-3xl border border-border bg-background p-5">
                <Icon className="h-5 w-5 text-primary" />
                <h3 className="mt-4 font-display text-lg font-bold text-primary">{tool.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{tool.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
