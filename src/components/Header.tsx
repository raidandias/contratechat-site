
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "QUEM SOMOS", href: "/#about" },
    { label: "CONSULTE", href: "#pricing" },
    { label: "CONTATO", href: "/contato" },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <img
              src="/logo-fundo-tranparente.png"
              alt="ContrateChat Logo"
              className="w-175 h-12"
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-gray-600 hover:text-brand-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white" onClick={() => window.location.href = 'https://web.contratechat.com.br'}>
              Login
            </Button>
            <Button className="bg-brand-secondary hover:bg-brand-secondary/90" onClick={() => window.location.href = 'https://web.contratechat.com.br?it=$bot'}>
              Começar Agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-gray-600 hover:text-brand-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" className="border-brand-primary text-brand-primary" onClick={() => window.location.href = 'https://web.contratechat.com.br'}>
                  Login
                </Button>
                <Button className="bg-brand-secondary hover:bg-brand-secondary/90" onClick={() => window.location.href = 'https://web.contratechat.com.br?it=$bot'}>
                  Começar Agora
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
