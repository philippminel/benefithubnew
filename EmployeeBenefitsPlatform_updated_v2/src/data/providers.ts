import type { Provider } from './providers.detailed';
import { detailedProviders } from './providers.detailed';
import { providersIndex } from './providers.index';

function normalizeId(id: string): string {
  return id.trim().toLowerCase();
}

const CATEGORY_TO_BENEFIT: Record<string, string> = {
  multi_benefit_plattform: 'Multi-Benefit',
  sachbezug_karte: 'Sachbezug 50€',
  essenszuschuss: 'Essenszuschuss',
  rabattportal: 'Rabattportal',
  firmenfitness_wellbeing: 'Fitness',
  mobilitaetsbudget: 'Mobilität',
  dienstrad_leasing: 'JobRad',
  incentives_gutscheine: 'Gutscheine',
  teamevents: 'Teamevents'
};

function placeholderProviderFromIndex(entry: (typeof providersIndex.providers)[number]): Provider {
  const benefits = (entry.categories ?? [])
    .map((c) => CATEGORY_TO_BENEFIT[c] ?? c)
    // remove duplicates while preserving order
    .filter((v, i, a) => a.indexOf(v) === i);

  const providerType = entry.provider_type ?? [];

  const taglineParts: string[] = [];
  if (providerType.length) taglineParts.push(providerType.join(', '));
  if (benefits.length) taglineParts.push(benefits.slice(0, 3).join(' · '));
  const tagline = taglineParts.length ? `Benefit-Anbieter (${taglineParts.join(' | ')})` : 'Benefit-Anbieter';

  return {
    id: entry.id,
    name: entry.name,
    website: entry.website,
    categories: entry.categories,
    providerType: entry.provider_type,
    aliases: entry.aliases,

    tagline,
    benefits,
    deliveryMethods: [],
    budgetModel: false,
    eligibilityRules: false,
    payrollIntegration: [],
    pricingModel: 'k.A.',
    pricingRange: undefined,
    founded: undefined,
    customers: undefined,
    trustpilotScore: undefined,
    kunuduScore: undefined,

    attributes: {
      pricing: {
        setupFee: 'k.A.',
        monthlyPerEmployee: 'k.A.',
        transactionFee: 'k.A.'
      },
      coverage: {
        benefits,
        multibenefitPlatform: entry.categories?.includes('multi_benefit_plattform') ?? false
      },
      compliance: {
        taxCompliance: false,
        payrollExport: false,
        datevIntegration: false
      },
      integrations: [],
      employeeUX: {
        app: false,
        card: false,
        webPortal: false
      },
      adminUX: {
        dashboard: false,
        reporting: false,
        support: 'k.A.'
      }
    },

    reviews: {},
    reviewSummary: [],
    redditSummary: []
  };
}

const detailedById = new Map<string, Provider>(
  detailedProviders.map((p) => [normalizeId(p.id), { ...p, id: normalizeId(p.id) }])
);

/**
 * Canonical provider list used by the whole app.
 * - Includes a broad index list (from providersIndex)
 * - Overlays richer details where we have them (from detailedProviders)
 * - Ensures every entry has safe defaults so UI never crashes when data is "halbvoll"
 */
export const providers: Provider[] = providersIndex.providers
  .map((entry) => {
    const id = normalizeId(entry.id);
    const base = placeholderProviderFromIndex({ ...entry, id });
    const detailed = detailedById.get(id);

    // Prefer detailed content if available, but keep index meta (website/categories/providerType/aliases)
    if (!detailed) return base;

    return {
      ...base,
      ...detailed,
      id,
      website: base.website ?? detailed.website,
      categories: base.categories ?? detailed.categories,
      providerType: base.providerType ?? detailed.providerType,
      aliases: base.aliases ?? detailed.aliases
    };
  })
  // sort A-Z
  .sort((a, b) => a.name.localeCompare(b.name, 'de'));

// Still keep your helper API intact
export function getProvidersByBenefit(benefitId: string): Provider[] {
  const query = benefitId.toLowerCase();
  return providers.filter((p) =>
    query === 'all' ? true : (p.benefits ?? []).some((b) => b.toLowerCase().includes(query))
  );
}

// Re-export the Provider type for convenience
export type { Provider };
