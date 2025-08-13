import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pausas Activas para Operarios y Personal Logístico | TrainerMax Perú",
  description: "Reduce lesiones, mejora el clima laboral y eleva la productividad con pausas activas adaptadas al ritmo de trabajo logístico. Presencial y virtual en todo el Perú.",
  keywords: "pausas activas logistica, gimnasia laboral almacenes, bienestar operarios, prevencion lesiones logistica, trainermax logistica, salud laboral transporte",
  openGraph: {
    title: "Pausas Activas para Operarios y Personal Logístico | TrainerMax Perú",
    description: "Reduce lesiones, mejora el clima laboral y eleva la productividad con pausas activas adaptadas al ritmo de trabajo logístico.",
    url: "https://luistrainermax.com/sectores/logistica",
    siteName: "TrainerMax",
    images: [
      {
        url: "https://luistrainermax.com/lovable-uploads/logo_trainer.png",
        width: 1200,
        height: 630,
        alt: "TrainerMax - Pausas Activas para Empresas de Logística",
      },
    ],
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pausas Activas para Operarios y Personal Logístico | TrainerMax Perú",
    description: "Reduce lesiones y mejora la productividad con pausas activas adaptadas al trabajo logístico.",
    images: ["https://luistrainermax.com/lovable-uploads/logo_trainer.png"],
  },
  alternates: {
    canonical: "https://luistrainermax.com/sectores/logistica",
  },
};

export default function LogisticaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

