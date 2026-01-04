// Simple FAQ data - using .js to avoid TypeScript compilation issues

export const faqData = [
  {
    id: 'faq-001',
    question: 'Warum Benefits statt Gehaltserhöhung?',
    answer: 'Gehaltserhöhungen sind teuer für Arbeitgeber (ca. 20% Lohnnebenkosten) und oft wenig spürbar für Mitarbeitende nach Abzug von Steuern und Sozialabgaben. Steuerfreie Benefits bieten mehr Netto-Wert bei geringeren Kosten für den Arbeitgeber.',
    category: 'Grundlagen',
    links: [
      { text: 'Rechner: Gehaltserhöhung vs. Benefits', url: '/rechner' },
      { text: 'Alle Benefits im Überblick', url: '/benefits' }
    ]
  },
  {
    id: 'faq-002',
    question: 'Welche Benefits sind steuerfrei?',
    answer: 'In Deutschland sind folgende Benefits steuerfrei oder steuerbegünstigt: Essenszuschuss (bis 7,23 €/Tag), Sachbezug (50 €/Monat), Fitness & Gesundheit (600 €/Jahr), Kinderbetreuung (600 €/Kind/Jahr), JobRad/Dienstrad, Weiterbildung (bei beruflichem Bezug), ÖPNV-Zuschuss.',
    category: 'Grundlagen',
    links: [
      { text: 'Benefits Explorer', url: '/benefits' },
      { text: 'Wissen: Steuer-Grundlagen', url: '/wissen' }
    ]
  },
  {
    id: 'faq-003',
    question: 'Kann ich Benefits mit Gehaltserhöhung kombinieren?',
    answer: 'Ja, absolut. Viele Arbeitgeber kombinieren eine moderate Gehaltserhöhung mit Benefits, um eine attraktive Gesamt-Vergütung (Total Rewards) zu schaffen. Beispiel: 50 € Gehaltserhöhung + 100 € Benefits bietet mehr Gesamtwert als 150 € Gehaltserhöhung allein.',
    category: 'Grundlagen',
    links: [
      { text: 'Kommunikations-Template', url: '/vorlagen' }
    ]
  },
  {
    id: 'faq-004',
    question: 'Was kostet ein Benefit-Programm?',
    answer: 'Die Kosten setzen sich aus Benefit-Budget + Anbieter-Gebühren zusammen. Essenszuschuss & Sachbezug: ca. 3–10 €/MA/Monat Anbieter-Gebühr. Multi-Benefit-Plattformen: 5–15 €/MA/Monat + Budget. Setup-Gebühren oft 0–1.000 €.',
    category: 'Kosten',
    links: [
      { text: 'Essenszuschuss-Rechner', url: '/rechner' },
      { text: 'Anbieter-Vergleich', url: '/vergleich' }
    ]
  },
  {
    id: 'faq-005',
    question: 'Wie berechne ich den ROI von Benefits?',
    answer: 'ROI umfasst direkte und indirekte Effekte. Direkt: Einsparung Lohnnebenkosten (ca. 20%). Indirekt: Reduzierte Fluktuation, höhere Produktivität, besseres Employer Branding. Typischer ROI: 150–300% über 3 Jahre.',
    category: 'Kosten',
    links: [
      { text: 'ROI-Rechner', url: '/rechner' },
      { text: 'Whitepaper: Benefits-ROI', url: '/whitepaper' }
    ]
  },
  {
    id: 'faq-006',
    question: 'Wie lange dauert die Einführung von Benefits?',
    answer: 'Dauer variiert je nach Benefit: Essenszuschuss & Sachbezug 50€: 1–3 Wochen. JobRad: 3–6 Wochen. Multi-Benefit-Plattform: 4–8 Wochen. Kritischer Pfad: Lohnbuchhaltungs-Integration und interne Freigaben.',
    category: 'Umsetzung',
    links: [
      { text: 'Benefit-Detail: Essenszuschuss', url: '/benefits/essenszuschuss' }
    ]
  },
  {
    id: 'faq-007',
    question: 'Wie wähle ich den richtigen Anbieter aus?',
    answer: 'Prüfen Sie: Funktionsumfang, Pricing, Integration (DATEV, HR-System), Employee UX, Admin UX, Compliance, Reviews. Nutzen Sie unsere Anbieter-Entscheidungsmatrix. Pilotphase mit 10–20 Mitarbeitenden empfohlen.',
    category: 'Umsetzung',
    links: [
      { text: 'Anbieter-Vergleich', url: '/vergleich' },
      { text: 'Anbieter-Verzeichnis', url: '/anbieter' }
    ]
  },
  {
    id: 'faq-008',
    question: 'Brauche ich einen Steuerberater für Benefits?',
    answer: 'Ja, dringend empfohlen. Steuerfreie Benefits müssen korrekt umgesetzt werden, um bei Betriebsprüfungen zu bestehen. Ihr Steuerberater prüft: steuerliche Einordnung, Dokumentationspflichten, Lohnbuchhaltungs-Prozesse.',
    category: 'Umsetzung',
    links: [
      { text: 'Wissen: Steuer-Grundlagen', url: '/wissen' }
    ]
  },
  {
    id: 'faq-009',
    question: 'Wie kommuniziere ich Benefits im Gehaltsgespräch?',
    answer: 'Transparent den Gesamtwert darstellen: "Eine Gehaltserhöhung von 100 € würde netto ca. 60 € bringen. Mit unserem Benefit-Paket bieten wir Ihnen 150 € Wert bei ähnlichen Kosten für uns." Visualisieren Sie Netto-Effekt.',
    category: 'Kommunikation',
    links: [
      { text: 'Kommunikations-Template', url: '/vorlagen' },
      { text: 'Rechner: Netto-Effekt', url: '/rechner' }
    ]
  },
  {
    id: 'faq-010',
    question: 'Was sind die häufigsten Fehler bei Benefits?',
    answer: 'Top Fehler: Sachbezug als Geld ausgezahlt → steuerpflichtig. 50 €-Grenze überschritten → voller Betrag steuerpflichtig. Fehlende Dokumentation. Keine klare Richtlinie. Benefits nicht kommuniziert.',
    category: 'Compliance',
    links: [
      { text: 'Benefit-Richtlinie Muster', url: '/vorlagen' },
      { text: 'Wissen: Tax Compliance', url: '/wissen' }
    ]
  },
  {
    id: 'faq-011',
    question: 'Müssen Benefits für alle Mitarbeitende gleich sein?',
    answer: 'Nein, aber: Es braucht objektive Kriterien, um Diskriminierung zu vermeiden. Zulässige Kriterien: Standort, Abteilung, Seniorität, Vollzeit vs. Teilzeit. Best Practice: Wahlmodelle mit gleichem Budget für alle.',
    category: 'Compliance',
    links: [
      { text: 'Benefit-Richtlinie Muster', url: '/vorlagen' }
    ]
  },
  {
    id: 'faq-012',
    question: 'Können Benefits wieder gestrichen werden?',
    answer: 'Freiwillige Benefits können grundsätzlich angepasst oder gestrichen werden (Freiwilligkeitsvorbehalt in Policy). Sind Benefits arbeitsvertraglich zugesagt, ist Zustimmung erforderlich. Best Practice: Freiwilligkeitsvorbehalt formulieren.',
    category: 'Compliance',
    links: [
      { text: 'Benefit-Richtlinie Muster', url: '/vorlagen' }
    ]
  }
];
