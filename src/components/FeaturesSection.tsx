
import { Bot, Users, Calendar, BookOpen, CreditCard, BarChart3 } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Agendamento",
      subtitle: "Simplifique o agendamento para seus clientes com nosso chatbot de atendimento automático.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Ebook",
      subtitle: "Recursos completos para maximizar seus resultados com automação inteligente.",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Orçamento",
      subtitle: "Geração automática de orçamentos personalizados para cada cliente.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Indicação",
      subtitle: "Sistema de indicações que aumenta sua base de clientes automaticamente.",
      color: "bg-blue-100 text-blue-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-primary mb-6">
            O Que É Um <span className="text-brand-secondary">Robô?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            O Que Exatamente Um Robô Pode Fazer Pelo Seu Negócio?
          </p>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>ContrateChat É Um Construtor De Robôs Para Empresários Que Não São Cientistas do Marketing</strong>
            </p>
            <p className="text-gray-600 mt-4">
              Sim, o ContrateChat foi criado para que empresários como você, que não é um programador e que não sabe como criar códigos, 
              consiga facilmente criar conversas inteligentes para o WhatsApp para ajudar seu negócio crescer de forma automática.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-primary mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
