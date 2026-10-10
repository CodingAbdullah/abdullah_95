import { ImageResponse } from "next/og"
import { LOCATION, NAME, PHOTO_URL, ROLE, SITE_URL } from "@/utils/constants/Profile"
import { loadMonoFonts, OG_COLORS } from "@/lib/og"

const { green, muted } = OG_COLORS

export const alt = `${NAME} - ${ROLE}`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OpengraphImage() {
  const fonts = await loadMonoFonts([400, 700])

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
          background: `radial-gradient(circle at 15% 85%, rgba(0,255,127,0.12), transparent 55%), linear-gradient(180deg, ${OG_COLORS.background} 0%, #111814 100%)`,
          color: OG_COLORS.text,
          fontFamily: fonts.length ? "JetBrains Mono" : undefined
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 30, color: muted }}>$ whoami</div>
          <div style={{ fontSize: 68, fontWeight: 700, color: green, marginTop: 12, letterSpacing: -2 }}>{NAME}</div>
          <div style={{ fontSize: 38, fontWeight: 700, marginTop: 8 }}>{ROLE}</div>
          <div style={{ fontSize: 28, color: muted, marginTop: 24 }}>{LOCATION}</div>
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
