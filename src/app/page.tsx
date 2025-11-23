import { Button } from "../components/ui/button"
import { FileText, Github } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"
import { TypewriterEffect } from "../components/typewriter-effect"

export const metadata: Metadata = {
  title: "Abdullah Muhammad - Software Engineer Portfolio",
  description: "Personal portfolio of Abdullah Muhammad, a passionate Software Engineer. Explore my projects, skills, and professional journey in web development.",
  keywords: ["Abdullah Muhammad", "Software Engineer", "Portfolio", "Web Developer", "React", "Next.js", "Full Stack Developer"],
  authors: [{ name: "Abdullah Muhammad" }],
  openGraph: {
    title: "Abdullah Muhammad - Software Engineer Portfolio",
    description: "Personal portfolio of Abdullah Muhammad, a passionate Software Engineer. Explore my projects, skills, and professional journey in web development.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdullah Muhammad - Software Engineer Portfolio",
    description: "Personal portfolio of Abdullah Muhammad, a passionate Software Engineer. Explore my projects, skills, and professional journey in web development.",
  }
}

// Home component with styling included
// Libraries for reusable icons, cards used
export default async function Home() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid gap-12 lg:grid-cols-[1fr,400px] items-center">
            {/* Text Content */}
            <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter text-primary text-glow sm:text-5xl lg:text-6xl xl:text-7xl">
                  <TypewriterEffect
                    text="Abdullah Muhammad"
                    speed={100}
                    delay={500}
                  />
                </h1>
                <h2 className="text-2xl font-bold tracking-tighter text-primary text-glow sm:text-3xl lg:text-4xl">
                  Full-Stack Engineer
                </h2>
                <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                  Specializing in DevOps, cloud-native development, and modern web applications. Building scalable systems with AWS, Docker, Next.js, and blockchain technologies.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glass-button" asChild>
                  <Link href="https://genericbucket95.s3.us-east-2.amazonaws.com/Website+Resume.pdf">
                    <FileText className="mr-2 h-5 w-5" />
                    View Resume
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground glass-button" asChild>
                  <Link target="_blank" href="https://github.com/CodingAbdullah">
                    <Github className="mr-2 h-5 w-5" />
                    GitHub
                  </Link>
                </Button>
              </div>

              {/* Tech Highlights */}
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start pt-4">
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20">AWS</span>
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20">Docker</span>
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20">Jenkins</span>
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20">Next.js</span>
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20">React</span>
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20">Supabase</span>
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20">Terraform</span>
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20">TypeScript</span>
              </div>
            </div>

            {/* Profile Picture */}
            <div className="flex justify-center order-1 lg:order-2">
              <div className="relative aspect-square w-72 sm:w-80 lg:w-full max-w-[400px] rounded-full overflow-hidden border-8 border-primary/30 shadow-2xl matrix-glow pulse-glow">
                <Image
                  src="https://genericbucket95.s3.us-east-2.amazonaws.com/me.jpg"
                  alt="Abdullah Muhammad - Full-Stack Engineer"
                  className="object-cover"
                  priority
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}