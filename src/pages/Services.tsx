import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Building, Dumbbell, Heart, Calendar, Users, Shield, Home, GraduationCap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

const Services = () => {
  const services = [
    {
      icon: <Building className="w-8 h-8 text-primary" />,
      title: "Pausas Activas para Empresas",
      description: "Ejercicios guiados de corta duración para mejorar la postura, reducir el estrés y activar el cuerpo durante la jornada laboral. Presencial, virtual o híbrido."
    },
    {
      icon: <Dumbbell className="w-8 h-8 text-primary" />,
      title: "Gimnasia Laboral Corporativa",
      description: "Rutinas de movilidad, estiramiento y fortalecimiento adaptadas por área de trabajo. Ideal para prevenir lesiones por esfuerzo repetitivo."
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Masajes Antiestrés para Empresas",
      description: "Terapias de relajación breves en silla o camilla, sin interrumpir el trabajo. Mejora inmediata del estado de ánimo y reducción del agotamiento."
    },
    {
      icon: <Calendar className="w-8 h-8 text-primary" />,
      title: "Programas Virtuales e Híbridos",
      description: "Sesiones de pausas activas y bienestar 100% online para equipos remotos o con múltiples sedes."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Activaciones y Eventos Corporativos",
      description: "Diseñamos actividades físicas, talleres y masajes para jornadas de salud, integraciones o fechas especiales."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Implementación de Programas de Bienestar",
      description: "Asesoría y ejecución de programas completos de salud ocupacional y cultura de bienestar para tu empresa."
    },
    {
      icon: <Home className="w-8 h-8 text-primary" />,
      title: "Talleres de Bienestar Emocional",
      description: "Espacios para el manejo del estrés, respiración consciente, autoestima y equilibrio emocional en el trabajo."
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-primary" />,
      title: "Certificación de Personal Interno",
      description: "Entrenamos a tu personal para que puedan aplicar pausas activas o gimnasia laboral internamente, con certificación oficial."
    }
  ];

  const adaptationFactors = [
    "Tipo de empresa y sector",
    "Cantidad de trabajadores",
    "Modalidad (presencial, remota, turnos)",
    "Objetivos de bienestar, salud y clima laboral"
  ];

  const whyChooseUs = [
    "Cobertura nacional en Perú",
    "Profesionales certificados y con experiencia en entornos corporativos",
    "Programas 100% personalizables",
    "Modalidad presencial, virtual o combinada",
    "Integración con tu plan de SST o clima organizacional"
  ];

  return (
    <>
      <Helmet>
        <title>Servicios de Bienestar Laboral para Empresas | Pausas Activas, Gimnasia Laboral | TrainerMax Perú</title>
        <meta 
          name="description" 
          content="Servicios profesionales de bienestar laboral en Perú: pausas activas, gimnasia laboral, masajes antiestrés, programas virtuales. Cobertura nacional con profesionales certificados." 
        />
        <meta name="keywords" content="pausas activas empresas, gimnasia laboral peru, masajes antiestres, bienestar laboral, salud ocupacional, programas corporativos bienestar" />
        <meta property="og:title" content="Servicios de Bienestar Laboral para Empresas | TrainerMax Perú" />
        <meta property="og:description" content="Mejora la productividad y salud de tu equipo con nuestros servicios especializados de pausas activas, gimnasia laboral y masajes antiestrés." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://luistrainermax.com/servicios" />
        <meta property="og:image" content="https://luistrainermax.com/lovable-uploads/logo_trainer.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Servicios de Bienestar Laboral para Empresas | TrainerMax Perú" />
        <meta name="twitter:description" content="Servicios profesionales de pausas activas, gimnasia laboral y masajes antiestrés para empresas en todo el Perú." />
        <link rel="canonical" href="https://luistrainermax.com/servicios" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background font-inter">
        <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <header className="py-16 bg-gradient-to-r from-primary to-primary/90">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-primary-foreground">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Servicios de Bienestar Laboral para Empresas en Perú
              </h1>
              <p className="text-xl mb-8">
                En TrainerMax ayudamos a las empresas a mejorar la salud, energía y productividad de sus equipos a través de soluciones personalizadas de bienestar laboral.
              </p>
            </div>
          </div>
        </header>

        {/* Descripción */}
        <section className="py-16" aria-labelledby="description-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 id="description-heading" className="sr-only">Descripción de nuestros servicios</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Nos especializamos en diseñar e implementar programas de pausas activas, gimnasia laboral, masajes antiestrés y actividades de salud ocupacional para empresas de todos los sectores.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nuestra metodología se adapta al entorno y necesidades específicas de cada organización, ya sea que trabajen en oficinas, call centers, fábricas, entidades del Estado o en modalidad remota.
              </p>
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section className="py-16 bg-muted/50" aria-labelledby="services-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 id="services-heading" className="text-3xl font-bold mb-12 text-center">Nuestras soluciones de bienestar para empresas</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <article key={index}>
                    <Card className="h-full">
                      <CardHeader>
                        <div className="flex items-center space-x-3 mb-3">
                          {service.icon}
                          <CardTitle className="text-lg" role="heading" aria-level={3}>{service.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{service.description}</p>
                      </CardContent>
                    </Card>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Diseño Personalizado */}
        <section className="py-16" aria-labelledby="personalization-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 id="personalization-heading" className="text-3xl font-bold mb-8 text-center">Diseño de programas personalizados</h2>
              <p className="text-lg text-muted-foreground mb-8 text-center">
                Nuestro equipo se encarga de adaptar cada servicio a:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {adaptationFactors.map((factor, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>{factor}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-center text-muted-foreground">
                Contamos con metodologías flexibles que permiten operar desde una sede pequeña hasta grandes plantas industriales.
              </p>
            </div>
          </div>
        </section>

        {/* Por qué elegirnos */}
        <section className="py-16 bg-muted/50" aria-labelledby="why-choose-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 id="why-choose-heading" className="text-3xl font-bold mb-8 text-center">¿Por qué elegir los servicios de TrainerMax?</h2>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>{reason}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground" aria-labelledby="cta-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 id="cta-heading" className="text-3xl font-bold mb-6">¿No sabes qué servicio necesita tu equipo?</h2>
              <p className="text-xl mb-8">
                Ofrecemos un diagnóstico gratuito de bienestar laboral donde analizamos tu situación y te ayudamos a construir el plan ideal.
              </p>
              <a 
                href="https://wa.me/51985172717?text=Hola,%20me%20interesa%20solicitar%20un%20diagnóstico%20sin%20compromiso%20para%20mi%20empresa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar por WhatsApp para solicitar diagnóstico gratuito"
              >
                <Button size="lg" variant="secondary">
                  Solicita tu diagnóstico sin compromiso
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

        <Footer />
      </div>
    </>
  );
};

export default Services;