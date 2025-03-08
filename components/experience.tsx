"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Award, Code, Cpu } from "lucide-react"

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      title: "Robotics Club (CORSIT)",
      period: "2022 - Present",
      description:
        "Hosted a robotics exhibition, managed competitions, and conducted workshops on Line Following Robots (LFR), Arduino programming, and sensor integration.",
      icon: <Cpu className="h-10 w-10 text-primary" />,
    },
    {
      title: "Hackathons & Technical Quizzes",
      period: "2021 - Present",
      description:
        "Participated in and hosted various technical quizzes and competitions, focusing on problem-solving and innovative technology solutions.",
      icon: <Code className="h-10 w-10 text-primary" />,
    },
    
  ]

  return (
    <section id="experience" className="py-20 px-4 md:px-8 lg:px-16 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Experience & Achievements</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and notable achievements in robotics, AI, and technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.15 * index }}
            >
              <Card className="h-full border border-primary/10 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="p-2 rounded-full bg-primary/10">{exp.icon}</div>
                  <div>
                    <CardTitle>{exp.title}</CardTitle>
                    <CardDescription>{exp.period}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

