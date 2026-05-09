import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Trophy, Users, Clock } from "lucide-react";
import blockathonImg from "@/assets/images/blockathon.png";
import collageImg from "@/assets/community-collage.jpg";

export const Route = createFileRoute("/hackathons")({
  head: () => ({
    meta: [
      { title: "Hackathons , ABC" },
      { name: "description", content: "Internal hack nights, ecosystem hackathons, and ABC's competitive cohort." },
      { property: "og:title", content: "ABC Hackathons" },
      { property: "og:description", content: "We don't just compete , we organize, mentor, and ship." },
    ],
  }),
  component: Hackathons,
});

const hacks = [
  { title: "ABC Hack Night · Wallet Edition", date: "Mar 2026", duration: "48h", teams: 14, prize: "$2,400", winner: "Team Trezor.zip" },
  { title: "ETHIndia Cohort '25", date: "Dec 2025", duration: "36h", teams: 9, prize: "Track Win", winner: "Plotchain" },
  { title: "Solana Radar , Indore Pod", date: "Nov 2025", duration: "Global", teams: 6, prize: "$5K", winner: "Veil Marketplace" },
  { title: "ZK Hackathon · Polygon", date: "Oct 2025", duration: "72h", teams: 5, prize: "Top 10", winner: "ZK-Mail" },
];

function Hackathons() {
  return (
    <>
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={collageImg} alt="" className="h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 to-background" />
        </div>
        <PageHeader
          eyebrow="Hackathons"
          title={<>Compete. Mentor. <span className="text-brand-gradient">Repeat.</span></>}
          description="ABC fields teams in global hackathons and runs internal hack nights every month. Building under deadline is the point."
        />
      </div>
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-3 md:grid-cols-3">
          {[
            { icon: Trophy, k: "12", v: "Hackathons attended" },
            { icon: Users, k: "60+", v: "Members shipped" },
            { icon: Clock, k: "1,200h", v: "Cumulative build time" },
          ].map((s, i) => (
            <Reveal key={s.v} delay={i * 0.05}>
              <div className="rounded-xl border border-border bg-surface/40 p-7">
                <s.icon className="h-5 w-5 text-brand" />
                <div className="mt-4 font-display text-3xl font-semibold tracking-tight">{s.k}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.v}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 overflow-hidden rounded-xl border border-border">
          <div className="grid border-b border-border bg-surface/40 px-6 py-3 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground sm:grid-cols-12">
            <div className="sm:col-span-5">Hackathon</div>
            <div className="sm:col-span-2">Date</div>
            <div className="sm:col-span-2">Teams</div>
            <div className="sm:col-span-3">Result</div>
          </div>
          {hacks.map((h, i) => (
            <Reveal key={h.title} delay={i * 0.04}>
              <div className="grid items-center gap-3 border-b border-border/60 px-6 py-5 transition-colors hover:bg-white/[0.02] last:border-0 sm:grid-cols-12">
                <div className="sm:col-span-5">
                  <div className="font-display text-base font-semibold">{h.title}</div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{h.duration}</div>
                </div>
                <div className="text-sm text-muted-foreground sm:col-span-2">{h.date}</div>
                <div className="text-sm sm:col-span-2">{h.teams} teams</div>
                <div className="sm:col-span-3">
                  <span className="rounded-full border border-brand/40 bg-brand/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-brand">
                    {h.prize} · {h.winner}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
