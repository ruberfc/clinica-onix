"use client"

import { useMemo, useState } from "react"
import { contactInfo, faqs } from "@/lib/clinic-data"

const uniqueCategories = Array.from(new Set(faqs.map((faq) => faq.category)))
const categories = ["Todos", ...uniqueCategories]


export function FAQSection() {

  // 2. Inicializar el estado en 'Todos' (el primer elemento de 'categories')
  const [selectedCategory, setSelectedCategory] = useState(categories[0])
  const [expandedId, setExpandedId] = useState<string | null>(null)


  // 3. Ajuste de la lógica de filtrado con useMemo para eficiencia
  const filteredFAQs = useMemo(() => {
    if (selectedCategory === "Todos") {
      return faqs // Si es 'Todos', retorna todas las FAQs
    }
    // Si no es 'Todos', filtra por la categoría seleccionada
    return faqs.filter((faq) => faq.category === selectedCategory)
  }, [selectedCategory]) // Se recalcula solo cuando cambia la categoría seleccionada

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section className="py-16 px-4 bg-background md:py-24">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4"><span className="text-primary">Preguntas</span> Frecuentes</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Resolvemos tus dudas sobre nuestros procedimientos estéticos
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 mb-10 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category)
                setExpandedId(null)
              }}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${selectedCategory === category
                  ? "bg-primary text-white shadow-md"
                  : "bg-muted text-foreground hover:bg-muted/80"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        {/* <div className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <div
              key={faq.id}
              className={`border border-border rounded-lg overflow-hidden transition-all duration-300 ${
                expandedId === faq.id ? "bg-muted/50" : "bg-card hover:border-primary/50"
              }`}
            >
              <button
                onClick={() => toggleExpand(faq.id)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-muted/30 transition-colors duration-200"
              >
                <h3 className="font-semibold text-foreground pr-4 flex-1">{faq.question}</h3>
                <span
                  className={`shrink-0 text-primary transition-transform duration-300 ${
                    expandedId === faq.id ? "rotate-180" : ""
                  }`}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </span>
              </button>

              {expandedId === faq.id && (
                <div className="px-6 py-4 border-t border-border bg-background/50">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div> */}
        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq) => (
              <div
                key={faq.id}
                className={`border border-border rounded-lg overflow-hidden transition-all duration-300 ${expandedId === faq.id ? "bg-muted/50" : "bg-card hover:border-primary/50"
                  }`}
              >
                <button
                  onClick={() => toggleExpand(faq.id)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-muted/30 transition-colors duration-200"
                >
                  <h3 className="font-semibold text-foreground pr-4 flex-1">{faq.question}</h3>
                  <span
                    className={`shrink-0 text-primary transition-transform duration-300 ${expandedId === faq.id ? "rotate-180" : ""
                      }`}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </span>
                </button>

                {expandedId === faq.id && (
                  <div className="px-6 py-4 border-t border-border bg-background/50">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    {/* Opcional: Mostrar la categoría cuando se expande */}
                    {selectedCategory === "Todos" && (
                      <p className="mt-2 text-xs font-medium text-primary/70">
                        Categoría: {faq.category}
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-lg text-muted-foreground">
                No encontramos preguntas frecuentes en la categoría "{selectedCategory}".
              </p>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">¿Tienes más preguntas? Estamos aquí para ayudarte</p>
          <a
            target="_blank"
            href={`https://wa.me/${contactInfo.whatsapp}?text=Hola%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20servicios`}
            className="inline-block px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors duration-200"
          >
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
