export type ProgramSlug =
  | "placement-bootcamp"
  | "case-competition-accelerator"
  | "live-projects"
  | "all-in-one-combo";

export interface Program {
  slug: ProgramSlug;
  name: string;
  tagline: string;
  shortDescription: string;
  duration: string;
  price: number;
  originalPrice: number;
  badge?: string;
  highlight?: boolean;
  outcomes: string[];
  whoFor: string[];
  features: { title: string; description: string }[];
  modules: { week: string; title: string; topics: string[] }[];
  mentorship: string;
  mockInterviews: string;
  projects: string;
  certificates: string;
  placementSupport: string;
  faqs: { q: string; a: string }[];
}

export const programs: Program[] = [
  {
    slug: "placement-bootcamp",
    name: "Placement Bootcamp",
    tagline: "Land your dream Day-Zero offer",
    shortDescription:
      "An intensive 12-week sprint covering CV building, domain prep, guesstimates, case interviews and HR rounds — taught by alumni from McKinsey, BCG and Bain.",
    duration: "12 Weeks",
    price: 24999,
    originalPrice: 39999,
    badge: "Most Popular",
    outcomes: [
      "Day-Zero shortlist ready CV reviewed by Tier-1 recruiters",
      "100+ guesstimates & case frameworks mastered",
      "8 mock interviews with MBB & Big-4 mentors",
      "Personal placement strategy for your target roles",
    ],
    whoFor: [
      "MBA students in their 1st year preparing for SIP placements",
      "2nd year students preparing for Final placements",
      "Lateral candidates targeting consulting / product / strategy roles",
    ],
    features: [
      { title: "1:1 CV Review", description: "Three rounds of personalised CV iteration with senior mentors." },
      { title: "Guesstimate Mastery", description: "100+ live guesstimates with structured frameworks." },
      { title: "Case Interview Prep", description: "Profitability, market entry, M&A and operations cases." },
      { title: "HR & Behavioural", description: "STAR method, conflict stories, motivation prep." },
      { title: "Mock Interviews", description: "8 recorded mocks with personalised feedback reports." },
      { title: "Salary Negotiation", description: "Insider negotiation playbook used by 99%ile candidates." },
    ],
    modules: [
      { week: "Week 1-2", title: "Profile Foundation", topics: ["CV deep dive", "LinkedIn optimisation", "Personal brand"] },
      { week: "Week 3-4", title: "Domain Mastery", topics: ["Consulting basics", "Product fundamentals", "Marketing & Finance primers"] },
      { week: "Week 5-7", title: "Case & Guesstimate", topics: ["Frameworks", "100+ live cases", "Math drills"] },
      { week: "Week 8-9", title: "Behavioural Prep", topics: ["STAR stories", "HR rounds", "Group discussion"] },
      { week: "Week 10-12", title: "Mock Interview Sprint", topics: ["8 graded mocks", "Feedback loops", "Negotiation"] },
    ],
    mentorship: "1:1 mentorship + weekly group sessions",
    mockInterviews: "8 graded mock interviews",
    projects: "2 capstone projects",
    certificates: "Verified MBA Partner Placement Certificate",
    placementSupport: "Dedicated placement cell + referrals",
    faqs: [
      { q: "Will I be guaranteed a placement?", a: "We guarantee Day-Zero readiness. Outcomes depend on your effort, but 92% of graduates clear shortlists at their target firms." },
      { q: "Can I attend live sessions if I miss them?", a: "Yes — every session is recorded and available in your dashboard for 12 months." },
      { q: "Is this only for Tier-1 MBAs?", a: "No. We have students from IIMs, XLRI, SPJIMR, NMIMS, Symbiosis and Tier-2 colleges." },
    ],
  },
  {
    slug: "case-competition-accelerator",
    name: "Case Competition Accelerator",
    tagline: "Win AIRs at India's biggest case comps",
    shortDescription:
      "Master case-cracking, slide design and storytelling. Built by All India Rank holders from HUL Lessons in Marketing Strategy, TATA Crucible and Mahindra War Room.",
    duration: "8 Weeks",
    price: 14999,
    originalPrice: 22999,
    badge: "Trending",
    outcomes: [
      "Win or place AIR in at least 1 national case competition",
      "300+ winning PPT templates added to your repository",
      "Live mentorship from AIR 1 winners",
      "Case-cracking framework toolkit",
    ],
    whoFor: [
      "MBA students serious about case competitions",
      "Pre-MBA candidates building profile for IIM admissions",
      "Students preparing for consulting placements",
    ],
    features: [
      { title: "Winning Framework", description: "Proven 7-step structure that has won 200+ national comps." },
      { title: "PPT Repository", description: "300+ slide templates from past winning decks." },
      { title: "AIR Mentors", description: "Live sessions with HUL LIMS, TATA Crucible national winners." },
      { title: "Mock Submissions", description: "3 mock case rounds with detailed jury-style feedback." },
    ],
    modules: [
      { week: "Week 1", title: "Case Comp Landscape", topics: ["Top 20 comps to target", "Profile fit", "Team formation"] },
      { week: "Week 2-3", title: "Cracking Frameworks", topics: ["Problem structuring", "Hypothesis trees", "Data analysis"] },
      { week: "Week 4-5", title: "Storytelling & Slides", topics: ["McKinsey-style decks", "Visual hierarchy", "Narrative arc"] },
      { week: "Week 6-7", title: "Live Mock Rounds", topics: ["Submission round", "Semi-final pitch", "Finals simulation"] },
      { week: "Week 8", title: "Win Strategy", topics: ["Jury psychology", "Q&A handling", "Closing pitch"] },
    ],
    mentorship: "Weekly mentor office hours",
    mockInterviews: "3 mock case rounds with jury panel",
    projects: "Live case competition submissions",
    certificates: "Case Competition Accelerator Certificate",
    placementSupport: "Profile boost referrals",
    faqs: [
      { q: "Do I need prior case comp experience?", a: "No. We start from scratch and take you to AIR-level capability." },
      { q: "Will I get a team?", a: "Yes — we help you form teams within your cohort based on skill complementarity." },
    ],
  },
  {
    slug: "live-projects",
    name: "Live Projects",
    tagline: "Real industry projects, real CV impact",
    shortDescription:
      "Work on live business problems from real startups and corporates across consulting, marketing, finance and operations. Build a portfolio recruiters cannot ignore.",
    duration: "6-10 Weeks per project",
    price: 9999,
    originalPrice: 16999,
    outcomes: [
      "2 live industry projects on your CV",
      "Verified Letter of Recommendation",
      "Hands-on consulting / GTM / ops experience",
      "Direct exposure to founders & senior leaders",
    ],
    whoFor: [
      "MBA students with limited pre-MBA experience",
      "Career switchers entering consulting / product / marketing",
      "Anyone wanting CV-stand-out beyond classroom learning",
    ],
    features: [
      { title: "Vetted Project Pool", description: "30+ live projects from funded startups & corporates each month." },
      { title: "Domain Choice", description: "Consulting, Marketing, Operations, Finance, Product." },
      { title: "Mentor Oversight", description: "Senior mentor reviews weekly deliverables." },
      { title: "Verified LOR", description: "Letter of Recommendation from the company you worked with." },
    ],
    modules: [
      { week: "Week 1", title: "Project Matching", topics: ["Domain selection", "Company brief", "Kick-off call"] },
      { week: "Week 2-6", title: "Execution Sprint", topics: ["Weekly deliverables", "Stakeholder reviews", "Mentor checkpoints"] },
      { week: "Week 7-8", title: "Final Delivery", topics: ["Final presentation", "Feedback report", "LOR generation"] },
    ],
    mentorship: "Weekly mentor reviews",
    mockInterviews: "Project pitch practice",
    projects: "2 live industry projects",
    certificates: "Verified company-issued LOR",
    placementSupport: "Network introductions",
    faqs: [
      { q: "Are these paid projects?", a: "These are structured learning projects — some companies offer stipends, but the core value is the CV credential and LOR." },
      { q: "Can I work on a project of my choice?", a: "Yes — you pick your domain and we match you to 2-3 project options." },
    ],
  },
  {
    slug: "all-in-one-combo",
    name: "All-In-One Combo",
    tagline: "The complete MBA Career OS",
    shortDescription:
      "Everything you need — Placement Bootcamp + Case Competition Accelerator + Live Projects + 6 months of 1:1 career mentorship. The most economical path to a top-tier career.",
    duration: "6 Months",
    price: 39999,
    originalPrice: 79997,
    badge: "Best Value",
    highlight: true,
    outcomes: [
      "Everything from all 3 flagship programs",
      "6 months 1:1 career mentorship",
      "Priority placement support",
      "Lifetime alumni community access",
    ],
    whoFor: [
      "Serious MBA students aiming for top consulting / product / strategy roles",
      "Anyone who wants the complete career acceleration stack",
      "Students who want maximum savings (50% off)",
    ],
    features: [
      { title: "Everything Included", description: "All 3 flagship programs at 50% combined savings." },
      { title: "1:1 Career Coach", description: "Dedicated career coach for 6 months." },
      { title: "Priority Mentor Access", description: "Front-of-line booking for mentor sessions." },
      { title: "Alumni Network", description: "Lifetime access to the MBA Partner alumni community." },
    ],
    modules: [
      { week: "Month 1", title: "Foundation", topics: ["Profile audit", "Goal mapping", "Domain immersion"] },
      { week: "Month 2-3", title: "Case Comp Sprint", topics: ["Win national comps", "Build portfolio"] },
      { week: "Month 3-4", title: "Live Projects", topics: ["2 industry projects", "Verified LORs"] },
      { week: "Month 5-6", title: "Placement Sprint", topics: ["Mocks, negotiation, offers"] },
    ],
    mentorship: "1:1 dedicated coach + group mentorship",
    mockInterviews: "12+ graded mock interviews",
    projects: "2 live projects + case comps + capstones",
    certificates: "All 3 program certificates + Career OS badge",
    placementSupport: "Priority placement cell + referrals",
    faqs: [
      { q: "How much do I save with the combo?", a: "₹40,000 vs buying separately — exactly 50% off the bundled price." },
      { q: "Can I pay in instalments?", a: "Yes, 3-month no-cost EMI available at checkout." },
    ],
  },
];

export const getProgram = (slug: string) => programs.find((p) => p.slug === slug);

export const mentors = [
  { name: "Aarav Mehta", college: "IIM Ahmedabad", company: "McKinsey & Co.", role: "Engagement Manager" },
  { name: "Diya Sharma", college: "IIM Bangalore", company: "Bain & Company", role: "Consultant" },
  { name: "Rohan Verma", college: "XLRI Jamshedpur", company: "BCG", role: "Senior Associate" },
  { name: "Ananya Iyer", college: "SPJIMR Mumbai", company: "Kearney", role: "Manager" },
  { name: "Karan Singh", college: "IIM Calcutta", company: "Goldman Sachs", role: "VP, Strategy" },
  { name: "Sneha Kapoor", college: "MDI Gurgaon", company: "Unilever", role: "Brand Manager" },
  { name: "Vikram Rao", college: "IIM Lucknow", company: "Amazon", role: "Sr. PM" },
  { name: "Pooja Nair", college: "NMIMS Mumbai", company: "PwC Strategy&", role: "Manager" },
];

export const successStories = [
  { name: "Riya Agarwal", college: "IIM Indore", company: "BCG", package: "₹38 LPA" },
  { name: "Aditya Joshi", college: "FMS Delhi", company: "McKinsey", package: "₹42 LPA" },
  { name: "Megha Patel", college: "SPJIMR", company: "Bain", package: "₹36 LPA" },
  { name: "Siddharth K.", college: "IIM Kozhikode", company: "Kearney", package: "₹32 LPA" },
  { name: "Tanvi Desai", college: "XLRI", company: "P&G", package: "₹28 LPA" },
  { name: "Arjun N.", college: "IIM Shillong", company: "Microsoft", package: "₹34 LPA" },
];

export const companyLogos = [
  "McKinsey",
  "BCG",
  "Bain",
  "Kearney",
  "Deloitte",
  "PwC",
  "EY-Parthenon",
  "Accenture Strategy",
  "Amazon",
  "Google",
  "Microsoft",
  "Flipkart",
  "Unilever",
  "P&G",
  "Nestlé",
  "ITC",
  "Goldman Sachs",
  "JPMorgan",
  "Morgan Stanley",
  "Citi",
];
