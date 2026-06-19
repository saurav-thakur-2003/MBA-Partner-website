import { t as Button } from "./button-CoQ3ZP4A.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/programs.$slug.tsx?tsr-split=notFoundComponent
var SplitNotFoundComponent = () => /* @__PURE__ */ jsxs("div", {
	className: "container-px mx-auto max-w-3xl py-32 text-center",
	children: [
		/* @__PURE__ */ jsx("h1", {
			className: "font-display text-4xl font-bold text-primary",
			children: "Program not found"
		}),
		/* @__PURE__ */ jsx("p", {
			className: "mt-3 text-muted-foreground",
			children: "The program you're looking for doesn't exist."
		}),
		/* @__PURE__ */ jsx(Button, {
			asChild: true,
			className: "mt-6",
			children: /* @__PURE__ */ jsx(Link, {
				to: "/programs",
				children: "See all programs"
			})
		})
	]
});
//#endregion
export { SplitNotFoundComponent as notFoundComponent };
