import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, User, Users, Heart, GraduationCap, Zap } from "lucide-react";

const Services = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">¿Qué hacemos?</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ofrecemos dos líneas de servicio para transformar el bienestar de personas y organizaciones
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* TRAINERMAX CORPORATE */}
          <Card className="border-primary/20">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <Building2 className="w-8 h-8 text-primary" />
                <div>
                  <CardTitle className="text-2xl text-primary">TRAINERMAX CORPORATE</CardTitle>
                  <p className="text-muted-foreground">Soluciones de bienestar laboral y clima organizacional</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-sm text-muted-foreground">
                Basadas en movimiento inteligente, enfoque psicosocial y evidencia científica.
              </p>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <h2 className="font-semibold">Pausas Activas Personalizadas</h2>
                  </div>
                  <p className="text-sm text-muted-foreground pl-4">
                    Rutinas de 5 a 15 minutos integradas en la jornada laboral. Guiadas por instructores certificados, 
                    adaptadas a administrativos, operativos, personas con movilidad reducida o adultos mayores.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <h2 className="font-semibold">Gimnasia Laboral</h2>
                  </div>
                  <p className="text-sm text-muted-foreground pl-4">
                    Sesiones funcionales (20–45 min) realizadas en oficinas, plantas industriales, 
                    hospitales o en formato virtual. Previene lesiones, mejora la postura y promueve integración.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <h2 className="font-semibold">Masajes Antiestrés</h2>
                  </div>
                  <p className="text-sm text-muted-foreground pl-4">
                    Terapias exprés aplicadas por fisioterapeutas. Ideales para reducir la tensión muscular 
                    y mejorar el ánimo en semanas de salud, eventos o campañas internas.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <h2 className="font-semibold">Diplomado Internacional</h2>
                  </div>
                  <p className="text-sm text-muted-foreground pl-4">
                    Programa avalado por NPTI (EE.UU.) que forma líderes en bienestar. 
                    Incluye módulos de salud ocupacional, psicología, coaching, nutrición y branding personal.
                  </p>
                </div>
              </div><br/>

              <a
                href="https://wa.me/51985172717?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20los%20servicios%20de%20TrainerMax"
                target="_blank"
                rel="noopener noreferrer"
              >
              <Button variant="outline" className="w-full">
                Ver Soluciones Corporativas
              </Button></a>
            </CardContent>
          </Card>

          {/* TRAINERMAX PERSONAL */}
          <Card className="border-accent/20">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <User className="w-8 h-8 text-accent" />
                <div>
                  <CardTitle className="text-2xl text-accent">TRAINERMAX PERSONAL</CardTitle>
                  <p className="text-muted-foreground">Entrenamiento físico personalizado y familiar</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-sm text-muted-foreground">
                Transformamos la vida de personas con entrenamiento físico personalizado, emocional y familiar.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">💪 Disciplinas destacadas:</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>• Entrenamiento Personalizado</div>
                    <div>• Programa Psicodeportivo</div>
                    <div>• Box Fit y Bailoterapia</div>
                    <div>• Yoga y Funcional</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">👨‍👩‍👧‍👦 Programas Especializados:</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>• Entrenamiento Familiar</div>
                    <div>• Entrenamiento para Novios</div>
                    <div>• Juventud Extendida</div>
                    <div>• TrainerMax System</div>
                    <div>• Entrenamiento Bilingüe</div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <a
                href="https://wa.me/51985172717?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20los%20servicios%20de%20TrainerMax"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="w-full">
                  Quiero Entrenar con Trainermax
                </Button>
                <Button variant="outline" className="w-full text-sm">
                  Solicitar Programa Familiar
                </Button></a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;