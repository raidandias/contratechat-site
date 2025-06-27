
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Contrate Basic",
      users: "2 Usuários", 
      connections: "WhatsApp",
      price: "consulte",
      popular: false
    },
    {
      name: "Contrate Plus",
      users: "3 Usuários",
      connections: "WhatsApp", 
      price: "consulte",
      popular: true
    },
    {
      name: "Contrate Premium",
      users: "5 Usuários",
      connections: "WhatsApp",
      price: "consulte", 
      popular: false
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
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-primary mb-6">
            Planos e Preços <span className="text-brand-secondary">Mensais</span>
          </h2>
          <p className="text-xl text-gray-600">
            Cada plano inclui o construtor visual e todas as funcionalidades mencionadas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl p-8 shadow-lg ${plan.popular ? 'ring-2 ring-brand-secondary relative' : ''} hover:shadow-xl transition-shadow`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-brand-secondary text-white px-4 py-2 rounded-full text-sm font-medium">
                    Mais Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-brand-primary mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.users}</p>
                <p className="text-gray-600 mb-4">{plan.connections}</p>
                <div className="text-3xl font-bold text-brand-primary">
                  R$ <span className="text-brand-secondary">{plan.price}</span>
                </div>
              </div>

              <Button 
                onClick={() => {
                  // Criar mensagem personalizada com o plano selecionado
                  const mensagem = `Olá! Estou interessado(a) no plano ${plan.name} e gostaria de consultar o preço e mais informações.`;
                  
                  // Formatar a URL para o WhatsApp com a mensagem
                  const whatsappUrl = `https://wa.me/5571988493028?text=${encodeURIComponent(mensagem)}`;
                  
                  // Abrir em uma nova aba
                  window.open(whatsappUrl, '_blank');
                }}
                className={`w-full mb-6 ${plan.popular ? 'bg-brand-secondary hover:bg-brand-secondary/90' : 'bg-brand-primary hover:bg-brand-primary/90'}`}
              >
                Consultar Preço
              </Button>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-brand-primary text-center mb-8">
            Recursos do painel administrativo
          </h3>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
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
