import React from 'react';
import { MapPin, Phone, Clock, AlertTriangle } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-zinc-400">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">60 Rue du Commerce, 38200 Vienne</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">04 74 85 XX XX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span className="text-sm">Ouvert 7 jours sur 7</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Horaires</h3>
            <div className="space-y-2 text-zinc-400 text-sm">
              <div className="flex justify-between">
                <span>Lundi - Samedi</span>
                <span>7h00 - 20h00</span>
              </div>
              <div className="flex justify-between">
                <span>Dimanche</span>
                <span>8h00 - 19h00</span>
              </div>
              <div className="flex justify-between">
                <span>Jours fériés</span>
                <span>8h00 - 19h00</span>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Informations</h3>
            <div className="space-y-2">
              <button
                onClick={() => setCurrentPage('legal')}
                className="block text-sm text-zinc-400 hover:text-white transition-colors"
              >
                Mentions légales
              </button>
              <button
                onClick={() => setCurrentPage('legal')}
                className="block text-sm text-zinc-400 hover:text-white transition-colors"
              >
                Politique sur le tabac
              </button>
              <p className="text-xs text-zinc-500 mt-4">
                Établissement agréé pour la vente de tabac et la distribution de timbres fiscaux
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-8 pt-8 text-center">
          <p className="text-zinc-500 text-sm">
            © 2024 Tabac de l'Hôtel de Ville 7/7. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;