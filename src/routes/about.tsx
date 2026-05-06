import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Target, Heart, Compass, Layers } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — ABC · Acropolis Blockchain Club" },
      { name: "description", content: "ABC is a student-led Web3 builder ecosystem at Acropolis Institute, Indore." },
      { property: "og:title", content: "About ABC" },
      { property: "og:description", content: "A builder-first community shipping real on-chain products." },
    ],
  }),
  component: About,
});

function About() {
  const pillars = [
    { icon: Target, t: "Mission", d: "Establish Indore as a launchpad for India's next wave of Web3 founders and protocol engineers." },
    { icon: Heart, t: "Culture", d: "Async-first, ship-first, ego-last. Open across CS, design, economics, and law." },
    { icon: Compass, t: "Approach", d: "Cohort-based learning, weekly hack nights, and ecosystem-funded build sprints." },
    { icon: Layers, t: "Stack", d: "Solana, EVM, Cosmos, ZK. Rust, Solidity, TypeScript, Move." },
  ];
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={<>A builder ecosystem inside <span className="text-brand-gradient">a college campus.</span></>}
        description="ABC was founded by students who wanted more than an academic introduction to blockchain. We treat the campus like a startup studio — and we ship like one."
      />
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2">
          {pillars.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.05}>
              <div className="bg-surface/40 p-8">
                <p.icon className="h-5 w-5 text-brand" />
                <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight">{p.t}</h3>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-20 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand">Our story</div>
            </div>
            <div className="lg:col-span-8 space-y-6 text-lg leading-relaxed text-foreground/85">
              <p>
                ABC began in a single classroom — a few students dissecting the Bitcoin whitepaper line by line.
                What started as a reading group became a community of builders, designers, and researchers
                who now ship products used by thousands of wallets.
              </p>
              <p>
                Today, ABC is a multi-track program: foundational learning for newcomers, hackathon ops for
                competitors, and ecosystem partnerships for founders. The constant: we measure ourselves
                in commits, demos, and deployed contracts — not certificates.
              </p>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
