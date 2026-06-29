import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-CoQ3ZP4A.mjs";
import { Z as ArrowRight } from "../_libs/lucide-react.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as CTASection } from "./CTASection-DpcuUs9N.mjs";
import { i as programs } from "./programs-BuXAze3l.mjs";
import { t as ProgramCard } from "./ProgramCard-DZGOaCDK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/programs-BLEjGFnJ.js
var import_jsx_runtime = require_jsx_runtime();
function ProgramsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-px mx-auto max-w-7xl pt-16 pb-12 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "inline-block rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary",
					children: "All Programs"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mx-auto mt-3 max-w-3xl font-display text-4xl font-bold text-primary sm:text-5xl",
					children: [
						"Find the right ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient-amber",
							children: "career sprint"
						}),
						" for you"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-3 max-w-2xl text-muted-foreground",
					children: "Pick a single program, or save 50% with our All-In-One Career OS combo."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 flex justify-center gap-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "navy",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/compare",
							children: ["Compare Programs ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-px mx-auto max-w-7xl pb-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 md:grid-cols-2",
				children: programs.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgramCard, { program: p }, p.slug))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {})
	] });
}
//#endregion
export { ProgramsPage as component };
