
import { QrCode, Users2, Settings, TrendingUp, Wand2, Sparkles, Zap } from "lucide-react";
import { useEffect, useRef } from "react";

const ProcessSection = () => {
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

  const steps = [
    {
      icon: <QrCode className="w-6 h-6" />,
      title: "Conecte o seu WhatsApp ao ContrateChat escaneando o QR Code na plataforma.",
      color: "bg-blue-100 text-blue-600",
      neonColor: "shadow-blue-400"
    },
    {
      icon: <Users2 className="w-6 h-6" />,
      title: "Convide o seu time inteiro para atender e vender utilizando o inteligente Bate Papo ao vivo do ContrateChat",
      color: "bg-green-100 text-green-600",
      neonColor: "shadow-green-400"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Selecione quais robôs você vai utilizar no seu atendimento (temos uma biblioteca de robôs prontos)",
      color: "bg-purple-100 text-purple-600",
      neonColor: "shadow-purple-400"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Defina quais palavras chaves, quando digitadas pelos seus clientes, irão acionar os robôs selecionados.",
      color: "bg-orange-100 text-orange-600",
      neonColor: "shadow-orange-400"
    },
    {
      icon: <Wand2 className="w-6 h-6" />,
      title: "Sente, relaxe e veja na prática os robôs atenderem e venderem no automático para o seu negócio.",
      color: "bg-pink-100 text-pink-600",
      neonColor: "shadow-pink-400"
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-20 parallax-bg overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Sparkles className="absolute top-20 right-20 w-8 h-8 text-white/20 floating-icon" />
        <Zap className="absolute top-1/2 left-16 w-6 h-6 text-brand-secondary/30 floating-delayed" />
        <Settings className="absolute bottom-20 right-1/3 w-10 h-10 text-white/15 floating-slow" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Como <span className="neon-text text-brand-secondary">Funciona</span>
            </h2>
            <p className="text-xl text-white/90">
              5 passos simples para revolucionar seu atendimento
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`scroll-reveal neon-border bg-white/10 backdrop-blur-sm rounded-xl p-6 hover-lift card-3d transition-all duration-300 hover:${step.neonColor} hover:bg-white/20`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  {/* Step number */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 neon-glow bg-brand-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  
                  <div className={`w-12 h-12 ${step.color} rounded-lg flex items-center justify-center mx-auto mb-4 neon-glow transition-all duration-300`}>
                    {step.icon}
                  </div>
                  <p className="text-white/90 leading-relaxed text-center">{step.title}</p>
                </div>

                {/* Decorative elements */}
                <div className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-brand-secondary/10 to-brand-primary/10"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Connection lines between steps (visible on larger screens) */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            <svg className="w-full h-full" style={{ filter: 'drop-shadow(0 0 5px rgba(66, 156, 174, 0.3))' }}>
              <defs>
                <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(66, 156, 174, 0.5)" />
                  <stop offset="100%" stopColor="rgba(24, 45, 84, 0.3)" />
                </linearGradient>
              </defs>
              {/* You can add connecting lines here */}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
