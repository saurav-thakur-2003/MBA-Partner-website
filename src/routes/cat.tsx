import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, ChevronRight, GraduationCap, Target, Users, ShieldCheck, Star, Calculator, ChartColumn, Brain, FileText, Mic, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";

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

const catTools = [
  { icon: FileText, title: "Free RCs + 50 sectional mocks", desc: "Practice blocks with score tracking and analysis." },
  { icon: Calculator, title: "Percentile vs score calculator", desc: "Plan targets and evaluate score bands quickly." },
  { icon: ChartColumn, title: "Safe / ambitious colleges", desc: "Shortlist colleges based on profile and exam mix." },
  { icon: Brain, title: "Domain specific Q&A prep", desc: "Prepare for interviews with focused question banks." },
  { icon: Mic, title: "10 PIs + 10 GDs", desc: "Structured interview and GD practice with feedback." },
  { icon: Video, title: "100+ transcripts", desc: "Past year transcripts and mentor walkthroughs." },
  { icon: Users, title: "Top 5 mentors", desc: "Mentor credibility plus a 60-second mentor apply flow." },
  { icon: BookOpen, title: "SNAP / NMAT / XAT", desc: "Dedicated OMET support and alternate test prep." },
];

const certificationCourses = [
  { title: "Advanced Excel", link: "#" },
  { title: "Power BI Certification", link: "#" },
];

const tieUps = [
  "Current college tie-ups",
  "Past placement results",
  "Mentor and student outcomes",
  "Institutional partnership contact: 7042732092 / bharat.kapoor@prodmarkconsulting.in",
];

const faqs = [
  { q: "Who is this page for?", a: "Students preparing for CAT, XAT, SNAP, NMAT, MICAT, CMAT and similar B-school entrance exams, plus GDPI preparation." },
  { q: "Is this different from the MBA student track?", a: "Yes. This branch is built for aspirants before MBA admission, while the MBA track serves current students focused on placements and career acceleration." },
  { q: "What happens after I click a program?", a: "You’ll be routed to the detailed program page with curriculum, outcomes, mentors, testimonials, pricing and CTA options." },
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
            <Link key={name} to="/programs" className="rounded-3xl border border-border bg-card p-5 shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">CAT Track</div>
                  <h2 className="mt-2 font-display text-xl font-bold text-primary">{name}</h2>
                </div>
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-accent text-accent-foreground">
                  <BookOpen className="h-5 w-5" />
                </div>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">Detailed curriculum, mentor access, mock tests and conversion support.</p>
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
            {["Concept clarity", "Sectional mastery", "Mock testing", "GDPI preparation", "Final conversion"].map((item) => (
              <div key={item} className="rounded-2xl border border-border bg-background p-4 text-sm font-semibold text-foreground">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-10">
        <div className="rounded-[2rem] border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            CAT Toolkit
          </div>
          <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">The CAT aspirant toolkit</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {catTools.map((tool) => {
              const Icon = tool.icon;
              return (
                <div key={tool.title} className="rounded-3xl border border-border bg-background p-5 shadow-[var(--shadow-card)]">
                  <Icon className="h-5 w-5 text-primary" />
                  <h3 className="mt-4 font-display text-lg font-bold text-primary">{tool.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{tool.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-10">
        <div className="rounded-[2rem] border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Certifications + Mentors
          </div>
          <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">Excel, Power BI and mentor access</h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <div className="rounded-3xl border border-border bg-background p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">Certification Courses</div>
              <div className="mt-4 space-y-3">
                {certificationCourses.map((course) => (
                  <div key={course.title} className="flex items-center justify-between rounded-2xl border border-border bg-card px-4 py-3">
                    <div className="font-semibold text-foreground">{course.title}</div>
                    <a href={course.link} className="text-sm font-semibold text-primary">Open</a>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-border bg-background p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">Top mentor flow</div>
              <div className="mt-4 rounded-2xl bg-primary-soft p-4 text-sm text-foreground">
                Apply with a 60-second intro video and get considered for the top 5 mentor pool.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-10">
        <div className="rounded-[2rem] border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">College tie-ups</div>
          <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">Current college tie-ups and past results</h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <div className="rounded-3xl border border-border bg-background p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">Partnership details</div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {tieUps.map((item) => <li key={item}>• {item}</li>)}
              </ul>
            </div>
            <div className="rounded-3xl border border-border bg-[linear-gradient(180deg,#101c49_0%,#1f2f78_55%,#616ed0_100%)] p-5 text-white">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">YouTube / GMeet integration</div>
              <div className="mt-4 text-lg font-bold">Visible section for live classes, webinars, and community sessions</div>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href="https://youtube.com/@mbapartner?si=0TXLOPjxtMiHvJU7" target="_blank" rel="noreferrer" className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">YouTube Channel</a>
                <a href="https://meet.google.com" target="_blank" rel="noreferrer" className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">GMeet Sessions</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CatToolsSection />
      <FAQ items={faqs} />
      <CTASection />
    </div>
  );
}
