import { contactInfo, services } from "@/lib/clinic-data"

export function ServicesSection() {
  return (
    <section id="servicios" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4"> Nuestros <span className="text-primary">Servicios</span></h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Contamos con un amplio catálogo de procedimientos especializados en rinoplastia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                {service.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 min-h-10">{service.description}</p>
              {/* <p className="text-secondary font-bold">{service.price}</p> */}

              <a
                target="_blank"
                href={`https://wa.me/${contactInfo.whatsapp}?text=Hola%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20servicios`}
                className="inline-block px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors duration-200"
              >
                Contactar
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
