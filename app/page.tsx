import { Metadata } from 'next';
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

export const metadata: Metadata = {
  title: "Trainermax | Gimnasia Laboral, Pausas Activas y Entrenamiento Personal en Perú",
  description: "Entrena con Trainermax. Servicios de bienestar corporativo, pausas activas, gimnasia laboral, entrenamiento personalizado y diplomados internacionales con aval NPTI USA.",
  keywords: "pausas activas peru, gimnasia laboral, entrenamiento personal, bienestar corporativo, trainermax, salud ocupacional",
  openGraph: {
    type: "website",
    url: "https://luistrainermax.com/",
    title: "Trainermax | Bienestar Laboral y Pausas Activas en Perú",
    description: "Líder en servicios de bienestar corporativo: pausas activas, gimnasia laboral y entrenamiento personalizado en Perú.",
    images: [
      {
        url: "https://luistrainermax.com/lovable-uploads/logo_trainer.png",
        alt: "Trainermax Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Trainermax | Bienestar Laboral en Perú",
    description: "Servicios profesionales de pausas activas, gimnasia laboral y entrenamiento personalizado.",
    images: ["https://luistrainermax.com/lovable-uploads/logo_trainer.png"]
  },
  alternates: {
    canonical: "https://luistrainermax.com/"
  }
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

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
}

