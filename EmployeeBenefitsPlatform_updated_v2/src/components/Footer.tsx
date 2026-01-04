import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white">B</span>
              </div>
              <span className="text-white">BenefitsHub.de</span>
            </div>
            <p className="text-sm text-neutral-400">
              Die neutrale Plattform für Arbeitgeber: Benefits verstehen, Anbieter vergleichen, kosteneffizient entscheiden.
            </p>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="text-white mb-4">Benefits</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/benefits" className="hover:text-white transition-colors">
                  Alle Benefits
                </Link>
              </li>
              <li>
                <Link to="/benefits/essenszuschuss" className="hover:text-white transition-colors">
                  Essenszuschuss
                </Link>
              </li>
              <li>
                <Link to="/benefits/sachbezug" className="hover:text-white transition-colors">
                  Sachbezug 50€
                </Link>
              </li>
              <li>
                <Link to="/benefits/jobrad" className="hover:text-white transition-colors">
                  JobRad / Fahrradleasing
                </Link>
              </li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-white mb-4">Tools & Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/anbieter" className="hover:text-white transition-colors">
                  Anbieter-Verzeichnis
                </Link>
              </li>
              <li>
                <Link to="/vergleich" className="hover:text-white transition-colors">
                  Anbieter vergleichen
                </Link>
              </li>
              <li>
                <Link to="/rechner" className="hover:text-white transition-colors">
                  Kostenrechner
                </Link>
              </li>
              <li>
                <Link to="/vorlagen" className="hover:text-white transition-colors">
                  Vorlagen & Checklisten
                </Link>
              </li>
              <li>
                <Link to="/analyse" className="hover:text-white transition-colors">
                  Individuelle Analyse
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white mb-4">Über uns</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/wissen" className="hover:text-white transition-colors">
                  Wissen & Methodik
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Impressum
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Datenschutz
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Transparenz & Affiliate
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-800 text-sm text-neutral-500 text-center">
          <p>
            © 2025 BenefitsHub.de. Alle Angaben ohne Gewähr. Keine Steuer- oder Rechtsberatung.
          </p>
        </div>
      </div>
    </footer>
  );
}
