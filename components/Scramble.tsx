"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;
const POOL = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#%&*+/=?";
const rand = () => POOL[Math.floor(Math.random() * POOL.length)];

/**
 * Text that resolves from random letters into the real thing, on load and whenever the
 * pointer moves over it. Each letter keeps a fixed-width slot (sized by the real letter),
 * so the layout never jitters while scrambling.
 */
export default function Scramble({ text, className = "" }: { text: string; className?: string }) {
  const root = useRef<HTMLSpanElement>(null);
  const [chars, setChars] = useState<string[]>(() => text.split(""));
  const [done, setDone] = useState<boolean[]>(() => text.split("").map(() => true));
  const raf = useRef(0);
  const running = useRef(false);

  const run = () => {
    if (running.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    running.current = true;
    const start = performance.now();
    const resolveAt = text.split("").map((_, i) => 300 + i * 140);
    let lastShuffle = 0;
    const frame = (now: number) => {
      const t = now - start;
      const finished = resolveAt.map((r) => t >= r);
      if (now - lastShuffle > 55 || finished.every(Boolean)) {
        lastShuffle = now;
        setChars(text.split("").map((c, i) => (finished[i] ? c : rand())));
        setDone(finished);
      }
      if (finished.every(Boolean)) {
        running.current = false;
        return;
      }
      raf.current = requestAnimationFrame(frame);
    };
    raf.current = requestAnimationFrame(frame);
  };

  // scramble on load (layout effect so there's no flash of the final word first)
  useIso(() => {
    setChars(text.split("").map(() => rand()));
    setDone(text.split("").map(() => false));
    run();
    return () => cancelAnimationFrame(raf.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  // scramble when the pointer passes over the word (the word itself ignores pointer events
  // so slides underneath stay clickable, hence the rect check)
  useEffect(() => {
    let inside = false;
    const move = (e: PointerEvent) => {
      const r = root.current?.getBoundingClientRect();
      if (!r) return;
      const hit = e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
      if (hit && !inside) run();
      inside = hit;
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return (
    <span ref={root} className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden className="inline-flex">
        {text.split("").map((c, i) => (
          <span key={i} className="relative inline-block">
            <span className="invisible">{c}</span>
            <span className={`absolute inset-0 flex items-center justify-center transition-opacity duration-150 ${done[i] ? "opacity-100" : "opacity-60"}`}>
              {chars[i] ?? c}
            </span>
          </span>
        ))}
      </span>
    </span>
  );
}
