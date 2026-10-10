import { Analytics } from "@vercel/analytics/next"
import { JetBrains_Mono } from 'next/font/google'
import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Script from "next/script"
import { NAME, PHOTO_URL, ROLE, SITE_URL, SUMMARY } from "@/utils/constants/Profile"
import "./globals.css"

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] })

const title = `${NAME} - ${ROLE}`

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
    locale: "en_CA",
    images: [{ url: PHOTO_URL, alt: NAME }]
  },
  twitter: {
    card: "summary",
    title,
    description: SUMMARY,
    images: [PHOTO_URL]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={jetBrainsMono.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Analytics mode="production" />
        <Script id="umami-website-analytics"
          src={process.env.UMAMI_URL}
          data-website-id={process.env.UMAMI_WEBSITE_ID}>
        </Script>
      </body>
    </html>
  )
}
