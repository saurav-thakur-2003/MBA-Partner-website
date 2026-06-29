import { ArrowUpRight, PlayCircle } from "lucide-react";
import { resources } from "@/data/content";

export function ResourcesSection() {
  return (
    <section className="container-px mx-auto max-w-7xl py-20">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="inline-block rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Free Materials
          </div>
          <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">Resources the student should see before enrolling</h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Directly surfaced from your pasted references for comparison, planning and trust-building.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {resources.map((item) => (
          <a
            key={item.title}
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="group rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">{item.type}</div>
                <h3 className="mt-2 font-display text-xl font-bold text-primary">{item.title}</h3>
              </div>
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-accent text-accent-foreground">
                <PlayCircle className="h-5 w-5" />
              </div>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
            <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
              Watch <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
