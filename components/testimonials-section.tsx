"use client";

import { testimonials } from "@/lib/clinic-data";
import { useEffect, useRef, useState } from "react";
import { Card } from "./ui/card";

export function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // Para pausar autoplay al interactuar

  const carouselRef = useRef<HTMLDivElement>(null);

  const totalSlides = testimonials.length;
  const intervalTime = 4000; // 5 segundos

  // 👉 AUTOPLAY: cambia slide automáticamente
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [isPaused, totalSlides]);

  // 👉 Al cambiar currentSlide → mueve el carrusel
  useEffect(() => {
    if (!carouselRef.current) return;
    const child = carouselRef.current.children[currentSlide] as HTMLElement;
    if (child) {
      carouselRef.current.scrollTo({
        left: child.offsetLeft,
        behavior: "smooth",
      });
    }
  }, [currentSlide]);

  // 👉 Funciones de navegación
  const nextSlide = () => {
    setIsPaused(true); // Pausa autoplay
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    // Reanuda después de 3 segundos de inactividad
    setTimeout(() => setIsPaused(false), 3000);
  };

  const prevSlide = () => {
    setIsPaused(true);
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setTimeout(() => setIsPaused(false), 3000);
  };

  return (
    <>
      <style jsx global>{`
    .scrollbar-hide {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    .scrollbar-hide::-webkit-scrollbar {
      display: none;
    }
  `}</style>

      <section id="testimonios" className="py-20 md:py-28 bg-muted/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Lo que dicen nuestros <span className="text-primary">Pacientes</span>
            </h2>
            <p className="text-muted-foreground dark:text-white text-lg max-w-2xl mx-auto">
              Testimonios de pacientes satisfechos con sus transformaciones
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Flecha izquierda */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-800 transition-colors"
              aria-label="Testimonio anterior"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Contenedor del carrusel */}
            <div
              id="testimonial-carousel"
              className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-6 py-6 px-4"
              ref={carouselRef}
              style={{ scrollSnapType: "x mandatory", scrollBehavior: "smooth" }}
            >

              {testimonials.map((item, index) => (
                <div
                  key={index}
                  className="snap-start shrink-0 w-[90vw] sm:w-[45vw] md:w-[30vw] lg:w-[22vw] xl:w-[18vw]"
                >
                  <Card className="bg-white/50 dark:bg-gray-500/50 backdrop-blur-sm border border-gray-800 dark:border-gray-200 rounded-xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative">

                    {/* 👉 Estrellitas en la esquina superior derecha */}
                    <div className="absolute top-3 right-3 flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < item.rating ? 'text-amber-400' : 'text-gray-300 dark:text-gray-600'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-full mx-auto object-cover shadow mb-4"
                    />
                    <h3 className="font-bold text-lg text-foreground mb-2">
                      {item.name}
                    </h3>
                    <p className="text-sm text-muted-foreground dark:text-white leading-relaxed">
                      {item.content}
                    </p>
                  </Card>
                </div>
              ))}
            </div>

            {/* Flecha derecha */}
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-800 transition-colors"
              aria-label="Siguiente testimonio"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Dots solo visuales */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <span
                  key={index}
                  className={`block w-3 h-3 rounded-full transition-colors ${index === currentSlide
                    ? "bg-primary"
                    : "bg-gray-300 dark:bg-gray-600"
                    }`}
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>

  );
}