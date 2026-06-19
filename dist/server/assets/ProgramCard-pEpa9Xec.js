import { t as Button } from "./button-CoQ3ZP4A.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, Check, Clock, Sparkles } from "lucide-react";
//#region src/components/ProgramCard.tsx
function ProgramCard({ program, compact = false }) {
	return /* @__PURE__ */ jsxs("article", {
		className: `group relative flex flex-col rounded-2xl border bg-card p-6 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)] ${program.highlight ? "border-accent ring-2 ring-accent/30" : "border-border"}`,
		children: [
			program.badge && /* @__PURE__ */ jsxs("span", {
				className: "absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-accent-foreground shadow",
				children: [
					/* @__PURE__ */ jsx(Sparkles, { className: "h-3 w-3" }),
					" ",
					program.badge
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-2 text-xs font-medium text-muted-foreground",
				children: [
					/* @__PURE__ */ jsx(Clock, { className: "h-3.5 w-3.5" }),
					" ",
					program.duration
				]
			}),
			/* @__PURE__ */ jsx("h3", {
				className: "mt-2 font-display text-xl font-bold text-primary",
				children: program.name
			}),
			/* @__PURE__ */ jsx("p", {
				className: "mt-1 text-sm font-medium text-accent-foreground/80",
				children: program.tagline
			}),
			/* @__PURE__ */ jsx("p", {
				className: "mt-3 text-sm leading-relaxed text-muted-foreground",
				children: program.shortDescription
			}),
			!compact && /* @__PURE__ */ jsx("ul", {
				className: "mt-4 space-y-2",
				children: program.outcomes.slice(0, 3).map((o) => /* @__PURE__ */ jsxs("li", {
					className: "flex items-start gap-2 text-sm text-foreground/85",
					children: [/* @__PURE__ */ jsx(Check, { className: "mt-0.5 h-4 w-4 shrink-0 text-success" }), /* @__PURE__ */ jsx("span", { children: o })]
				}, o))
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mt-5 flex items-end justify-between",
				children: /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-baseline gap-2",
					children: [/* @__PURE__ */ jsxs("span", {
						className: "font-display text-2xl font-bold text-primary",
						children: ["₹", program.price.toLocaleString("en-IN")]
					}), /* @__PURE__ */ jsxs("span", {
						className: "text-sm text-muted-foreground line-through",
						children: ["₹", program.originalPrice.toLocaleString("en-IN")]
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "text-xs font-medium text-success",
					children: ["Save ₹", (program.originalPrice - program.price).toLocaleString("en-IN")]
				})] })
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-5 flex gap-2",
				children: [/* @__PURE__ */ jsx(Button, {
					asChild: true,
					variant: "outline",
					size: "sm",
					className: "flex-1",
					children: /* @__PURE__ */ jsx(Link, {
						to: "/programs/$slug",
						params: { slug: program.slug },
						children: "Explore"
					})
				}), /* @__PURE__ */ jsx(Button, {
					asChild: true,
					variant: "accent",
					size: "sm",
					className: "flex-1",
					children: /* @__PURE__ */ jsxs(Link, {
						to: "/programs/$slug",
						params: { slug: program.slug },
						hash: "enroll",
						children: ["Enroll ", /* @__PURE__ */ jsx(ArrowRight, { className: "h-3.5 w-3.5" })]
					})
				})]
			})
		]
	});
}
//#endregion
export { ProgramCard as t };
