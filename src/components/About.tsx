import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Shield, Heart } from "lucide-react";

const About = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">GIMNASIA LABORAL</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Es un conjunto de ejercicios físicos que se realizan bajo un nivel moderado de intensidad y se 
            caracterizan por tener efecto preventivo y terapéutico, no generan transpiración y demandan 
            un tiempo aproximado de 15-20 minutos por cada sesión. Estos movimientos ayudan a 
            prevenir diversas lesiones, permiten mejorar el desempeño, fomentar el espíritu de trabajar en 
            equipo y reducir los niveles de estrés.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardHeader>
              <Clock className="w-12 h-12 mx-auto text-primary mb-4" />
              <CardTitle className="text-lg">15-20 Minutos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Duración por sesión</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Shield className="w-12 h-12 mx-auto text-primary mb-4" />
              <CardTitle className="text-lg">Preventivo</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Efecto terapéutico</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Users className="w-12 h-12 mx-auto text-primary mb-4" />
              <CardTitle className="text-lg">Trabajo en Equipo</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Fomenta colaboración</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Heart className="w-12 h-12 mx-auto text-primary mb-4" />
              <CardTitle className="text-lg">Reduce Estrés</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Bienestar integral</p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-secondary/50">
          <CardContent className="p-8">
            <p className="text-lg leading-relaxed">
              La Gimnasia Laboral y Dinámicas Activas en la actualidad son consideradas como las 
              alternativas más eficientes dentro de las políticas de Seguridad y Salud en el Trabajo, 
              permitiendo mediante la actividad física moderada y correctamente dirigida el fortalecimiento 
              de la salud de los colaboradores de toda empresa y para lograrlo se requiere de instructores 
              profesionales preparados.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;