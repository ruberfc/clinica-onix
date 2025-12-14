import { contactInfo } from "@/lib/clinic-data"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contacto" className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">¿Listo para tu transformación?</h2>
            <p className="text-lg mb-8 opacity-90">Agenda tu consulta gratuita con nuestros especialistas</p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 mt-1 shrink-0" />
                <div>
                  <p className="font-semibold">Teléfono</p>
                  <a href={`https://wa.me/${contactInfo.whatsapp}?text=Hola%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20servicios`} className="opacity-90 hover:opacity-100" target="_blank">
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 mt-1 shrink-0" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a href={`mailto:${contactInfo.email}`} className="opacity-90 hover:opacity-100">
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 mt-1 shrink-0" />
                <div>
                  <p className="font-semibold">Ubicación</p>
                  <p className="opacity-90">{contactInfo.address}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 mt-1 shrink-0" />
                <div>
                  <p className="font-semibold">Horario</p>
                  <p className="opacity-90 text-sm">{contactInfo.hours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-primary-foreground text-foreground p-8 rounded-xl space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                placeholder="Tu nombre"
                className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="tu@email.com"
                className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                Teléfono
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="+51 999 999 999"
                className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                placeholder="Cuéntanos sobre tu consulta..."
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-semibold"
            >
              Enviar Consulta
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
