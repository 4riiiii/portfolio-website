"use client";

import { useEffect, useRef } from "react";
import type { Chapter } from "@/content/chapters";
import * as sound from "@/lib/sound";
import SmartImage from "./SmartImage";
import { INTRO_MS, shouldIntro } from "@/lib/intro";
import { computeLayout, type Layout } from "@/lib/carouselLayout";
import { useChapterTransition } from "./TransitionLayer";

/** Distance of slide `i` from the screen centre, wrapped so slides loop forever in both directions. */
const wrapDist = (i: number, cur: number, L: Layout) => {
  const v = i * L.step - cur;
  const half = L.total / 2;
  return ((((v + half) % L.total) + L.total) % L.total) - half;
};

// Used for the server render so off-screen slides start off-screen (lets lazy-loading work).
const SSR_LAYOUT = computeLayout(1440, 900, 16);

/**
 * Full-screen, infinitely looping carousel. Slides never "end": each of the N slides is
 * positioned modulo the total strip width, so the set effectively repeats forever.
 * Input: wheel / trackpad, mouse drag, touch swipe and arrow keys, with eased inertia.
 */
export default function Carousel({ chapters }: { chapters: Chapter[] }) {
  const root = useRef<HTMLElement>(null);
  const items = useRef<(HTMLLIElement | null)[]>([]);
  const frames = useRef<(HTMLDivElement | null)[]>([]);
  const pars = useRef<(HTMLDivElement | null)[]>([]);
  const caps = useRef<(HTMLDivElement | null)[]>([]);
  const { open } = useChapterTransition();
  const openRef = useRef(open);
  openRef.current = open;
  const n = chapters.length;

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    document.documentElement.classList.add("is-home");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let L = computeLayout(window.innerWidth, window.innerHeight, n);
    let tgt = 0;
    let cur = 0;
    let lastIdx = 0;
    let introDone = reduce;
    let dragged = false;

    // Come back to the chapter we left from.
    try {
      const slug = sessionStorage.getItem("lastChapter");
      const i = chapters.findIndex((c) => c.slug === slug);
      if (i >= 0) tgt = i * L.step;
    } catch {}
    cur = reduce ? tgt : tgt - L.step * 4; // intro: slides sweep in
    // First visit: slides stay hidden until ARIKA has settled, then sweep in as she drops to the bottom.
    const intro = shouldIntro();
    const startAt = performance.now() + (intro ? INTRO_MS + 750 : 0);
    let revealed = false;
    el.style.opacity = intro ? "0" : "1";
    lastIdx = Math.round(cur / L.step);

    const layout = () => {
      items.current.forEach((li) => {
        if (!li) return;
        li.style.width = `${L.sw}px`;
        li.style.top = `${L.top}px`;
      });
      frames.current.forEach((f) => f && (f.style.height = `${L.sh}px`));
    };

    const render = () => {
      for (let i = 0; i < n; i++) {
        const li = items.current[i];
        if (!li) continue;
        const d = wrapDist(i, cur, L);
        const x = L.vw / 2 - L.sw / 2 + d;
        const near = Math.min(Math.abs(d) / (L.vw * 0.6), 1);
        li.style.transform = `translate3d(${x}px,0,0) scale(${1 - near * 0.1})`;
        const p = pars.current[i];
        if (p) p.style.transform = `translate3d(${-d * 0.1}px,0,0) scale(1.25)`;
        const c = caps.current[i];
        if (c) c.style.opacity = String(1 - Math.min(Math.abs(d) / L.step, 1) * 0.6);
      }
    };

    // ── input ────────────────────────────────────────────────────────────────
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const unit = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? L.vh : 1;
      const raw = (Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY) * unit;
      tgt += Math.max(-320, Math.min(320, raw)) * 1.1;
    };

    let down = false, moved = 0, lastX = 0, lastT = 0, vx = 0, captured = false;
    const onDown = (e: PointerEvent) => {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      down = true; moved = 0; vx = 0; captured = false;
      lastX = e.clientX; lastT = performance.now();
    };
    const onMove = (e: PointerEvent) => {
      if (!down) return;
      const now = performance.now();
      const dx = e.clientX - lastX;
      moved += Math.abs(dx);
      if (moved > 5 && !captured) {
        captured = true;
        try { el.setPointerCapture(e.pointerId); } catch {}
      }
      if (captured) {
        tgt -= dx;
        cur += -dx * 0.6; // follow the finger closely while dragging
        vx = 0.75 * vx + 0.25 * (dx / Math.max(now - lastT, 1));
      }
      lastX = e.clientX; lastT = now;
    };
    const onUp = (e: PointerEvent) => {
      if (!down) return;
      down = false;
      if (captured) {
        tgt -= vx * 240; // inertia
        dragged = true;
        setTimeout(() => (dragged = false), 0);
        try { el.releasePointerCapture(e.pointerId); } catch {}
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        const dir = e.key === "ArrowRight" ? 1 : -1;
        tgt = (Math.round(tgt / L.step) + dir) * L.step;
      }
    };
    const onResize = () => {
      const idx = cur / L.step;
      const tIdx = tgt / L.step;
      L = computeLayout(window.innerWidth, window.innerHeight, n);
      cur = idx * L.step;
      tgt = tIdx * L.step;
      layout();
    };
    const onFocusIn = (e: FocusEvent) => {
      const li = (e.target as HTMLElement).closest("li");
      const i = items.current.indexOf(li as HTMLLIElement);
      if (i < 0) return;
      const base = i * L.step;
      tgt = base + Math.round((tgt - base) / L.total) * L.total;
    };
    const onClickCapture = (e: MouseEvent) => {
      if (dragged) { e.preventDefault(); e.stopPropagation(); }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerup", onUp);
    el.addEventListener("pointercancel", onUp);
    el.addEventListener("focusin", onFocusIn);
    el.addEventListener("click", onClickCapture, true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);

    // ── loop ─────────────────────────────────────────────────────────────────
    layout();
    render();
    let prev = performance.now();
    let id = requestAnimationFrame(function frame(now) {
      const dt = Math.min(now - prev, 50);
      prev = now;
      if (!revealed && now >= startAt) {
        revealed = true;
        el.style.transition = "opacity 0.7s ease";
        el.style.opacity = "1";
      }
      const k = now < startAt ? 0 : reduce ? 1 : 1 - Math.pow(1 - 0.085, dt / 16.67);
      cur += (tgt - cur) * k;
      if (Math.abs(tgt - cur) < 0.05) cur = tgt;
      if (!introDone && Math.abs(tgt - cur) < L.step * 0.3) introDone = true;
      const idx = Math.round(cur / L.step);
      if (idx !== lastIdx) {
        lastIdx = idx;
        if (introDone) sound.tick(); // a slide just passed the centre
      }
      render();
      id = requestAnimationFrame(frame);
    });

    return () => {
      cancelAnimationFrame(id);
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerup", onUp);
      el.removeEventListener("pointercancel", onUp);
      el.removeEventListener("focusin", onFocusIn);
      el.removeEventListener("click", onClickCapture, true);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
      document.documentElement.classList.remove("is-home");
    };
  }, [chapters, n]);

  return (
    <section ref={root} aria-label="Chapters" className="fixed inset-0 z-10 touch-none select-none overflow-hidden"
      style={{ opacity: 0 }}>
      <ul>
        {chapters.map((c, i) => {
          const d = wrapDist(i, 0, SSR_LAYOUT);
          const x = SSR_LAYOUT.vw / 2 - SSR_LAYOUT.sw / 2 + d;
          return (
            <li
              key={c.slug}
              ref={(r) => { items.current[i] = r; }}
              className="absolute left-0 will-change-transform"
              style={{ width: SSR_LAYOUT.sw, top: SSR_LAYOUT.top, transform: `translate3d(${x}px,0,0)` }}
            >
              <a
                href={`/chapters/${c.slug}`}
                data-cursor="View"
                draggable={false}
                aria-label={`${c.title}, ${c.tag}`}
                className="group block"
                onClick={(e) => {
                  if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
                  e.preventDefault();
                  const frame = frames.current[i];
                  if (frame) openRef.current(c.slug, frame);
                }}
              >
                <div
                  ref={(r) => { frames.current[i] = r; }}
                  className="relative overflow-hidden bg-paper/5"
                  data-pos={c.position}
                  data-fit={c.fit}
                  data-bg={c.bg}
                  style={{ height: SSR_LAYOUT.sh, background: c.bg }}
                >
                  <div ref={(r) => { pars.current[i] = r; }} className="absolute inset-0 will-change-transform">
                    <SmartImage
                      src={c.image}
                      alt=""
                      seed={c.slug}
                      fit={c.fit}
                      sizes="(min-width: 768px) 32vw, 72vw"
                      priority={i < 3}
                      className="carousel-img brightness-[0.82] transition-[filter] duration-500 ease-out group-hover:brightness-100"
                      style={{ objectPosition: c.position }}
                    />
                  </div>
                </div>
                <div ref={(r) => { caps.current[i] = r; }} className="mt-3 flex flex-col gap-0.5">
                  <span className="font-display text-[15px] font-medium leading-tight">{c.title}</span>
                  <span className="label text-paper/55">{c.tag}</span>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
