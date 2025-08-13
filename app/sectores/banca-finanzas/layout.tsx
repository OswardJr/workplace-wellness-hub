import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pausas Activas para Bancos y Financieras | Bienestar Corporativo TrainerMax",
  description: "Reduce el estrés laboral y mejora el rendimiento de tu equipo financiero con pausas activas, gimnasia laboral y programas de bienestar. Servicio en todo el Perú.",
  keywords: "pausas activas bancos, bienestar sector financiero, gimnasia laboral financieras, programas bienestar bancario, trainermax bancos, salud laboral financiero",
  openGraph: {
    title: "Pausas Activas para Bancos y Financieras | Bienestar Corporativo TrainerMax",
    description: "Reduce el estrés laboral y mejora el rendimiento de tu equipo financiero con pausas activas, gimnasia laboral y programas de bienestar.",
    url: "https://luistrainermax.com/sectores/banca-finanzas",
    siteName: "TrainerMax",
    images: [
      {
        url: "https://luistrainermax.com/lovable-uploads/logo_trainer.png",
        width: 1200,
        height: 630,
        alt: "TrainerMax - Pausas Activas para Bancos y Financieras",
      },
    ],
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pausas Activas para Bancos y Financieras | Bienestar Corporativo TrainerMax",
    description: "Reduce el estrés laboral y mejora el rendimiento de tu equipo financiero con pausas activas y programas de bienestar.",
    images: ["https://luistrainermax.com/lovable-uploads/logo_trainer.png"],
  },
  alternates: {
    canonical: "https://luistrainermax.com/sectores/banca-finanzas",
  },
};

export default function BancaFinanzasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

