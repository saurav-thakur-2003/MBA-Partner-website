import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Play,
  Star,
  CheckCircle2,
  BadgePercent,
  Sparkles,
  Megaphone,
  ChevronRight,
  Bolt,
  Users,
  Trophy,
  Briefcase,
  MessageCircleMore,
  Send,
  PhoneCall,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { TrustStats } from "@/components/TrustStats";
import { LeadForm } from "@/components/LeadForm";
import { trust } from "@/data/content";
import { ProgramCard } from "@/components/ProgramCard";
import { Roadmap } from "@/components/Roadmap";
import { MentorShowcase } from "@/components/MentorShowcase";
import { SuccessStories } from "@/components/SuccessStories";
import { VideoTestimonials } from "@/components/VideoTestimonials";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import { AudienceSelector } from "@/components/AudienceSelector";
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
        content:
          "Live projects, case comps, mentorship & placement prep for MBA students from IIMs, XLRI, SPJIMR & more.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const homeFaqs = [
  {
    q: "Who is MBA Partner for?",
    a: "MBA students from IIMs, XLRI, SPJIMR, MDI, NMIMS, Symbiosis, IITs and Tier-2 colleges who want to accelerate their careers through real mentorship, projects, case comps and placement prep.",
  },
  {
    q: "How is this different from regular coaching?",
    a: "We are a career acceleration platform, not a coaching class. Every program is built around live industry exposure, 1:1 mentorship from Tier-1 alumni and outcome-first design.",
  },
  {
    q: "Are the mentors really from MBB and FAANG?",
    a: "Yes — every mentor is vetted and currently working at firms like McKinsey, BCG, Bain, Google, Amazon, P&G or Goldman Sachs.",
  },
  {
    q: "Will the certificate add value to my CV?",
    a: "Our certificates are recognised by recruiters, but the real CV value comes from the live projects, case comp wins and LORs you build.",
  },
  {
    q: "Can I pay in EMI?",
    a: "Yes — 3-month no-cost EMI is available at checkout for all programs above ₹15,000.",
  },
];

const bannerChips = [
  "Limited-time mega offer",
  "Save up to ₹40,000",
  "50% off bundle",
  "3-month no-cost EMI",
  "Apply now",
];

function PromoBanner() {
  return (
    <div className="relative overflow-hidden border-b border-[#ffcf33]/60 bg-[linear-gradient(90deg,#ff6a00_0%,#ffb000_18%,#ff7a00_45%,#ffcf33_70%,#ff8a00_100%)] text-amber-950 shadow-[0_12px_35px_-15px_rgba(255,122,0,0.95)]">
      <div className="absolute inset-0 opacity-55 bg-[linear-gradient(110deg,transparent_0%,rgba(255,255,255,0.35)_45%,transparent_90%),radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.75),transparent_18%),radial-gradient(circle_at_80%_50%,rgba(255,255,255,0.55),transparent_16%)]" />
      <div className="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-[#ff6a00] to-transparent" />
      <div className="absolute inset-y-0 right-0 w-20 bg-linear-to-l from-[#ff8a00] to-transparent" />
      <div className="container-px relative mx-auto max-w-7xl py-2.5 sm:py-3">
        <div className="overflow-hidden rounded-2xl border border-white/25 bg-white/10 backdrop-blur-md">
          <div className="marquee flex w-[200%] items-center gap-6 whitespace-nowrap px-4 py-2.5">
            {[...bannerChips, ...bannerChips].map((chip, index) => (
              <div key={`${chip}-${index}`} className="inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-wide">
                {index === 0 ? (
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-amber-950 text-amber-100 shadow-lg">
                    <Megaphone className="h-4 w-4" />
                  </span>
                ) : (
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-white/55 text-amber-950 shadow">
                    <Bolt className="h-4 w-4" />
                  </span>
                )}
                {chip === "Apply now" ? (
                  <Link
                    to="/programs/all-in-one-combo"
                    className="rounded-full border border-white/50 bg-amber-950 px-4 py-1.5 text-white shadow-[0_8px_24px_-12px_rgba(255,255,255,0.95)] transition-transform hover:scale-[1.03] hover:bg-black"
                  >
                    Apply now
                  </Link>
                ) : (
                  <span className="rounded-full border border-white/40 bg-white/40 px-4 py-1.5 shadow-[0_8px_24px_-12px_rgba(255,255,255,0.95)]">
                    {chip}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div>
      <PromoBanner />

      <section className="relative overflow-hidden bg-linear-to-b from-primary-soft/60 to-background pt-12 pb-24 sm:pt-16">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-32 left-1/3 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
        </div>
        <div className="container-px mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#f8f683]/70 bg-[#f8f683] px-3 py-1.5 text-xs font-extrabold text-[#111827] shadow-[0_8px_24px_-14px_rgba(248,246,131,0.9)]">
              <Star className="h-3.5 w-3.5 fill-[#111827] text-[#111827]" />
              {trust.network} Student Network · {trust.rating}
            </div>
            <h1 className="mt-5 max-w-2xl font-display text-4xl font-extrabold leading-[1.05] text-primary sm:text-5xl lg:text-6xl">
              Your MBA Journey Doesn't End With Admission.
              <br />It Begins Here.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Live Projects, Case Competitions, Placements Bootcamp, Mentorship and Career Development designed by Alumni of Old IIMs.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="xl">
                <Link to="/programs">
                  Enroll Now <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button onClick={() => window.open('https://chat.whatsapp.com/EdyvGJbQoV9Jj6eC0slSx9?mode=hq2tcla','_blank')} variant="outline" size="xl">
                <PhoneCall className="h-4 w-4" /> Join WhatsApp Community
              </Button>
              <Button asChild variant="outline" size="xl">
                <a href="https://t.me/mba_partner" target="_blank" rel="noreferrer">
                  Join Telegram Channel
                </a>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {["No-cost EMI", "100% placement support", "MBB & FAANG mentors"].map((t) => (
                <div key={t} className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-success" /> {t}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl gradient-navy p-6 shadow-(--shadow-elegant) lg:p-8">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,rgba(255,180,0,0.7),transparent_22%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.12),transparent_18%),radial-gradient(circle_at_50%_80%,rgba(255,180,0,0.2),transparent_18%)]" />
              <div className="relative grid gap-6 text-white lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
                <div className="space-y-4">
                  <div className="inline-flex rounded-full bg-accent px-4 py-2 text-xs font-bold text-accent-foreground shadow-lg">
                    NEW BATCH · Aug 2026
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.35em] text-accent">Flagship Program</div>
                  <div className="max-w-md font-display text-3xl font-extrabold sm:text-4xl">
                    All-In-One
                    <br />
                    Career OS
                  </div>
                  <p className="max-w-sm text-sm leading-relaxed text-white/80">
                    The complete stack — placement prep, case comps, live projects & 6 months of 1:1 mentorship.
                  </p>

                  <div className="grid grid-cols-3 gap-2 pt-4">
                    {[{ v: "92%", l: "Placement" }, { v: "₹38L", l: "Avg CTC" }, { v: "6 mo", l: "Mentorship" }].map((s) => (
                      <div key={s.l} className="rounded-xl bg-white/10 p-3 text-center backdrop-blur">
                        <div className="font-display text-lg font-bold text-accent">{s.v}</div>
                        <div className="text-[10px] text-white/70">{s.l}</div>
                      </div>
                    ))}
                  </div>

                  <Button asChild variant="hero" className="w-full sm:w-auto">
                    <Link to="/programs/all-in-one-combo">
                      Enroll Now · ₹39,999 <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <div className="text-[11px] text-white/60">3-month no-cost EMI · 7-day refund</div>
                </div>

                <div className="space-y-4 lg:pt-2">
                  <div className="rounded-[1.75rem] border border-white/15 bg-white/10 p-4 shadow-[0_18px_60px_-20px_rgba(0,0,0,0.55)] backdrop-blur-xl">
                    <div className="flex items-center justify-between">
                      <div className="text-[10px] font-bold uppercase tracking-[0.35em] text-accent">
                        Live cohort preview
                      </div>
                      <button className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-semibold text-white/80">
                        <Play className="h-3 w-3 fill-current" /> Watch
                      </button>
                    </div>
                    <div className="mt-3 overflow-hidden rounded-2xl bg-[linear-gradient(135deg,#111827_0%,#253c90_50%,#616ed0_100%)] p-4">
                      <div className="min-h-57.5 rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-4">
                        <div className="flex h-full min-h-47.5 flex-col justify-between gap-3">
                          <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.22em] text-white/80">
                            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(74,222,128,0.95)]" />
                            Live mentoring session
                          </div>
                          <div className="max-w-[70%]">
                            <div className="text-[2rem] font-black leading-[0.98] tracking-tight">Case<br />Interviews</div>
                            <div className="mt-2 text-[11px] leading-relaxed text-white/75">
                              MBB-style prep with mentor feedback
                            </div>
                          </div>
                          <div className="grid place-items-center self-start rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold">
                            <Play className="mr-1 h-4 w-4 fill-current text-accent" /> Play preview
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[1.75rem] border border-white/15 bg-[linear-gradient(180deg,rgba(248,246,131,0.18),rgba(255,204,182,0.15),rgba(91,103,207,0.25))] p-4 shadow-[0_18px_60px_-20px_rgba(0,0,0,0.45)] backdrop-blur-xl">
                    <div className="text-[10px] font-bold uppercase tracking-[0.32em] text-accent">Offer card</div>
                    <div className="mt-2 rounded-2xl bg-background/25 p-3">
                      <div className="text-sm font-black leading-tight text-white">Fast track your career</div>
                      <div className="mt-1 text-[11px] text-white/75">Live projects, mentorship, placement prep</div>
                    </div>
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      <div className="rounded-2xl bg-white/10 p-3 text-center">
                        <div className="text-lg font-extrabold text-accent">50%</div>
                        <div className="text-[10px] text-white/75">bundle off</div>
                      </div>
                      <div className="rounded-2xl bg-white/10 p-3 text-center">
                        <div className="text-lg font-extrabold text-accent">24/7</div>
                        <div className="text-[10px] text-white/75">support</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { icon: Users, title: "2,400+", sub: "active learners" },
                      { icon: Trophy, title: "500+", sub: "wins & offers" },
                      { icon: Briefcase, title: "200+", sub: "live projects" },
                    ].map((item) => {
                      const Icon = item.icon;
                      return (
                        <div key={item.title} className="rounded-2xl border border-white/10 bg-white/10 p-3 text-center">
                          <div className="mx-auto grid h-10 w-10 place-items-center rounded-xl bg-accent text-accent-foreground">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className="mt-2 font-display text-base font-extrabold leading-none text-white">{item.title}</div>
                          <div className="mt-1 text-[11px] text-white/70">{item.sub}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AudienceSelector />

      <LeadForm />

      <div className="-mt-8 sm:-mt-10">
        <TrustStats />
      </div>

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
          <Button asChild variant="navy">
            <Link to="/compare">Compare All <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {programs.map((p) => (
            <ProgramCard key={p.slug} program={p} />
          ))}
        </div>
      </section>

      <Roadmap />
      <MentorShowcase />
      <SuccessStories />
      <VideoTestimonials />
      <section className="container-px mx-auto max-w-7xl py-8">
        <div className="rounded-3xl border border-border bg-card p-6 shadow-(--shadow-card) sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                <MessageCircleMore className="h-4 w-4" />
                Join the community
              </div>
              <h2 className="mt-3 font-display text-3xl font-bold text-primary">Stay inside the loop with our WhatsApp and Telegram communities</h2>
              <p className="mt-2 text-muted-foreground">
                Get updates on offers, live sessions, mentor AMAs, and community support.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="hero">
                <a href="https://chat.whatsapp.com/EdyvGJbQoV9Jj6eC0slSx9?mode=hq2tcla" target="_blank" rel="noreferrer">
                  <PhoneCall className="h-4 w-4" />
                  Join WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="https://chat.whatsapp.com/EdyvGJbQoV9Jj6eC0slSx9?mode=hq2tcla" target="_blank" rel="noreferrer">
                  <Send className="h-4 w-4" />
                  Join Community
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <FAQ items={homeFaqs} />
      <CTASection />
    </div>
  );
}
