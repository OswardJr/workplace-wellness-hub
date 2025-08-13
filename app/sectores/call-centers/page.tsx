'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Headphones, 
  TrendingUp, 
  Brain, 
  Zap, 
  CheckCircle, 
  MessageCircle,
  Users,
  Monitor,
  Heart
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Pausas Activas y Bienestar Laboral en Call Centers",
  provider: {
    "@type": "Organization",
    name: "TrainerMax",
    url: "https://luistrainermax.com/sectores/call-centers",
    logo: "https://luistrainermax.com/lovable-uploads/logo_trainer.png"
  },
  areaServed: {
    "@type": "Country",
    name: "Perú"
  },
  description:
    "Mejora la salud física y emocional de tu equipo en call center con pausas activas, gimnasia laboral y talleres antiestrés. Soluciones presenciales y virtuales.",
  keywords: [
    "pausas activas call center",
    "bienestar laboral call centers", 
    "gimnasia laboral atención al cliente",
    "masajes en call center",
    "programa antiestrés call center",
    "trainermax call center"
  ]
};

export default function CallCentersPage() {
  const desafios = [
    {
      icon: <Headphones className="w-6 h-6 text-orange-500" />,
      title: "Posturas estáticas prolongadas y sedentarismo"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-red-500" />,
      title: "Alta exigencia de productividad y tiempos de respuesta"
    },
    {
      icon: <Brain className="w-6 h-6 text-blue-500" />,
      title: "Estrés emocional por trato con clientes difíciles"
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: "Dolencias frecuentes en espalda, cuello y muñecas"
    }
  ];

  const beneficios = [
    "Reducción del estrés y ansiedad en el equipo",
    "Mejor postura y menos molestias musculares",
    "Recuperación del enfoque durante la jornada",
    "Incremento de la productividad y motivación",
    "Menor rotación de personal y ausencias",
    "Cumplimiento de programas de salud ocupacional (SST)"
  ];

  const servicios = [
    {
      color: "bg-green-100",
      title: "Pausas Activas Grupales por Turno",
      items: [
        "Ejercicios de movilidad cervical, estiramiento de muñecas y respiración consciente",
        "Rutinas de 10–15 minutos sin salir del puesto",
        "Adaptadas a operaciones continuas y entornos cerrados"
      ]
    },
    {
      color: "bg-blue-100", 
      title: "Rutinas Virtuales para Equipos Remotos",
      items: [
        "Ideal para empresas con agentes híbridos o home office",
        "Acceso por Zoom, Meet o plataformas internas",
        "Guías descargables + sesiones en vivo"
      ]
    }
  ];

  const programasDetalle = [
    "Pausas activas para call centers - Rutinas breves adaptadas al espacio de trabajo",
    "Gimnasia laboral preventiva - Programas diarios o semanales en turnos específicos", 
    "Talleres de manejo del estrés - Técnicas de autorregulación, respiración y atención plena",
    "Masajes en el lugar de trabajo - Masajes descontracturantes en zona cervical y lumbar"
  ];

  const modalidades = [
    { color: "bg-green-100 text-green-800", label: "Virtual", desc: "para equipos remotos" },
    { color: "bg-orange-100 text-orange-800", label: "Presencial", desc: "en oficinas físicas" },
    { color: "bg-blue-100 text-blue-800", label: "Híbrido", desc: "sesiones virtuales + pausas in situ" }
  ];

  const ventajas = [
    "Más de 100 programas implementados en call centers del Perú",
    "Intervenciones prácticas sin interferir con los KPI operativos",
    "Comunicación clara, empática y orientada a resultados",
    "Soluciones que combinan salud física y emocional del colaborador"
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
                Bienestar Laboral en Call Centers
              </h1>
              <p className="text-xl mb-8">
                Reduce el agotamiento y mejora el rendimiento de tu equipo
              </p>
              <p className="text-lg leading-relaxed">
                El trabajo en call centers suele implicar largas jornadas sentados, presión por resultados, y una alta carga emocional. En TrainerMax entendemos estos desafíos y ofrecemos programas de pausas activas, masajes laborales y talleres emocionales diseñados específicamente para entornos de atención al cliente.
              </p>
            </div>
          </div>
        </section>

        {/* Desafíos comunes */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Desafíos comunes en los call centers</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {desafios.map((desafio, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                    {desafio.icon}
                    <span className="text-sm">{desafio.title}</span>
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
              <h2 className="text-3xl font-bold mb-8 text-center">✅ Beneficios de implementar pausas activas:</h2>
              
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

        {/* Servicios principales */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Servicios de bienestar para call centers</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {servicios.map((servicio, index) => (
                  <Card key={index} className={`${servicio.color} border-none`}>
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

        {/* Programas detalle */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-4">
                {programasDetalle.map((programa, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">{programa}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Modalidades */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Modalidades disponibles</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {modalidades.map((modalidad, index) => (
                  <Card key={index}>
                    <CardContent className="p-6 text-center">
                      <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${modalidad.color}`}>
                        {modalidad.label}
                      </div>
                      <p className="text-muted-foreground text-sm">{modalidad.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Por qué implementar */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">¿Por qué implementar bienestar en tu call center?</h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Disminuye la rotación de personal",
                  "Mejora el clima laboral y la energía en el equipo", 
                  "Reduce dolencias físicas y accidentes laborales",
                  "Aumenta la concentración y empatía con el cliente"
                ].map((razon, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <span>{razon}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Por qué elegir TrainerMax */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">¿Por qué elegir TrainerMax para tu call center?</h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                {ventajas.map((ventaja, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Brain className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>{ventaja}</span>
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
              <h2 className="text-3xl font-bold mb-6">¿Listos para energizar a tu equipo?</h2>
              <p className="text-xl mb-4">
                📞 Agenda una pausa activa demostrativa o recibe una propuesta con base en tus turnos, aforo y necesidades.
              </p>
              <p className="text-lg mb-8">
                🌐 Solicita más información y transforma la experiencia laboral desde la salud.
              </p>
              <a 
                href="https://wa.me/51985172717?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20los%20programas%20de%20bienestar%20para%20call%20centers"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="secondary" className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Solicitar información para call centers
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

