'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  title: string
}

export function BeforeAfterSlider({ beforeImage, afterImage, title }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isActive, setIsActive] = useState(false)

  const handleMouseDown = () => {
    setIsActive(true)
  }

  const handleMouseUp = () => {
    setIsActive(false)
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isActive || !containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = (x / rect.width) * 100

    if (percentage >= 0 && percentage <= 100) {
      setSliderPosition(percentage)
    }
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = e.touches[0].clientX - rect.left
    const percentage = (x / rect.width) * 100

    if (percentage >= 0 && percentage <= 100) {
      setSliderPosition(percentage)
    }
  }

  useEffect(() => {
    if (isActive) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      document.addEventListener('touchmove', handleTouchMove)
      document.addEventListener('touchend', handleMouseUp)

      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
        document.removeEventListener('touchmove', handleTouchMove)
        document.removeEventListener('touchend', handleMouseUp)
      }
    }
  }, [isActive])

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-lg cursor-col-resize group"
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
    >
      {/* Contenedor de la imagen - After (Después) */}
      <div className="relative aspect-square w-full bg-background">
        <Image
          src={afterImage || "/placeholder.svg?height=600&width=600&query=after rhinoplasty"}
          alt={`${title} - Después`}
          fill
          className="object-cover"
          quality={85}
        />
      </div>

      {/* Contenedor de la imagen - Before (Antes) superpuesta */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <div className="relative aspect-square w-screen">
          <Image
            src={beforeImage || "/placeholder.svg?height=600&width=600&query=before rhinoplasty"}
            alt={`${title} - Antes`}
            fill
            className="object-cover"
            quality={85}
          />
        </div>
      </div>

      {/* Línea divisoria */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-primary to-accent cursor-col-resize transition-all group-hover:w-2"
        style={{ left: `${sliderPosition}%` }}
      />

      {/* Icono de doble flecha */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary/90 hover:bg-primary text-white rounded-full p-3 shadow-lg transition-all group-hover:scale-110 pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7M9 19l-7-7 7-7"
          />
        </svg>
      </div>

      {/* Labels de antes y después */}
      <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-semibold">
        ANTES
      </div>
      <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
        DESPUÉS
      </div>
    </div>
  )
}
