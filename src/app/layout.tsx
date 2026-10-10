import { Analytics } from "@vercel/analytics/next"
import { Geist, JetBrains_Mono } from 'next/font/google'
import type { Metadata, Viewport } from "next"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Script from "next/script"
import { NAME, ROLE, SITE_URL, SUMMARY } from "@/utils/constants/Profile"
import "./globals.css"

// Geist for body text, JetBrains Mono for headings, labels, and other terminal-style accents
const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })

const title = `${NAME} - ${ROLE}`

// Dark-only site: tint mobile browser chrome to match the background
export const viewport: Viewport = {
  themeColor: "#161f1a",
  colorScheme: "dark"
}

// Site-wide metadata, shared by every route
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: `%s - ${NAME}`
  },
  description: SUMMARY,
  keywords: [NAME, "Software Engineer", "Full Stack Developer", "DevOps", "AWS", "Azure", "Terraform", "Docker", "Next.js", "React", "TypeScript", "Web3", "Toronto"],
  authors: [{ name: NAME, url: SITE_URL }],
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description: SUMMARY,
    url: SITE_URL,
    siteName: NAME,
    type: "profile",
    locale: "en_CA"
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: SUMMARY
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${geist.variable} ${jetBrainsMono.variable}`}>
      <body className="font-sans antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Analytics mode="production" />
        {process.env.UMAMI_URL && process.env.UMAMI_WEBSITE_ID && (
          <Script
            id="umami-website-analytics"
            src={process.env.UMAMI_URL}
            data-website-id={process.env.UMAMI_WEBSITE_ID}
            strategy="lazyOnload"
          />
        )}
      </body>
    </html>
  )
}
