import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pausas Activas y Bienestar en Empresas Tech | TrainerMax Perú",
  description: "Mejora la salud de tus equipos de desarrollo y soporte con pausas activas, respiración consciente y ergonomía digital. Programas presenciales y virtuales en todo el Perú.",
  keywords: "pausas activas empresas tecnologia, bienestar equipos desarrollo, ergonomia digital, mindfulness programadores, trainermax tech, salud laboral startups",
  openGraph: {
    title: "Pausas Activas y Bienestar en Empresas Tech | TrainerMax Perú",
    description: "Mejora la salud de tus equipos de desarrollo y soporte con pausas activas, respiración consciente y ergonomía digital.",
    url: "https://luistrainermax.com/sectores/tecnologia",
    siteName: "TrainerMax",
    images: [
      {
        url: "https://luistrainermax.com/lovable-uploads/logo_trainer.png",
        width: 1200,
        height: 630,
        alt: "TrainerMax - Pausas Activas para Empresas de Tecnología",
      },
    ],
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pausas Activas y Bienestar en Empresas Tech | TrainerMax Perú",
    description: "Mejora la salud de tus equipos de desarrollo y soporte con pausas activas y ergonomía digital.",
    images: ["https://luistrainermax.com/lovable-uploads/logo_trainer.png"],
  },
  alternates: {
    canonical: "https://luistrainermax.com/sectores/tecnologia",
  },
};

export default function TecnologiaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

