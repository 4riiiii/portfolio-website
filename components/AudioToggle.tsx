"use client";

import { useSite } from "./SiteProvider";

export default function AudioToggle({ className = "" }: { className?: string }) {
  const { audioOn, toggleAudio } = useSite();
  return (
    <button type="button" onClick={toggleAudio} aria-pressed={audioOn} className={`u-link ${className}`}>
      Audio {audioOn ? "On" : "Off"}
    </button>
  );
}
