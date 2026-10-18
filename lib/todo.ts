/** Strings starting with "TODO" are placeholders awaiting real copy. */
export const isTodo = (s: string | undefined | null): boolean => !!s && /^TODO\b/.test(s);

/** "#RRGGBB" -> "R G B" (space-separated channels for Tailwind's alpha syntax). */
export function hexToChannels(hex: string): string {
  const h = hex.replace("#", "");
  const full = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  const n = parseInt(full, 16);
  return `${(n >> 16) & 255} ${(n >> 8) & 255} ${n & 255}`;
}
