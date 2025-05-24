
import { useState } from 'react';
import { Globe, Users, Palette, Zap, CheckCircle, ArrowRight, Sparkles, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ServiceSelectionModal from './ServiceSelectionModal';

const Services = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      id: 'site-vitrine',
      icon: Globe,
      title: "Site vitrine",
      price: "À partir de 150 000 FCFA",
      description: "Site web professionnel pour présenter votre entreprise",
      features: ["Design moderne et responsive", "Pages essentielles (Accueil, À propos, Services, Contact)", "Optimisation SEO de base", "Formulaire de contact", "Intégration réseaux sociaux", "Hébergement 1 an inclus"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 'community-management',
      icon: Users,
      title: "Community Management",
      price: "À partir de 75 000 FCFA/mois",
      description: "Gestion complète de vos réseaux sociaux",
      features: ["Stratégie de contenu personnalisée", "Création de visuels attractifs", "Publication régulière", "Engagement avec votre communauté", "Analyse des performances", "Reporting mensuel détaillé"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 'pack-complet',
      icon: Palette,
      title: "Pack Lancement Complet",
      price: "À partir de 300 000 FCFA",
      description: "Solution tout-en-un pour lancer votre présence digitale",
      features: ["Site web professionnel", "Logo et identité visuelle", "Community management 3 mois", "Formation de votre équipe", "Support technique", "Stratégie digitale personnalisée"],
      gradient: "from-gold-500 to-orange-500",
      popular: true
    }
  ];

  const handleChooseService = (serviceId: string) => {
    setSelectedService(serviceId);
    setIsModalOpen(true);
  };

  return (
    <section id="services" className="py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-3 mb-6 animate-slide-down">
              <Zap className="text-blue-600 animate-rotate-360" size={28} />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
                Nos <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
              </h2>
              <Sparkles className="text-purple-600 animate-bounce" size={28} />
            </div>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-medium animate-slide-up px-4 md:px-0">
              Des solutions digitales adaptées aux entrepreneurs gabonais pour développer votre présence en ligne.
            </p>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className={`relative bg-white rounded-2xl shadow-xl p-6 md:p-8 card-hover border-2 border-gray-200 hover:border-blue-400 animate-slide-up ${
                  service.popular ? 'ring-4 ring-gold-400 ring-opacity-50' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gold-gradient text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse-glow">
                      ⭐ Le plus populaire
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center mx-auto mb-4 shadow-lg animate-pulse-glow`}>
                    <service.icon className="text-white icon-hover" size={28} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">{service.title}</h3>
                  <p className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent mb-3`}>
                    {service.price}
                  </p>
                  <p className="text-gray-600 font-medium text-sm md:text-base">{service.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3 animate-slide-right text-sm md:text-base" style={{ animationDelay: `${featureIndex * 0.1}s` }}>
                      <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5 icon-hover" size={16} />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  onClick={() => handleChooseService(service.id)}
                  className={`w-full bg-gradient-to-r ${service.gradient} text-white hover:shadow-xl hover:scale-105 transition-all duration-300 font-bold text-sm md:text-base`}
                >
                  <ArrowRight className="mr-2" size={18} />
                  Choisir cette offre
                </Button>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 md:p-8 text-center border-2 border-blue-300 shadow-lg animate-slide-up">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-3 mb-4">
              <Star className="text-blue-600 animate-bounce" size={24} />
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                Besoin d'une solution personnalisée ?
              </h3>
            </div>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto font-medium text-sm md:text-base px-4 md:px-0">
              Chaque entreprise est unique. Contactez-nous pour discuter de vos besoins spécifiques 
              et obtenir un devis sur mesure.
            </p>
            <Button 
              onClick={() => window.open('https://wa.me/24107000000?text=Bonjour, je souhaite discuter d\'une solution personnalisée', '_blank')}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-blue-500 w-full md:w-auto"
            >
              <Sparkles className="mr-2 animate-rotate-360" size={20} />
              Discuter de mon projet
            </Button>
          </div>
        </div>
      </div>

      <ServiceSelectionModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedService={selectedService}
      />
    </section>
  );
};

export default Services;
