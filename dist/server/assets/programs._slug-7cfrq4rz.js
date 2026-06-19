import { t as Button } from "./button-CoQ3ZP4A.js";
import { i as programs } from "./programs-B_OmzjFp.js";
import { t as Route } from "./programs._slug-x0nnmhdj.js";
import { n as SuccessStories, r as MentorShowcase, t as FAQ } from "./FAQ-DbcE2mp-.js";
import { t as CTASection } from "./CTASection-DpcuUs9N.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, Award, Check, Clock, Sparkles, Star, Trophy, Users } from "lucide-react";
//#region src/routes/programs.$slug.tsx?tsr-split=component
function ProgramDetail() {
	const { program } = Route.useLoaderData();
	const others = programs.filter((p) => p.slug !== program.slug).slice(0, 3);
	const savings = program.originalPrice - program.price;
	return /* @__PURE__ */ jsxs("div", { children: [
		/* @__PURE__ */ jsxs("section", {
			className: "relative overflow-hidden gradient-navy pt-16 pb-24 text-white",
			children: [/* @__PURE__ */ jsx("div", { className: "absolute -right-32 top-10 h-96 w-96 rounded-full bg-accent/20 blur-3xl" }), /* @__PURE__ */ jsxs("div", {
				className: "container-px mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.3fr_1fr]",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "animate-fade-up",
					children: [
						program.badge && /* @__PURE__ */ jsxs("div", {
							className: "inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase text-accent-foreground",
							children: [
								/* @__PURE__ */ jsx(Sparkles, { className: "h-3 w-3" }),
								" ",
								program.badge
							]
						}),
						/* @__PURE__ */ jsx("h1", {
							className: "mt-4 font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl",
							children: program.name
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-3 font-display text-xl text-accent",
							children: program.tagline
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-5 max-w-2xl text-white/85",
							children: program.shortDescription
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-6 flex flex-wrap items-center gap-4 text-sm",
							children: [
								/* @__PURE__ */ jsxs("span", {
									className: "inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5",
									children: [
										/* @__PURE__ */ jsx(Clock, { className: "h-4 w-4 text-accent" }),
										" ",
										program.duration
									]
								}),
								/* @__PURE__ */ jsxs("span", {
									className: "inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5",
									children: [/* @__PURE__ */ jsx(Users, { className: "h-4 w-4 text-accent" }), " 1:1 Mentorship"]
								}),
								/* @__PURE__ */ jsxs("span", {
									className: "inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5",
									children: [/* @__PURE__ */ jsx(Star, { className: "h-4 w-4 text-accent" }), " 4.9/5 rating"]
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-7 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ jsx(Button, {
								asChild: true,
								variant: "hero",
								size: "xl",
								children: /* @__PURE__ */ jsxs("a", {
									href: "#enroll",
									children: ["Enroll Now ", /* @__PURE__ */ jsx(ArrowRight, { className: "h-5 w-5" })]
								})
							}), /* @__PURE__ */ jsx(Button, {
								asChild: true,
								variant: "outline",
								size: "xl",
								className: "border-white/30 bg-white/10 text-white hover:bg-white hover:text-primary",
								children: /* @__PURE__ */ jsx("a", {
									href: "#curriculum",
									children: "View Curriculum"
								})
							})]
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					id: "enroll",
					className: "rounded-3xl bg-white p-6 text-foreground shadow-[var(--shadow-elegant)]",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
							children: "Total Investment"
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-1 flex items-baseline gap-3",
							children: [/* @__PURE__ */ jsxs("span", {
								className: "font-display text-4xl font-extrabold text-primary",
								children: ["₹", program.price.toLocaleString("en-IN")]
							}), /* @__PURE__ */ jsxs("span", {
								className: "text-base text-muted-foreground line-through",
								children: ["₹", program.originalPrice.toLocaleString("en-IN")]
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-1 inline-block rounded-full bg-success/15 px-2.5 py-0.5 text-xs font-bold text-success",
							children: ["You save ₹", savings.toLocaleString("en-IN")]
						}),
						/* @__PURE__ */ jsx("div", { className: "my-5 h-px bg-border" }),
						/* @__PURE__ */ jsx("ul", {
							className: "space-y-2.5 text-sm",
							children: program.outcomes.slice(0, 4).map((o) => /* @__PURE__ */ jsxs("li", {
								className: "flex items-start gap-2",
								children: [/* @__PURE__ */ jsx(Check, { className: "mt-0.5 h-4 w-4 shrink-0 text-success" }), /* @__PURE__ */ jsx("span", { children: o })]
							}, o))
						}),
						/* @__PURE__ */ jsxs(Button, {
							variant: "hero",
							size: "lg",
							className: "mt-5 w-full",
							children: ["Enroll Now ", /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })]
						}),
						/* @__PURE__ */ jsx(Button, {
							variant: "outline",
							size: "lg",
							className: "mt-2 w-full",
							children: "Talk to a Counsellor"
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-3 text-center text-[11px] text-muted-foreground",
							children: "3-month no-cost EMI · 7-day refund"
						})
					]
				})]
			})]
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "container-px mx-auto max-w-7xl py-20",
			children: [
				/* @__PURE__ */ jsx("h2", {
					className: "font-display text-3xl font-bold text-primary sm:text-4xl",
					children: "Program Outcomes"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-muted-foreground",
					children: "By the end of this program, you will have:"
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-8 grid gap-4 md:grid-cols-2",
					children: program.outcomes.map((o) => /* @__PURE__ */ jsxs("div", {
						className: "flex items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]",
						children: [/* @__PURE__ */ jsx("div", {
							className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent-foreground",
							children: /* @__PURE__ */ jsx(Trophy, { className: "h-5 w-5" })
						}), /* @__PURE__ */ jsx("p", {
							className: "font-medium text-foreground/90",
							children: o
						})]
					}, o))
				})
			]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-primary-soft py-20",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-px mx-auto max-w-7xl",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "font-display text-3xl font-bold text-primary sm:text-4xl",
					children: "Who Should Join"
				}), /* @__PURE__ */ jsx("div", {
					className: "mt-8 grid gap-4 md:grid-cols-3",
					children: program.whoFor.map((w, i) => /* @__PURE__ */ jsxs("div", {
						className: "rounded-2xl bg-card p-6 shadow-[var(--shadow-card)]",
						children: [/* @__PURE__ */ jsx("div", {
							className: "grid h-10 w-10 place-items-center rounded-xl gradient-navy font-bold text-white",
							children: i + 1
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-3 text-foreground/85",
							children: w
						})]
					}, w))
				})]
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "container-px mx-auto max-w-7xl py-20",
			children: [/* @__PURE__ */ jsx("h2", {
				className: "font-display text-3xl font-bold text-primary sm:text-4xl",
				children: "What's included"
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3",
				children: program.features.map((f) => /* @__PURE__ */ jsxs("div", {
					className: "rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-[var(--shadow-card)]",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "grid h-10 w-10 place-items-center rounded-xl bg-accent/15",
							children: /* @__PURE__ */ jsx(Award, { className: "h-5 w-5 text-accent-foreground" })
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "mt-3 font-display text-lg font-bold text-primary",
							children: f.title
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-1.5 text-sm text-muted-foreground",
							children: f.description
						})
					]
				}, f.title))
			})]
		}),
		/* @__PURE__ */ jsx("section", {
			id: "curriculum",
			className: "bg-primary-soft py-20",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-px mx-auto max-w-5xl",
				children: [
					/* @__PURE__ */ jsx("h2", {
						className: "font-display text-3xl font-bold text-primary sm:text-4xl",
						children: "Curriculum Timeline"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-2 text-muted-foreground",
						children: "A week-by-week sprint plan, designed for outcomes."
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-10 space-y-5",
						children: program.modules.map((m, i) => /* @__PURE__ */ jsxs("div", {
							className: "grid grid-cols-[auto_1fr] gap-5 rounded-2xl bg-card p-6 shadow-[var(--shadow-card)] sm:grid-cols-[140px_1fr]",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
								className: "text-xs font-bold uppercase tracking-wider text-accent-foreground/80",
								children: m.week
							}), /* @__PURE__ */ jsxs("div", {
								className: "mt-1 font-display text-xs font-bold text-muted-foreground",
								children: ["Module ", i + 1]
							})] }), /* @__PURE__ */ jsxs("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ jsx("h3", {
									className: "font-display text-lg font-bold text-primary",
									children: m.title
								}), /* @__PURE__ */ jsx("ul", {
									className: "mt-2 flex flex-wrap gap-2",
									children: m.topics.map((t) => /* @__PURE__ */ jsx("li", {
										className: "rounded-full bg-primary-soft px-3 py-1 text-xs font-medium text-primary",
										children: t
									}, t))
								})]
							})]
						}, i))
					})
				]
			})
		}),
		/* @__PURE__ */ jsx(MentorShowcase, {}),
		/* @__PURE__ */ jsx(SuccessStories, {}),
		/* @__PURE__ */ jsx(FAQ, {
			items: program.faqs,
			title: `${program.name} · FAQs`
		}),
		/* @__PURE__ */ jsx("div", {
			className: "sticky bottom-0 z-40 border-t border-border bg-background/95 p-3 shadow-[0_-8px_30px_-12px_rgba(0,0,0,0.15)] backdrop-blur lg:hidden",
			children: /* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-[1fr_auto] items-center gap-3",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "font-display text-lg font-bold text-primary",
						children: ["₹", program.price.toLocaleString("en-IN")]
					}), /* @__PURE__ */ jsxs("div", {
						className: "truncate text-[11px] text-muted-foreground",
						children: [
							"EMI from ₹",
							Math.round(program.price / 3).toLocaleString("en-IN"),
							"/mo"
						]
					})]
				}), /* @__PURE__ */ jsx(Button, {
					asChild: true,
					variant: "hero",
					size: "lg",
					children: /* @__PURE__ */ jsxs("a", {
						href: "#enroll",
						children: ["Enroll ", /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })]
					})
				})]
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "container-px mx-auto max-w-7xl py-20",
			children: [/* @__PURE__ */ jsx("h2", {
				className: "font-display text-3xl font-bold text-primary",
				children: "Explore other programs"
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-8 grid gap-6 md:grid-cols-3",
				children: others.map((p) => /* @__PURE__ */ jsxs(Link, {
					to: "/programs/$slug",
					params: { slug: p.slug },
					className: "group rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-1 hover:border-accent/50 hover:shadow-[var(--shadow-card)]",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "text-xs font-semibold uppercase tracking-wider text-accent-foreground/80",
							children: p.duration
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "mt-1 font-display text-lg font-bold text-primary",
							children: p.name
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-1.5 text-sm text-muted-foreground",
							children: p.tagline
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary",
							children: ["Explore ", /* @__PURE__ */ jsx(ArrowRight, { className: "h-3.5 w-3.5 transition group-hover:translate-x-1" })]
						})
					]
				}, p.slug))
			})]
		}),
		/* @__PURE__ */ jsx(CTASection, {})
	] });
}
//#endregion
export { ProgramDetail as component };
