import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Implementación de Programas de Bienestar Laboral | TrainerMax Perú",
  description: "Diseñamos e implementamos programas integrales de pausas activas, masajes y gimnasia laboral alineados a tus objetivos de salud ocupacional y clima laboral.",
  keywords: "programa bienestar laboral, implementacion pausas activas, salud ocupacional empresas, bienestar organizacional peru",
  openGraph: {
    type: "website",
    url: "https://luistrainermax.com/servicios/implementacion-bienestar",
    title: "Implementación de Programas de Bienestar Laboral | TrainerMax",
    description: "Construye un programa sostenible de bienestar físico y emocional para tu empresa con acompañamiento profesional.",
    images: [
      {
        url: "https://luistrainermax.com/lovable-uploads/logo_trainer.png",
        alt: "TrainerMax Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Programas de Bienestar Laboral | TrainerMax",
    description: "De la intención a la acción: implementa un programa integral de bienestar laboral con resultados medibles.",
    images: ["https://luistrainermax.com/lovable-uploads/logo_trainer.png"]
  },
  alternates: {
    canonical: "https://luistrainermax.com/servicios/implementacion-bienestar"
  }
};

export default function ImplementacionBienestarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

