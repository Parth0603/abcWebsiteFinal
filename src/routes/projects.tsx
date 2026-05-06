import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { ArrowUpRight, Box, Building2, Music, Wallet, ShieldCheck, GitBranch } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — ABC" },
      { name: "description", content: "Production Web3 products built by ABC members." },
      { property: "og:title", content: "ABC Projects" },
      { property: "og:description", content: "NFT marketplaces, real-estate tokenization, music protocols, and more." },
    ],
  }),
  component: Projects,
});

const projects = [
  { icon: Box, name: "Veil Marketplace", tag: "NFT · Solana", desc: "A creator-first NFT marketplace with on-chain royalties.", stack: ["Anchor", "Next.js", "Metaplex"], stats: [["$2.1M", "Volume"], ["12K", "Mints"]] },
  { icon: Building2, name: "Plotchain", tag: "Real Estate · EVM", desc: "Tokenizing fractional real estate ownership across India.", stack: ["Solidity", "Foundry", "wagmi"], stats: [["8", "Properties"], ["1.4K", "Holders"]] },
  { icon: Music, name: "Sonic Protocol", tag: "Music · L2", desc: "Per-stream micropayments and fan-owned playlists.", stack: ["Base", "Viem", "IPFS"], stats: [["320", "Artists"], ["98K", "Streams"]] },
  { icon: Wallet, name: "Trezor.zip", tag: "Wallet · EVM", desc: "Recoverable smart wallet with social guardian flow.", stack: ["ERC-4337", "Safe", "React"], stats: [["1.2K", "Wallets"], ["A+", "Audit"]] },
  { icon: ShieldCheck, name: "ZK-Mail", tag: "ZK · Research", desc: "Email-based ZK proofs for verifiable on-chain identity.", stack: ["Circom", "Halo2", "Next.js"], stats: [["3", "Proofs"], ["Top 10", "ZK Hack"]] },
  { icon: GitBranch, name: "ABC Indexer", tag: "Infra · OSS", desc: "Open-source indexer powering ABC member dApps.", stack: ["Rust", "PG", "GraphQL"], stats: [["6", "Networks"], ["MIT", "License"]] },
];

function Projects() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title={<>Real products. <span className="text-brand-gradient">On-chain.</span></>}
        description="Every project listed here was conceived, designed, built, and deployed by ABC members."
      />
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.05}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface/40 transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-elevated">
                <div className="relative h-36 overflow-hidden border-b border-border bg-brand-gradient">
                  <div className="absolute inset-0 bg-grid opacity-30 mix-blend-overlay" />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/10 to-black/40" />
                  <p.icon className="absolute right-5 top-5 h-7 w-7 text-white/85" />
                  <div className="absolute bottom-4 left-5 font-mono text-[10px] uppercase tracking-[0.22em] text-white/85">{p.tag}</div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between">
                    <h3 className="font-display text-xl font-semibold tracking-tight">{p.name}</h3>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span key={s} className="rounded-full border border-border bg-background/60 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-foreground/80">{s}</span>
                    ))}
                  </div>
                  <div className="mt-5 grid grid-cols-2 gap-4 border-t border-border/60 pt-4">
                    {p.stats.map(([k, v]) => (
                      <div key={v}>
                        <div className="font-display text-base font-semibold">{k}</div>
                        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{v}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
