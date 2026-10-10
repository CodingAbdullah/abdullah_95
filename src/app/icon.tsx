import { ImageResponse } from "next/og"
import { loadMonoFonts, Monogram } from "@/lib/og"

export const size = { width: 32, height: 32 }
export const contentType = "image/png"

// Browser tab icon: "AM" monogram in the site's green on dark
export default async function Icon() {
  const fonts = await loadMonoFonts([700])
  return new ImageResponse(<Monogram size={size.width} withBorder />, { ...size, fonts })
}
