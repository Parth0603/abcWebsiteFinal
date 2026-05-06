import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`group inline-flex items-center gap-2.5 ${className}`}>
      <span className="relative grid h-8 w-8 place-items-center rounded-md bg-brand-gradient shadow-glow">
        <span className="font-display text-[13px] font-bold text-white">A</span>
        <span className="absolute inset-0 rounded-md ring-1 ring-white/10" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-sm font-semibold tracking-tight">Acropolis Blockchain Club</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">ABC · Indore</span>
      </span>
    </Link>
  );
}
