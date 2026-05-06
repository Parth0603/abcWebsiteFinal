import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { MessagesSquare, Send, Github, Twitter } from "lucide-react";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community — ABC" },
      { name: "description", content: "Join the ABC community on Discord, Telegram, and GitHub." },
      { property: "og:title", content: "ABC Community" },
      { property: "og:description", content: "A network of builders, mentors, and ecosystem partners." },
    ],
  }),
  component: Community,
});

const channels = [
  { icon: MessagesSquare, name: "Discord", desc: "Daily builder chatter, hack-night coordination, voice rooms.", cta: "Join server" },
  { icon: Send, name: "Telegram", desc: "Announcements, event reminders, and ecosystem signal.", cta: "Open channel" },
  { icon: Github, name: "GitHub", desc: "Open-source projects, learning repos, and starter templates.", cta: "Browse repos" },
  { icon: Twitter, name: "X / Twitter", desc: "Short-form updates, threads, and member shout-outs.", cta: "Follow" },
];

function Community() {
  return (
    <>
      <PageHeader
        eyebrow="Community"
        title={<>Where the <span className="text-brand-gradient">builders live.</span></>}
        description="ABC isn't a Wednesday meeting — it's a always-on network of students, mentors, and ecosystem operators in the same channels."
      />
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {channels.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.05}>
              <a href="#" className="group flex h-full flex-col justify-between rounded-xl border border-border bg-surface/40 p-7 transition-all hover:border-brand/40 hover:bg-surface">
                <div>
                  <c.icon className="h-6 w-6 text-brand" />
                  <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight">{c.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                </div>
                <div className="mt-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground transition-colors group-hover:text-brand">
                  {c.cta} →
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
