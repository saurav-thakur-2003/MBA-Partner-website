import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Clock, Sparkles } from "lucide-react";
import type { Program } from "@/data/programs";
import { Button } from "@/components/ui/button";

export function ProgramCard({ program, compact = false }: { program: Program; compact?: boolean }) {
  return (
    <article
      className={`group relative flex flex-col rounded-2xl border bg-card p-6 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)] ${
        program.highlight ? "border-accent ring-2 ring-accent/30" : "border-border"
      }`}
    >
      {program.badge && (
        <span className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-accent-foreground shadow">
          <Sparkles className="h-3 w-3" /> {program.badge}
        </span>
      )}
      <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
        <Clock className="h-3.5 w-3.5" /> {program.duration}
      </div>
      <h3 className="mt-2 font-display text-xl font-bold text-primary">{program.name}</h3>
      <p className="mt-1 text-sm font-medium text-accent-foreground/80">{program.tagline}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{program.shortDescription}</p>

      {!compact && (
        <ul className="mt-4 space-y-2">
          {program.outcomes.slice(0, 3).map((o) => (
            <li key={o} className="flex items-start gap-2 text-sm text-foreground/85">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
              <span>{o}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-5 flex items-end justify-between">
        <div>
          <div className="flex items-baseline gap-2">
            <span className="font-display text-2xl font-bold text-primary">₹{program.price.toLocaleString("en-IN")}</span>
            <span className="text-sm text-muted-foreground line-through">₹{program.originalPrice.toLocaleString("en-IN")}</span>
          </div>
          <div className="text-xs font-medium text-success">
            Save ₹{(program.originalPrice - program.price).toLocaleString("en-IN")}
          </div>
        </div>
      </div>

      <div className="mt-5 flex gap-2">
        <Button asChild variant="outline" size="sm" className="flex-1">
          <Link to="/programs/$slug" params={{ slug: program.slug }}>Explore</Link>
        </Button>
        <Button asChild variant="accent" size="sm" className="flex-1">
          <Link to="/programs/$slug" params={{ slug: program.slug }} hash="enroll">
            Enroll <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </Button>
      </div>
    </article>
  );
}
