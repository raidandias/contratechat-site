
import { CheckCircle, Lightbulb, MessageCircle, TrendingUp, Sparkles, Zap, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const BenefitsSection = () => {
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

  const benefits = [
    "1º Construtor de Robôs 'Arrasta e Solta' do Brasil",
    "Rapidamente Crie Conversas Inteligentes",
    "Coloque Múltiplos Atendentes No Mesmo Número",
    "Notifique Departamentos Específicos de Sua Empresa",
    "Crie Palavras Chaves Que Iniciam Conversas Inteligentes",
    "Tenha Acesso Completo A Todas Informações Das Conversas"
  ];

  const clientBenefits = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Seu Cliente Quer Uma Resposta Pra Ontem",
      description: "Hoje em dia até os segundos fazem uma enorme diferença. Se você não der a resposta que seu cliente busca no tempo dele, advinha o que ele irá fazer? Buscar a resposta em outro lugar.",
      color: "bg-yellow-100 text-yellow-600",
      neonColor: "shadow-yellow-400"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Mais Força Pro Seu Time",
      description: "Imagina só receber bolas livres na área para chutar a gol? É basicamente isso que os robôs fazem para a sua equipe. Eles recebem o atendimento e notificam sua equipe com todos os detalhes necessários para eles marcarem o gol.",
      color: "bg-blue-100 text-blue-600",
      neonColor: "shadow-blue-400"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Gere vendas e capture leads automaticamente, 24/7",
      description: "Você agora pode atender como os gigantes. Empresas como Facebook, NBA, Disney e Spotify já utilizam chatbots para aumentar suas vendas em até 800%... Você pode fazer o mesmo.",
      color: "bg-orange-100 text-orange-600",
      neonColor: "shadow-orange-400"
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-20 bg-white overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Sparkles className="absolute top-16 left-16 w-8 h-8 text-brand-secondary/15 floating-icon" />
        <Zap className="absolute top-1/3 right-20 w-6 h-6 text-brand-primary/20 floating-delayed" />
        <Star className="absolute bottom-32 left-1/4 w-10 h-10 text-brand-secondary/10 floating-slow" />
        <Lightbulb className="absolute top-1/2 right-1/3 w-7 h-7 text-brand-primary/15 floating-icon" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* First Benefits Section */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-primary mb-8">
            ContrateChat Te Dá As Ferramentas E Estratégias Que Você 
            Precisa Em Um <span className="neon-text text-brand-secondary">Único Lugar!</span>
          </h2>
          
          <div className="max-w-2xl mx-auto mb-12">
            <p className="text-lg text-gray-700 mb-6">
              <strong className="glitch neon-text" title="SIM! O ContrateChat Te Dá As Ferramentas e Estratégias Que Você Precisa Para Captar Clientes Potenciais e Aumentar Suas Vendas. De Forma Automática!">
                SIM! O ContrateChat Te Dá As Ferramentas e Estratégias Que Você Precisa Para Captar Clientes Potenciais e Aumentar Suas Vendas. De Forma Automática!
              </strong>
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="scroll-reveal flex items-center space-x-3 text-left p-3 rounded-lg hover:bg-gray-50 transition-all duration-300 hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="neon-glow bg-green-100 rounded-full p-1">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Customer Experience Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-brand-primary mb-4">
              <span className="neon-text text-brand-secondary">Excelente Experiência</span>
            </h3>
            <h4 className="text-2xl font-bold text-brand-primary mb-4">
              Cliente: Transformando Ocasião em Regra
            </h4>
            <p className="text-lg text-gray-600">
              Com um atendimento automatizado você pode garantir que seu cliente sempre terá o melhor atendimento possível a todo momento
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {clientBenefits.map((benefit, index) => (
              <div 
                key={index} 
                className={`scroll-reveal text-center p-6 rounded-xl hover-lift card-3d transition-all duration-300 hover:${benefit.neonColor} hover:shadow-lg hover:bg-gray-50`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={`w-16 h-16 ${benefit.color} rounded-xl flex items-center justify-center mx-auto mb-4 neon-glow transition-all duration-300`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-primary mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>

                {/* Decorative glow effect */}
                <div className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-brand-secondary/5 to-brand-primary/5"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Money Making Section */}
        <div 
          className="scroll-reveal neon-border bg-gradient-to-r from-brand-secondary/10 to-brand-primary/10 rounded-2xl p-8 lg:p-12 relative overflow-hidden"
          style={{ transform: `translateY(${scrollY * 0.02}px)` }}
        >
          {/* Floating elements inside */}
          <Star className="absolute top-6 right-6 w-6 h-6 text-brand-secondary/20 floating-icon" />
          <Sparkles className="absolute bottom-6 left-6 w-8 h-8 text-brand-primary/15 floating-delayed" />

          <div className="grid lg:grid-cols-2 gap-8 items-center relative z-10">
            <div className="relative hover-lift">
              <img 
                src="/lovable-uploads/ae374d7e-65d2-4ee8-81b2-1205131390a9.png" 
                alt="WhatsApp Interface"
                className="w-full h-auto rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              />
              
              {/* Image decorative effects */}
              <div className="absolute -top-4 -left-4 w-16 h-16 neon-glow bg-brand-secondary/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 neon-glow bg-brand-primary/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-brand-primary">
                O Jeito Mais Fácil de <span className="neon-text text-brand-secondary">Levantar Caixa</span>
              </h3>
              <p className="text-lg text-gray-700 font-semibold glitch" title="O manual no automático te dá muito mais dinheiro">
                O manual no automático te dá muito mais dinheiro
              </p>
              <p className="text-gray-600 leading-relaxed">
                Você não precisa mais ficar enviando mensagens de um em um cliente quando você tiver uma nova oferta ou precisar levantar caixa rápido. Basta você pegar toda a lista de contatos no seu negócio, separar essa lista com etiquetas e mandar fluxos de conversa extremamente personalizados para cada uma das pessoas. Dependendo da estratégia e abordagem, você pode vender em poucos dias o que não vende em semanas ou no mês.
              </p>
            </div>
          </div>

          {/* Background morphing shape */}
          <div className="absolute top-0 right-0 w-64 h-64 morphing-blob opacity-5"></div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
