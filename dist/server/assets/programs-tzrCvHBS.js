import { t as Button } from "./button-CoQ3ZP4A.js";
import { i as programs } from "./programs-B_OmzjFp.js";
import { t as ProgramCard } from "./ProgramCard-pEpa9Xec.js";
import { t as CTASection } from "./CTASection-DpcuUs9N.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight } from "lucide-react";
//#region src/routes/programs.tsx?tsr-split=component
function ProgramsPage() {
	return /* @__PURE__ */ jsxs("div", { children: [
		/* @__PURE__ */ jsxs("section", {
			className: "container-px mx-auto max-w-7xl pt-16 pb-12 text-center",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "inline-block rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary",
					children: "All Programs"
				}),
				/* @__PURE__ */ jsxs("h1", {
					className: "mx-auto mt-3 max-w-3xl font-display text-4xl font-bold text-primary sm:text-5xl",
					children: [
						"Find the right ",
						/* @__PURE__ */ jsx("span", {
							className: "text-gradient-amber",
							children: "career sprint"
						}),
						" for you"
					]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mx-auto mt-3 max-w-2xl text-muted-foreground",
					children: "Pick a single program, or save 50% with our All-In-One Career OS combo."
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-6 flex justify-center gap-3",
					children: /* @__PURE__ */ jsx(Button, {
						asChild: true,
						variant: "navy",
						children: /* @__PURE__ */ jsxs(Link, {
							to: "/compare",
							children: ["Compare Programs ", /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })]
						})
					})
				})
			]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "container-px mx-auto max-w-7xl pb-12",
			children: /* @__PURE__ */ jsx("div", {
				className: "grid gap-6 md:grid-cols-2",
				children: programs.map((p) => /* @__PURE__ */ jsx(ProgramCard, { program: p }, p.slug))
			})
		}),
		/* @__PURE__ */ jsx(CTASection, {})
	] });
}
//#endregion
export { ProgramsPage as component };
