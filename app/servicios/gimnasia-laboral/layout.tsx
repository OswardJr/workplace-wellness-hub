import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gimnasia Laboral para Empresas en Perú | Prevención y Bienestar | TrainerMax",
  description: "Prevén lesiones y mejora el bienestar físico de tu equipo con programas de gimnasia laboral adaptados a cada tipo de trabajo. Solicita una evaluación gratuita.",
  keywords: "gimnasia laboral peru, gimnasia laboral empresas, ejercicios laborales, prevencion lesiones trabajo, salud ocupacional",
  openGraph: {
    type: "website",
    url: "https://luistrainermax.com/servicios/gimnasia-laboral",
    title: "Gimnasia Laboral para Empresas en Perú | TrainerMax",
    description: "Programas profesionales de gimnasia laboral para prevenir lesiones y mejorar el bienestar físico de tu equipo.",
    images: [
      {
        url: "https://luistrainermax.com/lovable-uploads/logo_trainer.png",
        alt: "TrainerMax Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Gimnasia Laboral para Empresas | TrainerMax",
    description: "Prevención profesional de lesiones musculoesqueléticas y mejora postural para tu empresa.",
    images: ["https://luistrainermax.com/lovable-uploads/logo_trainer.png"]
  },
  alternates: {
    canonical: "https://luistrainermax.com/servicios/gimnasia-laboral"
  }
};

export default function GimnasiaLaboralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

