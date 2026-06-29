import { Linkedin, Users, ArrowUpRight, BadgeCheck } from "lucide-react";
import { mentorPasted, contactLeads, prodmarkOffer } from "@/data/content";

export function PastedMentorsSection() {
  return (
    <section className="container-px mx-auto max-w-7xl py-20">
      <div className="rounded-[2rem] border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="inline-block rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              Imported Mentor Data
            </div>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">Mentors and contacts from your pasted sheets</h2>
            <p className="mt-2 max-w-3xl text-muted-foreground">
              The site now includes structured mentor names, colleges, companies, domains, and access-only lead cards.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-background px-4 py-3 text-sm text-muted-foreground">
            <Users className="mb-1 h-4 w-4 text-primary" />
            {mentorPasted.length}+ mentors imported
          </div>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-3 sm:grid-cols-2">
            {mentorPasted.map((mentor) => (
              <a
                key={mentor.name}
                href={mentor.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group rounded-[1.2rem] border border-border bg-[linear-gradient(180deg,#ffffff_0%,#f8f9ff_100%)] p-3 transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-elegant)]"
              >
                <div className="flex items-start gap-2.5">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[linear-gradient(135deg,#5a67cf_0%,#616ed0_45%,#fbacc3_100%)] text-white shadow-[0_18px_28px_-18px_rgba(90,103,207,0.8)]">
                    <span className="text-sm font-black">{mentor.name.split(" ").map((part) => part[0]).slice(0, 2).join("")}</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[9px] font-semibold uppercase tracking-[0.28em] text-primary/60">{mentor.domain}</div>
                    <div className="mt-1 flex items-center gap-2">
                      <h3 className="font-display text-base font-bold text-primary">{mentor.name}</h3>
                      <BadgeCheck className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">{mentor.college}</div>
                    <div className="text-xs text-muted-foreground">{mentor.company}</div>
                  </div>
                </div>

                <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-[#0a66c2]/20 bg-[#0a66c2]/10 px-3 py-1 text-[11px] font-semibold text-[#0a66c2] transition group-hover:bg-[#0a66c2] group-hover:text-white">
                  <Linkedin className="h-3 w-3" />
                  Open LinkedIn profile
                  <ArrowUpRight className="h-3 w-3" />
                </div>
              </a>
            ))}
          </div>

          <div className="space-y-5">
            <div className="rounded-3xl border border-border bg-background p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">Current college leads</div>
              <div className="mt-4 space-y-3">
                {contactLeads.map((lead) => (
                  <div key={lead.name} className="rounded-2xl border border-border bg-card p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="font-semibold text-foreground">{lead.name}</div>
                        <div className="text-sm text-muted-foreground">{lead.college}</div>
                      </div>
                      <div className="rounded-full bg-primary-soft px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-primary">
                        Lead
                      </div>
                    </div>
                    <div className="mt-3 text-sm text-muted-foreground">Access restricted to the internal enrollment team.</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-background p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">Prodmark / TruScholar style offer</div>
              <div className="mt-4 grid gap-2">
                {prodmarkOffer.map((item) => (
                  <div key={item} className="rounded-2xl border border-border bg-card px-4 py-2.5 text-sm text-muted-foreground">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-gradient-to-br from-primary-soft to-background p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">Group offer</div>
              <div className="mt-3 font-display text-xl font-bold text-primary">Join in pairs and save 30%</div>
              <p className="mt-2 text-sm text-muted-foreground">The group offer is visible, but the contact data stays private.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
