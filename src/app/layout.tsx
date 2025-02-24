import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next"
import { JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Script from "next/script"
import "./globals.css"

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Abdullah - Personal Website",
  description: "Software developer personal portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={jetBrainsMono.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main>{children}</main>
          <Analytics mode="production" />
          <Script id="umami-website-analytics" 
            src={process.env.UMAMI_URL}
            data-website-id={process.env.UMAMI_WEBSITE_ID}>
          </Script>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
