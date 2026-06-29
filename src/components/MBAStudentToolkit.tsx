import { BookOpen, FileText, Megaphone, MessagesSquare, Users, Video, ArrowUpRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

const toolkit = [
  { icon: FileText, title: "Dynamic course comparison", desc: "Compare Bootcamp, Case Comp, Live Projects and Combo with outcomes and pricing." },
  { icon: BookOpen, title: "Compendiums + sample CVs", desc: "Free materials for profile building, CV structure and ATS keywords." },
  { icon: Megaphone, title: "Brochures + more info", desc: "Program brochures, detailed pages and direct enroll buttons." },
  { icon: Users, title: "College collabs", desc: "Current tie-ups, past results and direct contact for institutional partnerships." },
  { icon: MessagesSquare, title: "FAQs + chatbot", desc: "Fast answers for students before they enroll." },
  { icon: Video, title: "Video testimonials", desc: "Short proof-first clips and guided walkthroughs." },
];

export function MBAStudentToolkit() {
  return (
    <section className="container-px mx-auto max-w-7xl py-20">
      <div className="rounded-[2rem] border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8">
        <div className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
          <Sparkles className="h-4 w-4" />
          MBA Student Toolkit
        </div>
        <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">Everything the owner asked for in one place</h2>
        <p className="mt-2 max-w-3xl text-muted-foreground">
          The site now has comparison, brochures, free materials, group offer messaging, college collaboration, mentor credibility, and testimonial proof.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {toolkit.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-3xl border border-border bg-background p-5 transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
                <Icon className="h-5 w-5 text-primary" />
                <h3 className="mt-4 font-display text-lg font-bold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild variant="hero">
            <Link to="/compare">
              Compare programs <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/programs">
              More info & enroll <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <a href="mailto:bharat.kapoor@prodmarkconsulting.in">
              Apply as mentor <ArrowUpRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
