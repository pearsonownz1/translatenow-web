import {
  calculatePrice,
  emptyAddons,
  type AddonFlags,
  type TierId,
} from "@/lib/pricing";

export const ORDER_STORAGE_KEY = "tn-order";
export const ORDER_EMAIL_KEY = "tn-email";

export type FileMeta = {
  name: string;
  size: number;
};

export type OrderDraft = {
  service: "certified" | "standard";
  tier: TierId;
  sourceLanguage: string;
  targetLanguage: string;
  documentType: string;
  pages: number;
  documents: number;
  files: FileMeta[];
  addons: AddonFlags;
  turnaround: "standard" | "rush";
  name: string;
  email: string;
  phone: string;
  notes: string;
};

export type CompletedOrder = OrderDraft & {
  id: string;
  placedAt: string;
  total: number;
};

export function defaultDraft(email = ""): OrderDraft {
  return {
    service: "certified",
    tier: "professional",
    sourceLanguage: "",
    targetLanguage: "English",
    documentType: "Birth certificate",
    pages: 1,
    documents: 1,
    files: [],
    addons: emptyAddons(),
    turnaround: "standard",
    name: "",
    email,
    phone: "",
    notes: "",
  };
}

export function draftTotal(draft: OrderDraft): number {
  return calculatePrice({
    tier: draft.tier,
    pages: draft.pages,
    documents: draft.documents,
    addons: draft.addons,
  }).total;
}

export function loadDraft(): OrderDraft | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(ORDER_STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as OrderDraft;
  } catch {
    return null;
  }
}

export function saveDraft(draft: OrderDraft): void {
  sessionStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify(draft));
}

export function saveCompleted(order: CompletedOrder): void {
  sessionStorage.setItem("tn-completed", JSON.stringify(order));
}

export function loadCompleted(): CompletedOrder | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem("tn-completed");
    if (!raw) return null;
    return JSON.parse(raw) as CompletedOrder;
  } catch {
    return null;
  }
}

export function formatBytes(size: number): string {
  if (size < 1024) return `${size} B`;
  if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`;
  return `${(size / (1024 * 1024)).toFixed(1)} MB`;
}
