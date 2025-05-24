
import { ArrowDown, Sparkles, Zap, ChevronRight, Star } from 'lucide-react';
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

      {/* Banderole Audit Gratuit */}
      <div className="absolute top-24 md:top-32 left-0 right-0 z-20">
        <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white py-3 overflow-hidden">
          <div className="animate-scroll-right whitespace-nowrap">
            <span className="inline-block px-8 text-lg md:text-xl font-bold">
              🎁 AUDIT DIGITAL GRATUIT • Analyse complète de votre site ou réseaux sociaux • OFFRE LIMITÉE • 
              <button 
                onClick={() => window.open('https://wa.me/24107000000?text=Bonjour, je souhaite bénéficier de l\'audit digital gratuit', '_blank')}
                className="ml-4 bg-white text-green-600 px-4 py-1 rounded-full font-black hover:bg-green-50 transition-colors"
              >
                RÉSERVER MON AUDIT 🚀
              </button>
              • AUDIT DIGITAL GRATUIT • Analyse complète de votre site ou réseaux sociaux • OFFRE LIMITÉE •
            </span>
          </div>
        </div>
      </div>

      {/* Banderole Early Clients */}
      <div className="absolute top-36 md:top-48 left-0 right-0 z-20">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 overflow-hidden">
          <div className="animate-scroll-left whitespace-nowrap">
            <span className="inline-block px-8 text-lg md:text-xl font-bold">
              ⭐ EARLY CLIENTS • 10 premiers clients = 30% de bonus • EXCLUSIF • 
              <button 
                onClick={() => window.open('https://wa.me/24107000000?text=Bonjour, je souhaite profiter de l\'offre Early Clients', '_blank')}
                className="ml-4 bg-white text-purple-600 px-4 py-1 rounded-full font-black hover:bg-purple-50 transition-colors"
              >
                PROFITER DE L'OFFRE 🎯
              </button>
              • EARLY CLIENTS • 10 premiers clients = 30% de bonus • EXCLUSIF •
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10 mt-32 md:mt-40">
        <div className="max-w-4xl mx-auto">
          {/* Logo large - moved below banners */}
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
