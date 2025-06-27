
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const PlatformsSection = () => {
  const platforms = [
    {
      icon: <FaWhatsapp className="w-8 h-8" />,
      title: "WhatsApp",
      description: "Otimize seu atendimento no WhatsApp com automação inteligente! Nosso sistema permite responder automaticamente às dúvidas mais comuns, registrar pedidos, enviar notificações e encaminhar o cliente para um atendente humano sempre que necessário.",
      color: "bg-green-500"
    },
    {
      icon: <FaTelegramPlane className="w-8 h-8" />,
      title: "Telegram",
      description: "Atendimento ágil e eficiente no Telegram para sua empresa. Se sua empresa utiliza o Telegram, nosso bot é a solução ideal para oferecer um suporte ágil e versátil. Ele automatiza respostas, se conecta com seus sistemas internos e gerencia um grande volume de mensagens com facilidade.",
      color: "bg-blue-500"
    },
    {
      icon: <FaFacebookMessenger className="w-8 h-8" />,
      title: "Facebook",
      description: "Automatize seu atendimento no Facebook Messenger com inteligência e personalização. Com nosso bot, sua empresa pode oferecer respostas instantâneas no Messenger, enviando mensagens personalizadas conforme o perfil de cada cliente.",
      color: "bg-blue-600"
    },
    {
      icon: <FaInstagram className="w-8 h-8" />,
      title: "Instagram",
      description: "Aumente o engajamento no Instagram com automação inteligente! Automatize respostas no Direct e nos comentários das suas publicações, oferecendo informações rápidas sobre seus produtos ou serviços.",
      color: "bg-pink-500"
    }
  ];

  return (
    <section id="resources" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-primary mb-6">
            Deixa eu te mostrar como <span className="text-brand-secondary">funciona</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-8">
            {platforms.map((platform, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 rounded-xl hover:bg-gray-50 transition-colors">
                <div className={`${platform.color} w-12 h-12 rounded-lg flex items-center justify-center text-white flex-shrink-0`}>
                  {platform.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-primary mb-2">{platform.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{platform.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 relative overflow-hidden">
              <div className="relative z-10">
                <img 
                  src="/lovable-uploads/e831fa8f-07d0-41bb-b91e-b26ba81e4ba7.png" 
                  alt="Interface do ContrateChat"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-secondary/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-primary/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformsSection;
