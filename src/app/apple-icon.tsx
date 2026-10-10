import { ImageResponse } from "next/og"

export const size = { width: 180, height: 180 }
export const contentType = "image/png"

// Home-screen icon for iOS, matching the browser tab icon
export default function AppleIcon() {
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
          color: "#40bf80",
          fontSize: 96,
          fontWeight: 700,
          letterSpacing: -4
        }}
      >
        {">_"}
      </div>
    ),
    size
  )
}
