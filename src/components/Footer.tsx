
import { Mail, Phone, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-brand-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CC</span>
              </div>
              <span className="text-xl font-bold">ContrateChat</span>
            </div>
            <p className="text-white/80 leading-relaxed">
              Automatização inteligente para atendimento e marketing. Transforme seu atendimento em minutos.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Menu</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-white/80 hover:text-white transition-colors">Quem Somos</a></li>
              <li><a href="#features" className="text-white/80 hover:text-white transition-colors">Recursos</a></li>
              <li><a href="#pricing" className="text-white/80 hover:text-white transition-colors">Consulte</a></li>
              <li><a href="#help" className="text-white/80 hover:text-white transition-colors">Ajuda</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Plataformas</h4>
            <ul className="space-y-2">
              <li className="text-white/80">WhatsApp</li>
              <li className="text-white/80">Telegram</li>
              <li className="text-white/80">Facebook</li>
              <li className="text-white/80">Instagram</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand-secondary" />
                <a href="mailto:suporte@contratechat.com.br" className="text-white/80 hover:text-white transition-colors">
                  suporte@contratechat.com.br
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-brand-secondary" />
                <a href="mailto:sac@contratechat.com.br" className="text-white/80 hover:text-white transition-colors">
                  sac@contratechat.com.br
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60">
            © 2024 ContrateChat. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
