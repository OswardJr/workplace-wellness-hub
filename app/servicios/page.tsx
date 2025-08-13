import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Building, Dumbbell, Heart, Calendar, Users, Shield, Home, GraduationCap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

// Schema.org structured data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Servicios de Bienestar Laboral",
  provider: {
    "@type": "Organization",
    name: "Trainermax",
    url: "https://luistrainermax.com/servicios",
    logo: "https://luistrainermax.com/lovable-uploads/logo_trainer.png",
    telephone: "+51985172717",
    email: "team@luistrainermax.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "PE"
    }
  },
  areaServed: {
    "@type": "Country",
    name: "Perú"
  },
  offers: [
    {
      "@type": "Offer",
      name: "Pausas Activas para Empresas",
      description: "Ejercicios guiados de corta duración para mejorar la postura, reducir el estrés y activar el cuerpo durante la jornada laboral."
    },
    {
      "@type": "Offer", 
      name: "Gimnasia Laboral Corporativa",
      description: "Rutinas de movilidad, estiramiento y fortalecimiento adaptadas por área de trabajo."
    },
    {
      "@type": "Offer",
      name: "Masajes Antiestrés para Empresas", 
      description: "Terapias de relajación breves en silla o camilla, sin interrumpir el trabajo."
    }
  ]
};

export const metadata: Metadata = {
  title: "Servicios de Bienestar Laboral | Pausas Activas y Gimnasia Corporativa - Trainermax Perú",
  description: "Descubre nuestros servicios: pausas activas, gimnasia laboral, masajes antiestrés, eventos corporativos y programas de bienestar para empresas en Perú.",
  keywords: "servicios pausas activas, gimnasia laboral peru, masajes corporativos, bienestar empresarial, entrenamiento laboral",
  openGraph: {
    type: "website",
    url: "https://luistrainermax.com/servicios",
    title: "Servicios de Bienestar Laboral - Trainermax Perú",
    description: "Pausas activas, gimnasia laboral, masajes antiestrés y más servicios para el bienestar de tu empresa.",
    images: [
      {
        url: "https://luistrainermax.com/lovable-uploads/logo_trainer.png",
        alt: "Servicios Trainermax"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Servicios de Bienestar Laboral - Trainermax",
    description: "Descubre todos nuestros servicios de bienestar corporativo para empresas en Perú."
  },
  alternates: {
    canonical: "https://luistrainermax.com/servicios"
  }
};

export default function ServicesPage() {
  const services = [
    {
      title: "Pausas Activas para Empresas",
      icon: Dumbbell,
      description: "Ejercicios guiados de corta duración para mejorar la postura, reducir el estrés y activar el cuerpo durante la jornada laboral.",
      benefits: [
        "Reducción del estrés y tensión muscular",
        "Mejora de la concentración y productividad",
        "Prevención de lesiones por esfuerzo repetitivo",
        "Fortalecimiento del clima laboral"
      ],
      href: "/servicios/pausas-activas"
    },
    {
      title: "Gimnasia Laboral Corporativa",
      icon: Building,
      description: "Rutinas de movilidad, estiramiento y fortalecimiento adaptadas por área de trabajo.",
      benefits: [
        "Ejercicios específicos por puesto de trabajo",
        "Reducción de trastornos musculoesqueléticos",
        "Mejora de la flexibilidad y fuerza",
        "Programas personalizados por empresa"
      ],
      href: "/servicios/gimnasia-laboral"
    },
    {
      title: "Masajes Antiestrés para Empresas",
      icon: Heart,
      description: "Terapias de relajación breves en silla o camilla, sin interrumpir el trabajo.",
      benefits: [
        "Alivio inmediato de tensiones",
        "Mejora del estado de ánimo",
        "Reducción del estrés laboral",
        "Sesiones de 15-30 minutos"
      ],
      href: "/servicios/masajes-antiestres"
    },
    {
      title: "Bienestar Emocional Corporativo",
      icon: Heart,
      description: "Programas integrales de salud mental y bienestar emocional para colaboradores.",
      benefits: [
        "Talleres de manejo del estrés",
        "Técnicas de mindfulness corporativo",
        "Apoyo en salud mental",
        "Programa de bienestar integral"
      ],
      href: "/servicios/bienestar-emocional"
    },
    {
      title: "Eventos Corporativos de Bienestar",
      icon: Calendar,
      description: "Jornadas especiales, ferias de salud y actividades grupales para fortalecer el equipo.",
      benefits: [
        "Ferias de salud corporativa",
        "Team building saludable", 
        "Competencias deportivas",
        "Jornadas de bienestar"
      ],
      href: "/servicios/eventos-corporativos"
    },
    {
      title: "Programas Virtuales de Bienestar",
      icon: Home,
      description: "Soluciones online para equipos remotos o híbridos con clases en vivo y contenido grabado.",
      benefits: [
        "Clases en vivo por videoconferencia",
        "Contenido on-demand 24/7",
        "Adaptado para trabajo remoto",
        "Plataforma fácil de usar"
      ],
      href: "/servicios/programas-virtuales"
    },
    {
      title: "Implementación Integral de Bienestar",
      icon: Shield,
      description: "Diseño y ejecución completa de programas de bienestar corporativo a medida.",
      benefits: [
        "Diagnóstico inicial de necesidades",
        "Programa personalizado integral",
        "Seguimiento y métricas",
        "Capacitación de líderes internos"
      ],
      href: "/servicios/implementacion-bienestar"
    },
    {
      title: "Certificación en Pausas Activas",
      icon: GraduationCap,
      description: "Formamos instructores internos en tu empresa para liderar programas de pausas activas.",
      benefits: [
        "Certificación oficial NPTI",
        "Formación de instructores internos",
        "Material didáctico incluido",
        "Seguimiento post-certificación"
      ],
      href: "/servicios/certificacion-pausas-activas"
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
        <section className="py-16 bg-[#232937] text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Servicios de Bienestar Laboral para Empresas en Perú
              </h1>
              <p className="text-xl mb-8">
                Transformamos el ambiente laboral de tu empresa con programas especializados en pausas activas, 
                gimnasia laboral y bienestar integral para colaboradores.
              </p>
              <a 
                href="https://wa.me/51985172717?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20los%20servicios%20de%20TrainerMax"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="text-lg px-8">
                  Solicitar Información
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Nuestros Servicios de Bienestar Corporativo
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-3">
                        <service.icon className="w-8 h-8 text-primary" />
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                      </div>
                      <p className="text-muted-foreground">
                        {service.description}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 mb-6">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>
                      <Link href={service.href}>
                        <Button variant="outline" className="w-full">
                          Ver Detalles
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                ¿Por Qué Elegir Nuestros Servicios de Bienestar Laboral?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <Users className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Experiencia Comprobada</h3>
                      <p className="text-muted-foreground">
                        Más de 9 años implementando programas de bienestar en empresas peruanas de todos los sectores.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Shield className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Profesionales Certificados</h3>
                      <p className="text-muted-foreground">
                        Equipo multidisciplinario con certificaciones nacionales e internacionales.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <Building className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Programas Personalizados</h3>
                      <p className="text-muted-foreground">
                        Adaptamos cada servicio a las necesidades específicas de tu empresa y sector.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Heart className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Resultados Medibles</h3>
                      <p className="text-muted-foreground">
                        Reportes de impacto que demuestran mejoras en productividad y bienestar.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#232937] text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                ¿Listo para Transformar el Bienestar en tu Empresa?
              </h2>
              <p className="text-xl mb-8">
                Solicita una evaluación gratuita y descubre cómo nuestros servicios pueden mejorar 
                la productividad y el bienestar de tus colaboradores.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://wa.me/51985172717?text=Hola,%20me%20interesa%20agendar%20una%20evaluación%20gratuita%20de%20bienestar%20laboral%20para%20mi%20empresa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="text-lg px-8">
                    Agendar Evaluación Gratuita
                  </Button>
                </a>
                <a 
                  href="https://wa.me/51985172717?text=Hola,%20me%20interesa%20recibir%20más%20información%20sobre%20los%20servicios%20de%20TrainerMax"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="lg" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary">
                    Solicitar Información
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

