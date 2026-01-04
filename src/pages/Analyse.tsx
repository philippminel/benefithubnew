import { useState } from 'react';
import { TrendingUp, CheckCircle } from 'lucide-react';

export function Analyse() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Contact
    name: '',
    email: '',
    phone: '',
    company: '',
    // Company details
    employees: '',
    industry: '',
    locations: '',
    // Current situation
    currentBenefits: [] as string[],
    currentProviders: '',
    monthlyBudget: '',
    challenges: [] as string[],
    // Goals
    goals: [] as string[],
    timeline: '',
    // Additional
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCheckboxChange = (field: 'currentBenefits' | 'challenges' | 'goals', value: string) => {
    const current = formData[field];
    if (current.includes(value)) {
      setFormData({ ...formData, [field]: current.filter(item => item !== value) });
    } else {
      setFormData({ ...formData, [field]: [...current, value] });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const steps = [
    { number: 1, title: 'Kontakt' },
    { number: 2, title: 'Unternehmen' },
    { number: 3, title: 'Status quo' },
    { number: 4, title: 'Ziele' },
    { number: 5, title: 'Zusammenfassung' }
  ];

  if (submitted) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <CheckCircle className="w-20 h-20 text-green-600 mx-auto mb-6" />
          <h1 className="text-neutral-900 mb-4">Vielen Dank!</h1>
          <p className="text-neutral-600 mb-6">
            Wir haben Ihre Anfrage erhalten und melden uns innerhalb von <strong>2 Werktagen</strong> bei Ihnen mit einer ersten Einschätzung.
          </p>
          <p className="text-neutral-600 mb-8">
            Ihre Analyse-Anfrage wurde an <strong>{formData.email}</strong> bestätigt.
          </p>
          <a
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Zurück zur Startseite
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-8 h-8 text-blue-600" />
            <h1 className="text-neutral-900">Individuelle Benefit-Analyse</h1>
          </div>
          <p className="text-neutral-600 max-w-2xl">
            Wir analysieren Ihre aktuelle Situation, bewerten Fit und Konsolidierungspotenzial und empfehlen passende Anbieter — kostenlos und unverbindlich.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white border border-neutral-200 rounded-xl p-8 mb-8">
          <h2 className="text-neutral-900 mb-6">So funktioniert's</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { title: 'Statusaufnahme', description: 'Aktuelle Benefits & Anbieter' },
              { title: 'Fit-Bewertung', description: 'Was passt zu Ihrem Team?' },
              { title: 'Konsolidierung', description: 'Einsparpotenzial prüfen' },
              { title: 'Choice-Modell', description: 'Wahlfreiheit & Budget' },
              { title: 'Kommunikation', description: 'Rollout-Plan' }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                  {index + 1}
                </div>
                <h3 className="text-sm text-neutral-900 mb-1">{step.title}</h3>
                <p className="text-xs text-neutral-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            {steps.map(step => (
              <div
                key={step.number}
                className={`flex items-center ${step.number < steps.length ? 'flex-1' : ''}`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                    currentStep >= step.number
                      ? 'bg-blue-600 text-white'
                      : 'bg-neutral-200 text-neutral-500'
                  }`}
                >
                  {step.number}
                </div>
                {step.number < steps.length && (
                  <div
                    className={`flex-1 h-1 mx-2 ${
                      currentStep > step.number ? 'bg-blue-600' : 'bg-neutral-200'
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-xs text-neutral-600">
            {steps.map(step => (
              <span key={step.number} className={step.number === steps.length ? 'text-right' : ''}>
                {step.title}
              </span>
            ))}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white border border-neutral-200 rounded-xl p-8">
          {/* Step 1: Contact */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-neutral-900 mb-4">Kontaktdaten</h2>
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
                <label className="block text-sm text-neutral-700 mb-2">E-Mail *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-neutral-700 mb-2">Telefon (optional)</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
            </div>
          )}

          {/* Step 2: Company */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-neutral-900 mb-4">Über Ihr Unternehmen</h2>
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
                <label className="block text-sm text-neutral-700 mb-2">Branche *</label>
                <input
                  type="text"
                  value={formData.industry}
                  onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                  required
                  placeholder="z.B. Tech, Beratung, Handel, ..."
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-neutral-700 mb-2">Standorte *</label>
                <select
                  value={formData.locations}
                  onChange={(e) => setFormData({ ...formData, locations: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Bitte wählen</option>
                  <option value="single">Ein Standort</option>
                  <option value="multiple-germany">Mehrere Standorte (Deutschland)</option>
                  <option value="remote">Vollständig remote</option>
                  <option value="hybrid">Hybrid (Office + Remote)</option>
                </select>
              </div>
            </div>
          )}

          {/* Step 3: Current Situation */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-neutral-900 mb-4">Aktuelle Situation</h2>
              <div>
                <label className="block text-sm text-neutral-700 mb-3">
                  Welche Benefits bieten Sie bereits an? (Mehrfachauswahl)
                </label>
                <div className="space-y-2">
                  {['Essenszuschuss', 'Sachbezug 50€', 'JobRad', 'Fitness', 'Weiterbildung', 'ÖPNV', 'Kinderbetreuung', 'Keine'].map(benefit => (
                    <label key={benefit} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.currentBenefits.includes(benefit)}
                        onChange={() => handleCheckboxChange('currentBenefits', benefit)}
                        className="mr-3 w-4 h-4"
                      />
                      <span className="text-sm text-neutral-700">{benefit}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm text-neutral-700 mb-2">
                  Anzahl aktueller Anbieter
                </label>
                <input
                  type="number"
                  value={formData.currentProviders}
                  onChange={(e) => setFormData({ ...formData, currentProviders: e.target.value })}
                  placeholder="z.B. 3"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-neutral-700 mb-2">
                  Monatliches Gesamt-Budget (ca., in €)
                </label>
                <input
                  type="number"
                  value={formData.monthlyBudget}
                  onChange={(e) => setFormData({ ...formData, monthlyBudget: e.target.value })}
                  placeholder="z.B. 5000"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-neutral-700 mb-3">
                  Aktuelle Herausforderungen (Mehrfachauswahl)
                </label>
                <div className="space-y-2">
                  {[
                    'Hoher Verwaltungsaufwand',
                    'Viele verschiedene Anbieter',
                    'Fehlende Transparenz (Nutzung, Kosten)',
                    'Keine Wahlfreiheit für Mitarbeitende',
                    'Lohnbuchhaltung kompliziert',
                    'Benefits werden nicht genutzt'
                  ].map(challenge => (
                    <label key={challenge} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.challenges.includes(challenge)}
                        onChange={() => handleCheckboxChange('challenges', challenge)}
                        className="mr-3 w-4 h-4"
                      />
                      <span className="text-sm text-neutral-700">{challenge}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Goals */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <h2 className="text-neutral-900 mb-4">Ihre Ziele</h2>
              <div>
                <label className="block text-sm text-neutral-700 mb-3">
                  Was möchten Sie erreichen? (Mehrfachauswahl)
                </label>
                <div className="space-y-2">
                  {[
                    'Verwaltungsaufwand reduzieren',
                    'Kosten senken / optimieren',
                    'Mehr Benefits anbieten',
                    'Wahlfreiheit für Mitarbeitende',
                    'Bessere Integration (Payroll, HR-System)',
                    'Transparenz & Reporting',
                    'Mitarbeiterzufriedenheit steigern'
                  ].map(goal => (
                    <label key={goal} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.goals.includes(goal)}
                        onChange={() => handleCheckboxChange('goals', goal)}
                        className="mr-3 w-4 h-4"
                      />
                      <span className="text-sm text-neutral-700">{goal}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm text-neutral-700 mb-2">Zeitrahmen *</label>
                <select
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Bitte wählen</option>
                  <option value="asap">So schnell wie möglich</option>
                  <option value="1-3-months">1-3 Monate</option>
                  <option value="3-6-months">3-6 Monate</option>
                  <option value="6-12-months">6-12 Monate</option>
                  <option value="exploring">Nur Informationen sammeln</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-neutral-700 mb-2">
                  Weitere Anmerkungen (optional)
                </label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  rows={4}
                  placeholder="Spezielle Anforderungen, Fragen, Kontext..."
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
            </div>
          )}

          {/* Step 5: Summary */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <h2 className="text-neutral-900 mb-4">Zusammenfassung</h2>
              <div className="bg-neutral-50 rounded-lg p-6 space-y-4">
                <div>
                  <span className="text-sm text-neutral-600">Unternehmen:</span>
                  <p className="text-neutral-900">{formData.company}</p>
                </div>
                <div>
                  <span className="text-sm text-neutral-600">Mitarbeitende:</span>
                  <p className="text-neutral-900">{formData.employees}</p>
                </div>
                <div>
                  <span className="text-sm text-neutral-600">Aktuelle Benefits:</span>
                  <p className="text-neutral-900">
                    {formData.currentBenefits.length > 0 ? formData.currentBenefits.join(', ') : 'Keine'}
                  </p>
                </div>
                <div>
                  <span className="text-sm text-neutral-600">Hauptziele:</span>
                  <p className="text-neutral-900">
                    {formData.goals.length > 0 ? formData.goals.join(', ') : 'Nicht angegeben'}
                  </p>
                </div>
                <div>
                  <span className="text-sm text-neutral-600">Zeitrahmen:</span>
                  <p className="text-neutral-900">{formData.timeline || 'Nicht angegeben'}</p>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-neutral-700">
                  <strong>Nächster Schritt:</strong> Wir analysieren Ihre Angaben und senden Ihnen innerhalb von 2 Werktagen eine erste Einschätzung mit konkreten Empfehlungen.
                </p>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-8 pt-6 border-t border-neutral-200">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={() => setCurrentStep(currentStep - 1)}
                className="px-6 py-3 bg-neutral-200 text-neutral-700 rounded-lg hover:bg-neutral-300 transition-colors"
              >
                Zurück
              </button>
            )}
            {currentStep < 5 ? (
              <button
                type="button"
                onClick={() => setCurrentStep(currentStep + 1)}
                className={`px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors ${
                  currentStep === 1 ? 'ml-auto' : ''
                }`}
              >
                Weiter
              </button>
            ) : (
              <button
                type="submit"
                className="ml-auto px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Analyse anfordern
              </button>
            )}
          </div>
        </form>
      </section>
    </div>
  );
}
