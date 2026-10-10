// Shared helpers for generated images (tab icons and the link-preview card)

export const OG_COLORS = {
  background: "#161f1a",
  green: "#40bf80",
  text: "#eff5f2",
  muted: "#a3b8ad"
}

// Fetches a JetBrains Mono weight as TTF from Google Fonts; images are generated at build time
async function loadMonoFont(weight: 400 | 700): Promise<ArrayBuffer | null> {
  try {
    const css = await (await fetch(`https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@${weight}`)).text()
    const url = css.match(/src: url\((.+?)\) format\('truetype'\)/)?.[1]
    return url ? await (await fetch(url)).arrayBuffer() : null
  } catch {
    return null
  }
}

// Returns the font list for ImageResponse; empty if Google Fonts is unreachable, so the default font is used
export async function loadMonoFonts(weights: (400 | 700)[]) {
  const loaded = await Promise.all(weights.map(async (weight) => ({ weight, data: await loadMonoFont(weight) })))
  return loaded.flatMap(({ weight, data }) => (data ? [{ name: "JetBrains Mono", data, weight }] : []))
}

// "AM" monogram used for the browser tab and home-screen icons
export function Monogram({ size, withBorder }: { size: number, withBorder: boolean }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: OG_COLORS.background,
        color: OG_COLORS.green,
        fontFamily: "JetBrains Mono",
        fontWeight: 700,
        fontSize: size * 0.44,
        letterSpacing: -size * 0.03,
        ...(withBorder && { borderRadius: size * 0.2, border: `${Math.max(1, Math.round(size * 0.06))}px solid ${OG_COLORS.green}` })
      }}
    >
      AM
    </div>
  )
}
