import { ImageResponse } from "next/og";

export const alt = "Paloma Abdurramani — Data Engineer & Backend Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#06050a",
          padding: "64px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 30% 20%, rgba(91,63,212,0.45), transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(155,123,255,0.2), transparent 45%)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            color: "#c4b0ff",
            fontSize: 22,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              border: "2px solid #9b7bff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#c4b0ff",
              fontSize: 18,
              fontWeight: 600,
            }}
          >
            P
          </div>
          Data systems · Backend
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 650,
              color: "#f4f2f8",
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
            }}
          >
            Paloma Abdurramani
          </div>
          <div style={{ fontSize: 32, color: "#c4b0ff", fontWeight: 500 }}>
            Data Engineer & Backend Developer
          </div>
          <div style={{ fontSize: 24, color: "#9a95a8", maxWidth: 760 }}>
            Reliable data systems and backend services — built for production.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
