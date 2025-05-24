
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'À propos', href: '#apropos' },
    { name: 'Services', href: '#services' },
    { name: 'Réalisations', href: '#realisations' },
    { name: 'Solutions sur mesure', href: '#solutions-sur-mesure' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gold-300/30 shadow-lg">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 md:space-x-3 animate-slide-left">
            <div className="relative group">
              <img 
                src="/lovable-uploads/504bfb32-8145-485f-b8a5-b97d8e1a2ba9.png" 
                alt="Digi.Résonance" 
                className="h-10 w-10 md:h-12 md:w-12 rounded-full border-2 border-gold-400 shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-110 animate-pulse-glow"
              />
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold bg-gradient-to-r from-gold-600 to-orange-600 bg-clip-text text-transparent">
                Digi.Résonance
              </h1>
              <p className="text-xs text-gray-600 font-medium hidden sm:block">Agence Web Gabonaise</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 animate-slide-right">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-800 hover:text-gold-600 transition-all duration-300 font-semibold relative group animate-slide-down text-sm xl:text-base"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-gradient group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <a href="#contact">
              <Button className="bg-gold-gradient text-black font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 animate-bounce-slow border-2 border-gold-500 text-sm xl:text-base px-4 xl:px-6">
                Demande de devis
              </Button>
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-gold-600 hover:text-gold-800 transition-colors p-2 rounded-full hover:bg-gold-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} className="animate-rotate-360" /> : <Menu size={24} className="icon-hover" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gold-300/30 pt-4 bg-white/90 rounded-lg shadow-lg animate-slide-down">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-800 hover:text-gold-600 transition-all duration-300 font-semibold px-4 py-3 rounded-lg hover:bg-gold-50 text-center border border-transparent hover:border-gold-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="px-4">
                <Button className="bg-gold-gradient text-black font-bold hover:shadow-xl transition-all duration-300 w-full py-3">
                  Demande de devis
                </Button>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
