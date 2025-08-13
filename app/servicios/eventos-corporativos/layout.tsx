import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Activaciones y Eventos Corporativos con Bienestar Laboral | TrainerMax Perú",
  description: "Eleva tus eventos con pausas activas, masajes, dinámicas físicas y talleres de bienestar. Programas personalizados para empresas en todo el Perú.",
  keywords: "eventos corporativos bienestar, activaciones empresas, pausas activas eventos, masajes eventos empresas, team building peru",
  openGraph: {
    type: "website",
    url: "https://luistrainermax.com/servicios/eventos-corporativos",
    title: "Activaciones y Eventos Corporativos con Bienestar | TrainerMax",
    description: "Conecta, motiva y activa a tu equipo en momentos clave con nuestros servicios de bienestar para eventos.",
    images: [
      {
        url: "https://luistrainermax.com/lovable-uploads/logo_trainer.png",
        alt: "TrainerMax Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Eventos Corporativos con Bienestar | TrainerMax",
    description: "Activaciones físicas, pausas activas grupales y talleres de bienestar para tus eventos empresariales.",
    images: ["https://luistrainermax.com/lovable-uploads/logo_trainer.png"]
  },
  alternates: {
    canonical: "https://luistrainermax.com/servicios/eventos-corporativos"
  }
};

export default function EventosCorporativosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

