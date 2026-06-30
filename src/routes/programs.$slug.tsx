import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  CalendarDays,
  Check,
  Clock3,
  GraduationCap,
  Megaphone,
  ShieldCheck,
  Star,
  Trophy,
  Users,
  Award,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQ } from "@/components/FAQ";
import { MentorShowcase } from "@/components/MentorShowcase";
import { SuccessStories } from "@/components/SuccessStories";
import { CTASection } from "@/components/CTASection";
import { getProgram, programs, mentors, companyLogos } from "@/data/programs";
import { pricing } from "@/data/content";
import { ScrollReveal } from "@/components/ScrollReveal";

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

const programComparisonRows = [
  { label: "Mentorship", key: "mentorship" },
  { label: "Mock Interviews", key: "mockInterviews" },
  { label: "Projects", key: "projects" },
  { label: "Certificates", key: "certificates" },
  { label: "Placement Support", key: "placementSupport" },
];

const testimonials = [
  { name: "Aayushi Gupta", school: "FMS Delhi", company: "Amazon", quote: "The live projects made my CV materially stronger and changed how I performed in interviews." },
  { name: "Shruti Satdeve", school: "IIM Udaipur", company: "Accenture Strategy", quote: "The mentor feedback was structured, direct and outcome focused. Exactly what I needed." },
  { name: "Megha Bhattacharya", school: "IIM Mumbai", company: "Kearney", quote: "The case prep and project exposure made the journey feel premium and practical." },
];

function ProgramDetail() {
  const { program } = Route.useLoaderData() as { program: import("@/data/programs").Program };
  const others = programs.filter((p) => p.slug !== program.slug).slice(0, 3);
  const savings = program.originalPrice - program.price;

  return (
    <div>
      <section className="relative overflow-hidden gradient-navy pt-16 pb-16 text-white section-entrance">
        <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute left-10 top-16 h-72 w-72 rounded-full bg-white/10 blur-3xl animate-pulse-soft" />
        <div className="container-px mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="animate-fade-up">
            {program.badge && (
              <div className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase text-accent-foreground">
                <Sparkles className="h-3 w-3" /> {program.badge}
              </div>
            )}
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold">
              <BadgeCheck className="h-3.5 w-3.5 text-accent" />
              Premium MBA Partner experience
            </div>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              {program.name}
            </h1>
            <p className="mt-3 font-display text-xl text-accent">{program.tagline}</p>
            <p className="mt-5 max-w-2xl text-white/85">{program.shortDescription}</p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 transition-transform duration-300 hover:scale-[1.03]">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent">
                  <Clock3 className="h-4 w-4" /> Duration
                </div>
                <div className="mt-2 font-display text-2xl font-bold">{program.duration}</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 transition-transform duration-300 hover:scale-[1.03]">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent">
                  <Users className="h-4 w-4" /> Mentorship
                </div>
                <div className="mt-2 font-display text-2xl font-bold">{program.mentorship}</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 transition-transform duration-300 hover:scale-[1.03]">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent">
                  <Star className="h-4 w-4" /> Rating
                </div>
                <div className="mt-2 font-display text-2xl font-bold">4.9/5</div>
              </div>
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
              <Button asChild variant="outline" size="xl" className="border-white/30 bg-white/10 text-white hover:bg-white hover:text-primary">
                <a href="#book-counselling">Book Counseling</a>
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold text-white/70">
              <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5"><ShieldCheck className="mr-1 inline h-3.5 w-3.5 text-accent" /> Trust badges</span>
              <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5"><Trophy className="mr-1 inline h-3.5 w-3.5 text-accent" /> Success metrics</span>
              <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5"><Megaphone className="mr-1 inline h-3.5 w-3.5 text-accent" /> Limited seats</span>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 text-foreground shadow-(--shadow-elegant) transition-transform duration-300 hover:-translate-y-1">
            <div id="enroll" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Pricing</div>
            <div className="mt-1 flex items-baseline gap-3">
              <span className="font-display text-4xl font-extrabold text-primary">
                {program.slug === 'placement-bootcamp'
                  ? pricing.placementsBootcamp.price
                  : program.slug === 'all-in-one-combo'
                  ? pricing.allInOneCombo2.price
                  : program.slug === 'case-competition-accelerator'
                  ? pricing.caseCompetitions.dominating.price
                  : program.slug === 'live-projects'
                  ? pricing.liveProjects[0].price
                  : `₹${program.price.toLocaleString('en-IN')}`}
              </span>
              <span className="text-base text-muted-foreground line-through">
                {program.slug === 'placement-bootcamp'
                  ? pricing.placementsBootcamp.was
                  : program.slug === 'all-in-one-combo'
                  ? pricing.allInOneCombo2.was
                  : program.slug === 'case-competition-accelerator'
                  ? pricing.caseCompetitions.dominating.was
                  : program.slug === 'live-projects'
                  ? pricing.liveProjects[0].was
                  : `₹${program.originalPrice.toLocaleString('en-IN')}`}
              </span>
            </div>
            <div className="mt-1 inline-block rounded-full bg-success/15 px-2.5 py-0.5 text-xs font-bold text-success">
              {program.slug === 'placement-bootcamp'
                ? `You save ${pricing.placementsBootcamp.was}`
                : `You save ₹${savings.toLocaleString('en-IN')}`}
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
            <Button asChild variant="outline" size="lg" className="mt-2 w-full">
              <a href="#book-counselling">Book Counseling</a>
            </Button>
            <div className="mt-3 text-center text-[11px] text-muted-foreground">3-month no-cost EMI · 7-day refund</div>

            <div className="mt-6 rounded-2xl bg-primary-soft p-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-primary">Urgency</div>
              <div className="mt-2 text-sm text-foreground/80">Limited mentor bandwidth. Priority admissions for serious students only.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-14">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <ScrollReveal effect="scale">
            <div className="rounded-4xl border border-border bg-card p-6 shadow-(--shadow-card) transition-transform duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
            <div className="inline-flex rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              Program Overview
            </div>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary">What students get</h2>
            <p className="mt-3 text-muted-foreground">{program.shortDescription}</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {program.features.map((feature) => (
                <div key={feature.title} className="rounded-2xl border border-border bg-background p-4">
                  <h3 className="font-display text-lg font-bold text-primary">{feature.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
            </div>
          </ScrollReveal>

            <ScrollReveal effect="scale">
            <div className="rounded-4xl border border-border bg-card p-6 shadow-(--shadow-card) transition-transform duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
            <div className="inline-flex rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              Comparison
            </div>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary">Why choose this program</h2>
            <div className="mt-5 overflow-hidden rounded-2xl border border-border">
              <table className="w-full text-sm">
                <tbody>
                  {programComparisonRows.map((row) => (
                    <tr key={row.label} className="border-b border-border last:border-b-0">
                      <td className="bg-primary-soft px-4 py-3 font-semibold text-primary">{row.label}</td>
                      <td className="px-4 py-3 text-foreground/80">{program[row.key as keyof typeof program] as string}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            </div>
            </ScrollReveal>
        </div>
      </section>

      <section className="bg-primary-soft py-16">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-3">
            <ScrollReveal effect="slide-left">
            <div className="rounded-4xl bg-card p-6 shadow-(--shadow-card) transition-transform duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)] lg:col-span-2">
              <h2 className="font-display text-3xl font-bold text-primary">Who Should Join</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {program.whoFor.map((item, index) => (
                  <div key={item} className="rounded-2xl border border-border bg-background p-4 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
                    <div className="grid h-10 w-10 place-items-center rounded-xl gradient-navy font-bold text-white">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <p className="mt-3 text-sm text-foreground/85">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            </ScrollReveal>

            <ScrollReveal effect="slide-right">
            <div className="rounded-4xl bg-card p-6 shadow-(--shadow-card) transition-transform duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
              <h2 className="font-display text-3xl font-bold text-primary">Expected Outcomes</h2>
              <ul className="mt-5 space-y-3">
                {program.outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-2 rounded-2xl bg-primary-soft p-3 text-sm text-foreground/85 transition-transform duration-300 hover:translate-x-1">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
            </ScrollReveal>
        </div>
        </div>
      </section>

      <section id="curriculum" className="container-px mx-auto max-w-7xl py-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="inline-flex rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              Curriculum
            </div>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">Curriculum Timeline</h2>
          </div>
          <div className="hidden items-center gap-2 rounded-full border border-border bg-card px-3 py-2 text-xs font-semibold text-foreground/70 lg:flex">
            <CalendarDays className="h-4 w-4 text-primary" />
            6 months of guided progress
          </div>
        </div>
        <div className="mt-8 space-y-4">
          {program.modules.map((module, index) => (
            <div key={module.title} className="grid gap-4 rounded-2xl border border-border bg-card p-5 shadow-(--shadow-card) md:grid-cols-[180px_1fr]">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-accent-foreground/80">{module.week}</div>
                <div className="mt-1 font-display text-lg font-bold text-primary">Module {index + 1}</div>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-primary">{module.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {module.topics.map((topic) => (
                    <span key={topic} className="rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary-soft py-16">
        <div className="container-px mx-auto max-w-7xl">
          <div className="flex items-end justify-between">
            <div>
              <div className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                Mentor Profiles
              </div>
              <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">Learn from credible operators</h2>
            </div>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {mentors.map((mentor) => (
              <div key={mentor.name} className="rounded-2xl bg-card p-5 shadow-(--shadow-card)">
                <div className="grid h-14 w-14 place-items-center rounded-2xl gradient-navy font-bold text-white">
                  {mentor.name.split(" ").map((part) => part[0]).slice(0, 2).join("")}
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-primary">{mentor.name}</h3>
                <p className="text-sm text-muted-foreground">{mentor.role}</p>
                <div className="mt-3 space-y-1.5 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1.5"><GraduationCap className="h-3.5 w-3.5 text-primary" /> {mentor.college}</div>
                  <div className="flex items-center gap-1.5"><Award className="h-3.5 w-3.5 text-primary" /> {mentor.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-16">
        <div className="inline-flex rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
          Social Proof
        </div>
        <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">Testimonials & success stories</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="rounded-2xl border border-border bg-card p-5 shadow-(--shadow-card)">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-primary-soft font-bold text-primary">
                  {item.name.split(" ").map((part) => part[0]).slice(0, 2).join("")}
                </div>
                <div>
                  <div className="font-display text-base font-bold text-primary">{item.name}</div>
                  <div className="text-xs text-muted-foreground">{item.school} · {item.company}</div>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/80">“{item.quote}”</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary-soft py-16">
        <div className="container-px mx-auto max-w-7xl">
          <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl">Company logos</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {companyLogos.map((company) => (
              <span key={company} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground/75 shadow-sm">
                {company}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-16">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr]">
          <div className="rounded-4xl border border-border bg-card p-6 shadow-(--shadow-card)">
            <h2 className="font-display text-3xl font-bold text-primary">FAQ</h2>
            <FAQ items={program.faqs} title="" />
          </div>

          <div className="rounded-4xl border border-border bg-card p-6 shadow-(--shadow-card)">
            <div id="book-counselling" className="inline-flex rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              Book Counseling CTA
            </div>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary">Talk to the MBA Partner team</h2>
            <p className="mt-2 text-muted-foreground">Get a free program fit call, compare options, and see what path is best for your goals.</p>
            <div className="mt-5 space-y-3">
              <input className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm" placeholder="Your name" />
              <input className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm" placeholder="Mobile / WhatsApp number" />
              <select className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm">
                <option>MBA Student</option>
                <option>CAT Aspirant</option>
              </select>
              <Button className="w-full" variant="hero">
                Book Free Counseling
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-10">
        <div className="rounded-4xl border border-border bg-card p-6 shadow-(--shadow-card)">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-primary-soft p-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-primary">Limited Seats</div>
              <div className="mt-2 text-sm text-foreground/80">Priority mentor bandwidth for this batch.</div>
            </div>
            <div className="rounded-2xl bg-primary-soft p-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-primary">Urgency</div>
              <div className="mt-2 text-sm text-foreground/80">Enroll before seats and mentor slots fill up.</div>
            </div>
            <div className="rounded-2xl bg-primary-soft p-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-primary">Sticky CTA</div>
              <div className="mt-2 text-sm text-foreground/80">Enrollment button stays visible on mobile.</div>
            </div>
            <div className="rounded-2xl bg-primary-soft p-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-primary">Trust</div>
              <div className="mt-2 text-sm text-foreground/80">Premium design, social proof, and mentor credibility.</div>
            </div>
          </div>
        </div>
      </section>

      <MentorShowcase />
      <SuccessStories />
      <StickyEnroll programSlug={program.slug} price={program.price} />
      <section className="container-px mx-auto max-w-7xl pb-12">
        <div className="rounded-4xl border border-border bg-card p-6 shadow-(--shadow-card)">
          <div className="inline-flex rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Pricing
          </div>
          <h2 className="mt-3 font-display text-3xl font-bold text-primary">Pricing and enrollment</h2>
          <p className="mt-2 text-muted-foreground">
            Retained MBA Partner pricing structure with clear value framing and immediate action paths.
          </p>
        </div>
      </section>

      <CTASection />
    </div>
  );
}

function StickyEnroll({ programSlug, price }: { programSlug: string; price: number }) {
  return (
    <div className="sticky bottom-0 z-40 border-t border-border bg-background/95 p-3 shadow-[0_-8px_30px_-12px_rgba(0,0,0,0.15)] backdrop-blur lg:hidden">
      <div className="grid grid-cols-[1fr_auto] items-center gap-3">
        <div className="min-w-0">
          <div className="font-display text-lg font-bold text-primary">₹{price.toLocaleString("en-IN")}</div>
          <div className="truncate text-[11px] text-muted-foreground">EMI from ₹{Math.round(price / 3).toLocaleString("en-IN")}/mo</div>
        </div>
        <Button asChild variant="hero" size="lg">
          <Link to={`/programs/${programSlug}`}>
            Enroll <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
