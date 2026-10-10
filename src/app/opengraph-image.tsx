import { ImageResponse } from "next/og"
import { LOCATION, NAME, PHOTO_URL, ROLE, SITE_URL } from "@/utils/constants/Profile"

export const alt = `${NAME} - ${ROLE}`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

const green = "#40bf80"

// Fetches a JetBrains Mono weight as TTF from Google Fonts (the card is built once, at build time)
async function loadMonoFont(weight: number): Promise<ArrayBuffer | null> {
  try {
    const css = await (await fetch(`https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@${weight}`)).text()
    const url = css.match(/src: url\((.+?)\) format\('truetype'\)/)?.[1]
    return url ? await (await fetch(url)).arrayBuffer() : null
  } catch {
    return null
  }
}

// Link-preview card shown when the site is shared on LinkedIn, X, Slack, etc.
export default async function OpengraphImage() {
  const [regular, bold] = await Promise.all([loadMonoFont(400), loadMonoFont(700)])
  const fonts = [
    ...(regular ? [{ name: "JetBrains Mono", data: regular, weight: 400 as const }] : []),
    ...(bold ? [{ name: "JetBrains Mono", data: bold, weight: 700 as const }] : [])
  ]

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 90px",
          background: "radial-gradient(circle at 15% 85%, rgba(0,255,127,0.12), transparent 55%), linear-gradient(180deg, #161f1a 0%, #111814 100%)",
          color: "#eff5f2",
          fontFamily: fonts.length ? "JetBrains Mono" : undefined
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 30, color: "#a3b8ad" }}>$ whoami</div>
          <div style={{ fontSize: 68, fontWeight: 700, color: green, marginTop: 12, letterSpacing: -2 }}>{NAME}</div>
          <div style={{ fontSize: 38, fontWeight: 700, marginTop: 8 }}>{ROLE}</div>
          <div style={{ fontSize: 28, color: "#a3b8ad", marginTop: 24 }}>{LOCATION}</div>
          <div style={{ fontSize: 28, color: green, marginTop: 48 }}>{SITE_URL.replace("https://", "")}</div>
        </div>
        <img
          src={PHOTO_URL}
          alt=""
          width={280}
          height={280}
          style={{ borderRadius: 140, border: `8px solid rgba(64,191,128,0.45)`, objectFit: "cover" }}
        />
      </div>
    ),
    { ...size, fonts }
  )
}
