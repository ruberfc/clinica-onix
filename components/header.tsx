"use client"

import { useState } from "react"
import Link from "next/link"
import { Sun, Moon, Menu, X } from "lucide-react"
import { socialLinks } from "@/lib/clinic-data"

interface HeaderProps {
  isDark: boolean
  setIsDark: (value: boolean) => void
}

export function Header({ isDark, setIsDark }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="shrink-0 flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground text-xl font-bold">O</span>
            </div>
            <span className="hidden sm:block text-lg font-bold text-primary">ÓNIX</span>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#inicio" className="text-foreground hover:text-primary transition-colors">
              Inicio
            </Link>
            <Link href="#servicios" className="text-foreground hover:text-primary transition-colors">
              Servicios
            </Link>
            <Link href="#galeria" className="text-foreground hover:text-primary transition-colors">
              Galería
            </Link>
            <Link href="#equipo" className="text-foreground hover:text-primary transition-colors">
              Equipo
            </Link>
            <Link href="#testimonios" className="text-foreground hover:text-primary transition-colors">
              Testimonios
            </Link>
            <Link href="#contacto" className="text-foreground hover:text-primary transition-colors">
              Contacto
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">

            {socialLinks.map((link) => (
              <a
                title={link.name}
                key={link.name} // La clave única es crucial en React
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-muted transition-colors"
                aria-label={link.ariaLabel}
              >
                {/* El componente de icono se renderiza dinámicamente usando 'link.Icon' */}
                <link.Icon className="w-5 h-5 text-primary" />
              </a>
            ))}

            <div className="h-6 border-l border-gray-300 dark:border-gray-600"></div>

            {/* Theme Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5 text-primary" /> : <Moon className="w-5 h-5 text-secondary" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* CTA Button */}
            <a
              href="#contacto"
              className="hidden sm:inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium"
            >
              Reservar
            </a>
          </div>

        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border space-y-2">
            <Link href="#inicio" className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg">
              Inicio
            </Link>
            <Link href="#servicios" className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg">
              Servicios
            </Link>
            <Link href="#galeria" className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg">
              Galería
            </Link>
            <Link href="#equipo" className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg">
              Equipo
            </Link>
            <Link href="#testimonios" className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg">
              Testimonios
            </Link>
            <Link href="#contacto" className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg">
              Contacto
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
