"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, FileText } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative h-screen flex flex-col justify-center items-center px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-0"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 max-w-3xl"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500"
        >
          Pratik
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-4 text-xl md:text-2xl text-muted-foreground"
        >
          Full-Stack Developer | AI & DS Enthusiast
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex justify-center gap-4 mt-8"
        >
          {/* GitHub Link */}
          <a href="https://github.com/PratikGautam-dev" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
          </a>

          {/* LinkedIn Link */}
          <a href="https://www.linkedin.com/in/pratik-gautam-412b9029a/" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </a>

          {/* Resume Link */}
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <FileText className="h-5 w-5" />
              <span className="sr-only">Resume</span>
            </Button>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12"
        >
          <Button
            className="rounded-full px-8 py-6 text-lg hover:scale-105 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
            onClick={() => {
              const aboutSection = document.getElementById("about")
              aboutSection?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Explore My Work
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-center bg-no-repeat opacity-20"></div>
      </motion.div>
    </section>
  )
}
