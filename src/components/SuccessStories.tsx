import { successStories, companyLogos } from "@/data/programs";
import { TrendingUp, Sparkles } from "lucide-react";

const avatarGradients = [
  "from-[#616ed0] via-[#5a67cf] to-[#fbacc3]",
  "from-[#142850] via-[#1e3a6e] to-[#616ed0]",
  "from-[#5a67cf] via-[#7b8af0] to-[#f8f683]",
  "from-[#fbacc3] via-[#ffccb6] to-[#616ed0]",
];

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
          {successStories.map((s, index) => {
            const initials = s.name.split(" ").map((p) => p[0]).slice(0, 2).join("");
            const gradient = avatarGradients[index % avatarGradients.length];
            return (
              <div key={s.name} className="group rounded-[1.6rem] border border-border bg-card p-5 shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
                <div className="flex items-center gap-4">
                  <div className={`relative grid h-16 w-16 shrink-0 place-items-center overflow-hidden rounded-2xl bg-gradient-to-br ${gradient} text-white`}>
                    <span className="text-lg font-black">{initials}</span>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.35),transparent_35%)]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-display text-lg font-bold text-primary">{s.name}</div>
                    <div className="text-xs text-muted-foreground">{s.college} → {s.company}</div>
                  </div>
                  <div className="shrink-0 rounded-2xl bg-primary-soft px-3 py-2 text-right">
                    <div className="flex items-center justify-end gap-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/75">
                      <TrendingUp className="h-3 w-3" /> CTC
                    </div>
                    <div className="font-display text-sm font-bold text-primary">{s.package}</div>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-primary/60">
                  <Sparkles className="h-3.5 w-3.5 text-accent" />
                  Verified student outcome
                </div>
              </div>
            );
          })}
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
