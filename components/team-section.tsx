import { doctors } from "@/lib/clinic-data"

export function TeamSection() {
  return (
    <section id="equipo" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4"> Nuestro <span className="text-primary">Equipo Médico</span></h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Profesionales altamente capacitados y certificados
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="rounded-xl overflow-hidden bg-card shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-80 overflow-hidden bg-muted">
                <img
                  src={doctor.image || "/placeholder.svg"}
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{doctor.name}</h3>
                <p className="text-primary font-semibold mb-4">{doctor.specialty}</p>
                <p className="text-muted-foreground mb-4">{doctor.bio}</p>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">{doctor.credentials}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
