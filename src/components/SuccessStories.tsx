import { successStories, companyLogos } from "@/data/programs";
import { TrendingUp } from "lucide-react";

export function SuccessStories() {
  return (
    <section id="stories" className="bg-primary-soft py-20">
      <div className="container-px mx-auto max-w-7xl">
        <div className="text-center">
          <div className="inline-block rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Success Stories
          </div>
          <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">
            580+ students. Day-Zero offers.
          </h2>
          <p className="mt-2 text-muted-foreground">From IIMs, XLRI, SPJIMR, NMIMS to Tier-2 colleges — the playbook works.</p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {successStories.map((s) => (
            <div key={s.name} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-(--shadow-card)">
              {s.avatar ? (
                <img src={s.avatar} alt={`Photo of ${s.name}`} title={s.name} loading="lazy" className="h-14 w-14 shrink-0 rounded-full object-cover" />
              ) : (
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full gradient-navy text-white font-bold">
                  {s.name.split(" ").map((p) => p[0]).slice(0, 2).join("")}
                </div>
              )}
              <div className="min-w-0 flex-1">
                <div className="truncate font-display font-bold text-primary">{s.name}</div>
                <div className="truncate text-xs text-muted-foreground">{s.college} → {s.company}</div>
              </div>
              <div className="shrink-0 rounded-lg bg-accent/15 px-2.5 py-1 text-right">
                <div className="flex items-center gap-1 text-[10px] font-semibold uppercase text-accent-foreground/80">
                  <TrendingUp className="h-3 w-3" /> CTC
                </div>
                <div className="font-display text-sm font-bold text-primary">{s.package}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 overflow-hidden">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">Our students work at</p>
          <div className="mt-4 flex overflow-hidden">
            <div className="marquee flex shrink-0 items-center gap-10 pr-10">
              {[...companyLogos, ...companyLogos].map((c, i) => (
                <span key={i} className="whitespace-nowrap font-display text-lg font-bold text-primary/70">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
