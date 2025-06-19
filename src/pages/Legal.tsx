import React from 'react';
import { AlertTriangle, Shield, FileText, Scale } from 'lucide-react';

const Legal: React.FC = () => {
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Mentions Légales</h1>
          <p className="text-xl text-zinc-400">
            Informations légales et politique sur le tabac
          </p>
        </div>

        <div className="space-y-12">
          {/* Identification */}
          <section className="bg-zinc-900 border border-zinc-700 rounded-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-red-900/20 p-2 rounded-lg">
                <FileText className="h-6 w-6 text-red-400" />
              </div>
              <h2 className="text-2xl font-semibold">Identification de l'Établissement</h2>
            </div>
            
            <div className="space-y-4 text-zinc-300">
              <div>
                <strong>Raison sociale :</strong> Tabac de l'Hôtel de Ville 7/7
              </div>
              <div>
                <strong>Forme juridique :</strong> Entreprise individuelle
              </div>
              <div>
                <strong>Adresse :</strong> 60 Rue du Commerce, 38200 Vienne, France
              </div>
              <div>
                <strong>Téléphone :</strong> 04 74 85 XX XX
              </div>
              <div>
                <strong>SIRET :</strong> XXX XXX XXX XXXXX
              </div>
              <div>
                <strong>Licence :</strong> Débit de tabac ordinaire n° XXXXX
              </div>
              <div>
                <strong>Directeur de publication :</strong> [Nom du gérant]
              </div>
            </div>
          </section>

          {/* Tobacco Policy */}
          <section className="bg-zinc-900 border border-zinc-700 rounded-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-red-900/20 p-2 rounded-lg">
                <AlertTriangle className="h-6 w-6 text-red-400" />
              </div>
              <h2 className="text-2xl font-semibold">Politique sur le Tabac</h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-red-900/20 border border-red-900/30 rounded-lg p-6">
                <h3 className="font-semibold text-red-400 mb-3">⚠️ AVERTISSEMENTS IMPORTANTS</h3>
                <ul className="space-y-2 text-sm text-red-300">
                  <li>• La vente de tabac est strictement interdite aux mineurs de moins de 18 ans</li>
                  <li>• Une pièce d'identité sera systématiquement demandée en cas de doute</li>
                  <li>• Ce site internet ne propose aucune vente en ligne de produits du tabac</li>
                  <li>• Fumer tue - Le tabac nuit gravement à votre santé et à celle de votre entourage</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold">Réglementation Applicable</h3>
              <div className="text-zinc-300 space-y-3">
                <p>
                  Notre établissement respecte scrupuleusement la législation française en matière de vente de tabac, 
                  notamment :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Code de la santé publique (articles L3511-1 et suivants)</li>
                  <li>Code général des impôts (articles 564 et suivants)</li>
                  <li>Décret n° 2006-1386 du 15 novembre 2006</li>
                  <li>Arrêté du 15 avril 2010 relatif aux modalités d'interdiction de vente</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold">Obligations du Débitant</h3>
              <div className="text-zinc-300 space-y-2">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Vérification systématique de l'âge pour toute vente de produits du tabac</li>
                  <li>Affichage des prix et des messages sanitaires réglementaires</li>
                  <li>Respect de l'interdiction de publicité pour le tabac</li>
                  <li>Tenue d'un registre des achats et ventes</li>
                  <li>Déclaration des stocks auprès de l'administration fiscale</li>
                </ul>
              </div>
            </div>
          </section>

          {/* E-cigarettes */}
          <section className="bg-zinc-900 border border-zinc-700 rounded-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-red-900/20 p-2 rounded-lg">
                <Shield className="h-6 w-6 text-red-400" />
              </div>
              <h2 className="text-2xl font-semibold">Produits de Vapotage</h2>
            </div>
            
            <div className="space-y-4 text-zinc-300">
              <div className="bg-amber-900/20 border border-amber-900/30 rounded-lg p-4">
                <p className="text-amber-400 font-medium">
                  ⚠️ La vente de cigarettes électroniques et d'e-liquides contenant de la nicotine 
                  est interdite aux mineurs de moins de 18 ans.
                </p>
              </div>
              <p>
                Conformément à la réglementation en vigueur (Directive 2014/40/UE transposée en droit français), 
                nous respectons les obligations suivantes :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Vérification de l'âge pour la vente de produits de vapotage</li>
                <li>Respect des limites de concentration en nicotine (20mg/ml maximum)</li>
                <li>Vente uniquement de produits conformes aux normes européennes</li>
                <li>Information sur les risques liés au vapotage</li>
              </ul>
            </div>
          </section>

          {/* Data Protection */}
          <section className="bg-zinc-900 border border-zinc-700 rounded-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-red-900/20 p-2 rounded-lg">
                <Shield className="h-6 w-6 text-red-400" />
              </div>
              <h2 className="text-2xl font-semibold">Protection des Données</h2>
            </div>
            
            <div className="space-y-4 text-zinc-300">
              <h3 className="text-lg font-semibold">Collecte des Données</h3>
              <p>
                Ce site web collecte uniquement les données nécessaires au traitement de vos demandes 
                de contact via le formulaire prévu à cet effet.
              </p>
              
              <h3 className="text-lg font-semibold">Utilisation des Données</h3>
              <p>
                Les données personnelles collectées sont utilisées exclusivement pour :
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Répondre à vos demandes d'information</li>
                <li>Améliorer nos services</li>
                <li>Respecter nos obligations légales</li>
              </ul>

              <h3 className="text-lg font-semibold">Vos Droits</h3>
              <p>
                Conformément au RGPD, vous disposez des droits d'accès, de rectification, 
                d'effacement et de portabilité de vos données personnelles. 
                Pour exercer ces droits, contactez-nous à l'adresse : contact@tabac-hoteldeville.fr
              </p>
            </div>
          </section>

          {/* Legal Disclaimer */}
          <section className="bg-zinc-900 border border-zinc-700 rounded-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-red-900/20 p-2 rounded-lg">
                <Scale className="h-6 w-6 text-red-400" />
              </div>
              <h2 className="text-2xl font-semibold">Responsabilité</h2>
            </div>
            
            <div className="space-y-4 text-zinc-300">
              <p>
                Ce site internet a pour seul objet la présentation de notre établissement et 
                de nos services. Il ne constitue en aucun cas une boutique en ligne.
              </p>
              <p>
                <strong>Aucune vente en ligne :</strong> Nous ne proposons aucune vente en ligne 
                de produits du tabac, conformément à la réglementation française.
              </p>
              <p>
                <strong>Informations :</strong> Nous nous efforçons de maintenir les informations 
                de ce site à jour, mais ne pouvons garantir leur exactitude absolue.
              </p>
            </div>
          </section>

          {/* Contact Legal */}
          <section className="bg-zinc-800 border border-zinc-700 rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">Questions Légales</h3>
            <p className="text-zinc-400 mb-4">
              Pour toute question concernant ces mentions légales ou notre politique sur le tabac
            </p>
            <div className="text-sm text-zinc-400">
              <p>Contactez-nous : 04 74 85 XX XX</p>
              <p>Email : contact@tabac-hoteldeville.fr</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Legal;