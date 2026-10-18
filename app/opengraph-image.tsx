import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { site, theme } from "@/content/chapters";

export const alt = `${site.name}: chapters`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  const font = readFileSync(join(process.cwd(), "node_modules/@fontsource/space-grotesk/files/space-grotesk-latin-700-normal.woff"));
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "#0a0a0a", color: "#eeebe4", fontFamily: "Space Grotesk" }}>
        <div style={{ display: "flex", fontSize: 24, letterSpacing: 5, textTransform: "uppercase", color: theme.accent }}>Chapters</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 260, lineHeight: 0.85, letterSpacing: -12, fontWeight: 700 }}>ARIKA</div>
          <div style={{ display: "flex", fontSize: 30, marginTop: 28, maxWidth: 900 }}>Software engineer, builder and community leader. Jamshedpur to Dublin.</div>
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "Space Grotesk", data: font, style: "normal", weight: 700 }] }
  );
}
