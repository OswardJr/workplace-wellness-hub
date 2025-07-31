import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Impact = () => {
  const stats = [
    { number: "+10", label: "años de experiencia" },
    { number: "+12,000", label: "trabajadores impactados" },
    { number: "+200", label: "empresas atendidas" },
    { number: "72%", label: "reportó menor tensión muscular" },
    { number: "56%", label: "mejoró su enfoque mental" },
    { number: "30%", label: "menos ausentismo en áreas operativas" },
    { number: "100%", label: "satisfacción de RRHH en programas anuales" }
  ];

  const testimonials = [
    {
      quote: "Trainermax nos ayudó a reducir el ausentismo en planta y reforzó la cultura organizacional desde el primer mes.",
      author: "Supervisor de Producción",
      company: "Industria alimentaria"
    },
    {
      quote: "El diplomado fue muy completo. Ahora tenemos líderes internos certificados que lideran pausas activas a nivel nacional.",
      author: "Jefa de RRHH",
      company: "Empresa multinacional"
    },
    {
      quote: "Nuestro equipo se siente más unido y con mejor energía desde que comenzamos con las pausas activas de Trainermax.",
      author: "Coordinadora de RRHH",
      company: "Empresa logística"
    }
  ];

  return (
    <section className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">Impacto Medible</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-center mb-8">Testimonios destacados</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="text-4xl text-primary mb-2">"</div>
                    <p className="text-muted-foreground italic">{testimonial.quote}</p>
                  </div>
                  <div className="border-t pt-4">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;