"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { chapters, site } from "@/content/chapters";
import { INTRO_MS, markIntroSeen, shouldIntro } from "@/lib/intro";
import { computeLayout, titleMetrics } from "@/lib/carouselLayout";
import Scramble from "./Scramble";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * ARIKA sits at the bottom centre, sized to fit the free band between the slide captions and
 * the footer, so nothing overlaps. On the first visit it starts alone, huge, in the middle of
 * a black screen, scrambles into place, then shrinks and glides down as the slides sweep in.
 */
export default function HeroTitle() {
  const box = useRef<HTMLDivElement>(null);
  const desc = useRef<HTMLParagraphElement>(null);

  useIso(() => {
    const el = box.current;
    const p = desc.current;
    if (!el || !p) return;

    const size = () => {
      const footer = document.querySelector("footer");
      const m = titleMetrics(computeLayout(window.innerWidth, window.innerHeight, chapters.length), footer?.getBoundingClientRect().height ?? 64);
      el.style.fontSize = `${m.fs}px`;
      el.style.bottom = `${m.bottom}px`;
      return m.fs;
    };
    const fs = size();
    el.style.opacity = "1";
    p.style.opacity = "1";
    window.addEventListener("resize", size);

    let t: ReturnType<typeof setTimeout> | undefined;
    if (shouldIntro()) {
      // Start big and centred, description hidden.
      const bigFs = Math.min(window.innerWidth * (window.innerWidth < 768 ? 0.34 : 0.3), window.innerHeight * 0.38);
      const scale = Math.max(1, bigFs / fs);
      const r = el.getBoundingClientRect();
      const dy = window.innerHeight / 2 - (r.top + r.height / 2);
      el.style.transition = "none";
      el.style.transform = `translate3d(0, ${dy}px, 0) scale(${scale})`;
      p.style.transition = "none";
      p.style.opacity = "0";
      t = setTimeout(() => {
        el.style.transition = "transform 1.2s cubic-bezier(0.76, 0, 0.24, 1)";
        el.style.transform = "translate3d(0, 0, 0) scale(1)";
        p.style.transition = "opacity 0.9s ease 0.8s";
        p.style.opacity = "1";
        markIntroSeen();
      }, INTRO_MS);
    }
    return () => {
      window.removeEventListener("resize", size);
      if (t) clearTimeout(t);
    };
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
        style={{ opacity: 0, fontSize: "120px", bottom: 64 }}
        className="intro-hidden pointer-events-none fixed inset-x-0 z-[5] flex justify-center px-[var(--pad)] text-center text-paper"
      >
        <h1 className="font-display font-bold leading-[0.82] tracking-[-0.05em]" style={{ fontSize: "1em" }}>
          <Scramble text={site.display} />
        </h1>
      </div>
    </>
  );
}
