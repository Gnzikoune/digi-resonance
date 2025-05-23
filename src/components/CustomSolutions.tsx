
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
    window.open('https://wa.me/24177000000?text=Bonjour, je souhaite discuter d\'un projet sur mesure avec Digi.Résonance', '_blank');
  };

  const handleScheduleMeeting = () => {
    window.open('https://wa.me/24177000000?text=Bonjour, je souhaite planifier un rendez-vous découverte avec Digi.Résonance', '_blank');
  };

  return (
    <section id="solutions-sur-mesure" className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-6 animate-slide-down">
              <Zap className="text-purple-600 animate-rotate-360" size={32} />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                Solutions <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">sur Mesure</span>
              </h2>
              <Sparkles className="text-pink-600 animate-bounce" size={32} />
            </div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium animate-slide-up">
              Chaque entreprise est unique. Nous créons des solutions digitales parfaitement adaptées 
              à vos besoins spécifiques et à votre secteur d'activité.
            </p>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {customServices.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-xl p-8 card-hover border-2 border-purple-200 hover:border-purple-400 animate-slide-up h-full flex flex-col"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-center mb-6">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg animate-pulse-glow">
                    <service.icon className="text-white icon-hover" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 font-medium">{service.description}</p>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3 animate-slide-right" style={{ animationDelay: `${featureIndex * 0.1}s` }}>
                      <CheckCircle className="text-green-500 flex-shrink-0 icon-hover" size={18} />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  onClick={handleDiscussProject}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-xl hover:scale-105 transition-all duration-300 font-bold mt-auto"
                >
                  <ArrowRight className="mr-2" size={18} />
                  Discuter du projet
                </Button>
              </div>
            ))}
          </div>

          {/* Process section */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-300 shadow-lg animate-slide-up">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Notre processus de création sur mesure
              </h3>
              <p className="text-gray-700 font-medium max-w-2xl mx-auto">
                De l'analyse de vos besoins à la livraison finale, nous vous accompagnons à chaque étape.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              {[
                { step: "1", title: "Analyse", desc: "Étude approfondie de vos besoins" },
                { step: "2", title: "Conception", desc: "Design et architecture technique" },
                { step: "3", title: "Développement", desc: "Création de votre solution" },
                { step: "4", title: "Livraison", desc: "Mise en ligne et formation" }
              ].map((item, index) => (
                <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold flex items-center justify-center mx-auto mb-3 animate-pulse-glow">
                    {item.step}
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600 font-medium">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button 
                onClick={handleScheduleMeeting}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-purple-500"
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
