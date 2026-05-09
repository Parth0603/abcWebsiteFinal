import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { Eyebrow, SectionHeader } from "@/components/site/Section";
import {
  GraduationCap,
  Users2,
  Mic2,
  Code2,
  Handshake,
  Calendar,
} from "lucide-react";
import blockathonImg from "@/assets/images/blockathon.png";
import hashedImg from "@/assets/images/hashed.png";
import web3waveImg from "@/assets/images/web3wave.png";
import web3verseImg from "@/assets/images/web3verse.png";
import aroundtheblockImg from "@/assets/images/aroundtheblock.png";
import blockworksImg from "@/assets/images/blockworksworkshop.png";
import graphicsImg from "@/assets/images/workshipGraphicsDesigning.png";
import workshopImg from "@/assets/workshop.jpg";
import meetupImg from "@/assets/meetup.jpg";
import hackathonImg from "@/assets/hackathon.jpg";
import heroImg from "@/assets/hero-network.jpg";
import collageImg from "@/assets/community-collage.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About · Acropolis Blockchain Club" },
      {
        name: "description",
        content:
          "ABC is a student-led Web3 community at Acropolis Institute Indore, focused on practical learning, workshops, hackathons, and ecosystem collaboration.",
      },
      { property: "og:title", content: "About ABC" },
      {
        property: "og:description",
        content: "Building a real Web3 community at Acropolis through workshops and hackathons.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <AboutHero />
      <WhyABC />
      <Timeline />
      <WhatWeDo />
      <AchievementsBlock />
      <FounderSpotlight />
      <ClosingCommunity />
    </>
  );
}

function AboutHero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60 pb-20 pt-32 lg:pt-40">
      <div className="absolute inset-0">
        <img src={collageImg} alt="" className="h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/85 to-background" />
        <div className="absolute inset-0 bg-grid bg-grid-fade opacity-30" />
      </div>
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-7">
          <Eyebrow>About ABC</Eyebrow>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-gradient sm:text-5xl md:text-6xl">
            Building a Real Web3 Community at <span className="text-brand-gradient">Acropolis.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Acropolis Blockchain Club brings together students, developers, designers, and builders
            to explore blockchain technology through workshops, hackathons, industry sessions, and
            hands-on learning.
          </p>
        </div>
        <div className="relative lg:col-span-5">
          <div className="relative aspect-[4/5] w-full">
            <div className="absolute left-0 top-0 h-[55%] w-[65%] overflow-hidden rounded-xl border border-border shadow-elevated">
              <img src={web3waveImg} alt="Workshop" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="absolute right-0 top-[20%] h-[44%] w-[52%] overflow-hidden rounded-xl border border-border shadow-elevated">
              <img src={hashedImg} alt="Meetup" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="absolute bottom-0 left-[12%] h-[44%] w-[60%] overflow-hidden rounded-xl border border-border shadow-elevated">
              <img src={blockathonImg} alt="Hackathon" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyABC() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <Eyebrow>Why ABC Exists</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Practical exposure beyond the classroom.
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-7">
          <p className="text-lg leading-relaxed text-foreground/85">
            ABC was created to give students practical exposure to blockchain and Web3 technologies
            beyond traditional classrooms. The club focuses on learning through building,
            collaboration, workshops, and ecosystem interaction.
          </p>
          <div className="mt-10 overflow-hidden rounded-xl border border-border">
            <img src={blockworksImg} alt="A workshop in progress" loading="lazy" className="h-72 w-full object-cover" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const timeline = [
  { date: "Genesis", title: "Hashed! Genesis Ceremony", desc: "The launch event of the club, formally introducing ABC to the campus and ecosystem partners.", img: hashedImg },
  { date: "Workshop", title: "Web3 Verse", desc: "An introductory workshop covering the fundamentals of Web3 and the broader blockchain landscape.", img: web3verseImg },
  { date: "Series", title: "BlockWorks", desc: "A hands-on program built around smart contracts, NFTs, and decentralized application concepts.", img: blockworksImg },
  { date: "Series", title: "Web3 Wave", desc: "An onboarding series for students new to wallets, transactions, and on-chain interactions.", img: web3waveImg },
  { date: "Ecosystem", title: "Solana Ecosystem Events", desc: "Sessions and conversations focused on the Solana ecosystem and developer tooling.", img: meetupImg },
  { date: "Hackathon", title: "Block-A-Thon", desc: "Our flagship campus hackathon with 54 teams and 198 participants building Web3 projects.", img: blockathonImg },
  { date: "Sessions", title: "Speaker Sessions", desc: "Conversations with industry voices, including a session on high paying jobs in recession with Mr. Kartikey.", img: aroundtheblockImg },
  { date: "Community", title: "Meetups & Networking", desc: "Recurring community gatherings to connect builders, mentors, and ecosystem collaborators.", img: meetupImg },
];

function Timeline() {
  return (
    <section className="relative border-y border-border/60 bg-surface/30 py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="Journey"
            title={<>How ABC <span className="text-brand-gradient">came together.</span></>}
            description="A look at the events, programs, and collaborations that built the community over time."
          />
        </Reveal>
        <div className="relative mt-16">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-1/2" />
          <div className="space-y-10">
            {timeline.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.04}>
                <div className={`relative grid gap-6 md:grid-cols-2 md:gap-12 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                  <div className="hidden md:block" />
                  <div className="relative pl-12 md:pl-0">
                    <span className="absolute left-3 top-3 h-2.5 w-2.5 rounded-full bg-brand ring-4 ring-background md:left-auto md:right-auto md:[&]:left-[calc(-50%-5px)]" />
                    <div className="overflow-hidden rounded-xl border border-border bg-background/60 transition-all hover:border-brand/40">
                      <div className="relative h-44 overflow-hidden">
                        <img src={t.img} alt={t.title} loading="lazy" className="h-full w-full object-cover opacity-70" />
                        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                      </div>
                      <div className="p-6">
                        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand">{t.date}</div>
                        <h3 className="mt-2 font-display text-xl font-semibold tracking-tight">{t.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatWeDo() {
  const cards = [
    { icon: GraduationCap, t: "Workshops", d: "Hands-on sessions covering blockchain basics, smart contracts, and Web3 development." },
    { icon: Code2, t: "Hackathons", d: "Build sprints like Block-A-Thon where teams ship working Web3 ideas in a weekend." },
    { icon: Mic2, t: "Speaker Sessions", d: "Conversations with founders, engineers, and ecosystem leads working in Web3 today." },
    { icon: Handshake, t: "Ecosystem Collaborations", d: "Programs run with partners like Solana, Metaschool, Systango, and Central DAO." },
    { icon: Users2, t: "Community Learning", d: "Peer learning groups and study sessions that meet regularly on campus." },
    { icon: Calendar, t: "Technical Events", d: "Focused sessions and meetups around specific stacks, tools, and topics." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-28">
      <Reveal>
        <SectionHeader
          eyebrow="What We Do"
          title={<>Programs the club <span className="text-brand-gradient">actually runs.</span></>}
          description="Six tracks the community keeps coming back to."
        />
      </Reveal>
      <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
        {cards.map((c, i) => (
          <Reveal key={c.t} delay={i * 0.04}>
            <div className="flex h-full flex-col gap-4 bg-background p-7 transition-colors hover:bg-surface">
              <c.icon className="h-5 w-5 text-brand" />
              <div>
                <h3 className="font-display text-lg font-semibold tracking-tight">{c.t}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function AchievementsBlock() {
  const items = [
    { k: "54", v: "Teams at Block-A-Thon" },
    { k: "198", v: "Hackathon Participants" },
    { k: "Solana · Metaschool", v: "Ecosystem Programs" },
    { k: "IEEE · Central DAO · Systango", v: "Collaboration Partners" },
  ];
  return (
    <section className="relative border-y border-border/60 bg-surface/30 py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="Achievements"
            title={<>Growth that the <span className="text-brand-gradient">community can verify.</span></>}
            description="Real numbers from real events. We do not invent metrics."
          />
        </Reveal>
        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={it.v} delay={i * 0.05}>
              <div className="flex h-full flex-col justify-between gap-6 bg-background p-7">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand">0{i + 1}</div>
                <div>
                  <div className="font-display text-2xl font-semibold tracking-tight">{it.k}</div>
                  <div className="mt-1.5 text-sm text-muted-foreground">{it.v}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FounderSpotlight() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <Eyebrow>Founder Spotlight</Eyebrow>
          <div className="mt-5 overflow-hidden rounded-xl border border-border bg-surface/40">
            <div className="relative aspect-[4/5] w-full bg-brand-gradient">
              <div className="absolute inset-0 bg-grid opacity-20 mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <div className="font-display text-7xl font-semibold text-white/95">B</div>
                <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.22em] text-white/80">
                  Founder · ABC
                </div>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-7">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Batuk Sharma
          </h2>
          <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.22em] text-brand">
            Founder, Acropolis Blockchain Club
          </div>
          <p className="mt-6 text-lg leading-relaxed text-foreground/85">
            Batuk played a major role in building the club ecosystem and establishing
            industry-oriented blockchain activities within the community.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            His work shaped the early workshop programs, brought ecosystem collaborations to
            campus, and turned ABC into a space where students could engage with Web3 through
            real events and conversations.
          </p>
          <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
            {[
              { k: "Workshops", v: "Built the foundational learning programs." },
              { k: "Ecosystem", v: "Brought collaborations onto campus." },
              { k: "Community", v: "Set the culture and tone of ABC." },
            ].map((x) => (
              <div key={x.k} className="bg-background p-5">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{x.k}</div>
                <p className="mt-2 text-sm leading-relaxed text-foreground/85">{x.v}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ClosingCommunity() {
  return (
    <section className="relative overflow-hidden border-t border-border/60 py-24 lg:py-32">
      <div className="absolute inset-0">
        <img src={collageImg} alt="" className="h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/60" />
      </div>
      <div className="relative mx-auto max-w-3xl px-5 text-center lg:px-8">
        <Reveal>
          <Eyebrow>The Community</Eyebrow>
          <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight text-gradient sm:text-5xl">
            More Than Events.
            <br />
            <span className="text-brand-gradient">A Community That Builds Together.</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            What stays after every workshop and hackathon is the network of people who showed up,
            built things, and kept showing up.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
