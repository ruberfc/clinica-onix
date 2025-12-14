"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { sliderImages, clinicInfo } from "@/lib/clinic-data"

export function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlay])

  const goToPrevious = () => {
    setIsAutoPlay(false)
    setCurrentIndex((prev) => (prev - 1 + sliderImages.length) % sliderImages.length)
  }

  const goToNext = () => {
    setIsAutoPlay(false)
    setCurrentIndex((prev) => (prev + 1) % sliderImages.length)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlay(false)
    setCurrentIndex(index)
  }

  useEffect(() => {
    if (!isAutoPlay) {
      const timeout = setTimeout(() => {
        setIsAutoPlay(true)
      }, 8000)
      return () => clearTimeout(timeout)
    }
  }, [isAutoPlay])

  return (
    <section className="relative w-full h-screen bg-background overflow-hidden">
      {/* Slider Container */}
      <div className="relative w-full h-full">
        {sliderImages.map((image, index) => (
          <div
            key={image.id}
            className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-between px-4 sm:px-8 z-10 pointer-events-none">
        <div className="flex flex-col justify-center h-full max-w-2xl pointer-events-auto pl-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight text-balance">
            Te acompañamos a lograr tu mejor versión
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed">
            Especialistas en rinoplastia con más de 15 años de experiencia
          </p>

          {/* Botones de contacto */}
          {/* <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${clinicInfo.doctorPhone}`}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-semibold inline-flex items-center justify-center whitespace-nowrap"
            >
              📞 Médico de Guardia
            </a>
            <a
              href={`tel:${clinicInfo.budgetPhone}`}
              className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:opacity-90 transition-opacity font-semibold inline-flex items-center justify-center whitespace-nowrap"
            >
              💰 Presupuesto
            </a>
          </div> */}

        </div>

        {/* Right side with stats */}
        <div className="hidden lg:flex items-center justify-end h-full pr-16">
          <div className="text-right text-white bg-black/30 px-6 py-8 rounded-lg backdrop-blur-sm">
            <p className="text-sm mb-4 opacity-75 font-medium">Resultados Comprobados</p>
            <div className="text-5xl font-bold">2,500+</div>
            <p className="text-sm mt-2 opacity-90">Procedimientos Exitosos</p>
          </div>
        </div>
      </div>

      {/* Previous Button */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-foreground p-2 md:p-3 rounded-full transition-all duration-200"
        aria-label="Imagen anterior"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Next Button */}
      <button
        onClick={goToNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-foreground p-2 md:p-3 rounded-full transition-all duration-200"
        aria-label="Siguiente imagen"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-primary w-8 md:w-10" : "bg-white/60 hover:bg-white/80"
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>

      {/* Image Counter */}
      <div className="absolute top-6 right-6 z-20 bg-black/50 text-white px-3 py-1.5 rounded-full text-sm">
        {currentIndex + 1}/{sliderImages.length}
      </div>
    </section>
  )
}
