"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Badge } from "@/components/ui/badge"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Next.js",
    "TailwindCSS",
    "Node.js",
    "Express.js",
    "WebSockets (ws)",
    "MongoDB",
    "PostgreSQL",
    "Git",
    "Docker",
    "DevOps (learning phase)",
    "NoSQL",
  ]

  return (
    <section id="about" className="py-20 px-4 md:px-8 lg:px-16 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden border-2 border-primary/20">
              <img src="/placeholder1.jpg?height=600&width=600" alt="Pratik" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Hello there! I'm Pratik</h3>
            <p className="text-muted-foreground mb-6">
              I'm an AI & Data Science engineering student and full-stack developer passionate about building innovative
              solutions. With a strong foundation in web development and a growing expertise in artificial intelligence,
              I enjoy tackling complex problems and creating intuitive user experiences.
            </p>
            <p className="text-muted-foreground mb-8">
              My journey in technology began with web development, but I quickly became fascinated by the potential of
              AI and robotics to transform our world. When I'm not coding, you can find me participating in hackathons,
              working on robotics projects, or exploring the latest advancements in machine learning.
            </p>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="px-3 py-1 text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

