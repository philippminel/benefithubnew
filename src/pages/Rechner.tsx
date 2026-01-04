import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Calculator } from 'lucide-react';
import { AdSlot } from '../components/AdSlot';

export function Rechner() {
  const [searchParams] = useSearchParams();
  const initialType = searchParams.get('type') || 'essenszuschuss';
  const [calculatorType, setCalculatorType] = useState<'essenszuschuss' | 'consolidation'>(
    initialType as any
  );

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <section className="bg-white border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center gap-3 mb-4">
            <Calculator className="w-8 h-8 text-blue-600" />
            <h1 className="text-neutral-900">Rechner</h1>
          </div>
          <p className="text-neutral-600 max-w-2xl">
            Berechnen Sie Kosten, Einsparungen und ROI für Benefits.
          </p>
        </div>
      </section>

      {/* Calculator Selector */}
      <section className="bg-white border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex gap-4">
            <button
              onClick={() => setCalculatorType('essenszuschuss')}
              className={`px-6 py-3 rounded-lg transition-colors ${
                calculatorType === 'essenszuschuss'
                  ? 'bg-blue-600 text-white'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              Essenszuschuss
            </button>
            <button
              onClick={() => setCalculatorType('consolidation')}
              className={`px-6 py-3 rounded-lg transition-colors ${
                calculatorType === 'consolidation'
                  ? 'bg-blue-600 text-white'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              Konsolidierung
            </button>
          </div>
        </div>
      </section>

      {/* Calculator Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {calculatorType === 'essenszuschuss' ? (
          <EssenszuschussCalculator />
        ) : (
          <ConsolidationCalculator />
        )}
      </div>
    </div>
  );
}

function EssenszuschussCalculator() {
  const [employees, setEmployees] = useState(50);
  const [workDaysPerMonth, setWorkDaysPerMonth] = useState(20);
  const [subsidyPerDay, setSubsidyPerDay] = useState(7.23);
  const [providerFeePerEmployee, setProviderFeePerEmployee] = useState(5);

  const monthlySubsidy = employees * workDaysPerMonth * subsidyPerDay;
  const monthlyProviderFee = employees * providerFeePerEmployee;
  const monthlyTotal = monthlySubsidy + monthlyProviderFee;
  const annualTotal = monthlyTotal * 12;

  return (
    <div>
      <div className="bg-white border border-neutral-200 rounded-xl p-6 mb-8">
        <h2 className="text-neutral-900 mb-6">Essenszuschuss-Rechner</h2>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm text-neutral-700 mb-2">
              Anzahl Mitarbeitende
            </label>
            <input
              type="number"
              value={employees}
              onChange={(e) => setEmployees(Number(e.target.value))}
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-neutral-700 mb-2">
              Arbeitstage pro Monat (Durchschnitt)
            </label>
            <input
              type="number"
              value={workDaysPerMonth}
              onChange={(e) => setWorkDaysPerMonth(Number(e.target.value))}
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-neutral-700 mb-2">
              Zuschuss pro Arbeitstag (€)
            </label>
            <input
              type="number"
              step="0.01"
              value={subsidyPerDay}
              onChange={(e) => setSubsidyPerDay(Number(e.target.value))}
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-sm text-neutral-500 mt-1">Max. 7,23 € steuerfrei</p>
          </div>

          <div>
            <label className="block text-sm text-neutral-700 mb-2">
              Anbieter-Gebühr pro Mitarbeiter/Monat (€)
            </label>
            <input
              type="number"
              step="0.01"
              value={providerFeePerEmployee}
              onChange={(e) => setProviderFeePerEmployee(Number(e.target.value))}
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-6 mb-8">
        <h3 className="text-neutral-900 mb-4">Ergebnis</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-lg p-4">
            <span className="text-sm text-neutral-600">Monatliche Zuschüsse</span>
            <p className="text-2xl text-neutral-900">{monthlySubsidy.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <span className="text-sm text-neutral-600">Monatliche Anbieter-Gebühren</span>
            <p className="text-2xl text-neutral-900">{monthlyProviderFee.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <span className="text-sm text-neutral-600">Monatlich gesamt</span>
            <p className="text-2xl text-neutral-900">{monthlyTotal.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <span className="text-sm text-neutral-600">Jährlich gesamt</span>
            <p className="text-2xl text-blue-600">{annualTotal.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4">
          <h4 className="text-neutral-900 mb-2">Pro Mitarbeiter/Jahr</h4>
          <p className="text-xl text-neutral-900">
            {(annualTotal / employees).toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €
          </p>
          <p className="text-sm text-neutral-600 mt-1">
            davon {(subsidyPerDay * workDaysPerMonth * 12).toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} € Benefit-Wert
          </p>
        </div>
      </div>

      {/* AdSense Slot */}
      <AdSlot className="mb-8" />

      {/* CTA */}
      <div className="bg-white border border-neutral-200 rounded-xl p-6 text-center">
        <h3 className="text-neutral-900 mb-3">Anbieter vergleichen</h3>
        <p className="text-neutral-600 mb-4">
          Vergleichen Sie Anbieter mit unterschiedlichen Gebührenmodellen.
        </p>
        <Link
          to="/anbieter"
          className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Zum Anbieter-Verzeichnis
        </Link>
      </div>
    </div>
  );
}

function ConsolidationCalculator() {
  const [currentProviders, setCurrentProviders] = useState(4);
  const [avgMonthlyFee, setAvgMonthlyFee] = useState(8);
  const [employees, setEmployees] = useState(100);
  const [adminHoursPerMonth, setAdminHoursPerMonth] = useState(20);
  const [hourlyRate, setHourlyRate] = useState(50);
  const [consolidatedFee, setConsolidatedFee] = useState(10);

  const currentMonthlyProviderCosts = currentProviders * avgMonthlyFee * employees;
  const currentAdminCosts = adminHoursPerMonth * hourlyRate;
  const currentMonthlyTotal = currentMonthlyProviderCosts + currentAdminCosts;
  const currentAnnualTotal = currentMonthlyTotal * 12;

  const consolidatedMonthlyProviderCosts = consolidatedFee * employees;
  const consolidatedAdminHours = adminHoursPerMonth * 0.4; // 60% reduction
  const consolidatedAdminCosts = consolidatedAdminHours * hourlyRate;
  const consolidatedMonthlyTotal = consolidatedMonthlyProviderCosts + consolidatedAdminCosts;
  const consolidatedAnnualTotal = consolidatedMonthlyTotal * 12;

  const annualSavings = currentAnnualTotal - consolidatedAnnualTotal;
  const savingsPercentage = (annualSavings / currentAnnualTotal) * 100;
  const breakEvenMonths = annualSavings > 0 ? 0 : 0; // Assuming no setup fee

  return (
    <div>
      <div className="bg-white border border-neutral-200 rounded-xl p-6 mb-8">
        <h2 className="text-neutral-900 mb-6">Konsolidierungs-ROI-Rechner</h2>
        <p className="text-neutral-600 mb-6">
          Berechnen Sie, ob sich die Konsolidierung mehrerer Anbieter zu einer Multi-Benefit-Plattform lohnt.
        </p>

        <h3 className="text-neutral-900 mb-4">Aktuelle Situation</h3>
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm text-neutral-700 mb-2">
              Anzahl aktueller Anbieter
            </label>
            <input
              type="number"
              value={currentProviders}
              onChange={(e) => setCurrentProviders(Number(e.target.value))}
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-neutral-700 mb-2">
              Durchschnittliche Gebühr pro Anbieter/MA/Monat (€)
            </label>
            <input
              type="number"
              step="0.01"
              value={avgMonthlyFee}
              onChange={(e) => setAvgMonthlyFee(Number(e.target.value))}
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-neutral-700 mb-2">
              Anzahl Mitarbeitende
            </label>
            <input
              type="number"
              value={employees}
              onChange={(e) => setEmployees(Number(e.target.value))}
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-neutral-700 mb-2">
              Admin-Stunden pro Monat (Verwaltung aller Anbieter)
            </label>
            <input
              type="number"
              value={adminHoursPerMonth}
              onChange={(e) => setAdminHoursPerMonth(Number(e.target.value))}
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-neutral-700 mb-2">
              Stundensatz HR/Payroll (€)
            </label>
            <input
              type="number"
              step="0.01"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(Number(e.target.value))}
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <h3 className="text-neutral-900 mb-4">Konsolidierte Lösung</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-neutral-700 mb-2">
              Gebühr Multi-Benefit-Plattform/MA/Monat (€)
            </label>
            <input
              type="number"
              step="0.01"
              value={consolidatedFee}
              onChange={(e) => setConsolidatedFee(Number(e.target.value))}
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-sm text-neutral-500 mt-1">
              Annahme: 60% weniger Admin-Aufwand durch Konsolidierung
            </p>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-xl p-6 mb-8">
        <h3 className="text-neutral-900 mb-6">Vergleich</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Current */}
          <div className="bg-white rounded-lg p-6">
            <h4 className="text-neutral-900 mb-4">Aktuell</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-neutral-600">Anbieter-Gebühren/Monat:</span>
                <span className="text-neutral-900">{currentMonthlyProviderCosts.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600">Admin-Kosten/Monat:</span>
                <span className="text-neutral-900">{currentAdminCosts.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €</span>
              </div>
              <div className="flex justify-between pt-3 border-t border-neutral-200">
                <span className="text-neutral-900">Gesamt/Jahr:</span>
                <span className="text-xl text-neutral-900">{currentAnnualTotal.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €</span>
              </div>
            </div>
          </div>

          {/* Consolidated */}
          <div className="bg-white rounded-lg p-6 border-2 border-green-500">
            <h4 className="text-neutral-900 mb-4">Konsolidiert</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-neutral-600">Anbieter-Gebühren/Monat:</span>
                <span className="text-neutral-900">{consolidatedMonthlyProviderCosts.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600">Admin-Kosten/Monat:</span>
                <span className="text-neutral-900">{consolidatedAdminCosts.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €</span>
              </div>
              <div className="flex justify-between pt-3 border-t border-neutral-200">
                <span className="text-neutral-900">Gesamt/Jahr:</span>
                <span className="text-xl text-green-600">{consolidatedAnnualTotal.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €</span>
              </div>
            </div>
          </div>
        </div>

        {/* Savings */}
        <div className="bg-white rounded-lg p-6">
          <div className="text-center">
            <span className="text-sm text-neutral-600">Jährliche Einsparung</span>
            <p className={`text-4xl mb-2 ${annualSavings > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {annualSavings > 0 ? '+' : ''}{annualSavings.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €
            </p>
            <p className="text-neutral-600">
              {savingsPercentage > 0 ? '+' : ''}{savingsPercentage.toFixed(1)}% {annualSavings > 0 ? 'Ersparnis' : 'Mehrkosten'}
            </p>
          </div>
        </div>
      </div>

      {/* AdSense Slot */}
      <AdSlot className="mb-8" />

      {/* CTA */}
      <div className="bg-white border border-neutral-200 rounded-xl p-6 text-center">
        <h3 className="text-neutral-900 mb-3">Multi-Benefit-Anbieter vergleichen</h3>
        <p className="text-neutral-600 mb-4">
          {annualSavings > 0 
            ? 'Konsolidierung lohnt sich! Vergleichen Sie Multi-Benefit-Plattformen.'
            : 'Prüfen Sie Alternativen mit besseren Konditionen.'
          }
        </p>
        <Link
          to="/vergleich"
          className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Jetzt vergleichen
        </Link>
      </div>
    </div>
  );
}
