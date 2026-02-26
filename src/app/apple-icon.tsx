import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 96,
          background: "#fbbf24",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 36,
          fontWeight: 800,
          color: "#0a0a0a",
          letterSpacing: "-2px",
        }}
      >
        JT
      </div>
    ),
    {
      ...size,
    }
  );
}
