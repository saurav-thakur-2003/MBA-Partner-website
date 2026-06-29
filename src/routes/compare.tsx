import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Check, ShieldCheck, Sparkles, Trophy, Users, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { programs } from "@/data/programs";

export const Route = createFileRoute("/compare")({
  head: () => ({
    meta: [
      { title: "Compare Programs · MBA Partner" },
      {
        name: "description",
        content:
          "Compare placement bootcamp, case competition accelerator, live projects and all-in-one combo side by side.",
      },
      { property: "og:title", content: "Compare Programs · MBA Partner" },
      { property: "og:description", content: "Side-by-side comparison of all MBA Partner programs." },
      { property: "og:url", content: "/compare" },
    ],
    links: [{ rel: "canonical", href: "/compare" }],
  }),
  component: ComparePage,
});

const rows: { label: string; key: keyof (typeof programs)[number] | "price" }[] = [
  { label: "Duration", key: "duration" },
  { label: "Mentorship", key: "mentorship" },
  { label: "Mock Interviews", key: "mockInterviews" },
  { label: "Projects", key: "projects" },
  { label: "Certificates", key: "certificates" },
  { label: "Placement Support", key: "placementSupport" },
];

const pastedComparison = [
  { feature: "Live Project Output (CV)", combo: true, bootcamp: false, liveProject: true, caseComp: false },
  { feature: "Case Competition Prep", combo: true, bootcamp: false, liveProject: false, caseComp: true },
  { feature: "Bootcamp Modules (SIP Prep)", combo: true, bootcamp: true, liveProject: false, caseComp: false },
  { feature: "Mentor 1:1 Sessions", combo: true, bootcamp: true, liveProject: false, caseComp: false },
  { feature: "Domain Coverage", combo: "All 5", bootcamp: "All 5", liveProject: "1-2", caseComp: "Consulting" },
  { feature: "ATS CV Points", combo: "5 CV + 7 PI + 7 GDs", bootcamp: "5 CV + 7 PI + 7 GDs", liveProject: "2-5", caseComp: "3-5" },
];

function ComparePage() {
  return (
    <div>
      <section className="container-px mx-auto max-w-7xl pt-16 pb-12 text-center">
        <div className="inline-block rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
          Compare Programs
        </div>
        <h1 className="mx-auto mt-3 max-w-3xl font-display text-4xl font-bold text-primary sm:text-5xl">
          Pick the program that <span className="text-gradient-amber">matches your goal</span>
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          Side-by-side view of pricing, mentorship, projects and outcomes.
        </p>
      </section>

      <section className="container-px mx-auto max-w-7xl pb-20">
        <div className="mb-8 grid gap-4 md:grid-cols-4">
          {[
            { label: "Best value", value: "All-In-One Combo", icon: Sparkles },
            { label: "Mentor access", value: "1:1 + live cohorts", icon: Users },
            { label: "Trust signal", value: "Transparent outcomes", icon: ShieldCheck },
            { label: "Conversion driver", value: "Urgency + clarity", icon: Trophy },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="rounded-[1.6rem] border border-border bg-card p-4 shadow-[var(--shadow-card)]">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-primary-soft text-primary">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-primary/60">{item.label}</div>
                    <div className="font-display text-base font-bold text-primary">{item.value}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mb-8 rounded-[2rem] border border-border bg-card p-6 shadow-[var(--shadow-card)]">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <BookOpen className="h-4 w-4" />
            Pasted comparison summary
          </div>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead>
                <tr className="border-b border-border bg-gradient-to-r from-primary-soft to-accent/10">
                  <th className="rounded-tl-2xl p-4 text-xs font-semibold uppercase tracking-[0.28em] text-primary/70">Feature</th>
                  <th className="p-4 text-sm font-semibold text-primary">All-In-One Combo</th>
                  <th className="p-4 text-sm font-semibold text-primary">Bootcamp</th>
                  <th className="p-4 text-sm font-semibold text-primary">Live Project</th>
                  <th className="rounded-tr-2xl p-4 text-sm font-semibold text-primary">Case Comp</th>
                </tr>
              </thead>
              <tbody>
                {pastedComparison.map((row) => (
                  <tr key={row.feature} className="border-b border-border/70 transition hover:bg-primary-soft/35">
                    <td className="p-3 font-medium text-foreground">{row.feature}</td>
                    {[row.combo, row.bootcamp, row.liveProject, row.caseComp].map((cell, index) => (
                      <td key={index} className="p-3 text-muted-foreground">
                        {cell === true ? (
                          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
                            <Check className="h-4 w-4" />
                          </span>
                        ) : cell === false ? (
                          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-500/10 text-slate-400">
                            <X className="h-4 w-4" />
                          </span>
                        ) : (
                          <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary">{cell}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-border bg-card shadow-[var(--shadow-card)]">
          <table className="w-full min-w-[840px] text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-primary-soft">
                <th className="sticky left-0 z-10 bg-primary-soft p-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Feature
                </th>
                {programs.map((p) => (
                  <th key={p.slug} className={`p-4 align-top ${p.highlight ? "bg-accent/10" : ""}`}>
                    <div className="flex flex-col gap-1">
                      {p.badge && (
                        <span className="self-start rounded-full bg-accent px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-accent-foreground">
                          {p.badge}
                        </span>
                      )}
                      <span className="font-display text-base font-bold text-primary">{p.name}</span>
                      <span className="text-xs font-normal text-muted-foreground">{p.tagline}</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="sticky left-0 z-10 bg-card p-4 font-semibold text-primary">Price</td>
                {programs.map((p) => (
                  <td key={p.slug} className={`p-4 align-top ${p.highlight ? "bg-accent/5" : ""}`}>
                    <div className="font-display text-xl font-bold text-primary">₹{p.price.toLocaleString("en-IN")}</div>
                    <div className="text-xs text-muted-foreground line-through">₹{p.originalPrice.toLocaleString("en-IN")}</div>
                    <div className="mt-1 text-[11px] font-semibold text-success">
                      Save ₹{(p.originalPrice - p.price).toLocaleString("en-IN")}
                    </div>
                  </td>
                ))}
              </tr>
              {rows.map((row) => (
                <tr key={row.label} className="border-b border-border">
                  <td className="sticky left-0 z-10 bg-card p-4 font-medium text-foreground/85">{row.label}</td>
                  {programs.map((p) => (
                    <td key={p.slug} className={`p-4 align-top text-foreground/80 ${p.highlight ? "bg-accent/5" : ""}`}>
                      {String(p[row.key as keyof typeof p])}
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="border-b border-border">
                <td className="sticky left-0 z-10 bg-card p-4 font-medium text-foreground/85">Lifetime Alumni</td>
                {programs.map((p) => (
                  <td key={p.slug} className={`p-4 ${p.highlight ? "bg-accent/5" : ""}`}>
                    {p.highlight ? <Check className="h-5 w-5 text-success" /> : <X className="h-5 w-5 text-muted-foreground/50" />}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="sticky left-0 z-10 bg-card p-4"></td>
                {programs.map((p) => (
                  <td key={p.slug} className={`p-4 ${p.highlight ? "bg-accent/5" : ""}`}>
                    <Button asChild variant={p.highlight ? "hero" : "navy"} size="sm" className="w-full">
                      <Link to="/programs/$slug" params={{ slug: p.slug }}>
                        Explore <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </Button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
