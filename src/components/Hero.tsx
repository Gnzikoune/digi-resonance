
import { ArrowDown, Sparkles, Zap, ChevronRight, Star, Gift, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="accueil" className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-0">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-orange-400 rounded-full animate-float hidden md:block"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-yellow-400 rounded-full animate-bounce-slow hidden md:block"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 border-2 border-gold-500 rounded-full animate-pulse hidden md:block"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 border-2 border-orange-300 rounded-full animate-float hidden md:block" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/4 left-1/3 w-12 h-12 border-2 border-gold-400 rounded-full animate-bounce-slow hidden md:block" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-28 h-28 border-2 border-orange-500 rounded-full animate-float hidden md:block" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Offres spéciales visibles - en haut pour mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 md:mb-16">
            <div className="bg-gradient-to-r from-green-100 to-emerald-100 border-2 border-green-400 rounded-xl p-4 md:p-6 animate-pulse-glow">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Search className="text-green-600" size={20} />
                <h3 className="text-lg md:text-xl font-bold text-green-700">Audit Gratuit</h3>
              </div>
              <p className="text-sm md:text-base text-green-600 font-medium">
                Analyse complète de votre présence digitale - Gratuit !
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 border-2 border-purple-400 rounded-xl p-4 md:p-6 animate-pulse-glow">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Gift className="text-purple-600" size={20} />
                <h3 className="text-lg md:text-xl font-bold text-purple-700">Early Clients</h3>
              </div>
              <p className="text-sm md:text-base text-purple-600 font-medium">
                10 premiers clients = 30% de bonus !
              </p>
            </div>
          </div>

          {/* Logo large */}
          <div className="mb-8 md:mb-12 animate-slide-down">
            <div className="relative inline-block">
              <img 
                src="/lovable-uploads/504bfb32-8145-485f-b8a5-b97d8e1a2ba9.png" 
                alt="Digi.Résonance" 
                className="h-24 w-24 md:h-32 md:w-32 mx-auto mb-6 md:mb-8 rounded-full border-4 border-white shadow-2xl animate-pulse-glow"
              />
              <Sparkles className="absolute -top-2 -right-2 text-yellow-400 animate-rotate-360" size={20} />
              <Star className="absolute -bottom-2 -left-2 text-gold-500 animate-bounce" size={18} />
            </div>
          </div>

          {/* Main headline with enhanced animations */}
          <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-800 mb-6 md:mb-8 animate-slide-up leading-tight">
            Votre présence <span className="bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent animate-pulse">digitale</span> commence ici
          </h1>

          {/* Subtitle with slide animation from left */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 md:mb-10 max-w-3xl mx-auto animate-slide-left font-medium px-4 md:px-0">
            Nous donnons une voix digitale aux entrepreneurs gabonais avec des sites web modernes et une présence active sur les réseaux sociaux.
          </p>

          {/* Mission statement with slide from right */}
          <div className="bg-white/80 backdrop-blur-sm border-2 border-gold-400 rounded-xl p-4 md:p-6 mb-8 md:mb-10 max-w-2xl mx-auto animate-slide-right shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-3">
              <Zap className="text-gold-600 animate-bounce" size={24} />
              <p className="text-gold-700 font-bold text-base md:text-lg text-center">
                Notre mission : Donner une voix digitale aux entrepreneurs locaux
              </p>
              <Zap className="text-gold-600 animate-bounce hidden md:block" size={24} style={{ animationDelay: '0.5s' }} />
            </div>
          </div>

          {/* CTA Buttons with enhanced animations */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-12 md:mb-16 animate-slide-up px-4 md:px-0">
            <a href="#services" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                className="bg-gold-gradient text-black font-bold text-base md:text-lg px-8 md:px-10 py-4 md:py-5 hover:shadow-2xl hover:scale-110 transition-all duration-300 border-2 border-gold-600 animate-pulse-glow w-full sm:w-auto"
              >
                <Sparkles className="mr-2 md:mr-3 animate-rotate-360" size={20} />
                Découvrir nos services
                <ChevronRight className="ml-2 md:ml-3 animate-bounce" size={20} />
              </Button>
            </a>
            <a href="#contact" className="w-full sm:w-auto">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-orange-500 text-orange-700 hover:bg-orange-500 hover:text-white text-base md:text-lg px-8 md:px-10 py-4 md:py-5 transition-all duration-300 font-bold hover:scale-105 bg-white/90 shadow-lg w-full sm:w-auto"
              >
                <Star className="mr-2 md:mr-3 animate-bounce" size={20} />
                Demande de devis
              </Button>
            </a>
          </div>

          {/* Scroll indicator with enhanced animation */}
          <div className="animate-bounce hidden md:block">
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
