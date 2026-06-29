import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { U as Building2, k as GraduationCap, o as TrendingUp, u as Sparkles } from "../_libs/lucide-react.mjs";
import { a as successStories, r as mentors, t as companyLogos } from "./programs-BuXAze3l.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SuccessStories-lzMRIsk-.js
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
					className: "group rounded-2xl border border-border bg-card p-4 transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-[var(--shadow-card)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-16 w-16 place-items-center rounded-2xl text-xl font-bold text-white",
							style: { background: bg },
							children: initials
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 font-display text-base font-bold text-primary",
							children: m.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium text-accent-foreground/80",
							children: m.role
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 space-y-1 border-t border-border pt-2 text-xs text-muted-foreground",
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
var avatarGradients = [
	"from-[#616ed0] via-[#5a67cf] to-[#fbacc3]",
	"from-[#142850] via-[#1e3a6e] to-[#616ed0]",
	"from-[#5a67cf] via-[#7b8af0] to-[#f8f683]",
	"from-[#fbacc3] via-[#ffccb6] to-[#616ed0]"
];
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
					children: successStories.map((s, index) => {
						const gradient = avatarGradients[index % avatarGradients.length];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group rounded-[1.6rem] border border-border bg-card p-5 shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: `relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl bg-gradient-to-br ${gradient}`,
										children: [s.avatar ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: s.avatar,
											alt: s.name,
											loading: "lazy",
											className: "h-full w-full object-cover"
										}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.25),transparent_35%)]" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0 flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-display text-lg font-bold text-primary",
											children: s.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-xs text-muted-foreground",
											children: [
												s.college,
												" → ",
												s.company
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "shrink-0 rounded-2xl bg-primary-soft px-3 py-2 text-right",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-end gap-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/75",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-3 w-3" }), " CTC"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-display text-sm font-bold text-primary",
											children: s.package
										})]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-primary/60",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 text-accent" }), "Verified student outcome"]
							})]
						}, s.name);
					})
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
//#endregion
export { SuccessStories as n, MentorShowcase as t };
