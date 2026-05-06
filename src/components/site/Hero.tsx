import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight, Code2, Sparkles, Users, Zap } from "lucide-react";
import heroImg from "@/assets/hero-network.jpg";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative isolate min-h-screen overflow-hidden">
      {/* Background image with overlay */}
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <img
          src={heroImg}
          alt=""
          className="h-full w-full object-cover opacity-50"
          width={1536}
          height={1024}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/70 to-background" />
        <div className="absolute inset-0 bg-grid bg-grid-fade opacity-50" />
        <div className="absolute inset-0 bg-noise opacity-[0.6] mix-blend-overlay" />
      </motion.div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 pb-16 pt-32 lg:px-8">
        {/* Top tag */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 backdrop-blur-md"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            Cohort '26 · Now Onboarding Builders
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-8 max-w-5xl font-display text-[clamp(2.5rem,7vw,5.75rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-gradient"
        >
          Building the next generation of{" "}
          <span className="text-brand-gradient italic">Web3 innovators</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          A student-led blockchain builder community at Acropolis Institute, Indore — focused on
          real-world development, ecosystem collaboration, hackathons, and technical innovation.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-medium text-background shadow-elevated transition-all hover:translate-y-[-1px]"
          >
            Join the Community
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            to="/events"
            className="group inline-flex items-center gap-2 rounded-md border border-border bg-surface/60 px-5 py-3 text-sm font-medium text-foreground backdrop-blur-md transition-colors hover:bg-surface-elevated"
          >
            Explore Events
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Bottom KPI strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-4"
        >
          {[
            { icon: Users, k: "500+", v: "Builders" },
            { icon: Code2, k: "20+", v: "Projects" },
            { icon: Zap, k: "12", v: "Hackathons" },
            { icon: Sparkles, k: "40+", v: "Workshops" },
          ].map(({ icon: Icon, k, v }) => (
            <div key={v} className="bg-surface/80 p-5 backdrop-blur-md">
              <Icon className="h-4 w-4 text-brand" />
              <div className="mt-3 font-display text-2xl font-semibold tracking-tight">{k}</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {v}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
