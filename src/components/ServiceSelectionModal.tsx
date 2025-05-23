
import { useState } from 'react';
import { X, Check, ArrowRight, Star, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface ServiceSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService: {
    title: string;
    price: string;
    features: string[];
  } | null;
}

const ServiceSelectionModal = ({ isOpen, onClose, selectedService }: ServiceSelectionModalProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    urgency: 'normal'
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      toast({
        title: "Demande envoyée !",
        description: "Nous vous contacterons dans les 24h pour discuter de votre projet.",
      });
      setStep(3);
      setIsLoading(false);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen || !selectedService) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in">
        {/* Header */}
        <div className="bg-gold-gradient p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center">
                <Star className="text-black animate-rotate-360" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-black">{selectedService.title}</h2>
                <p className="text-black/70 font-semibold">{selectedService.price}</p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="text-black hover:bg-white/20 p-2 rounded-full transition-all duration-300"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Step 1: Service Confirmation */}
        {step === 1 && (
          <div className="p-6 animate-slide-right">
            <div className="text-center mb-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                <Check className="text-green-600 animate-bounce" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Excellent choix !</h3>
              <p className="text-gray-600">Voici ce qui est inclus dans votre offre :</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 mb-6">
              <ul className="space-y-3">
                {selectedService.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3 animate-slide-left" style={{ animationDelay: `${index * 0.1}s` }}>
                    <Check className="text-green-600 flex-shrink-0 mt-0.5 animate-bounce" size={18} style={{ animationDelay: `${index * 0.2}s` }} />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button 
              onClick={() => setStep(2)}
              className="w-full bg-gold-gradient text-black font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 py-4 text-lg border-2 border-gold-500"
            >
              <ArrowRight className="mr-2 animate-bounce" size={20} />
              Continuer vers le formulaire
            </Button>
          </div>
        )}

        {/* Step 2: Contact Form */}
        {step === 2 && (
          <div className="p-6 animate-slide-left">
            <div className="text-center mb-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                <Sparkles className="text-blue-600 animate-rotate-360" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Parlez-nous de votre projet</h3>
              <p className="text-gray-600">Plus nous en savons, mieux nous pourrons vous aider</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Nom complet *</label>
                  <Input
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    className="border-2 border-gold-200 focus:border-gold-500"
                  />
                </div>
                <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Email *</label>
                  <Input
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    className="border-2 border-gold-200 focus:border-gold-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Téléphone *</label>
                  <Input
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+241 XX XX XX XX"
                    className="border-2 border-gold-200 focus:border-gold-500"
                  />
                </div>
                <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Entreprise</label>
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Nom de votre entreprise"
                    className="border-2 border-gold-200 focus:border-gold-500"
                  />
                </div>
              </div>

              <div className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
                <label className="block text-sm font-bold text-gray-700 mb-1">Urgence du projet</label>
                <select
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleChange}
                  className="w-full border-2 border-gold-200 focus:border-gold-500 rounded-lg p-3 bg-white"
                >
                  <option value="normal">Pas d'urgence (2-3 semaines)</option>
                  <option value="urgent">Urgent (1 semaine)</option>
                  <option value="very-urgent">Très urgent (quelques jours)</option>
                </select>
              </div>

              <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
                <label className="block text-sm font-bold text-gray-700 mb-1">Décrivez votre projet *</label>
                <Textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Parlez-nous de votre activité, vos objectifs, vos attentes..."
                  rows={4}
                  className="border-2 border-gold-200 focus:border-gold-500"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <Button 
                  type="button"
                  variant="outline"
                  onClick={() => setStep(1)}
                  className="flex-1 border-2 border-gray-300 hover:bg-gray-100"
                >
                  Retour
                </Button>
                <Button 
                  type="submit"
                  disabled={isLoading}
                  className="flex-2 bg-gold-gradient text-black font-bold hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>
                      Envoi...
                    </>
                  ) : (
                    <>
                      <ArrowRight className="mr-2 animate-bounce" size={20} />
                      Envoyer ma demande
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        )}

        {/* Step 3: Confirmation */}
        {step === 3 && (
          <div className="p-6 text-center animate-scale-in">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
              <Check className="text-green-600 animate-bounce" size={40} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Demande envoyée avec succès !</h3>
            <p className="text-gray-600 mb-6 text-lg">
              Merci pour votre confiance. Nous analyserons votre demande et vous recontacterons dans les 24h pour discuter de votre projet.
            </p>
            <div className="bg-gradient-to-r from-gold-100 to-orange-100 rounded-xl p-6 mb-6">
              <h4 className="font-bold text-gray-800 mb-2">Prochaines étapes :</h4>
              <ul className="text-gray-700 space-y-2 text-left">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                  <span>Analyse de votre demande (24h)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                  <span>Appel de découverte (30 min)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                  <span>Proposition personnalisée</span>
                </li>
              </ul>
            </div>
            <Button 
              onClick={onClose}
              className="w-full bg-gold-gradient text-black font-bold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Parfait, merci !
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceSelectionModal;
