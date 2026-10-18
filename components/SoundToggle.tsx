"use client";

import { useSound } from "./SoundProvider";

export default function SoundToggle({ className = "" }: { className?: string }) {
  const { on, toggle } = useSound();
  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={!!on}
      aria-label={`Sound ${on ? "on" : "off"}. Toggle sound`}
      className={`label u-link inline-flex items-center gap-2 transition-opacity ${on === null ? "opacity-0" : "opacity-100"} ${className}`}
    >
      <span aria-hidden className={`inline-block h-1.5 w-1.5 rounded-full ${on ? "bg-accent" : "bg-paper/40"}`} />
      Sound {on ? "On" : "Off"}
    </button>
  );
}
