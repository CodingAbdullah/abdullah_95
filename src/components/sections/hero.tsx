import Image from "next/image"
import Link from "next/link"
import { FileText, Github, Linkedin, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LINKS, LOCATION, NAME, PHOTO_URL, RESUME_URL, ROLE, SUMMARY } from "@/utils/constants/Profile"

// Top-of-page introduction with name, role, location, and primary links
export default function Hero() {
  return (
    <section className="container mx-auto px-4 max-w-5xl pt-16 pb-12 sm:pt-24 sm:pb-16">
      <div className="flex flex-col-reverse items-center gap-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-5 text-center sm:text-left fade-in">
          <p className="text-sm text-muted-foreground">$ whoami</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-primary text-glow">
            {NAME}<span className="cursor-blink" aria-hidden="true">_</span>
          </h1>
          <p className="text-xl sm:text-2xl font-semibold text-foreground">{ROLE}</p>
          <p className="flex items-center justify-center sm:justify-start gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
            {LOCATION}
          </p>
          <p className="max-w-xl text-muted-foreground">{SUMMARY}</p>
          <div className="flex flex-wrap justify-center sm:justify-start gap-3 pt-2">
            <Button asChild>
              <Link href={RESUME_URL} target="_blank" rel="noopener noreferrer">
                <FileText aria-hidden="true" />
                Resume
              </Link>
            </Button>
            <Button variant="outline" className="border-primary/40 text-primary hover:bg-primary/10 hover:text-primary" asChild>
              <Link href={LINKS.github} target="_blank" rel="noopener noreferrer">
                <Github aria-hidden="true" />
                GitHub
              </Link>
            </Button>
            <Button variant="outline" className="border-primary/40 text-primary hover:bg-primary/10 hover:text-primary" asChild>
              <Link href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin aria-hidden="true" />
                LinkedIn
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative h-40 w-40 sm:h-48 sm:w-48 lg:h-56 lg:w-56 shrink-0 overflow-hidden rounded-full border-4 border-primary/30 matrix-glow fade-in">
          <Image
            src={PHOTO_URL}
            alt={NAME}
            className="object-cover"
            sizes="(max-width: 640px) 160px, (max-width: 1024px) 192px, 224px"
            priority
            fill
          />
        </div>
      </div>
    </section>
  )
}
