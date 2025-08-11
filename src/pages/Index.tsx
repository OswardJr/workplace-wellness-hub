import { Helmet } from "react-helmet-async";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import Program from "@/components/Program";
import Impact from "@/components/Impact";
import Coverage from "@/components/Coverage";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Trainermax",
  url: "https://luistrainermax.com/",
  logo: "https://luistrainermax.com/lovable-uploads/logo_trainer.png",
  description:
    "Servicios de bienestar corporativo en Perú: pausas activas, gimnasia laboral, entrenamiento personalizado y más.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "PE"
  },
  telephone: "+51985172717",
  email: "team@luistrainermax.com",
  service: [
    {
      "@type": "Service",
      name: "Gimnasia Laboral",
      description:
        "Sesiones de gimnasia laboral para reducir el estrés y mejorar el bienestar del equipo."
    },
    {
      "@type": "Service",
      name: "Pausas Activas",
      description:
        "Intervenciones breves durante la jornada laboral que promueven la salud física y mental."
    },
    {
      "@type": "Service",
      name: "Entrenamiento Personal",
      description:
        "Planes personalizados de entrenamiento físico para empleados y directivos."
    }
  ]
};

const Index = () => {
  return (
    <>
      <Helmet>
        <title>
          Trainermax | Gimnasia Laboral, Pausas Activas y Entrenamiento Personal en Perú
        </title>
        <meta
          name="description"
          content="Entrena con Trainermax. Servicios de bienestar corporativo, pausas activas, gimnasia laboral, entrenamiento personalizado y diplomados internacionales con aval NPTI USA."
        />
        <link rel="canonical" href="https://luistrainermax.com/" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background font-inter">
        <Header />

        {/* CTA fijo en scroll */}
        <div className="fixed bottom-0 left-0 right-0 bg-primary text-white text-center p-3 z-40 shadow-md">
          <a
              href="https://wa.me/51985172717?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20los%20servicios%20de%20TrainerMax"
              target="_blank"
              rel="noopener noreferrer"
            >
            Solicita una sesión gratuita de evaluación →
          </a>
        </div>

        <div className="pt-20">
          <Hero />
          <Services />
          <Benefits />
          <Program />
          <Impact />
          <Coverage />
          <FAQ />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Index;
