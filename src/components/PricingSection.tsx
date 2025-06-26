
import { Button } from "@/components/ui/button";
import { Check, Star, Sparkles, Zap } from "lucide-react";
import { useEffect, useRef } from "react";

const PricingSection = () => {
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

  const plans = [
    {
      name: "Contrate Basic",
      users: "2 Usuários", 
      connections: "WhatsApp",
      price: "consulte",
      popular: false,
      icon: <Star className="w-6 h-6" />
    },
    {
      name: "Contrate Plus",
      users: "3 Usuários",
      connections: "WhatsApp", 
      price: "consulte",
      popular: true,
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      name: "Contrate Premium",
      users: "5 Usuários",
      connections: "WhatsApp",
      price: "consulte", 
      popular: false,
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const features = [
    "Construtor visual drag-and-drop",
    "Gerenciamento de filas e departamentos",
    "Etiquetas e mensagens rápidas",
    "Chat interno e transferência",
    "Pesquisas de satisfação e relatórios",
    "Integrações prontas (+ módulos)",
    "Chatbot Personalizada"
  ];

  return (
    <section ref={sectionRef} id="pricing" className="relative py-20 bg-gray-50 overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Star className="absolute top-16 left-20 w-8 h-8 text-brand-secondary/15 floating-icon" />
        <Sparkles className="absolute top-1/3 right-16 w-6 h-6 text-brand-primary/20 floating-delayed" />
        <Zap className="absolute bottom-24 left-1/3 w-10 h-10 text-brand-secondary/10 floating-slow" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-primary mb-6">
            Planos e Preços <span className="neon-text text-brand-secondary">Mensais</span>
          </h2>
          <p className="text-xl text-gray-600">
            Cada plano inclui o construtor visual e todas as funcionalidades mencionadas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`scroll-reveal neon-border bg-white rounded-xl p-8 hover-lift card-3d transition-all duration-300 ${
                plan.popular 
                  ? 'ring-2 ring-brand-secondary relative shadow-brand-secondary/20' 
                  : 'hover:shadow-lg'
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="neon-glow bg-brand-secondary text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2">
                    <Sparkles className="w-4 h-4" />
                    <span>Mais Popular</span>
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center ${
                  plan.popular 
                    ? 'neon-glow bg-brand-secondary text-white' 
                    : 'bg-brand-primary/10 text-brand-primary'
                }`}>
                  {plan.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-brand-primary mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.users}</p>
                <p className="text-gray-600 mb-4">{plan.connections}</p>
                <div className="text-3xl font-bold text-brand-primary">
                  R$ <span className="neon-text text-brand-secondary">{plan.price}</span>
                </div>
              </div>

              <Button 
                className={`w-full mb-6 hover-lift transition-all duration-300 ${
                  plan.popular 
                    ? 'neon-border bg-brand-secondary hover:bg-brand-secondary/90' 
                    : 'bg-brand-primary hover:bg-brand-primary/90'
                }`}
              >
                Consultar Preço
              </Button>

              {/* Decorative glow effect */}
              <div className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${
                  plan.popular 
                    ? 'from-brand-secondary/5 to-brand-primary/5' 
                    : 'from-brand-primary/5 to-brand-secondary/5'
                }`}></div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto scroll-reveal">
          <h3 className="text-2xl font-bold text-brand-primary text-center mb-8">
            Recursos do painel administrativo
          </h3>
          <div className="neon-border bg-white rounded-xl p-8 shadow-lg hover-lift">
            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="neon-glow bg-green-100 rounded-full p-1">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
