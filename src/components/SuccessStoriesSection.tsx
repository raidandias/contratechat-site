
import { Building2, Stethoscope, Scale, Wrench, GraduationCap } from "lucide-react";

const SuccessStoriesSection = () => {
  const stories = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Escritórios de contabilidade",
      description: "relataram eliminação de atrasos no atendimento e aumento da satisfação dos clientes.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Clínicas médicas",
      description: "conseguiram reduzir o tempo de agendamento em até 60%, oferecendo atendimento mais eficaz.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: "Escritórios de advocacia",
      description: "automatizaram tarefas rotineiras, liberando equipes para focar em atividades mais complexas.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Oficinas Mecânicas",
      description: "automatizaram tarefas rotineiras, liberando equipes para focar em atividades mais complexas.",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Escolas",
      description: "automatizaram tarefas rotineiras, liberando equipes para focar em atividades mais complexas.",
      color: "bg-red-100 text-red-600"
    }
  ];

  const benefits = [
    "Atendimento contínuo, sem sobrecarregar sua equipe",
    "Processos mais ágeis, liberando tempo valioso", 
    "Integrações prontas, para manter sua operação fluida",
    "Interface fácil de usar, ideal mesmo para quem não tem conhecimento técnico",
    "Suporte inteligente, chame a hora que precisar"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-primary mb-6">
            Casos de <span className="text-brand-secondary">Sucesso</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className={`w-16 h-16 ${story.color} rounded-xl flex items-center justify-center mb-4`}>
                {story.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-primary mb-3">{story.title}</h3>
              <p className="text-gray-600 leading-relaxed">{story.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-brand-primary to-brand-secondary rounded-2xl p-8 lg:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              Por que adotar o ContrateChat?
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-white/90 leading-relaxed">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h4 className="text-2xl font-bold mb-4">Conquiste mais Clientes</h4>
            <p className="text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transforme a forma como sua empresa se conecta com o público. Faça parte dessa comunidade de negócios que estão atendendo melhor, vendendo mais e encantando seus clientes com tecnologia de ponta.
            </p>
            <p className="text-xl font-semibold mb-8">
              Chegou a hora de levar sua comunicação a um novo nível. Vamos juntos?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
