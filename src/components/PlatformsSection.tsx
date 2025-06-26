
import { MessageSquare, Send, Facebook, Instagram, Zap, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const PlatformsSection = () => {
  const sectionRef = useRef<HTMLSection>(null);
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

  const platforms = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "WhatsApp",
      description: "Otimize seu atendimento no WhatsApp com automação inteligente! Nosso sistema permite responder automaticamente às dúvidas mais comuns, registrar pedidos, enviar notificações e encaminhar o cliente para um atendente humano sempre que necessário.",
      color: "bg-green-500",
      neonColor: "shadow-green-400"
    },
    {
      icon: <Send className="w-8 h-8" />,
      title: "Telegram",
      description: "Atendimento ágil e eficiente no Telegram para sua empresa. Se sua empresa utiliza o Telegram, nosso bot é a solução ideal para oferecer um suporte ágil e versátil. Ele automatiza respostas, se conecta com seus sistemas internos e gerencia um grande volume de mensagens com facilidade.",
      color: "bg-blue-500",
      neonColor: "shadow-blue-400"
    },
    {
      icon: <Facebook className="w-8 h-8" />,
      title: "Facebook",
      description: "Automatize seu atendimento no Facebook Messenger com inteligência e personalização. Com nosso bot, sua empresa pode oferecer respostas instantâneas no Messenger, enviando mensagens personalizadas conforme o perfil de cada cliente.",
      color: "bg-blue-600",
      neonColor: "shadow-blue-600"
    },
    {
      icon: <Instagram className="w-8 h-8" />,
      title: "Instagram",
      description: "Aumente o engajamento no Instagram com automação inteligente! Automatize respostas no Direct e nos comentários das suas publicações, oferecendo informações rápidas sobre seus produtos ou serviços.",
      color: "bg-pink-500",
      neonColor: "shadow-pink-400"
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-20 bg-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Sparkles className="absolute top-16 left-16 w-8 h-8 text-brand-secondary/20 floating-icon" />
        <Zap className="absolute top-1/2 right-20 w-6 h-6 text-brand-primary/15 floating-delayed" />
        <MessageSquare className="absolute bottom-32 left-1/4 w-10 h-10 text-brand-secondary/10 floating-slow" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-primary mb-6">
            Deixa eu te mostrar como <span className="neon-text text-brand-secondary">funciona</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-8">
            {platforms.map((platform, index) => (
              <div 
                key={index} 
                className={`scroll-reveal flex items-start space-x-4 p-6 rounded-xl hover:bg-gray-50 transition-all duration-300 hover-lift card-3d hover:${platform.neonColor}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={`${platform.color} w-12 h-12 rounded-lg flex items-center justify-center text-white flex-shrink-0 neon-glow transition-all duration-300`}>
                  {platform.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-primary mb-2">{platform.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{platform.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div 
            className="relative scroll-reveal"
            style={{ transform: `translateY(${scrollY * 0.05}px)` }}
          >
            <div className="neon-border bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 relative overflow-hidden hover-lift">
              <div className="relative z-10">
                <img 
                  src="/lovable-uploads/e831fa8f-07d0-41bb-b91e-b26ba81e4ba7.png" 
                  alt="Interface do ContrateChat"
                  className="w-full h-auto rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                />
              </div>
              
              {/* Enhanced decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 neon-glow bg-brand-secondary/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 neon-glow bg-brand-primary/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 left-1/2 w-20 h-20 neon-glow bg-white/30 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformsSection;
