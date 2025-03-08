"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: "Collaborative Drawing App",
      description:
        "A real-time whiteboarding application that allows multiple users to draw together simultaneously. Built with Next.js, WebSockets for real-time communication, and PostgreSQL for data persistence.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "WebSockets", "PostgreSQL", "TailwindCSS"],
      github: "https://github.com/PratikGautam-dev/draw-app",
      demo: "#",
    },
    {
      title: "AI Image Editing Platform",
      description:
        "Advanced image editing platform featuring background removal, image enhancement, and face restoration capabilities using Node.js and integration with various AI models.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Node.js", "Express.js", "AI Models", "React.js"],
      github: "https://github.com/PratikGautam-dev/image_editor",
      demo: "https://image-editor-three-dusky.vercel.app/",
    },
   {
  "title": "Brainly Question Scraper",
  "description": 
    "A web scraper that extracts questions and answers from Brainly, leveraging automation techniques. Built with Puppeteer for data extraction and Node.js for backend processing.",
  "image": "/placeholder.svg?height=400&width=600",
  "tags": ["Puppeteer", "Node.js", "Web Scraping", "Automation"],
  "github": "https://github.com/PratikGautam-dev/brainly-project",
  "demo": "https://brainly-frontend-seven.vercel.app/dashboard"
},

    {
      title: "URL Shortener",
      description:
        "Custom URL shortening service with analytics dashboard to track link performance. Built with Next.js and MongoDB for data storage.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "MongoDB", "React.js", "TailwindCSS"],
      github: "https://github.com/PratikGautam-dev/url-shortner",
      demo: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 md:px-8 lg:px-16 bg-background/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and interests in web development, AI, and
            robotics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
            >
              <Card className="h-full overflow-hidden border border-primary/10 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover:translate-y-[-8px] hover:shadow-lg hover:shadow-primary/20">
                <div className="overflow-hidden h-48">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" className="gap-1">
                    <Github className="h-4 w-4" />
                    <span>Code</span>
                  </Button>
                  <Button variant="default" size="sm" className="gap-1">
                    <ExternalLink className="h-4 w-4" />
                    <span>Demo</span>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

