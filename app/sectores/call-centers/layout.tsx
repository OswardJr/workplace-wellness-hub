import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pausas Activas y Bienestar Laboral en Call Centers | TrainerMax Perú",
  description: "Mejora la salud física y emocional de tu equipo en call center con pausas activas, gimnasia laboral y talleres antiestrés. Soluciones presenciales y virtuales.",
  keywords: "pausas activas call center, bienestar laboral call centers, gimnasia laboral atención al cliente, masajes en call center, programa antiestrés call center, trainermax call center",
  alternates: {
    canonical: "https://luistrainermax.com/sectores/call-centers"
  }
};

export default function CallCentersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

