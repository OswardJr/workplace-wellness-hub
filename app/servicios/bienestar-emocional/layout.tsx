import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Talleres de Bienestar Emocional y Manejo del Estrés Laboral | TrainerMax Perú",
  description: "Ofrece a tus colaboradores talleres prácticos de manejo del estrés, pausas mentales, respiración consciente y salud emocional. Virtual o presencial en todo el Perú.",
  alternates: {
    canonical: "https://luistrainermax.com/servicios/bienestar-emocional"
  }
};

export default function BienestarEmocionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

