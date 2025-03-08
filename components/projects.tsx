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

  const majorProjects = [
   
    {
      title: "Brainly",
      description:
        "A content-sharing platform with JWT authentication, MongoDB, and RESTful APIs. Supports YouTube, Twitter, and Instagram content sharing.",
      tags: ["MongoDB", "React", "REST API", "Node.js"],
      github: "https://github.com/PratikGautam-dev/brainly-project",
      demo: "https://brainly-frontend-jiob9gd8o-pratik-gautams-projects.vercel.app/dashboard",
    },
    {
      title: "URL Shortener",
      description:
        "A secure URL shortening service with analytics, click tracking, and authentication using Node.js, Express.js, and MongoDB.",
      tags: ["Node.js", "MongoDB", "Express.js", "Authentication"],
      github: "https://github.com/PratikGautam-dev/url-shortner",
      demo: "https://shurly.vercel.app/",
    },
    {
      title: "Online Image Editor",
      description:
        "An AI-powered image editing tool with background removal, image enhancement, and face restoration. Built using Node.js, ImageKit, and MongoDB.",
      tags: ["Node.js", "ImageKit", "MongoDB", "AI"],
      github: "https://github.com/PratikGautam-dev/image-editor",
      demo: "https://image-editor-three-dusky.vercel.app/",
    },
    {
      title: "Collaborative Drawing App",
      description:
        "A real-time whiteboarding application that allows multiple users to draw together simultaneously. Built with Next.js, WebSockets, and PostgreSQL.",
      tags: ["Next.js", "WebSockets", "PostgreSQL", "TailwindCSS","TurboRepo"],
      github: "https://github.com/PratikGautam-dev/draw-app",
      demo: "#",
    },
  ]

  const otherProjects = [
    {
      title: "Blogging Site",
      description:
        "Full-stack blog management system using EJS, Express.js, MongoDB, with a cookie-based authentication system.",
      tags: ["EJS", "Express.js", "MongoDB", "Authentication"],
      github: "https://github.com/PratikGautam-dev/blogify",
      demo: "#",
    },
    {
      title: "Chat Application",
      description:
        "Developed a real-time WebSocket-based chat app using Node.js, WebSocket (ws), React, and TypeScript.",
      tags: ["WebSocket", "React", "TypeScript", "Node.js"],
      github: "https://github.com/PratikGautam-dev/Chat-app",
      demo: "#",
    },
    {
      title: "Amazon Clone",
      description:
        "A responsive frontend clone of Amazon built with HTML and CSS, featuring a structured layout and modern UI design.",
      tags: ["HTML", "CSS", "Responsive Design"],
      github: "https://github.com/PratikGautam-dev/amazon_clone",
      demo: "#",
    },
    {
      title: "Crop Yield Analysis",
      description:
        "Automated analysis of crop yield data using Excel VBA, generating insights based on state, district, crop type, year, and season.",
      tags: ["Excel VBA", "Data Analysis", "Automation"],
      github: "#",
      demo: "#",
    },
    {
      title: "LFR & Bluetooth Bot",
      description:
        "Designed and built a Line Following Robot and Bluetooth-controlled bot using Arduino and sensor-based systems.",
      tags: ["Arduino", "Robotics", "Sensors"],
      github: "#",
      demo: "#",
    }
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
        </motion.div>

        <h3 className="text-2xl font-semibold mb-4">Major Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {majorProjects.map((project, index) => (
            <ProjectCard key={index} project={project} inView={inView} index={index} />
          ))}
        </div>

        <h3 className="text-2xl font-semibold mb-4">Other Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((project, index) => (
            <ProjectCard key={index} project={project} inView={inView} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
}

function ProjectCard({ project, inView, index }: { project: Project; inView: boolean; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: 0.2 * index }}
    >
      <Card className="h-full overflow-hidden border border-primary/10 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover:translate-y-[-8px] hover:shadow-lg hover:shadow-primary/20">
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
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm" className="gap-1">
              <Github className="h-4 w-4" />
              <span>Code</span>
            </Button>
          </a>
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            <Button variant="default" size="sm" className="gap-1">
              <ExternalLink className="h-4 w-4" />
              <span>Demo</span>
            </Button>
          </a>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
