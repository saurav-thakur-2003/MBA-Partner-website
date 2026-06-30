import { ArrowUpRight, Video } from "lucide-react";
import { resources } from "@/data/content";
import { ScrollReveal } from "@/components/ScrollReveal";

export function FeaturedVideosStrip() {
  const featured = resources.slice(0, 3);

  return (
    <section className="container-px mx-auto max-w-7xl py-6">
      <div className="rounded-[1.75rem] border border-border bg-card p-4 shadow-[var(--shadow-card)]">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-accent text-accent-foreground">
              <Video className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/60">Featured videos</div>
              <div className="font-display text-lg font-bold text-primary">Brochure and reference links</div>
            </div>
          </div>
          <a href="/brochures/sample-case-comp-brochure.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
            Open brochure PDF <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {featured.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 80} effect="slide-right">
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-border bg-background p-4 transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-elegant)]"
              >
                <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary/60">{item.type}</div>
                <div className="mt-2 font-semibold text-foreground">{item.title}</div>
                <div className="mt-1 text-sm text-muted-foreground">{item.description}</div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
