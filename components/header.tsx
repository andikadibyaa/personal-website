"use client"

import { Linkedin, Github, Mail } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3 md:px-6 md:py-4">
      <div className="max-w-7xl mx-auto flex justify-end items-center gap-3 md:gap-4">
        <a
          href="https://linkedin.com/in/andikadibya"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 md:w-9 md:h-9 flex items-center justify-center rounded-lg bg-background/50 backdrop-blur-sm border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-5 h-5 md:w-4 md:h-4" />
        </a>
        <a
          href="https://github.com/andikadibyaa"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 md:w-9 md:h-9 flex items-center justify-center rounded-lg bg-background/50 backdrop-blur-sm border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="GitHub"
        >
          <Github className="w-5 h-5 md:w-4 md:h-4" />
        </a>
        <a
          href="mailto:andikadibya92@gmail.com"
          className="w-11 h-11 md:w-9 md:h-9 flex items-center justify-center rounded-lg bg-background/50 backdrop-blur-sm border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Email"
        >
          <Mail className="w-5 h-5 md:w-4 md:h-4" />
        </a>
        <a
          href="https://medium.com/@andikadibya76"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 md:w-9 md:h-9 flex items-center justify-center rounded-lg bg-background/50 backdrop-blur-sm border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Medium"
        >
          <svg className="w-5 h-5 md:w-4 md:h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
          </svg>
        </a>
      </div>
    </header>
  )
}
