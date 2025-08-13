'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Monitor, 
  Eye, 
  Brain, 
  Users, 
  Zap, 
  CheckCircle,
  Phone,
  Mail,
  Code,
  Smartphone
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Bienestar Laboral para Empresas de Tecnología",
  name: "Pausas Activas y Bienestar en Empresas Tech | TrainerMax Perú",
  provider: {
    "@type": "Organization",
    name: "Trainermax",
    url: "https://luistrainermax.com/sectores/tecnologia",
    logo: "https://luistrainermax.com/lovable-uploads/logo_trainer.png"
  },
  areaServed: {
    "@type": "Country", 
    name: "Perú"
  },
  description: "Mejora la salud de tus equipos de desarrollo y soporte con pausas activas, respiración consciente y ergonomía digital. Programas presenciales y virtuales en todo el Perú."
};

export default function TecnologiaPage() {
  const desafios = [
    {
      icon: <Monitor className="w-6 h-6 text-primary" />,
      title: "Dolor cervical y lumbar por posturas prolongadas",
      description: "Largas horas frente a pantallas múltiples"
    },
    {
      icon: <Eye className="w-6 h-6 text-primary" />,
      title: "Fatiga ocular y estrés digital", 
      description: "Exposición continua a pantallas LED"
    },
    {
      icon: <Brain className="w-6 h-6 text-primary" />,
      title: "Cansancio mental por tareas cognitivas intensas",
      description: "Concentración extrema en desarrollo y debugging"
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Aislamiento en equipos remotos",
      description: "Falta de conexión física entre compañeros"
    },
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "Desconexión corporal y burnout",
      description: "Agotamiento por entregas y deadlines"
    }
  ];

  const beneficios = [
    "Mayor enfoque y claridad mental",
    "Mejora de la postura y reducción de molestias físicas", 
    "Equipos más activos y conectados",
    "Prevención del estrés acumulado y síndrome de burnout",
    "Refuerzo del compromiso con la cultura de bienestar"
  ];

  const servicios = [
    {
      title: "Pausas Activas en Oficina o Home Office",
      color: "bg-green-100",
      icon: <Code className="w-6 h-6 text-primary" />,
      items: [
        "Rutinas cortas y funcionales",
        "Estiramientos para cuello, espalda y muñecas",
        "Movilidad articular y respiración consciente"
      ]
    },
    {
      title: "Talleres Virtuales de Bienestar Digital",
      color: "bg-blue-100", 
      icon: <Smartphone className="w-6 h-6 text-primary" />,
      items: [
        "Mindfulness para programadores",
        "Cómo relajar el cuerpo en 5 minutos",
        "Ergonomía digital para home office"
      ]
    },
    {
      title: "Intervenciones híbridas para equipos remotos",
      color: "bg-orange-100",
      icon: <Users className="w-6 h-6 text-primary" />,
      items: [
        "Pausas sincronizadas por turnos",
        "Paquetes de acceso mensual a rutinas grabadas",
        "Sesiones de bienestar en Slack, Teams o Discord"
      ]
    }
  ];

  const modalidades = [
    { text: "Presencial en sedes corporativas" },
    { text: "Virtual en modalidad síncrona o asincrónica" },
    { text: "Híbrido, ideal para startups con equipos distribuidos" }
  ];

  const ventajas = [
    "Conocemos el ritmo y la cultura de las empresas tech",
    "Intervenciones sin interrupción de productividad",
    "Formatos ágiles, breves y medibles",
    "Rutinas compatibles con metodologías Agile y Scrum", 
    "Expertos en ergonomía digital y bienestar mental"
  ];

  return (
    <div className="min-h-screen bg-background font-inter">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Bienestar Laboral para Empresas de Tecnología en Perú
              </h1>
              <p className="text-xl mb-8 text-primary-foreground/90">
                El alto rendimiento digital necesita bienestar real
              </p>
              <p className="text-lg leading-relaxed">
                En las empresas tecnológicas, los equipos trabajan en constante foco: largas horas frente 
                a pantallas, entregas por sprint, reuniones virtuales y jornadas extensas frente al código. 
                Esta rutina puede afectar la salud física, mental y emocional de los colaboradores.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                En TrainerMax diseñamos programas de pausas activas, respiración consciente y bienestar 
                para empresas tech, adaptados al ritmo de startups, desarrolladoras de software, fintechs 
                y equipos IT.
              </p>
            </div>
          </div>
        </section>

        {/* Desafíos */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">
                Desafíos comunes en el sector tecnología
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {desafios.map((desafio, index) => (
                  <Card key={index} className="h-full">
                    <CardHeader>
                      <div className="flex items-start space-x-4">
                        {desafio.icon}
                        <div>
                          <CardTitle className="text-lg mb-2">{desafio.title}</CardTitle>
                          <p className="text-muted-foreground text-sm">{desafio.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">
                Beneficios de nuestras intervenciones
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {beneficios.map((beneficio, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <p className="text-lg">{beneficio}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">
                Servicios ideales para empresas de tecnología
              </h2>
              
              <div className="grid lg:grid-cols-3 gap-8">
                {servicios.map((servicio, index) => (
                  <Card key={index} className="h-full">
                    <CardHeader>
                      <div className={`p-3 rounded-lg ${servicio.color} mb-4 inline-block`}>
                        {servicio.icon}
                      </div>
                      <CardTitle className="text-xl mb-4">{servicio.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {servicio.items.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Modalidades */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Modalidades disponibles</h2>
              
              <div className="space-y-4">
                {modalidades.map((modalidad, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <p className="text-lg">{modalidad.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Por qué TrainerMax */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">¿Por qué TrainerMax?</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {ventajas.map((ventaja, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <p className="text-lg">{ventaja}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Activa el bienestar en tu equipo de desarrollo o soporte IT
              </h2>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Una pausa de 10 minutos puede evitar semanas de agotamiento y desconexión.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/51985172717?text=Hola,%20me%20interesa%20solicitar%20una%20demo%20gratuita%20de%20pausas%20activas%20para%20mi%20empresa%20de%20tecnología"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                    Solicita una demo gratuita
                  </Button>
                </a>
                <a
                  href="https://wa.me/51985172717?text=Hola,%20me%20interesa%20agendar%20una%20llamada%20para%20conocer%20los%20programas%20de%20bienestar%20para%20empresas%20tech"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white text-primary hover:bg-gray-100">
                    Agenda una llamada con nuestro equipo
                  </Button>
                </a>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+51 985 172 717</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>team@luistrainermax.com</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

