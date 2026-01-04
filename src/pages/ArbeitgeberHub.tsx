import { Routes, Route, Link } from 'react-router-dom';
import { TrendingUp, Calculator, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { AdSlot } from '../components/AdSlot';
import { benefits } from '../data/benefits';
import { SimpleFAQ } from '../components/SimpleFAQ';
import { faqData } from '../data/faqData';

export function ArbeitgeberHub() {
  return (
    <Routes>
      <Route path="/benefits-statt-gehaltserhoehung" element={<BenefitsStattGehaltserhöhung />} />
      <Route path="/*" element={<BenefitsStattGehaltserhöhung />} />
    </Routes>
  );
}

function BenefitsStattGehaltserhöhung() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-50 via-blue-50 to-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full mb-6">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm">Für Arbeitgeber</span>
            </div>
            <h1 className="text-neutral-900 mb-6">
              Mehr Netto-Wert als eine kleine Gehaltserhöhung — mit Benefits, die ankommen
            </h1>
            <p className="text-neutral-600 mb-8 text-lg">
              Fixkosten steigen, Lohnnebenkosten belasten. Mit steuerfreien Benefits bieten Sie Mitarbeitenden mehr Wert bei geringeren Kosten für Ihr Unternehmen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/rechner"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Calculator className="w-5 h-5 mr-2" />
                Kosten berechnen
              </Link>
              <Link
                to="/vergleich"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Anbieter vergleichen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl">
          <h2 className="text-neutral-900 mb-6">Die Situation</h2>
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-neutral-700">
                <strong>Gehaltserhöhungen sind teuer:</strong> Ca. 20% Lohnnebenkosten (Sozialversicherung) + Steuerlast für Mitarbeitende = wenig Netto-Effekt.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-neutral-700">
                <strong>Inflation & steigende Kosten:</strong> Mitarbeitende erwarten Ausgleich, Budget ist eng.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-neutral-700">
                <strong>Talente halten wird schwieriger:</strong> Wettbewerb um Fachkräfte verschärft sich, klassische Gehaltserhöhungen reichen oft nicht.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-neutral-900 mb-4">Die Lösung: Benefits als Total-Rewards Baustein</h2>
            <p className="text-neutral-600">
              Steuerfreie Benefits bieten Mitarbeitenden mehr Netto-Wert als eine vergleichbare Gehaltserhöhung — und kosten Sie weniger.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl">
              <h3 className="text-neutral-900 mb-2">Essenszuschuss</h3>
              <p className="text-2xl text-green-600 mb-3">Bis 7,23 €/Tag</p>
              <p className="text-neutral-700 text-sm">Steuerfrei für Mahlzeiten während der Arbeitszeit. 144 €/Monat Wert bei ca. 20 Arbeitstagen.</p>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl">
              <h3 className="text-neutral-900 mb-2">Sachbezug 50€</h3>
              <p className="text-2xl text-blue-600 mb-3">50 €/Monat</p>
              <p className="text-neutral-700 text-sm">Steuerfrei für Shopping, Tanken, etc. Flexible Nutzung über App oder Karte.</p>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-xl">
              <h3 className="text-neutral-900 mb-2">Fitness & Gesundheit</h3>
              <p className="text-2xl text-purple-600 mb-3">Bis 600 €/Jahr</p>
              <p className="text-neutral-700 text-sm">Zuschuss zu Fitnessstudio, Yoga, Physiotherapie. Steuerfrei nach § 3 Nr. 34 EStG.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AdSense Slot - Mid-article */}
      <AdSlot className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" />

      {/* Comparison Calculator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-br from-orange-50 to-yellow-50 border border-orange-200 rounded-2xl p-8 lg:p-12">
          <h2 className="text-neutral-900 mb-6">Gehaltserhöhung vs. Benefit-Budget</h2>
          <MiniCalculator />
          <div className="mt-6">
            <Link
              to="/rechner"
              className="inline-flex items-center text-blue-600 hover:underline"
            >
              Zum vollen Rechner <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefit Library */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-neutral-900 mb-8">Benefit-Bibliothek: Was passt zu uns?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.slice(0, 6).map(benefit => (
              <Link
                key={benefit.id}
                to={`/benefits/${benefit.id}`}
                className="group bg-neutral-50 border border-neutral-200 rounded-xl p-6 hover:border-blue-500 hover:shadow-lg transition-all"
              >
                <h3 className="text-neutral-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {benefit.name}
                </h3>
                <p className="text-sm text-neutral-600 mb-4">{benefit.shortDescription}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-500">AG-Kosten:</span>
                  <span className="text-neutral-900">{benefit.employerCost}</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/benefits" className="text-blue-600 hover:underline">
              Alle Benefits ansehen →
            </Link>
          </div>
        </div>
      </section>

      {/* Implementation Steps */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-neutral-900 mb-8">Umsetzung: Schritt für Schritt</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {[
            { step: 1, title: 'Auswahl', description: 'Welche Benefits passen zu Ihrem Team? Bedürfnisse erfassen.' },
            { step: 2, title: 'Richtlinie', description: 'Policy definieren: Wer bekommt was? Wie wird dokumentiert?' },
            { step: 3, title: 'Anbieter', description: 'Plattform auswählen, Vertrag abschließen, Integration planen.' },
            { step: 4, title: 'Payroll', description: 'Lohnbuchhaltung informieren, Schnittstellen einrichten, testen.' },
            { step: 5, title: 'Kommunikation', description: 'Benefits intern kommunizieren, Rollout, Feedback einholen.' }
          ].map(item => (
            <div key={item.step} className="relative">
              <div className="bg-white border border-neutral-200 rounded-xl p-6 hover:border-blue-500 transition-colors">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4">
                  {item.step}
                </div>
                <h3 className="text-neutral-900 mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-600">{item.description}</p>
              </div>
              {item.step < 5 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-neutral-200"></div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-neutral-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-neutral-900 mb-8 text-center">Häufige Fragen</h2>
          <SimpleFAQ items={faqData} />
        </div>
      </section>

      {/* AdSense Slot - Near end */}
      <AdSlot className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" />

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-center text-white">
          <h2 className="mb-4">Bereit für den nächsten Schritt?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Nutzen Sie unsere kostenlosen Tools oder lassen Sie uns eine individuelle Analyse erstellen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/rechner"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <Calculator className="w-5 h-5 mr-2" />
              Kosten kalkulieren
            </Link>
            <Link
              to="/vergleich"
              className="inline-flex items-center justify-center px-6 py-3 bg-transparent text-white border-2 border-white rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors"
            >
              Anbieter vergleichen
            </Link>
            <Link
              to="/analyse"
              className="inline-flex items-center justify-center px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
            >
              Individuelle Analyse
            </Link>
          </div>
        </div>
      </section>

      {/* Last Updated & Sources */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
          <p className="text-sm text-neutral-700">
            <strong>Rechtlicher Hinweis:</strong> Alle Angaben ohne Gewähr. Keine Steuer- oder Rechtsberatung. Konsultieren Sie bei steuerlichen Fragen Ihren Steuerberater.
          </p>
        </div>
        <p className="text-sm text-neutral-500 text-center">
          Zuletzt aktualisiert: Dezember 2025
        </p>
      </div>
    </div>
  );
}

function MiniCalculator() {
  const [salary, setSalary] = useState(100);
  
  const salaryIncreaseCostEmployer = salary * 1.2; // +20% employer costs
  const salaryIncreaseNetEmployee = salary * 0.6; // ~40% taxes/deductions
  
  const benefitCostEmployer = salary * 0.8; // Benefits cost less
  const benefitValueEmployee = salary; // Full value to employee (tax-free)

  return (
    <div>
      <div className="mb-6">
        <label className="block text-neutral-700 mb-2">
          Erhöhung/Monat (brutto): {salary} €
        </label>
        <input
          type="range"
          min="50"
          max="300"
          step="10"
          value={salary}
          onChange={(e) => setSalary(Number(e.target.value))}
          className="w-full"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6">
          <h3 className="text-neutral-900 mb-4">Gehaltserhöhung</h3>
          <div className="space-y-3">
            <div>
              <span className="text-sm text-neutral-600">Kosten AG (inkl. LNK):</span>
              <p className="text-xl text-neutral-900">{salaryIncreaseCostEmployer.toFixed(2)} €</p>
            </div>
            <div>
              <span className="text-sm text-neutral-600">Netto-Wert MA (ca.):</span>
              <p className="text-xl text-neutral-900">{salaryIncreaseNetEmployee.toFixed(2)} €</p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border-2 border-green-500 rounded-xl p-6">
          <h3 className="text-neutral-900 mb-4">Benefit-Budget</h3>
          <div className="space-y-3">
            <div>
              <span className="text-sm text-neutral-600">Kosten AG:</span>
              <p className="text-xl text-green-600">{benefitCostEmployer.toFixed(2)} €</p>
            </div>
            <div>
              <span className="text-sm text-neutral-600">Wert MA (steuerfrei):</span>
              <p className="text-xl text-green-600">{benefitValueEmployee.toFixed(2)} €</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-white rounded-lg">
        <p className="text-center text-neutral-700">
          <strong>Vorteil:</strong> {(benefitValueEmployee - salaryIncreaseNetEmployee).toFixed(2)} € mehr Wert für MA bei {(salaryIncreaseCostEmployer - benefitCostEmployer).toFixed(2)} € weniger Kosten für AG
        </p>
      </div>
    </div>
  );
}