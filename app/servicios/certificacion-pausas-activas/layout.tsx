import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certifica a tu Equipo en Pausas Activas y Bienestar Laboral | TrainerMax",
  description: "Entrena y certifica a tu propio personal para ejecutar pausas activas y gimnasia laboral. Programa completo con materiales, rutinas y soporte.",
  alternates: {
    canonical: "https://luistrainermax.com/servicios/certificacion-pausas-activas"
  }
};

export default function CertificacionPausasActivasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

