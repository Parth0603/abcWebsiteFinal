import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Github, Twitter, Linkedin } from "lucide-react";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — ABC" },
      { name: "description", content: "The students leading the Acropolis Blockchain Club." },
      { property: "og:title", content: "ABC Team" },
      { property: "og:description", content: "Meet the builders running ABC." },
    ],
  }),
  component: Team,
});

const leadership = [
  { name: "Surabhi Solanki", role: "President", bio: "Leads ecosystem strategy and partnerships. Smart contracts, DeFi research." },
  { name: "Parth Nagar", role: "Vice President", bio: "Engineering lead. Solana programs, dApp infra, hackathon ops." },
];

const core = [
  { name: "Lead, Engineering", role: "Engineering" },
  { name: "Lead, Research", role: "Research" },
  { name: "Lead, Design", role: "Product Design" },
  { name: "Lead, Operations", role: "Operations" },
  { name: "Lead, Community", role: "Community" },
  { name: "Lead, Partnerships", role: "Partnerships" },
];

function Team() {
  return (
    <>
      <PageHeader
        eyebrow="Team"
        title={<>Built and led by <span className="text-brand-gradient">students.</span></>}
        description="A horizontal team that runs ABC like an early-stage startup — with leads, sprints, and clear ownership."
      />

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {leadership.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.08}>
              <article className="group relative overflow-hidden rounded-xl border border-border bg-surface/40 p-8 transition-all hover:border-brand/40">
                <div className="flex items-center gap-5">
                  <div className="grid h-20 w-20 place-items-center rounded-full bg-brand-gradient font-display text-3xl font-semibold text-white shadow-glow">
                    {m.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-display text-2xl font-semibold tracking-tight">{m.name}</div>
                    <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand">{m.role}</div>
                  </div>
                </div>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground">{m.bio}</p>
                <div className="mt-6 flex gap-2">
                  {[Github, Twitter, Linkedin].map((Icon, idx) => (
                    <a key={idx} href="#" className="grid h-8 w-8 place-items-center rounded-md border border-border bg-background/60 text-muted-foreground hover:text-foreground">
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-20">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand">Core team</div>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight">Functional leads</h2>
          </div>
          <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {core.map((c, i) => (
              <div key={i} className="bg-surface/40 p-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{c.role}</div>
                <div className="mt-2 font-display text-lg font-semibold tracking-tight">{c.name}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
