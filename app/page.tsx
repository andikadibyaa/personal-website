import { Header } from "@/components/header"
import { DecorativeElements } from "@/components/decorative-elements"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SocialLinks } from "@/components/social-links"
import { SkillsSection } from "@/components/skills-section"

export default function Home() {
  return (
    <>
      <Header />
      <DecorativeElements />
      <main className="min-h-screen relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <SocialLinks />
      </main>
    </>
  )
}
