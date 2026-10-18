import Reveal, { FadeIn } from "./Reveal";

/** Big page title block used by Work / About / Playground. */
export default function PageIntro({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <header className="wrap pt-40 md:pt-52">
      <p className="eyebrow mb-8">{eyebrow}</p>
      <Reveal as="h1" text={title} className="display text-display-xl" immediate />
      {intro && (
        <FadeIn delay={0.4} className="mt-8 max-w-2xl text-lead text-fg/70">
          <p>{intro}</p>
        </FadeIn>
      )}
    </header>
  );
}
