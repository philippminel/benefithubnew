import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Plus } from 'lucide-react';
import { providers } from '../data/providers';
import { AdSlot } from '../components/AdSlot';

export function AnbieterDirectory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterBenefit, setFilterBenefit] = useState('all');
  const [showSuggestForm, setShowSuggestForm] = useState(false);
  const [suggestFormData, setSuggestFormData] = useState({
    name: '',
    email: '',
    providerName: '',
    website: ''
  });

  const filteredProviders = providers.filter(provider => {
    const matchesSearch = provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         provider.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterBenefit === 'all' || 
                         provider.benefits.some(b => b.toLowerCase().includes(filterBenefit.toLowerCase()));
    return matchesSearch && matchesFilter;
  });

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const providersByLetter = alphabet.reduce((acc, letter) => {
    acc[letter] = filteredProviders.filter(p => p.name.charAt(0).toUpperCase() === letter);
    return acc;
  }, {} as Record<string, typeof providers>);

  const handleSuggestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    alert('Vielen Dank für Ihren Vorschlag! Wir prüfen den Anbieter und ergänzen ihn in Kürze.');
    setShowSuggestForm(false);
    setSuggestFormData({ name: '', email: '', providerName: '', website: '' });
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <section className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-neutral-900 mb-4">Anbieter-Verzeichnis</h1>
          <p className="text-neutral-600 max-w-3xl mb-8">
            Alle Benefit-Anbieter in Deutschland im Überblick. Objektiv vergleichen, Reviews lesen, informiert entscheiden.
          </p>

          {/* Search & Filter */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input
                type="text"
                placeholder="Anbieter suchen..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <select
              value={filterBenefit}
              onChange={(e) => setFilterBenefit(e.target.value)}
              className="px-4 py-3 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">Alle Benefits</option>
              <option value="essenszuschuss">Essenszuschuss</option>
              <option value="sachbezug">Sachbezug 50€</option>
              <option value="jobrad">JobRad</option>
              <option value="fitness">Fitness</option>
              <option value="mobilität">Mobilität</option>
            </select>
          </div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <p className="text-neutral-600">
            {filteredProviders.length} Anbieter gefunden
          </p>
          <button
            onClick={() => setShowSuggestForm(!showSuggestForm)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Anbieter vorschlagen
          </button>
        </div>
      </section>

      {/* Suggest Form */}
      {showSuggestForm && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <form onSubmit={handleSuggestSubmit} className="bg-white border border-neutral-200 rounded-xl p-6">
            <h2 className="text-neutral-900 mb-4">Anbieter vorschlagen</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm text-neutral-700 mb-2">Ihr Name</label>
                <input
                  type="text"
                  value={suggestFormData.name}
                  onChange={(e) => setSuggestFormData({ ...suggestFormData, name: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-neutral-700 mb-2">Ihre E-Mail</label>
                <input
                  type="email"
                  value={suggestFormData.email}
                  onChange={(e) => setSuggestFormData({ ...suggestFormData, email: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-neutral-700 mb-2">Anbieter-Name</label>
                <input
                  type="text"
                  value={suggestFormData.providerName}
                  onChange={(e) => setSuggestFormData({ ...suggestFormData, providerName: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-neutral-700 mb-2">Website</label>
                <input
                  type="url"
                  value={suggestFormData.website}
                  onChange={(e) => setSuggestFormData({ ...suggestFormData, website: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Vorschlagen
              </button>
              <button
                type="button"
                onClick={() => setShowSuggestForm(false)}
                className="px-6 py-2 bg-neutral-200 text-neutral-700 rounded-lg hover:bg-neutral-300 transition-colors"
              >
                Abbrechen
              </button>
            </div>
          </form>
        </section>
      )}

      {/* A-Z Directory */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {filteredProviders.length === 0 ? (
          <div className="bg-white border border-neutral-200 rounded-xl p-12 text-center">
            <p className="text-neutral-600">
              Keine Anbieter gefunden. Bitte passen Sie Ihre Suchkriterien an.
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {alphabet.map(letter => {
              const providersInLetter = providersByLetter[letter];
              if (providersInLetter.length === 0) return null;

              return (
                <div key={letter}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center">
                      <span className="text-xl">{letter}</span>
                    </div>
                    <div className="h-px bg-neutral-200 flex-1"></div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {providersInLetter.map(provider => (
                      <Link
                        key={provider.id}
                        to={`/anbieter/${provider.id}`}
                        className="group bg-white border border-neutral-200 rounded-xl p-5 hover:border-blue-500 hover:shadow-lg transition-all"
                      >
                        <h3 className="text-neutral-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {provider.name}
                        </h3>
                        <p className="text-sm text-neutral-600 mb-3 line-clamp-2">
                          {provider.tagline}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-3">
                          {provider.benefits.slice(0, 2).map(benefit => (
                            <span key={benefit} className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">
                              {benefit}
                            </span>
                          ))}
                          {provider.benefits.length > 2 && (
                            <span className="px-2 py-1 bg-neutral-100 text-neutral-600 rounded text-xs">
                              +{provider.benefits.length - 2}
                            </span>
                          )}
                        </div>

                        {provider.attributes.coverage.multibenefitPlatform && (
                          <span className="inline-block px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">
                            Multi-Benefit
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* AdSense Slot - Bottom of page */}
        <AdSlot className="mt-12" />
      </section>
    </div>
  );
}
