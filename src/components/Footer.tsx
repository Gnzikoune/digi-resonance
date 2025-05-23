
import { Sparkles, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-100 to-gray-200 py-12 border-t-2 border-gold-300">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Logo and description */}
            <div className="md:col-span-2 animate-slide-left">
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/504bfb32-8145-485f-b8a5-b97d8e1a2ba9.png" 
                    alt="Digi.Résonance" 
                    className="h-10 w-10 rounded-full border-2 border-gold-400 shadow-lg icon-hover"
                  />
                  <Sparkles className="absolute -top-1 -right-1 text-gold-500 animate-rotate-360" size={16} />
                </div>
                <div>
                  <h3 className="text-lg font-bold bg-gradient-to-r from-gold-600 to-orange-600 bg-clip-text text-transparent">Digi.Résonance</h3>
                  <p className="text-xs text-gray-600 font-semibold">Agence Web Gabonaise</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4 max-w-md font-medium leading-relaxed">
                Nous donnons une voix digitale aux entrepreneurs gabonais avec des sites web modernes et une présence active sur les réseaux sociaux.
              </p>
            </div>

            {/* Services */}
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h4 className="text-gray-800 font-bold mb-4 text-lg">Services</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="hover:text-gold-600 transition-colors cursor-pointer font-medium">Sites vitrine</li>
                <li className="hover:text-gold-600 transition-colors cursor-pointer font-medium">Community Management</li>
                <li className="hover:text-gold-600 transition-colors cursor-pointer font-medium">Pack Lancement</li>
                <li className="hover:text-gold-600 transition-colors cursor-pointer font-medium">Solutions sur mesure</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <h4 className="text-gray-800 font-bold mb-4 text-lg">Contact</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center space-x-2">
                  <div className="bg-blue-500 w-6 h-6 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">@</span>
                  </div>
                  <a href="mailto:digi.resonance@gmail.com" className="hover:text-gold-600 transition-colors font-medium">
                    digi.resonance@gmail.com
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="bg-green-500 w-6 h-6 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">📱</span>
                  </div>
                  <a href="https://wa.me/24107000000" className="hover:text-gold-600 transition-colors font-medium">
                    +241 07 00 00 00
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="text-purple-500 icon-hover" size={20} />
                  <span className="font-medium">Libreville, Gabon</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom section */}
          <div className="border-t-2 border-gold-300 pt-8 text-center">
            <p className="text-gray-600 text-sm font-medium">
              © 2024 Digi.Résonance. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
