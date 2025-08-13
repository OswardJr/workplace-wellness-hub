import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pausas Activas y Bienestar en Oficinas Corporativas | TrainerMax Perú",
  description: "Implementamos pausas activas, masajes antiestrés y talleres de salud emocional para oficinas corporativas. Mejora el clima laboral y reduce lesiones por sedentarismo.",
  keywords: "pausas activas oficinas, bienestar en oficinas corporativas, masajes laborales, programa bienestar oficina, trainermax oficinas, salud emocional en oficina",
  openGraph: {
    title: "Pausas Activas y Bienestar en Oficinas Corporativas | TrainerMax Perú",
    description: "Implementamos pausas activas, masajes antiestrés y talleres de salud emocional para oficinas corporativas. Mejora el clima laboral y reduce lesiones por sedentarismo.",
    url: "https://luistrainermax.com/sectores/oficinas-corporativas",
    siteName: "TrainerMax",
    images: [
      {
        url: "https://luistrainermax.com/lovable-uploads/logo_trainer.png",
        width: 1200,
        height: 630,
        alt: "TrainerMax - Pausas Activas en Oficinas Corporativas",
      },
    ],
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pausas Activas y Bienestar en Oficinas Corporativas | TrainerMax Perú",
    description: "Implementamos pausas activas, masajes antiestrés y talleres de salud emocional para oficinas corporativas.",
    images: ["https://luistrainermax.com/lovable-uploads/logo_trainer.png"],
  },
  alternates: {
    canonical: "https://luistrainermax.com/sectores/oficinas-corporativas",
  },
};

export default function OficinasCorporativasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

