"use client"

import { useState, useEffect } from "react"
import { sliderImages } from "@/lib/clinic-data"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function GallerySlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [autoPlay])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + sliderImages.length) % sliderImages.length)
    setAutoPlay(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % sliderImages.length)
    setAutoPlay(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setAutoPlay(false)
  }

  return (
    <div className="relative w-full bg-muted rounded-xl overflow-hidden group">
      {/* Slider Container */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        {sliderImages.map((image, index) => (
          <div
            key={image.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
          </div>
        ))}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent pointer-events-none" />

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100"
          aria-label="Imagen anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={goToNext}
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100"
          aria-label="Siguiente imagen"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Counter */}
        <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium">
          {currentIndex + 1} / {sliderImages.length}
        </div>
      </div>

      {/* Dot Navigation */}
      <div className="flex justify-center gap-2 p-4 bg-muted">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-primary w-8" : "bg-muted-foreground/40 hover:bg-muted-foreground/60"
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
