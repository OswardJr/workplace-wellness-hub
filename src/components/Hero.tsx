import { Button } from '@/components/ui/button';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';
// import "/assets/hero-wellness.jpg" from '@/assets/hero-wellness.jpg';

// Sample benefits data with unique IDs for better key management
const benefits = [
  { id: 'benefit-1', text: 'Mejora el clima laboral y reduce el estrés' },
  { id: 'benefit-2', text: 'Alcanza tus metas físicas con entrenadores certificados' },
  { id: 'benefit-3', text: 'Fortalece la salud mental, emocional y corporal' },
  { id: 'benefit-4', text: 'Capacítate con el Diplomado líder en gimnasia laboral de Latinoamérica' },
];

const HeroSection = () => {
  return (
    <>
      <section id="inicio" className="bg-gradient-subtle min-h-screen flex items-center py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8 animate-fade-up">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Pausas Activas para{' '}
                  <span className="text-red-600">Empresas</span> y{' '}
                  <span className="text-red-600">Personas Saludables</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Bienestar real, resultados visibles.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="btn-brand group"
                  aria-label="Solicitar una demostración gratuita"
                >
                  Solicitar Demo Gratuita
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="btn-outline-brand group"
                  aria-label="Ver entrenamiento personalizado"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Entrenamiento Personalizado
                </Button>
              </div>

              <div className="pt-8">
                <p className="text-sm text-gray-500 mb-4">
                  Contáctanos directamente:
                </p>
                <a
                  href="https://wa.me/51985172717?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20los%20servicios%20de%20TrainerMax"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold transition-colors"
                  aria-label="Contactar por WhatsApp"
                >
                  WhatsApp: +51 985 172 717
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="relative animate-fade-in">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={"/assets/hero-wellness.jpg"}
                  alt="Programas de bienestar laboral y gimnasia activa"
                  className="w-full h-auto object-cover sm:h-[500px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-800">En línea ahora</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-red-600 text-white rounded-xl p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm">Empresas atendidas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#232937] section-dark py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Intro Text */}
            <div className="text-center mb-12 animate-fade-up">
              <p className="text-lg leading-relaxed text-gray-300">
                En Trainermax ayudamos a empresas y personas a transformar su salud física,
                emocional y organizacional mediante programas estructurados de pausas activas,
                gimnasia laboral, entrenamiento personalizado y diplomados de alto nivel.
                Somos una marca peruana con proyección internacional y aval de{' '}
                <span className="text-red-400 font-semibold">NPTI USA</span>.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit) => (
                <div
                  key={benefit.id}
                  className="flex items-start space-x-4 p-6 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 animate-fade-up"
                  style={{ animationDelay: `${benefits.indexOf(benefit) * 0.1}s` }}
                >
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-red-400" />
                  </div>
                  <p className="text-gray-200 font-medium leading-relaxed">
                    {benefit.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;