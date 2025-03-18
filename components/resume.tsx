"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { FileDown, ExternalLink, Eye } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function Resume() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [isPreviewOpen, setIsPreviewOpen] = useState(false)

  const resumeHighlights = [
    {
      category: "Education",
      items: ["B.Tech in AI & Data Science - 2023-2027", "CGPA: 9.3/10"],
    },
    {
      category: "Technical Skills",
      items: ["Frontend Development", "Backend Development", "Database Management", "Robotics"],
    },
    {
      category: "Projects",
      items: ["Collaborative Drawing App", "AI Image Editing Platform", "File Upload System", "URL Shortener"],
    },
    {
      category: "Extracurricular",
      items: ["Robotics Club Member", "Technical Quiz Organizer", "Open Source Contributor"],
    },
  ]

  return (
    <section id="resume" className="py-20 px-4 md:px-8 lg:px-16 bg-background/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Resume</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            My professional journey, education, and skills summarized in a comprehensive resume.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2"
          >
            <Card className="border border-primary/10 bg-card/50 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-6">
                  {resumeHighlights.map((section, index) => (
                    <div
                      key={index}
                      className="p-4 border border-primary/10 rounded-lg hover:border-primary/30 transition-all"
                    >
                      <h3 className="font-semibold text-lg mb-2 text-primary">{section.category}</h3>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="mr-2 text-primary">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="p-6 pt-2 flex flex-wrap gap-4 justify-center md:justify-start">
                  <Dialog open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="gap-2">
                        <Eye className="h-4 w-4" />
                        <span>Preview Resume</span>
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>Resume Preview</DialogTitle>
                      </DialogHeader>
                      <div className="bg-white p-8 rounded-md">
                        <div className="text-black">
                          <h2 className="text-2xl font-bold mb-2">Pratik</h2>
                          <p className="text-gray-600 mb-4">Full-Stack Developer | AI & DS Enthusiast</p>

                          <div className="border-t border-gray-200 pt-4 mb-4">
                            <h3 className="text-lg font-semibold mb-2">Education</h3>
                            <p>B.Tech in AI & Data Science | 2020-2024</p>
                            <p>CGPA: 8.5/10</p>
                          </div>

                          <div className="border-t border-gray-200 pt-4 mb-4">
                            <h3 className="text-lg font-semibold mb-2">Technical Skills</h3>
                            <div className="grid grid-cols-2 gap-2">
                              <div>
                                <p className="font-medium">Frontend:</p>
                                <p>HTML, CSS, JavaScript, React.js, Next.js, TailwindCSS</p>
                              </div>
                              <div>
                                <p className="font-medium">Backend:</p>
                                <p>Node.js, Express.js, WebSockets (ws)</p>
                              </div>
                              <div>
                                <p className="font-medium">Databases:</p>
                                <p>MongoDB, PostgreSQL, NoSQL</p>
                              </div>
                              <div>
                                <p className="font-medium">Other:</p>
                                <p>Git, Docker, DevOps (learning phase)</p>
                              </div>
                            </div>
                          </div>

                          <div className="border-t border-gray-200 pt-4 mb-4">
                            <h3 className="text-lg font-semibold mb-2">Projects</h3>
                            <ul className="list-disc pl-5">
                              <li className="mb-2">
                                <span className="font-medium">Collaborative Drawing App</span> - Real-time whiteboarding
                                with Next.js, WebSockets, and PostgreSQL
                              </li>
                              <li className="mb-2">
                                <span className="font-medium">AI Image Editing Platform</span> - Background removal,
                                enhancement, face restoration using Node.js and AI models
                              </li>
                              <li className="mb-2">
                                <span className="font-medium">File Upload System</span> - Secure file storage with
                                Express, Multer, and MongoDB
                              </li>
                              <li>
                                <span className="font-medium">URL Shortener</span> - Custom short links with analytics
                                using Next.js and MongoDB
                              </li>
                            </ul>
                          </div>

                          <div className="border-t border-gray-200 pt-4 mb-4">
                            <h3 className="text-lg font-semibold mb-2">Experience & Activities</h3>
                            <ul className="list-disc pl-5">
                              <li className="mb-2">
                                <span className="font-medium">Robotics Club (CORSIT)</span> - Hosted exhibitions,
                                managed competitions, conducted workshops
                              </li>
                              <li className="mb-2">
                                <span className="font-medium">Hackathons & Technical Quizzes</span> - Participated in
                                and hosted technical events
                              </li>
                              <li>
                                <span className="font-medium">Open Source Contributions</span> - Contributed to web
                                development and AI projects
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <Button asChild className="gap-2">
  <a href="/resume.pdf" download>
    <FileDown className="h-4 w-4" />
    <span>Download PDF</span>
  </a>
</Button>

<Button asChild variant="outline" className="gap-2">
  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
    <ExternalLink className="h-4 w-4" />
    <span>Open in New Tab</span>
  </a>
</Button>

                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="h-full border border-primary/10 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-4">Why check my resume?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 text-primary text-lg">•</div>
                      <p className="text-muted-foreground">
                        <span className="font-medium text-foreground">Technical expertise</span> in full-stack
                        development and AI & Data Science
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 text-primary text-lg">•</div>
                      <p className="text-muted-foreground">
                        <span className="font-medium text-foreground">Practical experience</span> through hands-on
                        projects and hackathons
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 text-primary text-lg">•</div>
                      <p className="text-muted-foreground">
                        <span className="font-medium text-foreground">Problem-solving skills</span> demonstrated through
                        competitive programming
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 text-primary text-lg">•</div>
                      <p className="text-muted-foreground">
                        <span className="font-medium text-foreground">Leadership abilities</span> shown through
                        organizing technical events
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="mt-8">
                  <Button className="w-full gap-2">
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    <FileDown className="h-4 w-4" />
                    <span>Download Full Resume</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

