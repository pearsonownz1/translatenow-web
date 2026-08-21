export type DocumentType = {
  slug: string;
  name: string;
  typicalPages: string;
  summary: string;
};

export const FEATURED_DOCUMENTS: DocumentType[] = [
  {
    slug: "birth-certificate",
    name: "Birth certificate",
    typicalPages: "Usually one page",
    summary:
      "Child, parents, date, place, registration number, and seals as printed.",
  },
  {
    slug: "marriage-certificate",
    name: "Marriage certificate",
    typicalPages: "Usually one page",
    summary:
      "Parties, date, place, officiant, and any registry block on the form.",
  },
  {
    slug: "death-certificate",
    name: "Death certificate",
    typicalPages: "Usually one page",
    summary:
      "Decedent, date, place, cause if printed, and the issuing office.",
  },
  {
    slug: "divorce-decree",
    name: "Divorce decree",
    typicalPages: "Often two to eight pages",
    summary:
      "Caption, parties, date of judgment, and operative clauses as written.",
  },
  {
    slug: "diploma",
    name: "Diploma",
    typicalPages: "One page, sometimes a cover",
    summary: "Institution, degree, date, honors if printed. Seals noted, not redrawn.",
  },
  {
    slug: "transcript",
    name: "Transcript",
    typicalPages: "Often two to six pages",
    summary: "Course titles, credits, grades, terms. Layout follows the source.",
  },
  {
    slug: "passport",
    name: "Passport",
    typicalPages: "Identity page; visas extra",
    summary: "Identity page as printed. Extra pages only if included in the count.",
  },
  {
    slug: "vaccination-record",
    name: "Vaccination record",
    typicalPages: "One or two cards",
    summary: "Product names, dates, lot numbers, and clinic marks as printed.",
  },
];

export const OTHER_DOCUMENTS = [
  "Police clearance",
  "Driver’s license",
  "National ID",
  "Medical record",
  "Bank letter",
  "Employment letter",
  "Court order",
] as const;

export const ORDER_DOCUMENT_OPTIONS = [
  "Birth certificate",
  "Marriage certificate",
  "Death certificate",
  "Divorce decree",
  "Diploma",
  "Transcript",
  "Passport",
  "Vaccination record",
  "Driver’s license",
  "Police clearance",
  "Medical record",
  "Other",
] as const;
