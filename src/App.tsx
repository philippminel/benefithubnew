import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { BenefitsExplorer } from './pages/BenefitsExplorer';
import { BenefitDetail } from './pages/BenefitDetail';
import { AnbieterDirectory } from './pages/AnbieterDirectory';
import { AnbieterProfile } from './pages/AnbieterProfile';
import { Vergleich } from './pages/Vergleich';
import { Rechner } from './pages/Rechner';
import { ArbeitgeberHub } from './pages/ArbeitgeberHub';
import { Wissen } from './pages/Wissen';
import { Vorlagen } from './pages/Vorlagen';
import { Whitepaper } from './pages/Whitepaper';
import { Analyse } from './pages/Analyse';
import { CompareProvider } from './context/CompareContext';

export default function App() {
  return (
    <CompareProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-neutral-50">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/benefits" element={<BenefitsExplorer />} />
              <Route path="/benefits/:benefitId" element={<BenefitDetail />} />
              <Route path="/anbieter" element={<AnbieterDirectory />} />
              <Route path="/anbieter/:anbieterId" element={<AnbieterProfile />} />
              <Route path="/vergleich" element={<Vergleich />} />
              <Route path="/rechner" element={<Rechner />} />
              <Route path="/arbeitgeber/*" element={<ArbeitgeberHub />} />
              <Route path="/wissen" element={<Wissen />} />
              <Route path="/vorlagen" element={<Vorlagen />} />
              <Route path="/whitepaper" element={<Whitepaper />} />
              <Route path="/analyse" element={<Analyse />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CompareProvider>
  );
}
