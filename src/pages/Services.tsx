import React from 'react';
import { Newspaper, Gamepad2, Users as Horse, Package, Smartphone, Cigarette, PenTool, CreditCard, Banknote, Ticket, AlertTriangle } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Cigarette,
      title: 'Vente de Tabac',
      description: 'Cigarettes, tabac à rouler, cigares et cigarillos de toutes les marques principales.',
      details: [
        'Large sélection de cigarettes',
        'Tabac à rouler de qualité',
        'Cigares et cigarillos',
        'Accessoires fumeurs'
      ],
      warning: 'Vente interdite aux mineurs - Pièce d\'identité exigée'
    },
    {
      icon: Newspaper,
      title: 'Presse & Magazines',
      description: 'Quotidiens nationaux et régionaux, magazines spécialisés et hebdomadaires.',
      details: [
        'Presse quotidienne nationale',
        'Journaux régionaux',
        'Magazines spécialisés',
        'Hebdomadaires et mensuels'
      ]
    },
    {
      icon: Gamepad2,
      title: 'Jeux de la FDJ',
      description: 'Tous les jeux de la Française des Jeux : Loto, Euromillions, Cash et grattages.',
      details: [
        'Loto et Euromillions',
        'Jeux de grattage Cash',
        'Keno et Amigo',
        'Jeux instantanés'
      ]
    },
    {
      icon: Horse,
      title: 'PMU',
      description: 'Paris hippiques sur toutes les courses françaises et internationales.',
      details: [
        'Paris hippiques quotidiens',
        'Courses françaises et internationales',
        'Pronostics et conseils',
        'Retrait des gains'
      ]
    },
    {
      icon: Package,
      title: 'Dépôt et Retrait Colis',
      description: 'Service de dépôt et retrait de colis avec plusieurs transporteurs partenaires.',
      details: [
        'Mondial Relay',
        'Relais Colis',
        'DPD Pickup',
        'Chronopost'
      ]
    },
    {
      icon: Smartphone,
      title: 'Recharge Mobile & Cartes',
      description: 'Recharges mobiles et cartes prépayées pour tous les opérateurs.',
      details: [
        'Recharges Orange, SFR, Bouygues',
        'Cartes prépayées Free Mobile',
        'Cartes téléphoniques internationales',
        'Cartes cadeaux diverses'
      ]
    },
    {
      icon: Cigarette,
      title: 'Produits de Vapotage',
      description: 'E-liquides, cigarettes électroniques et accessoires de vapotage.',
      details: [
        'E-liquides français et européens',
        'Cigarettes électroniques jetables',
        'Résistances et atomiseurs',
        'Batteries et chargeurs'
      ],
      warning: 'Vente interdite aux mineurs - Usage réglementé'
    },
    {
      icon: PenTool,
      title: 'Papeterie & Accessoires',
      description: 'Fournitures de bureau, briquets, cartes postales et petite maroquinerie.',
      details: [
        'Stylos et fournitures bureau',
        'Briquets et allumettes',
        'Cartes postales locales',
        'Petite maroquinerie'
      ]
    },
    {
      icon: CreditCard,
      title: 'Paiement de Factures',
      description: 'Service de paiement de proximité pour vos factures et amendes.',
      details: [
        'Factures EDF, GDF, eaux',
        'Amendes et contraventions',
        'Impôts et taxes',
        'Factures téléphoniques'
      ]
    },
    {
      icon: Banknote,
      title: 'Transfert d\'Argent',
      description: 'Envoi et réception d\'argent en France et à l\'international.',
      details: [
        'Western Union',
        'Transferts nationaux',
        'Transferts internationaux',
        'Commission attractive'
      ]
    },
    {
      icon: Ticket,
      title: 'Billetterie',
      description: 'Vente de billets pour concerts, spectacles et transports en commun.',
      details: [
        'Billets de concert',
        'Spectacles et théâtre',
        'Tickets de transport',
        'Événements sportifs'
      ]
    }
  ];

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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Services</h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Découvrez l'ensemble de nos services disponibles 7 jours sur 7. 
            Nous mettons tout en œuvre pour répondre à vos besoins quotidiens avec professionnalisme et convivialité.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-zinc-900/50 border border-zinc-700 rounded-lg p-8 hover:bg-zinc-900 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-red-900/20 p-3 rounded-lg flex-shrink-0">
                    <Icon className="h-8 w-8 text-red-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-zinc-400 mb-4">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center space-x-2 text-sm text-zinc-300">
                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {service.warning && (
                    <div className="mt-4 p-3 bg-amber-900/20 border border-amber-900/30 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <AlertTriangle className="h-4 w-4 text-amber-400" />
                        <p className="text-sm text-amber-400 font-medium">{service.warning}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-4">Moyens de Paiement</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Espèces</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Carte bancaire (sans contact)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Chèques (sur présentation d'une pièce d'identité)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Tickets restaurant (selon les produits)</span>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-4">Informations Importantes</h3>
            <div className="space-y-3 text-zinc-400">
              <p className="text-sm">
                • Les gains de jeux sont payables immédiatement jusqu'à 300€
              </p>
              <p className="text-sm">
                • Service de dépôt-vente pour certains produits
              </p>
              <p className="text-sm">
                • Conseils personnalisés pour tous nos services
              </p>
              <p className="text-sm">
                • Respect strict de la réglementation en vigueur
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;