import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[100svh] flex-col items-start justify-center gap-6 px-[var(--pad)]">
      <h1 className="font-display text-[clamp(3rem,12vw,12rem)] font-bold leading-[0.9] tracking-[-0.05em]">Lost chapter</h1>
      <Link href="/" className="label u-link">Back to chapters</Link>
    </div>
  );
}
