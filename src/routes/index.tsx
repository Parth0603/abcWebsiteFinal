import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Layers,
  GraduationCap,
  Rocket,
  Users2,
  Mic2,
  Compass,
  Box,
  Music,
  Building2,
  Github,
  Twitter,
  MessagesSquare,
} from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeader, Eyebrow } from "@/components/site/Section";
import hackathonImg from "@/assets/hackathon.jpg";
import meetupImg from "@/assets/meetup.jpg";
import workshopImg from "@/assets/workshop.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <AboutPreview />
      <FeaturedActivities />
      <LearningEcosystem />
      <ProjectsShowcase />
      <EventsTimeline />
      <Sponsors />
      <TeamPreview />
      <CommunityCTA />
    </>
  );
}

/* ---------------- Social Proof ---------------- */

function SocialProof() {
  const items = [
    { label: "Solana Ecosystem", value: "Meet-up Indore" },
    { label: "Polygon", value: "Workshop Series" },
    { label: "ETHIndia", value: "Hackathon Cohort" },
    { label: "Devfolio", value: "Builder Network" },
  ];
  return (
    <section className="relative border-y border-border/60 bg-surface/30">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden bg-border md:grid-cols-4">
        {items.map((it, i) => (
          <Reveal key={it.label} delay={i * 0.05}>
            <div className="group flex h-full flex-col justify-between gap-3 bg-background p-6 transition-colors hover:bg-surface">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                Ecosystem · 0{i + 1}
              </div>
              <div>
                <div className="font-display text-lg font-semibold tracking-tight">{it.label}</div>
                <div className="text-sm text-muted-foreground">{it.value}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- About Preview ---------------- */

function AboutPreview() {
  return (
    <section className="relative py-28 lg:py-40">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-5">
          <Reveal>
            <Eyebrow>Who we are</Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Not a club.
              <br />
              <span className="text-brand-gradient">A builder ecosystem.</span>
            </h2>
          </Reveal>
        </div>
        <div className="lg:col-span-7">
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-foreground/90">
              ABC is a student-run innovation lab where developers, designers, and researchers
              ship real products on-chain. We don't run lectures — we run cohorts, hack nights,
              and ecosystem meet-ups that turn curiosity into deployed contracts.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
            {[
              { t: "Mission", d: "Make Indore a magnet for early-stage Web3 builders." },
              { t: "Culture", d: "Async, opinionated, ship-first. Open to all majors." },
              { t: "Scope", d: "Protocols, dApps, tooling, research — anything on-chain." },
            ].map((x, i) => (
              <Reveal key={x.t} delay={0.15 + i * 0.07}>
                <div className="bg-surface/40 p-6">
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand">
                    0{i + 1}
                  </div>
                  <div className="mt-3 font-display text-base font-semibold">{x.t}</div>
                  <p className="mt-1.5 text-sm text-muted-foreground">{x.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.4}>
            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-brand"
            >
              Read the full story <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Featured Activities ---------------- */

function FeaturedActivities() {
  const cards = [
    {
      icon: Mic2,
      tag: "Flagship",
      title: "Solana Meet-up Indore",
      copy: "Bringing Solana's global ecosystem to Tier-2 India. Talks, demos, and validator nights.",
      img: meetupImg,
      large: true,
    },
    {
      icon: Rocket,
      tag: "Hack Series",
      title: "ABC Hack Nights",
      copy: "48-hour micro-hackathons run monthly with prize pools from partner protocols.",
      img: hackathonImg,
    },
    {
      icon: GraduationCap,
      tag: "Cohort",
      title: "Workshop Series",
      copy: "From Solidity 101 to ZK circuits — instructor-led tracks with shipping requirements.",
      img: workshopImg,
    },
    {
      icon: Users2,
      tag: "Peer",
      title: "Builder Study Groups",
      copy: "Weekly co-working sessions where members pair on whitepapers, audits, and side projects.",
    },
    {
      icon: Mic2,
      tag: "Audio",
      title: "ABC Podcast",
      copy: "Long-form conversations with founders, researchers, and Indian Web3 operators.",
    },
    {
      icon: Code2,
      tag: "Live Build",
      title: "Open Source Sundays",
      copy: "Members contribute to open repos across the Solana, Ethereum, and Cosmos stacks.",
    },
  ];
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="What we do"
            title={<>Programs designed for <span className="text-brand-gradient">shipping</span>, not slides.</>}
            description="Every program ends with something deployed — a contract, a demo, a paper, a product."
          />
        </Reveal>

        <div className="mt-16 grid gap-4 md:grid-cols-6 md:gap-5">
          {cards.map((c, i) => {
            const span = c.large ? "md:col-span-4 md:row-span-2" : "md:col-span-2";
            return (
              <Reveal key={c.title} delay={i * 0.05} className={span}>
                <article className={`group relative h-full overflow-hidden rounded-xl border border-border bg-surface/40 transition-all hover:border-brand/40 hover:bg-surface ${c.large ? "min-h-[420px]" : "min-h-[200px]"}`}>
                  {c.img && (
                    <>
                      <img
                        src={c.img}
                        alt=""
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover opacity-40 transition-all duration-700 group-hover:scale-105 group-hover:opacity-50"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
                    </>
                  )}
                  <div className="relative flex h-full flex-col justify-between p-6">
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-2.5 py-1 backdrop-blur-md">
                        <c.icon className="h-3 w-3 text-brand" />
                        <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground">{c.tag}</span>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                    </div>
                    <div className="mt-auto">
                      <h3 className={`font-display font-semibold tracking-tight ${c.large ? "text-2xl sm:text-3xl" : "text-lg"}`}>
                        {c.title}
                      </h3>
                      <p className="mt-2 max-w-md text-sm text-muted-foreground">{c.copy}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Learning Ecosystem ---------------- */

function LearningEcosystem() {
  const tracks = [
    {
      level: "01 / Beginner",
      title: "Web3 Foundations",
      bullets: ["Wallets & key management", "Reading on-chain data", "Solidity primer"],
    },
    {
      level: "02 / Intermediate",
      title: "Protocol Engineering",
      bullets: ["dApp architecture", "EVM internals", "Smart contract testing"],
    },
    {
      level: "03 / Advanced",
      title: "Frontier Research",
      bullets: ["Zero-knowledge circuits", "MEV & validator design", "Cross-chain protocols"],
    },
  ];
  return (
    <section className="relative overflow-hidden py-28 lg:py-36">
      <div className="absolute inset-0 bg-aurora opacity-50" />
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-30" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="Learning Hub"
            title={<>A structured gateway into <span className="text-brand-gradient">Web3.</span></>}
            description="A three-tier curriculum, designed and maintained by ABC engineers, that mirrors how protocols actually hire."
          />
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {tracks.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.08}>
              <div className="group relative h-full overflow-hidden rounded-xl border border-border bg-surface/60 p-7 backdrop-blur-md transition-all hover:border-brand/40 hover:shadow-elevated">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand">{t.level}</div>
                <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">{t.title}</h3>
                <ul className="mt-6 space-y-3 border-t border-border/60 pt-5">
                  {t.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-sm text-foreground/85">
                      <span className="h-1 w-1 rounded-full bg-brand" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand/10 opacity-0 blur-3xl transition-opacity group-hover:opacity-100" />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-12 flex justify-center">
            <Link
              to="/learning"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-surface/60 px-5 py-3 text-sm font-medium backdrop-blur-md hover:border-brand/40"
            >
              Open the Learning Hub <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Projects ---------------- */

function ProjectsShowcase() {
  const projects = [
    {
      icon: Box,
      name: "Veil Marketplace",
      tag: "NFT · Solana",
      desc: "A creator-first NFT marketplace with on-chain royalties and cross-collection lending primitives.",
      stats: [{ k: "$2.1M", v: "Volume" }, { k: "12K", v: "Mints" }],
    },
    {
      icon: Building2,
      name: "Plotchain",
      tag: "Real Estate · EVM",
      desc: "Tokenizing fractional real estate ownership in Tier-2 India with verified on-chain titles.",
      stats: [{ k: "8", v: "Properties" }, { k: "1.4K", v: "Holders" }],
    },
    {
      icon: Music,
      name: "Sonic Protocol",
      tag: "Music · L2",
      desc: "A Web3 music platform paying artists per stream via micropayments and fan-owned playlists.",
      stats: [{ k: "320", v: "Artists" }, { k: "98K", v: "Streams" }],
    },
  ];
  return (
    <section className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <Eyebrow>Built by members</Eyebrow>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                Real products. <span className="text-brand-gradient">On-chain.</span>
              </h2>
            </div>
            <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-foreground hover:text-brand">
              All projects <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface/40 transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-elevated">
                <div className="relative h-44 overflow-hidden border-b border-border bg-brand-gradient">
                  <div className="absolute inset-0 bg-grid opacity-30 mix-blend-overlay" />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/10 to-black/40" />
                  <p.icon className="absolute right-5 top-5 h-8 w-8 text-white/80" />
                  <div className="absolute bottom-4 left-5 font-mono text-[10px] uppercase tracking-[0.22em] text-white/80">
                    {p.tag}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-semibold tracking-tight">{p.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  <div className="mt-5 grid grid-cols-2 gap-4 border-t border-border/60 pt-4">
                    {p.stats.map((s) => (
                      <div key={s.v}>
                        <div className="font-display text-lg font-semibold">{s.k}</div>
                        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                          {s.v}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Events Timeline ---------------- */

function EventsTimeline() {
  const events = [
    { date: "May 2026", title: "Solana Meet-up Indore — Vol. 03", place: "AITR Auditorium", status: "Upcoming" },
    { date: "Apr 2026", title: "ZK Workshop with Polygon", place: "ABC Lab", status: "Open" },
    { date: "Mar 2026", title: "Build-a-Wallet Hack Night", place: "Online", status: "Past" },
    { date: "Feb 2026", title: "EVM Internals Cohort", place: "AITR · Block C", status: "Past" },
  ];
  return (
    <section className="relative border-y border-border/60 bg-surface/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <Eyebrow>The calendar</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Events that move the <span className="text-brand-gradient">ecosystem.</span>
          </h2>
        </Reveal>
        <div className="mt-14 divide-y divide-border/60 border-y border-border/60">
          {events.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.05}>
              <Link to="/events" className="group grid items-center gap-6 py-6 transition-colors hover:bg-white/[0.02] sm:grid-cols-12">
                <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground sm:col-span-2">
                  {e.date}
                </div>
                <div className="font-display text-xl font-medium tracking-tight sm:col-span-6">
                  {e.title}
                </div>
                <div className="text-sm text-muted-foreground sm:col-span-3">{e.place}</div>
                <div className="flex items-center justify-between gap-3 sm:col-span-1 sm:justify-end">
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
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Sponsors ---------------- */

function Sponsors() {
  const partners = ["SOLANA", "POLYGON", "ETHINDIA", "DEVFOLIO", "ARBITRUM", "BASE", "ALCHEMY", "GITCOIN"];
  return (
    <section className="relative py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>Backed by the ecosystem</Eyebrow>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Partners & supporters
              </h2>
            </div>
            <Link to="/partners" className="inline-flex items-center gap-2 text-sm hover:text-brand">
              Become a partner <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4">
          {partners.map((p, i) => (
            <Reveal key={p} delay={i * 0.03}>
              <div className="group flex h-24 items-center justify-center bg-surface/40 transition-colors hover:bg-surface">
                <span className="font-display text-xl font-semibold tracking-[0.15em] text-muted-foreground transition-colors group-hover:text-foreground">
                  {p}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Team ---------------- */

function TeamPreview() {
  const leads = [
    { name: "Surabhi Solanki", role: "President", bio: "Leads ecosystem and strategy. Smart contracts, DeFi research." },
    { name: "Parth Nagar", role: "Vice President", bio: "Engineering lead. Solana programs, dApp infra, hackathon ops." },
  ];
  return (
    <section className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <Eyebrow>The core</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Built and led by <span className="text-brand-gradient">students.</span>
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {leads.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.1}>
              <div className="group relative overflow-hidden rounded-xl border border-border bg-surface/40 p-7 transition-all hover:border-brand/40 hover:bg-surface">
                <div className="flex items-center gap-5">
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-brand-gradient font-display text-2xl font-semibold text-white shadow-glow">
                    {m.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-display text-xl font-semibold tracking-tight">{m.name}</div>
                    <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand">{m.role}</div>
                  </div>
                </div>
                <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
                <div className="absolute right-5 top-5 opacity-0 transition-opacity group-hover:opacity-100">
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.3}>
          <div className="mt-10">
            <Link to="/team" className="inline-flex items-center gap-2 text-sm hover:text-brand">
              Meet the full team <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Community CTA ---------------- */

function CommunityCTA() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="absolute inset-0 bg-aurora opacity-70" />
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-40" />
      <div className="relative mx-auto max-w-5xl px-5 text-center lg:px-8">
        <Reveal>
          <Compass className="mx-auto h-8 w-8 text-brand" />
          <h2 className="mt-6 font-display text-4xl font-semibold tracking-tight text-gradient sm:text-6xl">
            Find your edge in Web3.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
            Whether you write Rust, Solidity, or just have a thesis you want to test on-chain — there's
            a seat for you in the next cohort.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-foreground px-6 py-3 text-sm font-medium text-background shadow-elevated"
            >
              Apply to Join <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-surface/60 px-6 py-3 text-sm font-medium backdrop-blur-md hover:border-brand/40"
            >
              <MessagesSquare className="h-4 w-4" /> Discord
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
