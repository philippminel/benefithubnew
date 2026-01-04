export interface Benefit {
  id: string;
  name: string;
  shortDescription: string;
  benefitType: 'steuerfrei' | 'entgeltumwandlung' | 'rabatte';
  employerCost: string;
  deliveryMethods: string[];
  budgetModel: boolean;
  adminEffort: 'low' | 'medium' | 'high';
  maxAmount?: string;
  description: string;
  taxLogic: string;
  prerequisites: string[];
  implementation: {
    steps: string[];
    duration: string;
    pitfalls: string[];
  };
}

export const benefits: Benefit[] = [
  {
    id: 'essenszuschuss',
    name: 'Essenszuschuss',
    shortDescription: 'Zuschuss zu Mahlzeiten während der Arbeitszeit',
    benefitType: 'steuerfrei',
    employerCost: 'Bis zu 7,23 € pro Arbeitstag',
    deliveryMethods: ['App', 'Karte', 'Beleg-Upload'],
    budgetModel: true,
    adminEffort: 'low',
    maxAmount: '7,23 € pro Arbeitstag',
    description: 'Der Essenszuschuss ermöglicht es Arbeitgebern, Mahlzeiten während der Arbeitszeit steuerlich begünstigt zu bezuschussen. Bis zu 7,23 € pro Arbeitstag können steuerfrei erstattet werden.',
    taxLogic: 'Gemäß § 8 Abs. 2 Satz 8 EStG können Arbeitgeber Mahlzeiten während der Arbeitszeit mit bis zu 7,23 € pro Arbeitstag steuerfrei bezuschussen. Der Sachbezugswert für Mahlzeiten (derzeit 4,13 €) muss dabei berücksichtigt werden. Disclaimer: Dies ist keine Steuerberatung. Bitte konsultieren Sie Ihren Steuerberater.',
    prerequisites: [
      'Mahlzeiten müssen während der Arbeitszeit eingenommen werden',
      'Dokumentation der Arbeitstage erforderlich',
      'Zuschuss muss zusätzlich zum Gehalt erfolgen'
    ],
    implementation: {
      steps: [
        'Benefit-Anbieter auswählen und Vertrag abschließen',
        'Mitarbeitende registrieren (App, Karte oder Portal)',
        'Lohnbuchhaltung über Schnittstelle/Export informieren',
        'Interne Richtlinie kommunizieren',
        'Monitoring und Compliance sicherstellen'
      ],
      duration: '2–4 Wochen bis zum Rollout',
      pitfalls: [
        'Sachbezugswert nicht korrekt abgezogen',
        'Zuschuss wird als Barlohn ausgezahlt (dann steuerpflichtig)',
        'Fehlende Dokumentation bei Betriebsprüfung'
      ]
    }
  },
  {
    id: 'sachbezug',
    name: 'Sachbezug 50€',
    shortDescription: 'Monatlicher Sachbezug bis 50 € steuerfrei',
    benefitType: 'steuerfrei',
    employerCost: 'Bis zu 50 € pro Monat',
    deliveryMethods: ['App', 'Karte', 'Virtueller Gutschein'],
    budgetModel: true,
    adminEffort: 'low',
    maxAmount: '50 € pro Monat',
    description: 'Der monatliche Sachbezug ermöglicht Arbeitgebern, bis zu 50 € pro Monat und Mitarbeiter steuerfrei als Sachleistung bereitzustellen. Nutzbar für Shopping, Tankgutscheine, oder andere Sachleistungen.',
    taxLogic: 'Gemäß § 8 Abs. 2 Satz 11 EStG bleiben Sachbezüge bis 50 € pro Monat steuerfrei. Wichtig: Es muss sich um echte Sachleistungen handeln, keine Geldauszahlung. Disclaimer: Dies ist keine Steuerberatung.',
    prerequisites: [
      'Muss als Sachbezug (nicht Geld) ausgegeben werden',
      'Zusätzlich zum Gehalt (keine Umwandlung)',
      'Monatliche Grenze 50 € pro Mitarbeiter'
    ],
    implementation: {
      steps: [
        'Anbieter-Plattform auswählen (Karte oder App)',
        'Mitarbeitende onboarden',
        'Budget monatlich bereitstellen',
        'Lohnbuchhaltung über Freibetrag informieren',
        'Nutzung monitoren'
      ],
      duration: '1–3 Wochen',
      pitfalls: [
        '50 € Grenze überschritten (dann voll steuerpflichtig)',
        'Als Barlohn ausgezahlt statt als Sachbezug',
        'Doppelnutzung mit anderen Sachbezügen (z.B. Tankgutschein)'
      ]
    }
  },
  {
    id: 'jobrad',
    name: 'JobRad / Fahrradleasing',
    shortDescription: 'Dienstrad via Entgeltumwandlung oder AG-Zuschuss',
    benefitType: 'entgeltumwandlung',
    employerCost: '0 € (Entgeltumwandlung) + Prozesskosten oder AG-Zuschuss möglich',
    deliveryMethods: ['Portal', 'Beleg-Upload'],
    budgetModel: false,
    adminEffort: 'medium',
    description: 'JobRad (Fahrradleasing) ermöglicht es Mitarbeitenden, ein Dienstrad über Entgeltumwandlung zu leasen. Der Arbeitgeber kann zusätzlich einen steuerfreien Zuschuss leisten.',
    taxLogic: 'Seit 2020 sind Diensträder für Fahrten zwischen Wohnung und Arbeitsstätte steuerfrei (§ 3 Nr. 37 EStG). Bei Entgeltumwandlung werden die Leasingraten vom Bruttogehalt abgezogen. Disclaimer: Keine Steuerberatung.',
    prerequisites: [
      'Überlassungsvertrag zwischen AG und AN',
      'Leasingvertrag mit Dienstrad-Anbieter',
      'Versicherungsschutz klären'
    ],
    implementation: {
      steps: [
        'JobRad-Anbieter auswählen (z.B. JobRad, Lease a Bike, BusinessBike)',
        'Rahmenvertrag abschließen',
        'Mitarbeitende wählen Rad beim Händler',
        'Leasingantrag digital abwickeln',
        'Gehaltsabrechnung anpassen (Entgeltumwandlung)',
        'Rad wird übergeben'
      ],
      duration: '3–6 Wochen (inkl. Lieferzeit)',
      pitfalls: [
        'Versicherungskosten nicht eingepreist',
        'Rückgabe/Übernahme am Leasingende nicht geklärt',
        'Steuerliche Behandlung bei vorzeitiger Kündigung'
      ]
    }
  },
  {
    id: 'weiterbildung',
    name: 'Weiterbildungsbudget',
    shortDescription: 'Budget für berufliche Fort- und Weiterbildung',
    benefitType: 'steuerfrei',
    employerCost: 'Individuell, steuerfrei bei beruflichem Bezug',
    deliveryMethods: ['Portal', 'Erstattung', 'Beleg-Upload'],
    budgetModel: true,
    adminEffort: 'medium',
    description: 'Ein Weiterbildungsbudget ermöglicht Mitarbeitenden, Kurse, Seminare, Zertifikate oder Konferenzen zu besuchen. Steuerlich begünstigt, wenn beruflicher Bezug nachgewiesen wird.',
    taxLogic: 'Weiterbildungskosten mit beruflichem Bezug sind steuerfrei (§ 3 Nr. 19 EStG). Wichtig: Der Bezug zur aktuellen oder künftigen Tätigkeit muss erkennbar sein. Disclaimer: Keine Steuerberatung.',
    prerequisites: [
      'Beruflicher Bezug nachweisbar',
      'Genehmigungsprozess definieren',
      'Budget pro Mitarbeiter festlegen'
    ],
    implementation: {
      steps: [
        'Weiterbildungs-Policy definieren (Umfang, Prozess, Genehmigung)',
        'Budget festlegen (z.B. 500–2.000 € pro Jahr/MA)',
        'Plattform oder Erstattungsprozess aufsetzen',
        'Mitarbeitende informieren',
        'Nachweise sammeln (Teilnahmebescheinigung, Rechnung)'
      ],
      duration: '2–4 Wochen',
      pitfalls: [
        'Private Kurse werden beantragt (steuerliche Risiken)',
        'Keine klare Richtlinie → Ungleichbehandlung',
        'Nachweise fehlen bei Betriebsprüfung'
      ]
    }
  },
  {
    id: 'zuschuss-kinderbetreuung',
    name: 'Zuschuss Kinderbetreuung',
    shortDescription: 'Steuerfrei bis 600 € pro Kind/Jahr für Kita oder Tagesmutter',
    benefitType: 'steuerfrei',
    employerCost: 'Bis zu 600 € pro Kind/Jahr',
    deliveryMethods: ['Erstattung', 'Beleg-Upload'],
    budgetModel: false,
    adminEffort: 'medium',
    description: 'Arbeitgeber können Kinderbetreuungskosten (Kita, Kindergarten, Tagesmutter) bis zu 600 € pro Kind und Jahr steuerfrei bezuschussen.',
    taxLogic: 'Gemäß § 3 Nr. 33 EStG sind Zuschüsse zu Kinderbetreuungskosten bis 600 € pro Kind und Jahr steuerfrei. Disclaimer: Keine Steuerberatung.',
    prerequisites: [
      'Nachweis der Kinderbetreuungskosten (Rechnung)',
      'Kind muss unter 6 Jahre alt sein (Kita-Alter)',
      'Zuschuss zusätzlich zum Gehalt'
    ],
    implementation: {
      steps: [
        'Interne Richtlinie erstellen',
        'Erstattungsprozess definieren',
        'Mitarbeitende informieren',
        'Belege einreichen lassen (Rechnung Kita)',
        'Erstattung auszahlen oder direkt überweisen'
      ],
      duration: '1–2 Wochen',
      pitfalls: [
        'Altersgrenze überschritten',
        'Private Betreuung durch Verwandte (steuerlich kritisch)',
        'Fehlende Nachweise'
      ]
    }
  },
  {
    id: 'fitness',
    name: 'Fitnessstudio & Gesundheit',
    shortDescription: 'Zuschuss zu Fitnessstudio, Yoga, Physiotherapie etc.',
    benefitType: 'steuerfrei',
    employerCost: 'Bis zu 600 € pro Jahr (§ 3 Nr. 34 EStG)',
    deliveryMethods: ['App', 'Karte', 'Erstattung'],
    budgetModel: true,
    adminEffort: 'low',
    maxAmount: '600 € pro Jahr',
    description: 'Arbeitgeber können Gesundheitsförderung (z.B. Fitnessstudio, Präventionskurse, Physiotherapie) bis zu 600 € pro Jahr und Mitarbeiter steuerfrei fördern.',
    taxLogic: 'Gemäß § 3 Nr. 34 EStG sind Leistungen zur betrieblichen Gesundheitsförderung bis 600 € pro Jahr steuerfrei. Wichtig: Kurse müssen nach § 20 SGB V zertifiziert sein. Disclaimer: Keine Steuerberatung.',
    prerequisites: [
      'Maßnahmen müssen § 20 SGB V entsprechen (zertifiziert)',
      'Zusätzlich zum Gehalt',
      'Dokumentation erforderlich'
    ],
    implementation: {
      steps: [
        'Anbieter-Plattform wählen (z.B. EGYM Wellpass, Urban Sports Club)',
        'Mitarbeitende registrieren',
        'Budget bereitstellen oder Flatrate buchen',
        'Lohnbuchhaltung über Freibetrag informieren',
        'Nutzung monitoren'
      ],
      duration: '1–3 Wochen',
      pitfalls: [
        'Nicht zertifizierte Kurse (dann steuerpflichtig)',
        '600 € Grenze überschritten',
        'Private Fitnessstudio-Mitgliedschaft direkt erstattet (steuerlich kritisch)'
      ]
    }
  }
];

export const benefitTypes = {
  steuerfrei: {
    label: 'Steuerfrei / AG-Zuschuss',
    color: 'bg-green-100 text-green-800',
    description: 'Arbeitgeber zahlt zusätzlich zum Gehalt, steuerfrei für Mitarbeiter'
  },
  entgeltumwandlung: {
    label: 'Entgeltumwandlung',
    color: 'bg-blue-100 text-blue-800',
    description: 'Vom Bruttogehalt abgezogen, reduziert Steuern und Sozialabgaben'
  },
  rabatte: {
    label: 'Rabatte & Vorteile',
    color: 'bg-purple-100 text-purple-800',
    description: 'Corporate Benefits, Mitarbeiterrabatte (steuerlich unterschiedlich)'
  }
};
