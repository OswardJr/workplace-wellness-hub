import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Heart,
  Brain,
  Wind,
  Focus,
  CheckCircle,
  Calendar,
  Users,
  Clock,
  MessageCircle
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ✅ JSON-LD Schema para SEO estructurado
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Talleres de Bienestar Emocional y Manejo del Estrés",
  provider: {
    "@type": "Organization",
    name: "Trainermax",
    url: "https://luistrainermax.com/servicios/bienestar-emocional",
    logo: "https://luistrainermax.com/lovable-uploads/logo_trainer.png"
  },
  areaServed: {
    "@type": "Country",
    name: "Perú"
  },
  description:
    "Trainermax ofrece talleres prácticos y personalizados para mejorar el bienestar emocional laboral: manejo del estrés, pausas mentales, respiración consciente y salud mental en el trabajo.",
  keywords: [
    "bienestar emocional laboral",
    "taller manejo del estrés",
    "pausas mentales",
    "respiración consciente empresa",
    "salud mental laboral",
    "trainermax bienestar emocional"
  ]
};

const BienestarEmocional = () => {
  const talleres = [
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "Taller de manejo del estrés",
      items: [
        "Qué es el estrés y cómo afecta al cuerpo y la mente",
        "Identificación de síntomas y detonantes en el entorno laboral",
        "Técnicas de regulación emocional en situaciones reales"
      ]
    },
    {
      icon: <Wind className="w-8 h-8 text-primary" />,
      title: "Taller de respiración consciente",
      items: [
        "Ejercicios guiados de respiración diafragmática y pausada",
        "Reducción inmediata del ritmo cardiaco y tensión muscular",
        "Aplicable antes de reuniones, cambios de turno o al cierre del día"
      ]
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Taller de pausas mentales activas",
      items: [
        "Técnicas breves de desconexión, atención plena y visualización",
        "Ideal para equipos en home office, oficinas o fábricas"
      ]
    },
    {
      icon: <Focus className="w-8 h-8 text-primary" />,
      title: "Taller de enfoque y concentración",
      items: [
        "Cómo entrenar la mente para sostener la atención",
        "Hábitos para disminuir la fatiga mental y mejorar la productividad"
      ]
    }
  ];

  const caracteristicas = [
    { icon: <Calendar className="w-5 h-5 text-primary" />, text: "Modalidad virtual o presencial" },
    { icon: <Clock className="w-5 h-5 text-primary" />, text: "Duración: 30 a 60 minutos por taller" },
    { icon: <Users className="w-5 h-5 text-primary" />, text: "Formato interactivo, con ejercicios en vivo" },
    { icon: <Heart className="w-5 h-5 text-primary" />, text: "Dirigido por coaches, psicólogos o instructores certificados" }
  ];

  const beneficios = [
    "Mejora la autorregulación emocional del equipo",
    "Disminuye la rotación por agotamiento o burnout",
    "Refuerza la cultura del cuidado y respeto",
    "Incrementa el compromiso organizacional",
    "Fomenta espacios de pausa real sin afectar la productividad"
  ];

  const formasIntegracion = [
    { color: "bg-green-100 text-green-800", label: "Activación puntual", desc: "Por fechas especiales (Día de la Salud Mental, Semana de la Salud, etc.)" },
    { color: "bg-blue-100 text-blue-800", label: "Complemento", desc: "A un programa de pausas activas o gimnasia laboral" },
    { color: "bg-orange-100 text-orange-800", label: "Módulo continuo", desc: "Dentro de un programa de bienestar emocional continuo" }
  ];

  return (
    <div className="min-h-screen bg-background font-inter">

      <Helmet>
        <title>
          Talleres de Bienestar Emocional y Manejo del Estrés Laboral | TrainerMax Perú
        </title>
        <meta
          name="description"
          content="Ofrece a tus colaboradores talleres prácticos de manejo del estrés, pausas mentales, respiración consciente y salud emocional. Virtual o presencial en todo el Perú."
        />
        <link
          rel="canonical"
          href="https://luistrainermax.com/servicios/bienestar-emocional"
        />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/90">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-primary-foreground">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Bienestar Emocional para Empresas
              </h1>
              <p className="text-xl mb-8">
                Cuida la salud emocional de tu equipo, reduce el estrés y mejora el clima laboral
              </p>
              <p className="text-lg leading-relaxed">
                La salud emocional es clave para la productividad, el clima laboral y la retención de talento. En TrainerMax ayudamos a las empresas a crear entornos más saludables, equilibrados y humanos a través de talleres de bienestar emocional, pausas mentales guiadas, técnicas de respiración y estrategias de manejo del estrés laboral.
              </p>
            </div>
          </div>
        </section>

        {/* Descripción */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nuestros programas están diseñados para ser breves, prácticos, aplicables y emocionalmente significativos.
              </p>
            </div>
          </div>
        </section>

        {/* Talleres */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">¿Qué tipo de talleres ofrecemos?</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {talleres.map((taller, index) => (
                  <Card key={index} className="h-full">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-3">
                        {taller.icon}
                        <CardTitle className="text-lg">{taller.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {taller.items.map((item, idx) => (
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

        {/* Características */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">¿Cómo se imparten estos talleres?</h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                {caracteristicas.map((caracteristica, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    {caracteristica.icon}
                    <span>{caracteristica.text}</span>
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
              <h2 className="text-3xl font-bold mb-8 text-center">¿Qué beneficios tiene incluir estos talleres?</h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                {beneficios.map((beneficio, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>{beneficio}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Formas de Integración */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">¿Cómo integrar estos talleres a tu empresa?</h2>
              <p className="text-center text-muted-foreground mb-8">Puedes contratarlos como:</p>
              
              <div className="grid md:grid-cols-3 gap-6">
                {formasIntegracion.map((forma, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${forma.color}`}>
                        {forma.label}
                      </div>
                      <p className="text-muted-foreground">{forma.desc}</p>
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
              <h2 className="text-3xl font-bold mb-6">¿Listos para transformar el bienestar desde adentro?</h2>
              <p className="text-xl mb-8">
                Integra el componente emocional a tu estrategia de bienestar y construye un equipo más enfocado, tranquilo y comprometido.
              </p>
              <a 
                href="https://wa.me/51985172717?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20los%20talleres%20de%20bienestar%20emocional%20para%20mi%20empresa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="secondary" className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Contáctanos para diseñar una propuesta
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

export default BienestarEmocional;