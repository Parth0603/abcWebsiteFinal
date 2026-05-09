import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Eyebrow } from "@/components/site/Section";
import web3waveImg from "@/assets/images/web3wave.png";
import web3verseImg from "@/assets/images/web3verse.png";
import blockworksImg from "@/assets/images/blockworksworkshop.png";
import graphicsImg from "@/assets/images/workshipGraphicsDesigning.png";
import workshopImg from "@/assets/workshop.jpg";
import meetupImg from "@/assets/meetup.jpg";
import hackathonImg from "@/assets/hackathon.jpg";

export const Route = createFileRoute("/workshops")({
  head: () => ({
    meta: [
      { title: "Workshops · ABC" },
      {
        name: "description",
        content: "Hands-on Web3 workshops run by the Acropolis Blockchain Club covering blockchain basics, smart contracts, NFTs, and Solana.",
      },
      { property: "og:title", content: "ABC Workshops" },
      { property: "og:description", content: "Practical, hands-on Web3 workshops at AITR Indore." },
    ],
  }),
  component: Workshops,
});

const workshops = [
  {
    title: "Web3 Verse",
    img: web3verseImg,
    summary: "An entry point to the Web3 ecosystem covering wallets, transactions, and how decentralized applications work.",
    tools: ["Wallets", "EVM basics", "dApps"],
    outcomes: ["Understand the Web3 mental model", "Use a wallet confidently", "Read a basic on-chain transaction"],
  },
  {
    title: "BlockWorks",
    img: blockworksImg,
    summary: "A practical session on smart contracts and NFT mechanics, with a focus on how the underlying primitives behave.",
    tools: ["Smart contracts", "NFT standards", "Block explorers"],
    outcomes: ["Read and reason about contract code", "Understand NFT minting flows", "Inspect activity on-chain"],
  },
  {
    title: "Web3 Wave",
    img: web3waveImg,
    summary: "A multi-session onboarding series for students new to blockchain, designed around guided exercises.",
    tools: ["Wallet setup", "Testnets", "Faucets", "Basic contracts"],
    outcomes: ["Send a first transaction", "Interact with a sample contract", "Build comfort with the tooling"],
  },
  {
    title: "Graphics Designing for Web3",
    img: graphicsImg,
    summary: "A creative workshop exploring visual identity and graphics designing specifically tailored for the Web3 space.",
    tools: ["Design principles", "Visual identity", "Brand assets"],
    outcomes: ["Create Web3-themed graphics", "Understand decentralized branding", "Design for community engagement"],
  },
  {
    title: "Solana Ecosystem Sessions",
    img: meetupImg,
    summary: "Focused workshops introducing the Solana stack, the developer experience, and how to start building on it.",
    tools: ["Solana CLI", "Wallets", "Program basics"],
    outcomes: ["Get oriented in the Solana ecosystem", "Run sample interactions", "Know where to go next"],
  },
  {
    title: "Blockchain Introduction",
    img: workshopImg,
    summary: "A foundational workshop introducing students to blockchain fundamentals, smart contracts, and decentralized application concepts.",
    tools: ["Consensus basics", "Hashing", "Ledgers"],
    outcomes: ["Explain how a blockchain works", "Recognize core primitives", "Build vocabulary for further learning"],
  },
];

function Workshops() {
  return (
    <>
      <PageHeader
        eyebrow="Workshops"
        title={<>Hands-on sessions for <span className="text-brand-gradient">real learning.</span></>}
        description="ABC workshops are built around practical exercises. Members leave with working understanding, not just slides."
      />
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-6 lg:grid-cols-2">
          {workshops.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.05}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface/40 transition-all hover:border-brand/40">
                <div className="relative h-48 overflow-hidden">
                  <img src={w.img} alt={w.title} loading="lazy" className="h-full w-full object-cover opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-90" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <Eyebrow>Workshop</Eyebrow>
                  <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">{w.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{w.summary}</p>

                  <div className="mt-5">
                    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Tools & Topics</div>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {w.tools.map((t) => (
                        <span key={t} className="rounded-full border border-border bg-background/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-foreground/80">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 border-t border-border/60 pt-4">
                    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand">Learning Outcomes</div>
                    <ul className="mt-2 space-y-1.5">
                      {w.outcomes.map((o) => (
                        <li key={o} className="flex items-start gap-2 text-sm text-foreground/85">
                          <span className="mt-2 h-1 w-1 flex-none rounded-full bg-brand" />
                          {o}
                        </li>
                      ))}
                    </ul>
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
