export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative py-20 md:py-32 bg-linear-to-br from-primary/5 to-secondary/10 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
            Tu <span className="text-primary">Nariz Perfecta</span> es Nuestro Arte
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-balance">
            Especialistas en rinoplastia quirúrgica y no invasiva con más de 15 años de experiencia transformando
            sonrisas y confianza
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contacto"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium text-center"
            >
              Consulta Gratuita
            </a>
            <a
              href="#galeria"
              className="px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors font-medium text-center"
            >
              Ver Casos
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-16 rounded-2xl overflow-hidden shadow-2xl">
          <img src="/clinic-hero-rinoplastia-surgery.jpg" alt="Clínica estética" className="w-full h-auto object-cover" />
        </div>
      </div>
    </section>
  )
}
