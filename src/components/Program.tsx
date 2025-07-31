import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Program = () => {
  const classes = [
    "Ejercicios para personal administrativo",
    "Ejercicios para quienes permanecen mucho tiempo de pie: Seguridad, policías, militares, personal de Salud",
    "Clases para adultos mayores",
    "Sesiones para poblaciones laborales jóvenes",
    "Clases para poblaciones mixtas",
    "Rutinas para personas con limitaciones físicas temporales o permanentes",
    "Risoterapia",
    "Mindfulness",
    "Yoga básico",
    "Stretching",
    "Rutinas especiales básicas para el fortalecimiento muscular integral",
    "Ejercicios Mentales y Visuales",
    "Dinámicas especiales para fomentar la unidad y el espíritu de trabajar en equipo",
    "Dinámicas de Habilidades Blandas",
    "Ejercicios Respiratorios y mucho más"
  ];

  const modules = [
    {
      id: "modulo1",
      title: "GIMNASIA LABORAL Y PAUSAS ACTIVAS",
      subtitle: "Módulo I",
      content: [
        {
          title: "EJERCICIOS RESPIRATORIOS",
          description: "Cada participante aprenderá a desarrollar ejercicios para mejorar la capacidad respiratoria de los trabajadores. Aprenderán clases (conceptos básicos) de Tai Chi y Chi Kung. Recibirán enseñanza especial sobre ejercicios de espiración: soplante y silbante. Ejercicios diafragmáticos. Nuevos accesorios para el botiquín en tiempos de post Covid. Recomendaciones importantes para la práctica deportiva en temporadas de pandemia. Protocolos de seguridad."
        },
        {
          title: "EJERCICIOS DE CARDIO",
          description: "Desarrollar ejercicios específicos en el músculo Cardíaco (Miocardio) y aprenderán a tomar la frecuencia cardíaca (FC) del trabajador y además estas rutinas ayudan a los trabajadores a incrementar sus capacidades pulmonares y enseñarles la importancia de mantenerlos siempre sanos, mediante la actividad física dentro y fuera del centro de trabajo."
        },
        {
          title: "EJERCICIOS DE FORTALECIMIENTO MÚSCULAR",
          description: "Cada estudiante obtendrá la capacidad de reconocer los grupos musculares más importantes del cuerpo humano (anatomía básica) asimismo, los participantes tendrán la oportunidad de aprender rutinas especiales para diferentes tipos de trabajadores."
        }
      ]
    },
    {
      id: "modulo2",
      title: "SEGURIDAD Y SALUD EN EL TRABAJO (SST)",
      subtitle: "Módulo II",
      content: [
        {
          title: "MARCO LEGAL (LEY DE SALUD MENTAL 30947)",
          description: "Ley de seguridad y salud en el trabajo y su reglamento. El SGSST desde el enfoque Inspectivo. Comité o Supervisor de SST. Iperc y Mapa de Riesgos. Investigación y Notificación de incidentes y accidentes de trabajo. Estándares de Higiene Ocupacional. Ley de Salud Mental. Conceptos básicos de Ergonomía."
        }
      ]
    },
    {
      id: "modulo3",
      title: "RIESGOS PSICOSOCIALES",
      subtitle: "Módulo III",
      content: [
        {
          title: "RIESGOS PSICOSOCIALES Y SALUD LABORAL",
          description: "Introducción a los factores psicosociales en el trabajo y de riesgo psicosocial. Estrés y trastornos asociados. Intervención Psicológico Laboral para la prevención del estrés. Acoso moral y sexual, violencia en el trabajo. Desempleo y jubilación. Higiene mental y trabajo."
        }
      ]
    },
    {
      id: "modulo4",
      title: "COACHING DEPORTIVO EMPRESARIAL",
      subtitle: "Módulo IV",
      content: [
        {
          title: "SEGMENTOS BÁSICOS DE COACHING DEPORTIVO",
          description: "Significado de Coaching Deportivo aplicado a las empresas. Aplicando el Coaching a la Gimnasia Laboral y Pausas Activas. Establecimiento de confianza. La importancia del Coach Deportivo en la enseñanza de la Gimnasia Laboral y Pausas Activas."
        }
      ]
    },
    {
      id: "modulo5",
      title: "NUTRICIÓN DEPORTIVA EMPRESARIAL",
      subtitle: "Módulo V",
      content: [
        {
          title: "APLICADA A LAS EMPRESAS SALUDABLES",
          description: "Alimentación y Nutrición aplicada a las poblaciones laborales. Rueda de los alimentos y nutrientes esenciales. Recomendaciones generales de nutrición saludable. La Importancia de la Suplementación y de los micronutrientes y macronutrientes."
        }
      ]
    },
    {
      id: "modulo6",
      title: "MARKETING PROFESIONAL",
      subtitle: "Módulo VI",
      content: [
        {
          title: "APLICADO A LA SALUD OCUPACIONAL",
          description: "Construye tu marca profesional. Uso del branding aplicado a la publicidad. Consigue clientes por internet. Adaptación de la marca a las redes sociales. Análisis de plataformas online para posicionamiento de marca."
        }
      ]
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">PROGRAMA</h2>
        
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">
              CLASES DE GIMNASIA LABORAL Y PAUSAS ACTIVAS
            </CardTitle>
            <p className="text-muted-foreground">QUE SE DICTARÁ EN EL DIPLOMADO INTERNACIONAL</p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {classes.map((classItem, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm">{classItem}.</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="modulo1" className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
            {modules.map((module) => (
              <TabsTrigger key={module.id} value={module.id} className="text-xs">
                {module.subtitle}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {modules.map((module) => (
            <TabsContent key={module.id} value={module.id}>
              <Card>
                <CardHeader>
                  <Badge className="w-fit mb-2">{module.subtitle}</Badge>
                  <CardTitle className="text-xl text-primary">{module.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {module.content.map((item, index) => (
                    <div key={index}>
                      <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                  <div className="mt-6 p-4 bg-secondary/20 rounded-lg">
                    <p className="text-sm font-medium text-primary">
                      * SESIONES DE CLASES PRÁCTICAS DE PAUSAS ACTIVAS Y GIMNASIA LABORAL
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Program;