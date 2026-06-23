import { useMemo, useState, useEffect } from "react";
import { ArrowRight, Award, BookOpen, Briefcase, GraduationCap, LineChart, Target, Trophy } from "lucide-react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

type Audience = "mba" | "cat";

const mbaPrograms = [
  { name: "Placement Bootcamp", to: "/programs/placement-bootcamp", accent: "Build interview readiness" },
  { name: "Live Projects", to: "/programs/live-projects", accent: "Strengthen your CV" },
  { name: "Case Competition Accelerator", to: "/programs/case-competition-accelerator", accent: "Win competitions" },
  { name: "All-In-One Combo", to: "/programs/all-in-one-combo", accent: "Best value" },
];

const catTracks = [
  { name: "CAT Foundation Program", note: "Concept building from scratch" },
  { name: "Quant Mastery", note: "Speed + accuracy in QA" },
  { name: "VARC Mastery", note: "Reading comprehension, summaries" },
  { name: "LRDI Mastery", note: "Set selection and logic" },
  { name: "GDPI Excellence Program", note: "Convert final calls" },
];

const recommendations = [
  {
    prompt: "MBA Student or CAT Aspirant?",
    icon: GraduationCap,
    answers: ["MBA Student", "CAT / OMET Aspirant"],
  },
  { prompt: "Looking for Placements?", icon: Briefcase, answers: ["Yes", "No"] },
  { prompt: "Interested in Case Competitions?", icon: Trophy, answers: ["Yes", "No"] },
  { prompt: "Need Live Projects?", icon: LineChart, answers: ["Yes", "No"] },
  { prompt: "Preparing for CAT?", icon: BookOpen, answers: ["Yes", "No"] },
];

export function AudienceSelector() {
  const [audience, setAudience] = useState<Audience>("mba");
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const navigate = useNavigate();

  const recommended = useMemo(() => {
    const isCat = selectedAnswers["mba_cat"] === "CAT / OMET Aspirant" || audience === "cat";
    if (isCat) {
      return ["CAT Foundation Program", "Quant Mastery", "VARC Mastery", "LRDI Mastery", "GDPI Excellence Program"];
    }

    if (selectedAnswers["needs_live_projects"] === "Yes") {
      return ["Live Projects", "Placement Bootcamp", "All-In-One Combo"];
    }

    if (selectedAnswers["case_comp"] === "Yes") {
      return ["Case Competition Accelerator", "All-In-One Combo"];
    }

    if (selectedAnswers["placements"] === "Yes") {
      return ["Placement Bootcamp", "All-In-One Combo"];
    }

    return ["All-In-One Combo", "Placement Bootcamp", "Live Projects"];
  }, [audience, selectedAnswers]);

  const handleAnswer = (key: string, value: string) => {
    setSelectedAnswers((current) => ({ ...current, [key]: value }));
    if (key === "mba_cat") setAudience(value === "CAT / OMET Aspirant" ? "cat" : "mba");
  };

  // Read URL params only on client after mount to avoid SSR window access.
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const url = new URL(window.location.href);
      const q = url.searchParams.get("audience") as Audience | null;
      if (q === "mba" || q === "cat") setAudience(q);
    } catch (e) {
      // ignore
    }
  }, []);

  const cards = audience === "mba" ? mbaPrograms : catTracks;

  return (
    <section className="container-px mx-auto max-w-7xl py-10 sm:py-12">
      <div className="rounded-4xl border border-border bg-card p-5 shadow-(--shadow-card) sm:p-7">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="inline-flex rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              Who Are You?
            </div>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">Premium audience selection</h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              Choose your background and we’ll show the most relevant MBA Partner journey immediately.
            </p>
          </div>
          <div className="inline-flex rounded-full border border-border bg-background p-1 text-sm font-semibold">
            <button
              onClick={() => {
                setAudience("mba");
                if (typeof window !== "undefined") {
                  try {
                    const u = new URL(window.location.href);
                    u.searchParams.set("audience", "mba");
                    window.history.replaceState({}, "", u.toString());
                  } catch (e) {}
                }
                navigate({ to: "/" });
              }}
              className={`rounded-full px-4 py-2 transition ${
                audience === "mba" ? "bg-primary text-white shadow" : "text-foreground/70"
              }`}
            >
              MBA Student
            </button>
            <button
              onClick={() => {
                setAudience("cat");
                if (typeof window !== "undefined") {
                  try {
                    const u = new URL(window.location.href);
                    u.searchParams.set("audience", "cat");
                    window.history.replaceState({}, "", u.toString());
                  } catch (e) {}
                }
                // stay on same page but show CAT view
              }}
              className={`rounded-full px-4 py-2 transition ${
                audience === "cat" ? "bg-primary text-white shadow" : "text-foreground/70"
              }`}
            >
              CAT / OMET Aspirant
            </button>
          </div>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-4 md:grid-cols-2">
            {cards.map((card) => (
              <div
                key={card.name}
                className="group rounded-3xl border border-border bg-linear-to-br from-primary-soft to-background p-5 transition hover:-translate-y-1 hover:shadow-(--shadow-elegant)"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                      {audience === "mba" ? "MBA Pathway" : "CAT Track"}
                    </div>
                    <h3 className="mt-2 font-display text-xl font-bold text-primary">{card.name}</h3>
                  </div>
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-accent text-accent-foreground">
                    <Award className="h-5 w-5" />
                  </div>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  {"accent" in card ? card.accent : card.note}
                </p>
                {audience === "mba" && "to" in card ? (
                  <Button asChild variant="outline" className="mt-4 w-full">
                    <Link to={card.to}>
                      Explore <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                ) : null}
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-border bg-linear-to-b from-[#0d1830] to-[#142850] p-5 text-white">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Which Program Is Right For You?</div>
            <div className="mt-4 space-y-3">
              {recommendations.map((question, index) => {
                const Icon = question.icon;
                const key = index === 0 ? "mba_cat" : index === 1 ? "placements" : index === 2 ? "case_comp" : index === 3 ? "needs_live_projects" : "preparing_cat";
                return (
                  <div key={question.prompt} className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-accent" />
                      <div className="text-sm font-semibold">{question.prompt}</div>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {question.answers.map((answer) => (
                        <button
                          key={answer}
                          onClick={() => handleAnswer(key, answer)}
                          className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                            selectedAnswers[key] === answer
                              ? "bg-accent text-accent-foreground"
                              : "bg-white/10 text-white/80 hover:bg-white/15"
                          }`}
                        >
                          {answer}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Recommended for you</div>
              <div className="mt-2 flex flex-wrap gap-2">
                {recommended.map((item) => (
                  <span key={item} className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
