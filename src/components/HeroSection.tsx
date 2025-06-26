
import { Button } from "@/components/ui/button";
import { MessageCircle, Bot, Zap, Clock, Star, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen pt-20 pb-16 overflow-hidden parallax-bg parallax-stars">
      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <MessageCircle className="absolute top-20 left-10 w-8 h-8 text-brand-secondary/30 floating-icon" />
        <Bot className="absolute top-40 right-20 w-12 h-12 text-white/20 floating-delayed" />
        <Zap className="absolute top-60 left-1/4 w-6 h-6 text-brand-secondary/40 floating-slow" />
        <Star className="absolute bottom-40 right-10 w-10 h-10 text-white/30 floating-icon" />
        <Sparkles className="absolute bottom-20 left-20 w-8 h-8 text-brand-secondary/50 floating-delayed" />
        <Clock className="absolute top-1/3 right-1/3 w-7 h-7 text-white/25 floating-slow" />
      </div>

      {/* Morphing Background Shapes */}
      <div className="absolute top-20 left-0 w-96 h-96 morphing-blob opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 morphing-blob opacity-15" style={{animationDelay: '-4s'}}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          <div 
            className="space-y-8 animate-fade-in"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          >
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Chega de <span className="neon-text text-brand-secondary glitch" title="perder tempo">perder tempo</span> com o que pode ser automatizado
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                ContrateChat – Automatização inteligente para atendimento e marketing. 
                Crie chatbots sem programação e transforme seu atendimento em minutos.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="neon-border bg-brand-secondary hover:bg-brand-secondary/90 text-white px-8 py-4 text-lg hover-lift"
              >
                Começar Gratuitamente
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="neon-border border-white text-white hover:bg-white hover:text-brand-primary px-8 py-4 text-lg hover-lift"
              >
                Ver Demonstração
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {[
                { icon: MessageCircle, name: "WhatsApp" },
                { icon: Bot, name: "Telegram" },
                { icon: Zap, name: "Instagram" },
                { icon: Clock, name: "Facebook" }
              ].map((platform, index) => (
                <div key={index} className="text-center hover-lift">
                  <div className="w-12 h-12 neon-glow bg-brand-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-2 card-3d">
                    <platform.icon className="w-6 h-6 text-brand-secondary" />
                  </div>
                  <span className="text-sm font-medium text-white/80">{platform.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div 
            className="relative"
            style={{ transform: `translateY(${scrollY * -0.15}px)` }}
          >
            <div className="relative z-10 animate-float">
              <div className="neon-border bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 max-w-sm mx-auto hover-lift">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 neon-glow bg-brand-secondary rounded-full flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-primary">ContrateChat</p>
                    <p className="text-xs text-gray-500 flex items-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                      Online agora
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-gray-100 rounded-lg p-3 hover-lift">
                    <p className="text-sm">Olá! Como posso ajudar você hoje?</p>
                  </div>
                  <div className="neon-border bg-brand-secondary text-white rounded-lg p-3 ml-8 hover-lift">
                    <p className="text-sm">Gostaria de saber sobre automação</p>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3 hover-lift">
                    <p className="text-sm">Perfeito! Vou te mostrar como funciona...</p>
                    <div className="flex space-x-1 mt-2">
                      <div className="w-2 h-2 bg-brand-secondary rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-brand-secondary rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-brand-secondary rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 neon-glow bg-brand-secondary/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 neon-glow bg-brand-primary/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 -right-12 w-16 h-16 neon-glow bg-white/10 rounded-full blur-lg animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
