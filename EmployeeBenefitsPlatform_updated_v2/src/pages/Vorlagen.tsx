import { useState } from 'react';
import { FileText, Download, CheckCircle } from 'lucide-react';

export function Vorlagen() {
  const [showDownloadForm, setShowDownloadForm] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: 'arbeitgeber'
  });
  const [submitted, setSubmitted] = useState(false);

  const templates = [
    {
      id: 'inventur',
      title: 'Benefit-Inventur',
      description: 'Erfassen Sie Ihre aktuellen Benefits systematisch: Welche Anbieter, welche Kosten, welche Nutzung?',
      type: 'Excel / Google Sheets',
      icon: '📊'
    },
    {
      id: 'demografie',
      title: 'Demografie & Nutzung',
      description: 'Analysieren Sie die Bedürfnisse Ihres Teams: Alter, Standort, Familienstand, Pendler-Anteil etc.',
      type: 'Excel / Google Sheets',
      icon: '👥'
    },
    {
      id: 'entscheidungsmatrix',
      title: 'Anbieter-Entscheidungsmatrix',
      description: 'Bewerten Sie Anbieter nach Ihren Kriterien: Pricing, Funktionen, Integration, Support.',
      type: 'Excel / Google Sheets',
      icon: '⚖️'
    },
    {
      id: 'policy',
      title: 'Benefit-Richtlinie (Policy) Muster',
      description: 'Vorlage für interne Richtlinie: Wer bekommt welche Benefits? Wie wird beantragt? Wie dokumentiert?',
      type: 'Word / Google Docs',
      icon: '📋'
    },
    {
      id: 'gehaltsgespraech',
      title: 'Kommunikations-Template: Gehaltsgespräch',
      description: 'Argumentationshilfe für Führungskräfte: Benefits statt/zusätzlich zur Gehaltserhöhung kommunizieren.',
      type: 'Word / Google Docs',
      icon: '💬'
    },
    {
      id: 'faq',
      title: 'Mitarbeiter-FAQ',
      description: 'Fertige FAQ für Mitarbeitende zu Benefits, Steuerlogik, Nutzung, häufigen Fragen.',
      type: 'Word / Google Docs',
      icon: '❓'
    },
    {
      id: 'rollout',
      title: 'Rollout-Mail-Template',
      description: 'E-Mail-Vorlage für Ankündigung neuer Benefits an das Team (inkl. Anleitung).',
      type: 'Word / Google Docs',
      icon: '📧'
    }
  ];

  const handleDownloadClick = (templateId: string) => {
    setSelectedTemplate(templateId);
    setShowDownloadForm(true);
    setSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setShowDownloadForm(false);
      setFormData({ name: '', email: '', company: '', role: 'arbeitgeber' });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <section className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-8 h-8 text-blue-600" />
            <h1 className="text-neutral-900">Vorlagen & Checklisten</h1>
          </div>
          <p className="text-neutral-600 max-w-3xl">
            Praxisnahe Vorlagen für die Einführung und Verwaltung von Employee Benefits. Kostenlos zum Download.
          </p>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map(template => (
            <div
              key={template.id}
              className="bg-white border border-neutral-200 rounded-xl p-6 hover:border-blue-500 hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-4">{template.icon}</div>
              <h3 className="text-neutral-900 mb-2">{template.title}</h3>
              <p className="text-sm text-neutral-600 mb-4">{template.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-neutral-500">{template.type}</span>
                <button
                  onClick={() => handleDownloadClick(template.id)}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Download Form Modal */}
      {showDownloadForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-8 max-w-md w-full">
            {!submitted ? (
              <>
                <h2 className="text-neutral-900 mb-4">Vorlage herunterladen</h2>
                <p className="text-neutral-600 mb-6 text-sm">
                  Bitte geben Sie Ihre Daten ein, um die Vorlage "{templates.find(t => t.id === selectedTemplate)?.title}" herunterzuladen.
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-neutral-700 mb-2">Name *</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-neutral-700 mb-2">E-Mail *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-neutral-700 mb-2">Unternehmen</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-neutral-700 mb-2">Ich bin *</label>
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            value="arbeitgeber"
                            checked={formData.role === 'arbeitgeber'}
                            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                            className="mr-2"
                          />
                          <span className="text-sm text-neutral-700">Arbeitgeber (HR, Geschäftsführung, Finance)</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            value="arbeitnehmer"
                            checked={formData.role === 'arbeitnehmer'}
                            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                            className="mr-2"
                          />
                          <span className="text-sm text-neutral-700">Arbeitnehmer / Interessiert</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-6">
                    <button
                      type="submit"
                      className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Download starten
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowDownloadForm(false)}
                      className="px-6 py-3 bg-neutral-200 text-neutral-700 rounded-lg hover:bg-neutral-300 transition-colors"
                    >
                      Abbrechen
                    </button>
                  </div>

                  <p className="text-xs text-neutral-500 mt-4">
                    Mit dem Download akzeptieren Sie unsere Datenschutzrichtlinien. Keine Weitergabe an Dritte.
                  </p>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-neutral-900 mb-2">Download gestartet!</h3>
                <p className="text-neutral-600">
                  Die Vorlage wurde an {formData.email} gesendet.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Info Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
            <h2 className="text-neutral-900 mb-4">Warum Vorlagen nutzen?</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-700">
                  <strong>Zeit sparen:</strong> Erprobte Strukturen statt bei Null anfangen.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-700">
                  <strong>Best Practices:</strong> Vorlagen basieren auf bewährten HR-Prozessen.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-700">
                  <strong>Vollständigkeit:</strong> Alle relevanten Aspekte sind berücksichtigt.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-700">
                  <strong>Anpassbar:</strong> Alle Vorlagen sind editierbar und auf Ihr Unternehmen anpassbar.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-center text-white">
          <h2 className="mb-4">Brauchen Sie individuelle Unterstützung?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Unsere Analyse-Services helfen Ihnen, die optimale Benefit-Strategie für Ihr Unternehmen zu entwickeln.
          </p>
          <a
            href="/analyse"
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Zur individuellen Analyse
          </a>
        </div>
      </section>
    </div>
  );
}
