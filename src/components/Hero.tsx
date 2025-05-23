
import { ArrowDown, Sparkles, Zap, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="accueil" className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-orange-400 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-yellow-400 rounded-full animate-bounce-slow"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 border-2 border-gold-500 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 border-2 border-orange-300 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/4 left-1/3 w-12 h-12 border-2 border-gold-400 rounded-full animate-bounce-slow" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-28 h-28 border-2 border-orange-500 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo large - descendu avec plus d'espace */}
          <div className="mb-12 mt-8 animate-slide-down">
            <div className="relative inline-block">
              <img 
                src="/lovable-uploads/504bfb32-8145-485f-b8a5-b97d8e1a2ba9.png" 
                alt="Digi.Résonance" 
                className="h-32 w-32 mx-auto mb-8 rounded-full border-4 border-white shadow-2xl animate-pulse-glow"
              />
              <Sparkles className="absolute -top-2 -right-2 text-yellow-400 animate-rotate-360" size={28} />
              <Star className="absolute -bottom-2 -left-2 text-gold-500 animate-bounce" size={24} />
            </div>
          </div>

          {/* Main headline with enhanced animations */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-8 animate-slide-up">
            Votre présence <span className="bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent animate-pulse">digitale</span> commence ici
          </h1>

          {/* Subtitle with slide animation from left */}
          <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto animate-slide-left font-medium">
            Nous donnons une voix digitale aux entrepreneurs gabonais avec des sites web modernes et une présence active sur les réseaux sociaux.
          </p>

          {/* Mission statement with slide from right */}
          <div className="bg-white/80 backdrop-blur-sm border-2 border-gold-400 rounded-xl p-6 mb-10 max-w-2xl mx-auto animate-slide-right shadow-xl">
            <div className="flex items-center justify-center space-x-3">
              <Zap className="text-gold-600 animate-bounce" size={28} />
              <p className="text-gold-700 font-bold text-lg">
                Notre mission : Donner une voix digitale aux entrepreneurs locaux
              </p>
              <Zap className="text-gold-600 animate-bounce" size={28} style={{ animationDelay: '0.5s' }} />
            </div>
          </div>

          {/* CTA Buttons with enhanced animations */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-slide-up">
            <a href="#services">
              <Button 
                size="lg" 
                className="bg-gold-gradient text-black font-bold text-lg px-10 py-5 hover:shadow-2xl hover:scale-110 transition-all duration-300 border-2 border-gold-600 animate-pulse-glow"
              >
                <Sparkles className="mr-3 animate-rotate-360" size={24} />
                Découvrir nos services
                <ChevronRight className="ml-3 animate-bounce" size={24} />
              </Button>
            </a>
            <a href="#contact">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-orange-500 text-orange-700 hover:bg-orange-500 hover:text-white text-lg px-10 py-5 transition-all duration-300 font-bold hover:scale-105 bg-white/90 shadow-lg"
              >
                <Star className="mr-3 animate-bounce" size={24} />
                Demande de devis
              </Button>
            </a>
          </div>

          {/* Scroll indicator with enhanced animation */}
          <div className="animate-bounce">
            <div className="flex flex-col items-center space-y-4">
              <ArrowDown className="text-gold-600 mx-auto animate-float" size={32} />
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gold-500 rounded-full animate-pulse"></div>
                <p className="text-gray-600 text-sm font-semibold">Découvrez nos services</p>
                <div className="w-2 h-2 bg-gold-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
