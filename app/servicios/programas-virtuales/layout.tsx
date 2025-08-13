import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programas Virtuales de Bienestar Laboral para Empresas | TrainerMax Perú",
  description: "Pausas activas, gimnasia laboral y bienestar emocional para equipos remotos y empresas con sedes múltiples. 100% online y personalizable.",
  alternates: {
    canonical: "https://luistrainermax.com/servicios/programas-virtuales"
  }
};

export default function ProgramasVirtualesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

