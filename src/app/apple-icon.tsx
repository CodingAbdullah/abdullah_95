import { ImageResponse } from "next/og"
import { loadMonoFonts, Monogram } from "@/lib/og"

export const size = { width: 180, height: 180 }
export const contentType = "image/png"

// Home-screen icon for iOS; iOS rounds the corners itself, so no border
export default async function AppleIcon() {
  const fonts = await loadMonoFonts([700])
  return new ImageResponse(<Monogram size={size.width} withBorder={false} />, { ...size, fonts })
}
