import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Video, Calendar, Zap, Globe, CheckCircle, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Programas Virtuales de Bienestar Laboral",
  name: "Programas Virtuales de Bienestar Laboral para Empresas | TrainerMax Perú",
  url: "https://luistrainermax.com/programas-virtuales",
  logo: "https://luistrainermax.com/lovable-uploads/logo_trainer.png",
  provider: {
    "@type": "Organization",
    name: "TrainerMax",
    email: "team@luistrainermax.com",
    telephone: "+51 985 172 717",
    address: {
      "@type": "Country",
      name: "Perú"
    }
  },
  description:
    "Pausas activas, gimnasia laboral y bienestar emocional para equipos remotos y empresas con sedes múltiples. 100% online y personalizable.",
  keywords: [
    "programas virtuales bienestar",
    "pausas activas online",
    "gimnasia laboral remota",
    "bienestar remoto empresas",
    "trainermax virtual",
    "salud ocupacional online Perú"
  ]
};

const ProgramasVirtuales = () => {
  const incluye = [
    "Pausas activas guiadas por videollamada (5–15 min)",
    "Gimnasia laboral adaptada al espacio de casa (15–30 min)",
    "Sesiones de respiración consciente y control del estrés",
    "Tips posturales para home office",
    "Actividades de integración y dinámicas grupales"
  ];

  const proceso = [
    {
      numero: "1",
      titulo: "Diagnóstico breve",
      descripcion: "Analizamos el perfil de tu equipo remoto, zonas horarias, canales y rutinas."
    },
    {
      numero: "2",
      titulo: "Diseño del programa virtual",
      descripcion: "Definimos frecuencia, duración y tipo de sesiones. Adaptamos según plataforma y tipo de colaboradores."
    },
    {
      numero: "3",
      titulo: "Implementación y acompañamiento",
      descripcion: "Ejecutamos sesiones en vivo por Zoom, Google Meet, Teams u otra plataforma. También podemos grabar las sesiones o entregarlas en formato on-demand."
    },
    {
      numero: "4",
      titulo: "Medición de impacto",
      descripcion: "Encuestas de satisfacción, mejora de hábitos, reducción de malestares posturales."
    }
  ];

  const modalidades = [
    {
      icon: <Video className="w-8 h-8 text-primary" />,
      title: "Sesiones en vivo programadas",
      description: "Por grupo o sede"
    },
    {
      icon: <Monitor className="w-8 h-8 text-primary" />,
      title: "Videos grabados",
      description: "Para uso libre del personal"
    },
    {
      icon: <Calendar className="w-8 h-8 text-primary" />,
      title: "Modalidad híbrida",
      description: "Combinamos sesiones virtuales con pausas presenciales por zona"
    }
  ];

  const ventajas = [
    "Alcance nacional sin límites logísticos",
    "Costo accesible por número de usuarios",
    "Flexibilidad horaria y autogestión",
    "Escalable para empresas con muchas sedes o rotación frecuente",
    "Acompañamiento profesional garantizado"
  ];

  const tiposEmpresas = [
    "Empresas con trabajo remoto parcial o total",
    "Corporaciones con sedes distribuidas",
    "Instituciones públicas que trabajan con teletrabajo",
    "Equipos en modalidad híbrida",
    "Call centers o servicios de atención con operadores desde casa"
  ];

  const porQueElegir = [
    "Expertos en ergonomía y bienestar laboral desde hace más de 10 años",
    "Sesiones dictadas por profesionales certificados",
    "Evaluación de resultados y encuestas personalizadas",
    "Cobertura nacional, incluso en zonas sin acceso a oficinas",
    "Contenido adaptable a cualquier sector o cultura organizacional"
  ];

  return (
    <div className="min-h-screen bg-background font-inter">

      <Helmet>
        <title>
          Programas Virtuales de Bienestar Laboral para Empresas | TrainerMax Perú
        </title>
        <meta
          name="description"
          content="Pausas activas, gimnasia laboral y bienestar emocional para equipos remotos y empresas con sedes múltiples. 100% online y personalizable."
        />
        <link
          rel="canonical"
          href="https://luistrainermax.com/servicios/programas-virtuales"
        />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/90">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-primary-foreground">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Programas Virtuales de Bienestar Laboral
              </h1>
              <p className="text-xl mb-8">
                Bienestar sin importar la ubicación
              </p>
              <p className="text-lg leading-relaxed mb-6">
                El trabajo remoto y los equipos distribuidos son una realidad para muchas empresas en Perú. Pero eso no significa que el bienestar de los colaboradores deba descuidarse. En TrainerMax, ofrecemos programas virtuales de pausas activas, gimnasia laboral y bienestar emocional, diseñados especialmente para equipos en modalidad remota o híbrida.
              </p>
              <p className="text-lg leading-relaxed">
                Con nuestras sesiones virtuales, tu equipo podrá mantener la energía, mejorar su postura y reducir el estrés sin importar si trabajan desde casa, una oficina regional o un coworking.
              </p>
            </div>
          </div>
        </section>

        {/* Qué incluye */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">¿Qué incluye un programa virtual?</h2>
              <p className="text-lg text-muted-foreground mb-8 text-center">
                Nuestros programas virtuales se diseñan a medida e incluyen:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {incluye.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-center text-muted-foreground">
                Todo el contenido es desarrollado y guiado por fisioterapeutas, entrenadores certificados y especialistas en salud ocupacional.
              </p>
            </div>
          </div>
        </section>

        {/* Cómo se implementa */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">¿Cómo se implementa?</h2>
              
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

        {/* Modalidades */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Modalidades disponibles</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {modalidades.map((modalidad, index) => (
                  <Card key={index} className="h-full">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-3">
                        {modalidad.icon}
                        <CardTitle className="text-lg">{modalidad.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{modalidad.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Ventajas */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Ventajas del formato virtual</h2>
              
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
              <h2 className="text-3xl font-bold mb-8 text-center">¿A qué tipo de empresas está dirigido?</h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                {tiposEmpresas.map((tipo, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-primary" />
                    <span>{tipo}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Por qué elegir TrainerMax */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">¿Por qué elegir TrainerMax para tu programa virtual?</h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                {porQueElegir.map((razon, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>{razon}</span>
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
              <h2 className="text-3xl font-bold mb-6">¿Quieres probar una sesión virtual con tu equipo?</h2>
              <p className="text-xl mb-8">
                Solicita una jornada gratuita de pausas activas virtuales y empieza a transformar el bienestar de tus colaboradores desde cualquier lugar.
              </p>
              <a 
                href="https://wa.me/51985172717?text=Hola,%20me%20interesa%20agendar%20una%20llamada%20para%20recibir%20una%20propuesta%20de%20programas%20virtuales%20de%20bienestar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="secondary" className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Agenda una llamada y recibe una propuesta personalizada
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

export default ProgramasVirtuales;