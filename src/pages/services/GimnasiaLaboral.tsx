import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Shield, Target, Clock, Users, CheckCircle, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Gimnasia Laboral para Empresas",
  provider: {
    "@type": "Organization",
    name: "Trainermax",
    url: "https://luistrainermax.com/servicios/gimnasia-laboral",
    logo: "https://luistrainermax.com/lovable-uploads/logo_trainer.png",
    email: "team@luistrainermax.com",
    telephone: "+51 985 172 717",
    address: {
      "@type": "Country",
      name: "Perú"
    }
  },
  description:
    "Prevén lesiones y mejora el bienestar físico de tu equipo con programas de gimnasia laboral adaptados a cada tipo de trabajo. Solicita una evaluación gratuita.",
  keywords: [
    "gimnasia laboral",
    "gimnasia laboral para empresas",
    "ejercicios laborales",
    "prevención de lesiones en el trabajo",
    "programa de salud ocupacional",
    "trainermax gimnasia laboral Perú"
  ]
};

const GimnasiaLaboral = () => {
  const beneficios = [
    "Prevención de lesiones por movimientos repetitivos o esfuerzos físicos",
    "Mejora de la postura y flexibilidad",
    "Reducción de fatiga muscular y dolores corporales",
    "Disminución del ausentismo laboral",
    "Mayor energía y concentración durante la jornada",
    "Aumento de la productividad y satisfacción del personal"
  ];

  const proceso = [
    {
      numero: "1",
      titulo: "Evaluación inicial gratuita",
      descripcion: "Identificamos los principales riesgos ergonómicos y posturales de tu equipo según área, función y espacio disponible."
    },
    {
      numero: "2",
      titulo: "Diseño de rutina personalizada",
      descripcion: "Adaptamos las sesiones a actividades repetitivas, carga física, trabajo de pie prolongado o trabajo en escritorio."
    },
    {
      numero: "3",
      titulo: "Ejecución guiada por profesionales",
      descripcion: "Sesiones de 15 a 30 minutos en grupo o por área, guiadas por fisioterapeutas o especialistas en actividad física laboral."
    },
    {
      numero: "4",
      titulo: "Seguimiento",
      descripcion: "Medición de impacto en dolores reportados, ausentismo y satisfacción de los participantes."
    }
  ];

  const ejercicios = [
    "Movilidad articular (cuello, hombros, caderas, muñecas)",
    "Estiramientos musculares compensatorios",
    "Fortalecimiento de zona media (core)",
    "Respiración consciente y controlada",
    "Técnicas de relajación postural",
    "Activación muscular progresiva"
  ];

  const empresasIdeales = [
    "Fábricas y líneas de producción",
    "Centros logísticos y almacenes",
    "Oficinas administrativas (postura prolongada)",
    "Call centers (movimientos limitados y estrés corporal)",
    "Clínicas y personal de atención médica",
    "Instituciones educativas (docentes y administrativos)"
  ];

  const ventajas = [
    "Expertos en ergonomía y fisioterapia laboral",
    "Programas personalizados por tipo de empresa",
    "Cobertura nacional con atención en Lima y regiones",
    "Personal certificado con experiencia en campo",
    "Reportes de seguimiento y mejora continua",
    "Integración con pausas activas y otros servicios"
  ];

  const comparacion = [
    {
      caracteristica: "Duración",
      gimnasiaLaboral: "15 a 30 minutos",
      pausasActivas: "5 a 15 minutos"
    },
    {
      caracteristica: "Intensidad",
      gimnasiaLaboral: "Moderada",
      pausasActivas: "Baja"
    },
    {
      caracteristica: "Objetivo principal",
      gimnasiaLaboral: "Prevención de lesiones físicas",
      pausasActivas: "Activación y descanso mental"
    },
    {
      caracteristica: "Frecuencia recomendada",
      gimnasiaLaboral: "2 a 3 veces por semana",
      pausasActivas: "Diaria"
    },
    {
      caracteristica: "Tipo de entorno",
      gimnasiaLaboral: "Mayor esfuerzo físico o postural",
      pausasActivas: "Cualquier entorno"
    }
  ];

  return (
    <div className="min-h-screen bg-background font-inter">

      <Helmet>
        <title>
          Gimnasia Laboral para Empresas en Perú | Prevención y Bienestar | TrainerMax
        </title>
        <meta
          name="description"
          content="Prevén lesiones y mejora el bienestar físico de tu equipo con programas de gimnasia laboral adaptados a cada tipo de trabajo. Solicita una evaluación gratuita."
        />
        <link
          rel="canonical"
          href="https://luistrainermax.com/servicios/gimnasia-laboral"
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
                Gimnasia Laboral para Empresas en Perú
              </h1>
              <p className="text-xl mb-8">
                Prevención profesional de lesiones musculoesqueléticas y mejora postural
              </p>
              <p className="text-lg leading-relaxed mb-6">
                La gimnasia laboral es una rutina de ejercicios físicos planificados que se realiza durante la jornada de trabajo para prevenir lesiones musculoesqueléticas, mejorar la postura y promover la salud física y mental de los trabajadores.
              </p>
              <p className="text-lg leading-relaxed">
                A diferencia de las pausas activas (más breves y generales), la gimnasia laboral es una intervención más profunda y estructurada, ideal para entornos con altos niveles de exigencia física o postural.
              </p>
            </div>
          </div>
        </section>

        {/* Descripción */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                En TrainerMax diseñamos programas personalizados de gimnasia laboral adaptados a tu tipo de empresa, actividad económica y perfil de trabajador. Nuestro objetivo es ayudarte a construir un entorno laboral más saludable, seguro y eficiente.
              </p>
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Beneficios de la gimnasia laboral en tu empresa</h2>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {beneficios.map((beneficio, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>{beneficio}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-center text-muted-foreground">
                La gimnasia laboral también contribuye directamente a los objetivos de salud ocupacional y seguridad en el trabajo (SST), y puede ser integrada como parte de tu plan de prevención.
              </p>
            </div>
          </div>
        </section>

        {/* Proceso */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">¿Cómo funciona nuestro programa de gimnasia laboral?</h2>
              
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

        {/* Qué incluye una sesión */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">¿Qué incluye una sesión de gimnasia laboral?</h2>
              <p className="text-lg text-muted-foreground mb-8 text-center">
                Cada rutina incluye ejercicios prácticos, simples y efectivos como:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {ejercicios.map((ejercicio, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Activity className="w-5 h-5 text-primary" />
                    <span>{ejercicio}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-center text-muted-foreground">
                Las sesiones se adaptan al espacio disponible (escritorio, línea de producción, almacén, etc.) y pueden realizarse sin necesidad de cambiar de ropa o equipo especial.
              </p>
            </div>
          </div>
        </section>

        {/* Empresas ideales */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">¿Para qué tipo de empresas es ideal?</h2>
              <p className="text-lg text-muted-foreground mb-8 text-center">
                La gimnasia laboral es especialmente útil en:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {empresasIdeales.map((empresa, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Target className="w-5 h-5 text-primary" />
                    <span>{empresa}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Comparación */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Diferencias entre gimnasia laboral y pausas activas</h2>
              
              <Card>
                <CardContent className="p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-3">Característica</th>
                          <th className="text-left p-3">Gimnasia Laboral</th>
                          <th className="text-left p-3">Pausas Activas</th>
                        </tr>
                      </thead>
                      <tbody>
                        {comparacion.map((item, index) => (
                          <tr key={index} className="border-b">
                            <td className="p-3 font-medium">{item.caracteristica}</td>
                            <td className="p-3">{item.gimnasiaLaboral}</td>
                            <td className="p-3">{item.pausasActivas}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Ambas se pueden complementar dentro de un mismo programa de bienestar.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Por qué elegirnos */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">¿Por qué elegir TrainerMax?</h2>
              
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

        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">¿Listo para fortalecer el cuerpo de tu equipo?</h2>
              <p className="text-xl mb-8">
                Solicita una evaluación gratuita de riesgos ergonómicos en tu lugar de trabajo y te ayudamos a construir un plan de gimnasia laboral adaptado.
              </p>
              <a 
                href="https://wa.me/51985172717?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20los%20programas%20de%20gimnasia%20laboral%20para%20mi%20empresa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="secondary" className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Contáctanos para conocer nuestros paquetes
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

export default GimnasiaLaboral;