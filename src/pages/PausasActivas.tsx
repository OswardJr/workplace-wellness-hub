import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

// Schema JSON-LD
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Pausas Activas Laborales",
  name: "Pausas Activas en el Trabajo | TRAINERMAX",
  provider: {
    "@type": "Organization",
    name: "Trainermax",
    url: "https://luistrainermax.com/servicios/pausas-activas",
    logo: "https://luistrainermax.com/lovable-uploads/logo_trainer.png"
  },
  areaServed: {
    "@type": "Country",
    name: "Perú"
  },
  description:
    "Soluciones de pausas activas para oficinas, fábricas y empresas en Perú. Mejora la salud y el bienestar de tu equipo con Trainermax."
};

const PausasActivas = () => {
  const beneficios = [
    "Aumento de la Energía",
    "Mejora de la Concentración",
    "Reducción del Estrés",
    "Prevención de Problemas de Salud",
    "Trabajo en Equipo"
  ];

  const clientes = [
    "/lovable-uploads/senati-logo.png",
    "/lovable-uploads/btgrupo-logo.png",
    "/lovable-uploads/votorantim-logo.png",
    "/lovable-uploads/siegfried-logo.png",
    "/lovable-uploads/ministerio-logo.png"
    ];

  const [activeImage, setActiveImage] = useState<string | null>(null);

  const galeria = [
    "/lovable-uploads/2000_6595871975358.webp",
    "/lovable-uploads/2000_659587199004a.webp",
    "/lovable-uploads/2000_6595871990b81.webp",
    "/lovable-uploads/800_659587198ff41.webp",
    "/lovable-uploads/800_659587198fefd.webp",
    "/lovable-uploads/800_659587196b9c6.webp",
    "/lovable-uploads/800_6595871959aec.webp",
    "/lovable-uploads/800_659587199060b.webp",
    "/lovable-uploads/800_659587191a817.webp"
  ];

  return (
    <div className="min-h-screen bg-background font-inter">

      <Helmet>
        <title>Pausas Activas en el Trabajo | Beneficios para la Salud | TRAINERMAX</title>
        <meta
          name="description"
          content="Descubre los beneficios para la salud de las pausas activas en el trabajo. TRAINERMAX ofrece soluciones innovadoras para mejorar el bienestar en el entorno laboral."
        />
        <link rel="canonical" href="https://luistrainermax.com/servicios/pausas-activas" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      
      <Header />

      <main className="pt-20">
        {/* Hero principal */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-4">Pausas Activas Laborales</h1>
              <p className="text-muted-foreground leading-relaxed">
                ¡Bienvenidos a <strong>TrainerMax</strong>, empresa líder de <strong>pausas activas</strong>! 
                Enfocados en el bienestar laboral, ofrecemos un servicio integral de pausas activas para trabajadores, diseñado para transformar la rutina diaria en el entorno laboral. 
                Nuestras dinámicas pausas activas en el trabajo están cuidadosamente diseñadas para revitalizar y energizar a los empleados, fomentando la salud física y mental en el lugar de trabajo.
              </p>
            </div>
            <div>
              <img
                src="/lovable-uploads/800_6045199192cca.jpg"
                alt="Pausa activa en el trabajo"
                className="w-full rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-8">Beneficios</h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              {beneficios.map((item, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <div className="text-primary font-bold">{i + 1}.</div>
                  <div>
                    <span className="font-medium">{item}</span>
                    <p className="text-muted-foreground text-sm">
                      {item === "Aumento de la Energía" && "Las pausas activas recargan la energía física y mental, aumentando concentración y productividad."}
                      {item === "Mejora de la Concentración" && "Al interrumpir la monotonía, los empleados regresan a sus tareas con mejor enfoque."}
                      {item === "Reducción del Estrés" && "Moviliza el cuerpo, mejora el ánimo y disminuye el estrés acumulado durante la jornada."}
                      {item === "Prevención de Problemas de Salud" && "Evita dolencias musculares y mejora la postura con microejercicios regulares."}
                      {item === "Trabajo en Equipo" && "Fortalece vínculos y promueve un clima laboral colaborativo."}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mejora la salud */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
            <img
              src="/lovable-uploads/800_5e0be4eaa3820.jpg"
              alt="Trabajadora feliz"
              className="w-full rounded-lg"
            />
            <div>
              <h2 className="text-2xl font-bold mb-4">Mejora la salud en el trabajo</h2>
              <p className="text-muted-foreground">
                Nuestras pausas activas se adaptan a las necesidades específicas de cada empresa, incorporando técnicas de respiración, estiramientos y movimiento para contrarrestar los efectos de la vida sedentaria. 
                Promovemos la conexión entre los equipos mientras mejoramos la salud física y mental.
              </p>
              <a
                href="https://wa.me/51985172717?text=Hola,%20me%20interesa%20consultar%20el%20precio%20de%20las%20pausas%20activas%20para%20mi%20empresa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="mt-6">Consultar Precio</Button>
              </a>
            </div>
          </div>
        </section>

        {/* Clientes */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-8">Confían en nosotros</h2>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {clientes.map((logo, idx) => (
                <img key={idx} src={logo} alt={`Cliente ${idx}`} className="h-12 object-contain" />
              ))}
            </div>
          </div>
        </section>

        {/* Estrés laboral */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Alivia el estrés de tu empresa</h2>
              <p className="text-muted-foreground">
                Ofrecemos herramientas prácticas para mejorar la energía, la motivación y la salud física en el lugar de trabajo. ¡Tu equipo te lo agradecerá!
              </p>
              <a
                href="https://wa.me/51985172717?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20las%20pausas%20activas%20para%20mi%20empresa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="mt-6">Contactar</Button>
              </a>
            </div>
            <img
              src="/lovable-uploads/800_63748ac9ccbc4.jpg"
              alt="Pausa activa al aire libre"
              className="w-full rounded-lg"
            />
          </div>
        </section>

        {/* Galería */}
        <section className="py-16">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-8">Galería</h2>
            <div className="grid md:grid-cols-3 gap-4">
            {galeria.map((img, i) => (
                <img
                key={i}
                src={img}
                alt={`Galería ${i}`}
                className="rounded-lg object-cover w-full h-64 cursor-pointer hover:opacity-80 transition"
                onClick={() => setActiveImage(img)}
                />
            ))}
            </div>
        </div>

        {/* Modal */}
        {activeImage && (
            <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setActiveImage(null)}
            >
            <div className="relative">
                <button
                onClick={() => setActiveImage(null)}
                className="absolute top-2 right-2 text-white text-3xl"
                >
                &times;
                </button>
                <img
                src={activeImage}
                alt="Vista ampliada"
                className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-lg"
                />
            </div>
            </div>
        )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PausasActivas;
