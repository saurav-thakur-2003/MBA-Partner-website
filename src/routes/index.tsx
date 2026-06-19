import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Play, Star, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TrustStats } from "@/components/TrustStats";
import { ProgramCard } from "@/components/ProgramCard";
import { Roadmap } from "@/components/Roadmap";
import { MentorShowcase } from "@/components/MentorShowcase";
import { SuccessStories } from "@/components/SuccessStories";
import { VideoTestimonials } from "@/components/VideoTestimonials";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import { programs } from "@/data/programs";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MBA Partner — India's Career Acceleration Platform for MBA Students" },
      {
        name: "description",
        content:
          "Get mentored by India's top MBA talent network. Live projects, case competitions, placement preparation & career mentorship for MBA students.",
      },
      { property: "og:title", content: "MBA Partner — India's Career Acceleration Platform" },
      {
        property: "og:description",
        content: "Live projects, case comps, mentorship & placement prep for MBA students from IIMs, XLRI, SPJIMR & more.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const homeFaqs = [
  { q: "Who is MBA Partner for?", a: "MBA students from IIMs, XLRI, SPJIMR, MDI, NMIMS, Symbiosis, IITs and Tier-2 colleges who want to accelerate their careers through real mentorship, projects, case comps and placement prep." },
  { q: "How is this different from regular coaching?", a: "We are a career acceleration platform, not a coaching class. Every program is built around live industry exposure, 1:1 mentorship from Tier-1 alumni and outcome-first design." },
  { q: "Are the mentors really from MBB and FAANG?", a: "Yes — every mentor is vetted and currently working at firms like McKinsey, BCG, Bain, Google, Amazon, P&G or Goldman Sachs." },
  { q: "Will the certificate add value to my CV?", a: "Our certificates are recognised by recruiters, but the real CV value comes from the live projects, case comp wins and LORs you build." },
  { q: "Can I pay in EMI?", a: "Yes — 3-month no-cost EMI is available at checkout for all programs above ₹15,000." },
];

function Home() {
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-soft/60 to-background pt-12 pb-24 sm:pt-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-32 left-1/3 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        </div>
        <div className="container-px mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs font-semibold text-accent-foreground">
              <Star className="h-3.5 w-3.5 fill-accent text-accent" />
              Trusted by 1,500+ MBA students · 4.9/5 rating
            </div>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] text-primary sm:text-5xl lg:text-6xl">
              Get Mentored by India's <span className="text-gradient-amber">Top MBA Talent</span> Network
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Live Projects, Case Competitions, Placement Preparation and Career Mentorship — built by alumni of IIM, XLRI & SPJIMR. Now serving MBA students across India.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="xl">
                <Link to="/programs">Explore Programs <ArrowRight className="h-5 w-5" /></Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <a href="#stories"><Play className="h-4 w-4" /> Watch Success Stories</a>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {["No-cost EMI", "100% placement support", "MBB & FAANG mentors"].map((t) => (
                <div key={t} className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-success" /> {t}</div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] rounded-3xl gradient-navy p-8 shadow-[var(--shadow-elegant)] sm:aspect-[5/6]">
              <div className="absolute -top-4 -left-4 rounded-2xl bg-accent px-4 py-2 text-xs font-bold text-accent-foreground shadow-lg">
                NEW BATCH · Aug 2026
              </div>
              <div className="flex h-full flex-col justify-between text-white">
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-accent">Flagship Program</div>
                  <div className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">All-In-One<br />Career OS</div>
                  <p className="mt-3 max-w-xs text-sm text-white/80">
                    The complete stack — placement prep, case comps, live projects & 6 months of 1:1 mentorship.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-2">
                    {[{ v: "92%", l: "Placement" }, { v: "₹38L", l: "Avg CTC" }, { v: "6 mo", l: "Mentorship" }].map((s) => (
                      <div key={s.l} className="rounded-xl bg-white/10 p-3 text-center backdrop-blur">
                        <div className="font-display text-lg font-bold text-accent">{s.v}</div>
                        <div className="text-[10px] text-white/70">{s.l}</div>
                      </div>
                    ))}
                  </div>
                  <Button asChild variant="hero" className="w-full">
                    <Link to="/programs/all-in-one-combo">Enroll Now · ₹39,999 <ArrowRight className="h-4 w-4" /></Link>
                  </Button>
                  <div className="text-center text-[11px] text-white/60">3-month no-cost EMI · 7-day refund</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustStats />

      <section className="container-px mx-auto max-w-7xl py-20">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="inline-block rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              Programs
            </div>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">
              Choose your <span className="text-gradient-amber">career sprint</span>
            </h2>
            <p className="mt-2 max-w-xl text-muted-foreground">
              Four outcome-led programs, each engineered with mentors, projects and assessments.
            </p>
          </div>
          <Button asChild variant="navy"><Link to="/compare">Compare All <ArrowRight className="h-4 w-4" /></Link></Button>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {programs.map((p) => <ProgramCard key={p.slug} program={p} />)}
        </div>
      </section>

      <Roadmap />
      <MentorShowcase />
      <SuccessStories />
      <VideoTestimonials />
      <FAQ items={homeFaqs} />
      <CTASection />
    </div>
  );
}
