"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

/** Desktop-only cursor: a small dot that swells into a "View" disc over slides. */
export default function Cursor() {
  const el = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  const [label, setLabel] = useState("");
  const [hot, setHot] = useState(false);
  const [seen, setSeen] = useState(false);
  const pathname = usePathname();

  // The element under a still pointer changes when the page does: reset the label.
  useEffect(() => {
    setLabel("");
    setHot(false);
  }, [pathname]);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;
    setOn(true);
    document.documentElement.classList.add("has-cursor");

    let x = -100, y = -100, cx = -100, cy = -100, id = 0;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const move = (e: PointerEvent) => {
      x = e.clientX; y = e.clientY;
      setSeen(true);
      const t = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-cursor], a, button");
      setLabel(t?.dataset.cursor ?? "");
      setHot(!!t);
    };
    const tick = () => {
      const k = reduce ? 1 : 0.22;
      cx += (x - cx) * k; cy += (y - cy) * k;
      if (el.current) el.current.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      id = requestAnimationFrame(tick);
    };
    window.addEventListener("pointermove", move, { passive: true });
    id = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("pointermove", move);
      cancelAnimationFrame(id);
      document.documentElement.classList.remove("has-cursor");
    };
  }, []);

  if (!on) return null;
  return (
    <div ref={el} aria-hidden className="pointer-events-none fixed left-0 top-0 z-[90] will-change-transform">
      <div
        className="-ml-10 -mt-10 flex h-20 w-20 items-center justify-center rounded-full bg-accent text-label font-medium uppercase text-ink transition-[transform,opacity] duration-300 ease-out"
        style={{ opacity: seen ? 1 : 0, transform: `scale(${label ? 1 : hot ? 0.28 : 0.12})` }}
      >
        {label}
      </div>
    </div>
  );
}
