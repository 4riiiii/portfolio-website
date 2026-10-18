import { ImageResponse } from "next/og";
import { theme } from "@/content/chapters";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#0a0a0a", color: theme.accent, fontSize: 42, fontWeight: 700, borderRadius: 14 }}>
        A
      </div>
    ),
    size
  );
}
