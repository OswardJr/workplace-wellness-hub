import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Clock, Users, Shield, CheckCircle, Calendar, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MasajesAntiestres = () => {
  const beneficios = [
    "Reducción del estrés, ansiedad y fatiga mental",
    "Alivio de tensiones musculares en cuello, hombros y espalda",
    "Aumento de la energía y la concentración",
    "Mejora del estado de ánimo y el clima laboral",
    "Reducción de dolencias posturales por sedentarismo",
    "Prevención de lesiones por esfuerzo repetitivo",
    "Agradecimiento y compromiso del personal con la empresa"
  ];

  const proceso = [
    {
      numero: "1",
      titulo: "Diagnóstico previo (opcional)",
      descripcion: "Evaluamos tu espacio, cantidad de trabajadores, distribución por áreas y objetivos del programa."
    },
    {
      numero: "2",
      titulo: "Implementación de la jornada de masajes",
      descripcion: "Las sesiones duran entre 10 y 15 minutos por persona. Se utiliza una silla ergonómica especializada o camilla portátil (según espacio). No requiere retiro de ropa ni productos aceitosos. Se puede aplicar en oficinas, salas de reuniones o espacios comunes."
    },
    {
      numero: "3",
      titulo: "Personal calificado",
      descripcion: "Masajistas certificados y con experiencia en entorno laboral. Técnicas seguras y de efecto inmediato (masaje de descarga, shiatsu, acupresión, relajación muscular). Protocolo de higiene y bioseguridad estándar."
    },
    {
      numero: "4",
      titulo: "Flexibilidad y adaptación",
      descripcion: "Planes mensuales, quincenales u ocasionales. Ideal para equipos grandes en turnos. Posibilidad de incluirlo en eventos corporativos o semanas de la salud."
    }
  ];

  const tiposEmpresas = [
    "Oficinas administrativas con personal sedentario",
    "Call centers con alta carga emocional y vocal",
    "Empresas con turnos rotativos o trabajo nocturno",
    "Fábricas con esfuerzos repetitivos",
    "Instituciones educativas con personal docente",
    "Entidades del Estado con programas de salud ocupacional"
  ];

  const eventosEspeciales = [
    "Activaciones en ferias o lanzamientos",
    "Reconocimientos al personal (Día del Trabajador, aniversarios, navidad)",
    "Actividades de integración y team building",
    "Jornadas de salud ocupacional"
  ];

  const ventajas = [
    "Atención en Lima y principales ciudades del Perú",
    "Masajistas especializados en entornos corporativos",
    "Intervención rápida, profesional y sin alterar el flujo laboral",
    "Protocolos de bioseguridad",
    "Posibilidad de integrarlo a un plan de bienestar mayor (pausas activas + gimnasia laboral)",
    "Excelentes comentarios y alta tasa de satisfacción entre trabajadores"
  ];

  return (
    <div className="min-h-screen bg-background font-inter">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/90">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-primary-foreground">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Masajes Antiestrés para Empresas en Perú
              </h1>
              <p className="text-xl mb-8">
                Relajación inmediata y bienestar para tu equipo
              </p>
              <p className="text-lg leading-relaxed mb-6">
                El ritmo acelerado del entorno laboral actual, las jornadas prolongadas frente a una computadora, el estrés acumulado por el cumplimiento de objetivos y la tensión postural afectan directa y negativamente la salud de los trabajadores. Esto se traduce en disminución de la productividad, aumento del ausentismo y deterioro del clima laboral.
              </p>
              <p className="text-lg leading-relaxed">
                Los masajes antiestrés corporativos son una solución efectiva, segura y de bajo impacto logístico para mejorar el bienestar de los equipos sin interrumpir las operaciones de la empresa.
              </p>
            </div>
          </div>
        </section>

        {/* Descripción del servicio */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                En TrainerMax ofrecemos un servicio profesional y adaptado al entorno laboral, que ayuda a reducir el estrés, relajar la musculatura tensa y elevar la energía del personal en solo 10 a 15 minutos por sesión.
              </p>
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Beneficios comprobados de los masajes antiestrés</h2>
              <p className="text-lg text-muted-foreground mb-8 text-center">
                Implementar masajes en oficina genera mejoras inmediatas y acumulativas:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {beneficios.map((beneficio, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>{beneficio}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-center text-muted-foreground">
                Ideal para jornadas laborales exigentes, fechas especiales o como parte de un programa mensual de bienestar.
              </p>
            </div>
          </div>
        </section>

        {/* Cómo funciona */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">¿Cómo funciona nuestro servicio de masajes en oficina?</h2>
              <p className="text-lg text-muted-foreground mb-8 text-center">
                En TrainerMax ofrecemos un servicio 100% adaptado al entorno empresarial. Nuestro modelo es ágil, profesional y sin complicaciones.
              </p>
              
              <div className="space-y-6">
                {proceso.map((paso, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {paso.numero}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{paso.titulo}</h3>
                      <p className="text-muted-foreground">{paso.descripcion}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tipos de empresas */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Tipos de empresas que se benefician de este servicio</h2>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {tiposEmpresas.map((tipo, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Heart className="w-5 h-5 text-primary" />
                    <span>{tipo}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-center text-muted-foreground">
                No importa el rubro ni la cantidad de empleados: el masaje es una herramienta universal de bienestar.
              </p>
            </div>
          </div>
        </section>

        {/* Eventos especiales */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Masajes en eventos y fechas especiales</h2>
              <p className="text-lg text-muted-foreground mb-8 text-center">
                Este servicio también es ideal para:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {eventosEspeciales.map((evento, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span>{evento}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-center text-muted-foreground">
                Podemos llevar el servicio a tus instalaciones con todo lo necesario y adaptarnos al cronograma del evento.
              </p>
            </div>
          </div>
        </section>

        {/* Por qué elegir TrainerMax */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">¿Por qué elegir a TrainerMax?</h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                {ventajas.map((ventaja, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>{ventaja}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonio */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-8 text-center">
                  <p className="text-lg italic text-muted-foreground mb-4">
                    "Implementamos los masajes antiestrés de TrainerMax durante tres meses en nuestra sede de Lima. Los resultados fueron inmediatos: mejor ánimo, más compromiso y menos quejas por dolores musculares."
                  </p>
                  <p className="font-medium">— Gerente de RRHH, Empresa de Servicios Financieros</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">¿Quieres agendar una jornada piloto?</h2>
              <p className="text-xl mb-8">
                Ofrecemos una sesión de muestra o jornada puntual para que puedas ver el impacto en tu equipo desde el primer día.
              </p>
              <a 
                href="https://wa.me/51985172717?text=Hola,%20me%20interesa%20solicitar%20una%20cotización%20personalizada%20para%20masajes%20antiestrés%20corporativos"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="secondary" className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Solicita una cotización personalizada
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MasajesAntiestres;