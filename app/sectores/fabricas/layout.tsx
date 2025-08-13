import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pausas Activas y Gimnasia Laboral para Fábricas | TrainerMax Perú",
  description: "Reduce lesiones y mejora el rendimiento de tus operarios con pausas activas y gimnasia laboral personalizada en plantas industriales. Servicio en todo el Perú.",
  keywords: "pausas activas fábricas, gimnasia laboral industria, bienestar laboral plantas industriales, prevención lesiones operarios, salud ocupacional fábricas, trainermax industria",
  alternates: {
    canonical: "https://luistrainermax.com/sectores/fabricas"
  }
};

export default function FabricasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

