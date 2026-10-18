"use client";

import type { PlayCard } from "@/content/site";
import { isTodo } from "@/lib/todo";
import { FadeIn } from "./Reveal";
import LinkButton from "./LinkButton";

const tones = {
  accent: "bg-accent text-[#111110]",
  ink: "bg-fg text-bg",
  sand: "bg-fg/10 text-fg",
  mist: "border border-fg/15 bg-fg/[0.04] text-fg",
} as const;

/** Masonry card. Hover/focus lifts the card and slides in the blurb as a preview. */
export default function PlayCardView({ card }: { card: PlayCard }) {
  return (
    <FadeIn>
      <article
        tabIndex={0}
        data-cursor-label="Peek"
        className={`group relative overflow-hidden ${tones[card.tone]} transition-transform duration-500 ease-out hover:-translate-y-1 focus:-translate-y-1`}
        style={{ aspectRatio: card.ratio }}
      >
        <div className="absolute inset-0 flex flex-col justify-between p-5">
          <p className="text-small uppercase tracking-[0.12em] opacity-70">{card.kind}</p>
          <h3 className={`display text-display-sm transition-transform duration-500 ease-out group-hover:-translate-y-24 group-focus:-translate-y-24 ${isTodo(card.title) ? "!font-sans !text-base" : ""}`}>
            {card.title}
          </h3>
        </div>
        <div className="absolute inset-x-0 bottom-0 translate-y-full bg-bg p-5 text-fg transition-transform duration-500 ease-out group-hover:translate-y-0 group-focus:translate-y-0">
          <p className="mb-3 text-small leading-snug">{card.blurb}</p>
          {card.link && <LinkButton link={card.link} />}
        </div>
      </article>
    </FadeIn>
  );
}
