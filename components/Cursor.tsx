"use client";

import { useEffect, useRef, useState } from "react";

/** Desktop-only follower ring. Grows on interactive elements, shows a label on [data-cursor-label]. */
export default function Cursor() {
  const ring = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState("");
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    setEnabled(true);

    let x = -100, y = -100, cx = -100, cy = -100, id = 0;
    const move = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      const t = (e.target as HTMLElement | null)?.closest<HTMLElement>("a, button, [data-cursor-label], summary");
      setHover(!!t);
      setLabel(t?.dataset.cursorLabel ?? "");
    };
    const leave = () => { x = -100; y = -100; };
    const tick = () => {
      cx += (x - cx) * 0.2;
      cy += (y - cy) * 0.2;
      if (ring.current) ring.current.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      id = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseleave", leave);
    id = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      cancelAnimationFrame(id);
    };
  }, []);

  if (!enabled) return null;
  return (
    <div ref={ring} aria-hidden className="cursor-ring pointer-events-none fixed left-0 top-0 z-[100] will-change-transform">
      <div
        className="-ml-5 -mt-5 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-[0.65rem] font-medium uppercase tracking-wider text-[#111110] transition-[transform,opacity] duration-300 ease-out"
        style={{
          transform: `scale(${label ? 2.4 : hover ? 1.8 : 0.35})`,
          opacity: label ? 1 : hover ? 0.25 : 0.8,
          mixBlendMode: label ? "normal" : "multiply",
        }}
      >
        <span className={label ? "scale-[0.42]" : "hidden"}>{label}</span>
      </div>
    </div>
  );
}
