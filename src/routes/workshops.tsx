import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Code2, Cpu, Shield, Zap } from "lucide-react";

export const Route = createFileRoute("/workshops")({
  head: () => ({
    meta: [
      { title: "Workshops — ABC" },
      { name: "description", content: "Hands-on Web3 workshops led by ABC engineers and ecosystem partners." },
      { property: "og:title", content: "ABC Workshops" },
      { property: "og:description", content: "Solidity, Solana, ZK, and security workshops with shipping requirements." },
    ],
  }),
  component: Workshops,
});

const tracks = [
  { icon: Code2, level: "Foundations", title: "Solidity 101 → 301", weeks: "6 weeks", outcome: "Deploy an audited DEX.", topics: ["Storage layout", "Reentrancy", "Gas golf", "Foundry tests"] },
  { icon: Cpu, level: "Specialist", title: "Solana Programs in Rust", weeks: "5 weeks", outcome: "Ship an Anchor program.", topics: ["Account model", "PDA design", "CPIs", "Anchor IDL"] },
  { icon: Shield, level: "Advanced", title: "Smart Contract Security", weeks: "4 weeks", outcome: "Deliver a public audit report.", topics: ["Threat modeling", "Slither / Echidna", "Common exploits"] },
  { icon: Zap, level: "Frontier", title: "Intro to Zero Knowledge", weeks: "5 weeks", outcome: "Build a ZK-gated app.", topics: ["Circom", "Groth16", "Plonk", "Recursive proofs"] },
];

function Workshops() {
  return (
    <>
      <PageHeader
        eyebrow="Workshops"
        title={<>Cohorts that end in <span className="text-brand-gradient">deployed code.</span></>}
        description="No passive lectures. Every workshop ends with a working artifact — a deployed contract, an audited program, or a published repo."
      />
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {tracks.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.05}>
              <article className="group relative h-full overflow-hidden rounded-xl border border-border bg-surface/40 p-7 transition-all hover:border-brand/40">
                <div className="flex items-start justify-between">
                  <t.icon className="h-6 w-6 text-brand" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{t.level}</span>
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight">{t.title}</h3>
                <div className="mt-2 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  <span>{t.weeks}</span><span className="h-1 w-1 rounded-full bg-border" /><span className="text-brand">{t.outcome}</span>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {t.topics.map((tp) => (
                    <span key={tp} className="rounded-full border border-border bg-background/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-foreground/80">
                      {tp}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
