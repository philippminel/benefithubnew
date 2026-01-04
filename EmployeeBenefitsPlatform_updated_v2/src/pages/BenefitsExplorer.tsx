import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, ChevronDown } from 'lucide-react';
import { benefits, benefitTypes } from '../data/benefits';

export function BenefitsExplorer() {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedDelivery, setSelectedDelivery] = useState<string>('all');
  const [budgetModelOnly, setBudgetModelOnly] = useState(false);
  const [adminEffort, setAdminEffort] = useState<string>('all');

  const filteredBenefits = benefits.filter(benefit => {
    if (selectedType !== 'all' && benefit.benefitType !== selectedType) return false;
    if (selectedDelivery !== 'all' && !benefit.deliveryMethods.includes(selectedDelivery)) return false;
    if (budgetModelOnly && !benefit.budgetModel) return false;
    if (adminEffort !== 'all' && benefit.adminEffort !== adminEffort) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <section className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-neutral-900 mb-4">Benefits Explorer</h1>
          <p className="text-neutral-600 max-w-3xl">
            Alle Employee Benefits im Überblick. Filtern Sie nach Steuerlogik, Delivery-Format, Wahlmodell und Verwaltungsaufwand.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-neutral-600" />
            <span className="text-neutral-900">Filter</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Benefit Type */}
            <div>
              <label className="block text-sm text-neutral-700 mb-2">Benefit-Typ</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-2 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">Alle</option>
                <option value="steuerfrei">Steuerfrei / AG-Zuschuss</option>
                <option value="entgeltumwandlung">Entgeltumwandlung</option>
                <option value="rabatte">Rabatte & Vorteile</option>
              </select>
            </div>

            {/* Delivery Method */}
            <div>
              <label className="block text-sm text-neutral-700 mb-2">Delivery</label>
              <select
                value={selectedDelivery}
                onChange={(e) => setSelectedDelivery(e.target.value)}
                className="w-full px-4 py-2 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">Alle</option>
                <option value="App">App</option>
                <option value="Karte">Karte</option>
                <option value="Portal">Portal</option>
                <option value="Beleg-Upload">Beleg-Upload</option>
                <option value="Erstattung">Erstattung</option>
              </select>
            </div>

            {/* Budget Model */}
            <div>
              <label className="block text-sm text-neutral-700 mb-2">Wahlmodell</label>
              <div className="flex items-center h-10">
                <input
                  type="checkbox"
                  id="budgetModel"
                  checked={budgetModelOnly}
                  onChange={(e) => setBudgetModelOnly(e.target.checked)}
                  className="w-4 h-4 text-blue-600 border-neutral-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="budgetModel" className="ml-2 text-sm text-neutral-700">
                  Nur mit Budget/Wahlmodell
                </label>
              </div>
            </div>

            {/* Admin Effort */}
            <div>
              <label className="block text-sm text-neutral-700 mb-2">Admin-Aufwand</label>
              <select
                value={adminEffort}
                onChange={(e) => setAdminEffort(e.target.value)}
                className="w-full px-4 py-2 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">Alle</option>
                <option value="low">Niedrig</option>
                <option value="medium">Mittel</option>
                <option value="high">Hoch</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6">
          <p className="text-neutral-600">
            {filteredBenefits.length} {filteredBenefits.length === 1 ? 'Benefit' : 'Benefits'} gefunden
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBenefits.map(benefit => (
            <Link
              key={benefit.id}
              to={`/benefits/${benefit.id}`}
              className="group bg-white border border-neutral-200 rounded-xl p-6 hover:border-blue-500 hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <span className={`px-3 py-1 rounded-full text-xs ${benefitTypes[benefit.benefitType].color}`}>
                  {benefitTypes[benefit.benefitType].label}
                </span>
                {benefit.budgetModel && (
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">
                    Wahlmodell
                  </span>
                )}
              </div>

              <h3 className="text-neutral-900 mb-2 group-hover:text-blue-600 transition-colors">
                {benefit.name}
              </h3>
              
              <p className="text-neutral-600 mb-4">
                {benefit.shortDescription}
              </p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-500">AG-Kosten:</span>
                  <span className="text-neutral-900">{benefit.employerCost}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-500">Admin-Aufwand:</span>
                  <span className={`px-2 py-1 rounded text-xs ${
                    benefit.adminEffort === 'low' ? 'bg-green-100 text-green-800' :
                    benefit.adminEffort === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {benefit.adminEffort === 'low' ? 'Niedrig' : benefit.adminEffort === 'medium' ? 'Mittel' : 'Hoch'}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {benefit.deliveryMethods.slice(0, 3).map(method => (
                  <span key={method} className="px-2 py-1 bg-neutral-100 text-neutral-700 rounded text-xs">
                    {method}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-neutral-200">
                <span className="text-blue-600 group-hover:underline">
                  Anbieter vergleichen →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {filteredBenefits.length === 0 && (
          <div className="text-center py-12">
            <p className="text-neutral-600">
              Keine Benefits mit den gewählten Filtern gefunden. Bitte passen Sie die Filter an.
            </p>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="bg-white border-t border-neutral-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-neutral-900 mb-4">Benefit fehlt?</h2>
          <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
            Wir erweitern unser Verzeichnis kontinuierlich. Schlagen Sie weitere Benefits oder Anbieter vor.
          </p>
          <Link
            to="/anbieter"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Anbieter vorschlagen
          </Link>
        </div>
      </section>
    </div>
  );
}
