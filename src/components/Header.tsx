
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'À propos', href: '#apropos' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gold-500/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/504bfb32-8145-485f-b8a5-b97d8e1a2ba9.png" 
              alt="Digi.Résonance" 
              className="h-10 w-10"
            />
            <div>
              <h1 className="text-xl font-bold text-gold-400">Digi.Résonance</h1>
              <p className="text-xs text-gray-400">Agence Web Gabonaise</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-gold-400 transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
            <Button className="bg-gold-gradient text-black font-semibold hover:opacity-90 transition-opacity">
              Demande de devis
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gold-500/20 pt-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-gold-400 transition-colors duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button className="bg-gold-gradient text-black font-semibold hover:opacity-90 transition-opacity w-fit">
                Demande de devis
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
