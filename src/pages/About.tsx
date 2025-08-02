import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Phone, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/90">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-primary-foreground">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Trainermax – Expertos en Bienestar Laboral y Pausas Activas para Empresas en Perú
              </h1>
            </div>
          </div>
        </section>

        {/* Historia */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Nuestra Historia en el Bienestar Corporativo</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                En Trainermax iniciamos hace más de 9 años con una visión clara: transformar el entorno laboral a través del movimiento y la prevención. Comenzamos implementando pausas activas en empresas de Lima, y con el tiempo fuimos desarrollando soluciones más completas para mejorar la salud física y emocional de los colaboradores.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hoy somos líderes en bienestar laboral en Perú, acompañando a organizaciones de diversos sectores a reducir el estrés, prevenir lesiones y fomentar una cultura activa en el trabajo.
              </p>
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Qué Hacemos – Servicios de Bienestar Laboral para Empresas</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-center">
                En Trainermax diseñamos e implementamos programas de bienestar corporativo adaptados a cada organización. Ofrecemos soluciones presenciales, virtuales e híbridas que impactan directamente en la productividad, el clima laboral y la motivación del equipo.
              </p>
              
              <h3 className="text-2xl font-semibold mb-6">Nuestros principales servicios incluyen:</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  "Pausas activas para oficinas y fábricas",
                  "Gimnasia laboral para empresas en Lima y a nivel nacional",
                  "Masajes antiestrés corporativos para empleados",
                  "Capacitación en salud y seguridad ocupacional (SST)",
                  "Diplomados y cursos para formar instructores certificados",
                  "Programas virtuales y eventos presenciales enfocados en bienestar"
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground">
                Todos nuestros programas están diseñados para ser fáciles de implementar, medibles y alineados con la normativa peruana de salud ocupacional.
              </p>
            </div>
          </div>
        </section>

        {/* Equipo */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Nuestro Equipo de Especialistas en Salud Ocupacional y Actividad Física</h2>
              <p className="text-lg text-muted-foreground mb-8 text-center">
                Trainermax está conformado por un equipo multidisciplinario de profesionales:
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {[
                  "Fisioterapeutas con experiencia en prevención de TME",
                  "Entrenadores físicos certificados",
                  "Psicólogos ocupacionales",
                  "Facilitadores para pausas activas presenciales y virtuales",
                  "Consultores en seguridad y salud en el trabajo (SST)"
                ].map((role, index) => (
                  <Card key={index}>
                    <CardContent className="p-4 text-center">
                      <p className="font-medium">{role}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <p className="text-center text-muted-foreground">
                Nuestro equipo combina formación técnica, empatía y experiencia para asegurar programas efectivos y motivadores.
              </p>
            </div>
          </div>
        </section>

        {/* Empresas Clientes */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Empresas que Confían en Nuestros Programas de Bienestar Laboral</h2>
              <p className="text-lg text-muted-foreground mb-8 text-center">
                Hemos implementado pausas activas y gimnasia laboral en más de 300 empresas peruanas, incluyendo:
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {[
                  "Call centers",
                  "Clínicas y sector salud",
                  "Instituciones educativas",
                  "Empresas industriales y de logística",
                  "Entidades financieras y bancarias"
                ].map((sector, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>{sector}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-center text-muted-foreground">
                Adaptamos nuestras soluciones para empresas con alta rotación, trabajo remoto, operaciones físicas intensas y oficinas corporativas.
              </p>
            </div>
          </div>
        </section>

        {/* Por qué elegirnos */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">¿Por Qué Elegir Trainermax para Mejorar el Bienestar en tu Empresa?</h2>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  "Programas personalizados según industria y jornada laboral",
                  "Alta participación de colaboradores desde la primera sesión",
                  "Herramientas prácticas para RRHH (cronogramas, kits, reportes)",
                  "Cobertura en Lima y otras regiones del Perú",
                  "Entrenadores certificados y procesos alineados con la SUNAFIL y SST"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-center text-lg font-medium">
                Somos la solución ideal para empresas que buscan resultados reales en bienestar, clima laboral y prevención de riesgos.
              </p>
            </div>
          </div>
        </section>

        {/* Misión */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Nuestra Misión como Empresa de Bienestar Laboral en Perú</h2>
              <p className="text-xl mb-4">
                Promover entornos laborales saludables, activos y sostenibles en las empresas del Perú y Latinoamérica.
              </p>
              <p className="text-lg">
                Nos movemos por una razón: que tu equipo también se mueva, se sienta bien y rinda mejor.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Agenda una Demo y Descubre Cómo Trainermax Puede Transformar tu Empresa</h2>
              <p className="text-lg text-muted-foreground mb-8">
                ¿Buscas implementar pausas activas para tus colaboradores o un programa completo de bienestar laboral en Lima o a nivel nacional?
                Agenda una llamada gratuita con nuestro equipo y conoce cómo Trainermax puede ayudarte a reducir el estrés, prevenir lesiones y motivar a tu personal desde la primera sesión.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Agendar una demo
                </Button>
                <Button variant="outline" size="lg" className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Escríbenos por WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;