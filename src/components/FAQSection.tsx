import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = () => {
  const faqItems = [
    {
      question: "Não sou bom com tecnologia. Como vou saber o que fazer?",
      answer: "Nossa plataforma foi desenvolvida para ser muito fácil de usar, mesmo para quem não tem experiência com tecnologia. Oferecemos um passo a passo simples para configuração, tutoriais em vídeo e suporte personalizado para ajudá-lo em cada etapa do processo."
    },
    {
      question: "Como consigo conectar meu WhatsApp ao ContrateChat?",
      answer: "O processo é simples: após criar sua conta, vá até a seção 'Conexões', escaneie o QR code com seu celular (assim como faz no WhatsApp Web) e pronto! Seu número já estará conectado e pronto para uso em poucos segundos."
    },
    {
      question: "Quantos números de WhatsApp consigo conectar na plataforma?",
      answer: "Isso depende do seu plano. O plano inicial permite conectar 1 número, enquanto planos mais avançados permitem conectar múltiplos números. Consulte nossa página de preços para mais detalhes sobre os limites de cada plano."
    },
    {
      question: "Meu computador precisa ficar ligado ou com o navegador aberto para o robô funcionar?",
      answer: "Não! Essa é uma grande vantagem do ContrateChat. Nossa plataforma é 100% em nuvem, então seu robô continuará funcionando mesmo com seu computador desligado ou sem o navegador aberto. Você pode gerenciar tudo pelo celular, tablet ou computador quando quiser."
    },
    {
      question: "O que é um robô?",
      answer: "Um robô (ou chatbot) é um assistente virtual que simula conversas humanas. No ContrateChat, os robôs são fluxos de conversa automatizados que podem responder perguntas, coletar informações, agendar compromissos e muito mais, seguindo a lógica que você definir."
    },
    {
      question: "Quantos robôs ou fluxos de conversas posso criar?",
      answer: "Você pode criar quantos fluxos de conversa desejar, sem limite, independente do seu plano. A diferença está nos recursos disponíveis em cada robô e no número de conversas que podem ser atendidas por mês."
    },
    {
      question: "Posso atender quantas pessoas com meus robôs?",
      answer: "O número de atendimentos mensais varia conforme seu plano. Por exemplo, no plano Starter você pode atender até 1000 pessoas por mês. Consulte nossa página de preços para detalhes sobre cada plano."
    },
    {
      question: "O que acontece após atender 1000 pessoas no mês com o plano Starter?",
      answer: "Se você atingir o limite de atendimentos do seu plano no mês, poderá optar por fazer um upgrade para um plano com mais capacidade ou aguardar até o próximo ciclo de faturamento para que o contador seja zerado."
    },
    {
      question: "O que são palavras chaves?",
      answer: "Palavras-chave são termos que, quando enviados por seus contatos, acionam respostas automáticas específicas. Por exemplo, se configurar a palavra 'preços', seu robô pode responder automaticamente com uma tabela de preços, mesmo fora do fluxo principal de conversa."
    },
    {
      question: "Quantas pessoas podem atender no mesmo número pelo bate papo do ContrateChat?",
      answer: "Nos planos Profissional e Empresarial, múltiplos atendentes podem usar o mesmo número simultaneamente. Cada atendente tem seu próprio login e pode atender diferentes conversas sem interferir no trabalho dos demais."
    },
    {
      question: "Como terei acesso a biblioteca de robôs?",
      answer: "A biblioteca de robôs prontos fica disponível na sua conta assim que você se cadastra. Lá você encontrará diversos modelos que pode usar como ponto de partida e personalizar conforme suas necessidades."
    },
    {
      question: "Se eu não gostar, como eu cancelo?",
      answer: "Cancelar é simples e sem burocracia. Dentro da sua conta, vá até a seção 'Minha Assinatura' e clique em 'Cancelar'. Você pode fazer isso a qualquer momento, sem multa ou taxas adicionais."
    },
    {
      question: "Gostei do ContrateChat. Como faço para contratar?",
      answer: "Para contratar, basta clicar no botão 'Começar Agora' no topo da página, escolher o plano que melhor atende suas necessidades e seguir o processo de cadastro. Em poucos minutos, você já terá acesso à plataforma."
    }
  ];

  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prevOpenItems) => {
      if (prevOpenItems.includes(index)) {
        return prevOpenItems.filter(item => item !== index);
      } else {
        return [...prevOpenItems, index];
      }
    });
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-primary mb-6">
            Perguntas <span className="text-brand-secondary">Frequentes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre o ContrateChat e como ele pode ajudar seu negócio.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqItems.map((item, index) => (
            <div key={index} className="mb-4 bg-white rounded-lg shadow-sm overflow-hidden">
              <button
                className="flex justify-between items-center w-full py-4 px-6 text-left focus:outline-none"
                onClick={() => toggleItem(index)}
              >
                <h3 className="text-xl font-semibold text-brand-primary">{item.question}</h3>
                <span className="text-gray-500">
                  {openItems.includes(index) ? <ChevronUp /> : <ChevronDown />}
                </span>
              </button>
              {openItems.includes(index) && (
                <div className="py-4 px-6 text-gray-600 border-t">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ainda tem dúvidas?</h3>
          <p className="text-gray-600 mb-8">Nossa equipe está pronta para ajudar você com qualquer pergunta adicional.</p>
          <a 
            href="#contact" 
            className="inline-flex items-center bg-brand-primary hover:bg-brand-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Entre em contato
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
