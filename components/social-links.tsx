"use client"

import { useEffect, useRef, useState } from "react"
import { Github, Linkedin, Mail, FileText } from "lucide-react"

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/andikadibya",
    color: "hover:text-[#0A66C2]",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/andikadibyaa",
    color: "hover:text-foreground",
  },
  {
    name: "Gmail",
    icon: Mail,
    href: "mailto:andikadibya92@gmail.com",
    color: "hover:text-[#EA4335]",
  },
  {
    name: "Medium",
    icon: FileText,
    href: "https://medium.com/@andikadibya76",
    color: "hover:text-foreground",
  },
]

export function SocialLinks() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="min-h-[80vh] md:min-h-screen flex items-center justify-center px-4 py-16 md:py-20"
    >
      <div className="max-w-4xl mx-auto w-full">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-primary text-center">
            Let's Connect
          </h2>
          <p className="text-lg sm:text-xl text-center text-muted-foreground mb-8 md:mb-12 text-balance px-4">
            Feel free to reach out through any of these platforms
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-2xl mx-auto">
            {socialLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative overflow-hidden rounded-xl bg-card border border-border p-6 md:p-8 transition-all duration-500 hover:scale-105 hover:border-primary hover:shadow-xl hover:shadow-primary/20 active:scale-95 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <Icon
                          className={`w-5 h-5 md:w-6 md:h-6 text-primary transition-all duration-300 group-hover:scale-110 ${link.color}`}
                        />
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {link.name}
                      </h3>
                      <p className="text-xs md:text-sm text-muted-foreground">Connect with me</p>
                    </div>

                    <svg
                      className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </a>
              )
            })}
          </div>

          <div className="mt-12 md:mt-20 text-center px-4">
            <p className="text-sm md:text-base text-muted-foreground">
              © {new Date().getFullYear()} Andika Dibya Azzumardi. Built with Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
