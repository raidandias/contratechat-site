
import { Button } from "@/components/ui/button";
import { MessageCircle, Bot, Zap, Clock, Sparkles, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-20 pb-16 overflow-hidden bg-gradient-to-br from-brand-primary via-brand-primary/90 to-brand-secondary">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-secondary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-primary/30 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-white/10 rounded-full blur-2xl animate-ping"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-white/40 rounded-full animate-float`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          <div className="space-y-8 animate-fade-in">
            {/* Main heading with enhanced styling */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span className="text-white/90 text-sm font-medium">Nova Era da Automação</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Chega de{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-brand-secondary to-cyan-400 bg-clip-text text-transparent">
                    perder tempo
                  </span>
                  <div className="absolute -inset-1 bg-gradient-to-r from-brand-secondary to-cyan-400 rounded-lg opacity-30 blur animate-pulse"></div>
                </span>
                {" "}com o que pode ser automatizado
              </h1>

              <p className="text-xl lg:text-2xl text-white/80 leading-relaxed max-w-2xl">
                ContrateChat – Automatização inteligente para atendimento e marketing.
                Crie chatbots sem programação e transforme seu atendimento em minutos.
              </p>
            </div>

            {/* Enhanced CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Button
                size="lg"
                className="group relative bg-gradient-to-r from-brand-secondary to-cyan-500 hover:from-brand-secondary/90 hover:to-cyan-600 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-brand-secondary/50 transform hover:scale-105 transition-all duration-300 border-0"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Ver Demonstração
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Button>
            </div>

            {/* Enhanced platform icons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12">
              {[
                { icon: MessageCircle, label: "WhatsApp", color: "from-green-400 to-green-600" },
                { icon: Bot, label: "Telegram", color: "from-blue-400 to-blue-600" },
                { icon: Zap, label: "Instagram", color: "from-pink-400 to-purple-600" },
                { icon: Clock, label: "Facebook", color: "from-blue-500 to-indigo-600" }
              ].map((platform, index) => (
                <div key={platform.label} className="group text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${platform.color} rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:shadow-xl transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300`}>
                    <platform.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-white/80 font-medium group-hover:text-white transition-colors">{platform.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced chat preview */}
          <div className="relative">
            <div className="relative z-10 animate-float">
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 max-w-md mx-auto border border-white/20">
                {/* Chat header */}
                <div className="flex items-center space-x-4 mb-6 pb-4 border-b border-gray-200">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg overflow-hidden border-2 border-brand-secondary">
                      <img src="/logo-fundo-branco.png" alt="ContrateChat Logo" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
                  </div>
                  <div>
                    <p className="font-bold text-brand-primary text-lg">ContrateChat</p>
                    <p className="text-sm text-green-600 font-medium">Online agora</p>
                  </div>
                </div>

                {/* Chat messages with enhanced styling */}
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-gray-100 to-gray-50 rounded-2xl p-4 shadow-sm">
                    <p className="text-gray-800 font-medium">Olá! Como posso ajudar você hoje? 👋</p>
                  </div>
                  <div className="bg-gradient-to-r from-brand-secondary to-cyan-500 text-white rounded-2xl p-4 ml-8 shadow-lg transform hover:scale-105 transition-transform">
                    <p className="font-medium">Gostaria de saber sobre automação</p>
                  </div>
                  <div className="bg-gradient-to-r from-gray-100 to-gray-50 rounded-2xl p-4 shadow-sm">
                    <p className="text-gray-800 font-medium">Perfeito! Vou te mostrar como funciona... ✨</p>
                  </div>

                  {/* Typing indicator */}
                  <div className="bg-gray-100 rounded-2xl p-4 flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                    <span className="text-gray-500 text-sm">ContrateChat está digitando...</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced decorative elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-r from-brand-secondary/30 to-cyan-400/30 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-gradient-to-r from-brand-primary/20 to-purple-500/20 rounded-full blur-3xl animate-bounce"></div>
            <div className="absolute top-1/4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl animate-ping"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
