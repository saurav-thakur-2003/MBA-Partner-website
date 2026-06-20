import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone, MoonStar, SunMedium } from "lucide-react";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/", label: "Home" },
  { to: "/programs", label: "Programs" },
  { to: "/compare", label: "Compare" },
  { to: "/programs/all-in-one-combo", label: "Combo" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = savedTheme ? savedTheme === "dark" : prefersDark;
    setDarkMode(shouldUseDark);
  }, []);

  const toggleTheme = () => {
    setDarkMode((current) => {
      const next = !current;
      document.documentElement.classList.toggle("dark", next);
      window.localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-lg">
      <div className="container-px mx-auto grid h-16 max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4">
        <Link to="/" className="flex min-w-0 items-center gap-2">
          <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg gradient-navy">
            <span className="text-base font-black text-white">M</span>
          </div>
          <div className="min-w-0 leading-tight">
            <div className="truncate font-display text-base font-bold text-primary">MBA Partner</div>
            <div className="hidden text-[10px] uppercase tracking-wider text-muted-foreground sm:block">
              India's Career Acceleration Platform
            </div>
          </div>
        </Link>
        <nav className="hidden items-center justify-center gap-1 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-primary-soft hover:text-primary"
              activeProps={{ className: "text-primary bg-primary-soft" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="hidden h-9 w-9 items-center justify-center rounded-md border border-border text-foreground/80 hover:bg-primary-soft md:inline-flex"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
          </button>
          <a
            href="tel:+919999999999"
            className="hidden items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-foreground/80 hover:border-primary md:flex"
          >
            <Phone className="h-3.5 w-3.5" /> Call Us
          </a>
          <Button asChild variant="accent" size="sm" className="hidden sm:inline-flex">
            <Link to="/programs">Enroll Now</Link>
          </Button>
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-md border border-border lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container-px mx-auto flex max-w-7xl flex-col py-3">
            <button
              onClick={toggleTheme}
              className="mb-2 flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-primary-soft md:hidden"
            >
              {darkMode ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
              {darkMode ? "Light mode" : "Dark mode"}
            </button>
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-primary-soft"
              >
                {n.label}
              </Link>
            ))}
            <Button asChild variant="accent" className="mt-2">
              <Link to="/programs" onClick={() => setOpen(false)}>Enroll Now</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
