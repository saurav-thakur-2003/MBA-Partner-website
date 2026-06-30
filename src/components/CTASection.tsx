import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";

export function CTASection() {
  return (
    <section className="container-px mx-auto max-w-7xl py-20">
      <ScrollReveal effect="scale">
        <div className="relative overflow-hidden rounded-3xl gradient-navy p-10 text-center text-white shadow-[var(--shadow-elegant)] sm:p-16">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/25 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
        <div className="relative">
          <h2 className="font-display text-3xl font-bold sm:text-5xl">
            Ready to <span className="text-gradient-amber">accelerate your career</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            Join 1,500+ MBA students already inside India's #1 Career Acceleration Platform.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="hero" size="xl">
              <Link to="/programs">Explore Programs</Link>
            </Button>
            <Button asChild variant="outline" size="xl" className="border-white/30 bg-white/10 text-white hover:bg-white hover:text-primary">
              <Link to="/compare">Compare Programs</Link>
            </Button>
          </div>
        </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
