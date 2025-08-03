import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TRAINERMAX LATINOAMÉRICA</h3>
            <p className="text-sm opacity-90 mb-4">
              Empresa líder en programas de servicios de gimnasia laboral y salud ocupacional a nivel internacional.
            </p>
            <div className="flex items-center space-x-2 mb-2">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='16' viewBox='0 0 24 16'%3E%3Crect width='24' height='16' fill='%23B22234'/%3E%3Crect width='24' height='1.23' y='1.23' fill='white'/%3E%3Crect width='24' height='1.23' y='3.69' fill='white'/%3E%3Crect width='24' height='1.23' y='6.15' fill='white'/%3E%3Crect width='24' height='1.23' y='8.62' fill='white'/%3E%3Crect width='24' height='1.23' y='11.08' fill='white'/%3E%3Crect width='24' height='1.23' y='13.54' fill='white'/%3E%3Crect width='9.6' height='8.62' fill='%233C3B6E'/%3E%3C/svg%3E" 
                alt="USA Flag" 
                className="w-6 h-4"
              />
              <span className="text-xs">NPTI Official Representative</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="space-y-2 text-sm">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <a href="tel:+51985172717" className="hover:text-primary transition-colors">+51 985 172 717</a>
            </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+51 992 944 119</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+51 993 160 528</span>
              </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:team@luistrainermax.com" className="hover:text-primary transition-colors">team@luistrainermax.com</a>
            </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4" />
                <span>www.trainermax.pe</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Misión</h4>
            <p className="text-sm opacity-90">
              Seguir siendo referencia en el sector de gimnasia laboral y salud ocupacional para empresas, ejecutivos, empleados, proveedores y deportistas a todo nivel.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Visión</h4>
            <p className="text-sm opacity-90">
              Brindar una solución integral y exclusiva a los problemas de salud, bienestar, nutrición y salud mental en nuestro país y en el extranjero.
            </p>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-90">
            © 2024 Trainermax Latinoamérica. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;