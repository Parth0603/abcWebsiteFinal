import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import blockathonImg from "@/assets/images/blockathon.png";
import hashedImg from "@/assets/images/hashed.png";
import web3waveImg from "@/assets/images/web3wave.png";
import web3verseImg from "@/assets/images/web3verse.png";
import aroundtheblockImg from "@/assets/images/aroundtheblock.png";
import blockworksImg from "@/assets/images/blockworksworkshop.png";
import graphicsImg from "@/assets/images/workshipGraphicsDesigning.png";
import hackathonImg from "@/assets/hackathon.jpg";
import meetupImg from "@/assets/meetup.jpg";
import workshopImg from "@/assets/workshop.jpg";
import heroImg from "@/assets/hero-network.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery , ABC" },
      { name: "description", content: "Moments from ABC events, hack nights, and meet-ups." },
      { property: "og:title", content: "ABC Gallery" },
      { property: "og:description", content: "A visual archive of the ABC ecosystem." },
    ],
  }),
  component: Gallery,
});

const items = [
  { src: blockathonImg, label: "Block-A-Thon Hackathon", h: "tall" },
  { src: hashedImg, label: "Hashed! Genesis Ceremony", h: "short" },
  { src: web3waveImg, label: "Web3 Wave Workshop", h: "short" },
  { src: aroundtheblockImg, label: "Around the Block", h: "tall" },
  { src: web3verseImg, label: "Web3 Verse Session", h: "short" },
  { src: blockworksImg, label: "BlockWorks Hands-on", h: "tall" },
  { src: graphicsImg, label: "Web3 Graphics Design", h: "short" },
  { src: hackathonImg, label: "ABC Hack Night", h: "short" },
  { src: meetupImg, label: "Builder Mixer", h: "tall" },
];

function Gallery() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title={<>Moments from the <span className="text-brand-gradient">ecosystem.</span></>}
        description="A visual archive of our hack nights, meet-ups, workshops, and the people who showed up."
      />
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {items.map((it, i) => (
            <Reveal key={i} delay={(i % 4) * 0.05}>
              <figure className="group relative mb-4 break-inside-avoid overflow-hidden rounded-xl border border-border">
                <img
                  src={it.src}
                  alt={it.label}
                  loading="lazy"
                  className="h-auto w-full transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent opacity-90 transition-opacity group-hover:opacity-100" />
                <figcaption className="absolute bottom-4 left-4 right-4">
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand">Event</div>
                  <div className="mt-1 font-display text-lg font-semibold">{it.label}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
