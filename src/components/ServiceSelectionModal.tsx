
import { useState } from 'react';
import { X, CheckCircle, Calendar, Phone, Mail, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ServiceSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService: any;
}

const ServiceSelectionModal = ({ isOpen, onClose, selectedService }: ServiceSelectionModalProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    preferredDate: '',
    preferredTime: ''
  });

  if (!isOpen || !selectedService) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleScheduleCall = () => {
    // Créer un lien WhatsApp avec les informations
    const message = `Bonjour ! Je souhaite planifier un appel pour discuter du service "${selectedService.title}".
    
Mes informations :
- Nom : ${formData.name}
- Email : ${formData.email}
- Téléphone : ${formData.phone}
- Entreprise : ${formData.company}
- Date souhaitée : ${formData.preferredDate}
- Heure souhaitée : ${formData.preferredTime}

Message : ${formData.message}`;

    const whatsappUrl = `https://wa.me/24107000000?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  const handleQuoteRequest = () => {
    // Créer un lien WhatsApp pour demande de devis
    const message = `Bonjour ! Je suis intéressé(e) par le service "${selectedService.title}" au prix de ${selectedService.price}.
    
Mes informations :
- Nom : ${formData.name}
- Email : ${formData.email}
- Téléphone : ${formData.phone}
- Entreprise : ${formData.company}

Message : ${formData.message}

Pouvez-vous me faire parvenir un devis détaillé ?`;

    const whatsappUrl = `https://wa.me/24107000000?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">
            {step === 1 ? `Service sélectionné : ${selectedService.title}` : 'Vos informations'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {step === 1 && (
          <div className="p-6">
            {/* Service recap */}
            <div className="bg-gradient-to-r from-gold-50 to-orange-50 rounded-xl p-6 mb-6 border-2 border-gold-300">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{selectedService.title}</h3>
              <p className="text-gray-600 mb-4 font-medium">{selectedService.description}</p>
              <div className="text-2xl font-bold bg-gradient-to-r from-gold-600 to-orange-600 bg-clip-text text-transparent">
                {selectedService.price}
              </div>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h4 className="font-bold text-gray-800 mb-4">Ce qui est inclus :</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {selectedService.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="text-green-600 flex-shrink-0" size={18} />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <Button 
                onClick={() => setStep(2)}
                className="w-full bg-gold-gradient text-black font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-gold-500"
              >
                <Mail className="mr-2" size={20} />
                Demander un devis détaillé
              </Button>
              <Button 
                onClick={() => setStep(3)}
                variant="outline"
                className="w-full border-2 border-blue-500 text-blue-700 hover:bg-blue-500 hover:text-white font-bold hover:scale-105 transition-all duration-300"
              >
                <Calendar className="mr-2" size={20} />
                Planifier un appel découverte
              </Button>
            </div>
          </div>
        )}

        {(step === 2 || step === 3) && (
          <div className="p-6">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="inline mr-1" size={16} />
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="inline mr-1" size={16} />
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Phone className="inline mr-1" size={16} />
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Entreprise
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  />
                </div>
              </div>

              {step === 3 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="inline mr-1" size={16} />
                      Date souhaitée
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Heure souhaitée
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({...formData, preferredTime: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    >
                      <option value="">Sélectionner une heure</option>
                      <option value="09:00">09:00</option>
                      <option value="10:00">10:00</option>
                      <option value="11:00">11:00</option>
                      <option value="14:00">14:00</option>
                      <option value="15:00">15:00</option>
                      <option value="16:00">16:00</option>
                    </select>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  placeholder="Décrivez votre projet en quelques mots..."
                />
              </div>

              <div className="flex space-x-4 pt-4">
                <Button
                  onClick={() => setStep(1)}
                  variant="outline"
                  className="flex-1"
                >
                  Retour
                </Button>
                <Button
                  onClick={step === 2 ? handleQuoteRequest : handleScheduleCall}
                  className="flex-1 bg-gold-gradient text-black font-bold hover:shadow-xl hover:scale-105 transition-all duration-300"
                  disabled={!formData.name || !formData.email || !formData.phone}
                >
                  {step === 2 ? (
                    <>
                      <Mail className="mr-2" size={20} />
                      Envoyer la demande
                    </>
                  ) : (
                    <>
                      <Calendar className="mr-2" size={20} />
                      Planifier l'appel
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceSelectionModal;
