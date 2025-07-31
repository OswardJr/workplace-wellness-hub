import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='16' viewBox='0 0 24 16'%3E%3Crect width='24' height='16' fill='%23B22234'/%3E%3Crect width='24' height='1.23' y='1.23' fill='white'/%3E%3Crect width='24' height='1.23' y='3.69' fill='white'/%3E%3Crect width='24' height='1.23' y='6.15' fill='white'/%3E%3Crect width='24' height='1.23' y='8.62' fill='white'/%3E%3Crect width='24' height='1.23' y='11.08' fill='white'/%3E%3Crect width='24' height='1.23' y='13.54' fill='white'/%3E%3Crect width='9.6' height='8.62' fill='%233C3B6E'/%3E%3C/svg%3E" 
                alt="USA Flag" 
                className="w-6 h-4"
              />
              <span className="text-sm font-semibold">NATIONAL PERSONAL TRAINING INSTITUTE</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              GIMNASIA LABORAL Y PAUSAS ACTIVAS
            </h1>
            
            <p className="text-lg lg:text-xl opacity-90">
              Programa Internacional de Certificación para Empresas Saludables
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Ver Programa
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary">
                Contactar Ahora
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8">
              <img 
                src="/lovable-uploads/c77498c4-faa7-401f-bbca-4a4a5f842b53.png" 
                alt="Trainermax Professional" 
                className="w-full h-auto rounded-lg"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;