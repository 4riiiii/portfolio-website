"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import type { Chapter } from "@/content/chapters";
import { transitionState } from "@/lib/transitionState";
import SmartImage from "./SmartImage";

/**
 * Full-width hero. Its rect (top-left, 100vw x 75vh) is where the carousel's image lands in
 * the shared-element transition, so the hand-off is seamless. Also remembers which chapter
 * you were on so "Back" returns to the same slide.
 */
export default function ChapterHero({ chapter }: { chapter: Chapter }) {
  useEffect(() => {
    try { sessionStorage.setItem("lastChapter", chapter.slug); } catch {}
  }, [chapter.slug]);

  // Coming from the expanding-image transition: already opaque. Otherwise fade in.
  const instant = typeof window !== "undefined" && transitionState.viaOverlay;

  return (
    <motion.div
      className="relative h-[75vh] w-full overflow-hidden bg-paper/5"
      initial={{ opacity: instant ? 1 : 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <SmartImage src={chapter.image} alt={`${chapter.title}: hero image`} seed={chapter.slug} priority sizes="100vw" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/70 to-transparent" />
    </motion.div>
  );
}
