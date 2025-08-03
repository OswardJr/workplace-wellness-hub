import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Hero = () => {
  return (
    <>
      {/* Primera sección: encabezado principal */}
      <section className="bg-[#fff] text-[#313131]">
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Pausas Activas para Empresas y Personas Saludables
              </h1>
              
              <p className="text-lg lg:text-xl opacity-90">
                Bienestar real, resultados visibles.
              </p><br/>

              <a
                href="https://wa.me/51985172717?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20los%20servicios%20de%20TrainerMax"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="bg-primary text-white text-lg px-8">
                  Solicitar Demo Gratuita
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 border-white bg-[#313131] text-white"
                >
                  Entrenamiento Personalizado
                </Button>
              </a>
              
            </div>

            <div className="relative">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8">
                <img 
                  src="/lovable-uploads/4fda3fbe-5542-4490-b216-422c1514afc0.png" 
                  alt="Workplace wellness and gimnasia laboral" 
                  className="w-full h-auto rounded-lg"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Segunda sección: propuesta de valor y acciones */}
      <section className="bg-[#232937] text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Columna izquierda: texto + botones */}
            <div className="space-y-6">
              <p className="text-base lg:text-lg">
                En Trainermax ayudamos a empresas y personas a transformar su salud física, emocional y organizacional mediante programas estructurados de pausas activas, gimnasia laboral, entrenamiento personalizado y diplomados de alto nivel. Somos una marca peruana con proyección internacional y aval de NPTI USA.
              </p>
            </div>

            {/* Columna derecha: lista vertical */}
            <div className="space-y-4">
              {[
                "Mejora el clima laboral y reduce el estrés",
                "Alcanza tus metas físicas con entrenadores certificados",
                "Fortalece la salud mental, emocional y corporal",
                "Capacítate con el Diplomado líder en gimnasia laboral de Latinoamérica",
              ].map((text, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-[#7d0505] rounded-full"></div>
                  </div>
                  <span className="text-sm">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
