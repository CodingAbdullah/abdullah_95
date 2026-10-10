import { ImageResponse } from "next/og"

export const size = { width: 32, height: 32 }
export const contentType = "image/png"

// Browser tab icon: a terminal prompt in the site's green on dark
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#161f1a",
          borderRadius: 6,
          border: "2px solid #40bf80",
          color: "#40bf80",
          fontSize: 18,
          fontWeight: 700,
          letterSpacing: -1
        }}
      >
        {">_"}
      </div>
    ),
    size
  )
}
