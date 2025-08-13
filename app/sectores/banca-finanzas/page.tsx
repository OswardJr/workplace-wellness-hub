'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  CreditCard, 
  Monitor, 
  Eye, 
  Users, 
  Clock, 
  CheckCircle,
  Phone,
  Mail,
  TrendingUp
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Bienestar Laboral para Empresas del Sector Financiero",
  name: "Pausas Activas para Bancos y Financieras | Bienestar Corporativo TrainerMax",
  provider: {
    "@type": "Organization",
    name: "Trainermax",
    url: "https://luistrainermax.com/sectores/banca-finanzas",
    logo: "https://luistrainermax.com/lovable-uploads/logo_trainer.png"
  },
  areaServed: {
    "@type": "Country", 
    name: "Perú"
  },
  description: "Reduce el estrés laboral y mejora el rendimiento de tu equipo financiero con pausas activas, gimnasia laboral y programas de bienestar. Servicio en todo el Perú."
};

export default function BancaFinanzasPage() {
  const desafios = [
    {
      icon: <Monitor className="w-6 h-6 text-primary" />,
      title: "Dolor cervical y lumbar por posturas prolongadas",
      description: "Largas horas frente al computador"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-primary" />,
      title: "Alta carga mental y emocional", 
      description: "Presión por objetivos y resultados"
    },
    {
      icon: <Eye className="w-6 h-6 text-primary" />,
      title: "Cansancio visual por pantallas continuas",
      description: "Fatiga ocular por uso intensivo de sistemas"
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Estrés por atención al público y presión comercial",
      description: "Interacción constante con clientes exigentes"
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Fatiga acumulada en turnos largos",
      description: "Jornadas extendidas y horarios rotativos"
    }
  ];

  const beneficios = [
    "Mejora la postura y reduce molestias musculares",
    "Aumenta el enfoque y reduce errores", 
    "Eleva el estado de ánimo general",
    "Disminuye el ausentismo y la rotación del personal",
    "Mejora el clima organizacional",
    "Alinea al equipo con la política de bienestar de la empresa"
  ];

  const servicios = [
    {
      title: "Pausas Activas Guiadas en Oficinas",
      color: "bg-green-100",
      items: [
        "Estiramientos específicos para cuello, espalda y muñecas",
        "Ejercicios para contrarrestar el sedentarismo",
        "Rutinas de respiración y enfoque mental"
      ]
    },
    {
      title: "Talleres Virtuales de Bienestar",
      color: "bg-blue-100", 
      items: [
        "Perfectos para áreas como cobranzas, mesa de operaciones o back office",
        "Sesiones breves y personalizables",
        "Ideales para empresas con múltiples sedes"
      ]
    },
    {
      title: "Masajes Antiestrés para Aniversarios o Semanas de la Salud",
      color: "bg-orange-100",
      items: [
        "Ideal como incentivo interno",
        "Ayuda a liberar tensiones musculares de manera rápida"
      ]
    }
  ];

  const modalidades = [
    { text: "Presencial: pausas en sucursales, oficinas centrales o hubs financieros" },
    { text: "Virtual: acceso desde sedes o home office" },
    { text: "Mixto: intervención presencial + reforzamiento virtual mensual" }
  ];

  const ventajas = [
    "Más de una década trabajando con bancos, cooperativas y aseguradoras",
    "Intervenciones adaptadas a áreas de atención, administrativas y operativas",
    "Equipo certificado en ergonomía, psicología organizacional y fisioterapia", 
    "Materiales y rutinas adaptadas a la cultura y lenguaje financiero"
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
                Bienestar Laboral para Empresas del Sector Financiero en Perú
              </h1>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Energía, enfoque y salud para equipos con alta exigencia mental
              </p>
              <p className="text-lg leading-relaxed">
                En el sector financiero, los colaboradores enfrentan retos constantes: atención al cliente, 
                cumplimiento de objetivos, revisión de operaciones críticas y largas horas frente al computador. 
                Todo esto genera estrés mental, fatiga física y un riesgo elevado de sedentarismo.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                En TrainerMax, diseñamos programas de pausas activas y bienestar laboral para bancos, 
                financieras, cooperativas y entidades crediticias, que elevan el rendimiento sin afectar 
                la productividad diaria.
              </p>
            </div>
          </div>
        </section>

        {/* Desafíos */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">
                Desafíos comunes en el sector financiero
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
                Beneficios de nuestras pausas activas
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
                Servicios recomendados para bancos y financieras
              </h2>
              
              <div className="grid lg:grid-cols-3 gap-8">
                {servicios.map((servicio, index) => (
                  <Card key={index} className="h-full">
                    <CardHeader>
                      <div className={`p-3 rounded-lg ${servicio.color} mb-4 inline-block`}>
                        <CreditCard className="w-6 h-6 text-primary" />
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
              <h2 className="text-3xl font-bold mb-12 text-center">¿Por qué elegir TrainerMax?</h2>
              
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
                Solicita una pausa activa piloto en tu banco o financiera
              </h2>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Vive cómo 10 minutos de bienestar bien dirigidos pueden transformar la jornada de tus equipos.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/51985172717?text=Hola,%20me%20interesa%20agendar%20una%20sesión%20de%20prueba%20de%20pausas%20activas%20para%20mi%20banco%20o%20financiera"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                    Agendar sesión de prueba
                  </Button>
                </a>
                <a
                  href="https://wa.me/51985172717?text=Hola,%20me%20interesa%20solicitar%20una%20propuesta%20personalizada%20de%20bienestar%20para%20mi%20entidad%20financiera"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white text-primary hover:bg-gray-100">
                    Solicitar propuesta personalizada
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

