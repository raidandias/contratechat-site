
import { Bot, Users, Calendar, BookOpen, CreditCard, BarChart3, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";

const FeaturesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

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

  const features = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Agendamento",
      subtitle: "Simplifique o agendamento para seus clientes com nosso chatbot de atendimento automático.",
      color: "bg-purple-100 text-purple-600",
      neonColor: "shadow-purple-400"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Ebook",
      subtitle: "Recursos completos para maximizar seus resultados com automação inteligente.",
      color: "bg-orange-100 text-orange-600",
      neonColor: "shadow-orange-400"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Orçamento",
      subtitle: "Geração automática de orçamentos personalizados para cada cliente.",
      color: "bg-green-100 text-green-600",
      neonColor: "shadow-green-400"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Indicação",
      subtitle: "Sistema de indicações que aumenta sua base de clientes automaticamente.",
      color: "bg-blue-100 text-blue-600",
      neonColor: "shadow-blue-400"
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-20 bg-gray-50 overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Sparkles className="absolute top-10 right-10 w-6 h-6 text-brand-secondary/20 floating-icon" />
        <Bot className="absolute top-1/3 left-10 w-8 h-8 text-brand-primary/15 floating-delayed" />
        <Calendar className="absolute bottom-20 right-1/4 w-7 h-7 text-brand-secondary/25 floating-slow" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-primary mb-6">
            O Que É Um <span className="neon-text text-brand-secondary">Robô?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            O Que Exatamente Um Robô Pode Fazer Pelo Seu Negócio?
          </p>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong className="glitch neon-text" title="ContrateChat É Um Construtor De Robôs Para Empresários Que Não São Cientistas do Marketing">
                ContrateChat É Um Construtor De Robôs Para Empresários Que Não São Cientistas do Marketing
              </strong>
            </p>
            <p className="text-gray-600">
              Sim, o ContrateChat foi criado para que empresários como você, que não é um programador e que não sabe como criar códigos, 
              consiga facilmente criar conversas inteligentes para o WhatsApp para ajudar seu negócio crescer de forma automática.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`scroll-reveal bg-white rounded-xl p-6 hover-lift card-3d transition-all duration-300 hover:${feature.neonColor} hover:shadow-lg`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-4 neon-glow transition-all duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-primary mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.subtitle}</p>
              
              {/* Decorative glow effect */}
              <div className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-brand-secondary/5 to-brand-primary/5`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
