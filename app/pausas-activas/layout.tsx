import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pausas Activas en el Trabajo | Beneficios para la Salud | TRAINERMAX",
  description: "Descubre los beneficios para la salud de las pausas activas en el trabajo. TRAINERMAX ofrece soluciones innovadoras para mejorar el bienestar en el entorno laboral.",
  keywords: "pausas activas trabajo, beneficios pausas activas, pausas activas empresas peru, ejercicios trabajo, bienestar laboral",
  openGraph: {
    type: "website",
    url: "https://luistrainermax.com/pausas-activas",
    title: "Pausas Activas en el Trabajo | Beneficios para la Salud | TRAINERMAX",
    description: "Mejora la salud y productividad de tu equipo con nuestras pausas activas laborales profesionales.",
    images: [
      {
        url: "https://luistrainermax.com/lovable-uploads/logo_trainer.png",
        alt: "TrainerMax Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Pausas Activas en el Trabajo | TRAINERMAX",
    description: "Soluciones profesionales de pausas activas para empresas en todo el Perú.",
    images: ["https://luistrainermax.com/lovable-uploads/logo_trainer.png"]
  },
  alternates: {
    canonical: "https://luistrainermax.com/pausas-activas"
  }
};

export default function PausasActivasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

