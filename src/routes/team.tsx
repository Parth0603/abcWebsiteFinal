import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Eyebrow } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Github, Twitter, Linkedin } from "lucide-react";
import blockathonImg from "@/assets/images/blockathon.png";
import hashedImg from "@/assets/images/hashed.png";
import web3waveImg from "@/assets/images/web3wave.png";
import web3verseImg from "@/assets/images/web3verse.png";
import blockworksImg from "@/assets/images/blockworksworkshop.png";
import graphicsImg from "@/assets/images/workshipGraphicsDesigning.png";
import hackathonImg from "@/assets/hackathon.jpg";
import meetupImg from "@/assets/meetup.jpg";
import workshopImg from "@/assets/workshop.jpg";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team · ABC" },
      {
        name: "description",
        content: "The students leading the Acropolis Blockchain Club: founder, leadership, and core team.",
      },
      { property: "og:title", content: "ABC Team" },
      { property: "og:description", content: "Meet the people running ABC at AITR Indore." },
    ],
  }),
  component: Team,
});

const leadership = [
  {
    name: "Surabhi Solanki",
    role: "President",
    bio: "Leads programming, partnerships, and overall direction of the club.",
  },
  {
    name: "Parth Nagar",
    role: "Vice President",
    bio: "Drives operations, member engagement, and the day to day running of ABC.",
  },
];

const core = [
  { name: "Engineering Lead", role: "Engineering" },
  { name: "Research Lead", role: "Research" },
  { name: "Design Lead", role: "Design" },
  { name: "Operations Lead", role: "Operations" },
  { name: "Community Lead", role: "Community" },
  { name: "Partnerships Lead", role: "Partnerships" },
];

function Team() {
  return (
    <>
      <PageHeader
        eyebrow="Team"
        title={<>The people behind <span className="text-brand-gradient">ABC.</span></>}
        description="An active, student-run team that organizes the workshops, hackathons, and ecosystem programs you see across the site."
      />

      {/* Founder Spotlight */}
      <section className="mx-auto max-w-7xl px-5 pt-16 lg:px-8">
        <Reveal>
          <Eyebrow>Founder Spotlight</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <article className="mt-5 grid overflow-hidden rounded-2xl border border-border bg-surface/40 lg:grid-cols-12">
            <div className="relative lg:col-span-5">
              <div className="relative aspect-[4/5] w-full bg-brand-gradient lg:h-full">
                <div className="absolute inset-0 bg-grid opacity-20 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <div className="font-display text-7xl font-semibold text-white/95">B</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-5 p-8 lg:col-span-7 lg:p-12">
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand">Founder, ABC</div>
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">Batuk Sharma</h2>
              <p className="text-base leading-relaxed text-foreground/85">
                Batuk played a major role in building the club ecosystem and establishing
                industry-oriented blockchain activities within the community.
              </p>
              <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
                {[
                  { k: "Workshops", v: "Shaped the early learning programs at ABC." },
                  { k: "Ecosystem", v: "Brought collaborations and partners onto campus." },
                  { k: "Web3 Events", v: "Anchored flagship events including launches and hackathons." },
                  { k: "Community", v: "Built the culture that defines the club today." },
                ].map((x) => (
                  <div key={x.k} className="bg-background p-5">
                    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{x.k}</div>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/85">{x.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </Reveal>
      </section>

      {/* Leadership */}
      <section className="mx-auto max-w-7xl px-5 pt-20 lg:px-8 lg:pt-24">
        <Reveal>
          <Eyebrow>Leadership</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight">Currently leading the club</h2>
        </Reveal>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {leadership.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.05}>
              <article className="flex h-full items-start gap-5 rounded-xl border border-border bg-surface/40 p-7 transition-all hover:border-brand/40">
                <div className="grid h-16 w-16 flex-none place-items-center rounded-full bg-brand-gradient font-display text-2xl font-semibold text-white shadow-glow">
                  {m.name.charAt(0)}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-display text-xl font-semibold tracking-tight">{m.name}</div>
                  <div className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.22em] text-brand">{m.role}</div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
                  <div className="mt-4 flex gap-1.5">
                    {[Linkedin, Twitter, Github].map((Icon, idx) => (
                      <a key={idx} href="#" className="grid h-7 w-7 place-items-center rounded-md border border-border bg-background/60 text-muted-foreground transition-colors hover:text-foreground">
                        <Icon className="h-3.5 w-3.5" />
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Core Team */}
      <section className="mx-auto max-w-7xl px-5 pt-20 lg:px-8 lg:pt-24">
        <Reveal>
          <Eyebrow>Core Team</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight">Functional leads</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            The team driving each track of the club, from engineering to community.
          </p>
        </Reveal>
        <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {core.map((c, i) => (
            <Reveal key={c.role} delay={i * 0.04}>
              <div className="flex h-full items-center gap-4 bg-background p-6 transition-colors hover:bg-surface">
                <div className="grid h-11 w-11 flex-none place-items-center rounded-md border border-border bg-surface font-display text-base font-semibold text-foreground/85">
                  {c.role.charAt(0)}
                </div>
                <div className="min-w-0">
                  <div className="font-display text-base font-semibold tracking-tight">{c.name}</div>
                  <div className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{c.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Community Culture */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <Eyebrow>Community Culture</Eyebrow>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Built by students who <span className="text-brand-gradient">show up.</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                ABC is built by students who learn, organize, build, and grow together through
                workshops, events, and ecosystem collaboration.
              </p>
            </div>
            <div className="columns-2 gap-3 space-y-3 lg:col-span-7 sm:columns-3">
              {[
                web3waveImg,
                hashedImg,
                blockathonImg,
                blockworksImg,
                web3verseImg,
                graphicsImg,
              ].map((img, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div className="group relative break-inside-avoid overflow-hidden rounded-xl border border-border bg-surface/40 transition-all hover:border-brand/40">
                    <img
                      src={img}
                      alt=""
                      loading="lazy"
                      className="h-auto w-full object-contain transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
