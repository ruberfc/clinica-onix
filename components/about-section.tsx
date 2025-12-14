"use client"

import { clinicInfo, clinicStats, whyChooseUs } from "@/lib/clinic-data"

export function AboutSection() {
  return (
    <section className="py-20 bg-muted">
      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {clinicStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{stat.icon}</div>
              <p className="text-3xl font-bold text-foreground mb-1">{stat.value}</p>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mission and Vision */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Misión */}
          <div className="bg-background rounded-lg p-8 shadow-sm border border-border">
            <h3 className="text-2xl font-bold text-primary mb-4">Nuestra Misión</h3>
            <p className="text-foreground leading-relaxed">{clinicInfo.mission}</p>
          </div>

          {/* Visión */}
          <div className="bg-background rounded-lg p-8 shadow-sm border border-border">
            <h3 className="text-2xl font-bold text-primary mb-4">Nuestra Visión</h3>
            <p className="text-foreground leading-relaxed">{clinicInfo.vision}</p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20 px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nuestros <span className="text-primary">Valores Fundamentales</span></h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Nos regimos por los valores de personalización, empatía y transparencia, garantizando un trato humano y resultados que respetan tu armonía facial y corporal.
            </p>
          </div>



          {/* Contenedor Responsivo de Valores */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2 sm:gap-2">
            {clinicInfo.values.map((value, index) => (
              <div
                key={value.title}
                className="group
                flex flex-col items-center 
                p-6 rounded-2xl shadow-md transition-all duration-300 ease-in-out
                bg-white dark:bg-gray-800
                border border-gray-100 dark:border-gray-700
                hover:shadow-xl hover:-translate-y-1 hover:border-indigo-200 dark:hover:border-indigo-800
                cursor-pointer">
                {/* Icono */}
                <div className="relative p-4 mb-4 rounded-full 
                bg-indigo-500 dark:bg-indigo-600 
                text-white dark:text-gray-900
                shadow-lg
                transition-transform duration-300 group-hover:scale-110"
                >
                  <value.Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>

                {/* Título */}
                <h3 className="
                  text-lg sm:text-xl font-bold mb-2 text-gray-900 dark:text-white
                  text-center leading-tight
                  transition-colors duration-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400"
                >
                  {value.title}
                </h3>

                {/* Descripción */}
                <p className="
                  text-xs sm:text-sm text-gray-600 dark:text-gray-300 
                  text-center leading-relaxed
                  transition-opacity duration-300 group-hover:text-gray-800 dark:group-hover:text-gray-200"
                >
                  {value.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>

    </section>
  )
}
