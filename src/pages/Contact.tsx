import React, { useState } from 'react';
import { MapPin, Phone, Clock, Mail, Send, CheckCircle, AlertTriangle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="py-20">
      {/* Warning Banner */}
      <div className="bg-red-900/20 border-b border-red-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-center space-x-2 text-red-400">
            <AlertTriangle className="h-5 w-5" />
            <p className="text-sm font-medium text-center">
              ⚠️ La vente de tabac est interdite aux mineurs. Ce site ne propose aucune vente en ligne de produits du tabac.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contactez-Nous</h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            N'hésitez pas à nous contacter pour toute question ou information. 
            Nous sommes à votre écoute et vous répondrons dans les plus brefs délais.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Informations de Contact</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-900/20 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Adresse</h3>
                    <p className="text-zinc-400">60 Rue du Commerce<br />38200 Vienne, France</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-900/20 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Téléphone</h3>
                    <p className="text-zinc-400">04 74 85 XX XX</p>
                    <p className="text-sm text-zinc-500">Du lundi au samedi de 7h à 20h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-900/20 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-zinc-400">contact@tabac-hoteldeville.fr</p>
                    <p className="text-sm text-zinc-500">Réponse sous 24h ouvrées</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-900/20 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Horaires d'Ouverture</h3>
                    <div className="text-zinc-400 space-y-1">
                      <p>Lundi - Samedi : 7h00 - 20h00</p>
                      <p>Dimanche : 8h00 - 19h00</p>
                      <p>Jours fériés : 8h00 - 19h00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Notre Localisation</h3>
              <div className="bg-zinc-800 rounded-lg p-6 border border-zinc-700">
                <div className="aspect-video bg-zinc-700 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-red-400 mx-auto mb-2" />
                    <p className="text-zinc-400">Carte Google Maps</p>
                    <p className="text-sm text-zinc-500">60 Rue du Commerce, 38200 Vienne</p>
                  </div>
                </div>
                <div className="text-center">
                  <a
                    href="https://maps.google.com/?q=60+Rue+du+Commerce,+38200+Vienne"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-red-900 hover:bg-red-800 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <MapPin className="h-4 w-4" />
                    <span>Ouvrir dans Google Maps</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Envoyez-nous un Message</h2>
            
            {isSubmitted ? (
              <div className="bg-green-900/20 border border-green-900/30 rounded-lg p-8 text-center">
                <CheckCircle className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-green-400 mb-2">Message Envoyé !</h3>
                <p className="text-zinc-400">
                  Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Sujet *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="information">Demande d'information</option>
                    <option value="services">Question sur nos services</option>
                    <option value="horaires">Horaires d'ouverture</option>
                    <option value="fdj">Jeux FDJ / PMU</option>
                    <option value="colis">Dépôt/Retrait colis</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Votre message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-900 hover:bg-red-800 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Envoyer le Message</span>
                </button>

                <p className="text-sm text-zinc-500 text-center">
                  * Champs obligatoires. Vos données sont traitées conformément à notre politique de confidentialité.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-zinc-900 border border-zinc-700 rounded-lg p-8">
          <h3 className="text-xl font-semibold mb-4">Informations Pratiques</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-zinc-400">
            <div>
              <h4 className="font-medium text-white mb-2">Accès</h4>
              <p>Situé en centre-ville, accessible en transports en commun et en voiture. Parking gratuit à proximité.</p>
            </div>
            <div>
              <h4 className="font-medium text-white mb-2">Services Express</h4>
              <p>Pour vos achats rapides, nous proposons un service express aux heures de pointe.</p>
            </div>
            <div>
              <h4 className="font-medium text-white mb-2">Fidélité</h4>
              <p>Devenez client fidèle et bénéficiez d'avantages exclusifs sur certains services.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;