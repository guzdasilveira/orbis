import { ImageResponse } from "next/og";
import { SITE } from "@/lib/content";

export const alt = SITE.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#101B33",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 620,
            height: 340,
            borderRadius: "50%",
            border: "1px solid rgba(232,197,114,0.25)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 60,
            height: 60,
            top: 145,
            left: 620,
            borderRadius: "50%",
            background: "#E8C572",
            boxShadow: "0 0 60px 10px rgba(232,197,114,0.55)",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span style={{ fontSize: 76, fontWeight: 800, color: "#F4F1EA", letterSpacing: "-0.02em" }}>
            OR<span style={{ color: "#C9A24B" }}>B</span>IS
          </span>
        </div>
        <div style={{ display: "flex", marginTop: 22 }}>
          <span style={{ fontSize: 28, color: "#C7CDD6" }}>Finanzy · FLUX · PureMind</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
