'use client'

import { Button } from "@/components/ui/button";
import { Phone, Mail, ChevronDown, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Header = () => {
  const pathname = usePathname();
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showSectoresDropdown, setShowSectoresDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    { name: "Pausas Activas", path: "/servicios/pausas-activas" },
    { name: "Bienestar Emocional", path: "/servicios/bienestar-emocional" },
    { name: "Certificación Pausas Activas", path: "/servicios/certificacion-pausas-activas" },
    { name: "Eventos Corporativos", path: "/servicios/eventos-corporativos" },
    { name: "Gimnasia Laboral", path: "/servicios/gimnasia-laboral" },
    { name: "Implementación Bienestar", path: "/servicios/implementacion-bienestar" },
    { name: "Masajes Antiestrés", path: "/servicios/masajes-antiestres" },
    { name: "Programas Virtuales", path: "/servicios/programas-virtuales" },
  ];

  const sectores = [
    { name: "Call Centers", path: "/sectores/call-centers" },
    { name: "Fábricas e Industrias", path: "/sectores/fabricas" },
    { name: "Oficinas Corporativas", path: "/sectores/oficinas-corporativas" },
    { name: "Bancos y Financieras", path: "/sectores/banca-finanzas" },
    { name: "Empresas de Tecnología", path: "/sectores/tecnologia" },
    { name: "Logística y Transporte", path: "/sectores/logistica" },
  ];

  return (
    <header className="bg-primary text-primary-foreground fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="logo-tr">
                <img 
                  src="/lovable-uploads/logo_trainer.png" 
                  alt="Trainermax Latinoamerica" 
                  className="h-auto rounded-lg"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-8 relative">
            <Link href="/" className={`hover:underline transition-colors ${pathname === '/' ? 'text-secondary' : ''}`}>
              Inicio
            </Link>
            <Link href="/nosotros" className={`hover:underline transition-colors ${pathname === '/nosotros' ? 'text-secondary' : ''}`}>
              Nosotros
            </Link>

            {/* Dropdown Servicios */}
            <div
              className="relative group"
              onMouseEnter={() => setShowServicesDropdown(true)}
              onMouseLeave={() => setShowServicesDropdown(false)}
            >
              <Link
                href="/servicios"
                className={`flex items-center space-x-1 hover:underline transition-colors ${pathname.includes('/servicios') ? 'text-secondary' : ''}`}
              >
                <span>Servicios</span>
                <ChevronDown className="w-4 h-4" />
              </Link>

              <div
                className={`absolute left-0 top-full bg-white text-black rounded-md shadow-lg py-2 w-56 z-50 transition-opacity duration-150 ${
                  showServicesDropdown ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
              >
                {services.map((service) => (
                  <Link
                    key={service.path}
                    href={service.path}
                    className="block px-4 py-2 hover:bg-gray-100 text-sm"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Dropdown Sectores */}
            <div
              className="relative group"
              onMouseEnter={() => setShowSectoresDropdown(true)}
              onMouseLeave={() => setShowSectoresDropdown(false)}
            >
              <Link
                href="/sectores"
                className={`flex items-center space-x-1 hover:underline transition-colors ${pathname.includes('/sectores') ? 'text-secondary' : ''}`}
              >
                <span>Sectores</span>
                <ChevronDown className="w-4 h-4" />
              </Link>

              <div
                className={`absolute left-0 top-full bg-white text-black rounded-md shadow-lg py-2 w-56 z-50 transition-opacity duration-150 ${
                  showSectoresDropdown ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
              >
                {sectores.map((sector) => (
                  <Link
                    key={sector.path}
                    href={sector.path}
                    className="block px-4 py-2 hover:bg-gray-100 text-sm"
                  >
                    {sector.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/pausas-activas" className={`hover:underline transition-colors ${pathname === '/pausas-activas' ? 'text-secondary' : ''}`}>
              Pausas Activas
            </Link>
          </nav>

          {/* Contact Info */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <a href="tel:+51985172717" className="text-sm hover:text-secondary transition-colors">+51 985 172 717</a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:team@luistrainermax.com" className="text-sm hover:text-secondary transition-colors">team@luistrainermax.com</a>
            </div>
            <a
              href="https://wa.me/51985172717?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20los%20servicios%20de%20TrainerMax"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary" size="sm">Contacto</Button>
            </a>
          </div>

          {/* Burger Button */}
          <div className="lg:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 space-y-4 bg-primary text-primary-foreground px-4 py-6 rounded-md shadow-lg">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block">Inicio</Link>
            <Link href="/nosotros" onClick={() => setMobileMenuOpen(false)} className="block">Nosotros</Link>

            <div>
              <Link href="/servicios" onClick={() => setMobileMenuOpen(false)} className="block font-medium mb-1">Servicios</Link>
              <div className="space-y-2 pl-4">
                {services.map((service) => (
                  <Link
                    key={service.path}
                    href={service.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-sm"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <Link href="/sectores" onClick={() => setMobileMenuOpen(false)} className="block font-medium mb-1">Sectores</Link>
              <div className="space-y-2 pl-4">
                {sectores.map((sector) => (
                  <Link
                    key={sector.path}
                    href={sector.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-sm"
                  >
                    {sector.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/pausas-activas" onClick={() => setMobileMenuOpen(false)} className="block">Pausas Activas</Link>

            <div className="border-t border-white/20 pt-4 space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+51985172717" className="hover:text-secondary transition-colors">+51 985 172 717</a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:team@luistrainermax.com" className="hover:text-secondary transition-colors">team@luistrainermax.com</a>
              </div>
              <a
                href="https://wa.me/51985172717?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20los%20servicios%20de%20TrainerMax"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" size="sm">Contacto</Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
