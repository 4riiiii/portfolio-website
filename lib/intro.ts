/** Homepage intro: black screen, ARIKA scrambles in the centre, then drops to the bottom as the slides sweep in. */
export const INTRO_MS = 1800;

/** Play the full intro on the first visit of a session; skip it for reduced motion and when returning from a chapter. */
export function shouldIntro(): boolean {
  if (typeof window === "undefined") return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  try {
    return sessionStorage.getItem("introSeen") !== "1";
  } catch {
    return true;
  }
}

export function markIntroSeen() {
  try { sessionStorage.setItem("introSeen", "1"); } catch {}
}
