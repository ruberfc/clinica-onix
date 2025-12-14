import { contactInfo, socialLinks } from "@/lib/clinic-data"
import { Phone } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">Estética Ónix</h3>
            <p className="text-sm opacity-80">
              Especialistas en rinoplastia quirúrgica y no invasiva con más de 15 años de experiencia.
            </p>
          </div>

          {/* Services */}
          {/* <div>
            <h3 className="font-bold text-lg mb-4">Servicios</h3>
            <ul className="text-sm space-y-2 opacity-80">
              <li>
                <a href="#servicios" className="hover:opacity-100 transition">
                  Rinoplastia Quirúrgica
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:opacity-100 transition">
                  Rinoplastia No Invasiva
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:opacity-100 transition">
                  Corrección Septal
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:opacity-100 transition">
                  Revisión Rinoplastia
                </a>
              </li>
            </ul>
          </div> */}

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Enlaces</h3>
            <ul className="text-sm space-y-2 opacity-80">
              <li>
                <a href="#inicio" className="hover:opacity-100 transition">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#equipo" className="hover:opacity-100 transition">
                  Equipo Médico
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:opacity-100 transition">
                  Galería
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:opacity-100 transition">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-bold text-lg mb-4">Síguenos</h3>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name} // Clave única para optimización de React
                  href={link.href}
                  title={link.name} // Atributo title para accesibilidad
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-80 hover:opacity-100 transition"
                  aria-label={`Visita nuestro perfil de ${link.ariaLabel}`}
                >
                  {/* Renderiza el componente de icono dinámicamente */}
                  <link.Icon className="w-5 h-5" />
                </a>
              ))}

              <a
                  href={`https://wa.me/${contactInfo.whatsapp}?text=Hola%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20servicios`}
                  title={"WhatsApp"} // Atributo title para accesibilidad
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-80 hover:opacity-100 transition"
                  aria-label={`Visita nuestro perfil de WhatsApp`}
                >
                  {/* Renderiza el componente de icono dinámicamente */}
                  <FaWhatsapp className="w-5 h-5" />
                </a>
            </div>
            
            {/* <span className="text-sm flex"><Phone className="w-4 h-4 mr-2"/> {contactInfo.phone}</span> */}
            
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm opacity-80">
          <p>&copy; {currentYear} ÓNIX Cirugía Plástica. Todos los derechos reservados.</p>
          {/* <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:opacity-100 transition">
              Privacidad
            </a>
            <a href="#" className="hover:opacity-100 transition">
              Términos
            </a>
            <a href="#" className="hover:opacity-100 transition">
              Cookies
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  )
}
