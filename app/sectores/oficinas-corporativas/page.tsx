'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Monitor, 
  Brain, 
  Users, 
  Clock, 
  Heart, 
  CheckCircle,
  Phone,
  Mail
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Bienestar Laboral en Oficinas Corporativas",
  name: "Pausas Activas y Bienestar en Oficinas Corporativas | TrainerMax Perú",
  provider: {
    "@type": "Organization",
    name: "Trainermax",
    url: "https://luistrainermax.com/sectores/oficinas-corporativas",
    logo: "https://luistrainermax.com/lovable-uploads/logo_trainer.png"
  },
  areaServed: {
    "@type": "Country", 
    name: "Perú"
  },
  description: "Implementamos pausas activas, masajes antiestrés y talleres de salud emocional para oficinas corporativas. Mejora el clima laboral y reduce lesiones por sedentarismo."
};

export default function OficinasCorporativasPage() {
  const desafios = [
    {
      icon: <Monitor className="w-6 h-6 text-primary" />,
      title: "Jornadas prolongadas frente a una pantalla",
      description: "Sedentarismo y posturas forzadas"
    },
    {
      icon: <Brain className="w-6 h-6 text-primary" />,
      title: "Alta carga mental y estrés constante", 
      description: "Presión laboral y mental continua"
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Molestias en cuello, espalda y muñecas",
      description: "Lesiones por movimientos repetitivos"
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Clima organizacional tenso o desmotivación",
      description: "Ambiente laboral deteriorado"
    }
  ];

  const servicios = [
    {
      title: "Pausas activas guiadas en oficina",
      items: [
        "Rutinas de 5 a 15 minutos en grupo",
        "Adaptadas a escritorios, salas o espacios comunes", 
        "En horario laboral, sin afectar la operación"
      ]
    },
    {
      title: "Masajes antiestrés en el puesto de trabajo",
      items: [
        "Técnicas de relajación en cuello, espalda y hombros",
        "Con camillas portátiles o sillas ergonómicas",
        "Intervenciones breves (10 a 15 minutos por persona)"
      ]
    },
    {
      title: "Talleres de bienestar emocional", 
      items: [
        "Manejo del estrés, pausas mentales, respiración consciente",
        "Formato interactivo, con ejercicios prácticos",
        "Ideal para semanas de la salud o capacitaciones internas"
      ]
    },
    {
      title: "Activaciones por fechas clave",
      items: [
        "Aniversarios, cierre de año, semana de salud o lanzamientos",
        "Programas temáticos con actividades físicas breves"
      ]
    }
  ];

  const beneficios = [
    "Reduce el ausentismo y las lesiones por sedentarismo",
    "Mejora el clima laboral y la moral del equipo", 
    "Fomenta una cultura de autocuidado",
    "Fortalece el compromiso y la retención de talento"
  ];

  const modalidades = [
    { color: "bg-green-100 text-green-800", text: "Presencial en Lima y ciudades principales" },
    { color: "bg-orange-100 text-orange-800", text: "Virtual para equipos remotos o híbridos" },
    { color: "bg-blue-100 text-blue-800", text: "Híbrido: combinamos pausas en oficina + sesiones virtuales" }
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
                Bienestar Laboral en Oficinas Corporativas
              </h1>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Soluciones de bienestar físico y emocional para entornos de oficina
              </p>
              <p className="text-lg leading-relaxed">
                En las oficinas corporativas, el sedentarismo, la tensión acumulada y el estrés laboral 
                impactan directamente en la salud y productividad del equipo. En TrainerMax diseñamos 
                programas de pausas activas para oficinas, masajes en el lugar de trabajo y talleres 
                emocionales que se ajustan al ritmo y cultura de cada organización.
              </p>
            </div>
          </div>
        </section>

        {/* Desafíos */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">
                Principales desafíos en entornos corporativos
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {desafios.map((desafio, index) => (
                  <Card key={index} className="h-full">
                    <CardHeader>
                      <div className="flex items-start space-x-4">
                        {desafio.icon}
                        <div>
                          <CardTitle className="text-lg mb-2">{desafio.title}</CardTitle>
                          <p className="text-muted-foreground">{desafio.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">
                ¿Qué ofrecemos para oficinas corporativas?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {servicios.map((servicio, index) => (
                  <Card key={index} className="h-full">
                    <CardHeader>
                      <CardTitle className="text-xl mb-4 flex items-center">
                        <CheckCircle className="w-5 h-5 text-primary mr-2" />
                        {servicio.title}
                      </CardTitle>
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
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-12">Modalidades disponibles</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {modalidades.map((modalidad, index) => (
                  <div key={index} className={`p-6 rounded-lg ${modalidad.color}`}>
                    <p className="font-medium">{modalidad.text}</p>
                  </div>
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
                Beneficios del bienestar en oficinas corporativas
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

        {/* Quiénes contratan */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-12">¿Quiénes suelen contratar este servicio?</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-left">
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <Heart className="w-5 h-5 text-primary mr-3" />
                      <span>Departamentos de Recursos Humanos</span>
                    </li>
                    <li className="flex items-center">
                      <Heart className="w-5 h-5 text-primary mr-3" />
                      <span>Oficinas administrativas de empresas medianas y grandes</span>
                    </li>
                  </ul>
                </div>
                <div className="text-left">
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <Heart className="w-5 h-5 text-primary mr-3" />
                      <span>Áreas de SST o bienestar organizacional</span>
                    </li>
                    <li className="flex items-center">
                      <Heart className="w-5 h-5 text-primary mr-3" />
                      <span>Gerencias interesadas en mejorar la experiencia del colaborador</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Por qué TrainerMax */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-12">¿Por qué elegir TrainerMax para tu oficina?</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 text-left">
                    <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <p>10+ años trabajando con oficinas de diversos sectores</p>
                  </div>
                  <div className="flex items-start space-x-3 text-left">
                    <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <p>Intervenciones rápidas, efectivas y sin interrumpir operaciones</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 text-left">
                    <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <p>Experiencia con corporativos, coworkings y sedes multisite</p>
                  </div>
                  <div className="flex items-start space-x-3 text-left">
                    <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <p>Programas personalizables según horarios y espacios</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                ¿Listos para mejorar el bienestar en tu oficina?
              </h2>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Agenda una sesión piloto o solicita una propuesta diseñada para tu empresa.
              </p>
              <p className="text-lg mb-8">
                📞 Contáctanos para llevar salud y energía a tu equipo desde el escritorio.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/51985172717?text=Hola,%20me%20interesa%20una%20sesión%20piloto%20de%20pausas%20activas%20para%20mi%20oficina%20corporativa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                    Agendar sesión piloto
                  </Button>
                </a>
                <a
                  href="https://wa.me/51985172717?text=Hola,%20me%20interesa%20solicitar%20una%20propuesta%20de%20bienestar%20para%20mi%20oficina%20corporativa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white text-primary hover:bg-gray-100">
                    Solicitar propuesta
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

