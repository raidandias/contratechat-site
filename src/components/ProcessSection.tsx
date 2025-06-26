
import { QrCode, Users2, Settings, TrendingUp, Wand2 } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: <QrCode className="w-6 h-6" />,
      title: "Conecte o seu WhatsApp ao ContrateChat escaneando o QR Code na plataforma.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <Users2 className="w-6 h-6" />,
      title: "Convide o seu time inteiro para atender e vender utilizando o inteligente Bate Papo ao vivo do ContrateChat",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Selecione quais robôs você vai utilizar no seu atendimento (temos uma biblioteca de robôs prontos)",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Defina quais palavras chaves, quando digitadas pelos seus clientes, irão acionar os robôs selecionados.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <Wand2 className="w-6 h-6" />,
      title: "Sente, relaxe e veja na prática os robôs atenderem e venderem no automático para o seu negócio.",
      color: "bg-blue-100 text-blue-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className={`w-12 h-12 ${step.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  {step.icon}
                </div>
                <p className="text-gray-700 leading-relaxed">{step.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
