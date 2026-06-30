import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-Tt9GBSDe.mjs";
import { R as Check, Z as ArrowRight, j as Clock, u as Sparkles } from "../_libs/lucide-react.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as ScrollReveal } from "./CTASection-CnAnrR9s.mjs";
import { r as pricing } from "./content-DaS0QJAs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ProgramCard-BqTs40kc.js
var import_jsx_runtime = require_jsx_runtime();
function ProgramCard({ program, compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
		className: "h-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: `group relative flex h-full flex-col rounded-2xl border bg-card p-6 shadow-(--shadow-card) transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-(--shadow-elegant) hover:border-primary/30 ${program.highlight ? "border-accent ring-2 ring-accent/30" : "border-border"}`,
			children: [
				program.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-accent-foreground shadow",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3" }),
						" ",
						program.badge
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-xs font-medium text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3.5 w-3.5" }),
						" ",
						program.duration
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-2 font-display text-xl font-bold text-primary transition-colors duration-300 group-hover:text-[#4351d8]",
					children: program.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm font-medium text-accent-foreground/80 transition-transform duration-300 group-hover:translate-y-0.5",
					children: program.tagline
				}),
				program.slug === "live-projects" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs font-semibold text-muted-foreground",
						children: "Domains"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 flex flex-wrap gap-2",
						children: pricing.liveProjectDomains?.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-primary-soft px-2 py-1 text-xs font-medium text-primary",
							children: d
						}, d))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 min-h-[7.5rem] text-sm leading-relaxed text-muted-foreground",
					children: program.shortDescription
				}),
				!compact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2",
					children: program.outcomes.slice(0, 3).map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-start gap-2 text-sm text-foreground/85",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 h-4 w-4 shrink-0 text-success" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: o })]
					}, o))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-auto flex items-end justify-between pt-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-baseline gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-2xl font-bold text-primary",
							children: program.slug === "placement-bootcamp" ? pricing.placementsBootcamp.price : `₹${program.price.toLocaleString("en-IN")}`
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-muted-foreground line-through",
							children: program.slug === "placement-bootcamp" ? pricing.placementsBootcamp.was : `₹${program.originalPrice.toLocaleString("en-IN")}`
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs font-medium text-success",
						children: program.slug === "placement-bootcamp" ? `Was ${pricing.placementsBootcamp.was}` : `Save ₹${(program.originalPrice - program.price).toLocaleString("en-IN")}`
					})] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						size: "sm",
						className: "flex-1 transition-transform duration-300 hover:-translate-y-0.5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/programs/$slug",
							params: { slug: program.slug },
							children: "Explore"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "accent",
						size: "sm",
						className: "flex-1 transition-transform duration-300 hover:-translate-y-0.5 hover:scale-[1.01]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/programs/$slug",
							params: { slug: program.slug },
							hash: "enroll",
							children: ["Enroll ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
						})
					})]
				})
			]
		})
	});
}
//#endregion
export { ProgramCard as t };
