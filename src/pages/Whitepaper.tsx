import { useState } from 'react';
import { FileText, Download, CheckCircle } from 'lucide-react';

export function Whitepaper() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    employees: '',
    role: 'hr'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-6">
                <FileText className="w-4 h-4" />
                <span className="text-sm">Kostenloser Download</span>
              </div>
              <h1 className="text-neutral-900 mb-6">
                Whitepaper: Benefits statt Gehaltserhöhung
              </h1>
              <p className="text-neutral-600 mb-8">
                Erfahren Sie, wie führende Unternehmen in Deutschland Benefits nutzen, um Talente zu halten und Kosten zu senken. Mit Benchmark-Daten, Praxis-Beispielen und Umsetzungs-Roadmap.
              </p>

              <div className="space-y-4">
                {[
                  'Gehaltserhöhung vs. Benefits: Der ROI-Vergleich',
                  'Benchmark: Was bieten andere Unternehmen?',
                  'Case Studies: 3 Praxis-Beispiele',
                  'Schritt-für-Schritt Umsetzungsplan',
                  'Checkliste: Anbieter-Auswahl'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-xl p-8">
              {!submitted ? (
                <>
                  <h2 className="text-neutral-900 mb-6">Whitepaper anfordern</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm text-neutral-700 mb-2">Name *</label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm text-neutral-700 mb-2">Geschäftliche E-Mail *</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm text-neutral-700 mb-2">Unternehmen *</label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          required
                          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm text-neutral-700 mb-2">Anzahl Mitarbeitende *</label>
                        <select
                          value={formData.employees}
                          onChange={(e) => setFormData({ ...formData, employees: e.target.value })}
                          required
                          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Bitte wählen</option>
                          <option value="1-10">1-10</option>
                          <option value="11-50">11-50</option>
                          <option value="51-200">51-200</option>
                          <option value="201-500">201-500</option>
                          <option value="500+">500+</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm text-neutral-700 mb-2">Rolle *</label>
                        <select
                          value={formData.role}
                          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                          required
                          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="hr">HR / People & Culture</option>
                          <option value="management">Geschäftsführung</option>
                          <option value="finance">Finance / Payroll</option>
                          <option value="other">Sonstige</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                    >
                      <Download className="w-5 h-5" />
                      Whitepaper herunterladen
                    </button>

                    <p className="text-xs text-neutral-500 mt-4 text-center">
                      Mit dem Download akzeptieren Sie unsere Datenschutzrichtlinien.
                    </p>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <CheckCircle className="w-20 h-20 text-green-600 mx-auto mb-6" />
                  <h3 className="text-neutral-900 mb-3">Vielen Dank!</h3>
                  <p className="text-neutral-600 mb-6">
                    Das Whitepaper wurde an <strong>{formData.email}</strong> gesendet.
                  </p>
                  <p className="text-sm text-neutral-500">
                    Bitte prüfen Sie auch Ihren Spam-Ordner, falls die E-Mail nicht innerhalb weniger Minuten eintrifft.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Preview / Content Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-neutral-900 mb-12 text-center">Was Sie im Whitepaper erwartet</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-neutral-200 rounded-xl p-8">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-neutral-900 mb-3">Benchmark-Daten</h3>
            <p className="text-neutral-600">
              Welche Benefits bieten Unternehmen in Deutschland? Durchschnittliche Budgets, beliebte Kategorien, regionale Unterschiede.
            </p>
          </div>

          <div className="bg-white border border-neutral-200 rounded-xl p-8">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">💡</span>
            </div>
            <h3 className="text-neutral-900 mb-3">Case Studies</h3>
            <p className="text-neutral-600">
              3 Praxis-Beispiele: Wie ein Startup, ein Mittelständler und ein Konzern Benefits erfolgreich eingeführt haben.
            </p>
          </div>

          <div className="bg-white border border-neutral-200 rounded-xl p-8">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-neutral-900 mb-3">Umsetzungsplan</h3>
            <p className="text-neutral-600">
              Schritt-für-Schritt Roadmap: Von der Bedarfsanalyse über Anbieter-Auswahl bis zum Rollout und Monitoring.
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-neutral-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-neutral-600 mb-8">
            Bereits über <strong className="text-neutral-900">2.500+ HR-Professionals</strong> haben das Whitepaper heruntergeladen.
          </p>
          <div className="flex flex-wrap justify-center gap-8 opacity-50">
            <span className="text-neutral-500">Startup GmbH</span>
            <span className="text-neutral-500">Mittelstand AG</span>
            <span className="text-neutral-500">Enterprise Corp</span>
            <span className="text-neutral-500">Tech Company</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-center text-white">
          <h2 className="mb-4">Brauchen Sie persönliche Beratung?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Nach dem Whitepaper noch Fragen? Wir erstellen eine individuelle Analyse für Ihre Situation.
          </p>
          <a
            href="/analyse"
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Analyse anfragen
          </a>
        </div>
      </section>
    </div>
  );
}
