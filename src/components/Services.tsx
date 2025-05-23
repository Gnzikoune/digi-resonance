
import { Globe, Users, Zap, Check, Star, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Site vitrine professionnel",
      price: "250 000 FCFA",
      description: "Créez une vitrine moderne de votre activité",
      features: [
        "Site responsive (mobile, tablette, desktop)",
        "5 pages maximum (Accueil, À propos, Services, Contact, etc.)",
        "Formulaire de contact fonctionnel",
        "Optimisation SEO de base",
        "Hébergement inclus 1 an",
        "Formation à la gestion du contenu",
        "Support technique 3 mois"
      ],
      popular: false,
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Community Management",
      price: "150 000 FCFA/mois",
      description: "Gagnez en visibilité sur Facebook, LinkedIn, Instagram, TikTok",
      features: [
        "Stratégie de contenu personnalisée",
        "12 publications par mois",
        "Gestion des commentaires et messages",
        "Rapport mensuel de performance",
        "Création de visuels originaux",
        "Hashtags et optimisation",
        "Engagement avec votre communauté"
      ],
      popular: true,
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Zap,
      title: "Pack Lancement",
      price: "300 000 FCFA",
      description: "Démarrez votre activité en ligne avec un site + stratégie réseaux sociaux",
      features: [
        "Site vitrine complet (cf. offre 1)",
        "1 mois de community management offert",
        "Stratégie digitale personnalisée",
        "Formation réseaux sociaux",
        "Création logos et visuels de base",
        "Paramétrage réseaux sociaux",
        "Accompagnement lancement 1 mois"
      ],
      popular: false,
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-orange-50 via-white to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-6 animate-slide-down">
              <Sparkles className="text-gold-600 animate-rotate-360" size={32} />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                Nos <span className="bg-gradient-to-r from-gold-600 to-orange-600 bg-clip-text text-transparent">Services</span>
              </h2>
              <Sparkles className="text-gold-600 animate-rotate-360" size={32} style={{ animationDelay: '1s' }} />
            </div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium animate-slide-up">
              Des solutions digitales claires, efficaces et adaptées aux entrepreneurs gabonais. 
              Chaque offre est conçue pour vous faire gagner en visibilité et développer votre activité.
            </p>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-8 mb-16">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`relative bg-white rounded-2xl shadow-xl p-6 md:p-8 card-hover border-2 ${
                  service.popular ? 'border-gold-400 lg:scale-105' : 'border-gray-200'
                } animate-slide-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <span className="bg-gold-gradient text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center space-x-1">
                      <Star className="animate-rotate-360" size={16} />
                      <span>Populaire</span>
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 bg-gradient-to-r ${service.color} shadow-lg animate-pulse-glow`}>
                    <service.icon className="text-white icon-hover" size={32} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4 font-medium">{service.description}</p>
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gold-600 to-orange-600 bg-clip-text text-transparent mb-4">
                    {service.price}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3 animate-slide-right" style={{ animationDelay: `${featureIndex * 0.1}s` }}>
                      <Check className="text-green-600 flex-shrink-0 mt-0.5 icon-hover" size={18} />
                      <span className="text-gray-700 font-medium text-sm md:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${
                    service.popular 
                      ? 'bg-gold-gradient text-black hover:shadow-xl hover:scale-105' 
                      : 'bg-gradient-to-r ' + service.color + ' text-white hover:shadow-xl hover:scale-105'
                  } font-bold py-3 transition-all duration-300 border-2 border-transparent hover:border-gold-400`}
                >
                  Choisir cette offre
                </Button>
              </div>
            ))}
          </div>

          {/* Additional info */}
          <div className="bg-gradient-to-r from-gold-50 to-orange-50 rounded-2xl p-6 md:p-8 text-center border-2 border-gold-300 shadow-lg animate-slide-up">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Users className="text-gold-600 animate-bounce" size={28} />
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                Besoin d'une solution sur mesure ?
              </h3>
            </div>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto font-medium">
              Chaque entreprise est unique. Nous pouvons adapter nos services à vos besoins spécifiques et créer une solution parfaitement adaptée à votre activité.
            </p>
            <Button className="bg-gold-gradient text-black font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-gold-500">
              <Sparkles className="mr-2 animate-rotate-360" size={20} />
              Parlons de votre projet
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
