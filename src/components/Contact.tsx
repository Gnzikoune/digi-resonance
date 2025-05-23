
import { useState } from 'react';
import { Mail, Phone, Instagram, Facebook, Linkedin } from 'lucide-react';
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
    <section id="contact" className="py-20 bg-dark-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              📞 Parlons de votre <span className="text-gold-400">projet</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Prêt à donner une voix digitale à votre entreprise ? Contactez-nous pour un devis gratuit et personnalisé.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact form */}
            <div className="bg-white rounded-lg p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-dark-900 mb-6">Demande de devis gratuit</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
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
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
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
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
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
                    className="w-full"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full bg-gold-gradient text-black font-semibold hover:opacity-90 transition-opacity py-3"
                >
                  {isLoading ? 'Envoi en cours...' : 'Envoyer ma demande'}
                </Button>
              </form>
            </div>

            {/* Contact info */}
            <div className="space-y-8">
              {/* Direct contact */}
              <div className="bg-gray-800 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Nous contacter directement</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gold-gradient w-12 h-12 rounded-full flex items-center justify-center">
                      <Mail className="text-black" size={20} />
                    </div>
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <a href="mailto:digi.resonance@gmail.com" className="text-gold-400 hover:underline">
                        digi.resonance@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-gold-gradient w-12 h-12 rounded-full flex items-center justify-center">
                      <Phone className="text-black" size={20} />
                    </div>
                    <div>
                      <p className="text-white font-medium">WhatsApp</p>
                      <a href="https://wa.me/24107000000" className="text-gold-400 hover:underline">
                        +241 07 00 00 00
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social media */}
              <div className="bg-gray-800 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Suivez-nous</h3>
                
                <div className="grid grid-cols-3 gap-4">
                  <a 
                    href="https://instagram.com/digi.resonance" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gold-gradient w-16 h-16 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity mx-auto"
                  >
                    <Instagram className="text-black" size={24} />
                  </a>
                  
                  <a 
                    href="https://facebook.com/digi.resonance" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gold-gradient w-16 h-16 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity mx-auto"
                  >
                    <Facebook className="text-black" size={24} />
                  </a>
                  
                  <a 
                    href="https://linkedin.com/company/digi-resonance" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gold-gradient w-16 h-16 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity mx-auto"
                  >
                    <Linkedin className="text-black" size={24} />
                  </a>
                </div>
                
                <div className="text-center text-gray-400 text-sm mt-4 space-y-1">
                  <p>@digi.resonance</p>
                  <p>Digi.Résonance</p>
                  <p>Digi.Résonance</p>
                </div>
              </div>

              {/* Call to action */}
              <div className="bg-gold-gradient rounded-lg p-8 text-black text-center">
                <h4 className="text-xl font-bold mb-4">🚀 Prêt à démarrer ?</h4>
                <p className="mb-4">
                  Rejoignez les entrepreneurs gabonais qui nous font confiance pour leur présence digitale.
                </p>
                <Button 
                  variant="outline" 
                  className="border-black text-black hover:bg-black hover:text-gold-400 font-semibold"
                >
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
