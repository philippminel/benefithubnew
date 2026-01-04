import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white">B</span>
            </div>
            <span className="text-neutral-900">BenefitsHub.de</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link
              to="/benefits"
              className={`transition-colors ${
                isActive('/benefits') ? 'text-blue-600' : 'text-neutral-700 hover:text-blue-600'
              }`}
            >
              Benefits
            </Link>
            <Link
              to="/anbieter"
              className={`transition-colors ${
                isActive('/anbieter') ? 'text-blue-600' : 'text-neutral-700 hover:text-blue-600'
              }`}
            >
              Anbieter
            </Link>
            <Link
              to="/arbeitgeber/benefits-statt-gehaltserhoehung"
              className={`transition-colors ${
                isActive('/arbeitgeber') ? 'text-blue-600' : 'text-neutral-700 hover:text-blue-600'
              }`}
            >
              Arbeitgeber
            </Link>
            <Link
              to="/vergleich"
              className={`transition-colors ${
                isActive('/vergleich') ? 'text-blue-600' : 'text-neutral-700 hover:text-blue-600'
              }`}
            >
              Vergleich
            </Link>
            <Link
              to="/rechner"
              className={`transition-colors ${
                isActive('/rechner') ? 'text-blue-600' : 'text-neutral-700 hover:text-blue-600'
              }`}
            >
              Rechner
            </Link>
            <Link
              to="/wissen"
              className={`transition-colors ${
                isActive('/wissen') ? 'text-blue-600' : 'text-neutral-700 hover:text-blue-600'
              }`}
            >
              Wissen
            </Link>
            <Link
              to="/vorlagen"
              className={`transition-colors ${
                isActive('/vorlagen') ? 'text-blue-600' : 'text-neutral-700 hover:text-blue-600'
              }`}
            >
              Vorlagen
            </Link>
            <Link
              to="/whitepaper"
              className={`transition-colors ${
                isActive('/whitepaper') ? 'text-blue-600' : 'text-neutral-700 hover:text-blue-600'
              }`}
            >
              Whitepaper
            </Link>
            <Link
              to="/analyse"
              className={`px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors ${
                isActive('/analyse') ? 'bg-blue-700' : ''
              }`}
            >
              Analyse
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-neutral-100"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 space-y-2 border-t border-neutral-200">
            <Link
              to="/benefits"
              className="block px-4 py-2 rounded-lg hover:bg-neutral-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Benefits
            </Link>
            <Link
              to="/anbieter"
              className="block px-4 py-2 rounded-lg hover:bg-neutral-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Anbieter
            </Link>
            <Link
              to="/arbeitgeber/benefits-statt-gehaltserhoehung"
              className="block px-4 py-2 rounded-lg hover:bg-neutral-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Arbeitgeber
            </Link>
            <Link
              to="/vergleich"
              className="block px-4 py-2 rounded-lg hover:bg-neutral-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Vergleich
            </Link>
            <Link
              to="/rechner"
              className="block px-4 py-2 rounded-lg hover:bg-neutral-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Rechner
            </Link>
            <Link
              to="/wissen"
              className="block px-4 py-2 rounded-lg hover:bg-neutral-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Wissen
            </Link>
            <Link
              to="/vorlagen"
              className="block px-4 py-2 rounded-lg hover:bg-neutral-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Vorlagen
            </Link>
            <Link
              to="/whitepaper"
              className="block px-4 py-2 rounded-lg hover:bg-neutral-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Whitepaper
            </Link>
            <Link
              to="/analyse"
              className="block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Analyse
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
