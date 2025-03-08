"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [state, setState] = useState({
    isScrolled: false,
    isMobileMenuOpen: false,
    mounted: false
  })

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ]

  useEffect(() => {
    setState(prev => ({ ...prev, mounted: true }))
    
    const handleScroll = () => {
      setState(prev => ({
        ...prev,
        isScrolled: window.scrollY > 10
      }))
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!state.mounted) {
    return null
  }

  const toggleMenu = () => {
    setState(prev => ({
      ...prev,
      isMobileMenuOpen: !prev.isMobileMenuOpen
    }))
  }

  const scrollToSection = (href: string) => {
    setState(prev => ({
      ...prev,
      isMobileMenuOpen: false
    }))

    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }

    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          state.isScrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <a href="#" className="text-xl font-bold text-primary">
                Pratik
              </a>
            </div>

            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.href)
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                {state.isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {state.isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md md:hidden pt-16"
          >
            <nav className="flex flex-col items-center justify-center h-full space-y-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.href)
                  }}
                  className="text-xl font-medium text-foreground hover:text-primary transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

