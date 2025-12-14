'use client'

import { useState } from 'react'
import { contactInfo, whyChooseUs } from '@/lib/clinic-data'

export function WhyChooseUsSection() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="py-20 bg-linear-to-b from-background to-secondary/50 dark:from-background dark:to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <span className="text-primary">Por Qué Elegirnos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Somos líderes en cirugía estética especializada con excelencia, innovación y resultados comprobados que transforman vidas
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {whyChooseUs.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(index)}
              className={`
                px-6 py-3 rounded-full font-semibold transition-all duration-300
                ${activeTab === index
                  ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                  : 'bg-secondary text-foreground hover:bg-secondary/80 dark:bg-secondary/20 dark:hover:bg-secondary/30'
                }
              `}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Content Display */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Selected Item */}
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <div className="text-6xl">{whyChooseUs[activeTab].icon}</div>
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  {whyChooseUs[activeTab].title}
                </h3>
                <p className="text-lg text-secondary-foreground leading-relaxed">
                  {whyChooseUs[activeTab].description}
                </p>
              </div>
              {/* <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors">
                Conocer Más
              </button> */}
              <a
                target="_blank"
                href={`https://wa.me/${contactInfo.whatsapp}?text=Hola%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20servicios`}
                className="inline-block px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors duration-200"
              >
                Conocer Más
              </a>
            </div>
          </div>

          {/* Right Side - Grid of All Items */}
          <div className="order-1 md:order-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyChooseUs.map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => setActiveTab(index)}
                  className={`
                    p-6 rounded-lg border-2 cursor-pointer transition-all duration-300
                    ${activeTab === index
                      ? 'border-primary bg-primary/5 dark:bg-primary/10 shadow-lg'
                      : 'border-secondary hover:border-primary/50 bg-background dark:bg-secondary/5 hover:bg-secondary/10'
                    }
                  `}
                >
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className={`text-sm ${activeTab === index ? 'text-foreground' : 'text-secondary-foreground'}`}>
                    {item.description.substring(0, 60)}...
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-secondary">
          {[
            { label: 'Años de Experiencia', value: '15+' },
            { label: 'Procedimientos Exitosos', value: '2,500+' },
            { label: 'Pacientes Satisfechos', value: '98%' },
            { label: 'Especialistas', value: '8' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
