import { r as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, l as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-Tt9GBSDe.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CTASection-CnAnrR9s.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ScrollReveal({ children, className = "", delay = 0, effect = "rise" }) {
	const ref = (0, import_react.useRef)(null);
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const node = ref.current;
		if (!node) return;
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setVisible(true);
				observer.unobserve(node);
			}
		}, {
			threshold: .18,
			rootMargin: "0px 0px -8% 0px"
		});
		observer.observe(node);
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: `${className} transition-all duration-700 ease-out motion-reduce:transition-none ${visible ? "translate-y-0 scale-100 opacity-100" : effect === "scale" ? "scale-95 opacity-0" : effect === "slide-left" ? "-translate-x-8 opacity-0" : effect === "slide-right" ? "translate-x-8 opacity-0" : "translate-y-6 opacity-0"}`,
		style: { transitionDelay: `${delay}ms` },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: visible ? "section-entrance" : "",
			children
		})
	});
}
function CTASection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-px mx-auto max-w-7xl py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
			effect: "scale",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-3xl gradient-navy p-10 text-center text-white shadow-[var(--shadow-elegant)] sm:p-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/25 blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-accent/15 blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "font-display text-3xl font-bold sm:text-5xl",
								children: [
									"Ready to ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gradient-amber",
										children: "accelerate your career"
									}),
									"?"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-4 max-w-xl text-white/80",
								children: "Join 1,500+ MBA students already inside India's #1 Career Acceleration Platform."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap justify-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "hero",
									size: "xl",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/programs",
										children: "Explore Programs"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "outline",
									size: "xl",
									className: "border-white/30 bg-white/10 text-white hover:bg-white hover:text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/compare",
										children: "Compare Programs"
									})
								})]
							})
						]
					})
				]
			})
		})
	});
}
//#endregion
export { ScrollReveal as n, CTASection as t };
