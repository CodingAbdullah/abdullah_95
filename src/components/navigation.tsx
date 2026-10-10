import Link from "next/link"
import { SECTIONS } from "@/utils/constants/Profile"

// Sticky navigation with in-page section anchors
export default function Navigation() {
  return (
    <header className="glass-nav sticky top-0 z-50">
      <nav className="container mx-auto px-4 max-w-5xl flex h-14 items-center justify-center sm:justify-between" aria-label="Main">
        <Link href="/" className="hidden sm:block font-semibold text-primary">
          ~/abdullah
        </Link>
        <ul className="flex items-center gap-1">
          {SECTIONS.map((section) => (
            <li key={section.id}>
              <Link href={`/#${section.id}`} className="rounded-md px-2 sm:px-3 py-2 text-sm font-medium text-primary hover:bg-primary/10 transition-colors">
                {section.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
