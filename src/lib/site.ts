export const FIRM = {
  name: "Boss Legal Associates",
  tagline: "Committed to Justice. Dedicated to Excellence.",
  address:
    "Office No. 403, Mayuresh Square, Plot No. 17, Sector 15, CBD Belapur, Navi Mumbai, Maharashtra – 400601",
  phone: "+91 XXXXX XXXXX",
  email: "contact@bosslegalassociates.in",
  whatsapp: "https://wa.me/91XXXXXXXXXX",
} as const;

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Practice Areas", to: "/practice-areas" },
  { label: "Legal Insights", to: "/insights" },
  { label: "Contact Us", to: "/contact" },
] as const;

export type PracticeArea = {
  slug: string;
  title: string;
  short: string;
  detail: string;
  icon:
    | "scale"
    | "building"
    | "briefcase"
    | "landmark"
    | "shield"
    | "users"
    | "fileText";
};

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    slug: "civil-litigation",
    title: "Civil Litigation & Dispute Resolution",
    short: "Representation in civil suits, appeals, arbitration and mediation.",
    detail:
      "We advise and represent clients across civil suits, appeals and revision proceedings before trial courts and appellate forums. Our approach combines careful pleading and evidence strategy with a realistic assessment of settlement, arbitration and mediation options so that disputes are resolved efficiently.",
    icon: "scale",
  },
  {
    slug: "property-real-estate",
    title: "Property & Real Estate",
    short: "Title diligence, conveyancing, tenancy and possession matters.",
    detail:
      "Our practice covers title verification and due diligence, drafting and vetting of sale deeds, development and leave-and-licence agreements, and representation in partition, tenancy, redevelopment and possession disputes. We assist both individual owners and institutional stakeholders.",
    icon: "building",
  },
  {
    slug: "corporate-commercial",
    title: "Corporate & Commercial Matters",
    short: "Entity structuring, compliance, contracts and commercial disputes.",
    detail:
      "We support businesses through incorporation and structuring, ongoing secretarial and regulatory compliance, shareholder and joint-venture arrangements, and commercial contract negotiation. Where matters escalate, we act in commercial disputes and recovery proceedings.",
    icon: "briefcase",
  },
  {
    slug: "banking-finance",
    title: "Banking & Financial Matters",
    short: "Recovery actions, securitisation, cheque dishonour and finance advisory.",
    detail:
      "We handle loan documentation review, recovery and enforcement proceedings, securitisation and debt-recovery tribunal matters, cheque dishonour actions and borrower-side representation. Advice is grounded in current banking regulation and lender practice.",
    icon: "landmark",
  },
  {
    slug: "criminal-litigation",
    title: "Criminal Litigation",
    short: "Bail, trial defence, quashing petitions and appellate representation.",
    detail:
      "We appear in criminal matters at every stage, from anticipatory and regular bail applications to trial defence, discharge and quashing petitions, and appeals or revisions. Client communication remains confidential, prompt and clear throughout the proceedings.",
    icon: "shield",
  },
  {
    slug: "labour-employment",
    title: "Labour & Employment Matters",
    short: "Workplace compliance, industrial disputes and employment advisory.",
    detail:
      "We advise employers and employees on appointment and separation documentation, statutory labour compliance, disciplinary enquiries, and workplace policy frameworks, and represent parties before labour and industrial tribunals in disputes and reference proceedings.",
    icon: "users",
  },
  {
    slug: "legal-advisory",
    title: "Legal Advisory, Agreements & Documentation",
    short: "Opinions, drafting and vetting of agreements and instruments.",
    detail:
      "Our advisory practice delivers written legal opinions, drafting and vetting of agreements, notices, undertakings, powers of attorney and other instruments. Documents are prepared to be precise, enforceable and aligned with the commercial intent of the parties.",
    icon: "fileText",
  },
];

export type Article = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  body: string[];
};

export const ARTICLES: Article[] = [
  {
    slug: "understanding-anticipatory-bail",
    title: "Understanding Anticipatory Bail: Scope and Practical Considerations",
    date: "2026-07-28",
    category: "Criminal Litigation",
    excerpt:
      "An overview of how anticipatory bail operates in Indian criminal procedure, the factors courts weigh, and what an applicant should prepare before approaching the court.",
    body: [
      "Anticipatory bail is a pre-arrest protection available to a person apprehending arrest in a non-bailable offence. It is discretionary relief, and courts assess the nature and gravity of the accusation, the antecedents of the applicant, the possibility of the applicant fleeing from justice, and whether the accusation appears to have been made to injure or humiliate.",
      "Applicants are generally expected to place a complete and candid record before the court, including the substance of the allegation, the stage of investigation, and any material demonstrating cooperation with the investigating agency. Conditions such as availability for interrogation, restraint from influencing witnesses, and restrictions on travel are commonly imposed.",
      "This note is general in nature. The availability and terms of relief depend entirely on the facts of the individual case and the forum before which the matter is placed.",
    ],
  },
  {
    slug: "title-diligence-navi-mumbai-property",
    title: "Title Diligence Before a Property Purchase: A Practical Checklist",
    date: "2026-06-15",
    category: "Property & Real Estate",
    excerpt:
      "Buyers frequently focus on price and possession timelines while overlooking title. A structured diligence exercise reduces the risk of litigation years after registration.",
    body: [
      "A sound diligence exercise traces the devolution of title over a reasonable period, examines the chain of registered documents, and reconciles the description of the property across revenue records, approved plans and the proposed conveyance.",
      "Encumbrance verification, statutory approvals, occupancy and completion certificates, society or association records, and pending litigation searches each address a distinct category of risk. Where the property forms part of a development or redevelopment scheme, the underlying development agreement and consents also require review.",
      "Documenting the findings in a written opinion allows a purchaser to negotiate indemnities, hold-backs or corrective steps before funds are released rather than after registration.",
    ],
  },
  {
    slug: "contract-clauses-msme-businesses",
    title: "Five Contract Clauses Growing Businesses Should Not Leave Boilerplate",
    date: "2026-05-09",
    category: "Corporate & Commercial",
    excerpt:
      "Dispute resolution, limitation of liability, termination, confidentiality and payment terms decide how a commercial relationship ends. They deserve deliberate drafting.",
    body: [
      "Standard-form contracts often carry clauses copied across transactions without reference to the commercial arrangement they govern. When a relationship deteriorates, these clauses determine the forum, cost and duration of the dispute.",
      "Dispute resolution and seat or jurisdiction clauses should reflect where performance and records actually sit. Limitation of liability and indemnity provisions should be calibrated to contract value. Termination rights, notice periods and post-termination obligations should be capable of being exercised without ambiguity.",
      "Reviewing these five clauses at the negotiation stage is materially less expensive than litigating their meaning later.",
    ],
  },
];

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}