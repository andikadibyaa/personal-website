"use client"

import { useEffect, useRef, useState } from "react"

export function AboutSection() {
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
      <div className="max-w-4xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-primary">About Me</h2>
          <div className="space-y-4 md:space-y-6 text-base sm:text-lg leading-relaxed text-foreground/90">
            <p className="text-pretty">
              I'm a recent Statistics graduate from Institut Teknologi Sepuluh Nopember with over a year of professional
              experience using data to identify trends and mitigate business risks. I possess 2 years of proven
              leadership experience from managing projects and teams.
            </p>
            <p className="text-pretty">
              I'm eager to apply a data-driven approach and build a career in data, machine learning, and artificial
              intelligence. My expertise spans statistical analysis, predictive modeling, data visualization, and AI
              system integration.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
