"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

type Props = { value: number; prefix?: string; suffix?: string; className?: string };

const fmt = (n: number) => n.toLocaleString("en-IE");

/** Counts up from 0 when scrolled into view. Server render and no-JS show the final value. */
export default function Counter({ value, prefix = "", suffix = "", className = "" }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const reduce = useReducedMotion();
  const [n, setN] = useState(value);

  useEffect(() => {
    if (!inView || reduce) return;
    const c = animate(0, value, {
      duration: 2.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => c.stop();
  }, [inView, reduce, value]);

  const full = `${prefix}${fmt(value)}${suffix}`;
  return (
    <span ref={ref} className={`relative inline-block tabular-nums ${className}`}>
      <span className="sr-only">{full}</span>
      {/* invisible full-width copy reserves space so nothing shifts while counting */}
      <span aria-hidden className="invisible">{full}</span>
      <span aria-hidden className="absolute inset-0">{prefix}{fmt(n)}{suffix}</span>
    </span>
  );
}
