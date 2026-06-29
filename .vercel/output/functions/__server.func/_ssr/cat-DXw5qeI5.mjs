import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-CoQ3ZP4A.mjs";
import { B as Calculator, D as GraduationCap, O as FileText, P as ChevronRight, R as ChartColumn, U as Brain, W as BookOpen, Y as ArrowRight, d as ShieldCheck, i as Users, l as Star, s as Target } from "../_libs/lucide-react.mjs";
import { t as FAQ } from "./FAQ-CJo438p0.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as CTASection } from "./CTASection-DpcuUs9N.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cat-DXw5qeI5.js
var import_jsx_runtime = require_jsx_runtime();
var tools = [
	{
		icon: FileText,
		title: "50 Free sectional mocks",
		desc: "VARC, QA and LRDI practice blocks with score tracking."
	},
	{
		icon: Brain,
		title: "Free RCs and tricks",
		desc: "Aristotle-style reading comprehension tips and quick strategies."
	},
	{
		icon: Calculator,
		title: "Percentile vs score",
		desc: "Visual calculator for planning scores and target percentiles."
	},
	{
		icon: ChartColumn,
		title: "Safe / ambitious colleges",
		desc: "College planning support for application strategy."
	},
	{
		icon: Target,
		title: "Domain Q&A prep",
		desc: "Questions for GDPI and domain-specific interview prep."
	},
	{
		icon: FileText,
		title: "Leaderboard",
		desc: "Compete on mocks and track rank across the cohort."
	},
	{
		icon: Brain,
		title: "SNAP / NMAT / XAT",
		desc: "Coverage for OMETs and alternate exam prep."
	},
	{
		icon: Target,
		title: "Profile improvement",
		desc: "Answer the 'why you?' question with stronger story framing."
	}
];
function CatToolsSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-px mx-auto max-w-7xl py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-[2rem] border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "inline-block rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary",
					children: "CAT / OMET Free Tools"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-3xl font-bold text-primary sm:text-4xl",
					children: "Everything the CAT aspirant asked for"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4",
					children: tools.map((tool) => {
						const Icon = tool.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl border border-border bg-background p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5 text-primary" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-display text-lg font-bold text-primary",
									children: tool.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: tool.desc
								})
							]
						}, tool.title);
					})
				})
			]
		})
	});
}
var programs = [
	"CAT Foundation Program",
	"Quant Mastery",
	"VARC Mastery",
	"LRDI Mastery",
	"GDPI Excellence Program"
];
var faqs = [
	{
		q: "Who is this page for?",
		a: "Students preparing for CAT, XAT, SNAP, NMAT, MICAT, CMAT and similar B-school entrance exams, plus GDPI preparation."
	},
	{
		q: "Is this different from the MBA student track?",
		a: "Yes. This branch is built for aspirants before MBA admission, while the MBA track serves current students focused on placements and career acceleration."
	},
	{
		q: "What happens after I click a program?",
		a: "You’ll be routed to the detailed program page with curriculum, outcomes, mentors, testimonials, pricing and CTA options."
	}
];
function CatPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative overflow-hidden bg-gradient-to-b from-primary-soft/70 to-background",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-px mx-auto max-w-7xl py-16 sm:py-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 rounded-full border border-[#f8f683]/70 bg-[#f8f683] px-3 py-1.5 text-xs font-extrabold text-[#111827]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3.5 w-3.5 fill-[#111827] text-[#111827]" }), "CAT / OMETs Aspirant Mode"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.05] text-primary sm:text-5xl lg:text-6xl",
							children: "Crack CAT, OMETs and GDPI with a premium, outcome-led system"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg",
							children: "Structured concept building, speed training, mock practice and interview conversion — designed to feel like a premium test-prep platform, not a generic coaching class."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-7 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "hero",
								size: "xl",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/programs",
									children: ["Explore Programs ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-5 w-5" })]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "outline",
								size: "xl",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/",
									children: ["Back to MBA Track ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" })]
								})
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "container-px mx-auto max-w-7xl py-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-5 md:grid-cols-2 lg:grid-cols-5",
					children: programs.map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/programs",
						className: "rounded-3xl border border-border bg-card p-5 shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs font-semibold uppercase tracking-[0.3em] text-primary/70",
								children: "CAT Track"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 font-display text-xl font-bold text-primary",
								children: name
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-11 w-11 place-items-center rounded-2xl bg-accent text-accent-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "h-5 w-5" })
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted-foreground",
							children: "Detailed curriculum, mentor access, mock tests and conversion support."
						})]
					}, name))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "container-px mx-auto max-w-7xl py-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-6 lg:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-6 w-6 text-primary" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-display text-xl font-bold text-primary",
									children: "Premium trust signals"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: "Mentor credibility, outcome metrics, structured support and transparent guidance."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Target, { className: "h-6 w-6 text-primary" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-display text-xl font-bold text-primary",
									children: "Conversion-focused prep"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: "Focus on accuracy, speed, consistency and final interview conversion."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-6 w-6 text-primary" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-display text-xl font-bold text-primary",
									children: "Community and support"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: "Learn with peers, get guidance from mentors and keep momentum high."
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "container-px mx-auto max-w-7xl py-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-[2rem] border border-border bg-card p-6 shadow-[var(--shadow-card)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "h-4 w-4" }), "What you get"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-5",
						children: [
							"Concept clarity",
							"Sectional mastery",
							"Mock testing",
							"GDPI preparation",
							"Final conversion"
						].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-2xl border border-border bg-background p-4 text-sm font-semibold text-foreground",
							children: item
						}, item))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CatToolsSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, { items: faqs }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {})
		]
	});
}
//#endregion
export { CatPage as component };
