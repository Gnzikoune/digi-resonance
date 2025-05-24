
import { Sparkles, Zap, Users, CheckCircle, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CustomSolutions = () => {
  const customServices = [
    {
      icon: Zap,
      title: "Applications web sur mesure",
      description: "Développement d'applications web complexes adaptées à vos processus métier spécifiques.",
      features: ["Interface personnalisée", "Base de données intégrée", "Gestion des utilisateurs", "Rapports avancés"]
    },
    {
      icon: Users,
      title: "Stratégie digitale complète",
      description: "Audit complet de votre présence digitale et plan d'action personnalisé pour votre croissance.",
      features: ["Audit digital", "Plan de communication", "Formation équipe", "Suivi performance"]
    },
    {
      icon: Star,
      title: "E-commerce avancé",
      description: "Boutiques en ligne complètes avec paiement mobile money et gestion des stocks.",
      features: ["Paiement mobile money", "Gestion stocks", "Livraison intégrée", "Analytics ventes"]
    }
  ];

  const handleDiscussProject = () => {
    window.open('https://wa.me/24107000000?text=Bonjour, je souhaite discuter d\'un projet sur mesure avec Digi.Résonance', '_blank');
  };

  const handleScheduleMeeting = () => {
    window.open('https://wa.me/24107000000?text=Bonjour, je souhaite planifier un rendez-vous découverte avec Digi.Résonance', '_blank');
  };

  return (
    <section id="solutions-sur-mesure" className="py-16 md:py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-3 mb-6 animate-slide-down">
              <Zap className="text-purple-600 animate-rotate-360" size={28} />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
                Solutions <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">sur Mesure</span>
              </h2>
              <Sparkles className="text-pink-600 animate-bounce" size={28} />
            </div>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-medium animate-slide-up px-4 md:px-0">
              Chaque entreprise est unique. Nous créons des solutions digitales parfaitement adaptées 
              à vos besoins spécifiques et à votre secteur d'activité.
            </p>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {customServices.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-xl p-6 md:p-8 card-hover border-2 border-purple-200 hover:border-purple-400 animate-slide-up h-full flex flex-col"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg animate-pulse-glow">
                    <service.icon className="text-white icon-hover" size={28} />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 font-medium text-sm md:text-base">{service.description}</p>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3 animate-slide-right text-sm md:text-base" style={{ animationDelay: `${featureIndex * 0.1}s` }}>
                      <CheckCircle className="text-green-500 flex-shrink-0 icon-hover" size={16} />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  onClick={handleDiscussProject}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-xl hover:scale-105 transition-all duration-300 font-bold mt-auto text-sm md:text-base"
                >
                  <ArrowRight className="mr-2" size={16} />
                  Discuter du projet
                </Button>
              </div>
            ))}
          </div>

          {/* Process section */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 md:p-8 border-2 border-purple-300 shadow-lg animate-slide-up">
            <div className="text-center mb-8">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
                Notre processus de création sur mesure
              </h3>
              <p className="text-gray-700 font-medium max-w-2xl mx-auto text-sm md:text-base px-4 md:px-0">
                De l'analyse de vos besoins à la livraison finale, nous vous accompagnons à chaque étape.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
              {[
                { step: "1", title: "Analyse", desc: "Étude approfondie de vos besoins" },
                { step: "2", title: "Conception", desc: "Design et architecture technique" },
                { step: "3", title: "Développement", desc: "Création de votre solution" },
                { step: "4", title: "Livraison", desc: "Mise en ligne et formation" }
              ].map((item, index) => (
                <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold flex items-center justify-center mx-auto mb-3 animate-pulse-glow text-lg">
                    {item.step}
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2 text-sm md:text-base">{item.title}</h4>
                  <p className="text-xs md:text-sm text-gray-600 font-medium">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button 
                onClick={handleScheduleMeeting}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-purple-500 w-full md:w-auto"
              >
                <Users className="mr-2 animate-bounce" size={20} />
                Planifier un rendez-vous découverte
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomSolutions;
