export interface Provider {
  id: string;
  name: string;
  website?: string;
  categories?: string[];
  providerType?: string[];
  aliases?: string[];
  logo?: string;
  founded?: number;
  customers?: string;
  tagline: string;
  benefits: string[];
  deliveryMethods: string[];
  budgetModel: boolean;
  eligibilityRules: boolean;
  payrollIntegration: string[];
  pricingModel: string;
  pricingRange?: string;
  trustpilotScore?: number;
  kunuduScore?: number;
  attributes: {
    pricing: {
      setupFee: string;
      monthlyPerEmployee: string;
      transactionFee: string;
    };
    coverage: {
      benefits: string[];
      multibenefitPlatform: boolean;
    };
    compliance: {
      taxCompliance: boolean;
      payrollExport: boolean;
      datevIntegration: boolean;
    };
    integrations: string[];
    employeeUX: {
      app: boolean;
      card: boolean;
      webPortal: boolean;
    };
    adminUX: {
      dashboard: boolean;
      reporting: boolean;
      support: string;
    };
  };
  reviews: {
    trustpilot?: {
      score: number;
      count: number;
      url: string;
    };
    kununu?: {
      score: number;
      count: number;
      url: string;
    };
    omr?: {
      score: number;
      count: number;
      url: string;
    };
  };
  reviewSummary: string[];
  redditSummary: string[];
}

export const detailedProviders: Provider[] = [
  {
    id: 'pluxee',
    name: 'Pluxee (ehem. Sodexo)',
    founded: 1966,
    customers: '36 Mio. Nutzer weltweit',
    tagline: 'Multi-Benefit-Plattform mit Essenszuschuss, Sachbezug, Mobilität',
    benefits: ['Essenszuschuss', 'Sachbezug 50€', 'Mobilität'],
    deliveryMethods: ['App', 'Karte', 'Portal'],
    budgetModel: true,
    eligibilityRules: true,
    payrollIntegration: ['DATEV', 'Lexware', 'CSV-Export'],
    pricingModel: 'Monatliche Gebühr pro Mitarbeiter',
    pricingRange: '3–8 € pro Mitarbeiter/Monat',
    attributes: {
      pricing: {
        setupFee: '0–500 €',
        monthlyPerEmployee: '3–8 €',
        transactionFee: '0 %'
      },
      coverage: {
        benefits: ['Essenszuschuss', 'Sachbezug 50€', 'Mobilität', 'Gutscheine'],
        multibenefitPlatform: true
      },
      compliance: {
        taxCompliance: true,
        payrollExport: true,
        datevIntegration: true
      },
      integrations: ['DATEV', 'Lexware', 'Personio', 'SAP SuccessFactors'],
      employeeUX: {
        app: true,
        card: true,
        webPortal: true
      },
      adminUX: {
        dashboard: true,
        reporting: true,
        support: 'E-Mail, Telefon, Chat'
      }
    },
    reviews: {
      trustpilot: {
        score: 4.2,
        count: 850,
        url: 'https://de.trustpilot.com/review/pluxee.de'
      },
      kununu: {
        score: 3.8,
        count: 120,
        url: 'https://www.kununu.com/de/pluxee'
      }
    },
    reviewSummary: [
      'Große Akzeptanzstellen-Netzwerk (Restaurants, Supermärkte)',
      'Stabile App, gute Kartenlösung',
      'Setup manchmal länger als erwartet',
      'Support reaktionsschnell bei technischen Fragen',
      'Preislich im mittleren Segment'
    ],
    redditSummary: [
      'Wird oft als "Klassiker" genannt, solide Lösung',
      'Akzeptanz bei großen Ketten gut, bei kleineren Cafés unterschiedlich',
      'Einige Nutzer berichten von langsamen Freischaltungen'
    ]
  },
  {
    id: 'navit',
    name: 'NAVIT',
    founded: 2018,
    customers: '2.000+ Unternehmen',
    tagline: 'Multi-Benefit-Plattform mit Fokus auf Mobilität & Essenszuschuss',
    benefits: ['Essenszuschuss', 'Sachbezug 50€', 'Mobilität', 'ÖPNV'],
    deliveryMethods: ['App', 'Karte', 'Portal'],
    budgetModel: true,
    eligibilityRules: true,
    payrollIntegration: ['DATEV', 'CSV-Export'],
    pricingModel: 'Monatliche Gebühr pro Mitarbeiter',
    pricingRange: '4–9 € pro Mitarbeiter/Monat',
    attributes: {
      pricing: {
        setupFee: '0 €',
        monthlyPerEmployee: '4–9 €',
        transactionFee: '0 %'
      },
      coverage: {
        benefits: ['Essenszuschuss', 'Sachbezug 50€', 'Mobilität', 'ÖPNV', 'Tanken'],
        multibenefitPlatform: true
      },
      compliance: {
        taxCompliance: true,
        payrollExport: true,
        datevIntegration: true
      },
      integrations: ['DATEV', 'Personio', 'HiBob'],
      employeeUX: {
        app: true,
        card: true,
        webPortal: true
      },
      adminUX: {
        dashboard: true,
        reporting: true,
        support: 'E-Mail, Telefon'
      }
    },
    reviews: {
      trustpilot: {
        score: 4.5,
        count: 320,
        url: 'https://de.trustpilot.com/review/navit.de'
      }
    },
    reviewSummary: [
      'Modernes UI, intuitive App',
      'Schneller Onboarding-Prozess',
      'Gute Mobilität-Benefits (ÖPNV, Tanken)',
      'Support freundlich, aber manchmal langsam',
      'Akzeptanzstellen-Netzwerk wächst'
    ],
    redditSummary: [
      'Wird als "moderne Alternative" zu Sodexo/Pluxee genannt',
      'Gut für Startups und mittelständische Unternehmen',
      'Einige Nutzer wünschen sich mehr Restaurants'
    ]
  },
  {
    id: 'edenred',
    name: 'Edenred',
    founded: 1962,
    customers: '50 Mio. Nutzer weltweit',
    tagline: 'Globaler Marktführer für Essenszuschuss & Benefits',
    benefits: ['Essenszuschuss', 'Sachbezug 50€', 'Mobilität'],
    deliveryMethods: ['Karte', 'App', 'Portal'],
    budgetModel: true,
    eligibilityRules: true,
    payrollIntegration: ['DATEV', 'SAP', 'CSV-Export'],
    pricingModel: 'Monatliche Gebühr pro Mitarbeiter',
    pricingRange: '4–10 € pro Mitarbeiter/Monat',
    attributes: {
      pricing: {
        setupFee: '0–1.000 €',
        monthlyPerEmployee: '4–10 €',
        transactionFee: '0 %'
      },
      coverage: {
        benefits: ['Essenszuschuss', 'Sachbezug 50€', 'Mobilität'],
        multibenefitPlatform: true
      },
      compliance: {
        taxCompliance: true,
        payrollExport: true,
        datevIntegration: true
      },
      integrations: ['DATEV', 'SAP', 'Workday', 'Personio'],
      employeeUX: {
        app: true,
        card: true,
        webPortal: true
      },
      adminUX: {
        dashboard: true,
        reporting: true,
        support: 'E-Mail, Telefon, Account Manager'
      }
    },
    reviews: {
      trustpilot: {
        score: 4.1,
        count: 1200,
        url: 'https://de.trustpilot.com/review/edenred.de'
      },
      kununu: {
        score: 3.6,
        count: 90,
        url: 'https://www.kununu.com/de/edenred'
      }
    },
    reviewSummary: [
      'Sehr großes Akzeptanzstellen-Netzwerk',
      'Enterprise-tauglich, gut für große Unternehmen',
      'Setup bei Konzernen komplex, aber gut begleitet',
      'Preislich im oberen Segment',
      'Account Management für größere Kunden'
    ],
    redditSummary: [
      'Oft genannt als "sicher, aber teuer"',
      'Akzeptanz top, besonders bei großen Ketten',
      'App weniger modern als bei neueren Anbietern'
    ]
  },
  {
    id: 'circula',
    name: 'Circula',
    founded: 2017,
    customers: '1.500+ Unternehmen',
    tagline: 'Reisekosten, Essenszuschuss & Benefits in einer Plattform',
    benefits: ['Essenszuschuss', 'Sachbezug 50€', 'Reisekosten'],
    deliveryMethods: ['App', 'Karte', 'Portal'],
    budgetModel: true,
    eligibilityRules: true,
    payrollIntegration: ['DATEV', 'CSV-Export'],
    pricingModel: 'Monatliche Gebühr pro Mitarbeiter',
    pricingRange: '5–12 € pro Mitarbeiter/Monat',
    attributes: {
      pricing: {
        setupFee: '0 €',
        monthlyPerEmployee: '5–12 €',
        transactionFee: '0 %'
      },
      coverage: {
        benefits: ['Essenszuschuss', 'Sachbezug 50€', 'Reisekosten', 'Tankgutscheine'],
        multibenefitPlatform: true
      },
      compliance: {
        taxCompliance: true,
        payrollExport: true,
        datevIntegration: true
      },
      integrations: ['DATEV', 'Personio', 'Lexware'],
      employeeUX: {
        app: true,
        card: true,
        webPortal: true
      },
      adminUX: {
        dashboard: true,
        reporting: true,
        support: 'E-Mail, Chat'
      }
    },
    reviews: {
      trustpilot: {
        score: 4.6,
        count: 180,
        url: 'https://de.trustpilot.com/review/circula.com'
      }
    },
    reviewSummary: [
      'Starke Reisekosten-Features (Mehrwert für Außendienst)',
      'Moderne App, schnelle Updates',
      'Gut für wachsende Unternehmen',
      'Preislich im mittleren bis oberen Segment',
      'Support sehr hilfsbereit'
    ],
    redditSummary: [
      'Oft empfohlen für Unternehmen mit viel Reisetätigkeit',
      'Kombination Reisekosten + Benefits praktisch',
      'Einige Nutzer finden Preis hoch bei reiner Benefit-Nutzung'
    ]
  },
  {
    id: 'jobrad',
    name: 'JobRad',
    founded: 2008,
    customers: '40.000+ Arbeitgeber',
    tagline: 'Marktführer für Dienstrad-Leasing in Deutschland',
    benefits: ['JobRad / Fahrradleasing'],
    deliveryMethods: ['Portal', 'Beleg-Upload'],
    budgetModel: false,
    eligibilityRules: false,
    payrollIntegration: ['DATEV', 'CSV-Export'],
    pricingModel: 'Leasingrate + Servicegebühr',
    pricingRange: 'Abhängig von Radwert, ca. 5–15 € Service/Monat',
    attributes: {
      pricing: {
        setupFee: '0 €',
        monthlyPerEmployee: 'k.A. (abhängig von Leasingrate)',
        transactionFee: 'Servicegebühr ca. 5–15 €/Monat'
      },
      coverage: {
        benefits: ['JobRad / Fahrradleasing'],
        multibenefitPlatform: false
      },
      compliance: {
        taxCompliance: true,
        payrollExport: true,
        datevIntegration: true
      },
      integrations: ['DATEV', 'Lexware', 'Personio'],
      employeeUX: {
        app: false,
        card: false,
        webPortal: true
      },
      adminUX: {
        dashboard: true,
        reporting: true,
        support: 'E-Mail, Telefon'
      }
    },
    reviews: {
      trustpilot: {
        score: 4.3,
        count: 2500,
        url: 'https://de.trustpilot.com/review/jobrad.org'
      },
      kununu: {
        score: 4.1,
        count: 200,
        url: 'https://www.kununu.com/de/jobrad'
      }
    },
    reviewSummary: [
      'Größtes Händlernetzwerk in Deutschland',
      'Prozess meist reibungslos',
      'Versicherung oft Zusatzkosten',
      'Support bei Schadensfällen durchwachsen',
      'Marktführer, hohe Bekanntheit'
    ],
    redditSummary: [
      'Wird am häufigsten genannt bei Dienstrad',
      'Gute Händlerabdeckung, aber Preise variieren stark',
      'Versicherung separat prüfen (kann teuer werden)'
    ]
  },
  {
    id: 'benefits-me',
    name: 'benefits.me',
    founded: 2019,
    customers: '500+ Unternehmen',
    tagline: 'Flexible Benefit-Plattform mit individuellen Budgetmodellen',
    benefits: ['Essenszuschuss', 'Sachbezug 50€', 'Fitness', 'Weiterbildung', 'Mobilität'],
    deliveryMethods: ['App', 'Karte', 'Portal'],
    budgetModel: true,
    eligibilityRules: true,
    payrollIntegration: ['DATEV', 'CSV-Export'],
    pricingModel: 'Monatliche Gebühr pro Mitarbeiter',
    pricingRange: '6–14 € pro Mitarbeiter/Monat',
    attributes: {
      pricing: {
        setupFee: '0 €',
        monthlyPerEmployee: '6–14 €',
        transactionFee: '0 %'
      },
      coverage: {
        benefits: ['Essenszuschuss', 'Sachbezug 50€', 'Fitness', 'Weiterbildung', 'Mobilität'],
        multibenefitPlatform: true
      },
      compliance: {
        taxCompliance: true,
        payrollExport: true,
        datevIntegration: true
      },
      integrations: ['DATEV', 'Personio'],
      employeeUX: {
        app: true,
        card: true,
        webPortal: true
      },
      adminUX: {
        dashboard: true,
        reporting: true,
        support: 'E-Mail, Chat'
      }
    },
    reviews: {
      trustpilot: {
        score: 4.4,
        count: 95,
        url: 'https://de.trustpilot.com/review/benefits.me'
      }
    },
    reviewSummary: [
      'Sehr flexible Budgetmodelle (individuelle Kategorien)',
      'Gute Weiterbildungs- und Fitness-Integration',
      'Onboarding schnell und unkompliziert',
      'Noch kleineres Akzeptanzstellen-Netzwerk',
      'Support sehr persönlich'
    ],
    redditSummary: [
      'Gut für Unternehmen, die Wahlfreiheit wollen',
      'Noch weniger bekannt, aber positiv bewertet',
      'Preis etwas höher, aber flexible Features'
    ]
  }
];


