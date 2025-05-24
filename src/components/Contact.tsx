
import { useState } from 'react';
import { Mail, Phone, Instagram, Facebook, Linkedin, MapPin, Send, Sparkles, Star, Gift, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission (replace with EmailJS integration)
    setTimeout(() => {
      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsLoading(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-gradient-to-br from-gold-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Background decorations - hidden on mobile */}
      <div className="absolute inset-0 opacity-10 hidden md:block">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-gold-400 rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-orange-400 rounded-full animate-bounce-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-3 mb-6 animate-slide-down">
              <Phone className="text-gold-600 animate-bounce" size={28} />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
                Parlons de votre <span className="bg-gradient-to-r from-gold-600 to-orange-600 bg-clip-text text-transparent">projet</span>
              </h2>
              <Send className="text-gold-600 animate-bounce" size={28} style={{ animationDelay: '0.5s' }} />
            </div>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-medium animate-slide-up px-4 md:px-0">
              Prêt à donner une voix digitale à votre entreprise ? Contactez-nous pour un devis gratuit et personnalisé.
            </p>
          </div>

          {/* Rappel des offres spéciales */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12 md:mb-16">
            <div className="bg-gradient-to-r from-green-100 to-emerald-100 border-2 border-green-400 rounded-xl p-4 md:p-6 text-center animate-slide-left">
              <div className="flex items-center justify-center space-x-2 mb-3">
                <Search className="text-green-600" size={24} />
                <h3 className="text-lg md:text-xl font-bold text-green-700">Audit Gratuit</h3>
              </div>
              <p className="text-sm md:text-base text-green-600 font-medium">
                Analyse gratuite de votre présence digitale
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 border-2 border-purple-400 rounded-xl p-4 md:p-6 text-center animate-slide-right">
              <div className="flex items-center justify-center space-x-2 mb-3">
                <Gift className="text-purple-600" size={24} />
                <h3 className="text-lg md:text-xl font-bold text-purple-700">Early Clients</h3>
              </div>
              <p className="text-sm md:text-base text-purple-600 font-medium">
                30% de bonus pour les 10 premiers clients
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Contact form */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl border-2 border-gold-200 animate-slide-left">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gold-gradient w-12 h-12 rounded-full flex items-center justify-center animate-pulse-glow">
                  <Mail className="text-black" size={24} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800">Demande de devis gratuit</h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="animate-slide-right" style={{ animationDelay: '0.1s' }}>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom et prénom"
                    className="w-full border-2 border-gold-200 focus:border-gold-500 rounded-lg transition-all duration-300"
                  />
                </div>

                <div className="animate-slide-right" style={{ animationDelay: '0.2s' }}>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre.email@exemple.com"
                    className="w-full border-2 border-gold-200 focus:border-gold-500 rounded-lg transition-all duration-300"
                  />
                </div>

                <div className="animate-slide-right" style={{ animationDelay: '0.3s' }}>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                    Parlez-nous de votre projet *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre entreprise, vos besoins, vos objectifs..."
                    rows={6}
                    className="w-full border-2 border-gold-200 focus:border-gold-500 rounded-lg transition-all duration-300"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full bg-gold-gradient text-black font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 py-4 text-lg border-2 border-gold-500 animate-pulse-glow"
                >
                  {isLoading ? (
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black"></div>
                      <span>Envoi en cours...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Send className="animate-bounce" size={20} />
                      <span>Envoyer ma demande</span>
                    </div>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact info */}
            <div className="space-y-6 md:space-y-8 animate-slide-right">
              {/* Direct contact */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border-2 border-orange-200">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-12 h-12 rounded-full flex items-center justify-center animate-pulse-glow">
                    <Phone className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800">Nous contacter directement</h3>
                </div>
                
                <div className="space-y-4 md:space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-12 h-12 rounded-full flex items-center justify-center icon-hover flex-shrink-0">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div className="text-center sm:text-left">
                      <p className="text-gray-800 font-bold">Email</p>
                      <a href="mailto:digi.resonance@gmail.com" className="text-blue-600 hover:text-blue-800 font-semibold hover:underline transition-all text-sm md:text-base break-all">
                        digi.resonance@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-12 h-12 rounded-full flex items-center justify-center icon-hover flex-shrink-0">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div className="text-center sm:text-left">
                      <p className="text-gray-800 font-bold">WhatsApp</p>
                      <a href="https://wa.me/24107000000" className="text-green-600 hover:text-green-800 font-semibold hover:underline transition-all">
                        +241 07 00 00 00
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 rounded-full flex items-center justify-center icon-hover flex-shrink-0">
                      <MapPin className="text-white" size={20} />
                    </div>
                    <div className="text-center sm:text-left">
                      <p className="text-gray-800 font-bold">Localisation</p>
                      <p className="text-purple-600 font-semibold">Libreville, Gabon</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social media */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border-2 border-pink-200">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-gradient-to-r from-pink-500 to-rose-500 w-12 h-12 rounded-full flex items-center justify-center animate-pulse-glow">
                    <Sparkles className="text-white animate-rotate-360" size={24} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800">Suivez-nous</h3>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <a 
                    href="https://instagram.com/digi.resonance" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-pink-500 to-rose-500 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 mx-auto shadow-lg icon-hover"
                  >
                    <Instagram className="text-white" size={20} />
                  </a>
                  
                  <a 
                    href="https://facebook.com/digi.resonance" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-600 to-blue-500 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 mx-auto shadow-lg icon-hover"
                  >
                    <Facebook className="text-white" size={20} />
                  </a>
                  
                  <a 
                    href="https://linkedin.com/company/digi-resonance" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-700 to-indigo-600 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 mx-auto shadow-lg icon-hover"
                  >
                    <Linkedin className="text-white" size={20} />
                  </a>
                </div>
                
                <div className="text-center text-gray-600 text-xs md:text-sm space-y-1 font-medium">
                  <p>@digi.resonance</p>
                  <p>Digi.Résonance</p>
                  <p>Digi.Résonance</p>
                </div>
              </div>

              {/* Call to action */}
              <div className="bg-gold-gradient rounded-2xl p-6 md:p-8 text-black text-center shadow-xl border-2 border-gold-500 animate-pulse-glow">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <Star className="animate-rotate-360" size={24} />
                  <h4 className="text-lg md:text-xl font-bold">Prêt à démarrer ?</h4>
                  <Star className="animate-rotate-360" size={24} style={{ animationDelay: '1s' }} />
                </div>
                <p className="mb-4 font-semibold text-sm md:text-base">
                  Rejoignez les entrepreneurs gabonais qui nous font confiance pour leur présence digitale.
                </p>
                <Button 
                  onClick={() => window.open('https://wa.me/24107000000?text=Bonjour, je souhaite planifier un appel avec Digi.Résonance', '_blank')}
                  variant="outline" 
                  className="border-2 border-black text-black hover:bg-black hover:text-gold-400 font-bold hover:scale-105 transition-all duration-300 w-full md:w-auto"
                >
                  <Phone className="mr-2 animate-bounce" size={20} />
                  Planifier un appel
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
