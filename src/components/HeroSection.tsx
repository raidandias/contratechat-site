
import { Button } from "@/components/ui/button";
import { MessageCircle, Bot, Zap, Clock } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-brand-light via-white to-brand-secondary/5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-brand-primary leading-tight">
                Chega de <span className="text-brand-secondary">perder tempo</span> com o que pode ser automatizado
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                ContrateChat – Automatização inteligente para atendimento e marketing. 
                Crie chatbots sem programação e transforme seu atendimento em minutos.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-brand-secondary hover:bg-brand-secondary/90 text-white px-8 py-4 text-lg"
              >
                Começar Gratuitamente
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white px-8 py-4 text-lg"
              >
                Ver Demonstração
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <MessageCircle className="w-6 h-6 text-brand-secondary" />
                </div>
                <span className="text-sm font-medium text-gray-600">WhatsApp</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Bot className="w-6 h-6 text-brand-secondary" />
                </div>
                <span className="text-sm font-medium text-gray-600">Telegram</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Zap className="w-6 h-6 text-brand-secondary" />
                </div>
                <span className="text-sm font-medium text-gray-600">Instagram</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Clock className="w-6 h-6 text-brand-secondary" />
                </div>
                <span className="text-sm font-medium text-gray-600">Facebook</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 animate-float">
              <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-sm mx-auto">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-brand-secondary rounded-full flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-primary">ContrateChat</p>
                    <p className="text-xs text-gray-500">Online agora</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-gray-100 rounded-lg p-3">
                    <p className="text-sm">Olá! Como posso ajudar você hoje?</p>
                  </div>
                  <div className="bg-brand-secondary text-white rounded-lg p-3 ml-8">
                    <p className="text-sm">Gostaria de saber sobre automação</p>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3">
                    <p className="text-sm">Perfeito! Vou te mostrar como funciona...</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-brand-secondary/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-brand-primary/5 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
