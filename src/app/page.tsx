import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { FileText, Github, User, Code, Coffee } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

// Home component with styling included
// Libraries for reusable icons, cards used
export default async function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-8 xl:gap-6 2xl:gap-4 items-center min-h-[calc(100vh-4rem)] max-w-6xl mx-auto">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-3xl font-bold tracking-tighter text-primary text-glow sm:text-4xl lg:text-5xl xl:text-6xl/none">
              Abdullah Muhammad
            </h1>
            <h2 className="text-xl font-bold tracking-tighter text-primary text-glow sm:text-2xl lg:text-3xl">
              Software Engineer
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Life-long Learner. Passionate. Dedicated.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground glass-button" asChild>
                <Link href="https://genericbucket95.s3.us-east-2.amazonaws.com/Website+Resume.pdf">
                  <FileText className="mr-2 h-4 w-4" />
                  Resume
                </Link>
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground glass-button" asChild>
                <Link target="_blank" href="https://github.com/CodingAbdullah">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end order-first lg:order-last">
            <div className="relative aspect-square w-64 sm:w-80 lg:w-80 xl:w-72 2xl:w-64 rounded-full overflow-hidden border-8 border-primary/30 matrix-glow pulse-glow">
              <Image
                src="https://genericbucket95.s3.us-east-2.amazonaws.com/me.jpg"
                alt="Profile"
                className="object-cover"
                priority
                fill
              />
            </div>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 py-12">
          <Link href="/about" passHref>
            <Card className="glass-card hover:scale-105 transition-all duration-300 cursor-pointer">
              <CardContent className="p-6 space-y-2">
                <User className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-lg font-semibold text-primary">About</h3>
                <p className="text-sm text-muted-foreground">
                  Learn more about my background and experiences.
                </p>
              </CardContent>
            </Card>
          </Link>
          <Link href="https://genericbucket95.s3.us-east-2.amazonaws.com/Website+Resume.pdf" passHref>
            <Card className="glass-card hover:scale-105 transition-all duration-300 cursor-pointer">
              <CardContent className="p-6 space-y-2">
                <FileText className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-lg font-semibold text-primary">Resume</h3>
                <p className="text-sm text-muted-foreground">
                  View my professional history and achievements.
                </p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/skills" passHref>
            <Card className="glass-card hover:scale-105 transition-all duration-300 cursor-pointer">
              <CardContent className="p-6 space-y-2">
                <Code className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-lg font-semibold text-primary">Skills</h3>
                <p className="text-sm text-muted-foreground">
                  Explore my technical skills and expertise.
                </p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/leisure" passHref>
            <Card className="glass-card hover:scale-105 transition-all duration-300 cursor-pointer">
              <CardContent className="p-6 space-y-2">
                <Coffee className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-lg font-semibold text-primary">Leisure</h3>
                <p className="text-sm text-muted-foreground">
                  Discover my interests and hobbies outside of work.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  )
}