
import { Globe, Users, Zap, Check } from 'lucide-react';
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
      popular: false
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
      popular: true
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
        "Accompagnement lancemen 1 mois"
      ],
      popular: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-6">
              🛠️ Nos <span className="text-gold-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions digitales claires, efficaces et adaptées aux entrepreneurs gabonais. 
              Chaque offre est conçue pour vous faire gagner en visibilité et développer votre activité.
            </p>
          </div>

          {/* Services grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`relative bg-white rounded-lg shadow-xl p-8 card-hover border-2 ${
                  service.popular ? 'border-gold-400 scale-105' : 'border-gray-200'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gold-gradient text-black px-4 py-2 rounded-full text-sm font-bold">
                      ⭐ Populaire
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    service.popular ? 'bg-gold-gradient' : 'bg-gray-100'
                  }`}>
                    <service.icon className={service.popular ? 'text-black' : 'text-gold-600'} size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-dark-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="text-3xl font-bold text-gold-600 mb-4">{service.price}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="text-gold-600 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${
                    service.popular 
                      ? 'bg-gold-gradient text-black hover:opacity-90' 
                      : 'bg-dark-900 text-white hover:bg-dark-800'
                  } font-semibold py-3 transition-all duration-300`}
                >
                  Choisir cette offre
                </Button>
              </div>
            ))}
          </div>

          {/* Additional info */}
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-dark-900 mb-4">
              🤝 Besoin d'une solution sur mesure ?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Chaque entreprise est unique. Nous pouvons adapter nos services à vos besoins spécifiques et créer une solution parfaitement adaptée à votre activité.
            </p>
            <Button className="bg-gold-gradient text-black font-semibold hover:opacity-90 transition-opacity">
              Parlons de votre projet
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
