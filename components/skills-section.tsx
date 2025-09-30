"use client"

import { useEffect, useRef, useState } from "react"

const skills = [
  "Python",
  "R",
  "SQL",
  "Excel",
  "Tableau",
  "SAS",
  "Machine Learning",
  "Statistical Analysis",
  "Data Visualization",
  "Predictive Modeling",
  "Fraud Detection",
  "AI Integration",
]

export function SkillsSection() {
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-primary">Skills & Expertise</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className={`group relative overflow-hidden rounded-lg bg-card border border-border p-4 md:p-6 transition-all duration-500 hover:scale-105 hover:border-primary hover:shadow-lg hover:shadow-primary/20 active:scale-95 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <p className="relative text-center text-sm md:text-base font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                  {skill}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
