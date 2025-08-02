import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, FileText, Users, BarChart, CheckCircle, Clock, Calendar, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ImplementacionBienestar = () => {
  const serviciosIncluidos = [
    {
      icon: <Search className="w-8 h-8 text-primary" />,
      title: "Diagnóstico y evaluación inicial",
      items: [
        "Revisión de condiciones laborales (sedentarismo, estrés, turnos, rotación)",
        "Encuesta de percepción de bienestar y dolencias",
        "Identificación de riesgos ergonómicos y psicosociales"
      ]
    },
    {
      icon: <FileText className="w-8 h-8 text-primary" />,
      title: "Diseño del plan de bienestar",
      items: [
        "Definimos objetivos, indicadores y frecuencia de actividades",
        "Selección de servicios según el perfil de la empresa",
        "Elaboración de cronograma, canales de comunicación interna y materiales"
      ]
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Ejecución con equipo profesional",
      items: [
        "Intervenciones guiadas por fisioterapeutas, instructores certificados y coaches",
        "Modalidad presencial, virtual o híbrida",
        "Adaptación por sede, área o tipo de trabajo"
      ]
    },
    {
      icon: <BarChart className="w-8 h-8 text-primary" />,
      title: "Medición, seguimiento y mejora continua",
      items: [
        "Encuestas de satisfacción y participación",
        "Reporte de impacto (dolencias reducidas, clima laboral, productividad)",
        "Ajustes mensuales o trimestrales al plan según resultados"
      ]
    }
  ];

  const serviciosIntegrables = [
    "Pausas activas (virtuales o presenciales)",
    "Gimnasia laboral semanal o por área",
    "Masajes antiestrés rotativos",
    "Talleres de bienestar emocional y manejo del estrés",
    "Jornadas especiales o semanas de la salud",
    "Activaciones corporativas por fechas clave"
  ];

  const tiposEmpresas = [
    "Empresas medianas y grandes con múltiples sedes o turnos",
    "Entidades públicas con objetivos de SST o bienestar institucional",
    "Empresas industriales con alta rotación o esfuerzo físico",
    "Oficinas corporativas que desean mejorar clima y engagement"
  ];

  const duraciones = [
    {
      periodo: "1 mes",
      descripcion: "Activación intensiva o piloto",
      color: "bg-green-100 text-green-800"
    },
    {
      periodo: "3 a 6 meses",
      descripcion: "Etapa de adopción",
      color: "bg-blue-100 text-blue-800"
    },
    {
      periodo: "12 meses",
      descripcion: "Plan anual de bienestar sostenible",
      color: "bg-purple-100 text-purple-800"
    }
  ];

  const beneficios = [
    "Reducción del ausentismo y licencias por dolencias",
    "Mejora del clima laboral y la satisfacción del equipo",
    "Alineación con los objetivos de SST o auditorías internas",
    "Fortalecimiento de la cultura de cuidado y salud organizacional",
    "Imagen positiva ante stakeholders y nuevos talentos"
  ];

  const ventajas = [
    "Más de 10 años diseñando programas para empresas líderes del Perú",
    "Experiencia en sectores diversos: banca, salud, industria, educación",
    "Foco en resultados medibles y mejora continua",
    "Acompañamiento integral de principio a fin",
    "Documentación alineada a auditorías y reportes de SST"
  ];

  return (
    <div className="min-h-screen bg-background font-inter">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/90">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-primary-foreground">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Implementación de Programas de Bienestar Laboral en Empresas
              </h1>
              <p className="text-xl mb-8">
                De la intención a la acción: construye un programa sostenible con TrainerMax
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Un programa de bienestar laboral no se trata solo de ofrecer pausas activas o masajes esporádicos. Requiere planificación, diagnóstico, alineación con los objetivos de salud ocupacional, participación del personal y medición de resultados.
              </p>
              <p className="text-lg leading-relaxed">
                En TrainerMax, diseñamos, implementamos y acompañamos programas integrales de bienestar físico y emocional, adaptados al tipo de empresa, sector y presupuesto.
              </p>
            </div>
          </div>
        </section>

        {/* Descripción */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Creamos experiencias sostenibles que impactan en la salud, la productividad y el compromiso del talento humano.
              </p>
            </div>
          </div>
        </section>

        {/* Qué incluye el servicio */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">¿Qué incluye nuestro servicio de implementación de bienestar?</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {serviciosIncluidos.map((servicio, index) => (
                  <Card key={index} className="h-full">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-3">
                        {servicio.icon}
                        <CardTitle className="text-lg">{servicio.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {servicio.items.map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
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

        {/* Servicios integrables */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">¿Qué servicios puedes integrar en tu programa?</h2>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {serviciosIntegrables.map((servicio, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>{servicio}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-center text-muted-foreground">
                Todo el programa se alinea con tus objetivos de seguridad y salud ocupacional (SST), clima laboral, retención de talento o cultura organizacional.
              </p>
            </div>
          </div>
        </section>

        {/* Tipos de empresas */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">¿Para qué tipo de empresas es ideal?</h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                {tiposEmpresas.map((tipo, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>{tipo}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Duración */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">¿Cuánto dura un programa de implementación?</h2>
              <p className="text-lg text-muted-foreground mb-8 text-center">
                Nuestros programas se pueden contratar por:
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {duraciones.map((duracion, index) => (
                  <Card key={index}>
                    <CardContent className="p-6 text-center">
                      <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${duracion.color}`}>
                        {duracion.periodo}
                      </div>
                      <p className="text-muted-foreground">{duracion.descripcion}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <p className="text-center text-muted-foreground">
                Adaptamos el alcance según tu presupuesto, objetivos y equipo disponible.
              </p>
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Beneficios de implementar un programa estructurado</h2>
              
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

        {/* Por qué implementar con TrainerMax */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">¿Por qué implementar tu programa con TrainerMax?</h2>
              
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
              <h2 className="text-3xl font-bold mb-6">¿Listo para estructurar tu estrategia de bienestar?</h2>
              <p className="text-xl mb-8">
                Deja de improvisar y construye un programa sólido, realista y efectivo.
              </p>
              <a 
                href="https://wa.me/51985172717?text=Hola,%20me%20interesa%20agendar%20una%20reunión%20para%20recibir%20una%20propuesta%20de%20implementación%20de%20bienestar%20laboral"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="secondary" className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Agenda una reunión y recibe una propuesta a medida
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

export default ImplementacionBienestar;