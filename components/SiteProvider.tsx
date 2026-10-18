"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";

type Ctx = {
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
  creditsOpen: boolean;
  setCreditsOpen: (v: boolean) => void;
  audioOn: boolean;
  toggleAudio: () => void;
};

const SiteContext = createContext<Ctx | null>(null);

export const useSite = () => {
  const c = useContext(SiteContext);
  if (!c) throw new Error("useSite must be used inside <SiteProvider>");
  return c;
};

/**
 * A soft ambient pad, synthesised with the Web Audio API so there's no audio
 * file to license or download. Off by default; only starts on a user click.
 */
function createAmbient() {
  const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
  const ctx = new AC();
  const master = ctx.createGain();
  master.gain.value = 0;
  const filter = ctx.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.value = 700;
  filter.connect(master);
  master.connect(ctx.destination);

  // A open-fifth chord, gently detuned, with a slow filter wobble.
  const freqs = [110, 164.81, 220, 329.63];
  const oscs = freqs.flatMap((f, i) =>
    [-4, 4].map((detune) => {
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = i % 2 ? "triangle" : "sine";
      o.frequency.value = f;
      o.detune.value = detune;
      g.gain.value = 0.05 / (i + 1);
      o.connect(g);
      g.connect(filter);
      o.start();
      return o;
    })
  );
  const lfo = ctx.createOscillator();
  const lfoGain = ctx.createGain();
  lfo.frequency.value = 0.07;
  lfoGain.gain.value = 260;
  lfo.connect(lfoGain);
  lfoGain.connect(filter.frequency);
  lfo.start();

  return {
    async on() {
      await ctx.resume();
      master.gain.cancelScheduledValues(ctx.currentTime);
      master.gain.linearRampToValueAtTime(0.5, ctx.currentTime + 2.5);
    },
    off() {
      master.gain.cancelScheduledValues(ctx.currentTime);
      master.gain.linearRampToValueAtTime(0, ctx.currentTime + 1);
      setTimeout(() => ctx.suspend(), 1100);
    },
    dispose() {
      oscs.forEach((o) => o.stop());
      lfo.stop();
      ctx.close();
    },
  };
}

export function SiteProvider({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [creditsOpen, setCreditsOpen] = useState(false);
  const [audioOn, setAudioOn] = useState(false);
  const ambient = useRef<ReturnType<typeof createAmbient> | null>(null);

  const toggleAudio = useCallback(() => {
    setAudioOn((prev) => {
      const next = !prev;
      if (next) {
        ambient.current ??= createAmbient();
        void ambient.current.on();
      } else {
        ambient.current?.off();
      }
      return next;
    });
  }, []);

  useEffect(() => () => ambient.current?.dispose(), []);

  return (
    <SiteContext.Provider value={{ menuOpen, setMenuOpen, creditsOpen, setCreditsOpen, audioOn, toggleAudio }}>
      {children}
    </SiteContext.Provider>
  );
}
