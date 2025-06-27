import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-brand-primary mb-4">
              Fale <span className="text-brand-secondary">Conosco</span>
            </h2>
            <div className="w-24 h-1 bg-brand-secondary mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              Estamos prontos para ajudar você a automatizar seu atendimento
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-100">
              <div className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary"
                    placeholder="Seu nome"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700">
                    WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary"
                    placeholder="(99) 99999-9999"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary"
                    placeholder="Como podemos ajudar?"
                  ></textarea>
                </div>

                <Button
                  onClick={() => {
                    const name = (document.getElementById('name') as HTMLInputElement)?.value || '';
                    const whatsapp = (document.getElementById('whatsapp') as HTMLInputElement)?.value || '';
                    const message = (document.getElementById('message') as HTMLTextAreaElement)?.value || '';

                    const formattedMessage = `Olá! Meu nome é ${name}, WhatsApp: ${whatsapp}.\n\n${message}`;

                    // Formata a URL para o WhatsApp com a mensagem
                    const whatsappUrl = `https://wa.me/5571988493028?text=${encodeURIComponent(formattedMessage)}`;

                    // Abre em uma nova aba
                    window.open(whatsappUrl, '_blank');
                  }}
                  className="w-full bg-brand-primary hover:bg-brand-primary/90 py-6"
                >
                  Enviar Mensagem via WhatsApp
                </Button>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Contate-nos diretamente</h3>
                <p className="mb-6">
                  Prefere falar com nossa equipe diretamente? Entre em contato por um dos canais abaixo:
                </p>

                <div className="space-y-4">
                  <a
                    href="https://wa.me/5571988493028"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 bg-white/20 hover:bg-white/30 transition-colors p-4 rounded-lg"
                  >
                    <MessageCircle className="w-6 h-6" />
                    <div>
                      <p className="font-medium">WhatsApp</p>
                      <p className="text-sm text-white/80">+55 71 98849-3028</p>
                    </div>
                  </a>

                  <a
                    href="mailto:sac@contratechat.com.br"
                    className="flex items-center space-x-3 bg-white/20 hover:bg-white/30 transition-colors p-4 rounded-lg"
                  >
                    <Mail className="w-6 h-6" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-white/80">sac@contratechat.com.br</p>
                    </div>
                  </a>

                  <div className="flex items-center space-x-3 bg-white/20 p-4 rounded-lg">
                    <Phone className="w-6 h-6" />
                    <div>
                      <p className="font-medium">Telefone</p>
                      <p className="text-sm text-white/80">+55 71 98849-3028</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <h4 className="font-bold text-brand-primary flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5" /> Horário de Atendimento
                </h4>
                <p className="text-gray-600">
                  Segunda a Sexta: 09:00 - 18:00<br />
                  Sábado: 09:00 - 12:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
