import { ArrowUpRight, FileText, Image as ImageIcon } from "lucide-react";

export function BrochureShowcase() {
  return (
    <section className="container-px mx-auto max-w-7xl py-20">
      <div className="rounded-[2rem] border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8">
        <div className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
          <FileText className="h-4 w-4" />
          Brochure assets
        </div>
        <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">Live Project and Case Comp brochures</h2>
        <p className="mt-2 max-w-3xl text-muted-foreground">
          These are now visible on the website so students can scan the design and open the source material directly.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <a
            href="/brochures/sample-live-project-brochure.png"
            target="_blank"
            rel="noreferrer"
            className="group overflow-hidden rounded-[1.75rem] border border-border bg-background transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
          >
            <div className="relative aspect-[4/5] bg-muted">
              <img
                src="/brochures/sample-live-project-brochure.png"
                alt="Sample Live Project Brochure"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 text-white">
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">Live Project</div>
                <div className="mt-1 flex items-center gap-2 text-lg font-bold">
                  View brochure <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          </a>

          <a
            href="/brochures/sample-case-comp-brochure.pdf"
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-border bg-background transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
          >
            <div className="grid flex-1 place-items-center bg-[linear-gradient(180deg,#101c49_0%,#1f2f78_55%,#616ed0_100%)] p-8 text-center text-white">
              <div className="rounded-3xl border border-white/15 bg-white/10 p-8">
                <ImageIcon className="mx-auto h-10 w-10 text-accent" />
                <div className="mt-4 text-2xl font-black">Case Comp Brochure</div>
                <div className="mt-2 text-sm text-white/75">
                  PDF version available for direct viewing and download.
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between p-5">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/60">Case Competition</div>
                <div className="mt-1 text-lg font-bold text-primary">Open brochure PDF</div>
              </div>
              <ArrowUpRight className="h-5 w-5 text-primary" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
