"use client";

import { createElement, useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

type Tok = { word: string; em: boolean };

/** "Hello *big world*" -> tokens, with *…* marking accent-italic words. */
function tokenize(text: string): Tok[] {
  let em = false;
  return text.split(/\s+/).filter(Boolean).map((raw) => {
    let w = raw;
    if (w.startsWith("*")) { em = true; w = w.slice(1); }
    const closes = w.endsWith("*");
    if (closes) w = w.slice(0, -1);
    const tok = { word: w, em };
    if (closes) em = false;
    return tok;
  });
}

export const plain = (text: string) => text.replace(/\*/g, "");

type Props = {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "div" | "span";
  className?: string;
  /** seconds before the first line starts */
  delay?: number;
  /** animate on mount instead of waiting for scroll (use for above-the-fold) */
  immediate?: boolean;
};

/** Headline that rises into view one *rendered line* at a time. */
export default function Reveal({ text, as = "h2", className = "", delay = 0, immediate = false }: Props) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -12% 0px" });
  const [lines, setLines] = useState<number[]>([]);
  const [mounted, setMounted] = useState(false);
  const toks = tokenize(text);

  useEffect(() => setMounted(true), []);

  useIso(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => {
      const words = Array.from(el.querySelectorAll<HTMLElement>(".rv-w"));
      const tops = Array.from(new Set(words.map((w) => w.offsetTop))).sort((a, b) => a - b);
      setLines(words.map((w) => tops.indexOf(w.offsetTop)));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    void document.fonts?.ready.then(measure);
    return () => ro.disconnect();
  }, [text]);

  return createElement(
    as,
    { ref, className: `${className} ${(immediate && mounted) || inView ? "rv-on" : ""}` },
    <span className="sr-only">{plain(text)}</span>,
    <span aria-hidden="true">
      {toks.map((t, i) => (
        <span key={i}>
          <span className="rv-w">
            <span className={`rv-i ${t.em ? "rv-em" : ""}`} style={{ ["--d" as string]: `${delay + (lines[i] ?? 0) * 0.13}s` }}>
              {t.word}
            </span>
          </span>
          {i < toks.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}

/** Fades + lifts a block into view. */
export function FadeIn({
  children, delay = 0, className = "", as = "div",
}: { children: React.ReactNode; delay?: number; className?: string; as?: "div" | "li" | "p" | "section" }) {
  const reduce = useReducedMotion();
  const M = motion[as];
  if (reduce) return createElement(as, { className }, children);
  return (
    <M
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </M>
  );
}
