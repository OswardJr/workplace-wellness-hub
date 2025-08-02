import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  
  return (
    <header className="bg-primary text-primary-foreground fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-foreground rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-primary rounded-full"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold">TRAINERMAX</h1>
                <p className="text-sm opacity-90">LATINOAMÉRICA</p>
              </div>
            </Link>
          </div>
          
          {/* Navigation Menu */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`hover:underline transition-colors ${location.pathname === '/' ? 'text-secondary' : ''}`}
            >
              Inicio
            </Link>
            <Link 
              to="/nosotros" 
              className={`hover:underline transition-colors ${location.pathname === '/nosotros' ? 'text-secondary' : ''}`}
            >
              Nosotros
            </Link>
            <Link 
              to="/servicios" 
              className={`hover:underline transition-colors ${location.pathname === '/servicios' ? 'text-secondary' : ''}`}
            >
              Servicios
            </Link>
            <Link 
              to="/sectores" 
              className={`hover:underline transition-colors ${location.pathname === '/sectores' ? 'text-secondary' : ''}`}
            >
              Sectores
            </Link>
          </nav>
          
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span className="text-sm">+51 985 172 717</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span className="text-sm">team@luistrainermax.com</span>
            </div>
            <Button variant="secondary" size="sm">
              Contacto
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;