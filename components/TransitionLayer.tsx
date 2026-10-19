"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { transitionState } from "@/lib/transitionState";

type Rect = { top: number; left: number; width: number; height: number };
type T = { slug: string; src: string; pos?: string; fit?: string; bg?: string; from: Rect; to: Rect };
type Phase = "grow" | "wait" | "fade";

const Ctx = createContext<{ open: (slug: string, frame: HTMLElement) => void }>({ open: () => {} });
export const useChapterTransition = () => useContext(Ctx);

/** Detail-page hero is full width and this tall (keep in sync with ChapterHero). */
export const HERO_VH = 0.75;

/**
 * Shared-element transition: the clicked slide's image is cloned into a fixed layer, grows
 * to the exact rect of the detail page's hero, the route changes underneath it, and the
 * layer then fades out to reveal the identical hero.
 */
export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [t, setT] = useState<T | null>(null);
  const [phase, setPhase] = useState<Phase>("grow");
  const phaseRef = useRef<Phase>("grow");
  phaseRef.current = phase;

  const open = useCallback(
    (slug: string, frame: HTMLElement) => {
      const href = `/chapters/${slug}`;
      try { sessionStorage.setItem("lastChapter", slug); } catch {}
      const img = frame.querySelector("img");
      if (reduce || !img) {
        router.push(href);
        return;
      }
      const r = frame.getBoundingClientRect();
      transitionState.viaOverlay = true;
      setPhase("grow");
      setT({
        slug,
        src: img.currentSrc || img.src,
        pos: frame.dataset.pos,
        fit: frame.dataset.fit,
        bg: frame.dataset.bg,
        from: { top: r.top, left: r.left, width: r.width, height: r.height },
        to: { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight * HERO_VH },
      });
      router.prefetch(href);
    },
    [reduce, router]
  );

  // Once the new route is on screen under the layer, let it fade away.
  useEffect(() => {
    if (!t || phase !== "wait" || pathname !== `/chapters/${t.slug}`) return;
    let a = requestAnimationFrame(() => (a = requestAnimationFrame(() => setPhase("fade"))));
    return () => cancelAnimationFrame(a);
  }, [t, phase, pathname]);

  return (
    <Ctx.Provider value={{ open }}>
      {children}
      {t && (
        <motion.div
          aria-hidden
          className="pointer-events-none fixed z-[80] overflow-hidden bg-ink"
          style={t.bg ? { background: t.bg } : undefined}
          initial={{ ...t.from, opacity: 1 }}
          animate={{ ...t.to, opacity: phase === "fade" ? 0 : 1 }}
          transition={{
            top: { duration: 0.95, ease: [0.76, 0, 0.24, 1] },
            left: { duration: 0.95, ease: [0.76, 0, 0.24, 1] },
            width: { duration: 0.95, ease: [0.76, 0, 0.24, 1] },
            height: { duration: 0.95, ease: [0.76, 0, 0.24, 1] },
            opacity: { duration: 0.4 },
          }}
          onAnimationComplete={() => {
            if (phaseRef.current === "grow") {
              router.push(`/chapters/${t.slug}`);
              setPhase("wait");
            } else if (phaseRef.current === "fade") {
              transitionState.viaOverlay = false;
              setT(null);
            }
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={t.src} alt="" className={`h-full w-full ${t.fit === "contain" ? "object-contain" : "object-cover"}`} style={{ objectPosition: t.pos }} draggable={false} />
        </motion.div>
      )}
    </Ctx.Provider>
  );
}
