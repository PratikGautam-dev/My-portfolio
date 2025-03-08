"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Github, Linkedin, Send, CheckCircle, AlertCircle } from "lucide-react"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

// Define form schema
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formStatus, setFormStatus] = useState<null | "success" | "error">(null)

  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // In a real app, you would send this data to your backend
      console.log("Form submitted:", values)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Show success message
      setFormStatus("success")
      form.reset()

      // Reset status after 5 seconds
      setTimeout(() => setFormStatus(null), 5000)
    } catch (error) {
      console.error("Error submitting form:", error)
      setFormStatus("error")

      // Reset status after 5 seconds
      setTimeout(() => setFormStatus(null), 5000)
    }
  }

  const contactLinks = [
    { icon: <Mail className="h-6 w-6" />, label: "Email", href: "mailto:pratik@example.com" },
    { icon: <Github className="h-6 w-6" />, label: "GitHub", href: "https://github.com/PratikGautam-dev" },
    { icon: <Linkedin className="h-6 w-6" />, label: "LinkedIn", href: "https://linkedin.com/in/pratik" },
  ]

  return (
    <section id="contact" className="py-20 px-4 md:px-8 lg:px-16 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Contact Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss a collaboration? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="border border-primary/10 bg-card/50 backdrop-blur-sm h-full">
              <CardContent className="p-6">
                {formStatus === "success" && (
                  <Alert className="mb-6 border-green-500 bg-green-500/10 text-green-500">
                    <CheckCircle className="h-4 w-4" />
                    <AlertTitle>Success!</AlertTitle>
                    <AlertDescription>Your message has been sent. I'll get back to you soon.</AlertDescription>
                  </Alert>
                )}

                {formStatus === "error" && (
                  <Alert className="mb-6 border-destructive bg-destructive/10 text-destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error!</AlertTitle>
                    <AlertDescription>There was an error sending your message. Please try again.</AlertDescription>
                  </Alert>
                )}

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your name"
                              {...field}
                              className="border-primary/20 focus-visible:ring-primary"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="Your email"
                              {...field}
                              className="border-primary/20 focus-visible:ring-primary"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Your message"
                              {...field}
                              className="min-h-[150px] resize-none border-primary/20 focus-visible:ring-primary"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full gap-2 hover:translate-y-[-2px] transition-all"
                      disabled={form.formState.isSubmitting}
                    >
                      {form.formState.isSubmitting ? (
                        <div className="animate-spin h-4 w-4 border-2 border-t-transparent rounded-full"></div>
                      ) : (
                        <Send className="h-4 w-4" />
                      )}
                      <span>{form.formState.isSubmitting ? "Sending..." : "Send Message"}</span>
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
            <p className="text-muted-foreground mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              Feel free to reach out through the form or via my social profiles.
            </p>

            <div className="space-y-6">
              {contactLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg border border-primary/10 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                  whileHover={{ x: 5, backgroundColor: "rgba(var(--primary), 0.1)" }}
                >
                  <div className="p-2 rounded-full bg-primary/10">{link.icon}</div>
                  <span>{link.label}</span>
                </motion.a>
              ))}
            </div>

            <div className="mt-8 p-6 border border-primary/10 rounded-lg bg-primary/5">
              <h4 className="font-medium mb-2">Response Time</h4>
              <p className="text-sm text-muted-foreground">
                I typically respond to inquiries within 24-48 hours. For urgent matters, please mention it in your
                message.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

