import { Link } from 'react-router-dom';
import { BookOpen, ExternalLink, FileText, Search } from 'lucide-react';
import { AdSlot } from '../components/AdSlot';

export function Wissen() {
  const resources = [
    {
      title: 'Bundesministerium der Finanzen (BMF)',
      description: 'Offizielle Richtlinien zu steuerfreien Benefits',
      url: 'https://www.bundesfinanzministerium.de',
      type: 'Quelle'
    },
    {
      title: 'IHK: Leitfaden Mitarbeiter-Benefits',
      description: 'Praktischer Leitfaden für Unternehmen',
      url: '#',
      type: 'Studie'
    },
    {
      title: 'Haufe: Steuerfreie Extras für Arbeitnehmer',
      description: 'Übersicht steuerlicher Regelungen',
      url: '#',
      type: 'Quelle'
    },
    {
      title: 'DATEV: Benefits richtig abrechnen',
      description: 'Lohnbuchhaltung und Compliance',
      url: '#',
      type: 'Quelle'
    }
  ];

  const glossary = [
    { term: 'Sachbezug', definition: 'Leistung des Arbeitgebers in Form von Waren oder Dienstleistungen statt Geld (§ 8 Abs. 2 EStG).' },
    { term: 'Entgeltumwandlung', definition: 'Umwandlung von Bruttolohn in Sachleistungen (z.B. JobRad), reduziert Steuern und Sozialabgaben.' },
    { term: 'Lohnnebenkosten', definition: 'Sozialversicherungsbeiträge des Arbeitgebers (ca. 20% des Bruttogehalts).' },
    { term: '44-Euro-Freigrenze', definition: 'Veraltet seit 2022, nun 50 € monatlich für Sachbezüge (§ 8 Abs. 2 Satz 11 EStG).' },
    { term: 'Tax Compliance', definition: 'Einhaltung steuerlicher Vorschriften bei Benefit-Programmen.' },
    { term: 'Wahlmodell', definition: 'Mitarbeitende können aus verschiedenen Benefits wählen (Budget-basiert).' }
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <section className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-8 h-8 text-blue-600" />
            <h1 className="text-neutral-900">Wissen</h1>
          </div>
          <p className="text-neutral-600 max-w-3xl">
            Quellen, Studien, Glossar und unsere Methodik: So vergleichen wir Anbieter objektiv und transparent.
          </p>
        </div>
      </section>

      {/* Methodology */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white border border-neutral-200 rounded-xl p-8 mb-12">
          <h2 className="text-neutral-900 mb-6">Methodik: So vergleichen wir Anbieter</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-neutral-900 mb-3">Datenquellen</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-neutral-700">
                    <strong>Herstellerangaben:</strong> Offizielle Websites, Produktdokumentation, Pricing-Informationen
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-neutral-700">
                    <strong>Review-Plattformen:</strong> Trustpilot, Kununu, OMR Reviews, DATEV Marktplatz
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-neutral-700">
                    <strong>Community-Feedback:</strong> Reddit, HR-Foren, LinkedIn-Gruppen
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-neutral-700">
                    <strong>Eigene Tests:</strong> Soweit möglich, testen wir Plattformen in Demo-Umgebungen
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-neutral-900 mb-3">Bewertungskriterien</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Pricing (Transparenz, Setup, laufende Kosten)',
                  'Funktionsumfang (Benefits, Wahlmodelle, Segmentierung)',
                  'Integration (DATEV, Personio, SAP etc.)',
                  'Compliance (Tax Compliance, Dokumentation)',
                  'Employee UX (App, Karte, Web-Portal)',
                  'Admin UX (Dashboard, Reporting, Support)',
                  'Trust & Reviews (Trustpilot, Kununu, Community)',
                  'Skalierbarkeit & Flexibilität'
                ].map(criterion => (
                  <div key={criterion} className="flex items-start gap-2 p-3 bg-neutral-50 rounded-lg">
                    <FileText className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-700">{criterion}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-neutral-900 mb-3">Neutralität & Objektivität</h3>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-neutral-700 mb-2">
                  <strong>Wichtig:</strong> Anbieter können keine Rankings oder Platzierungen kaufen. Alle Vergleiche basieren auf objektiven Kriterien.
                </p>
                <p className="text-neutral-700">
                  Affiliate-Links und Google AdSense finanzieren unsere Arbeit, beeinflussen aber nicht die redaktionelle Bewertung. Alle Affiliate-Links sind gekennzeichnet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-neutral-900 mb-8">Studien & Quellen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-6 bg-neutral-50 border border-neutral-200 rounded-xl hover:border-blue-500 hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ExternalLink className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-neutral-900 group-hover:text-blue-600 transition-colors">
                      {resource.title}
                    </h3>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                      {resource.type}
                    </span>
                  </div>
                  <p className="text-sm text-neutral-600">{resource.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Glossary */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-neutral-900 mb-8">Glossar</h2>
        <div className="bg-white border border-neutral-200 rounded-xl divide-y divide-neutral-200">
          {glossary.map((item, index) => (
            <div key={index} className="p-6">
              <h3 className="text-neutral-900 mb-2">{item.term}</h3>
              <p className="text-neutral-700">{item.definition}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AdSense Slot */}
      <AdSlot className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12" />

      {/* Tax Basics */}
      <section className="bg-neutral-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-neutral-900 mb-8">Steuer-Grundlagen</h2>
          <div className="bg-white border border-neutral-200 rounded-xl p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-neutral-900 mb-3">§ 8 Abs. 2 EStG: Sachbezüge</h3>
                <p className="text-neutral-700 mb-2">
                  Sachbezüge bis 50 € pro Monat sind steuerfrei (§ 8 Abs. 2 Satz 11 EStG). Wichtig: Es muss sich um echte Sachleistungen handeln, keine Geldauszahlung.
                </p>
              </div>

              <div>
                <h3 className="text-neutral-900 mb-3">§ 3 Nr. 34 EStG: Gesundheitsförderung</h3>
                <p className="text-neutral-700 mb-2">
                  Leistungen zur betrieblichen Gesundheitsförderung bis 600 € pro Jahr und Mitarbeiter sind steuerfrei, sofern sie § 20 SGB V entsprechen (zertifizierte Kurse).
                </p>
              </div>

              <div>
                <h3 className="text-neutral-900 mb-3">§ 3 Nr. 37 EStG: Diensträder</h3>
                <p className="text-neutral-700 mb-2">
                  Diensträder (inklusive E-Bikes) sind seit 2020 steuerfrei, wenn sie für Fahrten zwischen Wohnung und Arbeitsstätte genutzt werden.
                </p>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
                <p className="text-sm text-neutral-700">
                  <strong>Disclaimer:</strong> Dies sind vereinfachte Darstellungen. Keine Steuer- oder Rechtsberatung. Konsultieren Sie bei konkreten Fragen Ihren Steuerberater.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
