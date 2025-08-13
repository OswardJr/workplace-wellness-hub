import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircle,
  Headphones,
  Factory,
  Building,
  CreditCard,
  Monitor,
  ShoppingBag,
  Truck,
  Landmark,
  Hospital,
  GraduationCap,
  ArrowRight
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

// Schema básico para esta sección
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Programas de Bienestar Laboral por Sector",
  provider: {
    "@type": "Organization",
    name: "Trainermax",
    url: "https://luistrainermax.com/sectores"
  },
  areaServed: {
    "@type": "Country",
    name: "Perú"
  },
  description:
    "Trainermax adapta sus programas de pausas activas, masajes y gimnasia laboral a distintos sectores empresariales en todo el Perú."
};

export const metadata: Metadata = {
  title: "Sectores que Atendemos | Soluciones de Bienestar Laboral para Empresas | TrainerMax",
  description: "Descubre cómo TrainerMax adapta sus programas de pausas activas, masajes y gimnasia laboral a distintos sectores en todo el Perú.",
  alternates: {
    canonical: "https://luistrainermax.com/sectores"
  }
};

export default function SectorsPage() {
  const sectors = [
    {
      icon: <Headphones className="w-8 h-8 text-primary" />,
      title: "Call Centers",
      description: "Programas diseñados para prevenir fatiga vocal, visual y emocional. Ideal para equipos con alta presión, rotación y turnos rotativos.",
      href: "/sectores/call-centers",
      hasPage: true
    },
    {
      icon: <Factory className="w-8 h-8 text-primary" />,
      title: "Fábricas e Industrias",
      description: "Intervenciones ergonómicas, estiramientos compensatorios y gimnasia laboral para prevenir lesiones musculoesqueléticas en operarios.",
      href: "/sectores/fabricas",
      hasPage: true
    },
    {
      icon: <Building className="w-8 h-8 text-primary" />,
      title: "Oficinas Corporativas",
      description: "Pausas activas para prevenir el sedentarismo, mejorar postura y reducir el estrés mental. Modalidad presencial o virtual.",
      href: "/sectores/oficinas-corporativas",
      hasPage: true
    },
    {
      icon: <CreditCard className="w-8 h-8 text-primary" />,
      title: "Bancos y Financieras",
      description: "Soluciones adaptadas a personal de atención al cliente, ejecutivos y equipos administrativos con alta carga cognitiva y emocional.",
      href: "/sectores/banca-finanzas",
      hasPage: true
    },
    {
      icon: <Monitor className="w-8 h-8 text-primary" />,
      title: "Empresas de Tecnología",
      description: "Programas para entornos de trabajo sedentarios, alta exposición a pantallas y estrés por proyectos exigentes.",
      href: "/sectores/tecnologia",
      hasPage: true
    },
    {
      icon: <Truck className="w-8 h-8 text-primary" />,
      title: "Logística y Transporte",
      description: "Rutinas breves y efectivas para conductores, personal de carga y operadores de almacén. Enfocadas en movilidad, respiración y prevención de fatiga.",
      href: "/sectores/logistica",
      hasPage: true
    }
  ];

  const benefits = [
    "Personalización según tipo de esfuerzo y entorno laboral",
    "Resultados más rápidos y sostenibles",
    "Mayor aceptación y participación del personal",
    "Integración con programas de SST o clima laboral",
    "Justificación técnica ante auditorías y entidades reguladoras"
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
        <header className="py-16 bg-[#232937] from-primary to-primary/90">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-primary-foreground">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Sectores que Atendemos en TrainerMax
              </h1>
              <p className="text-xl mb-8">
                Diseñamos programas personalizados que se adaptan a la realidad de cada sector empresarial.
              </p>
            </div>
          </div>
        </header>

        {/* Descripción */}
        <section className="py-16" aria-labelledby="description-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 id="description-heading" className="sr-only">Servicios adaptados por sector</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                En TrainerMax entendemos que cada tipo de empresa tiene necesidades distintas en cuanto a salud y bienestar laboral. Por eso, diseñamos programas personalizados que se adaptan a la realidad de cada sector: desde oficinas con alta carga mental, hasta plantas industriales con alto esfuerzo físico.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ofrecemos pausas activas, gimnasia laboral, masajes antiestrés y programas integrales de bienestar ajustados al tipo de trabajo, espacio, nivel de exposición al estrés y modalidad de operación (presencial, remoto, turnos).
              </p>
            </div>
          </div>
        </section>

        {/* Sectores */}
        <section className="py-16 bg-muted/50" aria-labelledby="sectors-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 id="sectors-heading" className="text-3xl font-bold mb-12 text-center">
                Adaptamos nuestros servicios a los principales sectores empresariales del Perú:
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sectors.map((sector, index) => (
                  <article key={index}>
                    <Card className="h-full flex flex-col">
                      <CardHeader>
                        <div className="flex items-center space-x-3 mb-3">
                          {sector.icon}
                          <CardTitle className="text-lg" role="heading" aria-level={3}>{sector.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-1 flex flex-col">
                        <p className="text-muted-foreground mb-4 flex-1">{sector.description}</p>
                        {sector.hasPage && (
                          <Link href={sector.href!}>
                            <Button variant="outline" size="sm" className="w-full group">
                              Ver detalles
                              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </Link>
                        )}
                      </CardContent>
                    </Card>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section className="py-16" aria-labelledby="benefits-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 id="benefits-heading" className="text-3xl font-bold mb-8 text-center">Beneficios de trabajar por sector</h2>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Otros sectores */}
        <section className="py-16 bg-muted/50" aria-labelledby="other-sectors-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 id="other-sectors-heading" className="text-3xl font-bold mb-6">¿Tu empresa pertenece a otro sector?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Si no ves tu rubro listado, también podemos ayudarte. Nuestros programas se pueden adaptar a cualquier actividad económica, desde tecnológicas hasta constructoras, pasando por instituciones financieras y ONGs.
              </p>
              
              <a 
                href="https://wa.me/51985172717?text=Hola,%20me%20interesa%20solicitar%20un%20diagnóstico%20gratuito%20para%20mi%20organización"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar por WhatsApp para solicitar diagnóstico gratuito"
              >
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Solicita un diagnóstico gratuito
                </Button>
              </a>
              <p className="text-sm text-muted-foreground mt-4">
                Para identificar las mejores intervenciones de bienestar laboral para tu organización.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
