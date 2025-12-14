"use client"

import { useState } from "react"
import { procedures } from "@/lib/clinic-data"
import { ChevronRight } from "lucide-react"

export function ProceduresTabs() {
  const [activeTab, setActiveTab] = useState("1")

  const activeProcedure = procedures.find((p) => p.id === activeTab)

  return (
    <section id="procedimientos" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nuestros <span className="text-primary">Procedimientos</span></h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Descubre nuestros servicios especializados en cirugía estética y reconstructiva
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Tabs Navigation */}
          <div className="lg:col-span-1">
            <div className="space-y-2 sticky top-20">
              {procedures.map((procedure) => (
                <button
                  key={procedure.id}
                  onClick={() => setActiveTab(procedure.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === procedure.id
                      ? "bg-primary text-primary-foreground shadow-lg scale-105"
                      : "bg-muted text-foreground hover:bg-muted/80"
                  }`}
                >
                  <span className="flex items-center justify-between">
                    <span className="text-sm">{procedure.shortName}</span>
                    {activeTab === procedure.id && <ChevronRight className="w-4 h-4" />}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Content Display */}
          <div className="lg:col-span-2">
            {activeProcedure && (
              <div className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-md">
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium mb-3">
                    {activeProcedure.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 text-primary">{activeProcedure.name}</h3>
                  <p className="text-muted-foreground text-lg">{activeProcedure.description}</p>
                </div>

                <div className="mb-8 p-4 bg-muted/30 rounded-lg border border-border">
                  <p className="text-foreground leading-relaxed">{activeProcedure.fullDescription}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Beneficios</h4>
                    <ul className="space-y-2">
                      {activeProcedure.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-primary font-bold mt-0.5">•</span>
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Recuperación</h4>
                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                      <p className="text-muted-foreground">{activeProcedure.recovery}</p>
                    </div>
                  </div>
                </div>

                {/* <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-lg transition-colors">
                  Agendar Consulta
                </button> */}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
