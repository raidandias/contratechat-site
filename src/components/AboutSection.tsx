import React from "react";
import { Bot, MessageSquare, MessagesSquare, Zap } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
            ContrateChat – Automatização inteligente para atendimento e marketing
          </h2>
          <div className="w-24 h-1 bg-brand-secondary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-brand-primary">
              <h3 className="text-2xl font-bold text-brand-primary mb-4">O que é o ContrateChat?</h3>
              <p className="text-gray-700 leading-relaxed">
                O ContrateChat é uma solução de chatbot omnichannel sem necessidade de programação. 
                Em poucos minutos, você cria seu robô via interface de arrastar e soltar para automatizar 
                vendas, processos, atendimento e engajamento nas redes sociais.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-brand-secondary">
              <h3 className="text-2xl font-bold text-brand-secondary mb-4">
                Deixe a automação cuidar do atendimento, enquanto você cuida do seu negócio!
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Chega de perder tempo com atividades repetitivas. Com nossos bots, você automatiza o 
                atendimento no WhatsApp, Instagram, Facebook e Telegram de forma simples e eficiente. 
                Assim, você ganha tempo para focar no que realmente importa: fazer sua empresa crescer.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <MessagesSquare className="w-8 h-8 text-brand-primary" />
              </div>
              <h4 className="font-bold text-brand-primary mb-2">Atendimento Multicanal</h4>
              <p className="text-gray-600 text-sm">Integração com WhatsApp, Instagram, Facebook e Telegram</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-brand-secondary" />
              </div>
              <h4 className="font-bold text-brand-secondary mb-2">Automação Inteligente</h4>
              <p className="text-gray-600 text-sm">Fluxos personalizados sem necessidade de código</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mb-4">
                <Bot className="w-8 h-8 text-purple-500" />
              </div>
              <h4 className="font-bold text-purple-500 mb-2">Interface Intuitiva</h4>
              <p className="text-gray-600 text-sm">Crie sua solução com drag-and-drop em minutos</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mb-4">
                <MessageSquare className="w-8 h-8 text-orange-500" />
              </div>
              <h4 className="font-bold text-orange-500 mb-2">Mais Vendas</h4>
              <p className="text-gray-600 text-sm">Aumente conversão e reduza custos operacionais</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
