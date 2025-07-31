import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Shield, Heart } from "lucide-react";

const About = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Nuestro Enfoque Integral</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Más que solo ejercicios, diseñamos soluciones integrales para transformar el bienestar de tu organización
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl mb-3">💼</div>
                <h4 className="font-semibold mb-2">Ejercicios Diferenciados</h4>
                <p className="text-sm text-muted-foreground">Por tipo de trabajo y necesidades específicas</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl mb-3">🧘‍♀️</div>
                <h4 className="font-semibold mb-2">Técnicas de Relajación</h4>
                <p className="text-sm text-muted-foreground">Yoga, mindfulness y respiración</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl mb-3">💬</div>
                <h4 className="font-semibold mb-2">Habilidades Blandas</h4>
                <p className="text-sm text-muted-foreground">Dinámicas grupales y trabajo en equipo</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl mb-3">🍎</div>
                <h4 className="font-semibold mb-2">Educación Nutricional</h4>
                <p className="text-sm text-muted-foreground">Aplicada al entorno de trabajo</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl mb-3">💪</div>
                <h4 className="font-semibold mb-2">Fortalecimiento Físico</h4>
                <p className="text-sm text-muted-foreground">Rutinas posturales y de acondicionamiento</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl mb-3">🧠</div>
                <h4 className="font-semibold mb-2">Bienestar Mental</h4>
                <p className="text-sm text-muted-foreground">Manejo del estrés y salud emocional</p>
              </CardContent>
            </Card>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;