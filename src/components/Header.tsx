import { Button } from "@/components/ui/button";
import { Phone, Mail, ChevronDown, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    { name: "Bienestar Emocional", path: "/servicios/bienestar-emocional" },
    { name: "Certificación Pausas Activas", path: "/servicios/certificacion-pausas-activas" },
    { name: "Eventos Corporativos", path: "/servicios/eventos-corporativos" },
    { name: "Gimnasia Laboral", path: "/servicios/gimnasia-laboral" },
    { name: "Implementación Bienestar", path: "/servicios/implementacion-bienestar" },
    { name: "Masajes Antiestrés", path: "/servicios/masajes-antiestres" },
    { name: "Programas Virtuales", path: "/servicios/programas-virtuales" },
  ];

  return (
    <header className="bg-primary text-primary-foreground fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-foreground rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-primary rounded-full"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold">TRAINERMAX</h1>
                <p className="text-sm opacity-90">LATINOAMÉRICA</p>
                {/* <img 
                  src="/lovable-uploads/logo.png" 
                  alt="Trainermax Latinoamerica" 
                  className="w-full h-auto rounded-lg"
                /> */}
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-8 relative">
            <Link to="/" className={`hover:underline transition-colors ${location.pathname === '/' ? 'text-secondary' : ''}`}>
              Inicio
            </Link>
            <Link to="/nosotros" className={`hover:underline transition-colors ${location.pathname === '/nosotros' ? 'text-secondary' : ''}`}>
              Nosotros
            </Link>

            {/* Dropdown Servicios */}
            <div
              className="relative group"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <button
                className={`flex items-center space-x-1 hover:underline transition-colors ${location.pathname.includes('/servicios') ? 'text-secondary' : ''}`}
              >
                <span>Servicios</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              <div
                className={`absolute left-0 top-full bg-white text-black rounded-md shadow-lg py-2 w-56 z-50 transition-opacity duration-150 ${
                  showDropdown ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
              >
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="block px-4 py-2 hover:bg-gray-100 text-sm"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/sectores" className={`hover:underline transition-colors ${location.pathname === '/sectores' ? 'text-secondary' : ''}`}>
              Sectores
            </Link>
            <Link to="/pausas-activas" className={`hover:underline transition-colors ${location.pathname === '/pausas-activas' ? 'text-secondary' : ''}`}>
              Pausas Activas
            </Link>
          </nav>

          {/* Contact Info */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span className="text-sm">+51 985 172 717</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span className="text-sm">team@luistrainermax.com</span>
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
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block">Inicio</Link>
            <Link to="/nosotros" onClick={() => setMobileMenuOpen(false)} className="block">Nosotros</Link>

            <div>
              <span className="block font-medium mb-1">Servicios</span>
              <div className="space-y-2 pl-4">
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-sm"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/sectores" onClick={() => setMobileMenuOpen(false)} className="block">Sectores</Link>
            <Link to="/pausas-activas" onClick={() => setMobileMenuOpen(false)} className="block">Pausas Activas</Link>

            <div className="border-t border-white/20 pt-4 space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+51 985 172 717</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>team@luistrainermax.com</span>
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
