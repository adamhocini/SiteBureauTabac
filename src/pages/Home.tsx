import React from 'react';
import { MapPin, Clock, Phone, AlertTriangle, Newspaper, Gamepad2, Users as Horse, Package, Smartphone, Cigarette, PenTool, CreditCard } from 'lucide-react';

const Home: React.FC = () => {
  const services = [
    { icon: Newspaper, title: 'Presse & Magazines', description: 'Quotidiens, hebdomadaires et magazines spécialisés' },
    { icon: Gamepad2, title: 'Jeux FDJ', description: 'Loto, Euromillions, Cash et tous les jeux à gratter' },
    { icon: Horse, title: 'PMU', description: 'Paris hippiques et pronostics' },
    { icon: Package, title: 'Dépôt Colis', description: 'Mondial Relay, Relais Colis et autres services' },
    { icon: Smartphone, title: 'Recharge Mobile', description: 'Toutes les cartes prépayées et recharges' },
    { icon: Cigarette, title: 'Produits de Vapotage', description: 'E-liquides et cigarettes électroniques' },
    { icon: PenTool, title: 'Papeterie', description: 'Fournitures, briquets et cartes postales' },
    { icon: CreditCard, title: 'Paiement Factures', description: 'Service de paiement de proximité DGFiP' },
  ];

  return (
    <div>
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

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-zinc-900 to-zinc-950 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6466308/pexels-photo-6466308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">Tabac de l'Hôtel de Ville</span>
              <span className="block text-2xl md:text-3xl text-red-400 mt-2">7 jours sur 7</span>
            </h1>
            <p className="text-xl text-zinc-300 mb-8 max-w-3xl mx-auto">
              Votre bureau de tabac de confiance au cœur de Vienne. 
              Nous vous accueillons tous les jours avec le sourire pour tous vos besoins quotidiens.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2 text-zinc-300">
                <MapPin className="h-5 w-5 text-red-400" />
                <span>60 Rue du Commerce, 38200 Vienne</span>
              </div>
              <div className="flex items-center space-x-2 text-zinc-300">
                <Clock className="h-5 w-5 text-red-400" />
                <span>Ouvert 7/7 - 7h à 20h</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Services</h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Un large éventail de services pour répondre à tous vos besoins quotidiens
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-6 hover:bg-zinc-800 transition-all duration-300 hover:scale-105"
              >
                <div className="bg-red-900/20 p-3 rounded-lg w-fit mb-4">
                  <service.icon className="h-8 w-8 text-red-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-zinc-400 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours Section */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Horaires d'Ouverture
              </h2>
              <p className="text-xl text-zinc-400 mb-8">
                Nous sommes là pour vous 7 jours sur 7, avec des horaires étendus pour votre commodité.
              </p>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-zinc-800">
                  <span className="font-medium">Lundi - Samedi</span>
                  <span className="text-red-400 font-semibold">7h00 - 20h00</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-zinc-800">
                  <span className="font-medium">Dimanche</span>
                  <span className="text-red-400 font-semibold">8h00 - 19h00</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-zinc-800">
                  <span className="font-medium">Jours fériés</span>
                  <span className="text-red-400 font-semibold">8h00 - 19h00</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-green-900/20 border border-green-900/30 rounded-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-green-400 font-medium">Ouvert maintenant</span>
                </div>
                <p className="text-sm text-zinc-400 mt-1">Ferme à 20h00 aujourd'hui</p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-zinc-800 rounded-lg p-8 border border-zinc-700">
                <h3 className="text-xl font-semibold mb-4">Informations Pratiques</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-red-400 mt-0.5" />
                    <div>
                      <p className="font-medium">Adresse</p>
                      <p className="text-zinc-400 text-sm">60 Rue du Commerce<br />38200 Vienne, France</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-red-400 mt-0.5" />
                    <div>
                      <p className="font-medium">Téléphone</p>
                      <p className="text-zinc-400 text-sm">04 74 85 XX XX</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Package className="h-5 w-5 text-red-400 mt-0.5" />
                    <div>
                      <p className="font-medium">Stationnement</p>
                      <p className="text-zinc-400 text-sm">Places gratuites à proximité</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Notre Localisation</h2>
            <p className="text-xl text-zinc-400">
              Idéalement situé au cœur de Vienne, facilement accessible
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Comment nous trouver</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-red-900/20 p-2 rounded-lg">
                    <MapPin className="h-5 w-5 text-red-400" />
                  </div>
                  <div>
                    <p className="font-medium">En centre-ville</p>
                    <p className="text-zinc-400 text-sm">Au cœur du quartier commerçant de Vienne</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-red-900/20 p-2 rounded-lg">
                    <Package className="h-5 w-5 text-red-400" />
                  </div>
                  <div>
                    <p className="font-medium">Accès facile</p>
                    <p className="text-zinc-400 text-sm">Transports en commun et parking à proximité</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-red-900/20 p-2 rounded-lg">
                    <Clock className="h-5 w-5 text-red-400" />
                  </div>
                  <div>
                    <p className="font-medium">Horaires étendus</p>
                    <p className="text-zinc-400 text-sm">Ouvert 7 jours sur 7 pour votre commodité</p>
                  </div>
                </div>
              </div>
            </div>

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
                  <span>Voir sur Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;