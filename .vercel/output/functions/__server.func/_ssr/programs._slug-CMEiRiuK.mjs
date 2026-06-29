import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-CoQ3ZP4A.mjs";
import { A as Clock3, D as GraduationCap, I as Check, K as BadgeCheck, S as Megaphone, Y as ArrowRight, a as Trophy, d as ShieldCheck, i as Users, l as Star, q as Award, u as Sparkles, z as CalendarDays } from "../_libs/lucide-react.mjs";
import { t as FAQ } from "./FAQ-CJo438p0.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as CTASection } from "./CTASection-DpcuUs9N.mjs";
import { i as programs, r as mentors, t as companyLogos } from "./programs-NnSnBEVu.mjs";
import { r as pricing } from "./content-vHMzH7fA.mjs";
import { t as Route } from "./programs._slug-BOQJ6ZNX.mjs";
import { n as SuccessStories, t as MentorShowcase } from "./SuccessStories-Dr1QBAXB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/programs._slug-CMEiRiuK.js
var import_jsx_runtime = require_jsx_runtime();
var programComparisonRows = [
	{
		label: "Mentorship",
		key: "mentorship"
	},
	{
		label: "Mock Interviews",
		key: "mockInterviews"
	},
	{
		label: "Projects",
		key: "projects"
	},
	{
		label: "Certificates",
		key: "certificates"
	},
	{
		label: "Placement Support",
		key: "placementSupport"
	}
];
var testimonials = [
	{
		name: "Aayushi Gupta",
		school: "FMS Delhi",
		company: "Amazon",
		quote: "The live projects made my CV materially stronger and changed how I performed in interviews."
	},
	{
		name: "Shruti Satdeve",
		school: "IIM Udaipur",
		company: "Accenture Strategy",
		quote: "The mentor feedback was structured, direct and outcome focused. Exactly what I needed."
	},
	{
		name: "Megha Bhattacharya",
		school: "IIM Mumbai",
		company: "Kearney",
		quote: "The case prep and project exposure made the journey feel premium and practical."
	}
];
function ProgramDetail() {
	const { program } = Route.useLoaderData();
	programs.filter((p) => p.slug !== program.slug).slice(0, 3);
	const savings = program.originalPrice - program.price;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden gradient-navy pt-16 pb-16 text-white",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-32 top-10 h-96 w-96 rounded-full bg-accent/20 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-px mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "animate-fade-up",
					children: [
						program.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase text-accent-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3" }),
								" ",
								program.badge
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, { className: "h-3.5 w-3.5 text-accent" }), "Premium MBA Partner experience"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 max-w-3xl font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl",
							children: program.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-display text-xl text-accent",
							children: program.tagline
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-2xl text-white/85",
							children: program.shortDescription
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 grid gap-3 sm:grid-cols-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl border border-white/10 bg-white/10 p-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, { className: "h-4 w-4" }), " Duration"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-2 font-display text-2xl font-bold",
										children: program.duration
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl border border-white/10 bg-white/10 p-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-4 w-4" }), " Mentorship"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-2 font-display text-2xl font-bold",
										children: program.mentorship
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl border border-white/10 bg-white/10 p-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4" }), " Rating"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-2 font-display text-2xl font-bold",
										children: "4.9/5"
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-7 flex flex-wrap gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "hero",
									size: "xl",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#enroll",
										children: ["Enroll Now ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-5 w-5" })]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "outline",
									size: "xl",
									className: "border-white/30 bg-white/10 text-white hover:bg-white hover:text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#curriculum",
										children: "View Curriculum"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "outline",
									size: "xl",
									className: "border-white/30 bg-white/10 text-white hover:bg-white hover:text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#book-counselling",
										children: "Book Counseling"
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap gap-2 text-xs font-semibold text-white/70",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "rounded-full border border-white/10 bg-white/10 px-3 py-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "mr-1 inline h-3.5 w-3.5 text-accent" }), " Trust badges"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "rounded-full border border-white/10 bg-white/10 px-3 py-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "mr-1 inline h-3.5 w-3.5 text-accent" }), " Success metrics"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "rounded-full border border-white/10 bg-white/10 px-3 py-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Megaphone, { className: "mr-1 inline h-3.5 w-3.5 text-accent" }), " Limited seats"]
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl bg-white p-6 text-foreground shadow-(--shadow-elegant)",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							id: "enroll",
							className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
							children: "Pricing"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-1 flex items-baseline gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-4xl font-extrabold text-primary",
								children: program.slug === "placement-bootcamp" ? pricing.placementsBootcamp.price : program.slug === "all-in-one-combo" ? pricing.allInOneCombo2.price : program.slug === "case-competition-accelerator" ? pricing.caseCompetitions.dominating.price : program.slug === "live-projects" ? pricing.liveProjects[0].price : `₹${program.price.toLocaleString("en-IN")}`
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-base text-muted-foreground line-through",
								children: program.slug === "placement-bootcamp" ? pricing.placementsBootcamp.was : program.slug === "all-in-one-combo" ? pricing.allInOneCombo2.was : program.slug === "case-competition-accelerator" ? pricing.caseCompetitions.dominating.was : program.slug === "live-projects" ? pricing.liveProjects[0].was : `₹${program.originalPrice.toLocaleString("en-IN")}`
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 inline-block rounded-full bg-success/15 px-2.5 py-0.5 text-xs font-bold text-success",
							children: program.slug === "placement-bootcamp" ? `You save ${pricing.placementsBootcamp.was}` : `You save ₹${savings.toLocaleString("en-IN")}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-5 h-px bg-border" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-2.5 text-sm",
							children: program.outcomes.slice(0, 4).map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 h-4 w-4 shrink-0 text-success" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: o })]
							}, o))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "hero",
							size: "lg",
							className: "mt-5 w-full",
							children: ["Enroll Now ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							size: "lg",
							className: "mt-2 w-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#book-counselling",
								children: "Book Counseling"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 text-center text-[11px] text-muted-foreground",
							children: "3-month no-cost EMI · 7-day refund"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 rounded-2xl bg-primary-soft p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs font-semibold uppercase tracking-wider text-primary",
								children: "Urgency"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 text-sm text-foreground/80",
								children: "Limited mentor bandwidth. Priority admissions for serious students only."
							})]
						})
					]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-px mx-auto max-w-7xl py-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-[1.15fr_0.85fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-4xl border border-border bg-card p-6 shadow-(--shadow-card)",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "inline-flex rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary",
							children: "Program Overview"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-3xl font-bold text-primary",
							children: "What students get"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted-foreground",
							children: program.shortDescription
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 grid gap-4 md:grid-cols-2",
							children: program.features.map((feature) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-border bg-background p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-lg font-bold text-primary",
									children: feature.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: feature.description
								})]
							}, feature.title))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-4xl border border-border bg-card p-6 shadow-(--shadow-card)",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "inline-flex rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary",
							children: "Comparison"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-3xl font-bold text-primary",
							children: "Why choose this program"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 overflow-hidden rounded-2xl border border-border",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("table", {
								className: "w-full text-sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: programComparisonRows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "border-b border-border last:border-b-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "bg-primary-soft px-4 py-3 font-semibold text-primary",
										children: row.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3 text-foreground/80",
										children: program[row.key]
									})]
								}, row.label)) })
							})
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-primary-soft py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-px mx-auto max-w-7xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-6 lg:grid-cols-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-4xl bg-card p-6 shadow-(--shadow-card) lg:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl font-bold text-primary",
							children: "Who Should Join"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 grid gap-4 md:grid-cols-3",
							children: program.whoFor.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-border bg-background p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-10 w-10 place-items-center rounded-xl gradient-navy font-bold text-white",
									children: String(index + 1).padStart(2, "0")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm text-foreground/85",
									children: item
								})]
							}, item))
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-4xl bg-card p-6 shadow-(--shadow-card)",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl font-bold text-primary",
							children: "Expected Outcomes"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 space-y-3",
							children: program.outcomes.map((outcome) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-2 rounded-2xl bg-primary-soft p-3 text-sm text-foreground/85",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 h-4 w-4 shrink-0 text-success" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: outcome })]
							}, outcome))
						})]
					})]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "curriculum",
			className: "container-px mx-auto max-w-7xl py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "inline-flex rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary",
					children: "Curriculum"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-3xl font-bold text-primary sm:text-4xl",
					children: "Curriculum Timeline"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden items-center gap-2 rounded-full border border-border bg-card px-3 py-2 text-xs font-semibold text-foreground/70 lg:flex",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "h-4 w-4 text-primary" }), "6 months of guided progress"]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 space-y-4",
				children: program.modules.map((module, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 rounded-2xl border border-border bg-card p-5 shadow-(--shadow-card) md:grid-cols-[180px_1fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs font-bold uppercase tracking-wider text-accent-foreground/80",
						children: module.week
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-1 font-display text-lg font-bold text-primary",
						children: ["Module ", index + 1]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl font-bold text-primary",
						children: module.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 flex flex-wrap gap-2",
						children: module.topics.map((topic) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary",
							children: topic
						}, topic))
					})] })]
				}, module.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-primary-soft py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-px mx-auto max-w-7xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-end justify-between",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary",
						children: "Mentor Profiles"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl font-bold text-primary sm:text-4xl",
						children: "Learn from credible operators"
					})] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4",
					children: mentors.map((mentor) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl bg-card p-5 shadow-(--shadow-card)",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-14 w-14 place-items-center rounded-2xl gradient-navy font-bold text-white",
								children: mentor.name.split(" ").map((part) => part[0]).slice(0, 2).join("")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-display text-lg font-bold text-primary",
								children: mentor.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: mentor.role
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 space-y-1.5 text-xs text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "h-3.5 w-3.5 text-primary" }),
										" ",
										mentor.college
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-3.5 w-3.5 text-primary" }),
										" ",
										mentor.company
									]
								})]
							})
						]
					}, mentor.name))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-px mx-auto max-w-7xl py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "inline-flex rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary",
					children: "Social Proof"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-3xl font-bold text-primary sm:text-4xl",
					children: "Testimonials & success stories"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-4 md:grid-cols-3",
					children: testimonials.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-5 shadow-(--shadow-card)",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-11 w-11 place-items-center rounded-full bg-primary-soft font-bold text-primary",
								children: item.name.split(" ").map((part) => part[0]).slice(0, 2).join("")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-base font-bold text-primary",
								children: item.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs text-muted-foreground",
								children: [
									item.school,
									" · ",
									item.company
								]
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-sm leading-relaxed text-foreground/80",
							children: [
								"“",
								item.quote,
								"”"
							]
						})]
					}, item.name))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-primary-soft py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-px mx-auto max-w-7xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl font-bold text-primary sm:text-4xl",
					children: "Company logos"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 flex flex-wrap gap-3",
					children: companyLogos.map((company) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground/75 shadow-sm",
						children: company
					}, company))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-px mx-auto max-w-7xl py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-[1fr_0.85fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-4xl border border-border bg-card p-6 shadow-(--shadow-card)",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-bold text-primary",
						children: "FAQ"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, {
						items: program.faqs,
						title: ""
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-4xl border border-border bg-card p-6 shadow-(--shadow-card)",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							id: "book-counselling",
							className: "inline-flex rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary",
							children: "Book Counseling CTA"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-3xl font-bold text-primary",
							children: "Talk to the MBA Partner team"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-muted-foreground",
							children: "Get a free program fit call, compare options, and see what path is best for your goals."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm",
									placeholder: "Your name"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm",
									placeholder: "Mobile / WhatsApp number"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									className: "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "MBA Student" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "CAT Aspirant" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									className: "w-full",
									variant: "hero",
									children: "Book Free Counseling"
								})
							]
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-px mx-auto max-w-7xl py-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-4xl border border-border bg-card p-6 shadow-(--shadow-card)",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl bg-primary-soft p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs font-semibold uppercase tracking-wider text-primary",
								children: "Limited Seats"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 text-sm text-foreground/80",
								children: "Priority mentor bandwidth for this batch."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl bg-primary-soft p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs font-semibold uppercase tracking-wider text-primary",
								children: "Urgency"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 text-sm text-foreground/80",
								children: "Enroll before seats and mentor slots fill up."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl bg-primary-soft p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs font-semibold uppercase tracking-wider text-primary",
								children: "Sticky CTA"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 text-sm text-foreground/80",
								children: "Enrollment button stays visible on mobile."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl bg-primary-soft p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs font-semibold uppercase tracking-wider text-primary",
								children: "Trust"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 text-sm text-foreground/80",
								children: "Premium design, social proof, and mentor credibility."
							})]
						})
					]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MentorShowcase, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SuccessStories, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StickyEnroll, {
			programSlug: program.slug,
			price: program.price
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-px mx-auto max-w-7xl pb-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-4xl border border-border bg-card p-6 shadow-(--shadow-card)",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "inline-flex rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary",
						children: "Pricing"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl font-bold text-primary",
						children: "Pricing and enrollment"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-muted-foreground",
						children: "Retained MBA Partner pricing structure with clear value framing and immediate action paths."
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {})
	] });
}
function StickyEnroll({ programSlug, price }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "sticky bottom-0 z-40 border-t border-border bg-background/95 p-3 shadow-[0_-8px_30px_-12px_rgba(0,0,0,0.15)] backdrop-blur lg:hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-[1fr_auto] items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "font-display text-lg font-bold text-primary",
					children: ["₹", price.toLocaleString("en-IN")]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "truncate text-[11px] text-muted-foreground",
					children: [
						"EMI from ₹",
						Math.round(price / 3).toLocaleString("en-IN"),
						"/mo"
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "hero",
				size: "lg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: `/programs/${programSlug}`,
					children: ["Enroll ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
				})
			})]
		})
	});
}
//#endregion
export { ProgramDetail as component };
