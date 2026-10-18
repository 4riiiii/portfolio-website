import { ImageResponse } from "next/og";
import { theme } from "@/content/site";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#111110", color: theme.accent, fontSize: 40, fontWeight: 700, borderRadius: 14 }}>
        A
      </div>
    ),
    size
  );
}
