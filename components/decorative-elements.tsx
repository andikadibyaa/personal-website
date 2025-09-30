"use client"

export function DecorativeElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 hidden md:block">
      {/* Animated geometric shapes */}

      {/* Top left corner decoration */}
      <div className="absolute top-20 left-10 w-20 h-20 border-2 border-primary/20 rounded-lg rotate-12 animate-spin-slow" />
      <div className="absolute top-32 left-24 w-3 h-3 bg-accent/40 rounded-full animate-pulse" />

      {/* Top right corner decoration */}
      <div className="absolute top-40 right-16 w-16 h-16 border-2 border-accent/20 rotate-45 animate-float" />
      <div
        className="absolute top-24 right-32 w-2 h-2 bg-primary/40 rounded-full animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      {/* Middle left decoration */}
      <div
        className="absolute top-1/2 left-8 w-24 h-24 border border-primary/10 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 left-20 w-4 h-4 bg-accent/30 rotate-45 animate-pulse"
        style={{ animationDelay: "1.5s" }}
      />

      {/* Middle right decoration */}
      <div
        className="absolute top-1/3 right-12 w-32 h-32 border-2 border-accent/15 rounded-lg -rotate-12 animate-spin-slow"
        style={{ animationDelay: "3s" }}
      />
      <div
        className="absolute top-1/2 right-24 w-3 h-3 bg-primary/40 rounded-full animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      {/* Bottom left decoration */}
      <div
        className="absolute bottom-32 left-16 w-20 h-20 border-2 border-primary/20 rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div className="absolute bottom-48 left-32 w-16 h-16 border border-accent/15 rotate-45 animate-spin-slow" />

      {/* Bottom right decoration */}
      <div
        className="absolute bottom-24 right-20 w-24 h-24 border-2 border-accent/20 rounded-lg rotate-12 animate-float"
        style={{ animationDelay: "2.5s" }}
      />
      <div
        className="absolute bottom-40 right-12 w-3 h-3 bg-primary/40 rounded-full animate-pulse"
        style={{ animationDelay: "0.5s" }}
      />

      {/* Connecting lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <line
          x1="10%"
          y1="20%"
          x2="30%"
          y2="40%"
          stroke="currentColor"
          strokeWidth="1"
          className="text-primary animate-pulse"
        />
        <line
          x1="70%"
          y1="30%"
          x2="85%"
          y2="50%"
          stroke="currentColor"
          strokeWidth="1"
          className="text-accent animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <line
          x1="15%"
          y1="60%"
          x2="25%"
          y2="80%"
          stroke="currentColor"
          strokeWidth="1"
          className="text-primary animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </svg>

      {/* Scattered dots */}
      <div className="absolute top-1/4 left-1/3 w-1.5 h-1.5 bg-primary/30 rounded-full animate-pulse" />
      <div
        className="absolute top-2/3 left-1/4 w-1.5 h-1.5 bg-accent/30 rounded-full animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-primary/30 rounded-full animate-pulse"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-accent/30 rounded-full animate-pulse"
        style={{ animationDelay: "1.5s" }}
      />
    </div>
  )
}
