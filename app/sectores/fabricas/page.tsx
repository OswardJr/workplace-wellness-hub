'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Factory,
  AlertTriangle,
  Shield,
  TrendingUp,
  CheckCircle, 
  MessageCircle,
  Users,
  Monitor,
  Heart,
  Clock
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Pausas Activas y Gimnasia Laboral para Fábricas",
  provider: {
    "@type": "Organization",
    name: "TrainerMax",
    url: "https://luistrainermax.com/sectores/fabricas",
    logo: "https://luistrainermax.com/lovable-uploads/logo_trainer.png"
  },
  areaServed: {
    "@type": "Country",
    name: "Perú"
  },
  description:
    "Reduce lesiones y mejora el rendimiento de tus operarios con pausas activas y gimnasia laboral personalizada en plantas industriales. Servicio en todo el Perú.",
  keywords: [
    "pausas activas fábricas",
    "gimnasia laboral industria",
    "bienestar laboral plantas industriales", 
    "prevención lesiones operarios",
    "salud ocupacional fábricas",
    "trainermax industria"
  ]
};

export default function FabricasPage() {
  const problemas = [
    "Dolor lumbar y de hombros por posturas prolongadas",
    "Lesiones por esfuerzo repetitivo (LER)",
    "Cansancio físico acumulado",
    "Estrés operativo y mental",
    "Alta rotación por fatiga o ausentismo"
  ];

  const beneficios = [
    "Prevención de lesiones musculoesqueléticas",
    "Reducción de accidentes y paradas por fatiga",
    "Mayor energía y concentración durante los turnos",
    "Mejora del clima laboral y la comunicación",
    "Cumplimiento de normativas de salud ocupacional (SST)"
  ];

  const servicios = [
    {
      color: "bg-green-100",
      title: "Pausas Activas por Turno",
      items: [
        "Ejercicios de movilidad, estiramientos compensatorios y activación respiratoria",
        "Rutinas de 10–15 min guiadas por profesionales",
        "Adaptables a líneas de producción, zonas de carga y áreas comunes"
      ]
    },
    {
      color: "bg-blue-100",
      title: "Gimnasia Laboral para Operarios", 
      items: [
        "Enfoque preventivo: columna, hombros, cadera, muñecas",
        "Programas semanales o mensuales por área o sección",
        "Posibilidad de entrenamiento de supervisores o brigadas internas"
      ]
    },
    {
      color: "bg-orange-100",
      title: "Masajes Antiestrés en Planta (opcional)",
      items: [
        "Intervenciones express para operarios de carga o maquinaria",
        "Reduce tensión muscular y ayuda a prevenir lesiones"
      ]
    }
  ];

  const modalidades = [
    { icon: <Users className="w-6 h-6 text-green-600" />, label: "Presencial", desc: "en planta o almacén" },
    { icon: <Monitor className="w-6 h-6 text-blue-600" />, label: "Virtual", desc: "para plantas descentralizadas" },
    { icon: <Heart className="w-6 h-6 text-orange-600" />, label: "Híbrido", desc: "para empresas con sedes múltiples" }
  ];

  const ventajas = [
    "Más de 10 años de experiencia en empresas manufactureras, logísticas y agroindustriales",
    "Programas adaptados a líneas de producción, horarios por turno y espacios físicos reducidos",
    "Equipo certificado en fisioterapia, ergonomía laboral y salud ocupacional",
    "Posibilidad de certificar a tu propio personal para aplicar pausas activas internamente"
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
                Bienestar Laboral en Fábricas e Industrias del Perú
              </h1>
              <p className="text-xl mb-8">
                Salud y productividad industrial pueden ir de la mano
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Las fábricas, plantas de producción y centros logísticos enfrentan desafíos físicos constantes: jornadas largas, movimientos repetitivos, manipulación de cargas y trabajo en turnos rotativos. En TrainerMax ayudamos a las empresas industriales del Perú a proteger la salud de sus trabajadores con programas de pausas activas y gimnasia laboral adaptadas al entorno operativo.
              </p>
              <p className="text-lg leading-relaxed">
                Nuestra experiencia en entornos exigentes nos permite diseñar intervenciones seguras, prácticas y medibles, sin interrumpir la productividad.
              </p>
            </div>
          </div>
        </section>

        {/* Por qué implementar */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">✅ ¿Por qué implementar pausas activas en fábricas e industrias?</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
                    Problemas comunes que enfrentan los operarios industriales:
                  </h3>
                  <ul className="space-y-2">
                    {problemas.map((problema, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{problema}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Shield className="w-5 h-5 text-green-500 mr-2" />
                    Beneficios comprobados de nuestras intervenciones:
                  </h3>
                  <ul className="space-y-2">
                    {beneficios.map((beneficio, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-sm">{beneficio}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">✅ Servicios sugeridos para el sector industrial</h2>
              <p className="text-center text-muted-foreground mb-12">
                Programas personalizados según tipo de planta, turnos y cantidad de trabajadores.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                {servicios.map((servicio, index) => (
                  <Card key={index} className={`${servicio.color} border-none h-full`}>
                    <CardHeader>
                      <CardTitle className="text-lg">{servicio.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {servicio.items.map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                            <span>{item}</span>
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
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">✅ Modalidades disponibles</h2>
              <p className="text-center text-muted-foreground mb-8">
                TrainerMax ofrece soluciones flexibles para todo el Perú:
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {modalidades.map((modalidad, index) => (
                  <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                    <div className="flex justify-center mb-3">
                      {modalidad.icon}
                    </div>
                    <h3 className="font-semibold mb-2">{modalidad.label}</h3>
                    <p className="text-sm text-muted-foreground">{modalidad.desc}</p>
                  </div>
                ))}
              </div>
              
              <p className="text-center text-sm text-muted-foreground">
                Nuestros instructores están capacitados para trabajar en entornos industriales cumpliendo protocolos de bioseguridad, ergonomía y seguridad operativa.
              </p>
            </div>
          </div>
        </section>

        {/* Por qué elegir TrainerMax */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">✅ ¿Por qué elegir TrainerMax para tu fábrica?</h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                {ventajas.map((ventaja, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Factory className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">{ventaja}</span>
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
              <h2 className="text-3xl font-bold mb-6">🔷 Solicita una evaluación gratuita en tu planta</h2>
              <p className="text-xl mb-8">
                Descubre cómo podemos reducir lesiones y mejorar el rendimiento de tu equipo sin interrumpir tus operaciones.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://wa.me/51985172717?text=Hola,%20me%20interesa%20agendar%20un%20diagnóstico%20gratuito%20para%20mi%20planta%20industrial"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="secondary" className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Agendar diagnóstico gratuito
                  </Button>
                </a>
                
                <a 
                  href="https://wa.me/51985172717?text=Hola,%20me%20interesa%20hablar%20con%20un%20asesor%20TrainerMax%20sobre%20programas%20para%20fábricas"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="outline" className="flex items-center gap-2 border-white text-white hover:bg-white hover:text-primary">
                    <MessageCircle className="w-5 h-5" />
                    Hablar con un asesor TrainerMax
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

