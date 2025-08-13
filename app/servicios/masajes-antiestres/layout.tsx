import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Masajes Antiestrés para Empresas en Perú | TrainerMax Bienestar Corporativo",
  description: "Mejora el bienestar de tu equipo con masajes antiestrés en oficina. Terapias breves, efectivas y personalizadas. Solicita una jornada piloto gratuita.",
  keywords: "masajes antiestres empresas, masajes oficina peru, masajes corporativos, bienestar laboral, reducir estres trabajo",
  openGraph: {
    type: "website",
    url: "https://luistrainermax.com/servicios/masajes-antiestres",
    title: "Masajes Antiestrés para Empresas en Perú | TrainerMax",
    description: "Relajación inmediata y bienestar para tu equipo con masajes antiestrés profesionales en oficina.",
    images: [
      {
        url: "https://luistrainermax.com/lovable-uploads/logo_trainer.png",
        alt: "TrainerMax Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Masajes Antiestrés Corporativos | TrainerMax",
    description: "Terapias de relajación profesionales para mejorar el bienestar de tu equipo de trabajo.",
    images: ["https://luistrainermax.com/lovable-uploads/logo_trainer.png"]
  },
  alternates: {
    canonical: "https://luistrainermax.com/servicios/masajes-antiestres"
  }
};

export default function MasajesAntiestresLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

