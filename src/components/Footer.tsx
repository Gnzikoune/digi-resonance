
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-gold-500/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Logo and description */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/lovable-uploads/504bfb32-8145-485f-b8a5-b97d8e1a2ba9.png" 
                  alt="Digi.Résonance" 
                  className="h-8 w-8"
                />
                <div>
                  <h3 className="text-lg font-bold text-gold-400">Digi.Résonance</h3>
                  <p className="text-xs text-gray-400">Agence Web Gabonaise</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Nous donnons une voix digitale aux entrepreneurs gabonais avec des sites web modernes et une présence active sur les réseaux sociaux.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Sites vitrine</li>
                <li>Community Management</li>
                <li>Pack Lancement</li>
                <li>Solutions sur mesure</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>digi.resonance@gmail.com</li>
                <li>+241 07 00 00 00</li>
                <li>Libreville, Gabon</li>
              </ul>
            </div>
          </div>

          {/* Bottom section */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Digi.Résonance. Tous droits réservés.
            </p>
            
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Fait avec</span>
              <Heart className="text-red-500" size={16} />
              <span>au Gabon</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
