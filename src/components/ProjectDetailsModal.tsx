
import { useState } from 'react';
import { X, ExternalLink, Calendar, User, ChevronRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface ProjectDetailsModalProps {
  project: any;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectDetailsModal = ({ project, isOpen, onClose }: ProjectDetailsModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white mx-4 md:mx-auto">
        <DialogHeader>
          <DialogTitle className="text-xl md:text-2xl font-bold text-gray-800 mb-4 pr-8">
            {project.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Image principale */}
          <div className="relative">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-48 md:h-64 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                {project.category}
              </span>
            </div>
          </div>

          {/* Informations du projet */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3">À propos du projet</h3>
              <p className="text-gray-700 mb-4 leading-relaxed text-sm md:text-base">{project.description}</p>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <User className="text-blue-500 flex-shrink-0" size={18} />
                  <span className="font-semibold text-gray-800 text-sm md:text-base">Client :</span>
                  <span className="text-gray-700 text-sm md:text-base">{project.client}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="text-green-500 flex-shrink-0" size={18} />
                  <span className="font-semibold text-gray-800 text-sm md:text-base">Année :</span>
                  <span className="text-gray-700 text-sm md:text-base">{project.year}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3">Technologies utilisées</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech: string, index: number) => (
                  <span 
                    key={index}
                    className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3">Fonctionnalités clés</h3>
              <ul className="space-y-2">
                {project.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={18} />
                    <span className="text-gray-700 text-sm md:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Résultats obtenus */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 md:p-6 border border-blue-200">
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">Résultats obtenus</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-blue-600 mb-1">100%</div>
                <div className="text-xs md:text-sm text-gray-600">Satisfaction client</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-green-600 mb-1">+250%</div>
                <div className="text-xs md:text-sm text-gray-600">Visibilité en ligne</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-purple-600 mb-1">30j</div>
                <div className="text-xs md:text-sm text-gray-600">Délai de livraison</div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t">
            <Button 
              className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm md:text-base"
              onClick={() => window.open('https://wa.me/24107000000?text=Bonjour, je suis intéressé par un projet similaire à ' + project.title, '_blank')}
            >
              <ExternalLink className="mr-2" size={18} />
              Projet similaire
            </Button>
            <Button 
              variant="outline"
              className="flex-1 border-2 border-blue-500 text-blue-600 hover:bg-blue-50 font-bold text-sm md:text-base"
              onClick={onClose}
            >
              Fermer
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailsModal;
