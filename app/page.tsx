"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { HeroSlider } from "@/components/hero-slider"
import { ProceduresTabs } from "@/components/procedures-tabs"
import { ServicesSection } from "@/components/services-section"
import { GallerySection } from "@/components/gallery-section"
import { TeamSection } from "@/components/team-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { AboutSection } from "@/components/about-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { FAQSection } from "@/components/faq-section"
import { SuccessCasesSection } from "@/components/success-cases-section"

export default function Home() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const isDarkMode =
      document.documentElement.classList.contains("dark") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches && !localStorage.getItem("theme"))
    setIsDark(isDarkMode)
  }, [])

  if (!mounted) return null

  return (
    <div className={isDark ? "dark" : ""}>
      <Header isDark={isDark} setIsDark={setIsDark} />
      <main>
        <HeroSlider />
        <AboutSection />
        <ProceduresTabs />
        <WhyChooseUsSection />
        <SuccessCasesSection />
        <ServicesSection />
        <GallerySection />
        <TeamSection />
        <FAQSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
