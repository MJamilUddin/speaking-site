import { ImageResponse } from "next/og";

export const alt = "JamTech — Build. Advise. Teach.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Accent glow */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: "100%",
            background: "rgba(251, 191, 36, 0.12)",
            filter: "blur(80px)",
          }}
        />

        {/* Logo badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              background: "#fbbf24",
              borderRadius: 14,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 800,
              color: "#0a0a0a",
              letterSpacing: "-1px",
            }}
          >
            JT
          </div>
          <span
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: "#f1f5f9",
              letterSpacing: "-0.5px",
            }}
          >
            JamTech
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: "#f1f5f9",
            lineHeight: 1.1,
            letterSpacing: "-2px",
            maxWidth: "800px",
            marginBottom: "24px",
          }}
        >
          Technology that ships. Strategy that scales.
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 24,
            color: "#9ca3af",
            lineHeight: 1.5,
            maxWidth: "700px",
          }}
        >
          Technology consulting, AI advisory, and career education
        </div>

        {/* Pill tags */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            marginTop: "40px",
          }}
        >
          {["Build", "Advise", "Teach"].map((tag) => (
            <div
              key={tag}
              style={{
                padding: "10px 24px",
                borderRadius: 999,
                border: "1px solid rgba(251, 191, 36, 0.3)",
                background: "rgba(251, 191, 36, 0.1)",
                color: "#fbbf24",
                fontSize: 18,
                fontWeight: 600,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
