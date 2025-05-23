
import { Users, Heart, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="apropos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-6">
              À propos de <span className="text-gold-600">Digi.Résonance</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une jeune agence web gabonaise née de la complémentarité entre un développeur web expérimenté et une social media manager passionnée.
            </p>
          </div>

          {/* Philosophy */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center bg-white p-8 rounded-lg shadow-lg card-hover">
              <div className="bg-gold-gradient w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-black" size={28} />
              </div>
              <h3 className="text-xl font-bold text-dark-900 mb-4">Proximité</h3>
              <p className="text-gray-600">
                Nous comprenons les défis des entrepreneurs gabonais et proposons des solutions adaptées à votre réalité locale.
              </p>
            </div>

            <div className="text-center bg-white p-8 rounded-lg shadow-lg card-hover">
              <div className="bg-gold-gradient w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-black" size={28} />
              </div>
              <h3 className="text-xl font-bold text-dark-900 mb-4">Transparence</h3>
              <p className="text-gray-600">
                Pas de jargon technique compliqué. Nous expliquons clairement ce que nous faisons et pourquoi nous le faisons.
              </p>
            </div>

            <div className="text-center bg-white p-8 rounded-lg shadow-lg card-hover">
              <div className="bg-gold-gradient w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-black" size={28} />
              </div>
              <h3 className="text-xl font-bold text-dark-900 mb-4">Résultats</h3>
              <p className="text-gray-600">
                Notre objectif est simple : faire grandir votre activité grâce à une présence digitale efficace et mesurable.
              </p>
            </div>
          </div>

          {/* Team */}
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-center text-dark-900 mb-12">
              👥 Une équipe, <span className="text-gold-600">deux expertises</span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Gildas */}
              <div className="text-center md:text-left">
                <div className="bg-gold-gradient w-20 h-20 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-6">
                  <span className="text-black font-bold text-2xl">G</span>
                </div>
                <h4 className="text-2xl font-bold text-dark-900 mb-2">Gildas</h4>
                <p className="text-gold-600 font-semibold mb-4">Développeur web (depuis 2021)</p>
                <p className="text-gray-600 leading-relaxed">
                  Spécialiste des sites responsives, performants et personnalisés. Il conçoit l'outil digital adapté à votre activité, en s'assurant que votre site soit à la fois beau et fonctionnel.
                </p>
              </div>

              {/* Gérole */}
              <div className="text-center md:text-left">
                <div className="bg-gold-gradient w-20 h-20 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-6">
                  <span className="text-black font-bold text-2xl">G</span>
                </div>
                <h4 className="text-2xl font-bold text-dark-900 mb-2">Gérole</h4>
                <p className="text-gold-600 font-semibold mb-4">Social Media Manager fraîchement diplômée</p>
                <p className="text-gray-600 leading-relaxed">
                  Créatrice de contenu et stratège réseaux sociaux. Elle assure la visibilité et l'engagement de votre marque en ligne avec créativité et passion.
                </p>
              </div>
            </div>
          </div>

          {/* Why Digi.Résonance */}
          <div className="mt-16 text-center bg-dark-900 rounded-lg p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-6">
              🌍 Pourquoi <span className="text-gold-400">"Digi.Résonance"</span> ?
            </h3>
            <p className="text-xl text-gray-300 mb-6 max-w-4xl mx-auto">
              Parce que le digital doit résonner localement.
            </p>
            <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
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
