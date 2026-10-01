import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const alt = `${profile.name} | Portfolio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Generated social share card (Open Graph + Twitter).
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0e0e0e",
          color: "rgba(255,255,255,0.92)",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.55)",
          }}
        >
          Developer · Engineer
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 96,
              fontWeight: 300,
              letterSpacing: 6,
              textTransform: "uppercase",
              lineHeight: 1.05,
            }}
          >
            Howard Frelindo Goh
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 30,
              color: "rgba(255,255,255,0.6)",
              maxWidth: 900,
            }}
          >
            {profile.positioning}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            color: "rgba(255,255,255,0.55)",
          }}
        >
          <span>{profile.email}</span>
          <span>github.com/Hinsane5</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
