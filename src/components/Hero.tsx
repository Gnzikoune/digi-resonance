
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="accueil" className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-gold-400 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-gold-400 rounded-full"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 border border-gold-400 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo large */}
          <div className="mb-8 animate-fade-in">
            <img 
              src="/lovable-uploads/504bfb32-8145-485f-b8a5-b97d8e1a2ba9.png" 
              alt="Digi.Résonance" 
              className="h-24 w-24 mx-auto mb-6"
            />
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            Votre présence <span className="text-gold-400">digitale</span> commence ici
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-slide-in">
            Nous donnons une voix digitale aux entrepreneurs gabonais avec des sites web modernes et une présence active sur les réseaux sociaux.
          </p>

          {/* Mission statement */}
          <div className="bg-black/30 backdrop-blur-sm border border-gold-500/30 rounded-lg p-6 mb-8 max-w-2xl mx-auto animate-fade-in">
            <p className="text-gold-400 font-semibold text-lg">
              💡 Notre mission : Donner une voix digitale aux entrepreneurs locaux
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-in">
            <Button 
              size="lg" 
              className="bg-gold-gradient text-black font-semibold text-lg px-8 py-4 hover:opacity-90 transition-opacity"
            >
              Découvrir nos services
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-black text-lg px-8 py-4 transition-all duration-300"
            >
              Demande de devis
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <ArrowDown className="text-gold-400 mx-auto" size={24} />
            <p className="text-gray-400 text-sm mt-2">Découvrez nos services</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
