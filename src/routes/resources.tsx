import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { ArrowUpRight, BookOpen, Code2, FileText, Wrench } from "lucide-react";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources , ABC" },
      { name: "description", content: "Curated Web3 reading lists, dev tools, and learning resources." },
      { property: "og:title", content: "ABC Resources" },
      { property: "og:description", content: "The shortest path from zero to deployed contract." },
    ],
  }),
  component: Resources,
});

const groups = [
  {
    icon: BookOpen, title: "Reading",
    items: [
      { t: "Bitcoin Whitepaper", d: "Satoshi Nakamoto (2008)" },
      { t: "Mastering Ethereum", d: "Andreas Antonopoulos" },
      { t: "Programming Bitcoin", d: "Jimmy Song" },
      { t: "The Anatomy of a Smart Contract", d: "Paradigm Research" },
    ],
  },
  {
    icon: Code2, title: "Build",
    items: [
      { t: "Foundry", d: "Rust-based smart contract toolkit" },
      { t: "Anchor", d: "Solana program framework" },
      { t: "wagmi + viem", d: "EVM frontend stack" },
      { t: "Hardhat", d: "JavaScript dev environment" },
    ],
  },
  {
    icon: FileText, title: "Notes",
    items: [
      { t: "EVM Internals · ABC Cohort", d: "PDF · 86 pages" },
      { t: "Solana Account Model", d: "Lecture notes" },
      { t: "ZK Primer", d: "Slides + reading list" },
      { t: "Audit Checklist", d: "Markdown · forkable" },
    ],
  },
  {
    icon: Wrench, title: "Tooling",
    items: [
      { t: "Tenderly", d: "Tx debugger & monitoring" },
      { t: "Etherscan", d: "Explorer & verifier" },
      { t: "Slither", d: "Static analysis" },
      { t: "Echidna", d: "Property-based fuzzer" },
    ],
  },
];

function Resources() {
  return (
    <>
      <PageHeader
        eyebrow="Resources"
        title={<>The shortest path to a <span className="text-brand-gradient">deployed contract.</span></>}
        description="Hand-picked reading, tooling, and lecture notes from the ABC engineering team."
      />
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.06}>
              <div className="rounded-xl border border-border bg-surface/40 p-7">
                <div className="flex items-center gap-3 border-b border-border/60 pb-5">
                  <g.icon className="h-5 w-5 text-brand" />
                  <h3 className="font-display text-xl font-semibold tracking-tight">{g.title}</h3>
                </div>
                <ul className="mt-2 divide-y divide-border/40">
                  {g.items.map((it) => (
                    <li key={it.t}>
                      <a href="#" className="group flex items-center justify-between gap-4 py-3.5 transition-colors hover:text-brand">
                        <div>
                          <div className="text-sm font-medium">{it.t}</div>
                          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{it.d}</div>
                        </div>
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:text-brand group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
