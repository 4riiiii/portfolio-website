export type Layout = { vw: number; vh: number; sw: number; sh: number; step: number; total: number; top: number };

/** Slide geometry for a viewport. Shared by the carousel and the title so they never collide. */
export function computeLayout(vw: number, vh: number, n: number): Layout {
  const mobile = vw < 768;
  const sh = mobile ? Math.min(vh * 0.46, vw * 0.7 * 1.3) : vh * 0.56;
  const sw = mobile ? vw * 0.7 : sh * 0.78;
  const gap = mobile ? 14 : Math.max(28, vw * 0.03);
  const step = sw + gap;
  return { vw, vh, sw, sh, step, total: step * n, top: (vh - sh) / 2 - (mobile ? 6 : 22) };
}

const CAPTION = 60; // title + tag under each slide
const CAP_RATIO = 0.7; // Space Grotesk Bold cap height / font size
const BELOW_BASELINE = 0.064; // gap between the glyph baseline and the bottom of the line box (em)

/**
 * The title lives in the free band between the slide captions and the footer. Returns the
 * largest font size that fits that band (capped by width), and where to anchor its box.
 */
export function titleMetrics(L: Layout, footerH: number) {
  const bottom = footerH + 4;
  const bandTop = L.top + L.sh + CAPTION + 18;
  const bandH = L.vh - bottom - bandTop;
  const fs = Math.max(40, Math.min(bandH / (CAP_RATIO + BELOW_BASELINE), L.vw * 0.26));
  return { fs, bottom };
}
