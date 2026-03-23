import { Newspaper, Github, Instagram, Linkedin, BookOpen } from 'lucide-react'
import { FaXTwitter } from 'react-icons/fa6'
import Link from 'next/link'

// Custom Footer component added
export default function Footer() {
  return (
    <footer className="bg-background/80 backdrop-blur-sm border-t border-primary/20">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
          <div className="flex gap-4">
            <Link href="https://github.com/CodingAbdullah" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary">
              <Github className="h-6 w-6" />
              <span className="text-[10px]">GitHub</span>
            </Link>
            <Link target="_blank" href="https://medium.com/@abdullah_95" rel="noopener noreferrer" className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary">
              <Newspaper className="h-6 w-6" />
              <span className="text-[10px]">Medium</span>
            </Link>
            <Link href="https://softwareblog.dev" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary">
              <BookOpen className="h-6 w-6" />
              <span className="text-[10px]">Blog</span>
            </Link>
            <Link href="https://www.instagram.com/kingabdul_95" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary">
              <Instagram className="h-6 w-6" />
              <span className="text-[10px]">Instagram</span>
            </Link>
            <Link href="https://www.linkedin.com/in/softwaredeveloperabdullah" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary">
              <Linkedin className="h-6 w-6" />
              <span className="text-[10px]">LinkedIn</span>
            </Link>
            <Link href="https://twitter.com/KA95doteth" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary">
              <FaXTwitter className="h-6 w-6" />
              <span className="text-[10px]">X</span>
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
