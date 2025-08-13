'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Truck, 
  Package, 
  Users, 
  Clock, 
  Activity, 
  CheckCircle,
  Phone,
  Mail,
  Award,
  Warehouse
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Pausas Activas y Bienestar Laboral para Empresas de Logística y Almacenes",
  name: "Pausas Activas para Operarios y Personal Logístico | TrainerMax Perú",
  provider: {
    "@type": "Organization",
    name: "Trainermax",
    url: "https://luistrainermax.com/sectores/logistica",
    logo: "https://luistrainermax.com/lovable-uploads/logo_trainer.png"
  },
  areaServed: {
    "@type": "Country", 
    name: "Perú"
  },
  description: "Reduce lesiones, mejora el clima laboral y eleva la productividad con pausas activas adaptadas al ritmo de trabajo logístico. Presencial y virtual en todo el Perú."
};

export default function LogisticaPage() {
  const problemas = [
    {
      icon: <Activity className="w-6 h-6 text-primary" />,
      title: "Lesiones musculares recurrentes",
      description: "En espalda, hombros y rodillas por movimientos repetitivos"
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Dolores articulares", 
      description: "Por malas posturas o esfuerzo constante"
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Fatiga acumulada",
      description: "En turnos largos o nocturnos"
    },
    {
      icon: <Package className="w-6 h-6 text-primary" />,
      title: "Bajo ánimo y poca cohesión",
      description: "Entre turnos o cuadrillas"
    },
    {
      icon: <Truck className="w-6 h-6 text-primary" />,
      title: "Desgaste físico y emocional",
      description: "Sobre todo en temporadas de alta demanda"
    },
    {
      icon: <Warehouse className="w-6 h-6 text-primary" />,
      title: "Aumento del ausentismo",
      description: "Y rotación laboral por dolencias físicas o estrés"
    }
  ];

  const beneficios = [
    "Reducción de lesiones músculo-esqueléticas",
    "Mayor rendimiento físico y mental por turno", 
    "Equipos más enfocados y motivados",
    "Mejora del clima laboral en almacenes y centros de distribución",
    "Apoyo concreto a la cultura de prevención y salud ocupacional",
    "Fortalecimiento del compromiso organizacional"
  ];

  const servicios = [
    {
      title: "Pausas Activas Preventivas por Turno",
      color: "bg-green-100",
      icon: <Users className="w-6 h-6 text-primary" />,
      items: [
        "Rutinas específicas para trabajadores de planta, operadores de montacargas, y personal de despacho",
        "Estiramientos funcionales, movilidad articular y activación de cadenas musculares",
        "Ejercicios de bajo impacto y alta efectividad para prevenir lesiones",
        "Implementables en patios, zonas de carga, vestuarios o salas de descanso"
      ]
    },
    {
      title: "Gimnasia Laboral para Equipos Operativos",
      color: "bg-blue-100", 
      icon: <Activity className="w-6 h-6 text-primary" />,
      items: [
        "Ejercicios programados antes, durante o después de los turnos",
        "Movilidad lumbar, cervical, muñecas y hombros",
        "Trabajo de conciencia corporal y respiración para recuperar energía",
        "Sesiones dinámicas adaptadas por rol o zona (almacén, transporte, logística inversa)"
      ]
    },
    {
      title: "Masajes Antiestrés para Turnos Rotativos",
      color: "bg-orange-100",
      icon: <Package className="w-6 h-6 text-primary" />,
      items: [
        "Aplicados en sillas ergonómicas",
        "Relajación muscular para zonas más afectadas por esfuerzo físico",
        "Ideal como incentivo para mejorar moral y fidelización de equipos"
      ]
    }
  ];

  const modalidades = [
    { text: "Presencial: sesiones en planta, patios de carga o zonas de espera" },
    { text: "Virtual: rutinas grabadas para distribución entre sedes o unidades" },
    { text: "Híbrido: ideal para empresas con personal mixto o multilocalizado" }
  ];

  const ventajas = [
    "Conocemos el lenguaje y ritmo de trabajo de operadores logísticos",
    "Nuestras rutinas se adaptan al día a día: sin interrumpir, sin complicar",
    "Instructores entrenados para ambientes de planta, almacén o transporte",
    "Protocolos de higiene, bioseguridad y eficiencia operativa", 
    "Medición de resultados y participación por turno o cuadrilla"
  ];

  const certificacionItems = [
    "Capacitación online o presencial",
    "Protocolos por área y tipo de riesgo físico",
    "Guías impresas y acceso a videos",
    "Certificado TrainerMax de aplicación interna"
  ];

  const casosAplicacion = [
    "Operadores logísticos de última milla",
    "Empresas de distribución y transporte de carga",
    "Centros de almacenamiento de retail y alimentos",
    "Operadores de ecommerce y logística inversa",
    "Equipos de transporte interprovincial y urbano"
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
                Pausas Activas y Bienestar Laboral para Empresas de Logística y Almacenes en Perú
              </h1>
              <p className="text-xl mb-8 text-primary-foreground/90">
                En el sector logístico, el cuerpo también es una herramienta de trabajo
              </p>
              <p className="text-lg leading-relaxed">
                Empresas de logística, distribución, transporte y almacenes enfrentan retos diarios de 
                exigencia física, productividad por turno, y prevención de accidentes. Operadores que 
                cargan, empacan, trasladan, rotulan o almacenan productos trabajan largas horas de pie, 
                en condiciones cambiantes de temperatura y bajo presión por cumplimiento de tiempos.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                Este entorno exige estrategias de prevención. En TrainerMax, ayudamos a reducir lesiones 
                musculares, mejorar la postura y fortalecer el compromiso laboral con pausas activas, 
                gimnasia laboral y bienestar físico adaptado al ritmo operativo.
              </p>
            </div>
          </div>
        </section>

        {/* Problemas */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">
                Problemas comunes en logística y almacenes
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {problemas.map((problema, index) => (
                  <Card key={index} className="h-full">
                    <CardHeader>
                      <div className="flex items-start space-x-4">
                        {problema.icon}
                        <div>
                          <CardTitle className="text-lg mb-2">{problema.title}</CardTitle>
                          <p className="text-muted-foreground text-sm">{problema.description}</p>
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
                Beneficios reales para el entorno logístico
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
                Servicios ideales para empresas de logística
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
                            <span className="text-muted-foreground text-sm">{item}</span>
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

        {/* Certificación Interna */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Entrenamos al personal interno si lo prefieres
              </h2>
              <p className="text-lg text-center mb-8 text-muted-foreground">
                Ofrecemos una opción de transferencia del conocimiento: El Plan de Certificación Interna, 
                que permite formar a líderes de seguridad o jefes de turno en pausas activas básicas y ergonomía.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Award className="w-6 h-6 text-primary mr-2" />
                    Incluye:
                  </h3>
                  <ul className="space-y-3">
                    {certificacionItems.map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <p className="text-lg font-medium mb-4">Ideal para empresas con varias sedes o rotación alta.</p>
                  <p className="text-muted-foreground">
                    Esta modalidad permite que tu equipo interno aplique las técnicas de pausas activas 
                    de manera autónoma, manteniendo la continuidad del programa sin depender de 
                    intervenciones externas constantes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Casos de aplicación */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Casos de aplicación típica</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {casosAplicacion.map((caso, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                    <Truck className="w-6 h-6 text-primary flex-shrink-0" />
                    <p className="text-lg">{caso}</p>
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
                Activa tu programa de bienestar logístico hoy mismo
              </h2>
              <p className="text-xl mb-4 text-primary-foreground/90">
                Menos lesiones, mejor energía, más compromiso en cada turno.
              </p>
              <p className="text-lg mb-8">
                En solo 15 minutos al día puedes cambiar el bienestar de tu equipo operativo.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/51985172717?text=Hola,%20me%20interesa%20solicitar%20una%20demo%20sin%20costo%20de%20pausas%20activas%20para%20mi%20empresa%20de%20logística"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                    Solicita una demo sin costo
                  </Button>
                </a>
                <a
                  href="https://wa.me/51985172717?text=Hola,%20me%20interesa%20agendar%20una%20llamada%20con%20el%20equipo%20especialista%20en%20logística%20de%20TrainerMax"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white text-primary hover:bg-gray-100">
                    Agenda una llamada con nuestro equipo especialista
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

