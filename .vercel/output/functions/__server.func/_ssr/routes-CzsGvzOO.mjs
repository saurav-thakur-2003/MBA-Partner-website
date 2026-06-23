import { r as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, l as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as cn, t as Button } from "./button-CoQ3ZP4A.mjs";
import { A as CircleUser, B as Bolt, D as FileText, E as GraduationCap, F as ChartLine, H as Award, R as Briefcase, U as ArrowRight, W as ArrowLeft, _ as MessagesSquare, a as TrendingUp, c as Star, d as Send, f as Quote, h as PhoneCall, i as Trophy, j as CircleCheck, o as Target, p as Play, r as Users, x as Megaphone, y as MessageCircleMore, z as BookOpen } from "../_libs/lucide-react.mjs";
import { t as FAQ } from "./FAQ-CJo438p0.mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as CTASection } from "./CTASection-DpcuUs9N.mjs";
import { i as programs } from "./programs-B_OmzjFp.mjs";
import { t as ProgramCard } from "./ProgramCard-pEpa9Xec.mjs";
import { n as SuccessStories, t as MentorShowcase } from "./SuccessStories-D7Zt4jJQ.mjs";
import { t as useEmblaCarousel } from "../_libs/embla-carousel-react+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CzsGvzOO.js
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
		className: "container-px mx-auto max-w-7xl py-6 sm:py-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-1 gap-2 rounded-3xl border border-border bg-card p-3 shadow-[var(--shadow-card)] sm:grid-cols-2 sm:p-4 lg:grid-cols-4",
			children: stats.map(({ icon: Icon, value, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3 rounded-2xl px-3 py-2 transition-colors hover:bg-primary-soft/70",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid h-12 w-12 shrink-0 place-items-center rounded-xl gradient-navy text-white",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-2xl font-extrabold text-foreground sm:text-3xl",
						children: value
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "truncate text-xs font-medium text-foreground/70",
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
		desc: "CV foundation, LinkedIn, personal brand.",
		points: [
			"Profile audit",
			"Story framing",
			"LinkedIn optimisation"
		]
	},
	{
		icon: FileText,
		title: "CV Review",
		desc: "3 rounds with Tier-1 recruiters.",
		points: [
			"Three revision cycles",
			"ATS-friendly structure",
			"Mentor feedback"
		]
	},
	{
		icon: BookOpen,
		title: "Domain Sessions",
		desc: "Consulting, Product, Marketing, Finance.",
		points: [
			"Domain exposure",
			"Role mapping",
			"Industry basics"
		]
	},
	{
		icon: Briefcase,
		title: "Live Projects",
		desc: "2 real industry projects with LORs.",
		points: [
			"Real briefs",
			"Weekly checkpoints",
			"LOR-worthy output"
		]
	},
	{
		icon: Trophy,
		title: "Case Competitions",
		desc: "Win AIRs at national comps.",
		points: [
			"Framework practice",
			"Deck structure",
			"Jury simulation"
		]
	},
	{
		icon: MessagesSquare,
		title: "Mock Interviews",
		desc: "8+ graded mocks, MBB mentors.",
		points: [
			"Behavioral rounds",
			"Case interviews",
			"Feedback reports"
		]
	},
	{
		icon: Target,
		title: "Placement Prep",
		desc: "Day-Zero readiness, negotiation.",
		points: [
			"Offer strategy",
			"Negotiation",
			"Final readiness check"
		]
	},
	{
		icon: TrendingUp,
		title: "Career Growth",
		desc: "Lifetime alumni network.",
		points: [
			"Community access",
			"Alumni support",
			"Long-term growth"
		]
	}
];
function Roadmap() {
	const [active, setActive] = (0, import_react.useState)(0);
	const current = steps[active];
	const ActiveIcon = current.icon;
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
					children: "From profile foundation to your first promotion — every step is engineered for high-conviction career outcomes."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-12 grid gap-8 lg:grid-cols-[1fr_1.2fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "space-y-2",
				children: steps.map((step, index) => {
					const StepIcon = step.icon;
					const isActive = index === active;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setActive(index),
						className: `group flex w-full items-center gap-4 rounded-xl border p-3 text-left transition-all ${isActive ? "border-accent bg-accent/20 shadow-[var(--shadow-elegant)]" : "border-border bg-card hover:border-primary/40 hover:bg-primary-soft/70"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `grid h-10 w-10 shrink-0 place-items-center rounded-lg ${isActive ? "bg-accent text-accent-foreground" : "bg-primary-soft text-primary"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-sm font-bold",
									children: String(index + 1).padStart(2, "0")
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "truncate font-display text-sm font-semibold text-foreground",
									children: step.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-0.5 text-xs text-muted-foreground",
									children: step.desc
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepIcon, { className: `h-4 w-4 shrink-0 ${isActive ? "text-foreground" : "text-muted-foreground"}` })
						]
					}) }, step.title);
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl border border-border gradient-navy p-8 text-white shadow-[var(--shadow-elegant)] lg:sticky lg:top-24 lg:h-fit",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-14 w-14 place-items-center rounded-2xl bg-accent text-accent-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActiveIcon, { className: "h-6 w-6" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-xs uppercase tracking-wider text-accent",
							children: [
								"Step ",
								active + 1,
								" of 8"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl font-bold",
							children: current.title
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-white/85",
						children: current.desc
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid gap-3 sm:grid-cols-3",
						children: current.points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-white/10 bg-white/10 p-4 text-sm text-white/90 backdrop-blur",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mb-2 h-4 w-4 text-accent" }), point]
						}, point))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid grid-cols-3 gap-2",
						children: steps.map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `h-1.5 rounded-full transition-all ${index <= active ? "bg-accent" : "bg-white/15"}` }, index))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-sm text-white/70",
						children: "Each step is supported by 1:1 mentorship, live sessions and portfolio-driven proof."
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
var mbaPrograms = [
	{
		name: "Placement Bootcamp",
		to: "/programs/placement-bootcamp",
		accent: "Build interview readiness"
	},
	{
		name: "Live Projects",
		to: "/programs/live-projects",
		accent: "Strengthen your CV"
	},
	{
		name: "Case Competition Accelerator",
		to: "/programs/case-competition-accelerator",
		accent: "Win competitions"
	},
	{
		name: "All-In-One Combo",
		to: "/programs/all-in-one-combo",
		accent: "Best value"
	}
];
var catTracks = [
	{
		name: "CAT Foundation Program",
		note: "Concept building from scratch"
	},
	{
		name: "Quant Mastery",
		note: "Speed + accuracy in QA"
	},
	{
		name: "VARC Mastery",
		note: "Reading comprehension, summaries"
	},
	{
		name: "LRDI Mastery",
		note: "Set selection and logic"
	},
	{
		name: "GDPI Excellence Program",
		note: "Convert final calls"
	}
];
var recommendations = [
	{
		prompt: "MBA Student or CAT Aspirant?",
		icon: GraduationCap,
		answers: ["MBA Student", "CAT / OMET Aspirant"]
	},
	{
		prompt: "Looking for Placements?",
		icon: Briefcase,
		answers: ["Yes", "No"]
	},
	{
		prompt: "Interested in Case Competitions?",
		icon: Trophy,
		answers: ["Yes", "No"]
	},
	{
		prompt: "Need Live Projects?",
		icon: ChartLine,
		answers: ["Yes", "No"]
	},
	{
		prompt: "Preparing for CAT?",
		icon: BookOpen,
		answers: ["Yes", "No"]
	}
];
function AudienceSelector() {
	const [audience, setAudience] = (0, import_react.useState)("mba");
	const [selectedAnswers, setSelectedAnswers] = (0, import_react.useState)({});
	const navigate = useNavigate();
	const recommended = (0, import_react.useMemo)(() => {
		if (selectedAnswers["mba_cat"] === "CAT / OMET Aspirant" || audience === "cat") return [
			"CAT Foundation Program",
			"Quant Mastery",
			"VARC Mastery",
			"LRDI Mastery",
			"GDPI Excellence Program"
		];
		if (selectedAnswers["needs_live_projects"] === "Yes") return [
			"Live Projects",
			"Placement Bootcamp",
			"All-In-One Combo"
		];
		if (selectedAnswers["case_comp"] === "Yes") return ["Case Competition Accelerator", "All-In-One Combo"];
		if (selectedAnswers["placements"] === "Yes") return ["Placement Bootcamp", "All-In-One Combo"];
		return [
			"All-In-One Combo",
			"Placement Bootcamp",
			"Live Projects"
		];
	}, [audience, selectedAnswers]);
	const handleAnswer = (key, value) => {
		setSelectedAnswers((current) => ({
			...current,
			[key]: value
		}));
		if (key === "mba_cat") setAudience(value === "CAT / OMET Aspirant" ? "cat" : "mba");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-px mx-auto max-w-7xl py-10 sm:py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-[2rem] border border-border bg-card p-5 shadow-[var(--shadow-card)] sm:p-7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "inline-flex rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary",
						children: "Who Are You?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl font-bold text-primary sm:text-4xl",
						children: "Premium audience selection"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-2xl text-muted-foreground",
						children: "Choose your background and we’ll show the most relevant MBA Partner journey immediately."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "inline-flex rounded-full border border-border bg-background p-1 text-sm font-semibold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							setAudience("mba");
							navigate({ to: "/" });
						},
						className: `rounded-full px-4 py-2 transition ${audience === "mba" ? "bg-primary text-white shadow" : "text-foreground/70"}`,
						children: "MBA Student"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							setAudience("cat");
							navigate({ to: "/cat" });
						},
						className: `rounded-full px-4 py-2 transition ${audience === "cat" ? "bg-primary text-white shadow" : "text-foreground/70"}`,
						children: "CAT / OMET Aspirant"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 md:grid-cols-2",
					children: (audience === "mba" ? mbaPrograms : catTracks).map((card) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group rounded-3xl border border-border bg-gradient-to-br from-primary-soft to-background p-5 transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs font-semibold uppercase tracking-[0.3em] text-primary/70",
									children: audience === "mba" ? "MBA Pathway" : "CAT Track"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 font-display text-xl font-bold text-primary",
									children: card.name
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-11 w-11 place-items-center rounded-2xl bg-accent text-accent-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-5 w-5" })
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted-foreground",
								children: "accent" in card ? card.accent : card.note
							}),
							audience === "mba" && "to" in card ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "outline",
								className: "mt-4 w-full",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: card.to,
									children: ["Explore ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
								})
							}) : null
						]
					}, card.name))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl border border-border bg-gradient-to-b from-[#0d1830] to-[#142850] p-5 text-white",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs font-semibold uppercase tracking-[0.3em] text-accent",
							children: "Which Program Is Right For You?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 space-y-3",
							children: recommendations.map((question, index) => {
								const Icon = question.icon;
								const key = index === 0 ? "mba_cat" : index === 1 ? "placements" : index === 2 ? "case_comp" : index === 3 ? "needs_live_projects" : "preparing_cat";
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl border border-white/10 bg-white/5 p-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-sm font-semibold",
											children: question.prompt
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-3 flex flex-wrap gap-2",
										children: question.answers.map((answer) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => handleAnswer(key, answer),
											className: `rounded-full px-3 py-1.5 text-xs font-semibold transition ${selectedAnswers[key] === answer ? "bg-accent text-accent-foreground" : "bg-white/10 text-white/80 hover:bg-white/15"}`,
											children: answer
										}, answer))
									})]
								}, question.prompt);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 rounded-2xl border border-white/10 bg-white/5 p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs font-semibold uppercase tracking-[0.3em] text-accent",
								children: "Recommended for you"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 flex flex-wrap gap-2",
								children: recommended.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground",
									children: item
								}, item))
							})]
						})
					]
				})]
			})]
		})
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
var bannerChips = [
	"Limited-time mega offer",
	"Save up to ₹40,000",
	"50% off bundle",
	"3-month no-cost EMI",
	"Apply now"
];
function PromoBanner() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative overflow-hidden border-b border-[#ffcf33]/60 bg-[linear-gradient(90deg,#ff6a00_0%,#ffb000_18%,#ff7a00_45%,#ffcf33_70%,#ff8a00_100%)] text-amber-950 shadow-[0_12px_35px_-15px_rgba(255,122,0,0.95)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 opacity-55 [background-image:linear-gradient(110deg,transparent_0%,rgba(255,255,255,0.35)_45%,transparent_90%),radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.75),transparent_18%),radial-gradient(circle_at_80%_50%,rgba(255,255,255,0.55),transparent_16%)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#ff6a00] to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#ff8a00] to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-px relative mx-auto max-w-7xl py-2.5 sm:py-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-2xl border border-white/25 bg-white/10 backdrop-blur-md",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "marquee flex w-[200%] items-center gap-6 whitespace-nowrap px-4 py-2.5",
						children: [...bannerChips, ...bannerChips].map((chip, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-wide",
							children: [index === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-7 w-7 place-items-center rounded-full bg-amber-950 text-amber-100 shadow-lg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Megaphone, { className: "h-4 w-4" })
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-7 w-7 place-items-center rounded-full bg-white/55 text-amber-950 shadow",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bolt, { className: "h-4 w-4" })
							}), chip === "Apply now" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/programs/all-in-one-combo",
								className: "rounded-full border border-white/50 bg-amber-950 px-4 py-1.5 text-white shadow-[0_8px_24px_-12px_rgba(255,255,255,0.95)] transition-transform hover:scale-[1.03] hover:bg-black",
								children: "Apply now"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full border border-white/40 bg-white/40 px-4 py-1.5 shadow-[0_8px_24px_-12px_rgba(255,255,255,0.95)]",
								children: chip
							})]
						}, `${chip}-${index}`))
					})
				})
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PromoBanner, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden bg-gradient-to-b from-primary-soft/60 to-background pt-12 pb-24 sm:pt-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 -z-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-32 left-1/3 h-96 w-96 rounded-full bg-accent/20 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute right-0 top-40 h-96 w-96 rounded-full bg-primary/15 blur-3xl" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-px mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[1fr_1fr] lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "animate-fade-up",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 rounded-full border border-[#f8f683]/70 bg-[#f8f683] px-3 py-1.5 text-xs font-extrabold text-[#111827] shadow-[0_8px_24px_-14px_rgba(248,246,131,0.9)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3.5 w-3.5 fill-[#111827] text-[#111827]" }), "Trusted by 1,500+ MBA students · 4.9/5 rating"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-5 max-w-2xl font-display text-4xl font-extrabold leading-[1.05] text-primary sm:text-5xl lg:text-6xl",
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
						className: "relative overflow-hidden rounded-3xl gradient-navy p-6 shadow-[var(--shadow-elegant)] lg:p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,rgba(255,180,0,0.7),transparent_22%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.12),transparent_18%),radial-gradient(circle_at_50%_80%,rgba(255,180,0,0.2),transparent_18%)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative grid gap-6 text-white lg:grid-cols-[1.05fr_0.95fr] lg:items-start",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "inline-flex rounded-full bg-accent px-4 py-2 text-xs font-bold text-accent-foreground shadow-lg",
										children: "NEW BATCH · Aug 2026"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[11px] uppercase tracking-[0.35em] text-accent",
										children: "Flagship Program"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "max-w-md font-display text-3xl font-extrabold sm:text-4xl",
										children: [
											"All-In-One",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"Career OS"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "max-w-sm text-sm leading-relaxed text-white/80",
										children: "The complete stack — placement prep, case comps, live projects & 6 months of 1:1 mentorship."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-3 gap-2 pt-4",
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
										className: "w-full sm:w-auto",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/programs/all-in-one-combo",
											children: ["Enroll Now · ₹39,999 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[11px] text-white/60",
										children: "3-month no-cost EMI · 7-day refund"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-4 lg:pt-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-[1.75rem] border border-white/15 bg-white/10 p-4 shadow-[0_18px_60px_-20px_rgba(0,0,0,0.55)] backdrop-blur-xl",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[10px] font-bold uppercase tracking-[0.35em] text-accent",
												children: "Live cohort preview"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												className: "inline-flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-semibold text-white/80",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-3 w-3 fill-current" }), " Watch"]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-3 overflow-hidden rounded-2xl bg-[linear-gradient(135deg,#111827_0%,#253c90_50%,#616ed0_100%)] p-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "min-h-[230px] rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-4",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex h-full min-h-[190px] flex-col justify-between gap-3",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.22em] text-white/80",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(74,222,128,0.95)]" }), "Live mentoring session"]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "max-w-[70%]",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "text-[2rem] font-black leading-[0.98] tracking-tight",
																children: [
																	"Case",
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
																	"Interviews"
																]
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "mt-2 text-[11px] leading-relaxed text-white/75",
																children: "MBB-style prep with mentor feedback"
															})]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "grid place-items-center self-start rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "mr-1 h-4 w-4 fill-current text-accent" }), " Play preview"]
														})
													]
												})
											})
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-[1.75rem] border border-white/15 bg-[linear-gradient(180deg,rgba(248,246,131,0.18),rgba(255,204,182,0.15),rgba(91,103,207,0.25))] p-4 shadow-[0_18px_60px_-20px_rgba(0,0,0,0.45)] backdrop-blur-xl",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[10px] font-bold uppercase tracking-[0.32em] text-accent",
												children: "Offer card"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-2 rounded-2xl bg-background/25 p-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-sm font-black leading-tight text-white",
													children: "Fast track your career"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "mt-1 text-[11px] text-white/75",
													children: "Live projects, mentorship, placement prep"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-3 grid grid-cols-2 gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "rounded-2xl bg-white/10 p-3 text-center",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-lg font-extrabold text-accent",
														children: "50%"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-[10px] text-white/75",
														children: "bundle off"
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "rounded-2xl bg-white/10 p-3 text-center",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-lg font-extrabold text-accent",
														children: "24/7"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-[10px] text-white/75",
														children: "support"
													})]
												})]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-3 gap-2",
										children: [
											{
												icon: Users,
												title: "2,400+",
												sub: "active learners"
											},
											{
												icon: Trophy,
												title: "500+",
												sub: "wins & offers"
											},
											{
												icon: Briefcase,
												title: "200+",
												sub: "live projects"
											}
										].map((item) => {
											const Icon = item.icon;
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-2xl border border-white/10 bg-white/10 p-3 text-center",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "mx-auto grid h-10 w-10 place-items-center rounded-xl bg-accent text-accent-foreground",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "mt-2 font-display text-base font-extrabold leading-none text-white",
														children: item.title
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "mt-1 text-[11px] text-white/70",
														children: item.sub
													})
												]
											}, item.title);
										})
									})
								]
							})]
						})]
					})
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AudienceSelector, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "-mt-8 sm:-mt-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustStats, {})
		}),
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
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-px mx-auto max-w-7xl py-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircleMore, { className: "h-4 w-4" }), "Join the community"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-display text-3xl font-bold text-primary",
								children: "Stay inside the loop with our WhatsApp and Telegram communities"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-muted-foreground",
								children: "Get updates on offers, live sessions, mentor AMAs, and community support."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "hero",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "https://chat.whatsapp.com/EdyvGJbQoV9Jj6eC0slSx9?mode=hq2tcla",
								target: "_blank",
								rel: "noreferrer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneCall, { className: "h-4 w-4" }), "Join WhatsApp"]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "https://chat.whatsapp.com/EdyvGJbQoV9Jj6eC0slSx9?mode=hq2tcla",
								target: "_blank",
								rel: "noreferrer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" }), "Join Community"]
							})
						})]
					})]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, { items: homeFaqs }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {})
	] });
}
//#endregion
export { Home as component };
