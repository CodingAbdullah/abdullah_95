"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { RESUME_URL, SECTIONS } from "@/utils/constants/Profile"

// Sticky navigation with in-page section anchors
export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  const linkClass = "rounded-md px-3 py-2 text-sm font-medium text-primary hover:bg-primary/10 transition-colors"

  return (
    <header className="glass-nav sticky top-0 z-50">
      <nav className="container mx-auto px-4 max-w-5xl flex h-16 items-center justify-between" aria-label="Main">
        <Link href="/" className="font-semibold text-primary" onClick={closeMobileMenu}>
          ~/abdullah
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {SECTIONS.map((section) => (
            <li key={section.id}>
              <Link href={`/#${section.id}`} className={linkClass}>{section.label}</Link>
            </li>
          ))}
          <li>
            <Link href={RESUME_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>Resume</Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          className="md:hidden p-2 text-primary hover:bg-primary/10 rounded-md"
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile links */}
      {isMobileMenuOpen && (
        <ul id="mobile-menu" className="md:hidden container mx-auto px-4 pb-4 flex flex-col gap-1 border-t border-primary/20 pt-2">
          {SECTIONS.map((section) => (
            <li key={section.id}>
              <Link href={`/#${section.id}`} className={`block ${linkClass}`} onClick={closeMobileMenu}>{section.label}</Link>
            </li>
          ))}
          <li>
            <Link href={RESUME_URL} target="_blank" rel="noopener noreferrer" className={`block ${linkClass}`} onClick={closeMobileMenu}>Resume</Link>
          </li>
        </ul>
      )}
    </header>
  )
}
