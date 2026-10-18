/**
 * Tiny UI sound engine, synthesised with the Web Audio API (no audio files).
 * Browsers only allow audio after a user gesture, so the AudioContext is created
 * lazily on the first click / key / touch. Everything is deliberately quiet.
 */
type Kind = "tick" | "hover" | "whoosh";

let ctx: AudioContext | null = null;
let master: GainNode | null = null;
let enabled = true;
let noiseBuf: AudioBuffer | null = null;
const last: Record<Kind, number> = { tick: 0, hover: 0, whoosh: 0 };
const MIN_GAP: Record<Kind, number> = { tick: 45, hover: 90, whoosh: 300 };

const reduced = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function loadPreference(): boolean {
  try {
    const v = localStorage.getItem("sound");
    enabled = v === null ? true : v === "on";
  } catch {
    enabled = true;
  }
  return enabled;
}

export function setEnabled(on: boolean) {
  enabled = on;
  try { localStorage.setItem("sound", on ? "on" : "off"); } catch {}
  if (master && ctx) master.gain.setTargetAtTime(on ? 1 : 0, ctx.currentTime, 0.02);
}

export const isEnabled = () => enabled;

/** Call from a user-gesture handler. Safe to call repeatedly. */
export function unlock() {
  if (typeof window === "undefined") return;
  if (!ctx) {
    const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AC) return;
    ctx = new AC();
    master = ctx.createGain();
    master.gain.value = enabled ? 1 : 0;
    master.connect(ctx.destination);
    // one second of white noise, reused for whooshes
    noiseBuf = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
    const d = noiseBuf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  }
  if (ctx.state === "suspended") void ctx.resume();
}

function ready(kind: Kind): boolean {
  if (!enabled || reduced() || !ctx || !master || ctx.state !== "running") return false;
  const now = performance.now();
  if (now - last[kind] < MIN_GAP[kind]) return false;
  last[kind] = now;
  return true;
}

/** Soft wooden tick: a slide passing the centre. */
export function tick() {
  if (!ready("tick") || !ctx || !master) return;
  const t = ctx.currentTime;
  const o = ctx.createOscillator();
  const g = ctx.createGain();
  o.type = "triangle";
  o.frequency.setValueAtTime(1100, t);
  o.frequency.exponentialRampToValueAtTime(380, t + 0.04);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(0.05, t + 0.003);
  g.gain.exponentialRampToValueAtTime(0.0001, t + 0.06);
  o.connect(g); g.connect(master);
  o.start(t); o.stop(t + 0.07);
}

/** Light airy blip: hovering a slide or link. */
export function hover() {
  if (!ready("hover") || !ctx || !master) return;
  const t = ctx.currentTime;
  const o = ctx.createOscillator();
  const g = ctx.createGain();
  o.type = "sine";
  o.frequency.setValueAtTime(1500, t);
  o.frequency.exponentialRampToValueAtTime(1900, t + 0.08);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(0.018, t + 0.01);
  g.gain.exponentialRampToValueAtTime(0.0001, t + 0.1);
  o.connect(g); g.connect(master);
  o.start(t); o.stop(t + 0.11);
}

/** Filtered-noise sweep: page transition. */
export function whoosh() {
  if (!ready("whoosh") || !ctx || !master || !noiseBuf) return;
  const t = ctx.currentTime;
  const src = ctx.createBufferSource();
  src.buffer = noiseBuf;
  src.loop = true;
  const f = ctx.createBiquadFilter();
  f.type = "bandpass";
  f.Q.value = 0.9;
  f.frequency.setValueAtTime(250, t);
  f.frequency.exponentialRampToValueAtTime(2600, t + 0.55);
  const g = ctx.createGain();
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(0.06, t + 0.22);
  g.gain.exponentialRampToValueAtTime(0.0001, t + 0.7);
  src.connect(f); f.connect(g); g.connect(master);
  src.start(t); src.stop(t + 0.75);
}
