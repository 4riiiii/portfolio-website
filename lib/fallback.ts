/**
 * Offline / failed-image stand-in: a deterministic moody gradient with a touch of grain,
 * generated per slug. Used automatically when a remote demo image can't load.
 */
export function fallbackFor(seed: string): string {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  const a = h % 360;
  const b = (a + 40 + (h % 60)) % 360;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice">
<defs>
<linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="hsl(${a} 38% 26%)"/><stop offset="1" stop-color="hsl(${b} 42% 9%)"/></linearGradient>
<radialGradient id="r" cx="0.7" cy="0.25" r="0.7"><stop offset="0" stop-color="hsl(${b} 60% 62%)" stop-opacity="0.35"/><stop offset="1" stop-color="hsl(${b} 60% 62%)" stop-opacity="0"/></radialGradient>
<filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" stitchTiles="stitch"/><feColorMatrix values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.09 0"/></filter>
</defs>
<rect width="1600" height="1000" fill="url(#g)"/><rect width="1600" height="1000" fill="url(#r)"/>
<rect width="1600" height="1000" filter="url(#n)"/></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
