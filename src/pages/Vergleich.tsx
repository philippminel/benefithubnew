import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Download, Mail, Share2 } from 'lucide-react';
import { useCompare } from '../context/CompareContext';
import { providers } from '../data/providers';

export function Vergleich() {
  const { selectedProviders, removeProvider } = useCompare();
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [email, setEmail] = useState('');
  const [viewMode, setViewMode] = useState<'attributes' | 'coverage'>('attributes');

  const selectedProviderData = selectedProviders
    .map(sp => providers.find(p => p.id === sp.id))
    .filter(Boolean) as typeof providers;

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Vergleich wird an ${email} gesendet!`);
    setShowEmailForm(false);
    setEmail('');
  };

  if (selectedProviders.length === 0) {
    return (
      <div className="min-h-screen bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-neutral-900 mb-4">Anbieter-Vergleich</h1>
          <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
            Noch keine Anbieter ausgewählt. Fügen Sie Anbieter hinzu, um sie objektiv zu vergleichen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/anbieter"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Anbieter entdecken
            </Link>
            <Link
              to="/benefits"
              className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Benefits durchsuchen
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Sticky Compare Bar */}
      <div className="sticky top-16 z-40 bg-white border-b border-neutral-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <h2 className="text-neutral-900">
                {selectedProviders.length} Anbieter im Vergleich
              </h2>
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode('attributes')}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    viewMode === 'attributes'
                      ? 'bg-blue-600 text-white'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  Attribute
                </button>
                <button
                  onClick={() => setViewMode('coverage')}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    viewMode === 'coverage'
                      ? 'bg-blue-600 text-white'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  Coverage
                </button>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setShowEmailForm(true)}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="hidden sm:inline">Per E-Mail senden</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-neutral-200 text-neutral-700 rounded-lg hover:bg-neutral-300 transition-colors">
                <Share2 className="w-4 h-4" />
                <span className="hidden sm:inline">Teilen</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Email Form Modal */}
      {showEmailForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <h3 className="text-neutral-900 mb-4">Vergleich per E-Mail senden</h3>
            <form onSubmit={handleEmailSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ihre.email@beispiel.de"
                required
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex-1 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Senden
                </button>
                <button
                  type="button"
                  onClick={() => setShowEmailForm(false)}
                  className="px-6 py-2 bg-neutral-200 text-neutral-700 rounded-lg hover:bg-neutral-300 transition-colors"
                >
                  Abbrechen
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Comparison Table */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            {viewMode === 'attributes' ? (
              <table className="w-full">
                <thead>
                  <tr className="bg-neutral-50 border-b border-neutral-200">
                    <th className="text-left p-4 sticky left-0 bg-neutral-50 z-10 min-w-[200px]">
                      <span className="text-neutral-900">Kriterium</span>
                    </th>
                    {selectedProviderData.map(provider => (
                      <th key={provider.id} className="p-4 min-w-[250px]">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-neutral-900 text-left mb-1">{provider.name}</h3>
                            <Link
                              to={`/anbieter/${provider.id}`}
                              className="text-sm text-blue-600 hover:underline"
                            >
                              Details →
                            </Link>
                          </div>
                          <button
                            onClick={() => removeProvider(provider.id)}
                            className="p-1 hover:bg-neutral-200 rounded transition-colors"
                          >
                            <X className="w-4 h-4 text-neutral-500" />
                          </button>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* Pricing Section */}
                  <tr className="bg-neutral-100">
                    <td colSpan={selectedProviderData.length + 1} className="p-3 sticky left-0">
                      <strong className="text-neutral-900">Pricing</strong>
                    </td>
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="p-4 sticky left-0 bg-white text-neutral-700">Setup-Gebühr</td>
                    {selectedProviderData.map(provider => (
                      <td key={provider.id} className="p-4 text-neutral-900">
                        {provider.attributes.pricing.setupFee}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="p-4 sticky left-0 bg-white text-neutral-700">Monatlich/MA</td>
                    {selectedProviderData.map(provider => (
                      <td key={provider.id} className="p-4 text-neutral-900">
                        {provider.attributes.pricing.monthlyPerEmployee}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="p-4 sticky left-0 bg-white text-neutral-700">Transaktionsgebühr</td>
                    {selectedProviderData.map(provider => (
                      <td key={provider.id} className="p-4 text-neutral-900">
                        {provider.attributes.pricing.transactionFee}
                      </td>
                    ))}
                  </tr>

                  {/* Coverage Section */}
                  <tr className="bg-neutral-100">
                    <td colSpan={selectedProviderData.length + 1} className="p-3 sticky left-0">
                      <strong className="text-neutral-900">Scope & Coverage</strong>
                    </td>
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="p-4 sticky left-0 bg-white text-neutral-700">Multi-Benefit</td>
                    {selectedProviderData.map(provider => (
                      <td key={provider.id} className="p-4">
                        {provider.attributes.coverage.multibenefitPlatform ? (
                          <span className="text-green-600">✓ Ja</span>
                        ) : (
                          <span className="text-neutral-400">— Nein</span>
                        )}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="p-4 sticky left-0 bg-white text-neutral-700">Benefits</td>
                    {selectedProviderData.map(provider => (
                      <td key={provider.id} className="p-4">
                        <div className="flex flex-wrap gap-1">
                          {provider.attributes.coverage.benefits.slice(0, 3).map(benefit => (
                            <span key={benefit} className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">
                              {benefit}
                            </span>
                          ))}
                          {provider.attributes.coverage.benefits.length > 3 && (
                            <span className="px-2 py-1 bg-neutral-100 text-neutral-600 rounded text-xs">
                              +{provider.attributes.coverage.benefits.length - 3}
                            </span>
                          )}
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* Compliance & Payroll */}
                  <tr className="bg-neutral-100">
                    <td colSpan={selectedProviderData.length + 1} className="p-3 sticky left-0">
                      <strong className="text-neutral-900">Compliance & Payroll</strong>
                    </td>
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="p-4 sticky left-0 bg-white text-neutral-700">Tax Compliance</td>
                    {selectedProviderData.map(provider => (
                      <td key={provider.id} className="p-4">
                        {provider.attributes.compliance.taxCompliance ? (
                          <span className="text-green-600">✓ Ja</span>
                        ) : (
                          <span className="text-neutral-400">— Nein</span>
                        )}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="p-4 sticky left-0 bg-white text-neutral-700">DATEV Integration</td>
                    {selectedProviderData.map(provider => (
                      <td key={provider.id} className="p-4">
                        {provider.attributes.compliance.datevIntegration ? (
                          <span className="text-green-600">✓ Ja</span>
                        ) : (
                          <span className="text-neutral-400">— Nein</span>
                        )}
                      </td>
                    ))}
                  </tr>

                  {/* Employee UX */}
                  <tr className="bg-neutral-100">
                    <td colSpan={selectedProviderData.length + 1} className="p-3 sticky left-0">
                      <strong className="text-neutral-900">Employee UX</strong>
                    </td>
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="p-4 sticky left-0 bg-white text-neutral-700">Mobile App</td>
                    {selectedProviderData.map(provider => (
                      <td key={provider.id} className="p-4">
                        {provider.attributes.employeeUX.app ? (
                          <span className="text-green-600">✓ Ja</span>
                        ) : (
                          <span className="text-neutral-400">— Nein</span>
                        )}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="p-4 sticky left-0 bg-white text-neutral-700">Benefit-Karte</td>
                    {selectedProviderData.map(provider => (
                      <td key={provider.id} className="p-4">
                        {provider.attributes.employeeUX.card ? (
                          <span className="text-green-600">✓ Ja</span>
                        ) : (
                          <span className="text-neutral-400">— Nein</span>
                        )}
                      </td>
                    ))}
                  </tr>

                  {/* Admin UX */}
                  <tr className="bg-neutral-100">
                    <td colSpan={selectedProviderData.length + 1} className="p-3 sticky left-0">
                      <strong className="text-neutral-900">Admin UX</strong>
                    </td>
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="p-4 sticky left-0 bg-white text-neutral-700">Dashboard</td>
                    {selectedProviderData.map(provider => (
                      <td key={provider.id} className="p-4">
                        {provider.attributes.adminUX.dashboard ? (
                          <span className="text-green-600">✓ Ja</span>
                        ) : (
                          <span className="text-neutral-400">— Nein</span>
                        )}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="p-4 sticky left-0 bg-white text-neutral-700">Support</td>
                    {selectedProviderData.map(provider => (
                      <td key={provider.id} className="p-4 text-neutral-900">
                        {provider.attributes.adminUX.support}
                      </td>
                    ))}
                  </tr>

                  {/* Trust & Reviews */}
                  <tr className="bg-neutral-100">
                    <td colSpan={selectedProviderData.length + 1} className="p-3 sticky left-0">
                      <strong className="text-neutral-900">Trust & Reviews</strong>
                    </td>
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="p-4 sticky left-0 bg-white text-neutral-700">Trustpilot</td>
                    {selectedProviderData.map(provider => (
                      <td key={provider.id} className="p-4">
                        {provider.reviews.trustpilot ? (
                          <span className="text-neutral-900">
                            {provider.reviews.trustpilot.score} ⭐ ({provider.reviews.trustpilot.count})
                          </span>
                        ) : (
                          <span className="text-neutral-400">k.A.</span>
                        )}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            ) : (
              /* Coverage Matrix */
              <table className="w-full">
                <thead>
                  <tr className="bg-neutral-50 border-b border-neutral-200">
                    <th className="text-left p-4 sticky left-0 bg-neutral-50 z-10 min-w-[200px]">
                      <span className="text-neutral-900">Benefit-Kategorie</span>
                    </th>
                    {selectedProviderData.map(provider => (
                      <th key={provider.id} className="p-4 min-w-[200px]">
                        <span className="text-neutral-900">{provider.name}</span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {['Essenszuschuss', 'Sachbezug 50€', 'Mobilität', 'Fitness', 'Weiterbildung', 'JobRad'].map(benefit => (
                    <tr key={benefit} className="border-b border-neutral-200">
                      <td className="p-4 sticky left-0 bg-white text-neutral-700">{benefit}</td>
                      {selectedProviderData.map(provider => (
                        <td key={provider.id} className="p-4 text-center">
                          {provider.attributes.coverage.benefits.some(b => b.toLowerCase().includes(benefit.toLowerCase())) ? (
                            <span className="text-green-600 text-xl">✓</span>
                          ) : (
                            <span className="text-neutral-300">—</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <p className="text-neutral-600 mb-4">
            Noch unsicher? Lassen Sie uns eine individuelle Analyse erstellen.
          </p>
          <Link
            to="/analyse"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Kostenlose Analyse anfragen
          </Link>
        </div>
      </div>
    </div>
  );
}
