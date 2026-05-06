import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { ArrowUpRight, Calendar, MapPin } from "lucide-react";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — ABC" },
      { name: "description", content: "Upcoming and past events from the Acropolis Blockchain Club." },
      { property: "og:title", content: "ABC Events" },
      { property: "og:description", content: "Meet-ups, hack nights, and ecosystem gatherings." },
    ],
  }),
  component: Events,
});

const events = [
  { date: "May 2026", title: "Solana Meet-up Indore — Vol. 03", place: "AITR Auditorium", desc: "Validators, dApp founders, and Solana Foundation engineers under one roof.", status: "Upcoming" },
  { date: "Apr 2026", title: "ZK Workshop with Polygon", place: "ABC Lab", desc: "A hands-on intro to circuits, proofs, and ZK-rollup architecture.", status: "Open" },
  { date: "Apr 2026", title: "Founder Office Hours", place: "Online", desc: "Live Q&A with two India-based Web3 founders. Members only.", status: "Open" },
  { date: "Mar 2026", title: "Build-a-Wallet Hack Night", place: "Online", desc: "48 hours, ten teams, one judging panel. Winners shipped to mainnet.", status: "Past" },
  { date: "Feb 2026", title: "EVM Internals Cohort", place: "AITR · Block C", desc: "Six-week deep dive into the EVM. Final project: a custom precompile.", status: "Past" },
  { date: "Jan 2026", title: "Web3 Onboarding Day", place: "AITR Lawn", desc: "Open day for new students. Wallets, faucets, first transactions.", status: "Past" },
];

function Events() {
  return (
    <>
      <PageHeader
        eyebrow="Events"
        title={<>Where the <span className="text-brand-gradient">ecosystem meets.</span></>}
        description="From intimate hack nights to flagship meet-ups, every event is designed for builders to find collaborators, not collect swag."
      />
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {events.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.04}>
              <article className="group relative h-full overflow-hidden rounded-xl border border-border bg-surface/40 p-7 transition-all hover:border-brand/40 hover:bg-surface">
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={`rounded-full border px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.18em] ${
                      e.status === "Upcoming"
                        ? "border-brand/50 bg-brand/10 text-brand"
                        : e.status === "Open"
                        ? "border-foreground/30 text-foreground"
                        : "border-border text-muted-foreground"
                    }`}
                  >
                    {e.status}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight">{e.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.desc}</p>
                <div className="mt-6 flex items-center gap-5 border-t border-border/60 pt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5"><Calendar className="h-3 w-3" /> {e.date}</span>
                  <span className="inline-flex items-center gap-1.5"><MapPin className="h-3 w-3" /> {e.place}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
