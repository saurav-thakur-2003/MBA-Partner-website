import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, ChevronRight, GraduationCap, Target, Trophy, Users, ShieldCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import { CatToolsSection } from "@/components/CatToolsSection";

export const Route = createFileRoute("/cat")({
  head: () => ({
    meta: [
      { title: "CAT / OMETs Aspirant · MBA Partner" },
      {
        name: "description",
        content:
          "CAT Foundation, Quant Mastery, VARC Mastery, LRDI Mastery and GDPI Excellence Program for aspirants aiming for top B-schools.",
      },
      { property: "og:title", content: "CAT / OMETs Aspirant · MBA Partner" },
      { property: "og:description", content: "CAT and GDPI preparation with premium mentorship and conversion-focused support." },
    ],
    links: [{ rel: "canonical", href: "/cat" }],
  }),
  component: CatPage,
});

const programs = [
  "CAT Foundation Program",
  "Quant Mastery",
  "VARC Mastery",
  "LRDI Mastery",
  "GDPI Excellence Program",
];

const faqs = [
  {
    q: "Who is this page for?",
    a: "Students preparing for CAT, XAT, SNAP, NMAT, MICAT, CMAT and similar B-school entrance exams, plus GDPI preparation.",
  },
  {
    q: "Is this different from the MBA student track?",
    a: "Yes. This branch is built for aspirants before MBA admission, while the MBA track serves current students focused on placements and career acceleration.",
  },
  {
    q: "What happens after I click a program?",
    a: "You’ll be routed to the detailed program page with curriculum, outcomes, mentors, testimonials, pricing and CTA options.",
  },
];

function CatPage() {
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-soft/70 to-background">
        <div className="container-px mx-auto max-w-7xl py-16 sm:py-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#f8f683]/70 bg-[#f8f683] px-3 py-1.5 text-xs font-extrabold text-[#111827]">
            <Star className="h-3.5 w-3.5 fill-[#111827] text-[#111827]" />
            CAT / OMETs Aspirant Mode
          </div>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.05] text-primary sm:text-5xl lg:text-6xl">
            Crack CAT, OMETs and GDPI with a premium, outcome-led system
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Structured concept building, speed training, mock practice and interview conversion — designed to feel like a premium test-prep platform, not a generic coaching class.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="xl">
              <Link to="/programs">
                Explore Programs <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl">
              <Link to="/">
                Back to MBA Track <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-14">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {programs.map((name) => (
            <Link
              key={name}
              to="/programs"
              className="rounded-3xl border border-border bg-card p-5 shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">CAT Track</div>
                  <h2 className="mt-2 font-display text-xl font-bold text-primary">{name}</h2>
                </div>
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-accent text-accent-foreground">
                  <BookOpen className="h-5 w-5" />
                </div>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Detailed curriculum, mentor access, mock tests and conversion support.
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
            <ShieldCheck className="h-6 w-6 text-primary" />
            <h3 className="mt-4 font-display text-xl font-bold text-primary">Premium trust signals</h3>
            <p className="mt-2 text-sm text-muted-foreground">Mentor credibility, outcome metrics, structured support and transparent guidance.</p>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
            <Target className="h-6 w-6 text-primary" />
            <h3 className="mt-4 font-display text-xl font-bold text-primary">Conversion-focused prep</h3>
            <p className="mt-2 text-sm text-muted-foreground">Focus on accuracy, speed, consistency and final interview conversion.</p>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
            <Users className="h-6 w-6 text-primary" />
            <h3 className="mt-4 font-display text-xl font-bold text-primary">Community and support</h3>
            <p className="mt-2 text-sm text-muted-foreground">Learn with peers, get guidance from mentors and keep momentum high.</p>
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-8">
        <div className="rounded-[2rem] border border-border bg-card p-6 shadow-[var(--shadow-card)]">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <GraduationCap className="h-4 w-4" />
            What you get
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {[
              "Concept clarity",
              "Sectional mastery",
              "Mock testing",
              "GDPI preparation",
              "Final conversion",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-border bg-background p-4 text-sm font-semibold text-foreground">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CatToolsSection />
      <FAQ items={faqs} />
      <CTASection />
    </div>
  );
}
