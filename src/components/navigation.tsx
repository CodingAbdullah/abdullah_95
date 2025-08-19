"use client"

import * as React from "react"
import Link from "next/link"
import { cn, navigationMenuTriggerStyle } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from "../components/ui/navigation-menu"
import { Menu, X } from "lucide-react";

// Custom Navigation component
export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  }

  return (
    <div className="glass-nav sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Mobile Layout */}
        <div className="md:hidden flex h-16 items-center justify-between">
          <button
            onClick={toggleMobileMenu}
            className="p-2 text-primary hover:bg-primary/10 rounded-md"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <span className="text-lg font-semibold text-primary">Abdullah</span>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex h-16 items-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/" className={cn(navigationMenuTriggerStyle(), "text-primary font-medium")}>
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/about" className={cn(navigationMenuTriggerStyle(), "text-primary font-medium")}>
                    About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/skills" className={cn(navigationMenuTriggerStyle(), "text-primary font-medium")}>
                    Skills
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/portfolio" className={cn(navigationMenuTriggerStyle(), "text-primary font-medium")}>
                    Portfolio
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/leisure" className={cn(navigationMenuTriggerStyle(), "text-primary font-medium")}>
                    Leisure
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-primary/20 glass-card">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-2">
              <Link 
                href="/" 
                className="p-3 text-primary font-medium hover:bg-primary/10 rounded-md transition-colors"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="p-3 text-primary font-medium hover:bg-primary/10 rounded-md transition-colors"
                onClick={closeMobileMenu}
              >
                About
              </Link>
              <Link 
                href="/skills" 
                className="p-3 text-primary font-medium hover:bg-primary/10 rounded-md transition-colors"
                onClick={closeMobileMenu}
              >
                Skills
              </Link>
              <Link 
                href="/portfolio" 
                className="p-3 text-primary font-medium hover:bg-primary/10 rounded-md transition-colors"
                onClick={closeMobileMenu}
              >
                Portfolio
              </Link>
              <Link 
                href="/leisure" 
                className="p-3 text-primary font-medium hover:bg-primary/10 rounded-md transition-colors"
                onClick={closeMobileMenu}
              >
                Leisure
              </Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  )
}