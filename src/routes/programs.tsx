import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ProgramCard } from "@/components/ProgramCard";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { programs } from "@/data/programs";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs · MBA Partner" },
      {
        name: "description",
        content:
          "Explore all MBA Partner programs — placement bootcamp, case competition accelerator, live projects and the all-in-one combo.",
      },
      { property: "og:title", content: "Programs · MBA Partner" },
      { property: "og:description", content: "Outcome-led programs for MBA students." },
      { property: "og:url", content: "/programs" },
    ],
    links: [{ rel: "canonical", href: "/programs" }],
  }),
  component: ProgramsPage,
});

function ProgramsPage() {
  return (
    <div>
      <section className="container-px mx-auto max-w-7xl pt-16 pb-12 text-center">
        <div className="inline-block rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
          All Programs
        </div>
        <h1 className="mx-auto mt-3 max-w-3xl font-display text-4xl font-bold text-primary sm:text-5xl">
          Find the right <span className="text-gradient-amber">career sprint</span> for you
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          Pick a single program, or save 50% with our All-In-One Career OS combo.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Button asChild variant="navy">
            <Link to="/compare">
              Compare Programs <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl pb-12">
        <div className="grid gap-6 md:grid-cols-2">
          {programs.map((p) => (
            <ProgramCard key={p.slug} program={p} />
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
