
import { useState } from 'react';
import { ExternalLink, Eye, Calendar, Sparkles, Star, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 1,
      title: "Site E-commerce - Boutique Mode",
      category: "Site vitrine",
      description: "Site moderne pour une boutique de mode locale avec catalogue produits et formulaire de contact.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["React", "Tailwind CSS", "Responsive"],
      features: ["Design moderne", "Catalogue produits", "Formulaire contact", "SEO optimisé"],
      client: "Boutique Élégance",
      year: "2024"
    },
    {
      id: 2,
      title: "Community Management - Restaurant",
      category: "Réseaux sociaux",
      description: "Stratégie complète de community management pour un restaurant local avec augmentation de 300% de l'engagement.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      technologies: ["Facebook", "Instagram", "LinkedIn"],
      features: ["Stratégie contenu", "Visuels créatifs", "Engagement communauté", "Reporting mensuel"],
      client: "Restaurant Saveurs d'Afrique",
      year: "2024"
    },
    {
      id: 3,
      title: "Pack Lancement - Entreprise BTP",
      category: "Pack complet",
      description: "Lancement digital complet d'une entreprise de BTP avec site web et présence réseaux sociaux.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      technologies: ["Site web", "Réseaux sociaux", "Branding"],
      features: ["Site vitrine", "Identité visuelle", "Community management", "Formation équipe"],
      client: "BTP Gabon Pro",
      year: "2024"
    }
  ];

  return (
    <section id="realisations" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-6 animate-slide-down">
              <Sparkles className="text-blue-600 animate-rotate-360" size={32} />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                Nos <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Réalisations</span>
              </h2>
              <Star className="text-purple-600 animate-bounce" size={32} />
            </div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium animate-slide-up">
              Découvrez nos projets récents et les résultats obtenus pour nos clients. 
              Chaque projet reflète notre engagement à créer des solutions digitales efficaces.
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
              <Card 
                key={project.id}
                className="group card-hover border-2 border-gray-200 hover:border-blue-400 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-gradient text-white px-3 py-1 rounded-full text-sm font-bold">
                      {project.category}
                    </span>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </CardTitle>
                    <span className="text-sm text-gray-500 font-medium">{project.year}</span>
                  </div>
                  <CardDescription className="text-gray-600 font-medium">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Technologies utilisées :</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Points clés :</h4>
                      <ul className="space-y-1">
                        {project.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2">
                      <Button 
                        onClick={() => setSelectedProject(project)}
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-xl hover:scale-105 transition-all duration-300 font-bold"
                      >
                        <Eye className="mr-2 animate-bounce" size={18} />
                        Voir les détails
                        <ChevronRight className="ml-2" size={18} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to action */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center border-2 border-blue-300 shadow-lg animate-slide-up">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Calendar className="text-blue-600 animate-bounce" size={28} />
              <h3 className="text-2xl font-bold text-gray-800">
                Votre projet sera le prochain !
              </h3>
            </div>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto font-medium">
              Rejoignez nos clients satisfaits et donnez vie à votre projet digital. 
              Contactez-nous pour discuter de vos besoins spécifiques.
            </p>
            <Button className="bg-blue-gradient text-white font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-blue-500">
              <Sparkles className="mr-2 animate-rotate-360" size={20} />
              Démarrer mon projet
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
