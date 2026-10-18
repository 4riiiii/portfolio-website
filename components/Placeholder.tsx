type Tone = "accent" | "ink" | "sand" | "mist";

const tones: Record<Tone, string> = {
  accent: "bg-accent text-[#111110]",
  ink: "bg-fg text-bg",
  sand: "bg-fg/10 text-fg",
  mist: "bg-fg/[0.04] text-fg border border-fg/15",
};

/** Tasteful stand-in for a real image: a solid block with a label. Swap for <Image> later. */
export default function Placeholder({
  label, tone = "sand", ratio = "4 / 3", className = "",
}: { label: string; tone?: Tone; ratio?: string; className?: string }) {
  return (
    <div
      role="img"
      aria-label={`Placeholder image: ${label}`}
      className={`relative w-full overflow-hidden ${tones[tone]} ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <span className="absolute left-4 top-4 text-small uppercase tracking-[0.12em] opacity-70">Image</span>
      <span className="absolute bottom-4 left-4 right-4 text-small uppercase tracking-[0.12em]">{label}</span>
    </div>
  );
}
