'use client'

import { useState } from 'react'
import { successCases } from '@/lib/clinic-data'
import { BeforeAfterSlider } from './before-after-slider'

export function SuccessCasesSection() {
  const [activeCategory, setActiveCategory] = useState('Todos')

  const categories = ['Todos', ...new Set(successCases.map(c => c.category))]
  const filteredCases = activeCategory === 'Todos'
    ? successCases
    : successCases.filter(c => c.category === activeCategory)

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4"> <span className="text-primary">Casos de Éxito</span></h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Antes y después de nuestros procedimientos de rinoplastia. Desliza la línea para ver la transformación completa
          </p>

        </div>

        {/* Filtros por categoría */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 md:mb-16">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 md:px-6 py-2 rounded-full font-semibold transition-all duration-300 ${activeCategory === category
                ? 'bg-primary text-white shadow-lg'
                : 'bg-muted text-foreground hover:bg-muted/80'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid de casos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {filteredCases.map(successCase => (
            <div key={successCase.id} className="group">
              <BeforeAfterSlider
                beforeImage={successCase.before}
                afterImage={successCase.after}
                title={successCase.title}
              />
              <div className="mt-4 text-center">
                <h3 className="text-lg font-bold text-foreground mb-1">
                  {successCase.title}
                </h3>
                <p className="text-sm text-foreground/60 mb-2">
                  {successCase.description}
                </p>
                <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                  {successCase.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mensaje si no hay casos */}
        {filteredCases.length === 0 && (
          <div className="text-center py-12">
            <p className="text-foreground/60">
              No hay casos disponibles en esta categoría
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
