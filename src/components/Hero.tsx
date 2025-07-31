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
              Movimiento Inteligente para Empresas y Personas Saludables
            </h1>
            
            <p className="text-lg lg:text-xl opacity-90">
              Bienestar real, resultados visibles.
            </p>
            
            <p className="text-base lg:text-lg opacity-80">
              En Trainermax ayudamos a empresas y personas a transformar su salud física, emocional y organizacional mediante programas estructurados de pausas activas, gimnasia laboral, entrenamiento personalizado y diplomados de alto nivel. Somos una marca peruana con proyección internacional y aval de NPTI USA.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <span className="text-sm">Mejora el clima laboral y reduce el estrés</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <span className="text-sm">Alcanza tus metas físicas con entrenadores certificados</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <span className="text-sm">Fortalece la salud mental, emocional y corporal</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <span className="text-sm">Capacítate con el Diplomado líder en gimnasia laboral de Latinoamérica</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Solicitar Demo Gratuita
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary">
                Entrenamiento Personalizado
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8">
              <img 
                src="/lovable-uploads/4fda3fbe-5542-4490-b216-422c1514afc0.png" 
                alt="Workplace wellness and gimnasia laboral" 
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