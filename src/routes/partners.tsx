import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partners & Sponsors — ABC" },
      { name: "description", content: "Ecosystem partners and sponsors backing ABC's programs." },
      { property: "og:title", content: "ABC Partners" },
      { property: "og:description", content: "Protocols and foundations supporting student Web3 builders." },
    ],
  }),
  component: Partners,
});

const tiers = [
  { tier: "Ecosystem Partners", items: ["SOLANA", "POLYGON", "ARBITRUM", "BASE"] },
  { tier: "Hackathon Partners", items: ["ETHINDIA", "DEVFOLIO", "GITCOIN", "ENCODE"] },
  { tier: "Tooling Partners", items: ["ALCHEMY", "FOUNDRY", "ANCHOR", "WAGMI"] },
];

function Partners() {
  return (
    <>
      <PageHeader
        eyebrow="Partners & Sponsors"
        title={<>Backed by the <span className="text-brand-gradient">ecosystem.</span></>}
        description="ABC partners with protocols, foundations, and tooling teams to bring real opportunities — grants, hackathons, internships — to our members."
      />
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="space-y-12">
          {tiers.map((t, i) => (
            <Reveal key={t.tier} delay={i * 0.06}>
              <div>
                <div className="flex items-center gap-3">
                  <div className="h-px flex-1 bg-border" />
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand">{t.tier}</div>
                  <div className="h-px flex-1 bg-border" />
                </div>
                <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4">
                  {t.items.map((p) => (
                    <div key={p} className="group flex h-28 items-center justify-center bg-surface/40 transition-colors hover:bg-surface">
                      <span className="font-display text-xl font-semibold tracking-[0.18em] text-muted-foreground transition-colors group-hover:text-foreground">{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-20 overflow-hidden rounded-xl border border-border bg-surface/40 p-10 lg:p-14">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand">Become a partner</div>
                <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                  Reach 500+ Web3-native student builders.
                </h3>
              </div>
              <div className="flex justify-start lg:justify-end">
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-foreground px-6 py-3 text-sm font-medium text-background shadow-elevated">
                  Talk to us <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
