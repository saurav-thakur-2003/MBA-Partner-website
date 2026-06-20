import { r as __toESM } from "../_runtime.mjs";
import { a as Trigger2, c as require_jsx_runtime, i as Root2, l as require_react, n as Header, r as Item, t as Content2 } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as cn } from "./button-CoQ3ZP4A.mjs";
import { a as successStories, r as mentors, t as companyLogos } from "./programs-B_OmzjFp.mjs";
import { a as TrendingUp, j as Building2, k as ChevronDown, w as GraduationCap } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/FAQ-DbcE2mp-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var colors = [
	"#142850",
	"#1e3a6e",
	"#2a4d8f",
	"#3a5fa5"
];
function MentorShowcase() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "mentors",
		className: "container-px mx-auto max-w-7xl py-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-col items-start justify-between gap-4 md:flex-row md:items-end",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "inline-block rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary",
					children: "Mentor Network"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-3xl font-bold text-primary sm:text-4xl",
					children: "Learn from India's top 1%"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-xl text-muted-foreground",
					children: "50+ industry mentors from MBB, FAANG, Big-4 and India's most loved consumer brands."
				})
			] })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4",
			children: mentors.map((m, i) => {
				const initials = m.name.split(" ").map((p) => p[0]).slice(0, 2).join("");
				const bg = colors[i % colors.length];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-[var(--shadow-card)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-20 w-20 place-items-center rounded-2xl text-2xl font-bold text-white",
							style: { background: bg },
							children: initials
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-display text-base font-bold text-primary",
							children: m.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium text-accent-foreground/80",
							children: m.role
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 space-y-1.5 border-t border-border pt-3 text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "h-3.5 w-3.5 text-primary" }), m.college]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "h-3.5 w-3.5 text-primary" }), m.company]
							})]
						})
					]
				}, m.name);
			})
		})]
	});
}
function SuccessStories() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "stories",
		className: "bg-primary-soft py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-px mx-auto max-w-7xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "inline-block rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary",
							children: "Success Stories"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-3xl font-bold text-primary sm:text-4xl",
							children: "580+ students. Day-Zero offers."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-muted-foreground",
							children: "From IIMs, XLRI, SPJIMR, NMIMS to Tier-2 colleges — the playbook works."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: successStories.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-14 w-14 shrink-0 place-items-center rounded-full gradient-navy text-white font-bold",
								children: s.name.split(" ").map((p) => p[0]).slice(0, 2).join("")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "truncate font-display font-bold text-primary",
									children: s.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "truncate text-xs text-muted-foreground",
									children: [
										s.college,
										" → ",
										s.company
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "shrink-0 rounded-lg bg-accent/15 px-2.5 py-1 text-right",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1 text-[10px] font-semibold uppercase text-accent-foreground/80",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-3 w-3" }), " CTC"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-sm font-bold text-primary",
									children: s.package
								})]
							})
						]
					}, s.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground",
						children: "Our students work at"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "marquee flex shrink-0 items-center gap-10 pr-10",
							children: [...companyLogos, ...companyLogos].map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "whitespace-nowrap font-display text-lg font-bold text-primary/70",
								children: c
							}, i))
						})
					})]
				})
			]
		})
	});
}
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
function FAQ({ items, title = "Frequently Asked Questions" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-px mx-auto max-w-3xl py-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl font-bold text-primary sm:text-4xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted-foreground",
				children: "Everything you need to know before enrolling."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
				type: "single",
				collapsible: true,
				className: "mt-8",
				children: items.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
					value: `q-${i}`,
					className: "rounded-lg border-b",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
						className: "text-left font-display text-base font-semibold text-primary",
						children: it.q
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
						className: "text-sm leading-relaxed text-muted-foreground",
						children: it.a
					})]
				}, i))
			})
		]
	});
}
//#endregion
export { MentorShowcase as n, SuccessStories as r, FAQ as t };
