import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FAQ = () => {
  const faqs = [
    {
      question: "¿Qué es una pausa activa y cuánto debe durar?",
      answer: "Una pausa activa es una breve interrupción con ejercicios físicos, de respiración o estiramientos. Generalmente dura de 5 a 10 minutos y puede realizarse 1 o 2 veces al día."
    },
    {
      question: "¿Cuánto cuesta implementar un programa de pausas activas?",
      answer: "Depende del tamaño de la empresa, frecuencia y modalidad. Ofrecemos paquetes mensuales desde S/ 2,500 y también entrenamientos individuales a partir de S/ 120."
    },
    {
      question: "¿Qué incluye el diplomado internacional?",
      answer: "Clases virtuales en vivo, módulos grabados, material descargable, evaluaciones y certificado con código QR validado por Trainermax y NPTI."
    },
    {
      question: "¿Qué sucede si mi equipo es remoto?",
      answer: "Tenemos programas virtuales por Zoom con instructores en vivo, seguimiento por WhatsApp y rutinas grabadas para ver en cualquier horario."
    },
    {
      question: "¿Puedo entrenar si no tengo experiencia?",
      answer: "¡Por supuesto! Adaptamos el nivel de cada rutina a tus capacidades. Desde cero hasta niveles intermedios o avanzados."
    },
    {
      question: "¿Qué beneficios tiene para las empresas?",
      answer: "Mejora la productividad, reduce el ausentismo, disminuye riesgos ergonómicos y fortalece el clima organizacional."
    },
    {
      question: "¿Ofrecen sesiones virtuales?",
      answer: "Sí. Todos nuestros servicios están disponibles vía Zoom, Meet o Teams, incluyendo entrenamiento personalizado y pausas activas grupales."
    },
    {
      question: "¿Entrenan personas con lesiones o adultos mayores?",
      answer: "Sí. Adaptamos cada rutina al estado físico y edad. Contamos con programas de Juventud Extendida y movilidad reducida."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">Preguntas Frecuentes</h2>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;