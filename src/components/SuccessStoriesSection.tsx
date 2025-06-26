
import { Building2, Stethoscope, Scale, Wrench, GraduationCap, Sparkles, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const SuccessStoriesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.scroll-reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const stories = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Escritórios de contabilidade",
      description: "relataram eliminação de atrasos no atendimento e aumento da satisfação dos clientes.",
      color: "bg-blue-100 text-blue-600",
      neonColor: "shadow-blue-400"
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Clínicas médicas",
      description: "conseguiram reduzir o tempo de agendamento em até 60%, oferecendo atendimento mais eficaz.",
      color: "bg-green-100 text-green-600",
      neonColor: "shadow-green-400"
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: "Escritórios de advocacia",
      description: "automatizaram tarefas rotineiras, liberando equipes para focar em atividades mais complexas.",
      color: "bg-purple-100 text-purple-600",
      neonColor: "shadow-purple-400"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Oficinas Mecânicas",
      description: "automatizaram tarefas rotineiras, liberando equipes para focar em atividades mais complexas.",
      color: "bg-orange-100 text-orange-600",
      neonColor: "shadow-orange-400"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Escolas",
      description: "automatizaram tarefas rotineiras, liberando equipes para focar em atividades mais complexas.",
      color: "bg-red-100 text-red-600",
      neonColor: "shadow-red-400"
    }
  ];

  const benefits = [
    "Atendimento contínuo, sem sobrecarregar sua equipe",
    "Processos mais ágeis, liberando tempo valioso", 
    "Integrações prontas, para manter sua operação fluida",
    "Interface fácil de usar, ideal mesmo para quem não tem conhecimento técnico",
    "Suporte inteligente, chame a hora que precisar"
  ];

  return (
    <section ref={sectionRef} className="relative py-20 bg-white overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Star className="absolute top-20 right-24 w-8 h-8 text-brand-secondary/15 floating-icon" />
        <Sparkles className="absolute top-1/2 left-20 w-6 h-6 text-brand-primary/20 floating-delayed" />
        <Building2 className="absolute bottom-32 right-1/4 w-10 h-10 text-brand-secondary/10 floating-slow" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-primary mb-6">
            Casos de <span className="neon-text text-brand-secondary">Sucesso</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stories.map((story, index) => (
            <div
              key={index}
              className={`scroll-reveal bg-gray-50 rounded-xl p-6 hover-lift card-3d transition-all duration-300 hover:${story.neonColor} hover:shadow-lg`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 ${story.color} rounded-xl flex items-center justify-center mb-4 neon-glow transition-all duration-300`}>
                {story.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-primary mb-3">{story.title}</h3>
              <p className="text-gray-600 leading-relaxed">{story.description}</p>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-brand-secondary/20 to-transparent rounded-bl-full"></div>
            </div>
          ))}
        </div>

        <div 
          className="scroll-reveal neon-border parallax-bg parallax-stars rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden"
          style={{ transform: `translateY(${scrollY * 0.02}px)` }}
        >
          {/* Floating elements inside the section */}
          <Sparkles className="absolute top-8 right-8 w-6 h-6 text-white/20 floating-icon" />
          <Star className="absolute bottom-8 left-8 w-8 h-8 text-brand-secondary/30 floating-delayed" />

          <div className="text-center mb-12 relative z-10">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6 glitch neon-text" title="Por que adotar o ContrateChat?">
              Por que adotar o ContrateChat?
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 relative z-10">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-start space-x-3 p-4 rounded-lg hover:bg-white/10 transition-all duration-300 hover-lift"
              >
                <div className="w-6 h-6 neon-glow bg-brand-secondary/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
                <span className="text-white/90 leading-relaxed">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="text-center relative z-10">
            <h4 className="text-2xl font-bold mb-4 neon-text">Conquiste mais Clientes</h4>
            <p className="text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transforme a forma como sua empresa se conecta com o público. Faça parte dessa comunidade de negócios que estão atendendo melhor, vendendo mais e encantando seus clientes com tecnologia de ponta.
            </p>
            <p className="text-xl font-semibold mb-8 glitch" title="Chegou a hora de levar sua comunicação a um novo nível. Vamos juntos?">
              Chegou a hora de levar sua comunicação a um novo nível. Vamos juntos?
            </p>
          </div>

          {/* Morphing background shape */}
          <div className="absolute top-0 right-0 w-96 h-96 morphing-blob opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 morphing-blob opacity-15" style={{animationDelay: '-4s'}}></div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
