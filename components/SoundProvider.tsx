"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import * as sound from "@/lib/sound";

type Ctx = { on: boolean | null; toggle: () => void };
const SoundContext = createContext<Ctx>({ on: null, toggle: () => {} });
export const useSound = () => useContext(SoundContext);

/**
 * Owns the on/off preference (remembered in localStorage), unlocks audio on the
 * first user gesture, and wires global hover + page-transition sounds.
 */
export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [on, setOn] = useState<boolean | null>(null);

  useEffect(() => {
    setOn(sound.loadPreference());

    const unlock = () => sound.unlock();
    const gestures = ["pointerdown", "keydown", "touchstart", "wheel"] as const;
    gestures.forEach((e) => window.addEventListener(e, unlock, { passive: true }));

    let lastEl: Element | null = null;
    const over = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      const el = (e.target as HTMLElement | null)?.closest("a, button, [data-hover]") ?? null;
      if (el && el !== lastEl) sound.hover();
      lastEl = el;
    };
    const click = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest("a");
      const href = a?.getAttribute("href");
      if (a && href && href.startsWith("/") && !e.defaultPrevented && !e.metaKey && !e.ctrlKey) sound.whoosh();
    };
    document.addEventListener("pointerover", over, { passive: true });
    document.addEventListener("click", click);
    return () => {
      gestures.forEach((e) => window.removeEventListener(e, unlock));
      document.removeEventListener("pointerover", over);
      document.removeEventListener("click", click);
    };
  }, []);

  const toggle = useCallback(() => {
    sound.unlock();
    const next = !sound.isEnabled();
    sound.setEnabled(next);
    setOn(next);
  }, []);

  return <SoundContext.Provider value={{ on, toggle }}>{children}</SoundContext.Provider>;
}
