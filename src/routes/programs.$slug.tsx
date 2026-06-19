import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, Clock, Star, Trophy, Users, Award, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQ } from "@/components/FAQ";
import { MentorShowcase } from "@/components/MentorShowcase";
import { SuccessStories } from "@/components/SuccessStories";
import { CTASection } from "@/components/CTASection";
import { getProgram, programs } from "@/data/programs";

export const Route = createFileRoute("/programs/$slug")({
  loader: ({ params }) => {
    const program = getProgram(params.slug);
    if (!program) throw notFound();
    return { program };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.program.name} · MBA Partner` },
          { name: "description", content: loaderData.program.shortDescription },
          { property: "og:title", content: `${loaderData.program.name} · MBA Partner` },
          { property: "og:description", content: loaderData.program.tagline },
          { property: "og:url", content: `/programs/${loaderData.program.slug}` },
        ]
      : [],
    links: loaderData ? [{ rel: "canonical", href: `/programs/${loaderData.program.slug}` }] : [],
  }),
  notFoundComponent: () => (
    <div className="container-px mx-auto max-w-3xl py-32 text-center">
      <h1 className="font-display text-4xl font-bold text-primary">Program not found</h1>
      <p className="mt-3 text-muted-foreground">The program you're looking for doesn't exist.</p>
      <Button asChild className="mt-6">
        <Link to="/programs">See all programs</Link>
      </Button>
    </div>
  ),
  component: ProgramDetail,
});

function ProgramDetail() {
  const { program } = Route.useLoaderData() as { program: import("@/data/programs").Program };
  const others = programs.filter((p) => p.slug !== program.slug).slice(0, 3);
  const savings = program.originalPrice - program.price;

  return (
    <div>
      <section className="relative overflow-hidden gradient-navy pt-16 pb-24 text-white">
        <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="container-px mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div className="animate-fade-up">
            {program.badge && (
              <div className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase text-accent-foreground">
                <Sparkles className="h-3 w-3" /> {program.badge}
              </div>
            )}
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              {program.name}
            </h1>
            <p className="mt-3 font-display text-xl text-accent">{program.tagline}</p>
            <p className="mt-5 max-w-2xl text-white/85">{program.shortDescription}</p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5">
                <Clock className="h-4 w-4 text-accent" /> {program.duration}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5">
                <Users className="h-4 w-4 text-accent" /> 1:1 Mentorship
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5">
                <Star className="h-4 w-4 text-accent" /> 4.9/5 rating
              </span>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="xl">
                <a href="#enroll">
                  Enroll Now <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="xl" className="border-white/30 bg-white/10 text-white hover:bg-white hover:text-primary">
                <a href="#curriculum">View Curriculum</a>
              </Button>
            </div>
          </div>

          <div id="enroll" className="rounded-3xl bg-white p-6 text-foreground shadow-[var(--shadow-elegant)]">
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Total Investment</div>
            <div className="mt-1 flex items-baseline gap-3">
              <span className="font-display text-4xl font-extrabold text-primary">₹{program.price.toLocaleString("en-IN")}</span>
              <span className="text-base text-muted-foreground line-through">₹{program.originalPrice.toLocaleString("en-IN")}</span>
            </div>
            <div className="mt-1 inline-block rounded-full bg-success/15 px-2.5 py-0.5 text-xs font-bold text-success">
              You save ₹{savings.toLocaleString("en-IN")}
            </div>
            <div className="my-5 h-px bg-border" />
            <ul className="space-y-2.5 text-sm">
              {program.outcomes.slice(0, 4).map((o) => (
                <li key={o} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
            <Button variant="hero" size="lg" className="mt-5 w-full">
              Enroll Now <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="mt-2 w-full">
              Talk to a Counsellor
            </Button>
            <div className="mt-3 text-center text-[11px] text-muted-foreground">3-month no-cost EMI · 7-day refund</div>
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-20">
        <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl">Program Outcomes</h2>
        <p className="mt-2 text-muted-foreground">By the end of this program, you will have:</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {program.outcomes.map((o) => (
            <div key={o} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent-foreground">
                <Trophy className="h-5 w-5" />
              </div>
              <p className="font-medium text-foreground/90">{o}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary-soft py-20">
        <div className="container-px mx-auto max-w-7xl">
          <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl">Who Should Join</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {program.whoFor.map((w, i) => (
              <div key={w} className="rounded-2xl bg-card p-6 shadow-[var(--shadow-card)]">
                <div className="grid h-10 w-10 place-items-center rounded-xl gradient-navy font-bold text-white">{i + 1}</div>
                <p className="mt-3 text-foreground/85">{w}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-20">
        <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl">What's included</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {program.features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent/15">
                <Award className="h-5 w-5 text-accent-foreground" />
              </div>
              <h3 className="mt-3 font-display text-lg font-bold text-primary">{f.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="curriculum" className="bg-primary-soft py-20">
        <div className="container-px mx-auto max-w-5xl">
          <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl">Curriculum Timeline</h2>
          <p className="mt-2 text-muted-foreground">A week-by-week sprint plan, designed for outcomes.</p>
          <div className="mt-10 space-y-5">
            {program.modules.map((m, i) => (
              <div key={i} className="grid grid-cols-[auto_1fr] gap-5 rounded-2xl bg-card p-6 shadow-[var(--shadow-card)] sm:grid-cols-[140px_1fr]">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-accent-foreground/80">{m.week}</div>
                  <div className="mt-1 font-display text-xs font-bold text-muted-foreground">Module {i + 1}</div>
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-bold text-primary">{m.title}</h3>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {m.topics.map((t) => (
                      <li key={t} className="rounded-full bg-primary-soft px-3 py-1 text-xs font-medium text-primary">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MentorShowcase />
      <SuccessStories />
      <FAQ items={program.faqs} title={`${program.name} · FAQs`} />

      <div className="sticky bottom-0 z-40 border-t border-border bg-background/95 p-3 shadow-[0_-8px_30px_-12px_rgba(0,0,0,0.15)] backdrop-blur lg:hidden">
        <div className="grid grid-cols-[1fr_auto] items-center gap-3">
          <div className="min-w-0">
            <div className="font-display text-lg font-bold text-primary">₹{program.price.toLocaleString("en-IN")}</div>
            <div className="truncate text-[11px] text-muted-foreground">
              EMI from ₹{Math.round(program.price / 3).toLocaleString("en-IN")}/mo
            </div>
          </div>
          <Button asChild variant="hero" size="lg">
            <a href="#enroll">
              Enroll <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>

      <section className="container-px mx-auto max-w-7xl py-20">
        <h2 className="font-display text-3xl font-bold text-primary">Explore other programs</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {others.map((p) => (
            <Link
              key={p.slug}
              to="/programs/$slug"
              params={{ slug: p.slug }}
              className="group rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-1 hover:border-accent/50 hover:shadow-[var(--shadow-card)]"
            >
              <div className="text-xs font-semibold uppercase tracking-wider text-accent-foreground/80">{p.duration}</div>
              <h3 className="mt-1 font-display text-lg font-bold text-primary">{p.name}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{p.tagline}</p>
              <div className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Explore <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
