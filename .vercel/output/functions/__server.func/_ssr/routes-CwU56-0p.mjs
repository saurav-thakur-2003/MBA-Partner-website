import { r as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, l as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as cn, t as Button } from "./button-CoQ3ZP4A.mjs";
import { i as programs } from "./programs-B_OmzjFp.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as ArrowLeft, D as BookOpen, E as Briefcase, S as CircleCheck, a as TrendingUp, f as MessagesSquare, i as Trophy, k as ArrowRight, l as Quote, o as Target, r as Users, s as Star, u as Play, v as GraduationCap, x as CircleUser, y as FileText } from "../_libs/lucide-react.mjs";
import { t as ProgramCard } from "./ProgramCard-pEpa9Xec.mjs";
import { t as CTASection } from "./CTASection-DpcuUs9N.mjs";
import { n as MentorShowcase, r as SuccessStories, t as FAQ } from "./FAQ-DbcE2mp-.mjs";
import { t as useEmblaCarousel } from "../_libs/embla-carousel-react+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CwU56-0p.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var stats = [
	{
		icon: Users,
		value: "1,500+",
		label: "Students Mentored"
	},
	{
		icon: Trophy,
		value: "500+",
		label: "Case Comp Winners"
	},
	{
		icon: Briefcase,
		value: "200+",
		label: "Live Projects"
	},
	{
		icon: GraduationCap,
		value: "50+",
		label: "Industry Mentors"
	}
];
function TrustStats() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-px mx-auto -mt-12 max-w-7xl",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-2 gap-3 rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-card)] sm:p-6 lg:grid-cols-4",
			children: stats.map(({ icon: Icon, value, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-4 rounded-xl p-3 transition-colors hover:bg-primary-soft",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid h-12 w-12 shrink-0 place-items-center rounded-xl gradient-navy text-white",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-2xl font-bold text-primary sm:text-3xl",
						children: value
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "truncate text-xs font-medium text-muted-foreground",
						children: label
					})]
				})]
			}, label))
		})
	});
}
var steps = [
	{
		icon: CircleUser,
		title: "Profile Building",
		desc: "CV foundation, LinkedIn, personal brand."
	},
	{
		icon: FileText,
		title: "CV Review",
		desc: "3 rounds with Tier-1 recruiters."
	},
	{
		icon: BookOpen,
		title: "Domain Sessions",
		desc: "Consulting, Product, Marketing, Finance."
	},
	{
		icon: Briefcase,
		title: "Live Projects",
		desc: "2 real industry projects with LORs."
	},
	{
		icon: Trophy,
		title: "Case Competitions",
		desc: "Win AIRs at national comps."
	},
	{
		icon: MessagesSquare,
		title: "Mock Interviews",
		desc: "8+ graded mocks, MBB mentors."
	},
	{
		icon: Target,
		title: "Placement Prep",
		desc: "Day-Zero readiness, negotiation."
	},
	{
		icon: TrendingUp,
		title: "Career Growth",
		desc: "Lifetime alumni network."
	}
];
function Roadmap() {
	const [active, setActive] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-px mx-auto max-w-7xl py-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "inline-block rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary",
					children: "The MBA Career OS"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-3 font-display text-3xl font-bold text-primary sm:text-4xl lg:text-5xl",
					children: ["Your ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient-amber",
						children: "8-Step Career Roadmap"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-3 max-w-2xl text-muted-foreground",
					children: "From profile foundation to your first promotion — every step engineered for the top 1% of MBA careers."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-12 grid gap-8 lg:grid-cols-[1fr_1.2fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "space-y-2",
				children: steps.map((s, i) => {
					const Icon = s.icon;
					const isActive = i === active;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setActive(i),
						className: `group flex w-full items-center gap-4 rounded-xl border p-3 text-left transition-all ${isActive ? "border-accent bg-primary text-white shadow-[var(--shadow-elegant)]" : "border-border bg-card hover:border-primary/40 hover:bg-primary-soft"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `grid h-10 w-10 shrink-0 place-items-center rounded-lg ${isActive ? "bg-accent text-accent-foreground" : "bg-primary-soft text-primary"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-sm font-bold",
									children: String(i + 1).padStart(2, "0")
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "min-w-0 flex-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `truncate font-display text-sm font-semibold ${isActive ? "text-white" : "text-primary"}`,
									children: s.title
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: `h-4 w-4 shrink-0 ${isActive ? "text-accent" : "text-muted-foreground"}` })
						]
					}) }, s.title);
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl border border-border gradient-navy p-8 text-white shadow-[var(--shadow-elegant)] lg:sticky lg:top-24 lg:h-fit",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-14 w-14 place-items-center rounded-2xl bg-accent text-accent-foreground",
							children: (() => {
								const ActiveIcon = steps[active].icon;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActiveIcon, { className: "h-6 w-6" });
							})()
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-xs uppercase tracking-wider text-accent",
							children: [
								"Step ",
								active + 1,
								" of 8"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl font-bold",
							children: steps[active].title
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-white/85",
						children: steps[active].desc
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid grid-cols-3 gap-2",
						children: steps.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `h-1.5 rounded-full transition-all ${i <= active ? "bg-accent" : "bg-white/15"}` }, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-sm text-white/70",
						children: "Each step is supported by 1:1 mentorship and live cohort sessions."
					})
				]
			})]
		})]
	});
}
var CarouselContext = import_react.createContext(null);
function useCarousel() {
	const context = import_react.useContext(CarouselContext);
	if (!context) throw new Error("useCarousel must be used within a <Carousel />");
	return context;
}
var Carousel = import_react.forwardRef(({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
	const [carouselRef, api] = useEmblaCarousel({
		...opts,
		axis: orientation === "horizontal" ? "x" : "y"
	}, plugins);
	const [canScrollPrev, setCanScrollPrev] = import_react.useState(false);
	const [canScrollNext, setCanScrollNext] = import_react.useState(false);
	const onSelect = import_react.useCallback((api) => {
		if (!api) return;
		setCanScrollPrev(api.canScrollPrev());
		setCanScrollNext(api.canScrollNext());
	}, []);
	const scrollPrev = import_react.useCallback(() => {
		api?.scrollPrev();
	}, [api]);
	const scrollNext = import_react.useCallback(() => {
		api?.scrollNext();
	}, [api]);
	const handleKeyDown = import_react.useCallback((event) => {
		if (event.key === "ArrowLeft") {
			event.preventDefault();
			scrollPrev();
		} else if (event.key === "ArrowRight") {
			event.preventDefault();
			scrollNext();
		}
	}, [scrollPrev, scrollNext]);
	import_react.useEffect(() => {
		if (!api || !setApi) return;
		setApi(api);
	}, [api, setApi]);
	import_react.useEffect(() => {
		if (!api) return;
		onSelect(api);
		api.on("reInit", onSelect);
		api.on("select", onSelect);
		return () => {
			api?.off("select", onSelect);
		};
	}, [api, onSelect]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselContext.Provider, {
		value: {
			carouselRef,
			api,
			opts,
			orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
			scrollPrev,
			scrollNext,
			canScrollPrev,
			canScrollNext
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref,
			onKeyDownCapture: handleKeyDown,
			className: cn("relative", className),
			role: "region",
			"aria-roledescription": "carousel",
			...props,
			children
		})
	});
});
Carousel.displayName = "Carousel";
var CarouselContent = import_react.forwardRef(({ className, ...props }, ref) => {
	const { carouselRef, orientation } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: carouselRef,
		className: "overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref,
			className: cn("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className),
			...props
		})
	});
});
CarouselContent.displayName = "CarouselContent";
var CarouselItem = import_react.forwardRef(({ className, ...props }, ref) => {
	const { orientation } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		role: "group",
		"aria-roledescription": "slide",
		className: cn("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "pl-4" : "pt-4", className),
		...props
	});
});
CarouselItem.displayName = "CarouselItem";
var CarouselPrevious = import_react.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
	const { orientation, scrollPrev, canScrollPrev } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		ref,
		variant,
		size,
		className: cn("absolute  h-8 w-8 rounded-full", orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90", className),
		disabled: !canScrollPrev,
		onClick: scrollPrev,
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Previous slide"
		})]
	});
});
CarouselPrevious.displayName = "CarouselPrevious";
var CarouselNext = import_react.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
	const { orientation, scrollNext, canScrollNext } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		ref,
		variant,
		size,
		className: cn("absolute h-8 w-8 rounded-full", orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", className),
		disabled: !canScrollNext,
		onClick: scrollNext,
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Next slide"
		})]
	});
});
CarouselNext.displayName = "CarouselNext";
var testimonials = [
	{
		name: "Riya Agarwal",
		role: "Associate, BCG · IIM Indore '25",
		quote: "The mock interview process was brutal in the best way. By Day-Zero I was the calmest person in the room."
	},
	{
		name: "Aditya Joshi",
		role: "Business Analyst, McKinsey · FMS '25",
		quote: "I went from 0 case prep to cracking 4 MBB interviews. The frameworks here are unmatched."
	},
	{
		name: "Megha Patel",
		role: "Consultant, Bain · SPJIMR '25",
		quote: "MBA Partner felt like a sports academy for careers. Every drill, mentor and review had a purpose."
	},
	{
		name: "Siddharth K.",
		role: "Kearney · IIM K '24",
		quote: "The case comp accelerator helped my team win 3 nationals. That single line on my CV opened MBB doors."
	},
	{
		name: "Tanvi Desai",
		role: "P&G ABM · XLRI '24",
		quote: "Live projects gave me real B2C decisions to defend in interviews. Game changer."
	}
];
function VideoTestimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-px mx-auto max-w-7xl py-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "inline-block rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary",
				children: "Hear it from them"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-display text-3xl font-bold text-primary sm:text-4xl",
				children: "Video Testimonials"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Carousel, {
				opts: {
					align: "start",
					loop: true
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselContent, { children: testimonials.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselItem, {
					className: "md:basis-1/2 lg:basis-1/3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group h-full overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-video gradient-navy",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-0 grid place-items-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "grid h-16 w-16 place-items-center rounded-full bg-accent text-accent-foreground shadow-[var(--shadow-glow)] transition-transform group-hover:scale-110",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-6 w-6 fill-current" })
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute bottom-3 left-3 right-3 flex items-center gap-2 text-white",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-9 w-9 place-items-center rounded-full bg-accent text-xs font-bold text-accent-foreground",
									children: t.name.split(" ").map((p) => p[0]).slice(0, 2).join("")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "truncate text-sm font-semibold",
										children: t.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "truncate text-[11px] text-white/70",
										children: t.role
									})]
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "h-5 w-5 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-sm leading-relaxed text-foreground/85",
								children: [
									"\"",
									t.quote,
									"\""
								]
							})]
						})]
					})
				}, i)) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselPrevious, { className: "static translate-y-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselNext, { className: "static translate-y-0" })]
				})]
			})
		})]
	});
}
var homeFaqs = [
	{
		q: "Who is MBA Partner for?",
		a: "MBA students from IIMs, XLRI, SPJIMR, MDI, NMIMS, Symbiosis, IITs and Tier-2 colleges who want to accelerate their careers through real mentorship, projects, case comps and placement prep."
	},
	{
		q: "How is this different from regular coaching?",
		a: "We are a career acceleration platform, not a coaching class. Every program is built around live industry exposure, 1:1 mentorship from Tier-1 alumni and outcome-first design."
	},
	{
		q: "Are the mentors really from MBB and FAANG?",
		a: "Yes — every mentor is vetted and currently working at firms like McKinsey, BCG, Bain, Google, Amazon, P&G or Goldman Sachs."
	},
	{
		q: "Will the certificate add value to my CV?",
		a: "Our certificates are recognised by recruiters, but the real CV value comes from the live projects, case comp wins and LORs you build."
	},
	{
		q: "Can I pay in EMI?",
		a: "Yes — 3-month no-cost EMI is available at checkout for all programs above ₹15,000."
	}
];
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden bg-gradient-to-b from-primary-soft/60 to-background pt-12 pb-24 sm:pt-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 -z-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-32 left-1/3 h-96 w-96 rounded-full bg-accent/10 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute right-0 top-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-px mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "animate-fade-up",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs font-semibold text-accent-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3.5 w-3.5 fill-accent text-accent" }), "Trusted by 1,500+ MBA students · 4.9/5 rating"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-5 font-display text-4xl font-extrabold leading-[1.05] text-primary sm:text-5xl lg:text-6xl",
							children: [
								"Get Mentored by India's ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient-amber",
									children: "Top MBA Talent"
								}),
								" Network"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg",
							children: "Live Projects, Case Competitions, Placement Preparation and Career Mentorship — built by alumni of IIM, XLRI & SPJIMR. Now serving MBA students across India."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-7 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "hero",
								size: "xl",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/programs",
									children: ["Explore Programs ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-5 w-5" })]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "outline",
								size: "xl",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#stories",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-4 w-4" }), " Watch Success Stories"]
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground",
							children: [
								"No-cost EMI",
								"100% placement support",
								"MBB & FAANG mentors"
							].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-success" }),
									" ",
									t
								]
							}, t))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-[4/5] rounded-3xl gradient-navy p-8 shadow-[var(--shadow-elegant)] sm:aspect-[5/6]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute -top-4 -left-4 rounded-2xl bg-accent px-4 py-2 text-xs font-bold text-accent-foreground shadow-lg",
							children: "NEW BATCH · Aug 2026"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex h-full flex-col justify-between text-white",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[11px] uppercase tracking-widest text-accent",
									children: "Flagship Program"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 font-display text-3xl font-extrabold sm:text-4xl",
									children: [
										"All-In-One",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"Career OS"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 max-w-xs text-sm text-white/80",
									children: "The complete stack — placement prep, case comps, live projects & 6 months of 1:1 mentorship."
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-3 gap-2",
										children: [
											{
												v: "92%",
												l: "Placement"
											},
											{
												v: "₹38L",
												l: "Avg CTC"
											},
											{
												v: "6 mo",
												l: "Mentorship"
											}
										].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-xl bg-white/10 p-3 text-center backdrop-blur",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-display text-lg font-bold text-accent",
												children: s.v
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[10px] text-white/70",
												children: s.l
											})]
										}, s.l))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										variant: "hero",
										className: "w-full",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/programs/all-in-one-combo",
											children: ["Enroll Now · ₹39,999 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-center text-[11px] text-white/60",
										children: "3-month no-cost EMI · 7-day refund"
									})
								]
							})]
						})]
					})
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustStats, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-px mx-auto max-w-7xl py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-start justify-between gap-4 md:flex-row md:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "inline-block rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary",
						children: "Programs"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-3 font-display text-3xl font-bold text-primary sm:text-4xl",
						children: ["Choose your ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient-amber",
							children: "career sprint"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-xl text-muted-foreground",
						children: "Four outcome-led programs, each engineered with mentors, projects and assessments."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "navy",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/compare",
						children: ["Compare All ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4",
				children: programs.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgramCard, { program: p }, p.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Roadmap, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MentorShowcase, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SuccessStories, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VideoTestimonials, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, { items: homeFaqs }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {})
	] });
}
//#endregion
export { Home as component };
