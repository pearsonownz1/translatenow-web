export const PAGE_WORDS = 250;

export const TIERS = {
  professional: {
    id: "professional",
    name: "Certified Professional",
    price: 24,
    certified: true,
    blurb: "Civil records and short filings. Clear source, ordinary register.",
  },
  detailed: {
    id: "detailed",
    name: "Certified Detailed",
    price: 32,
    certified: true,
    blurb: "Longer records: transcripts, medical notes, multi-page decrees.",
  },
  expert: {
    id: "expert",
    name: "Certified Expert",
    price: 40,
    certified: true,
    blurb: "Legal instruments and technical text. Named specialist.",
  },
  standard: {
    id: "standard",
    name: "Standard",
    price: 18,
    certified: false,
    blurb: "Human translation. No accuracy statement. For reading, not filing.",
  },
} as const;

export type TierId = keyof typeof TIERS;

export const ADDONS = {
  notarization: {
    id: "notarization",
    name: "Notarization",
    price: 19,
    unit: "order" as const,
    blurb: "Notary acknowledges the translator’s signature. One fee per order.",
  },
  hardCopy: {
    id: "hardCopy",
    name: "Hard copy",
    price: 32,
    unit: "order" as const,
    blurb: "Printed set, mailed. PDF still included.",
  },
  apostille: {
    id: "apostille",
    name: "Apostille",
    price: 165,
    unit: "document" as const,
    blurb: "Hague apostille on the notarial certificate. Priced per document.",
  },
  currencyNote: {
    id: "currencyNote",
    name: "Currency note",
    price: 12,
    unit: "page" as const,
    blurb: "A short note converting printed amounts to USD. Per source page.",
  },
} as const;

export type AddonId = keyof typeof ADDONS;

export type AddonFlags = {
  notarization: boolean;
  hardCopy: boolean;
  apostille: boolean;
  currencyNote: boolean;
};

export type PriceInput = {
  tier: TierId;
  pages: number;
  documents: number;
  addons: AddonFlags;
};

export type PriceBreakdown = {
  pageRate: number;
  pageSubtotal: number;
  addonLines: { id: AddonId; label: string; amount: number }[];
  addonsTotal: number;
  total: number;
};

export function emptyAddons(): AddonFlags {
  return {
    notarization: false,
    hardCopy: false,
    apostille: false,
    currencyNote: false,
  };
}

export function calculatePrice(input: PriceInput): PriceBreakdown {
  const pages = Math.max(1, Math.floor(input.pages) || 1);
  const documents = Math.max(1, Math.floor(input.documents) || 1);
  const pageRate = TIERS[input.tier].price;
  const pageSubtotal = pageRate * pages;

  const addonLines: PriceBreakdown["addonLines"] = [];
  if (input.addons.notarization) {
    addonLines.push({
      id: "notarization",
      label: "Notarization",
      amount: ADDONS.notarization.price,
    });
  }
  if (input.addons.hardCopy) {
    addonLines.push({
      id: "hardCopy",
      label: "Hard copy",
      amount: ADDONS.hardCopy.price,
    });
  }
  if (input.addons.apostille) {
    addonLines.push({
      id: "apostille",
      label:
        documents > 1
          ? `Apostille × ${documents}`
          : "Apostille",
      amount: ADDONS.apostille.price * documents,
    });
  }
  if (input.addons.currencyNote) {
    addonLines.push({
      id: "currencyNote",
      label: pages > 1 ? `Currency note × ${pages}` : "Currency note",
      amount: ADDONS.currencyNote.price * pages,
    });
  }

  const addonsTotal = addonLines.reduce((sum, line) => sum + line.amount, 0);
  return {
    pageRate,
    pageSubtotal,
    addonLines,
    addonsTotal,
    total: pageSubtotal + addonsTotal,
  };
}

export function formatUsd(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}
