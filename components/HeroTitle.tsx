"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { site } from "@/content/chapters";
import { INTRO_MS, markIntroSeen, shouldIntro } from "@/lib/intro";
import Scramble from "./Scramble";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * ARIKA sits at the bottom centre, *behind* the slides (the carousel is layered above it).
 * On the first visit it starts alone in the middle of a black screen, scrambles into place,
 * then glides down to the bottom while the slides sweep in. Both layers ignore the pointer.
 */
export default function HeroTitle() {
  const box = useRef<HTMLDivElement>(null);
  const desc = useRef<HTMLParagraphElement>(null);

  useIso(() => {
    const el = box.current;
    const p = desc.current;
    if (!el || !p) return;
    el.style.opacity = "1";
    p.style.opacity = "1";
    if (!shouldIntro()) return;

    // Start from the vertical centre of the screen; description hidden.
    const r = el.getBoundingClientRect();
    const dy = window.innerHeight / 2 - (r.top + r.height / 2);
    el.style.transition = "none";
    el.style.transform = `translate3d(0, ${dy}px, 0)`;
    p.style.transition = "none";
    p.style.opacity = "0";

    const t = setTimeout(() => {
      el.style.transition = "transform 1.2s cubic-bezier(0.76, 0, 0.24, 1)";
      el.style.transform = "translate3d(0, 0, 0)";
      p.style.transition = "opacity 0.9s ease 0.8s";
      p.style.opacity = "1";
      markIntroSeen();
    }, INTRO_MS);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <p
        ref={desc}
        style={{ opacity: 0 }}
        className="intro-hidden pointer-events-none fixed inset-x-0 top-[68px] z-[5] mx-auto max-w-[24rem] px-[var(--pad)] text-center text-[13px] leading-snug text-paper/80 md:top-[72px] md:max-w-[36rem] md:text-[15px]"
      >
        {site.description}
      </p>
      <div
        ref={box}
        style={{ opacity: 0 }}
        className="intro-hidden pointer-events-none fixed inset-x-0 bottom-0 z-[5] flex justify-center px-[var(--pad)] pb-[104px] text-center text-paper will-change-transform sm:pb-[52px]"
      >
        <h1 className="font-display text-[34vw] font-bold leading-[0.82] tracking-[-0.05em] md:text-[min(30vw,38vh)]">
          <Scramble text={site.display} />
        </h1>
      </div>
    </>
  );
}
