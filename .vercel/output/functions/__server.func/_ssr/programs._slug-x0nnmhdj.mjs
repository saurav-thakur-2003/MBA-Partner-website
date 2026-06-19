import { n as getProgram } from "./programs-B_OmzjFp.mjs";
import { A as notFound, f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/programs._slug-x0nnmhdj.js
var $$splitComponentImporter = () => import("./programs._slug-7cfrq4rz.mjs");
var $$splitNotFoundComponentImporter = () => import("./programs._slug-Cr9UCcUq.mjs");
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
