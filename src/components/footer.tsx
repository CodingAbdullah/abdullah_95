import { Newspaper, Github, Instagram, Linkedin, BookOpen, Mail } from 'lucide-react'
import Link from 'next/link'
import { LINKS, NAME } from '@/utils/constants/Profile'

const socialLinks = [
  { href: LINKS.github, label: "GitHub", Icon: Github },
  { href: LINKS.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: LINKS.email, label: "Email", Icon: Mail },
  { href: LINKS.blog, label: "Blog", Icon: BookOpen },
  { href: LINKS.medium, label: "Medium", Icon: Newspaper },
  { href: LINKS.instagram, label: "Instagram", Icon: Instagram }
]

// Custom Footer component with social links
export default function Footer() {
  return (
    <footer className="bg-background/80 backdrop-blur-sm border-t border-primary/20 font-mono">
      <div className="container mx-auto px-4 max-w-5xl py-6">
        <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
          <ul className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {socialLinks.map(({ href, label, Icon }) => (
              <li key={label}>
                <Link href={href} {...(href.startsWith("mailto:") ? {} : { target: "_blank", rel: "noopener noreferrer" })} className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                  <span className="text-[10px]">{label}</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {NAME}
          </p>
        </div>
      </div>
    </footer>
  )
}
