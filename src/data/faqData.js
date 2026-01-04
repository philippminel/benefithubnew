// Simple FAQ data - using .js to avoid TypeScript compilation issues
// Hinweis: Steuerliche Rahmenbedingungen und Beträge (z. B. Sachbezugswerte) können sich ändern.
// Keine Steuer- oder Rechtsberatung.

export const faqData = [
  {
    id: 'faq-001',
    question: 'Warum Benefits statt Gehaltserhöhung?',
    answer:
      'Gehaltserhöhungen sind für Arbeitgeber oft deutlich teurer als der Bruttobetrag (wegen Lohnnebenkosten) und kommen bei Mitarbeitenden nach Steuern und Sozialabgaben häufig nur teilweise an. Steuerfreie bzw. steuerbegünstigte Benefits können – korrekt umgesetzt – mehr Netto-Wert bei vergleichbaren oder geringeren Gesamtkosten bieten.',
    category: 'Grundlagen',
    links: [
      { text: 'Rechner: Gehaltserhöhung vs. Benefits', url: '/rechner' },
      { text: 'Alle Benefits im Überblick', url: '/benefits' }
    ]
  },
  {
    id: 'faq-002',
    question: 'Welche Benefits sind steuerfrei?',
    answer:
      'In Deutschland gibt es Benefits, die steuerfrei oder steuerbegünstigt sein können – abhängig von Ausgestaltung und Nachweisen. Häufige Beispiele: Essenszuschuss (bis zur gesetzlichen Pauschale pro Arbeitstag), Sachbezug (bis zur gesetzlichen Monatsgrenze), betriebliche Gesundheitsförderung (bis zur gesetzlichen Jahresgrenze – i. d. R. nur für begünstigte/zertifizierte Maßnahmen), Zuschüsse zur Kinderbetreuung (bei Voraussetzungen und Belegen), Dienstrad/JobRad (steuerlich begünstigt, oft über Entgeltumwandlung), Weiterbildung (bei beruflichem Bezug) sowie ÖPNV-/Jobticket-Leistungen (je nach Ausgestaltung). Hinweis: Die konkreten Beträge und Regeln ändern sich teilweise – bitte immer aktuelle Werte prüfen. Disclaimer: Keine Steuerberatung.',
    category: 'Grundlagen',
    links: [
      { text: 'Benefits Explorer', url: '/benefits' },
      { text: 'Wissen: Steuer-Grundlagen', url: '/wissen' }
    ]
  },
  {
    id: 'faq-003',
    question: 'Kann ich Benefits mit Gehaltserhöhung kombinieren?',
    answer:
      'Ja. Viele Arbeitgeber kombinieren eine moderate Gehaltserhöhung mit Benefits, um eine attraktive Gesamt-Vergütung (Total Rewards) zu schaffen. Beispiel (vereinfacht): 50 € Gehaltserhöhung + 100 € Benefits kann für Mitarbeitende spürbarer sein als 150 € Gehaltserhöhung allein – je nach Steuersatz, Sozialabgaben und Benefit-Ausgestaltung.',
    category: 'Grundlagen',
    links: [{ text: 'Kommunikations-Template', url: '/vorlagen' }]
  },
  {
    id: 'faq-004',
    question: 'Was kostet ein Benefit-Programm?',
    answer:
      'Die Kosten setzen sich aus Benefit-Budget + Anbieter-Gebühren zusammen. Karten-/App-Lösungen für Essenszuschuss & Sachbezug liegen häufig im Bereich ca. 3–10 €/MA/Monat Anbieter-Gebühr. Multi-Benefit-Plattformen häufig ca. 5–15 €/MA/Monat (zzgl. Budget). Setup-Gebühren sind je nach Anbieter und Unternehmensgröße oft 0–1.000 €.',
    category: 'Kosten',
    links: [
      { text: 'Essenszuschuss-Rechner', url: '/rechner' },
      { text: 'Anbieter-Vergleich', url: '/vergleich' }
    ]
  },
  {
    id: 'faq-005',
    question: 'Wie berechne ich den ROI von Benefits?',
    answer:
      'ROI umfasst direkte und indirekte Effekte. Direkt: mögliche Einsparung von Lohnnebenkosten (je nach Abgaben- und Benefit-Logik). Indirekt: reduzierte Fluktuation, höhere Produktivität, weniger Fehlzeiten, besseres Employer Branding. Der tatsächliche ROI hängt stark von Zielgruppe, Nutzung, Kommunikation und Umsetzung ab – daher am besten mit Pilot, Annahmen und Sensitivitäten rechnen.',
    category: 'Kosten',
    links: [
      { text: 'ROI-Rechner', url: '/rechner' },
      { text: 'Whitepaper: Benefits-ROI', url: '/whitepaper' }
    ]
  },
  {
    id: 'faq-006',
    question: 'Wie lange dauert die Einführung von Benefits?',
    answer:
      'Die Dauer variiert je nach Benefit und internen Freigaben: Essenszuschuss & Sachbezug: oft 1–3 Wochen. JobRad/Dienstrad: häufig 3–6 Wochen (inkl. Prozess/ggf. Lieferzeit). Multi-Benefit-Plattformen: oft 4–8 Wochen. Kritischer Pfad: Payroll/Lohnbuchhaltungs-Prozess, Compliance-Freigaben und klare interne Richtlinien.',
    category: 'Umsetzung',
    links: [{ text: 'Benefit-Detail: Essenszuschuss', url: '/benefits/essenszuschuss' }]
  },
  {
    id: 'faq-007',
    question: 'Wie wähle ich den richtigen Anbieter aus?',
    answer:
      'Prüfen Sie: Funktionsumfang, Pricing, Integration (z.B. DATEV, HR-System), Employee UX, Admin UX, Compliance/Steuerlogik, Reporting sowie Reviews. Nutzen Sie eine Entscheidungsmatrix und testen Sie – wenn möglich – mit einer Pilotgruppe (z.B. 10–20 Mitarbeitende).',
    category: 'Umsetzung',
    links: [
      { text: 'Anbieter-Vergleich', url: '/vergleich' },
      { text: 'Anbieter-Verzeichnis', url: '/anbieter' }
    ]
  },
  {
    id: 'faq-008',
    question: 'Brauche ich einen Steuerberater für Benefits?',
    answer:
      'Ja, dringend empfohlen. Steuerfreie/steuerbegünstigte Benefits müssen korrekt umgesetzt werden, um bei Prüfungen zu bestehen. Steuerberatung unterstützt typischerweise bei Einordnung, Zusätzlichkeitsprinzip, Dokumentationspflichten und Payroll-Prozessen.',
    category: 'Umsetzung',
    links: [{ text: 'Wissen: Steuer-Grundlagen', url: '/wissen' }]
  },
  {
    id: 'faq-009',
    question: 'Wie kommuniziere ich Benefits im Gehaltsgespräch?',
    answer:
      'Transparent den Gesamtwert darstellen und den Netto-Effekt erklären. Beispiel (vereinfacht): „Eine Gehaltserhöhung von 100 € bringt netto häufig deutlich weniger. Mit unserem Benefit-Paket können wir zusätzlich einen spürbaren Netto-Mehrwert bieten – bei ähnlichen Gesamtkosten.“ Idealerweise visualisieren (z.B. mit Rechner).',
    category: 'Kommunikation',
    links: [
      { text: 'Kommunikations-Template', url: '/vorlagen' },
      { text: 'Rechner: Netto-Effekt', url: '/rechner' }
    ]
  },
  {
    id: 'faq-010',
    question: 'Was sind die häufigsten Fehler bei Benefits?',
    answer:
      'Top Fehler: Sachbezug als Geld ausgezahlt → dann steuerpflichtig. Grenzen überschritten → dann ggf. steuerpflichtig. Fehlende Dokumentation. Keine klare Richtlinie. Benefits werden eingeführt, aber nicht aktiv kommuniziert (→ geringe Nutzung).',
    category: 'Compliance',
    links: [
      { text: 'Benefit-Richtlinie Muster', url: '/vorlagen' },
      { text: 'Wissen: Tax Compliance', url: '/wissen' }
    ]
  },
  {
    id: 'faq-011',
    question: 'Müssen Benefits für alle Mitarbeitende gleich sein?',
    answer:
      'Nein, aber es braucht objektive Kriterien, um Ungleichbehandlung zu vermeiden. Häufige Kriterien: Standort, Rolle/Abteilung, Vollzeit vs. Teilzeit, Tarif/Non-Tarif. Best Practice: Wahlmodelle mit gleichem Budgetrahmen und klaren Regeln.',
    category: 'Compliance',
    links: [{ text: 'Benefit-Richtlinie Muster', url: '/vorlagen' }]
  },
  {
    id: 'faq-012',
    question: 'Können Benefits wieder gestrichen werden?',
    answer:
      'Freiwillige Benefits können grundsätzlich angepasst oder gestrichen werden, wenn das sauber geregelt ist (z.B. über eine Policy mit Freiwilligkeitsvorbehalt). Wenn Benefits arbeitsvertraglich zugesagt sind, ist in der Regel Zustimmung erforderlich. Best Practice: klare Regelung + transparente Kommunikation.',
    category: 'Compliance',
    links: [{ text: 'Benefit-Richtlinie Muster', url: '/vorlagen' }]
  }
];

