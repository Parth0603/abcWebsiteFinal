import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Tag, Info, Sparkles, MapPinIcon, CalendarIcon, UserIcon, BriefcaseIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { eventDetails } from "@/data/events";
import blockathonImg from "@/assets/images/blockathon.png";
import hashedImg from "@/assets/images/hashed.png";
import web3waveImg from "@/assets/images/web3wave.png";
import web3verseImg from "@/assets/images/web3verse.png";
import aroundtheblockImg from "@/assets/images/aroundtheblock.png";
import blockworksImg from "@/assets/images/blockworksworkshop.png";
import graphicsImg from "@/assets/images/workshipGraphicsDesigning.png";
import workshopImg from "@/assets/workshop.jpg";
import meetupImg from "@/assets/meetup.jpg";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events · ABC" },
      {
        name: "description",
        content:
          "An archive of events run by the Acropolis Blockchain Club, including hackathons, workshops, speaker sessions, and ecosystem meetups.",
      },
      { property: "og:title", content: "ABC Events" },
      { property: "og:description", content: "Hackathons, workshops, speaker sessions, and meetups." },
    ],
  }),
  component: Events,
});

function Events() {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const selectedDetails = selectedEvent ? eventDetails[selectedEvent] : null;

  const featured = {
    title: "Block-A-Thon",
    type: "Flagship Hackathon",
    desc: "ABC's flagship campus hackathon. 54 teams and 198 participants gathered to build, ship, and pitch Web3 projects in a focused two-day sprint.",
    img: blockathonImg,
    collab: "Run with ecosystem and student partners.",
  };

  const eventsList = [
    {
      title: "Hashed! Genesis Ceremony",
      type: "Launch Event",
      img: hashedImg,
      desc: "The official launch ceremony of the club, marking ABC's beginning as a campus Web3 community.",
    },
    {
      title: "Web3 Wave",
      type: "Workshop Series",
      img: web3waveImg,
      desc: "An onboarding series introducing students to wallets, transactions, and decentralized applications.",
    },
    {
      title: "Web3 Verse",
      type: "Workshop",
      img: web3verseImg,
      desc: "A foundational session covering the broader Web3 landscape and core blockchain concepts.",
    },
    {
      title: "Around the Block with Mr. Kartikey",
      type: "Conversation",
      img: aroundtheblockImg,
      desc: "A deep-dive conversation with Mr. Kartikey on building in Web3 and navigating the ecosystem.",
    },
    {
      title: "BlockWorks Workshop",
      type: "Workshop",
      img: blockworksImg,
      desc: "A practical, hands-on workshop focused on smart contracts, primitives, and building on-chain.",
    },
    {
      title: "Graphics Designing for Web3",
      type: "Workshop",
      img: graphicsImg,
      desc: "A creative session exploring visual identity, design principles, and graphics for the decentralized web.",
    },
    {
      title: "Speaker Session: High Paying Jobs in Recession",
      type: "Speaker Session",
      img: meetupImg,
      desc: "An open conversation on careers in tech and Web3 during uncertain market conditions.",
    },
    {
      title: "Solana Ecosystem Call",
      type: "Ecosystem",
      img: meetupImg,
      desc: "An ecosystem-focused session exploring the Solana developer stack and opportunities.",
    },
    {
      title: "Metaschool Collaboration Events",
      type: "Collaboration",
      img: workshopImg,
      desc: "A series of programs run in collaboration with Metaschool to introduce students to practical Web3 building.",
    },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Events Archive"
        title={<>An archive of <span className="text-brand-gradient">what we have built.</span></>}
        description="Workshops, hackathons, speaker sessions, and ecosystem programs run by the Acropolis Blockchain Club."
      />

      {/* Featured */}
      <section className="mx-auto max-w-7xl px-5 pt-16 lg:px-8">
        <Reveal>
          <article
            onClick={() => setSelectedEvent(featured.title)}
            className="group relative cursor-pointer grid overflow-hidden rounded-2xl border border-border bg-surface/40 lg:grid-cols-12 transition-all hover:border-brand/40"
          >
            <div className="relative h-72 overflow-hidden lg:col-span-7 lg:h-auto">
              <img src={featured.img} alt={featured.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-transparent to-transparent" />
            </div>
            <div className="flex flex-col justify-center p-8 lg:col-span-5 lg:p-12">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-2.5 py-1">
                <span className="h-1 w-1 rounded-full bg-brand" />
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand">Featured · {featured.type}</span>
              </div>
              <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight sm:text-4xl">{featured.title}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{featured.desc}</p>
              <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-border/60 pt-5 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                <span className="inline-flex items-center gap-2"><Tag className="h-3 w-3 text-brand" /> 54 teams</span>
                <span className="inline-flex items-center gap-2"><Tag className="h-3 w-3 text-brand" /> 198 participants</span>
              </div>
            </div>
          </article>
        </Reveal>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {eventsList.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.04}>
              <article
                onClick={() => setSelectedEvent(e.title)}
                className="group relative h-full cursor-pointer overflow-hidden rounded-xl border border-border bg-surface/40 transition-all hover:border-brand/40 hover:bg-surface"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={e.img}
                    alt={e.title}
                    loading="lazy"
                    className="h-full w-full object-cover opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                  <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-2.5 py-1 backdrop-blur-md">
                    <span className="h-1 w-1 rounded-full bg-brand" />
                    <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground">{e.type}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold tracking-tight">{e.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">{e.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

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
                      backgroundImage: `url(${selectedDetails.img || featured.img})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover'
                    }}
                  />
                  <img
                    src={selectedDetails.img || featured.img}
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
                        
                        {selectedDetails.sponsors && (
                          <div className="pt-4 border-t border-border">
                            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">Sponsors</div>
                            <div className="flex flex-wrap gap-2">
                              {selectedDetails.sponsors.map((s: string) => (
                                <Badge key={s} variant="secondary" className="text-[10px] px-2 py-0">
                                  {s}
                                </Badge>
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
    </>
  );
}
