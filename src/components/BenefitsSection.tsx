
import { CheckCircle, Lightbulb, MessageCircle, TrendingUp } from "lucide-react";

const BenefitsSection = () => {
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
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Mais Força Pro Seu Time",
      description: "Imagina só receber bolas livres na área para chutar a gol? É basicamente isso que os robôs fazem para a sua equipe. Eles recebem o atendimento e notificam sua equipe com todos os detalhes necessários para eles marcarem o gol.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Gere vendas e capture leads automaticamente, 24/7",
      description: "Você agora pode atender como os gigantes. Empresas como Facebook, NBA, Disney e Spotify já utilizam chatbots para aumentar suas vendas em até 800%... Você pode fazer o mesmo.",
      color: "bg-orange-100 text-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* First Benefits Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-primary mb-8">
            ContrateChat Te Dá As Ferramentas E Estratégias Que Você 
            Precisa Em Um Único Lugar!
          </h2>
          
          <div className="max-w-2xl mx-auto mb-12">
            <p className="text-lg text-gray-700 mb-6">
              <strong>SIM! O ContrateChat Te Dá As Ferramentas e Estratégias Que Você Precisa Para Captar Clientes Potenciais e Aumentar Suas Vendas. De Forma Automática!</strong>
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 text-left">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
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
              <span className="text-brand-secondary">Excelente Experiência</span>
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
              <div key={index} className="text-center">
                <div className={`w-16 h-16 ${benefit.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-primary mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Money Making Section */}
        <div className="bg-gradient-to-r from-brand-secondary/10 to-brand-primary/10 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <img 
                src="/lovable-uploads/ae374d7e-65d2-4ee8-81b2-1205131390a9.png" 
                alt="WhatsApp Interface"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-brand-primary">
                O Jeito Mais Fácil de <span className="text-brand-secondary">Levantar Caixa</span>
              </h3>
              <p className="text-lg text-gray-700 font-semibold">
                O manual no automático te dá muito mais dinheiro
              </p>
              <p className="text-gray-600 leading-relaxed">
                Você não precisa mais ficar enviando mensagens de um em um cliente quando você tiver uma nova oferta ou precisar levantar caixa rápido. Basta você pegar toda a lista de contatos no seu negócio, separar essa lista com etiquetas e mandar fluxos de conversa extremamente personalizados para cada uma das pessoas. Dependendo da estratégia e abordagem, você pode vender em poucos dias o que não vende em semanas ou no mês.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
