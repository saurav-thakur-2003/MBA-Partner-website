import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-Tt9GBSDe.mjs";
import { K as BookOpen, R as Check, Z as ArrowRight, a as Trophy, d as ShieldCheck, i as Users, n as X, u as Sparkles } from "../_libs/lucide-react.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as programs } from "./programs-BuXAze3l.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/compare-By6BKcYo.js
var import_jsx_runtime = require_jsx_runtime();
var rows = [
	{
		label: "Duration",
		key: "duration"
	},
	{
		label: "Mentorship",
		key: "mentorship"
	},
	{
		label: "Mock Interviews",
		key: "mockInterviews"
	},
	{
		label: "Projects",
		key: "projects"
	},
	{
		label: "Certificates",
		key: "certificates"
	},
	{
		label: "Placement Support",
		key: "placementSupport"
	}
];
var pastedComparison = [
	{
		feature: "Live Project Output (CV)",
		combo: true,
		bootcamp: false,
		liveProject: true,
		caseComp: false
	},
	{
		feature: "Case Competition Prep",
		combo: true,
		bootcamp: false,
		liveProject: false,
		caseComp: true
	},
	{
		feature: "Bootcamp Modules (SIP Prep)",
		combo: true,
		bootcamp: true,
		liveProject: false,
		caseComp: false
	},
	{
		feature: "Mentor 1:1 Sessions",
		combo: true,
		bootcamp: true,
		liveProject: false,
		caseComp: false
	},
	{
		feature: "Domain Coverage",
		combo: "All 5",
		bootcamp: "All 5",
		liveProject: "1-2",
		caseComp: "Consulting"
	},
	{
		feature: "ATS CV Points",
		combo: "5 CV + 7 PI + 7 GDs",
		bootcamp: "5 CV + 7 PI + 7 GDs",
		liveProject: "2-5",
		caseComp: "3-5"
	}
];
function ComparePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-px mx-auto max-w-7xl pt-16 pb-12 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "inline-block rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary",
				children: "Compare Programs"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "mx-auto mt-3 max-w-3xl font-display text-4xl font-bold text-primary sm:text-5xl",
				children: ["Pick the program that ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gradient-amber",
					children: "matches your goal"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto mt-3 max-w-2xl text-muted-foreground",
				children: "Side-by-side view of pricing, mentorship, projects and outcomes."
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-px mx-auto max-w-7xl pb-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-8 grid gap-4 md:grid-cols-4",
				children: [
					{
						label: "Best value",
						value: "All-In-One Combo",
						icon: Sparkles
					},
					{
						label: "Mentor access",
						value: "1:1 + live cohorts",
						icon: Users
					},
					{
						label: "Trust signal",
						value: "Transparent outcomes",
						icon: ShieldCheck
					},
					{
						label: "Conversion driver",
						value: "Urgency + clarity",
						icon: Trophy
					}
				].map((item) => {
					const Icon = item.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-[1.6rem] border border-border bg-card p-4 shadow-[var(--shadow-card)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-10 w-10 place-items-center rounded-2xl bg-primary-soft text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] font-semibold uppercase tracking-[0.28em] text-primary/60",
								children: item.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-base font-bold text-primary",
								children: item.value
							})] })]
						})
					}, item.label);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8 rounded-[2rem] border border-border bg-card p-6 shadow-[var(--shadow-card)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "h-4 w-4" }), "Pasted comparison summary"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full min-w-[760px] text-left text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-border bg-gradient-to-r from-primary-soft to-accent/10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "rounded-tl-2xl p-4 text-xs font-semibold uppercase tracking-[0.28em] text-primary/70",
									children: "Feature"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "p-4 text-sm font-semibold text-primary",
									children: "All-In-One Combo"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "p-4 text-sm font-semibold text-primary",
									children: "Bootcamp"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "p-4 text-sm font-semibold text-primary",
									children: "Live Project"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "rounded-tr-2xl p-4 text-sm font-semibold text-primary",
									children: "Case Comp"
								})
							]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: pastedComparison.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-border/70 transition hover:bg-primary-soft/35",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "p-3 font-medium text-foreground",
								children: row.feature
							}), [
								row.combo,
								row.bootcamp,
								row.liveProject,
								row.caseComp
							].map((cell, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "p-3 text-muted-foreground",
								children: cell === true ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" })
								}) : cell === false ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-500/10 text-slate-400",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary",
									children: cell
								})
							}, index))]
						}, row.feature)) })]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-x-auto rounded-3xl border border-border bg-card shadow-[var(--shadow-card)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[840px] text-left text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-b border-border bg-primary-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "sticky left-0 z-10 bg-primary-soft p-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground",
							children: "Feature"
						}), programs.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: `p-4 align-top ${p.highlight ? "bg-accent/10" : ""}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-1",
								children: [
									p.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "self-start rounded-full bg-accent px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-accent-foreground",
										children: p.badge
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-base font-bold text-primary",
										children: p.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-normal text-muted-foreground",
										children: p.tagline
									})
								]
							})
						}, p.slug))]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-border",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "sticky left-0 z-10 bg-card p-4 font-semibold text-primary",
								children: "Price"
							}), programs.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: `p-4 align-top ${p.highlight ? "bg-accent/5" : ""}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "font-display text-xl font-bold text-primary",
										children: ["₹", p.price.toLocaleString("en-IN")]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-xs text-muted-foreground line-through",
										children: ["₹", p.originalPrice.toLocaleString("en-IN")]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-1 text-[11px] font-semibold text-success",
										children: ["Save ₹", (p.originalPrice - p.price).toLocaleString("en-IN")]
									})
								]
							}, p.slug))]
						}),
						rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-border",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "sticky left-0 z-10 bg-card p-4 font-medium text-foreground/85",
								children: row.label
							}), programs.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: `p-4 align-top text-foreground/80 ${p.highlight ? "bg-accent/5" : ""}`,
								children: String(p[row.key])
							}, p.slug))]
						}, row.label)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-border",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "sticky left-0 z-10 bg-card p-4 font-medium text-foreground/85",
								children: "Lifetime Alumni"
							}), programs.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: `p-4 ${p.highlight ? "bg-accent/5" : ""}`,
								children: p.highlight ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-5 w-5 text-success" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5 text-muted-foreground/50" })
							}, p.slug))]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { className: "sticky left-0 z-10 bg-card p-4" }), programs.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: `p-4 ${p.highlight ? "bg-accent/5" : ""}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: p.highlight ? "hero" : "navy",
								size: "sm",
								className: "w-full",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/programs/$slug",
									params: { slug: p.slug },
									children: ["Explore ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
								})
							})
						}, p.slug))] })
					] })]
				})
			})
		]
	})] });
}
//#endregion
export { ComparePage as component };
