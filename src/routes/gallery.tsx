import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import hackathonImg from "@/assets/hackathon.jpg";
import meetupImg from "@/assets/meetup.jpg";
import workshopImg from "@/assets/workshop.jpg";
import heroImg from "@/assets/hero-network.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — ABC" },
      { name: "description", content: "Moments from ABC events, hack nights, and meet-ups." },
      { property: "og:title", content: "ABC Gallery" },
      { property: "og:description", content: "A visual archive of the ABC ecosystem." },
    ],
  }),
  component: Gallery,
});

const items = [
  { src: meetupImg, label: "Solana Meet-up Indore", h: "tall" },
  { src: hackathonImg, label: "ABC Hack Night", h: "short" },
  { src: workshopImg, label: "EVM Workshop", h: "short" },
  { src: heroImg, label: "Network Visualization", h: "tall" },
  { src: hackathonImg, label: "ETHIndia Cohort", h: "short" },
  { src: meetupImg, label: "Builder Mixer", h: "tall" },
  { src: workshopImg, label: "ZK Sessions", h: "short" },
  { src: heroImg, label: "Validator Night", h: "tall" },
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
              <figure className={`group relative mb-4 overflow-hidden rounded-xl border border-border break-inside-avoid ${it.h === "tall" ? "h-[420px]" : "h-[260px]"}`}>
                <img
                  src={it.src}
                  alt={it.label}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
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
