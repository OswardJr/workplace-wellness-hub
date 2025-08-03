import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

const Benefits = () => {
  const benefits = [
    "Mejora de la movilidad articular y el sistema músculo esquelético",
    "Reforzamiento de la autoestima individual",
    "Elevación de los niveles de concentración en el trabajo",
    "Fomentar el espíritu de trabajar en equipo",
    "Adecuado control y gestión de las emociones",
    "Reducción de ausentismo laboral",
    "Fortalecimiento de la salud física y emocional de los colaboradores",
    "Mejor control de los cuadros de estrés"
  ];

  return (
    <section className="py-16 bg-[#232937] text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-center">
            BENEFICIOS DEL PROGRAMA
          </h2>
          
          <p className="text-lg mb-12 text-center opacity-90">
            El objetivo fundamental del Programa consiste en ayudar a las empresas a que 
            por medio de las Pausas activas y la Gimnasia Laboral puedan alcanzar de 
            manera progresiva y ordenada sus metas de Bienestar Corporativo. A 
            continuación los indicadores que demuestran lo eficientes que resultan ser 
            estas rutinas especiales de actividad física moderada.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-white/10 border-white/20">
                <CardContent className="p-6 flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-primary-foreground">{benefit}.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;