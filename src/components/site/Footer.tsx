import { Link } from "@tanstack/react-router";
import { Github, Twitter, MessagesSquare, Send } from "lucide-react";
import { Logo } from "./Logo";

const groups = [
  {
    title: "Ecosystem",
    links: [
      { to: "/about", label: "About ABC" },
      { to: "/team", label: "Team" },
      { to: "/partners", label: "Partners" },
      { to: "/community", label: "Community" },
    ],
  },
  {
    title: "Build",
    links: [
      { to: "/projects", label: "Projects" },
      { to: "/hackathons", label: "Hackathons" },
      { to: "/workshops", label: "Workshops" },
      { to: "/events", label: "Events" },
    ],
  },
  {
    title: "Learn",
    links: [
      { to: "/learning", label: "Learning Hub" },
      { to: "/resources", label: "Resources" },
      { to: "/gallery", label: "Gallery" },
      { to: "/contact", label: "Join Us" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border/80 bg-surface/40">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A student-led Web3 builder ecosystem at Acropolis Institute of Technology and
              Research, Indore. Builders, developers, and designers shipping the future.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {[
                { icon: Github, label: "GitHub" },
                { icon: Twitter, label: "X / Twitter" },
                { icon: MessagesSquare, label: "Discord" },
                { icon: Send, label: "Telegram" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-md border border-border bg-surface text-muted-foreground transition-all hover:border-brand/50 hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          {groups.map((g) => (
            <div key={g.title} className="md:col-span-2">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                {g.title}
              </div>
              <ul className="mt-4 space-y-2.5">
                {g.links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-sm text-foreground/80 transition-colors hover:text-foreground">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="md:col-span-1" />
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border/60 pt-6 md:flex-row md:items-center">
          <p className="font-mono text-[11px] text-muted-foreground">
            © {new Date().getFullYear()} Acropolis Blockchain Club. Built by students, for builders.
          </p>
          <p className="font-mono text-[11px] text-muted-foreground">
            ACROPOLIS · INDORE · IN
          </p>
        </div>
      </div>
    </footer>
  );
}
