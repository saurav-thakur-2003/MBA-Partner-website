import { r as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, l as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-CoQ3ZP4A.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Instagram, S as Linkedin, b as MapPin, h as MoonStar, n as X, p as Phone, s as SunMedium, t as Youtube, v as Menu, x as Mail } from "../_libs/lucide-react.mjs";
import { t as Route$4 } from "./programs._slug-x0nnmhdj.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-B-wg2F71.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-D2qwvPrr.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
var nav = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/programs",
		label: "Programs"
	},
	{
		to: "/compare",
		label: "Compare"
	},
	{
		to: "/programs/all-in-one-combo",
		label: "Combo"
	}
];
function Header() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [darkMode, setDarkMode] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const savedTheme = window.localStorage.getItem("theme");
		const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
		setDarkMode(savedTheme ? savedTheme === "dark" : prefersDark);
	}, []);
	const toggleTheme = () => {
		setDarkMode((current) => {
			const next = !current;
			document.documentElement.classList.toggle("dark", next);
			window.localStorage.setItem("theme", next ? "dark" : "light");
			return next;
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-lg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-px mx-auto grid h-16 max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex min-w-0 items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-9 w-9 shrink-0 place-items-center rounded-lg gradient-navy",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-base font-black text-white",
							children: "M"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 leading-tight",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "truncate font-display text-base font-bold text-primary",
							children: "MBA Partner"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hidden text-[10px] uppercase tracking-wider text-muted-foreground sm:block",
							children: "India's Career Acceleration Platform"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center justify-center gap-1 lg:flex",
					children: nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: n.to,
						className: "rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-primary-soft hover:text-primary",
						activeProps: { className: "text-primary bg-primary-soft" },
						activeOptions: { exact: n.to === "/" },
						children: n.label
					}, n.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: toggleTheme,
							className: "hidden h-9 w-9 items-center justify-center rounded-md border border-border text-foreground/80 hover:bg-primary-soft md:inline-flex",
							"aria-label": "Toggle dark mode",
							children: darkMode ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SunMedium, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoonStar, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "tel:+919999999999",
							className: "hidden items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-foreground/80 hover:border-primary md:flex",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-3.5 w-3.5" }), " Call Us"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "accent",
							size: "sm",
							className: "hidden sm:inline-flex",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/programs",
								children: "Enroll Now"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setOpen((v) => !v),
							className: "grid h-9 w-9 place-items-center rounded-md border border-border lg:hidden",
							"aria-label": "Toggle menu",
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-4 w-4" })
						})
					]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border bg-background lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-px mx-auto flex max-w-7xl flex-col py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: toggleTheme,
						className: "mb-2 flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-primary-soft md:hidden",
						children: [darkMode ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SunMedium, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoonStar, { className: "h-4 w-4" }), darkMode ? "Light mode" : "Dark mode"]
					}),
					nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: n.to,
						onClick: () => setOpen(false),
						className: "rounded-md px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-primary-soft",
						children: n.label
					}, n.to)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "accent",
						className: "mt-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/programs",
							onClick: () => setOpen(false),
							children: "Enroll Now"
						})
					})
				]
			})
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "gradient-navy mt-24 text-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-px mx-auto max-w-7xl py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 md:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-10 w-10 place-items-center rounded-lg bg-accent",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-lg font-black text-accent-foreground",
									children: "M"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-lg font-bold",
								children: "MBA Partner"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-white/60",
								children: "India's Career Acceleration Platform"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-white/70",
							children: "Initiative by alumni of IIMs, XLRI & SPJIMR — helping MBA students unlock top-tier careers."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									"aria-label": "LinkedIn",
									className: "grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-accent hover:text-accent-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "h-4 w-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									"aria-label": "Instagram",
									className: "grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-accent hover:text-accent-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-4 w-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									"aria-label": "YouTube",
									className: "grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-accent hover:text-accent-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Youtube, { className: "h-4 w-4" })
								})
							]
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-sm font-semibold uppercase tracking-wider text-accent",
						children: "Programs"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-2 text-sm text-white/75",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/programs/placement-bootcamp",
								className: "hover:text-accent",
								children: "Placement Bootcamp"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/programs/case-competition-accelerator",
								className: "hover:text-accent",
								children: "Case Competition Accelerator"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/programs/live-projects",
								className: "hover:text-accent",
								children: "Live Projects"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/programs/all-in-one-combo",
								className: "hover:text-accent",
								children: "All-In-One Combo"
							}) })
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-sm font-semibold uppercase tracking-wider text-accent",
						children: "Resources"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-2 text-sm text-white/75",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/programs",
								className: "hover:text-accent",
								children: "All Programs"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/compare",
								className: "hover:text-accent",
								children: "Compare Programs"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#mentors",
								className: "hover:text-accent",
								children: "Mentors"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#stories",
								className: "hover:text-accent",
								children: "Success Stories"
							}) })
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-sm font-semibold uppercase tracking-wider text-accent",
						children: "Contact"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-3 text-sm text-white/75",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 text-accent" }), " hello@mbapartner.in"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 text-accent" }), " +91 99999 99999"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 h-4 w-4 text-accent" }), " Bengaluru · Mumbai · Online"]
							})
						]
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" MBA Partner. All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "hover:text-white",
							children: "Privacy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "hover:text-white",
							children: "Terms"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "hover:text-white",
							children: "Refund Policy"
						})
					]
				})]
			})]
		})
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$3 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "MBA Partner — India's Career Acceleration Platform for MBA Students" },
			{
				name: "description",
				content: "Mentorship, live projects, case competitions and placement preparation for MBA students from IIMs, XLRI, SPJIMR, NMIMS, Symbiosis and beyond."
			},
			{
				name: "author",
				content: "MBA Partner"
			},
			{
				property: "og:title",
				content: "MBA Partner — India's Career Acceleration Platform"
			},
			{
				property: "og:description",
				content: "Live projects, case comps, mentorship & placement prep for MBA students."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800;900&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	(0, import_react.useEffect)(() => {
		const savedTheme = window.localStorage.getItem("theme");
		const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
		const shouldUseDark = savedTheme ? savedTheme === "dark" : prefersDark;
		document.documentElement.classList.toggle("dark", shouldUseDark);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$3.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "page-shell",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
			]
		})
	});
}
var $$splitComponentImporter$2 = () => import("./programs-tzrCvHBS.mjs");
var Route$2 = createFileRoute("/programs")({
	head: () => ({
		meta: [
			{ title: "Programs · MBA Partner" },
			{
				name: "description",
				content: "Explore all MBA Partner programs — placement bootcamp, case competition accelerator, live projects and the all-in-one combo."
			},
			{
				property: "og:title",
				content: "Programs · MBA Partner"
			},
			{
				property: "og:description",
				content: "Outcome-led programs for MBA students."
			},
			{
				property: "og:url",
				content: "/programs"
			}
		],
		links: [{
			rel: "canonical",
			href: "/programs"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./compare-20B0qbhe.mjs");
var Route$1 = createFileRoute("/compare")({
	head: () => ({
		meta: [
			{ title: "Compare Programs · MBA Partner" },
			{
				name: "description",
				content: "Compare placement bootcamp, case competition accelerator, live projects and all-in-one combo side by side."
			},
			{
				property: "og:title",
				content: "Compare Programs · MBA Partner"
			},
			{
				property: "og:description",
				content: "Side-by-side comparison of all MBA Partner programs."
			},
			{
				property: "og:url",
				content: "/compare"
			}
		],
		links: [{
			rel: "canonical",
			href: "/compare"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-BM_rWtEX.mjs");
var Route = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "MBA Partner — India's Career Acceleration Platform for MBA Students" },
			{
				name: "description",
				content: "Get mentored by India's top MBA talent network. Live projects, case competitions, placement preparation & career mentorship for MBA students."
			},
			{
				property: "og:title",
				content: "MBA Partner — India's Career Acceleration Platform"
			},
			{
				property: "og:description",
				content: "Live projects, case comps, mentorship & placement prep for MBA students from IIMs, XLRI, SPJIMR & more."
			},
			{
				property: "og:url",
				content: "/"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var ProgramsRoute = Route$2.update({
	id: "/programs",
	path: "/programs",
	getParentRoute: () => Route$3
});
var CompareRoute = Route$1.update({
	id: "/compare",
	path: "/compare",
	getParentRoute: () => Route$3
});
var IndexRoute = Route.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$3
});
var ProgramsRouteChildren = { ProgramsSlugRoute: Route$4.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => ProgramsRoute
}) };
var rootRouteChildren = {
	IndexRoute,
	CompareRoute,
	ProgramsRoute: ProgramsRoute._addFileChildren(ProgramsRouteChildren)
};
var routeTree = Route$3._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
