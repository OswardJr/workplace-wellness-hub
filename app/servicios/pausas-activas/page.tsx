'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Eye, Brain, Heart, Clock, Users, CheckCircle, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PausasActivasServicePage() {
  const beneficios = [
    "Reducción del estrés laboral y la ansiedad",
    "Prevención de lesiones por movimientos repetitivos",
    "Mejora de la postura y reducción de dolores musculares",
    "Aumento de la concentración y la productividad",
    "Mejora del clima laboral y de la moral del equipo",
    "Menor ausentismo y rotación de personal",
    "Mayor compromiso con la cultura de salud y prevención"
  ];

  const proceso = [
    {
      titulo: "Diagnóstico inicial gratuito",
      descripcion: "Analizamos tu entorno, rutinas laborales, tipo de funciones y niveles de riesgo."
    },
    {
      titulo: "Diseño del programa a medida",
      descripcion: "Adaptamos la frecuencia, duración y tipo de ejercicios según las necesidades del equipo."
    },
    {
      titulo: "Intervenciones guiadas",
      descripcion: "Sesiones dirigidas por profesionales certificados en ergonomía, fisioterapia y actividad física laboral. Duración promedio: 10 a 15 minutos por grupo."
    },
    {
      titulo: "Modalidad flexible",
      descripcion: "Puedes elegir entre sesiones presenciales, virtuales o híbridas, según tu ubicación y operativa."
    },
    {
      titulo: "Seguimiento y mejora continua",
      descripcion: "Opcionalmente medimos el impacto del programa en el clima laboral, ausentismo y satisfacción."
    }
  ];

  const ejercicios = [
    {
      icon: <Activity className="w-6 h-6 text-primary" />,
      text: "Estiramientos compensatorios para cuello, hombros y espalda"
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      text: "Movilidad articular y activación muscular"
    },
    {
      icon: <Brain className="w-6 h-6 text-primary" />,
      text: "Respiración consciente para control de estrés"
    },
    {
      icon: <Eye className="w-6 h-6 text-primary" />,
      text: "Activación visual para reducción de fatiga ocular"
    },
    {
      icon: <Heart className="w-6 h-6 text-primary" />,
      text: "Técnicas de relajación o mindfulness"
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      text: "Dinámicas corporativas ligeras para fomentar el trabajo en equipo"
    }
  ];

  const modalidades = [
    {
      color: "bg-green-100 text-green-800",
      title: "Presencial",
      description: "Un especialista de nuestro equipo visita tu empresa para realizar las sesiones directamente con tu personal, en su lugar de trabajo."
    },
    {
      color: "bg-blue-100 text-blue-800",
      title: "Virtual",
      description: "Ideal para equipos en teletrabajo, empresas con sedes remotas o turnos rotativos. Utilizamos Zoom, Google Meet o tu plataforma interna."
    },
    {
      color: "bg-orange-100 text-orange-800",
      title: "Híbrido",
      description: "Combinamos sesiones presenciales con virtuales para cubrir todas las sedes o áreas de tu empresa sin perder impacto ni regularidad."
    }
  ];

  const tiposEmpresas = [
    "Oficinas corporativas con personal sedentario",
    "Call centers con equipos de alto estrés y rotación",
    "Plantas industriales con trabajo repetitivo o de esfuerzo físico",
    "Locales de retail con personal de pie muchas horas",
    "Entidades públicas con exigencias de salud ocupacional"
  ];

  const casosUso = [
    "Implementar pausas activas como parte del plan de SST",
    "Actividades mensuales de bienestar laboral",
    "Mejora del clima organizacional en áreas sensibles",
    "Intervenciones para reducir ausentismo y dolencias musculares",
    "Eventos especiales como aniversarios corporativos, lanzamientos, o días de integración"
  ];

  const ventajas = [
    "Más de 10 años de experiencia en empresas peruanas de distintos sectores",
    "Profesionales certificados en fisioterapia, fitness laboral y ergonomía",
    "Cobertura en Lima y principales ciudades del Perú",
    "Planes adaptables según cantidad de empleados y turnos",
    "Modalidad virtual, presencial o híbrida",
    "Capacidad para operar en oficinas, fábricas, call centers, entidades públicas, entre otros",
    "Protocolos de bioseguridad y experiencia post-COVID",
    "Posibilidad de capacitar a tu personal con certificación interna (Plan de Transferencia)"
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
                Pausas Activas para Empresas en Perú
              </h1>
              <p className="text-xl mb-8">
                Intervenciones breves que transforman el bienestar de tu equipo
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Las pausas activas son intervenciones breves, guiadas y estructuradas que se realizan durante la jornada laboral para mejorar la salud física, mental y emocional de los trabajadores. Están diseñadas para interrumpir la rutina sedentaria, combatir el estrés y prevenir lesiones musculoesqueléticas, sin interferir con la productividad de la empresa.
              </p>
              <p className="text-lg leading-relaxed">
                En TrainerMax entendemos que, en el contexto empresarial actual, los niveles de estrés, el agotamiento físico y los trastornos posturales se han vuelto desafíos frecuentes.
              </p>
            </div>
          </div>
        </section>

        {/* Por qué las necesitas */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Las largas jornadas frente al computador, el trabajo en turnos continuos, la carga emocional y la falta de movimiento afectan directamente el bienestar del personal y, por ende, el rendimiento de la organización. Por eso diseñamos pausas activas personalizadas por sector, área y modalidad de trabajo, para ayudar a tu equipo a mantenerse saludable, motivado y comprometido.
              </p>
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Beneficios comprobados para tu equipo</h2>
              <p className="text-lg text-muted-foreground mb-8 text-center">
                Implementar pausas activas en tu empresa genera resultados tangibles tanto a nivel individual como organizacional:
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
                Empresas en todo el Perú están apostando por este tipo de intervenciones como parte de sus estrategias de bienestar corporativo, salud ocupacional y retención de talento.
              </p>
            </div>
          </div>
        </section>

        {/* Cómo funciona */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">¿Cómo funciona el servicio de Pausas Activas con TrainerMax?</h2>
              <p className="text-lg text-muted-foreground mb-8 text-center">
                Cada empresa es diferente, y nuestras pausas activas están diseñadas para adaptarse a tus espacios, horarios, sectores y tipos de trabajadores:
              </p>
              
              <div className="space-y-6">
                {proceso.map((paso, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {index + 1}
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

        {/* Qué incluyen */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">¿Qué incluyen nuestras pausas activas?</h2>
              <p className="text-lg text-muted-foreground mb-8 text-center">
                Cada sesión incluye una combinación de ejercicios diseñados científicamente para lograr un alto impacto en poco tiempo:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {ejercicios.map((ejercicio, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    {ejercicio.icon}
                    <span>{ejercicio.text}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-center text-muted-foreground">
                Todo se adapta al espacio disponible (oficina, planta, escritorio, pasillos) y a las condiciones del entorno (temperatura, ruido, turnos, etc.).
              </p>
            </div>
          </div>
        </section>

        {/* Modalidades */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Modalidades disponibles: presencial, virtual o híbrido</h2>
              <p className="text-lg text-muted-foreground mb-8 text-center">
                En TrainerMax ofrecemos pausas activas en tres modalidades:
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                {modalidades.map((modalidad, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${modalidad.color}`}>
                        {modalidad.title}
                      </div>
                      <p className="text-muted-foreground">{modalidad.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Por qué elegir TrainerMax */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">¿Por qué elegir TrainerMax?</h2>
              <p className="text-lg text-muted-foreground mb-8 text-center">
                TrainerMax no es solo un proveedor de bienestar. Somos un aliado estratégico en la salud ocupacional de tu organización:
              </p>
              
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

        {/* Tipos de empresas */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">¿Qué tipo de empresas pueden contratar pausas activas?</h2>
              <p className="text-lg text-muted-foreground mb-8 text-center">
                Atendemos empresas de todos los tamaños y rubros. Algunos ejemplos:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {tiposEmpresas.map((tipo, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>{tipo}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-center text-muted-foreground">
                No importa el rubro ni la cantidad de trabajadores. Si tu equipo necesita más salud y menos estrés, este servicio es para ti.
              </p>
            </div>
          </div>
        </section>

        {/* Casos de uso */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Casos comunes de uso</h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                {casosUso.map((caso, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <span>{caso}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">¿Listo para mejorar el bienestar de tu equipo?</h2>
              <p className="text-xl mb-4">
                Ofrecemos un diagnóstico gratuito donde evaluamos tus espacios, horarios y necesidades. Luego te proponemos un programa ajustado a tu realidad.
              </p>
              <p className="text-lg mb-8">
                Solicita tu sesión demostrativa sin compromiso. Te mostraremos en 15 minutos cómo una pausa activa puede transformar tu ambiente laboral.
              </p>
              <a 
                href="https://wa.me/51985172717?text=Hola,%20me%20interesa%20solicitar%20una%20sesión%20demostrativa%20de%20pausas%20activas%20para%20mi%20empresa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="secondary" className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Contáctanos ahora para tu sesión demostrativa
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}