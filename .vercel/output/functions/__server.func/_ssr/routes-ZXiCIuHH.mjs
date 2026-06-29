import { r as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, l as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as cn, t as Button } from "./button-CoQ3ZP4A.mjs";
import { D as GraduationCap, G as Bolt, H as Briefcase, J as ArrowUpRight, K as BadgeCheck, L as ChartLine, M as CirclePlay, N as CircleCheck, O as FileText, S as Megaphone, T as Linkedin, W as BookOpen, X as ArrowLeft, Y as ArrowRight, a as Trophy, b as MessageCircleMore, f as Send, g as PhoneCall, i as Users, j as CircleUser, l as Star, m as Play, o as TrendingUp, p as Quote, q as Award, r as Video, s as Target, u as Sparkles, v as MessagesSquare, w as Mail } from "../_libs/lucide-react.mjs";
import { t as FAQ } from "./FAQ-CJo438p0.mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as CTASection } from "./CTASection-DpcuUs9N.mjs";
import { i as programs } from "./programs-NnSnBEVu.mjs";
import { a as resources, i as prodmarkOffer, n as mentorPasted, o as testimonials, s as trust, t as contactLeads } from "./content-vHMzH7fA.mjs";
import { t as ProgramCard } from "./ProgramCard-B9t_JEJ6.mjs";
import { n as SuccessStories, t as MentorShowcase } from "./SuccessStories-Dr1QBAXB.mjs";
import { t as useEmblaCarousel } from "../_libs/embla-carousel-react+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-ZXiCIuHH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var stats = [
	{
		icon: Users,
		value: trust.network,
		label: "Student Network"
	},
	{
		icon: Trophy,
		value: trust.rating,
		label: trust.ratingMeta
	},
	{
		icon: Briefcase,
		value: trust.placedPercent,
		label: "Students placed in desired domains"
	},
	{
		icon: GraduationCap,
		value: "Mentors",
		label: trust.mentorsMeta
	}
];
function TrustStats() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-px mx-auto max-w-7xl py-6 sm:py-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-1 gap-2 rounded-3xl border border-border bg-card p-3 shadow-(--shadow-card) sm:grid-cols-2 sm:p-4 lg:grid-cols-4",
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
function LeadForm() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		email: "",
		phone: "",
		status: "MBA Student",
		target: "",
		message: ""
	});
	const submit = async (e) => {
		e.preventDefault();
		try {
			const url = new URL(window.location.href);
			const utm_source = url.searchParams.get("utm_source") ?? "";
			const utm_medium = url.searchParams.get("utm_medium") ?? "";
			const payload = {
				...form,
				utm_source,
				utm_medium,
				page: url.pathname
			};
			if (!(await fetch("/api/leads", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(payload)
			})).ok) throw new Error("submit failed");
			setOpen(false);
			const wa = `https://api.whatsapp.com/send?phone=&text=${encodeURIComponent("Hi, I'm " + form.name + " interested in " + form.target + ".")}`;
			console.log("Lead submitted, opening WA optional:", wa);
			alert("Thanks — we received your request. Our team will contact you shortly.");
		} catch (err) {
			console.error(err);
			alert("There was an issue submitting the form. Please try again or message us on WhatsApp.");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		onClick: () => setOpen(true),
		className: "fixed bottom-28 right-6 z-40 rounded-full bg-accent px-4 py-3 text-sm font-bold text-accent-foreground shadow-lg",
		children: "Book Free Counseling"
	}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 grid place-items-center bg-black/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-xl rounded-2xl bg-card p-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-xl font-bold",
				children: "Book Free Counseling"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: submit,
				className: "mt-4 grid gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						required: true,
						placeholder: "Name",
						value: form.name,
						onChange: (e) => setForm({
							...form,
							name: e.target.value
						}),
						className: "input"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						required: true,
						type: "email",
						placeholder: "Email",
						value: form.email,
						onChange: (e) => setForm({
							...form,
							email: e.target.value
						}),
						className: "input"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						required: true,
						placeholder: "Phone",
						value: form.phone,
						onChange: (e) => setForm({
							...form,
							phone: e.target.value
						}),
						className: "input"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						value: form.status,
						onChange: (e) => setForm({
							...form,
							status: e.target.value
						}),
						className: "input",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "MBA Student" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "CAT Aspirant" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Working Professional" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						placeholder: "Target B-School",
						value: form.target,
						onChange: (e) => setForm({
							...form,
							target: e.target.value
						}),
						className: "input"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						placeholder: "Message",
						value: form.message,
						onChange: (e) => setForm({
							...form,
							message: e.target.value
						}),
						className: "input h-24"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex justify-end gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setOpen(false),
							className: "btn",
							children: "Cancel"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "btn btn-primary",
							children: "Submit"
						})]
					})
				]
			})]
		})
	}) : null] });
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
						className: "group h-full overflow-hidden rounded-2xl border border-border bg-card shadow-(--shadow-card)",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-video gradient-navy",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-0 grid place-items-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "grid h-16 w-16 place-items-center rounded-full bg-accent text-accent-foreground shadow-(--shadow-glow) transition-transform group-hover:scale-110",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-6 w-6 fill-current" })
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute bottom-3 left-3 right-3 flex items-center gap-2 text-white",
								children: [t.photo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: t.photo,
									alt: `Photo of ${t.name}`,
									title: t.name,
									loading: "lazy",
									className: "h-9 w-9 rounded-full object-cover"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
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
function ResourcesSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-px mx-auto max-w-7xl py-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-col gap-3 md:flex-row md:items-end md:justify-between",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "inline-block rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary",
					children: "Free Materials"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-3xl font-bold text-primary sm:text-4xl",
					children: "Resources the student should see before enrolling"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-2xl text-muted-foreground",
					children: "Directly surfaced from your pasted references for comparison, planning and trust-building."
				})
			] })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 grid gap-5 md:grid-cols-3",
			children: resources.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: item.url,
				target: "_blank",
				rel: "noreferrer",
				className: "group rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs font-semibold uppercase tracking-[0.3em] text-primary/70",
							children: item.type
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 font-display text-xl font-bold text-primary",
							children: item.title
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-11 w-11 place-items-center rounded-2xl bg-accent text-accent-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CirclePlay, { className: "h-5 w-5" })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted-foreground",
						children: item.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary",
						children: ["Watch ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" })]
					})
				]
			}, item.title))
		})]
	});
}
function PastedMentorsSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-px mx-auto max-w-7xl py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-[2rem] border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 md:flex-row md:items-end md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "inline-block rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary",
						children: "Imported Mentor Data"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl font-bold text-primary sm:text-4xl",
						children: "Mentors and contacts from your pasted sheets"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-3xl text-muted-foreground",
						children: "The site now includes structured mentor names, colleges, companies, domains, and example student leads."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-background px-4 py-3 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "mb-1 h-4 w-4 text-primary" }),
						mentorPasted.length,
						"+ mentors imported"
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-3 sm:grid-cols-2",
					children: mentorPasted.map((mentor) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: mentor.linkedin,
						target: "_blank",
						rel: "noreferrer",
						className: "group rounded-[1.6rem] border border-border bg-[linear-gradient(180deg,#ffffff_0%,#f8f9ff_100%)] p-5 transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-elegant)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-[linear-gradient(135deg,#5a67cf_0%,#616ed0_45%,#fbacc3_100%)] text-white shadow-[0_18px_28px_-18px_rgba(90,103,207,0.8)]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-lg font-black",
									children: mentor.name.split(" ").map((part) => part[0]).slice(0, 2).join("")
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[10px] font-semibold uppercase tracking-[0.34em] text-primary/60",
										children: mentor.domain
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-1 flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-lg font-bold text-primary",
											children: mentor.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, { className: "h-4 w-4 text-primary" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1 text-sm text-muted-foreground",
										children: mentor.college
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-sm text-muted-foreground",
										children: mentor.company
									})
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 inline-flex items-center gap-2 rounded-full border border-[#0a66c2]/20 bg-[#0a66c2]/10 px-3 py-1.5 text-xs font-semibold text-[#0a66c2] transition group-hover:bg-[#0a66c2] group-hover:text-white",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "h-3.5 w-3.5" }),
								"Open LinkedIn profile",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5" })
							]
						})]
					}, mentor.name))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl border border-border bg-background p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs font-semibold uppercase tracking-[0.3em] text-primary/70",
								children: "Current college leads"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 space-y-3",
								children: contactLeads.map((lead) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl border border-border bg-card p-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start justify-between gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-semibold text-foreground",
											children: lead.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-sm text-muted-foreground",
											children: lead.college
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "rounded-full bg-primary-soft px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-primary",
											children: "Lead"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-3 grid gap-2 text-sm text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 break-all",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: lead.email })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneCall, { className: "h-4 w-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: lead.contact })]
										})]
									})]
								}, lead.email))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl border border-border bg-background p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs font-semibold uppercase tracking-[0.3em] text-primary/70",
								children: "Prodmark / TruScholar style offer"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-2 text-sm text-muted-foreground",
								children: prodmarkOffer.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1 h-2 w-2 rounded-full bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
								}, item))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl border border-border bg-gradient-to-br from-primary-soft to-background p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs font-semibold uppercase tracking-[0.3em] text-primary/70",
									children: "Group offer"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 font-display text-xl font-bold text-primary",
									children: "Join in pairs and save 30%"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: "The site now surfaces the exact group offer language from the pasted notes so students can understand it immediately."
								})
							]
						})
					]
				})]
			})]
		})
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
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		try {
			const q = new URL(window.location.href).searchParams.get("audience");
			if (q === "mba" || q === "cat") setAudience(q);
		} catch (e) {}
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-px mx-auto max-w-7xl py-10 sm:py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-4xl border border-border bg-card p-5 shadow-(--shadow-card) sm:p-7",
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
							if (typeof window !== "undefined") try {
								const u = new URL(window.location.href);
								u.searchParams.set("audience", "mba");
								window.history.replaceState({}, "", u.toString());
							} catch (e) {}
							navigate({ to: "/" });
						},
						className: `rounded-full px-4 py-2 transition ${audience === "mba" ? "bg-primary text-white shadow" : "text-foreground/70"}`,
						children: "MBA Student"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							setAudience("cat");
							if (typeof window !== "undefined") try {
								const u = new URL(window.location.href);
								u.searchParams.set("audience", "cat");
								window.history.replaceState({}, "", u.toString());
							} catch (e) {}
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
						className: "group rounded-3xl border border-border bg-linear-to-br from-primary-soft to-background p-5 transition hover:-translate-y-1 hover:shadow-(--shadow-elegant)",
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
					className: "rounded-3xl border border-border bg-linear-to-b from-[#0d1830] to-[#142850] p-5 text-white",
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
var stages = [
	{
		title: "Before MBA",
		icon: GraduationCap,
		items: [
			"CAT / OMET prep",
			"College selection",
			"Profile planning",
			"GDPI readiness"
		],
		cta: "/cat"
	},
	{
		title: "During MBA",
		icon: Briefcase,
		items: [
			"Placements bootcamp",
			"Live projects",
			"Case competitions",
			"Mentor sessions"
		],
		cta: "/programs"
	},
	{
		title: "After MBA",
		icon: Trophy,
		items: [
			"Offer conversion",
			"Career switching",
			"Promotion support",
			"Alumni network"
		],
		cta: "/programs/all-in-one-combo"
	}
];
function CareerStageGuide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-px mx-auto max-w-7xl py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-[2rem] border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "inline-block rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary",
					children: "Where are you in your journey?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-3xl font-bold text-primary sm:text-4xl",
					children: "One platform for every MBA stage"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-2xl text-muted-foreground",
					children: "The owner’s brief is to support students before admission, during MBA, and after placement with a single premium system."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-5 lg:grid-cols-3",
					children: stages.map((stage) => {
						const Icon = stage.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl border border-border bg-background p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs font-semibold uppercase tracking-[0.3em] text-primary/70",
										children: stage.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-2 font-display text-2xl font-bold text-primary",
										children: "Guided path"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-11 w-11 place-items-center rounded-2xl bg-accent text-accent-foreground",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 space-y-2",
									children: stage.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-sm text-foreground/80",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-success" }), item]
									}, item))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "outline",
									className: "mt-5 w-full",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: stage.cta,
										children: ["Explore path ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
									})
								})
							]
						}, stage.title);
					})
				})
			]
		})
	});
}
var toolkit = [
	{
		icon: FileText,
		title: "Dynamic course comparison",
		desc: "Compare Bootcamp, Case Comp, Live Projects and Combo with outcomes and pricing."
	},
	{
		icon: BookOpen,
		title: "Compendiums + sample CVs",
		desc: "Free materials for profile building, CV structure and ATS keywords."
	},
	{
		icon: Megaphone,
		title: "Brochures + more info",
		desc: "Program brochures, detailed pages and direct enroll buttons."
	},
	{
		icon: Users,
		title: "College collabs",
		desc: "Current tie-ups, past results and direct contact for institutional partnerships."
	},
	{
		icon: MessagesSquare,
		title: "FAQs + chatbot",
		desc: "Fast answers for students before they enroll."
	},
	{
		icon: Video,
		title: "Video testimonials",
		desc: "Short proof-first clips and guided walkthroughs."
	}
];
function MBAStudentToolkit() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-px mx-auto max-w-7xl py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-[2rem] border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" }), "MBA Student Toolkit"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-3xl font-bold text-primary sm:text-4xl",
					children: "Everything the owner asked for in one place"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-3xl text-muted-foreground",
					children: "The site now has comparison, brochures, free materials, group offer messaging, college collaboration, mentor credibility, and testimonial proof."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3",
					children: toolkit.map((item) => {
						const Icon = item.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl border border-border bg-background p-5 transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5 text-primary" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-display text-lg font-bold text-primary",
									children: item.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: item.desc
								})
							]
						}, item.title);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "hero",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/compare",
								children: ["Compare programs ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/programs",
								children: ["More info & enroll ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "mailto:bharat.kapoor@prodmarkconsulting.in",
								children: ["Apply as mentor ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
							})
						})
					]
				})
			]
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 opacity-55 bg-[linear-gradient(110deg,transparent_0%,rgba(255,255,255,0.35)_45%,transparent_90%),radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.75),transparent_18%),radial-gradient(circle_at_80%_50%,rgba(255,255,255,0.55),transparent_16%)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-y-0 left-0 w-20 bg-linear-to-r from-[#ff6a00] to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-y-0 right-0 w-20 bg-linear-to-l from-[#ff8a00] to-transparent" }),
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
			className: "relative overflow-hidden bg-linear-to-b from-primary-soft/60 to-background pt-12 pb-24 sm:pt-16",
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
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3.5 w-3.5 fill-[#111827] text-[#111827]" }),
								trust.network,
								" Student Network · ",
								trust.rating
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-5 max-w-2xl font-display text-4xl font-extrabold leading-[1.05] text-primary sm:text-5xl lg:text-6xl",
							children: [
								"Your MBA Journey Doesn't End With Admission.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"It Begins Here."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg",
							children: "Live Projects, Case Competitions, Placements Bootcamp, Mentorship and Career Development designed by Alumni of Old IIMs."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-7 flex flex-wrap gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "hero",
									size: "xl",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/programs",
										children: ["Enroll Now ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-5 w-5" })]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									onClick: () => window.open("https://chat.whatsapp.com/EdyvGJbQoV9Jj6eC0slSx9?mode=hq2tcla", "_blank"),
									variant: "outline",
									size: "xl",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneCall, { className: "h-4 w-4" }), " Join WhatsApp Community"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "outline",
									size: "xl",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://t.me/mba_partner",
										target: "_blank",
										rel: "noreferrer",
										children: "Join Telegram Channel"
									})
								})
							]
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
						className: "relative overflow-hidden rounded-3xl gradient-navy p-6 shadow-(--shadow-elegant) lg:p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,rgba(255,180,0,0.7),transparent_22%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.12),transparent_18%),radial-gradient(circle_at_50%_80%,rgba(255,180,0,0.2),transparent_18%)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
												className: "min-h-57.5 rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-4",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex h-full min-h-47.5 flex-col justify-between gap-3",
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
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadForm, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResourcesSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "-mt-8 sm:-mt-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustStats, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CareerStageGuide, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MBAStudentToolkit, {}),
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
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PastedMentorsSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SuccessStories, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VideoTestimonials, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-px mx-auto max-w-7xl py-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-3xl border border-border bg-card p-6 shadow-(--shadow-card) sm:p-8",
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
