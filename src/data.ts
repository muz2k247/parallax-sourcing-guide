export interface RecipientPlan {
  group: string;
  items: string;
  rationale?: string;
}

export interface BudgetRow {
  id: string;
  item: string;
  verifiedRange: string;
  workingBudget: string;
  targetGroup: string;
  avgPrice: number;
}

export interface VendorOffering {
  category: string;
  items: string;
  priceGuide?: string;
  notes?: string;
}

export interface UnifiedVendor {
  id: string;
  name: string;
  url: string;
  tagline: string;
  description: string;
  whatTheyProvide: string[];
  offerings: VendorOffering[];
  pricingSummary: string;
  location: string;
  turnaround?: string;
  minimumOrder?: string;
  paymentTerms?: string;
  highlights: string[];
  caveats?: string[];
}

export interface CalculatorItem {
  id: string;
  label: string;
  category: 'Chief Guest' | 'Contributors & Vendors' | 'VIP Gifts' | 'Custom';
  avgPrice: number;
  unitPrice: number;
  quantity: number;
  note?: string;
}

export const RECIPIENT_PLAN: RecipientPlan[] = [
  {
    group: 'Chief Guest',
    items: 'Honor Shield (Premium Tier) + Fresh Flower Presentation Bouquet',
    rationale: 'Top dignitary acknowledgment pairing a permanent keepsake with ceremonial flowers.'
  },
  {
    group: 'Contributors and Vendors',
    items: 'Standard Honor Shield + Event Certificate of Appreciation',
    rationale: 'Official institutional appreciation for partners, sponsors, and key resource personnel.'
  },
  {
    group: 'Remaining VIPs & Speakers',
    items: 'Custom Metal Pen or Boxed Notebook and Pen Presentation Set',
    rationale: 'High utility branded keepsakes tailored to flexible attendee counts.'
  }
];

export const DEFAULT_CALCULATOR_ITEMS: CalculatorItem[] = [
  {
    id: 'chief-shield',
    label: 'Chief Guest Shield (Premium)',
    category: 'Chief Guest',
    avgPrice: 6500,
    unitPrice: 6500,
    quantity: 2,
    note: 'Beveled crystal or heavy brass on mahogany base'
  },
  {
    id: 'chief-flowers',
    label: 'Fresh Flower Bouquet',
    category: 'Chief Guest',
    avgPrice: 2000,
    unitPrice: 2000,
    quantity: 2,
    note: 'Hand-tied fresh roses and lilies with greeting card'
  },
  {
    id: 'std-shield',
    label: 'Standard Honor Shield',
    category: 'Contributors & Vendors',
    avgPrice: 3000,
    unitPrice: 3000,
    quantity: 10,
    note: 'Hardwood base with etched golden metal plate'
  },
  {
    id: 'certificates',
    label: 'Event Certificates',
    category: 'Contributors & Vendors',
    avgPrice: 180,
    unitPrice: 180,
    quantity: 10,
    note: '300gsm cardstock with gold foil border'
  },
  {
    id: 'std-pen',
    label: 'Custom Metal Pen (Standard)',
    category: 'VIP Gifts',
    avgPrice: 200,
    unitPrice: 200,
    quantity: 10,
    note: 'Laser engraved society logo and tagline'
  },
  {
    id: 'exec-pen',
    label: 'Executive Metal Pen',
    category: 'VIP Gifts',
    avgPrice: 900,
    unitPrice: 900,
    quantity: 10,
    note: 'Weighted twist-action executive pen in velvet pouch'
  },
  {
    id: 'boxed-set',
    label: 'Boxed Notebook + Pen Set',
    category: 'VIP Gifts',
    avgPrice: 1800,
    unitPrice: 1800,
    quantity: 10,
    note: 'PU leather journal and metal pen in matte gift box'
  }
];

export const BUDGET_TABLE: BudgetRow[] = [
  {
    id: 'budget-shield-cg',
    item: 'Chief Guest Shield (Premium)',
    verifiedRange: 'PKR 6,000 to 8,000',
    workingBudget: 'PKR 6,500',
    targetGroup: 'Chief Guest',
    avgPrice: 6500
  },
  {
    id: 'budget-flowers',
    item: 'Flower Bouquet',
    verifiedRange: 'PKR 1,300 to 7,500',
    workingBudget: 'PKR 2,000',
    targetGroup: 'Chief Guest',
    avgPrice: 2000
  },
  {
    id: 'budget-shield-std',
    item: 'Standard Honor Shield',
    verifiedRange: 'PKR 2,500 to 5,500',
    workingBudget: 'PKR 3,000',
    targetGroup: 'Contributors & Vendors',
    avgPrice: 3000
  },
  {
    id: 'budget-cert',
    item: 'Certificate',
    verifiedRange: 'PKR 120 to 320',
    workingBudget: 'PKR 180',
    targetGroup: 'Contributors & Vendors',
    avgPrice: 180
  },
  {
    id: 'budget-pen-std',
    item: 'Custom Metal Pen (Standard)',
    verifiedRange: 'PKR 120 to 500',
    workingBudget: 'PKR 200',
    targetGroup: 'Remaining VIPs',
    avgPrice: 200
  },
  {
    id: 'budget-pen-exec',
    item: 'Executive Metal Pen',
    verifiedRange: 'PKR 800 to 2,500',
    workingBudget: 'PKR 900',
    targetGroup: 'Remaining VIPs',
    avgPrice: 900
  },
  {
    id: 'budget-set',
    item: 'Notebook + Pen Boxed Set',
    verifiedRange: 'PKR 1,500 to 3,500',
    workingBudget: 'PKR 1,800',
    targetGroup: 'Remaining VIPs',
    avgPrice: 1800
  }
];

export const UNIFIED_VENDORS: UnifiedVendor[] = [
  {
    id: 'vendor-toobas',
    name: 'Toobas.pk',
    url: 'https://www.toobas.pk/collections/corporate-gifts',
    tagline: 'Ready corporate gift packs and presentation boxed sets',
    description: 'A popular Pakistani online store for corporate giveaways and packaged stationery sets. Excellent for ordering finished presentation boxes with notebooks and pens without long manufacturing turnaround times.',
    whatTheyProvide: [
      'Executive Notebook and Pen Gift Sets in luxury matte presentation boxes',
      'Personalized PU leather organizers, diaries, and hardcover journals',
      'Branded metal pens, keychains, and executive cardholder combos',
      'Corporate giveaway bundles and desk accessories'
    ],
    offerings: [
      {
        category: 'Notebook & Pen Sets',
        items: 'Hardcover journal and metal pen in custom foam cutout presentation box',
        priceGuide: 'PKR 1,500 to 3,500 per boxed set',
        notes: 'Available in single units or small batches'
      },
      {
        category: 'Corporate Gifts',
        items: 'Branded diaries, custom gift packs, vacuum flasks, and cardholders',
        priceGuide: 'PKR 800 to 4,000 depending on item',
        notes: 'Direct online catalog purchase'
      }
    ],
    pricingSummary: 'Boxed sets: PKR 1,500 to 3,500 | Gift items: PKR 800 to 4,000',
    location: 'Online store with nationwide delivery',
    turnaround: '3 to 5 working days for standard dispatch',
    minimumOrder: 'Flexible, individual pieces and small batches supported',
    paymentTerms: 'Online payment and Cash on Delivery options',
    highlights: [
      'Pre-packaged gift boxes ready for VIP handovers',
      'No strict bulk minimums on standard retail lines',
      'Direct online catalog with verified product availability'
    ],
    caveats: [
      'Custom logo embossing requires checking lead time with support'
    ]
  },
  {
    id: 'vendor-corporate-gifting',
    name: 'CorporateGifting.pk',
    url: 'https://corporategifting.pk',
    tagline: 'Comprehensive corporate merchandise and custom awards manufacturer',
    description: 'One of the largest corporate gift suppliers in Pakistan, based in Karachi. Offers full-scale custom branding across awards, writing instruments, and executive giveaways.',
    whatTheyProvide: [
      'Custom Acrylic and Crystal Award Shields with precision laser engraving',
      'Executive Metal Twist Pens with laser etched logo and custom tagline',
      'Branded Notebook and Pen matched presentation sets',
      'Customized corporate merchandise, tech accessories, and event packages'
    ],
    offerings: [
      {
        category: 'Honor Shields',
        items: 'Diamond acrylic plaques on gold metal stands, optical crystal trophies, wooden plaques',
        priceGuide: 'PKR 2,500 to 8,000 (Bulk tiers start at 10 units)',
        notes: 'Full personalization with society logo, recipient name, title, and date'
      },
      {
        category: 'Custom Pens',
        items: 'Promotional metal pens (PKR 200 to 500) and Executive twist pens (PKR 800 to 2,500)',
        priceGuide: 'PKR 200 to 2,500 per pen',
        notes: 'Bulk tiers start at 50 to 100 units depending on model'
      },
      {
        category: 'Notebook Sets',
        items: 'Matched leatherette notebook and engraved pen in presentation box',
        priceGuide: 'PKR 2,500 to 4,500 (Custom quote)',
        notes: 'Inquire directly for current combo MOQ'
      }
    ],
    pricingSummary: 'Shields: PKR 2,500 to 8,000 | Pens: PKR 200 to 2,500 | Sets: PKR 2,500+',
    location: 'Karachi headquarters with nationwide corporate fulfillment',
    turnaround: '7 to 10 working days production plus delivery',
    minimumOrder: '10 units for shields; 50 to 100 units for basic pens',
    paymentTerms: 'Standard corporate invoice and bank transfer',
    highlights: [
      'Documented replacement policy for damaged or defective items',
      'Tiered bulk volume discounts',
      'High rated corporate track record across Pakistani institutions'
    ],
    caveats: [
      'Higher minimum order quantities (MOQ) on select promo pen lines'
    ]
  },
  {
    id: 'vendor-aprints',
    name: 'Aprints.pk',
    url: 'https://aprints.pk',
    tagline: 'Digital printing, certificates and individual custom pens',
    description: 'A verified digital printing company based in DHA Lahore. Exceptional for smaller orders because they sell custom logo metal pens individually without bulk minimums and print certificates with nationwide Cash on Delivery.',
    whatTheyProvide: [
      'Custom Printed Certificates of Achievement and Appreciation (10 piece minimum)',
      'Custom Logo Metal Pens sold individually with no minimum order requirement',
      'Branded ceramic mugs, event badges, desk calendars, and marketing collateral'
    ],
    offerings: [
      {
        category: 'Certificates',
        items: 'Heavy cardstock certificates with gold foil or geometric design borders',
        priceGuide: 'PKR 150 to 320 per certificate',
        notes: 'Minimum order exactly 10 certificates; full name and logo variable personalization'
      },
      {
        category: 'Custom Pens',
        items: 'Ten distinct metal pen models with custom logo / event name print',
        priceGuide: 'PKR 120 to 245 per pen',
        notes: 'Sold individually with zero minimum order quantity enforced'
      }
    ],
    pricingSummary: 'Certificates: PKR 150 to 320 | Custom Pens: PKR 120 to 245 per unit',
    location: 'DHA Lahore physical studio with nationwide courier delivery',
    turnaround: '7 to 8 working days after digital artwork approval',
    minimumOrder: '10 units for certificates; 1 unit (no minimum) for custom pens',
    paymentTerms: 'Cash on Delivery (COD) supported nationwide; online payment available',
    highlights: [
      'Directly verified live pricing on website catalog',
      'Zero minimum order constraint on metal pens',
      'Cash on delivery available across all major Pakistani cities'
    ],
    caveats: [
      'Pen barrel printing area fits 2 concise lines of text or logo'
    ]
  },
  {
    id: 'vendor-helloprint',
    name: 'HelloPrint.pk',
    url: 'https://helloprint.pk/',
    tagline: 'Fast turnaround digital printing, certificates and event passes',
    description: 'A fast and agile online printing service based in Gulberg, Lahore. Provides student societies, conferences, and businesses with professional certificates, attendee badges, and promotional stationery.',
    whatTheyProvide: [
      'Custom Event Certificates on matte or linen texture cardstock',
      'Participant PVC ID passes, branded lanyards, and visitor badges',
      'Event marketing collateral (roll-up standees, flyers, program booklets, and folders)',
      'Custom printed notebooks and promotional stickers'
    ],
    offerings: [
      {
        category: 'Certificates & Credentials',
        items: '300gsm card certificates with optional gold foil stamping and protective sleeves',
        priceGuide: 'PKR 120 to 280 per certificate',
        notes: 'Fast digital printing with variable recipient names'
      },
      {
        category: 'Event Passes & Lanyards',
        items: 'Full color satin ribbon lanyards with metal clip + PVC access pass cards',
        priceGuide: 'PKR 100 to 220 per complete lanyard set',
        notes: 'Catalog listings show 100 piece minimum on custom lanyards; confirm small runs with sales'
      }
    ],
    pricingSummary: 'Certificates: PKR 120 to 280 | Lanyards & Passes: PKR 100 to 220',
    location: 'Gulberg, Lahore headquarters with nationwide delivery',
    turnaround: '3 to 5 working days',
    minimumOrder: '100 pcs for custom woven/sublimation lanyards; 10 to 25 pcs for printed certificates and notebooks (confirm batch size with sales)',
    paymentTerms: 'Bank deposit and Cash on Delivery',
    highlights: [
      'Quick turnaround times for urgent event deadlines',
      'Complete conference suite (certificates + lanyards + booklets)',
      'Clean modern digital print output'
    ],
    caveats: [
      'Lanyard listings show a 100 piece minimum on specific lines; confirm batch size before relying on small quantities.',
      'Rush delivery incurs additional expedited courier fees.'
    ]
  },
  {
    id: 'vendor-click2print',
    name: 'Click2Print',
    url: 'https://www.click2print.pk',
    tagline: 'Online printing hub for certificates, framed awards and event collateral',
    description: 'A well-known Lahore online printing service with established templates for speaker certificates, volunteer credentials, and framed graduation or corporate certificates.',
    whatTheyProvide: [
      'Event Certificates with optional matte black desk display frames',
      'Roll-up standees, event backdrops, and promotional banners',
      'Conference folders, participant certificates, and attendee lanyards'
    ],
    offerings: [
      {
        category: 'Certificates with Frames',
        items: '300gsm certificate mounted inside a sleek glass desk photo frame',
        priceGuide: 'PKR 550 to 950 (Certificate + Frame included)',
        notes: 'Pre-assembled framed awards ready for stage handover'
      },
      {
        category: 'Unframed Certificates',
        items: 'Standard card certificates for volunteers and contributors',
        priceGuide: 'PKR 150 to 300 per unit',
        notes: 'Various template layouts for speakers and sponsors'
      }
    ],
    pricingSummary: 'Unframed Certificates: PKR 150 to 300 | Framed: PKR 550 to 950',
    location: 'Lahore based with nationwide shipping',
    turnaround: '4 to 7 working days',
    minimumOrder: 'Flexible on certificate print runs',
    paymentTerms: 'Online payment and courier delivery',
    highlights: [
      'Option to order pre-framed certificates in one checkout',
      'Over 1,000 public reviews across business directories',
      'Dedicated templates for speakers, sponsors, and volunteers'
    ],
    caveats: [
      'Order a small test batch to confirm frame glass safety during shipping'
    ]
  },
  {
    id: 'vendor-bloom-and-beyond',
    name: 'Bloom & Beyond',
    url: 'https://bloomnbeyond.pk/blog/flower-bouquet-prices-lahore-2026',
    tagline: 'Premium boutique floral service with guaranteed same-day delivery',
    description: 'A top rated Lahore florist offering fresh, hand-tied presentation bouquets for Chief Guests, dignitary receptions, and stage welcoming ceremonies.',
    whatTheyProvide: [
      'Fresh flower bouquets with imported roses, lilies, and gypsophila',
      'Chief Guest presentation floral arrangements with customized greeting cards',
      'Stage welcoming flowers, corsages, and ceremony bouquets'
    ],
    offerings: [
      {
        category: 'VIP Presentation Bouquet',
        items: 'Handcrafted floral arrangement in kraft wrapping with silk ribbon and greeting card',
        priceGuide: 'PKR 2,000 to 4,500 (Working standard: PKR 2,000 to 2,500)',
        notes: 'Same day fresh assembly before stage ceremony'
      }
    ],
    pricingSummary: 'Fresh Bouquets: PKR 1,300 to 7,500 (Working standard: PKR 2,000 to 2,500)',
    location: 'Lahore (Covering 25+ city areas including campuses)',
    turnaround: 'Same day delivery for WhatsApp orders placed before 2:00 PM',
    minimumOrder: '1 bouquet (Single unit orders welcomed)',
    paymentTerms: 'Online bank transfer, JazzCash, EasyPaisa, or COD',
    highlights: [
      'High satisfaction score backed by verified customer reviews',
      'Same-day delivery across Lahore for fresh day-of-event handover',
      'Direct WhatsApp coordination for photo proof before dispatch'
    ],
    caveats: [
      'Order should be confirmed 24 hours prior to guarantee specific imported flower colors'
    ]
  }
];

export const ORDERING_CHECKLIST = [
  {
    id: 'check-top-vendors',
    text: 'Priority Spend Verification: Perform a direct WhatsApp or phone confirmation with CorporateGifting.pk to lock in exact production turnaround and current material rates for bulk shields and premium awards.'
  },
  {
    id: 'check-moq-lanyards',
    text: 'MOQ and Batch Rules: Confirm product specific minimums prior to finalizing order quantities (for example, HelloPrint requires a 100 piece minimum on standard custom lanyard lines, while Aprints offers 1 piece MOQ on pens).'
  },
  {
    id: 'check-proof',
    text: 'Digital Artwork Proofing: Require and approve a high resolution digital mock-up for spelling, society logo sharpness, and date formatting before authorizing bulk engraving or card printing.'
  },
  {
    id: 'check-payment',
    text: 'Payment Risk Mitigation: Avoid 100% advance payments where possible. Use vendors with Cash on Delivery (like Aprints.pk) or structured advance deposits with balance upon dispatch.'
  },
  {
    id: 'check-lead-times',
    text: 'Production and Buffer Schedule: Standard manufacturing takes 3 to 8 working days. Schedule a 2 to 3 day buffer before the Parallax event to account for courier transit to campus.'
  }
];
