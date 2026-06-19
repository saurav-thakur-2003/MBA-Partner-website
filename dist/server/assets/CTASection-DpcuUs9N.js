import { t as Button } from "./button-CoQ3ZP4A.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/CTASection.tsx
function CTASection() {
	return /* @__PURE__ */ jsx("section", {
		className: "container-px mx-auto max-w-7xl py-20",
		children: /* @__PURE__ */ jsxs("div", {
			className: "relative overflow-hidden rounded-3xl gradient-navy p-10 text-center text-white shadow-[var(--shadow-elegant)] sm:p-16",
			children: [
				/* @__PURE__ */ jsx("div", { className: "absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/25 blur-3xl" }),
				/* @__PURE__ */ jsx("div", { className: "absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-accent/15 blur-3xl" }),
				/* @__PURE__ */ jsxs("div", {
					className: "relative",
					children: [
						/* @__PURE__ */ jsxs("h2", {
							className: "font-display text-3xl font-bold sm:text-5xl",
							children: [
								"Ready to ",
								/* @__PURE__ */ jsx("span", {
									className: "text-gradient-amber",
									children: "accelerate your career"
								}),
								"?"
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mx-auto mt-4 max-w-xl text-white/80",
							children: "Join 1,500+ MBA students already inside India's #1 Career Acceleration Platform."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-8 flex flex-wrap justify-center gap-3",
							children: [/* @__PURE__ */ jsx(Button, {
								asChild: true,
								variant: "hero",
								size: "xl",
								children: /* @__PURE__ */ jsx(Link, {
									to: "/programs",
									children: "Explore Programs"
								})
							}), /* @__PURE__ */ jsx(Button, {
								asChild: true,
								variant: "outline",
								size: "xl",
								className: "border-white/30 bg-white/10 text-white hover:bg-white hover:text-primary",
								children: /* @__PURE__ */ jsx(Link, {
									to: "/compare",
									children: "Compare Programs"
								})
							})]
						})
					]
				})
			]
		})
	});
}
//#endregion
export { CTASection as t };
