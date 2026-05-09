import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { Eyebrow, SectionHeader } from "@/components/site/Section";
import {
  ArrowUpRight,
  Info,
  Sparkles,
  CalendarIcon,
  MapPinIcon,
  BriefcaseIcon,
  UserIcon,
  BookOpen,
  Trophy,
  Users2,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { eventDetails } from "@/data/events";
import { Hero } from "@/components/site/Hero";
import blockathonImg from "@/assets/images/blockathon.png";
import hashedImg from "@/assets/images/hashed.png";
import web3waveImg from "@/assets/images/web3wave.png";
import collageImg from "@/assets/community-collage.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Acropolis Blockchain Club · Student Web3 Community at AITR Indore" },
      {
        name: "description",
        content:
          "ABC is a student-led Web3 community at Acropolis Institute Indore, running workshops, hackathons, speaker sessions, and ecosystem collaborations.",
      },
      { property: "og:title", content: "Acropolis Blockchain Club" },
      {
        property: "og:description",
        content: "Workshops, hackathons, and ecosystem collaboration at AITR Indore.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <CommunitySnapshot />
      <FeaturedEvents />
      <CommunityMoments />
      <Collaborations />
      <Achievements />
      <JoinCTA />
    </>
  );
}

/* ---------------- Community Snapshot ---------------- */

function CommunitySnapshot() {
  const items = [
    { icon: BookOpen, k: "Workshops", v: "Hands-on sessions across Web3 basics, smart contracts, and ecosystem tools." },
    { icon: Trophy, k: "Block-A-Thon", v: "54 teams and 198 participants in our flagship campus hackathon." },
    { icon: Users2, k: "Speaker Sessions", v: "Conversations with founders, engineers, and ecosystem leads." },
    { icon: Sparkles, k: "Collaborations", v: "Programs run with Solana, Metaschool, Systango, and Central DAO." },
  ];
  return (
    <section className="relative border-y border-border/60 bg-surface/30 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <Eyebrow>Community Snapshot</Eyebrow>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            What ABC has been up to.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={it.k} delay={i * 0.05}>
              <div className="flex h-full flex-col gap-4 bg-background p-6">
                <it.icon className="h-5 w-5 text-brand" />
                <div>
                  <div className="font-display text-base font-semibold tracking-tight">{it.k}</div>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{it.v}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Featured Events ---------------- */

function FeaturedEvents() {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const selectedDetails = selectedEvent ? eventDetails[selectedEvent] : null;

  const events = [
    {
      tag: "Hackathon",
      title: "Block-A-Thon",
      copy: "Our flagship campus hackathon. 54 teams and 198 participants built and pitched Web3 ideas across two intense days.",
      img: blockathonImg,
      large: true,
    },
    {
      tag: "Flagship Event",
      title: "Hashed! Genesis Ceremony",
      copy: "The official launch ceremony of the club, marking the start of ABC as a campus Web3 community.",
      img: hashedImg,
    },
    {
      tag: "Workshop Series",
      title: "Web3 Wave",
      copy: "An onboarding series introducing students to wallets, transactions, and decentralized applications.",
      img: web3waveImg,
    },
  ];

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeader
              eyebrow="Featured Events"
              title={<>Programs that built our <span className="text-brand-gradient">community.</span></>}
              description="A few of the events that shaped ABC into what it is today."
            />
            <Link to="/events" className="inline-flex items-center gap-2 text-sm text-foreground hover:text-brand">
              All events <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-6">
          {events.map((e, i) => {
            const span = e.large ? "md:col-span-4 md:row-span-2" : "md:col-span-2";
            return (
              <Reveal key={e.title} delay={i * 0.06} className={span}>
                <article
                  onClick={() => setSelectedEvent(e.title)}
                  className={`group relative h-full cursor-pointer overflow-hidden rounded-xl border border-border bg-surface/40 transition-all hover:border-brand/40 ${
                    e.large ? "min-h-[420px]" : "min-h-[200px]"
                  }`}
                >
                  <img
                    src={e.img}
                    alt={e.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover opacity-45 transition-all duration-700 group-hover:scale-105 group-hover:opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-transparent" />
                  <div className="relative flex h-full flex-col justify-between p-7">
                    <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background/70 px-2.5 py-1 backdrop-blur-md">
                      <span className="h-1 w-1 rounded-full bg-brand" />
                      <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground">
                        {e.tag}
                      </span>
                    </div>
                    <div>
                      <h3 className={`font-display font-semibold tracking-tight ${e.large ? "text-3xl sm:text-4xl" : "text-xl"}`}>
                        {e.title}
                      </h3>
                      <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">{e.copy}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>

      <Dialog open={!!selectedEvent} onOpenChange={() => setSelectedEvent(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden border-border bg-background sm:rounded-2xl">
          <ScrollArea className="max-h-[90vh]">
            {selectedDetails && (
              <div className="pb-12">
                <div className="relative flex items-center justify-center bg-muted/20 overflow-hidden">
                  {/* Blurred Background */}
                  <div 
                    className="absolute inset-0 opacity-30 blur-2xl scale-110"
                    style={{ 
                      backgroundImage: `url(${selectedDetails.img})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover'
                    }}
                  />
                  <img
                    src={selectedDetails.img}
                    alt={selectedDetails.title}
                    className="relative z-10 max-h-[400px] w-full object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-20" />
                  <div className="absolute bottom-6 left-6 right-6 z-30">
                    <Badge variant="outline" className="mb-3 border-brand/40 bg-brand/10 text-brand backdrop-blur-md">
                      {selectedDetails.type}
                    </Badge>
                    <h2 className="font-display text-3xl font-bold tracking-tight text-white">{selectedDetails.title}</h2>
                  </div>
                </div>

                <div className="px-6 pt-6 sm:px-8">
                  <div className="grid gap-8 lg:grid-cols-12">
                    <div className="lg:col-span-7 space-y-8">
                      <section>
                        <h4 className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-brand">
                          <Info className="h-3.5 w-3.5" /> Overview
                        </h4>
                        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                          {selectedDetails.overview}
                        </p>
                      </section>

                      {selectedDetails.highlights && (
                        <section>
                          <h4 className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-brand">
                            <Sparkles className="h-3.5 w-3.5" /> Key Highlights
                          </h4>
                          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                            {selectedDetails.highlights.map((h: string, idx: number) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand/60" />
                                {h}
                              </li>
                            ))}
                          </ul>
                        </section>
                      )}

                      {selectedDetails.impact && (
                        <section className="rounded-xl border border-brand/20 bg-brand/5 p-5">
                          <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand">Impact</h4>
                          <p className="mt-2 text-sm leading-relaxed text-foreground/90 italic">
                            "{selectedDetails.impact}"
                          </p>
                        </section>
                      )}
                    </div>

                    <div className="lg:col-span-5 space-y-6">
                      <div className="rounded-xl border border-border bg-surface/50 p-6 space-y-5">
                        <div className="space-y-4">
                          <div className="flex gap-3">
                            <CalendarIcon className="h-4 w-4 shrink-0 text-brand mt-0.5" />
                            <div>
                              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Date</div>
                              <div className="mt-0.5 text-sm font-medium">{selectedDetails.date}</div>
                            </div>
                          </div>

                          {selectedDetails.location && (
                            <div className="flex gap-3">
                              <MapPinIcon className="h-4 w-4 shrink-0 text-brand mt-0.5" />
                              <div>
                                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Location</div>
                                <div className="mt-0.5 text-sm font-medium">{selectedDetails.location}</div>
                              </div>
                            </div>
                          )}

                          <div className="flex gap-3">
                            <BriefcaseIcon className="h-4 w-4 shrink-0 text-brand mt-0.5" />
                            <div>
                              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Organized By</div>
                              <div className="mt-0.5 text-sm text-muted-foreground leading-snug">{selectedDetails.organizedBy || selectedDetails.presentedBy}</div>
                            </div>
                          </div>
                        </div>

                        {selectedDetails.speakers && (
                          <div className="pt-4 border-t border-border">
                            <div className="flex items-center gap-2 mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-brand">
                              <UserIcon className="h-3 w-3" /> Speakers & Mentors
                            </div>
                            <div className="space-y-2">
                              {selectedDetails.speakers.map((s: string, idx: number) => (
                                <div key={idx} className="text-sm text-muted-foreground leading-tight">
                                  {s}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </section>
  );
}

/* ---------------- Community Moments ---------------- */

function CommunityMoments() {
  const moments = [
    { img: web3waveImg, label: "Workshop Sessions" },
    { img: hashedImg, label: "Speaker Meetups" },
    { img: blockathonImg, label: "Hackathon Floors" },
    { img: web3waveImg, label: "Networking Nights" },
  ];
  return (
    <section className="relative border-t border-border/60 bg-surface/20 py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="Community Moments"
            title={<>Real rooms. <span className="text-brand-gradient">Real builders.</span></>}
            description="ABC is shaped by the people who show up. Workshops, sessions, late-night hack rooms, and the conversations between them."
          />
        </Reveal>
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {moments.map((m, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-border">
                <img
                  src={m.img}
                  alt={m.label}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <div className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/90">
                  {m.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Collaborations ---------------- */

function Collaborations() {
  const partners = ["Solana", "Metaschool", "Systango", "Central DAO", "IEEE", "Hashed"];
  return (
    <section className="relative py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <Eyebrow>Collaborations</Eyebrow>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Programs run with people who build the ecosystem.
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((p, i) => (
            <Reveal key={p} delay={i * 0.04}>
              <div className="flex h-24 items-center justify-center bg-background px-4 transition-colors hover:bg-surface">
                <span className="font-display text-base font-semibold tracking-tight text-foreground/85">{p}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Achievement Highlights ---------------- */

function Achievements() {
  const items = [
    {
      title: "Block-A-Thon Reach",
      desc: "54 teams and 198 participants joined our flagship hackathon, making it one of the largest student Web3 events on campus.",
    },
    {
      title: "Advisor Placements",
      desc: "Members and advisors of ABC have moved into roles across Web3 ecosystems, research collectives, and engineering teams.",
    },
    {
      title: "Ecosystem Collaborations",
      desc: "ABC has hosted programs and sessions in collaboration with Solana, Metaschool, Systango, Central DAO, and IEEE.",
    },
  ];
  return (
    <section className="relative border-y border-border/60 bg-surface/30 py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="Achievements"
            title={<>Quiet wins, <span className="text-brand-gradient">real proof.</span></>}
            description="Things the community is genuinely proud of. No inflated numbers, just what actually happened."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.06}>
              <div className="h-full rounded-xl border border-border bg-background/60 p-7 transition-all hover:border-brand/40">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand">0{i + 1}</div>
                <h3 className="mt-3 font-display text-xl font-semibold tracking-tight">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Join CTA ---------------- */

function JoinCTA() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-36">
      <div className="absolute inset-0">
        <img src={collageImg} alt="" className="h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-aurora opacity-60" />
        <div className="absolute inset-0 bg-grid bg-grid-fade opacity-30" />
      </div>
      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
        <Reveal>
          <Eyebrow>Join the Community</Eyebrow>
          <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight text-gradient sm:text-5xl">
            Build with us at Acropolis.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Whether you write code, design products, research protocols, or just want to learn,
            there is a place for you in ABC.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-medium text-background shadow-elevated"
            >
              Join the Community <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-surface/60 px-5 py-3 text-sm font-medium backdrop-blur-md hover:border-brand/40"
            >
              Learn about ABC
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
