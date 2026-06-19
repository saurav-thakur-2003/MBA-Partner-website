import { n as getProgram } from "./programs-B_OmzjFp.js";
import { createFileRoute, lazyRouteComponent, notFound } from "@tanstack/react-router";
//#region src/routes/programs.$slug.tsx
var $$splitComponentImporter = () => import("./programs._slug-7cfrq4rz.js");
var $$splitNotFoundComponentImporter = () => import("./programs._slug-Cr9UCcUq.js");
var Route = createFileRoute("/programs/$slug")({
	loader: ({ params }) => {
		const program = getProgram(params.slug);
		if (!program) throw notFound();
		return { program };
	},
	head: ({ loaderData }) => ({
		meta: loaderData ? [
			{ title: `${loaderData.program.name} · MBA Partner` },
			{
				name: "description",
				content: loaderData.program.shortDescription
			},
			{
				property: "og:title",
				content: `${loaderData.program.name} · MBA Partner`
			},
			{
				property: "og:description",
				content: loaderData.program.tagline
			},
			{
				property: "og:url",
				content: `/programs/${loaderData.program.slug}`
			}
		] : [],
		links: loaderData ? [{
			rel: "canonical",
			href: `/programs/${loaderData.program.slug}`
		}] : []
	}),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
