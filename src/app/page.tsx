import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { FileText, Github, User, Code, Coffee } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

// Home component with styling included
// Libraries for reusable icons, cards used
export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center min-h-[calc(100vh-4rem)]">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter text-primary text-glow sm:text-5xl xl:text-6xl/none">
              Software Engineer
            </h1>
            <p className="text-xl text-muted-foreground">
              Life-long Learner. Passionate. Dedicated.
            </p>
            <div className="flex gap-4">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <Link href="https://genericbucket95.s3.us-east-2.amazonaws.com/Website+Resume.pdf">
                  <FileText className="mr-2 h-4 w-4" />
                  Resume
                </Link>
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                <Link target="_blank" href="https://github.com/CodingAbdullah">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative aspect-square w-full max-w-md rounded-full overflow-hidden border-8 border-primary/20 shadow-2xl shadow-primary/50">
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
        <div className="grid gap-8 md:grid-cols-4 py-12">
          <Link href="/about" passHref>
            <Card className="bg-card/80 backdrop-blur-sm border-primary/20">
              <CardContent className="p-6 space-y-2">
                <User className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-lg font-semibold text-primary">About</h3>
                <p className="text-sm text-muted-foreground">
                  Learn more about my background and experiences.
                </p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/resume" passHref>
            <Card className="bg-card/80 backdrop-blur-sm border-primary/20">
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
            <Card className="bg-card/80 backdrop-blur-sm border-primary/20">
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
            <Card className="bg-card/80 backdrop-blur-sm border-primary/20">
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