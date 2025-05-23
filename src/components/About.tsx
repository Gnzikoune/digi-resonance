
import { Users, Heart, Target, Star, Sparkles, Camera } from 'lucide-react';

const About = () => {
  return (
    <section id="apropos" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-6 animate-slide-down">
              <Star className="text-blue-600 animate-rotate-360" size={32} />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                À propos de <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Digi.Résonance</span>
              </h2>
              <Star className="text-purple-600 animate-rotate-360" size={32} style={{ animationDelay: '1s' }} />
            </div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium animate-slide-up">
              Une jeune agence web gabonaise née de la complémentarité entre un développeur web expérimenté et une social media manager passionnée.
            </p>
          </div>

          {/* Philosophy */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg card-hover border-2 border-pink-200 animate-slide-left">
              <div className="bg-gradient-to-r from-pink-500 to-rose-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                <Heart className="text-white icon-hover" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Proximité</h3>
              <p className="text-gray-600 font-medium leading-relaxed">
                Nous comprenons les défis des entrepreneurs gabonais et proposons des solutions adaptées à votre réalité locale.
              </p>
            </div>

            <div className="text-center bg-white p-8 rounded-2xl shadow-lg card-hover border-2 border-blue-200 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                <Target className="text-white icon-hover" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Transparence</h3>
              <p className="text-gray-600 font-medium leading-relaxed">
                Pas de jargon technique compliqué. Nous expliquons clairement ce que nous faisons et pourquoi nous le faisons.
              </p>
            </div>

            <div className="text-center bg-white p-8 rounded-2xl shadow-lg card-hover border-2 border-green-200 animate-slide-right" style={{ animationDelay: '0.4s' }}>
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                <Users className="text-white icon-hover" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Résultats</h3>
              <p className="text-gray-600 font-medium leading-relaxed">
                Notre objectif est simple : faire grandir votre activité grâce à une présence digitale efficace et mesurable.
              </p>
            </div>
          </div>

          {/* Team */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border-2 border-gold-200 animate-slide-up">
            <div className="flex items-center justify-center space-x-3 mb-12">
              <Users className="text-gold-600 animate-bounce" size={32} />
              <h3 className="text-3xl font-bold text-center text-gray-800">
                Une équipe, <span className="bg-gradient-to-r from-gold-600 to-orange-600 bg-clip-text text-transparent">deux expertises</span>
              </h3>
              <Sparkles className="text-gold-600 animate-rotate-360" size={32} />
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Gildas */}
              <div className="text-center md:text-left animate-slide-left">
                <div className="relative mb-6">
                  {/* Placeholder pour photo de Gildas */}
                  <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mx-auto md:mx-0 shadow-2xl animate-pulse-glow border-4 border-white">
                    <Camera className="text-white animate-bounce" size={40} />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center animate-bounce">
                    <Star className="text-white" size={16} />
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-gray-800 mb-2">Gildas</h4>
                <p className="text-blue-600 font-bold mb-4 text-lg">Développeur web</p>
                <p className="text-gray-700 leading-relaxed font-medium">
                  Spécialiste des sites responsives, performants et personnalisés. Il conçoit l'outil digital adapté à votre activité, en s'assurant que votre site soit à la fois beau et fonctionnel.
                </p>
              </div>

              {/* Gérole */}
              <div className="text-center md:text-left animate-slide-right">
                <div className="relative mb-6">
                  {/* Placeholder pour photo de Gérole */}
                  <div className="w-32 h-32 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center mx-auto md:mx-0 shadow-2xl animate-pulse-glow border-4 border-white">
                    <Camera className="text-white animate-bounce" size={40} />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-pink-500 w-8 h-8 rounded-full flex items-center justify-center animate-bounce">
                    <Star className="text-white" size={16} />
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-gray-800 mb-2">Gérole</h4>
                <p className="text-pink-600 font-bold mb-4 text-lg">Social Media Manager</p>
                <p className="text-gray-700 leading-relaxed font-medium">
                  Créatrice de contenu et stratège réseaux sociaux. Elle assure la visibilité et l'engagement de votre marque en ligne avec créativité et passion.
                </p>
              </div>
            </div>
          </div>

          {/* Why Digi.Résonance */}
          <div className="mt-16 text-center bg-gradient-to-r from-gold-100 to-orange-100 rounded-2xl p-8 md:p-12 border-2 border-gold-300 shadow-xl animate-slide-up">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Sparkles className="text-gold-600 animate-rotate-360" size={32} />
              <h3 className="text-3xl font-bold text-gray-800">
                Pourquoi <span className="bg-gradient-to-r from-gold-600 to-orange-600 bg-clip-text text-transparent">"Digi.Résonance"</span> ?
              </h3>
              <Sparkles className="text-orange-600 animate-rotate-360" size={32} style={{ animationDelay: '1s' }} />
            </div>
            <p className="text-xl text-gray-700 mb-6 max-w-4xl mx-auto font-bold">
              Parce que le digital doit résonner localement.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
              Nous croyons en un numérique utile, humain, et ancré dans les réalités gabonaises. 
              Notre ambition est de faire vibrer chaque projet, petite ou grande idée, grâce au web.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
