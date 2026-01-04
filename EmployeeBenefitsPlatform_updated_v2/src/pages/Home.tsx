import { Link } from 'react-router-dom';
import { Search, Building2, Calculator, BookOpen, FileText, TrendingUp } from 'lucide-react';
import { AdSlot } from '../components/AdSlot';

export function Home() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl">
            <h1 className="text-neutral-900 mb-6">
              Benefits finden, verstehen & Anbieter vergleichen
            </h1>
            <p className="text-neutral-600 mb-8 max-w-2xl">
              Die neutrale Plattform für Arbeitgeber in Deutschland: Benefits als Alternative zur Gehaltserhöhung entdecken, Anbieter objektiv vergleichen und kosteneffizient entscheiden.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/benefits"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Search className="w-5 h-5 mr-2" />
                Benefits entdecken
              </Link>
              <Link
                to="/arbeitgeber/benefits-statt-gehaltserhoehung"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Benefits statt Gehaltserhöhung
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Entry Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            to="/benefits"
            className="group p-6 bg-white border border-neutral-200 rounded-xl hover:border-blue-500 hover:shadow-lg transition-all"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
              <Search className="w-6 h-6 text-blue-600 group-hover:text-white" />
            </div>
            <h3 className="text-neutral-900 mb-2">Benefits entdecken</h3>
            <p className="text-neutral-600">
              Alle Benefits im Überblick: Essenszuschuss, Sachbezug, JobRad, Fitness, Weiterbildung und mehr.
            </p>
          </Link>

          <Link
            to="/anbieter"
            className="group p-6 bg-white border border-neutral-200 rounded-xl hover:border-blue-500 hover:shadow-lg transition-all"
          >
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors">
              <Building2 className="w-6 h-6 text-green-600 group-hover:text-white" />
            </div>
            <h3 className="text-neutral-900 mb-2">Alle Anbieter</h3>
            <p className="text-neutral-600">
              Anbieter-Verzeichnis mit objektiven Vergleichen, Reviews und Transparenz-Hinweisen.
            </p>
          </Link>

          <Link
            to="/arbeitgeber/benefits-statt-gehaltserhoehung"
            className="group p-6 bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 rounded-xl hover:border-blue-500 hover:shadow-lg transition-all"
          >
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-600 transition-colors">
              <TrendingUp className="w-6 h-6 text-purple-600 group-hover:text-white" />
            </div>
            <h3 className="text-neutral-900 mb-2">Benefits statt Gehaltserhöhung</h3>
            <p className="text-neutral-600">
              Mehr Netto-Wert als eine kleine Gehaltserhöhung — mit Benefits, die ankommen.
            </p>
          </Link>
        </div>
      </section>

      {/* AdSense Slot - Below first content section */}
      <AdSlot className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16" />

      {/* Secondary Tools */}
      <section className="bg-neutral-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-neutral-900 mb-8 text-center">Tools & Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              to="/rechner"
              className="p-6 bg-white border border-neutral-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all"
            >
              <Calculator className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="text-neutral-900 mb-2">Rechner</h3>
              <p className="text-neutral-600">
                Essenszuschuss & Konsolidierung berechnen
              </p>
            </Link>

            <Link
              to="/vergleich"
              className="p-6 bg-white border border-neutral-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all"
            >
              <BookOpen className="w-8 h-8 text-green-600 mb-3" />
              <h3 className="text-neutral-900 mb-2">Vergleich</h3>
              <p className="text-neutral-600">
                Anbieter objektiv vergleichen
              </p>
            </Link>

            <Link
              to="/vorlagen"
              className="p-6 bg-white border border-neutral-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all"
            >
              <FileText className="w-8 h-8 text-purple-600 mb-3" />
              <h3 className="text-neutral-900 mb-2">Vorlagen</h3>
              <p className="text-neutral-600">
                Checklisten & Templates
              </p>
            </Link>

            <Link
              to="/analyse"
              className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all"
            >
              <TrendingUp className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="text-neutral-900 mb-2">Analyse</h3>
              <p className="text-neutral-600">
                Individuelle Strategie-Beratung
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Consolidation Teaser */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-br from-orange-50 to-yellow-50 border border-orange-200 rounded-2xl p-8 lg:p-12">
          <div className="max-w-3xl">
            <h2 className="text-neutral-900 mb-4">Konsolidierung lohnt sich?</h2>
            <p className="text-neutral-700 mb-6">
              Mehrere Anbieter, hohe Kosten, viel Verwaltung? Berechnen Sie, ob eine Multi-Benefit-Plattform wirtschaftlicher ist.
            </p>
            <Link
              to="/rechner?type=consolidation"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
            >
              <Calculator className="w-5 h-5 mr-2" />
              ROI-Rechner starten
            </Link>
          </div>
        </div>
      </section>

      {/* Trust & Methodology */}
      <section className="bg-neutral-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-neutral-900 mb-4">Wie vergleichen wir?</h2>
              <p className="text-neutral-700 mb-4">
                Unsere Vergleiche basieren auf öffentlichen Informationen, Herstellerangaben, Review-Plattformen und Community-Feedback. Wir prüfen Funktionsumfang, Pricing, Integration und Compliance.
              </p>
              <Link to="/wissen" className="text-blue-600 hover:underline">
                Zur Methodik →
              </Link>
            </div>

            <div>
              <h2 className="text-neutral-900 mb-4">Transparenz & Finanzierung</h2>
              <p className="text-neutral-700 mb-4">
                BenefitsHub.de wird über Affiliate-Links (gekennzeichnet) und Google AdSense finanziert. Unsere Vergleiche bleiben objektiv und redaktionell unabhängig. Anbieter können keine Rankings kaufen.
              </p>
              <a href="#" className="text-blue-600 hover:underline">
                Mehr zur Transparenz →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <p className="text-sm text-neutral-700">
            <strong>Rechtlicher Hinweis:</strong> Alle Angaben ohne Gewähr. BenefitsHub.de bietet keine Steuer-, Rechts- oder Finanzberatung. Bei steuerlichen Fragen konsultieren Sie bitte einen Steuerberater. Stand: Dezember 2025.
          </p>
        </div>
      </section>
    </div>
  );
}
