import { Link } from "@tanstack/react-router";
import clubLogo from "@/assets/images/clubLogo.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`group inline-flex items-center gap-2.5 ${className}`}>
      <div className="relative h-8 w-8 overflow-hidden rounded-md bg-surface border border-border/50 shadow-glow">
        <img 
          src={clubLogo} 
          alt="ABC Logo" 
          className="h-full w-full object-contain p-1 transition-transform duration-500 group-hover:scale-110" 
        />
      </div>
      <span className="flex flex-col leading-none">
        <span className="font-display text-sm font-semibold tracking-tight">Acropolis Blockchain Club</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">ABC · Indore</span>
      </span>
    </Link>
  );
}
