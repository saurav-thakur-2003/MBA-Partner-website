import { t as Button } from "./button-CoQ3ZP4A.js";
import { i as programs } from "./programs-B_OmzjFp.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, Check, X } from "lucide-react";
//#region src/routes/compare.tsx?tsr-split=component
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
function ComparePage() {
	return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("section", {
		className: "container-px mx-auto max-w-7xl pt-16 pb-12 text-center",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "inline-block rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary",
				children: "Compare Programs"
			}),
			/* @__PURE__ */ jsxs("h1", {
				className: "mx-auto mt-3 max-w-3xl font-display text-4xl font-bold text-primary sm:text-5xl",
				children: ["Pick the program that ", /* @__PURE__ */ jsx("span", {
					className: "text-gradient-amber",
					children: "matches your goal"
				})]
			}),
			/* @__PURE__ */ jsx("p", {
				className: "mx-auto mt-3 max-w-2xl text-muted-foreground",
				children: "Side-by-side view of pricing, mentorship, projects and outcomes."
			})
		]
	}), /* @__PURE__ */ jsx("section", {
		className: "container-px mx-auto max-w-7xl pb-20",
		children: /* @__PURE__ */ jsx("div", {
			className: "overflow-x-auto rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]",
			children: /* @__PURE__ */ jsxs("table", {
				className: "w-full min-w-[840px] text-left text-sm",
				children: [/* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", {
					className: "border-b border-border bg-primary-soft",
					children: [/* @__PURE__ */ jsx("th", {
						className: "sticky left-0 z-10 bg-primary-soft p-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground",
						children: "Feature"
					}), programs.map((p) => /* @__PURE__ */ jsx("th", {
						className: `p-4 align-top ${p.highlight ? "bg-accent/10" : ""}`,
						children: /* @__PURE__ */ jsxs("div", {
							className: "flex flex-col gap-1",
							children: [
								p.badge && /* @__PURE__ */ jsx("span", {
									className: "self-start rounded-full bg-accent px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-accent-foreground",
									children: p.badge
								}),
								/* @__PURE__ */ jsx("span", {
									className: "font-display text-base font-bold text-primary",
									children: p.name
								}),
								/* @__PURE__ */ jsx("span", {
									className: "text-xs font-normal text-muted-foreground",
									children: p.tagline
								})
							]
						})
					}, p.slug))]
				}) }), /* @__PURE__ */ jsxs("tbody", { children: [
					/* @__PURE__ */ jsxs("tr", {
						className: "border-b border-border",
						children: [/* @__PURE__ */ jsx("td", {
							className: "sticky left-0 z-10 bg-card p-4 font-semibold text-primary",
							children: "Price"
						}), programs.map((p) => /* @__PURE__ */ jsxs("td", {
							className: `p-4 align-top ${p.highlight ? "bg-accent/5" : ""}`,
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "font-display text-xl font-bold text-primary",
									children: ["₹", p.price.toLocaleString("en-IN")]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "text-xs text-muted-foreground line-through",
									children: ["₹", p.originalPrice.toLocaleString("en-IN")]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-1 text-[11px] font-semibold text-success",
									children: ["Save ₹", (p.originalPrice - p.price).toLocaleString("en-IN")]
								})
							]
						}, p.slug))]
					}),
					rows.map((row) => /* @__PURE__ */ jsxs("tr", {
						className: "border-b border-border",
						children: [/* @__PURE__ */ jsx("td", {
							className: "sticky left-0 z-10 bg-card p-4 font-medium text-foreground/85",
							children: row.label
						}), programs.map((p) => /* @__PURE__ */ jsx("td", {
							className: `p-4 align-top text-foreground/80 ${p.highlight ? "bg-accent/5" : ""}`,
							children: String(p[row.key])
						}, p.slug))]
					}, row.label)),
					/* @__PURE__ */ jsxs("tr", {
						className: "border-b border-border",
						children: [/* @__PURE__ */ jsx("td", {
							className: "sticky left-0 z-10 bg-card p-4 font-medium text-foreground/85",
							children: "Lifetime Alumni"
						}), programs.map((p) => /* @__PURE__ */ jsx("td", {
							className: `p-4 ${p.highlight ? "bg-accent/5" : ""}`,
							children: p.highlight ? /* @__PURE__ */ jsx(Check, { className: "h-5 w-5 text-success" }) : /* @__PURE__ */ jsx(X, { className: "h-5 w-5 text-muted-foreground/50" })
						}, p.slug))]
					}),
					/* @__PURE__ */ jsxs("tr", { children: [/* @__PURE__ */ jsx("td", { className: "sticky left-0 z-10 bg-card p-4" }), programs.map((p) => /* @__PURE__ */ jsx("td", {
						className: `p-4 ${p.highlight ? "bg-accent/5" : ""}`,
						children: /* @__PURE__ */ jsx(Button, {
							asChild: true,
							variant: p.highlight ? "hero" : "navy",
							size: "sm",
							className: "w-full",
							children: /* @__PURE__ */ jsxs(Link, {
								to: "/programs/$slug",
								params: { slug: p.slug },
								children: ["Explore ", /* @__PURE__ */ jsx(ArrowRight, { className: "h-3.5 w-3.5" })]
							})
						})
					}, p.slug))] })
				] })]
			})
		})
	})] });
}
//#endregion
export { ComparePage as component };
