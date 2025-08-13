import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pausas Activas para Empresas en Perú | Servicio Profesional | TrainerMax",
  description: "Intervenciones breves que transforman el bienestar de tu equipo. Pausas activas profesionales presenciales, virtuales o híbridas para empresas en todo el Perú.",
  keywords: "pausas activas empresas peru, pausas activas presencial virtual, bienestar laboral, ejercicios oficina, trainermax",
  alternates: {
    canonical: "https://luistrainermax.com/servicios/pausas-activas"
  }
};

export default function PausasActivasServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

