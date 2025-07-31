import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Monitor, Building } from "lucide-react";

const Coverage = () => {
  const locations = [
    "San Isidro", "Miraflores", "Surco", "Magdalena", "Callao",
    "San Borja", "La Molina", "Ate", "Cercado de Lima"
  ];

  const sectors = [
    { icon: "🏥", name: "Clínicas y hospitales" },
    { icon: "🏫", name: "Educación" },
    { icon: "📞", name: "Call Centers" },
    { icon: "🏦", name: "Banca y finanzas" },
    { icon: "🏭", name: "Logística y fábricas" },
    { icon: "💻", name: "Tecnología" },
    { icon: "🏢", name: "Oficinas corporativas" },
    { icon: "🛡️", name: "Seguridad" },
    { icon: "🤝", name: "ONG y entidades religiosas" }
  ];

  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">¿Dónde trabajamos?</h2>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card className="bg-white/10 border-white/20">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <MapPin className="w-6 h-6" />
                <CardTitle className="text-primary-foreground">Cobertura Presencial</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4 opacity-90">Lima Metropolitana</p>
              <div className="grid grid-cols-3 gap-2">
                {locations.map((location, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {location}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Monitor className="w-6 h-6" />
                <CardTitle className="text-primary-foreground">Cobertura Virtual</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4 opacity-90">
                Equipos híbridos y oficinas en provincias vía Zoom, Meet o Teams
              </p>
              <div className="space-y-2">
                <Badge variant="secondary" className="text-xs">Todo el Perú</Badge>
                <Badge variant="secondary" className="text-xs">Internacional</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Building className="w-6 h-6" />
                <CardTitle className="text-primary-foreground">Ámbitos de Trabajo</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                <Badge variant="secondary" className="text-xs">Oficinas</Badge>
                <Badge variant="secondary" className="text-xs">Clínicas</Badge>
                <Badge variant="secondary" className="text-xs">Plantas</Badge>
                <Badge variant="secondary" className="text-xs">Escuelas</Badge>
                <Badge variant="secondary" className="text-xs">Centros de Adultos Mayores</Badge>
                <Badge variant="secondary" className="text-xs">Call Centers</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Trabajamos con Todos los Sectores</h3>
          <p className="text-center mb-8 opacity-90">
            Desde industrias hasta clínicas, centros educativos o call centers, diseñamos programas específicos según los riesgos laborales de cada rubro.
          </p>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {sectors.map((sector, index) => (
              <Card key={index} className="bg-white/10 border-white/20 text-center">
                <CardContent className="p-4">
                  <div className="text-2xl mb-2">{sector.icon}</div>
                  <p className="text-sm text-primary-foreground">{sector.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coverage;