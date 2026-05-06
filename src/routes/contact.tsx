import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { useState } from "react";
import { ArrowUpRight, Mail, MapPin, MessagesSquare } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Join Us — ABC" },
      { name: "description", content: "Apply to join the Acropolis Blockchain Club's next cohort." },
      { property: "og:title", content: "Join ABC" },
      { property: "og:description", content: "Apply to the next builder cohort." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHeader
        eyebrow="Join Us"
        title={<>Apply to the <span className="text-brand-gradient">next cohort.</span></>}
        description="Tell us what you've been building (or want to build). We read every application."
      />
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="space-y-7">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand">Reach us</div>
                <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight">Talk to ABC.</h2>
                <p className="mt-3 text-muted-foreground">
                  We respond within 48 hours. For partnerships, mention "Sponsorship" in the subject.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { icon: Mail, t: "hello@abc.acropolis.in" },
                  { icon: MessagesSquare, t: "Discord · ABC Builders" },
                  { icon: MapPin, t: "AITR Campus, Indore, MP" },
                ].map((c, i) => (
                  <div key={i} className="flex items-center gap-4 rounded-xl border border-border bg-surface/40 p-4">
                    <div className="grid h-9 w-9 place-items-center rounded-md border border-border bg-background/60">
                      <c.icon className="h-4 w-4 text-brand" />
                    </div>
                    <div className="text-sm">{c.t}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="rounded-xl border border-border bg-surface/40 p-8 lg:p-10"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" name="name" placeholder="Surabhi Solanki" />
                <Field label="Email" name="email" type="email" placeholder="you@aitr.in" />
                <Field label="Year / Branch" name="year" placeholder="3rd year, CSE" />
                <Field label="GitHub / Portfolio" name="link" placeholder="github.com/handle" />
              </div>
              <div className="mt-5">
                <label className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">What are you building?</label>
                <textarea
                  rows={5}
                  placeholder="A wallet. A protocol. A research paper. A playground. Tell us."
                  className="mt-2 w-full rounded-md border border-border bg-background/60 px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:border-brand focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-foreground px-6 py-3 text-sm font-medium text-background shadow-elevated transition-transform hover:-translate-y-0.5"
              >
                {sent ? "Application sent" : "Send application"} <ArrowUpRight className="h-4 w-4" />
              </button>
              {sent && <p className="mt-3 text-sm text-brand">Thanks. We'll be in touch within 48 hours.</p>}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{label}</label>
      <input
        id={name} name={name} type={type} placeholder={placeholder}
        className="mt-2 w-full rounded-md border border-border bg-background/60 px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:border-brand focus:outline-none"
      />
    </div>
  );
}
