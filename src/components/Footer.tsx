import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Linkedin, Instagram, Youtube } from "lucide-react";

const links = {
  officialInstagram: "https://www.instagram.com/mba_partner?igsh=dGZuMmoyb3V2eDlx",
  funInstagram: "https://www.instagram.com/mba_laughterwala?igsh=ZngzMmRnN3k3ZjZ2",
  youtube: "https://youtube.com/@mbapartner?si=0TXLOPjxtMiHvJU7",
  linkedin: "https://www.linkedin.com/in/prodmarkconsulting?utm_source=share_via&utm_content=profile&utm_medium=member_android",
};

export function Footer() {
  return (
    <footer className="gradient-navy mt-24 text-white">
      <div className="container-px mx-auto max-w-7xl py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-accent">
                <span className="font-display text-lg font-black text-accent-foreground">M</span>
              </div>
              <div>
                <div className="font-display text-lg font-bold">MBA Partner</div>
                <div className="text-xs text-white/60">India's Career Acceleration Platform</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/70">
              Initiative by alumni of IIMs, XLRI & SPJIMR — helping MBA students unlock top-tier careers.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-accent hover:text-accent-foreground">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href={links.officialInstagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-accent hover:text-accent-foreground">
                <Instagram className="h-4 w-4" />
              </a>
              <a href={links.youtube} target="_blank" rel="noreferrer" aria-label="YouTube" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-accent hover:text-accent-foreground">
                <Youtube className="h-4 w-4" />
              </a>
              <a href={links.funInstagram} target="_blank" rel="noreferrer" aria-label="Fun Instagram" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-accent hover:text-accent-foreground">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">Programs</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              <li><Link to="/programs/placement-bootcamp" className="hover:text-accent">Placement Bootcamp</Link></li>
              <li><Link to="/programs/case-competition-accelerator" className="hover:text-accent">Case Competition Accelerator</Link></li>
              <li><Link to="/programs/live-projects" className="hover:text-accent">Live Projects</Link></li>
              <li><Link to="/programs/all-in-one-combo" className="hover:text-accent">All-In-One Combo</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">Resources</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              <li><Link to="/programs" className="hover:text-accent">All Programs</Link></li>
              <li><Link to="/compare" className="hover:text-accent">Compare Programs</Link></li>
              <li><a href="#mentors" className="hover:text-accent">Mentors</a></li>
              <li><a href="#stories" className="hover:text-accent">Success Stories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-accent" /> hello@mbapartner.in</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" /> +91 99999 99999</li>
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-accent" /> Bengaluru · Mumbai · Online</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <div>© {new Date().getFullYear()} MBA Partner. All rights reserved.</div>
          <div className="flex flex-wrap gap-4">
            <a href={links.officialInstagram} target="_blank" rel="noreferrer" className="hover:text-white">Official Insta</a>
            <a href={links.funInstagram} target="_blank" rel="noreferrer" className="hover:text-white">Fun Insta</a>
            <a href={links.youtube} target="_blank" rel="noreferrer" className="hover:text-white">YouTube</a>
            <a href={links.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
