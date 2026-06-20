import { Users, Trophy, Briefcase, GraduationCap } from "lucide-react";

const stats = [
  { icon: Users, value: "1,500+", label: "Students Mentored" },
  { icon: Trophy, value: "500+", label: "Case Comp Winners" },
  { icon: Briefcase, value: "200+", label: "Live Projects" },
  { icon: GraduationCap, value: "50+", label: "Industry Mentors" },
];

export function TrustStats() {
  return (
    <section className="container-px mx-auto max-w-7xl py-6 sm:py-8">
      <div className="grid grid-cols-1 gap-2 rounded-3xl border border-border bg-card p-3 shadow-[var(--shadow-card)] sm:grid-cols-2 sm:p-4 lg:grid-cols-4">
        {stats.map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex items-center gap-3 rounded-2xl px-3 py-2 transition-colors hover:bg-primary-soft/70">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl gradient-navy text-white">
              <Icon className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <div className="font-display text-2xl font-extrabold text-foreground sm:text-3xl">{value}</div>
              <div className="truncate text-xs font-medium text-foreground/70">{label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
