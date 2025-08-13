'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Calendar,
  Heart,
  Users,
  Award,
  Zap,
  Target,
  CheckCircle,
  MessageCircle
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Schema JSON-LD optimizado
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Activaciones y Eventos Corporativos con Bienestar Laboral",
  provider: {
    "@type": "Organization",
    name: "Trainermax",
    url: "https://luistrainermax.com/servicios/eventos-corporativos",
    logo: "https://luistrainermax.com/lovable-uploads/logo_trainer.png"
  },
  areaServed: {
    "@type": "Country",
    name: "Perú"
  },
  description:
    "Eleva tus eventos corporativos con pausas activas, masajes antiestrés, dinámicas físicas y talleres de bienestar. Servicios personalizados en todo el Perú.",
  keywords: [
    "eventos corporativos con pausas activas",
    "activaciones bienestar",
    "masajes eventos empresa",
    "semana de la salud",
    "talleres bienestar laboral",
    "trainermax eventos corporativos Perú"
  ]
};

export default function EventosCorporativosPage() {
  const tiposEventos = [
    "Celebraciones por el Día del Trabajador",
    "Semana de la Salud o Bienestar Corporativo",
    "Aniversarios de empresa o de áreas específicas",
    "Premios o reconocimientos internos",
    "Actividades de integración o team building",
    "Ferias laborales internas o externas",
    "Eventos híbridos o virtuales de cultura empresarial"
  ];

  const servicios = [
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Pausas activas masivas",
      items: [
        "Rutinas dinámicas de 10–20 minutos guiadas por un instructor",
        "Música motivadora, movimientos simples y efectivos",
        "Posibilidad de personalizar con branding de la empresa"
      ]
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Masajes antiestrés para colaboradores",
      items: [
        "Intervención individual breve (10–15 min por persona)",
        "Uso de silla ergonómica y técnicas de relajación",
        "Masajistas certificados y protocolo higiénico"
      ]
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Dinámicas de activación física",
      items: [
        "Juegos cooperativos, retos de coordinación y movilidad",
        "Actividades por equipos para fomentar la integración",
        "Personalizadas según edad, nivel de actividad y espacio disponible"
      ]
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Talleres de bienestar emocional",
      items: [
        "Control del estrés, respiración consciente, autoestima, motivación",
        "Dictados por especialistas en psicología organizacional o coaching",
        "Formato breve (30 a 60 min) y participativo"
      ]
    }
  ];

  const proceso = [
    {
      numero: "1",
      titulo: "Reunión inicial",
      descripcion: "Recibimos el briefing de tu evento: objetivo, lugar, fecha, cantidad de personas, perfil del público."
    },
    {
      numero: "2",
      titulo: "Propuesta personalizada",
      descripcion: "Enviamos una propuesta con cronograma, número de profesionales, tipo de actividades y necesidades técnicas (espacio, audio, etc.)"
    },
    {
      numero: "3",
      titulo: "Ejecución profesional",
      descripcion: "Nuestro equipo se encarga de todo: logística, materiales, coordinación y energía."
    },
    {
      numero: "4",
      titulo: "Cierre y retroalimentación",
      descripcion: "Encuesta breve de satisfacción, fotos, resultados medibles si aplica."
    }
  ];

  const ventajas = [
    "Más de 10 años de experiencia en activaciones empresariales",
    "Equipos profesionales certificados y dinámicos",
    "Actividades alineadas con tus objetivos de clima laboral",
    "Imagen corporativa impecable y adaptable a tu marca",
    "Propuestas versátiles, desde pausas hasta ferias completas",
    "Valoramos el bienestar, pero también la energía y la conexión humana"
  ];

  const testimonios = [
    {
      texto: "Hicimos una pausa activa de 300 personas en el aniversario de nuestra planta en Callao, fue el momento más recordado del evento.",
      empresa: "Empresa Industrial"
    },
    {
      texto: "Incluimos masajes express y un taller de respiración en la Semana de la Salud. La participación superó el 85%.",
      empresa: "Corporación de Servicios"
    },
    {
      texto: "En nuestro kickoff virtual, TrainerMax abrió el día con una activación de 15 minutos que nos dejó motivados y sincronizados.",
      empresa: "Empresa de Tecnología"
    }
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
        <section className="py-16 bg-gradient-to-r from-primary to-primary/90">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-primary-foreground">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Activaciones y Eventos Corporativos con TrainerMax
              </h1>
              <p className="text-xl mb-8">
                Conecta, motiva y activa a tu equipo en momentos clave
              </p>
              <p className="text-lg leading-relaxed">
                Los eventos corporativos son oportunidades únicas para fortalecer la cultura organizacional, reconocer el esfuerzo de los colaboradores y fomentar el bienestar colectivo. En TrainerMax llevamos energía, salud y movimiento a tus actividades internas a través de activaciones físicas, pausas activas grupales, masajes antiestrés y talleres de bienestar emocional.
              </p>
            </div>
          </div>
        </section>

        {/* Tipos de eventos */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">¿En qué tipo de eventos corporativos participamos?</h2>
              <p className="text-lg text-muted-foreground mb-8 text-center">
                Ofrecemos servicios para eventos de cualquier escala y formato:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {tiposEventos.map((evento, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span>{evento}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-center text-muted-foreground mt-8">
                Nos adaptamos tanto a formatos presenciales, como virtuales o combinados.
              </p>
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">¿Qué ofrecemos en nuestros eventos corporativos?</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {servicios.map((servicio, index) => (
                  <Card key={index} className="h-full">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-3">
                        {servicio.icon}
                        <CardTitle className="text-lg">{servicio.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {servicio.items.map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
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

        {/* Proceso */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">¿Cómo funciona el proceso?</h2>
              
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

        {/* Ventajas */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">¿Por qué elegir TrainerMax para tus eventos internos?</h2>
              
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

        {/* Testimonios */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Casos de uso frecuentes</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {testimonios.map((testimonio, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <p className="text-muted-foreground italic mb-4">
                        "{testimonio.texto}"
                      </p>
                      <p className="font-medium text-sm">— {testimonio.empresa}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">¿Listo para transformar tu próximo evento?</h2>
              <p className="text-xl mb-8">
                Haz que tu jornada no sea solo informativa, sino también saludable, motivadora y memorable.
              </p>
              <a 
                href="https://wa.me/51985172717?text=Hola,%20me%20interesa%20solicitar%20una%20propuesta%20personalizada%20para%20mi%20próximo%20evento%20corporativo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="secondary" className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Contáctanos y solicita una propuesta personalizada
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