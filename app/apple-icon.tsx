import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#101B33",
        }}
      >
        <svg width="120" height="120" viewBox="0 0 40 40" fill="none">
          <path d="M20 2L36 11V29L20 38L4 29V11L20 2Z" fill="#17233F" stroke="#C9A24B" strokeWidth="1.4" />
          <ellipse cx="20" cy="20" rx="10" ry="5" fill="none" stroke="#C9A24B" strokeWidth="1.3" transform="rotate(-18 20 20)" />
          <circle cx="20" cy="20" r="2.2" fill="#E8C572" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
