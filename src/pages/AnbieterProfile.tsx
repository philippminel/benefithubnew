import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { ArrowLeft, ExternalLink, ChevronDown, ChevronUp, Star, Plus } from 'lucide-react';
import { providers } from '../data/providers';
import { useCompare } from '../context/CompareContext';
import { AdSlot } from '../components/AdSlot';

export function AnbieterProfile() {
  const { anbieterId } = useParams<{ anbieterId: string }>();
  const provider = providers.find(p => p.id === anbieterId);
  const { addProvider, selectedProviders } = useCompare();

  const [showFullReviews, setShowFullReviews] = useState(false);
  const [showReddit, setShowReddit] = useState(false);

  if (!provider) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-neutral-900 mb-4">Anbieter nicht gefunden</h1>
          <Link to="/anbieter" className="text-blue-600 hover:underline">
            Zurück zur Übersicht →
          </Link>
        </div>
      </div>
    );
  }

  const isSelected = selectedProviders.some(p => p.id === provider.id);

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <section className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link to="/anbieter" className="inline-flex items-center text-blue-600 hover:underline mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zur Übersicht
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h1 className="text-neutral-900 mb-3">{provider.name}</h1>
              <p className="text-neutral-600 mb-6">{provider.tagline}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {provider.benefits.map(benefit => (
                  <span key={benefit} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg">
                    {benefit}
                  </span>
                ))}
              </div>

              {/* Review Chips */}
              {(provider.reviews.trustpilot || provider.reviews.kununu || provider.reviews.omr) && (
                <div className="flex flex-wrap gap-4">
                  {provider.reviews.trustpilot && (
                    <a
                      href={provider.reviews.trustpilot.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-lg hover:border-green-400 transition-colors"
                    >
                      <Star className="w-4 h-4 text-green-600 fill-green-600" />
                      <span className="text-sm text-neutral-900">
                        {provider.reviews.trustpilot.score} Trustpilot
                      </span>
                      <span className="text-xs text-neutral-500">
                        ({provider.reviews.trustpilot.count})
                      </span>
                      <ExternalLink className="w-3 h-3 text-neutral-400" />
                    </a>
                  )}

                  {provider.reviews.kununu && (
                    <a
                      href={provider.reviews.kununu.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-lg hover:border-blue-400 transition-colors"
                    >
                      <Star className="w-4 h-4 text-blue-600 fill-blue-600" />
                      <span className="text-sm text-neutral-900">
                        {provider.reviews.kununu.score} Kununu
                      </span>
                      <span className="text-xs text-neutral-500">
                        ({provider.reviews.kununu.count})
                      </span>
                      <ExternalLink className="w-3 h-3 text-neutral-400" />
                    </a>
                  )}

                  {provider.reviews.omr && (
                    <a
                      href={provider.reviews.omr.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-purple-50 border border-purple-200 rounded-lg hover:border-purple-400 transition-colors"
                    >
                      <Star className="w-4 h-4 text-purple-600 fill-purple-600" />
                      <span className="text-sm text-neutral-900">
                        {provider.reviews.omr.score} OMR
                      </span>
                      <span className="text-xs text-neutral-500">
                        ({provider.reviews.omr.count})
                      </span>
                      <ExternalLink className="w-3 h-3 text-neutral-400" />
                    </a>
                  )}
                </div>
              )}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-6">
                <button
                  onClick={() => addProvider({ id: provider.id, name: provider.name })}
                  disabled={isSelected}
                  className={`w-full mb-3 px-6 py-3 rounded-lg transition-colors ${
                    isSelected
                      ? 'bg-neutral-200 text-neutral-500 cursor-not-allowed'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {isSelected ? (
                    '✓ Im Vergleich'
                  ) : (
                    <>
                      <Plus className="w-4 h-4 inline mr-2" />
                      Zum Vergleich hinzufügen
                    </>
                  )}
                </button>

                {selectedProviders.length > 0 && (
                  <Link
                    to="/vergleich"
                    className="block w-full text-center px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    {selectedProviders.length} Anbieter vergleichen
                  </Link>
                )}

                <div className="mt-6 pt-6 border-t border-blue-200">
                  <p className="text-xs text-neutral-600">
                    <strong>Transparenz:</strong> Links zu Anbietern können Affiliate-Links sein. Vergleiche bleiben objektiv.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop: Sidebar Layout, Mobile: Stacked */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Facts */}
            <section className="bg-white border border-neutral-200 rounded-xl p-6">
              <h2 className="text-neutral-900 mb-6">Facts</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {provider.founded && (
                  <div>
                    <span className="text-sm text-neutral-500">Gegründet</span>
                    <p className="text-neutral-900">{provider.founded}</p>
                  </div>
                )}
                {provider.customers && (
                  <div>
                    <span className="text-sm text-neutral-500">Kunden</span>
                    <p className="text-neutral-900">{provider.customers}</p>
                  </div>
                )}
                <div>
                  <span className="text-sm text-neutral-500">Pricing-Modell</span>
                  <p className="text-neutral-900">{provider.pricingModel}</p>
                </div>
                {provider.pricingRange && (
                  <div>
                    <span className="text-sm text-neutral-500">Preisspanne</span>
                    <p className="text-neutral-900">{provider.pricingRange}</p>
                  </div>
                )}
                <div>
                  <span className="text-sm text-neutral-500">Wahlmodell</span>
                  <p className="text-neutral-900">{provider.budgetModel ? 'Ja' : 'Nein'}</p>
                </div>
                <div>
                  <span className="text-sm text-neutral-500">Mitarbeitergruppen</span>
                  <p className="text-neutral-900">{provider.eligibilityRules ? 'Ja' : 'Nein'}</p>
                </div>
              </div>
            </section>

            {/* Delivery & Integration */}
            <section className="bg-white border border-neutral-200 rounded-xl p-6">
              <h2 className="text-neutral-900 mb-6">Delivery & Integration</h2>
              <div className="space-y-4">
                <div>
                  <span className="text-sm text-neutral-500 block mb-2">Delivery-Formate</span>
                  <div className="flex flex-wrap gap-2">
                    {provider.deliveryMethods.map(method => (
                      <span key={method} className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded">
                        {method}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-sm text-neutral-500 block mb-2">Payroll-Integration</span>
                  <div className="flex flex-wrap gap-2">
                    {provider.payrollIntegration.map(integration => (
                      <span key={integration} className="px-3 py-1 bg-blue-50 text-blue-700 rounded">
                        {integration}
                      </span>
                    ))}
                  </div>
                </div>

                {provider.attributes.integrations.length > 0 && (
                  <div>
                    <span className="text-sm text-neutral-500 block mb-2">HR-Systeme</span>
                    <div className="flex flex-wrap gap-2">
                      {provider.attributes.integrations.map(integration => (
                        <span key={integration} className="px-3 py-1 bg-purple-50 text-purple-700 rounded">
                          {integration}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* Review Summary */}
            <section className="bg-white border border-neutral-200 rounded-xl p-6">
              <h2 className="text-neutral-900 mb-4">Review-Zusammenfassung</h2>
              <ul className="space-y-2 mb-4">
                {provider.reviewSummary.slice(0, showFullReviews ? undefined : 5).map((summary, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-neutral-700">{summary}</span>
                  </li>
                ))}
              </ul>
              {provider.reviewSummary.length > 5 && (
                <button
                  onClick={() => setShowFullReviews(!showFullReviews)}
                  className="flex items-center gap-2 text-blue-600 hover:underline"
                >
                  {showFullReviews ? (
                    <>
                      Weniger anzeigen <ChevronUp className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      Mehr Details <ChevronDown className="w-4 h-4" />
                    </>
                  )}
                </button>
              )}
            </section>

            {/* Reddit Community Voices */}
            <section className="bg-white border border-neutral-200 rounded-xl p-6">
              <button
                onClick={() => setShowReddit(!showReddit)}
                className="w-full flex items-center justify-between text-left"
              >
                <h2 className="text-neutral-900">Community-Stimmen (Reddit)</h2>
                {showReddit ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>

              {showReddit && (
                <div className="mt-4">
                  <ul className="space-y-2 mb-4">
                    {provider.redditSummary.map((summary, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-orange-600 flex-shrink-0">↗</span>
                        <span className="text-neutral-700">{summary}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`https://www.reddit.com/search/?q=${encodeURIComponent(provider.name + ' benefits')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline"
                  >
                    Auf Reddit suchen <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}
            </section>
          </div>

          {/* Sidebar (Desktop) / Below content (Mobile) */}
          <div className="lg:col-span-1">
            {/* AdSense Slot - Desktop sidebar */}
            <div className="hidden lg:block mb-6">
              <AdSlot size="large" />
            </div>

                {/* Affiliate CTA */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl p-6 mb-6">
                  <h3 className="text-neutral-900 mb-3">Anbieter kontaktieren</h3>
                  <p className="text-sm text-neutral-700 mb-4">
                    Direkt beim Anbieter anfragen und individuelle Konditionen erhalten.
                  </p>
                
                  <Link
                    to="/analyse"
                    className="block w-full text-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Zur Analyse <ExternalLink className="w-4 h-4 inline ml-2" />
                  </Link>
                
                  <p className="text-xs text-neutral-600 mt-3">
                    <strong>Transparenz:</strong> Affiliate-Link. Keine Extrakosten für Sie.
                  </p>
                </div>

            {/* AdSense Slot - Mobile (between sections) */}
            <div className="lg:hidden mb-6">
              <AdSlot size="large" />
            </div>
          </div>
        </div>
      </div>

      {/* Last Updated */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <p className="text-sm text-neutral-500 text-center">
          Zuletzt aktualisiert: Dezember 2025
        </p>
      </div>
    </div>
  );
}
