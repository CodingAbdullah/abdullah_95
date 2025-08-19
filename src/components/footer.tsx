import { Newspaper, Github, Instagram, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'

// Custom Footer component added
export default function Footer() {
  return (
    <footer className="bg-background/80 backdrop-blur-sm border-t border-primary/20">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
          <div className="flex gap-4">
            <Link href="https://github.com/CodingAbdullah" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link target="_blank" href="https://medium.com/@abdullah_95" className="text-muted-foreground hover:text-primary">
              <Newspaper className="h-6 w-6" />
              <span className="sr-only">Medium Article Profile</span>
            </Link>
            <Link href="https://www.instagram.com/kingabdul_95" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="https://www.linkedin.com/in/softwaredeveloperabdullah" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="https://twitter.com/KA95doteth" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">
            © { new Date().getFullYear() } Powered by Next.js
          </p>
        </div>
      </div>
    </footer>
  )
}