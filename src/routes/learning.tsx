import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { ArrowUpRight, BookOpen, FileText, GitBranch, Video } from "lucide-react";

export const Route = createFileRoute("/learning")({
  head: () => ({
    meta: [
      { title: "Learning Hub , ABC" },
      { name: "description", content: "Three-tier Web3 curriculum, lecture notes, and curated resources." },
      { property: "og:title", content: "ABC Learning Hub" },
      { property: "og:description", content: "From wallets to zero-knowledge , the ABC curriculum." },
    ],
  }),
  component: Learning,
});

const tracks = [
  {
    n: "01", level: "Beginner", title: "Foundations of Web3",
    weeks: 4,
    modules: ["What is a blockchain", "Wallets, signatures, gas", "Reading on-chain data", "Your first dApp"],
  },
  {
    n: "02", level: "Intermediate", title: "Protocol Engineering",
    weeks: 6,
    modules: ["EVM internals", "Solidity patterns", "Foundry & testing", "Gas optimization", "Frontend integration", "Deployment & verification"],
  },
  {
    n: "03", level: "Advanced", title: "Frontier Research",
    weeks: 8,
    modules: ["Zero-knowledge primitives", "MEV & block production", "Account abstraction", "Cross-chain messaging", "Validator design", "Capstone research"],
  },
];

const formats = [
  { icon: BookOpen, t: "Curated reading lists" },
  { icon: FileText, t: "Lecture notes & decks" },
  { icon: Video, t: "Recorded sessions" },
  { icon: GitBranch, t: "Open-source repos" },
];

function Learning() {
  return (
    <>
      <PageHeader
        eyebrow="Learning Hub"
        title={<>A structured gateway into <span className="text-brand-gradient">Web3.</span></>}
        description="A curriculum maintained by ABC engineers , from your first wallet to building production ZK applications."
      />
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="space-y-5">
          {tracks.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.06}>
              <article className="grid gap-8 rounded-xl border border-border bg-surface/40 p-8 transition-colors hover:border-brand/40 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand">
                    Track {t.n} · {t.level}
                  </div>
                  <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight">{t.title}</h3>
                  <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    {t.weeks}-week cohort
                  </div>
                </div>
                <div className="lg:col-span-8">
                  <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                    {t.modules.map((m, idx) => (
                      <li key={m} className="flex items-start gap-3 border-b border-border/40 pb-3 text-sm text-foreground/85">
                        <span className="font-mono text-[10px] text-muted-foreground">{String(idx + 1).padStart(2, "0")}</span>
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-20">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand">Formats</div>
            <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight">How we teach.</h3>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {formats.map((f) => (
                <div key={f.t} className="rounded-xl border border-border bg-surface/40 p-6">
                  <f.icon className="h-5 w-5 text-brand" />
                  <div className="mt-3 text-sm font-medium">{f.t}</div>
                </div>
              ))}
            </div>
            <Link to="/resources" className="mt-10 inline-flex items-center gap-2 text-sm hover:text-brand">
              Explore the resource library <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
