import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { site, theme } from "@/content/site";

export const alt = `${site.name}: ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  const font = readFileSync(join(process.cwd(), "node_modules/@fontsource/instrument-serif/files/instrument-serif-latin-400-normal.woff"));
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "#F4F1EA", color: "#111110", fontFamily: "Instrument Serif" }}>
        <div style={{ fontSize: 28, letterSpacing: 4, textTransform: "uppercase", display: "flex" }}>Portfolio · Dublin</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 150, lineHeight: 0.92, letterSpacing: -5, display: "flex" }}>{site.name}</div>
          <div style={{ fontSize: 56, marginTop: 24, color: theme.accent, display: "flex" }}>{site.role}</div>
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "Instrument Serif", data: font, style: "normal", weight: 400 }] }
  );
}
