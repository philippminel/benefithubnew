import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowLeft, Calculator, FileText } from 'lucide-react';
import { benefits, benefitTypes } from '../data/benefits';
import { getProvidersByBenefit } from '../data/providers';
import { useCompare } from '../context/CompareContext';
import { AdSlot } from '../components/AdSlot';

export function BenefitDetail() {
  const { benefitId } = useParams<{ benefitId: string }>();
  const benefit = benefits.find(b => b.id === benefitId);
  const providers = benefit ? getProvidersByBenefit(benefit.id) : [];
  const { addProvider, selectedProviders } = useCompare();

  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  if (!benefit) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-neutral-900 mb-4">Benefit nicht gefunden</h1>
          <Link to="/benefits" className="text-blue-600 hover:underline">
            Zurück zur Übersicht →
          </Link>
        </div>
      </div>
    );
  }

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <section className="bg-white border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link to="/benefits" className="inline-flex items-center text-blue-600 hover:underline mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zur Übersicht
          </Link>

          <div className="flex items-start gap-4 mb-4">
            <span className={`px-3 py-1 rounded-full text-sm ${benefitTypes[benefit.benefitType].color}`}>
              {benefitTypes[benefit.benefitType].label}
            </span>
            {benefit.budgetModel && (
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                Wahlmodell möglich
              </span>
            )}
          </div>

          <h1 className="text-neutral-900 mb-4">{benefit.name}</h1>
          <p className="text-neutral-600 mb-6">
            {benefit.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 bg-blue-50 border border-blue-200 rounded-lg">
            <div>
              <span className="text-sm text-neutral-600">AG-Kosten</span>
              <p className="text-neutral-900">{benefit.employerCost}</p>
            </div>
            {benefit.maxAmount && (
              <div>
                <span className="text-sm text-neutral-600">Max. Betrag</span>
                <p className="text-neutral-900">{benefit.maxAmount}</p>
              </div>
            )}
            <div>
              <span className="text-sm text-neutral-600">Admin-Aufwand</span>
              <p className="text-neutral-900">
                {benefit.adminEffort === 'low' ? 'Niedrig' : benefit.adminEffort === 'medium' ? 'Mittel' : 'Hoch'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tax Logic & Prerequisites */}
        <section className="bg-white border border-neutral-200 rounded-xl p-6 mb-8">
          <h2 className="text-neutral-900 mb-4">Steuerlogik & Voraussetzungen</h2>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-neutral-700">
              <strong>Wichtig:</strong> Dies ist keine Steuerberatung. Die Informationen dienen nur der Orientierung. Konsultieren Sie bei steuerlichen Fragen Ihren Steuerberater.
            </p>
          </div>

          <div className="prose prose-sm max-w-none mb-6">
            <p className="text-neutral-700">{benefit.taxLogic}</p>
          </div>

          <h3 className="text-neutral-900 mb-3">Voraussetzungen</h3>
          <ul className="space-y-2">
            {benefit.prerequisites.map((prerequisite, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-neutral-700">{prerequisite}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Implementation */}
        <section className="bg-white border border-neutral-200 rounded-xl p-6 mb-8">
          <h2 className="text-neutral-900 mb-4">Umsetzung</h2>
          
          <div className="mb-6">
            <h3 className="text-neutral-900 mb-3">Schritte</h3>
            <ol className="space-y-3">
              {benefit.implementation.steps.map((step, index) => (
                <li key={index} className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">
                    {index + 1}
                  </span>
                  <span className="text-neutral-700 pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="mb-6">
            <h3 className="text-neutral-900 mb-2">Dauer</h3>
            <p className="text-neutral-700">{benefit.implementation.duration}</p>
          </div>

          <div>
            <h3 className="text-neutral-900 mb-3">Stolperfallen</h3>
            <ul className="space-y-2">
              {benefit.implementation.pitfalls.map((pitfall, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-red-600 flex-shrink-0">⚠</span>
                  <span className="text-neutral-700">{pitfall}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* AdSense Slot - Between sections */}
        <AdSlot className="mb-8" size="large" />

        {/* Provider List */}
        <section className="bg-white border border-neutral-200 rounded-xl p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-neutral-900">Anbieter ({providers.length})</h2>
            {selectedProviders.length > 0 && (
              <Link
                to="/vergleich"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                {selectedProviders.length} vergleichen
              </Link>
            )}
          </div>

          {providers.length === 0 ? (
            <p className="text-neutral-600 text-center py-8">
              Noch keine Anbieter für diesen Benefit erfasst.
            </p>
          ) : (
            <div className="space-y-4">
              {providers.map(provider => (
                <div key={provider.id} className="border border-neutral-200 rounded-lg p-4 hover:border-blue-500 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-neutral-900 mb-1">{provider.name}</h3>
                      <p className="text-sm text-neutral-600">{provider.tagline}</p>
                    </div>
                    <button
                      onClick={() => addProvider({ id: provider.id, name: provider.name })}
                      disabled={selectedProviders.some(p => p.id === provider.id)}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        selectedProviders.some(p => p.id === provider.id)
                          ? 'bg-neutral-200 text-neutral-500 cursor-not-allowed'
                          : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                      }`}
                    >
                      {selectedProviders.some(p => p.id === provider.id) ? 'Ausgewählt' : 'Zum Vergleich'}
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                    <div className="text-sm">
                      <span className="text-neutral-500">Pricing:</span>
                      <span className="ml-2 text-neutral-900">{provider.pricingRange || provider.pricingModel}</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-neutral-500">Delivery:</span>
                      <span className="ml-2 text-neutral-900">{provider.deliveryMethods.join(', ')}</span>
                    </div>
                  </div>

                  <Link
                    to={`/anbieter/${provider.id}`}
                    className="inline-block mt-3 text-sm text-blue-600 hover:underline"
                  >
                    Details ansehen →
                  </Link>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Related Tools */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            to="/rechner"
            className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl hover:shadow-lg transition-all"
          >
            <Calculator className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="text-neutral-900 mb-2">Rechner</h3>
            <p className="text-neutral-700">
              Kosten & Einsparungen berechnen
            </p>
          </Link>

          <Link
            to="/vorlagen"
            className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-xl hover:shadow-lg transition-all"
          >
            <FileText className="w-8 h-8 text-purple-600 mb-3" />
            <h3 className="text-neutral-900 mb-2">Vorlagen</h3>
            <p className="text-neutral-700">
              Checklisten & Kommunikations-Templates
            </p>
          </Link>
        </section>
      </div>

      {/* Last Updated */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <p className="text-sm text-neutral-500 text-center">
          Zuletzt aktualisiert: Dezember 2025
        </p>
      </div>
    </div>
  );
}
