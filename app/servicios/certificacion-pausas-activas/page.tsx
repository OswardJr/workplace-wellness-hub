'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  GraduationCap,
  BookOpen,
  Award,
  Users,
  CheckCircle,
  MessageCircle
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ✅ JSON-LD Schema
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Certificación de Pausas Activas para Empresas",
  provider: {
    "@type": "Organization",
    name: "Trainermax",
    url: "https://luistrainermax.com/servicios/certificacion-pausas-activas",
    logo: "https://luistrainermax.com/lovable-uploads/logo_trainer.png"
  },
  areaServed: {
    "@type": "Country",
    name: "Perú"
  },
  description:
    "Entrena y certifica a tu propio personal para ejecutar pausas activas y gimnasia laboral. Programa completo con materiales, rutinas y soporte profesional.",
  keywords: [
    "certificación pausas activas",
    "formación promotores bienestar",
    "trainermax certifica a tu equipo",
    "pausas activas con personal interno",
    "gimnasia laboral certificación",
    "programa de bienestar interno"
  ]
};

export default function CertificacionPausasActivasPage() {
  const programaIncluye = [
    {
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      title: "Módulo de formación teórica y práctica",
      items: [
        "Fundamentos de la pausa activa y gimnasia laboral",
        "Principios básicos de ergonomía y prevención",
        "Técnicas de activación muscular y estiramientos",
        "Dinámicas de grupo y liderazgo activo"
      ]
    },
    {
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      title: "Manual digital personalizado",
      items: [
        "Instrucciones detalladas con imágenes paso a paso",
        "Recomendaciones por tipo de puesto y espacio",
        "Plan semanal de rutinas y tiempos sugeridos"
      ]
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Certificación de promotores internos",
      items: [
        "Evaluación práctica y teórica",
        "Diploma digital de participación y constancia de habilidades"
      ]
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Sesiones prácticas con acompañamiento",
      items: [
        "Ensayo de rutinas reales con feedback de nuestros especialistas",
        "Supervisión de la primera implementación en campo (opcional)"
      ]
    }
  ];

  const beneficios = [
    "Autonomía total para implementar pausas activas y gimnasia laboral",
    "Reducción de costos a largo plazo",
    "Flexibilidad de horarios y formatos internos",
    "Mayor involucramiento del equipo con cultura de bienestar",
    "Capacidad de escalar el programa a múltiples sedes o turnos"
  ];

  const proceso = [
    {
      numero: "1",
      titulo: "Diagnóstico breve",
      descripcion: "¿Cuántas personas se van a certificar? ¿Qué tipo de puestos tienen? ¿Modalidad: virtual, presencial o híbrida?"
    },
    {
      numero: "2",
      titulo: "Diseño del plan personalizado",
      descripcion: "Definimos el cronograma, el número de sesiones y el tipo de materiales."
    },
    {
      numero: "3",
      titulo: "Ejecución de la capacitación",
      descripcion: "Clases prácticas, materiales de apoyo y evaluación."
    },
    {
      numero: "4",
      titulo: "Certificación y entrega de materiales",
      descripcion: "Envío de diplomas y recursos de implementación."
    },
    {
      numero: "5",
      titulo: "Acompañamiento opcional",
      descripcion: "Supervisión en vivo de primeras pausas activas reales."
    }
  ];

  const modalidades = [
    { color: "bg-green-100 text-green-800", label: "100% virtual", desc: "Ideal para empresas distribuidas" },
    { color: "bg-orange-100 text-orange-800", label: "Híbrido", desc: "Virtual + prácticas presenciales" },
    { color: "bg-blue-100 text-blue-800", label: "Presencial", desc: "En Lima y principales ciudades del Perú" }
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
                Certifica a tu Equipo en Pausas Activas y Bienestar Laboral
              </h1>
              <p className="text-xl mb-8">
                Capacita a tu propio equipo para liderar el bienestar laboral
              </p>
              <p className="text-lg leading-relaxed">
                ¿Quieres implementar pausas activas y gimnasia laboral en tu empresa de forma autónoma? En TrainerMax te ofrecemos un Programa de Certificación Interna que permite formar a tu personal para que ejecute estas rutinas con seguridad, respaldo técnico y alineación a tus objetivos de salud ocupacional.
              </p>
            </div>
          </div>
        </section>

        {/* Descripción */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Este servicio está diseñado para empresas que desean un programa sostenible en el tiempo, con multiplicadores internos que promuevan el movimiento diario sin depender de proveedores externos.
              </p>
            </div>
          </div>
        </section>

        {/* Qué incluye el programa */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">¿Qué incluye el programa?</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {programaIncluye.map((item, index) => (
                  <Card key={index} className="h-full">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-3">
                        {item.icon}
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {item.items.map((subitem, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                            <span className="text-muted-foreground">{subitem}</span>
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

        {/* Beneficios */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Beneficios de certificar a tu equipo</h2>
              
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

        {/* Proceso */}
        <section className="py-16 bg-muted/50">
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
                      <p className="text-muted-foreground">{modalidad.desc}</p>
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
              <h2 className="text-3xl font-bold mb-6">¿Quieres una cultura de bienestar sostenible?</h2>
              <p className="text-xl mb-4">
                Empieza por formar a tu equipo.
              </p>
              <p className="text-lg mb-8">
                Conviértete en una empresa que no solo promueve pausas activas, sino que lidera internamente el bienestar diario.
              </p>
              <a 
                href="https://wa.me/51985172717?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20el%20programa%20de%20certificación%20en%20pausas%20activas%20para%20mi%20empresa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="secondary" className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Agenda una llamada y recibe tu plan personalizado
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