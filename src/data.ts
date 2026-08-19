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
    avgPrice: 7000,
    unitPrice: 7000,
    quantity: 1,
    note: 'Beveled crystal or heavy brass on mahogany base'
  },
  {
    id: 'chief-flowers',
    label: 'Fresh Flower Bouquet',
    category: 'Chief Guest',
    avgPrice: 2250,
    unitPrice: 2250,
    quantity: 1,
    note: 'Hand-tied fresh roses and lilies with greeting card'
  },
  {
    id: 'std-shield',
    label: 'Standard Honor Shield',
    category: 'Contributors & Vendors',
    avgPrice: 5000,
    unitPrice: 5000,
    quantity: 10,
    note: 'Hardwood base with etched golden metal plate'
  },
  {
    id: 'certificates',
    label: 'Event Certificates',
    category: 'Contributors & Vendors',
    avgPrice: 250,
    unitPrice: 250,
    quantity: 20,
    note: '300gsm cardstock with gold foil border'
  },
  {
    id: 'std-pen',
    label: 'Custom Metal Pen (Standard)',
    category: 'VIP Gifts',
    avgPrice: 250,
    unitPrice: 250,
    quantity: 15,
    note: 'Laser engraved society logo and tagline'
  },
  {
    id: 'exec-pen',
    label: 'Executive Metal Pen',
    category: 'VIP Gifts',
    avgPrice: 1000,
    unitPrice: 1000,
    quantity: 5,
    note: 'Weighted twist-action executive pen in velvet pouch'
  },
  {
    id: 'boxed-set',
    label: 'Boxed Notebook + Pen Set',
    category: 'VIP Gifts',
    avgPrice: 2000,
    unitPrice: 2000,
    quantity: 5,
    note: 'PU leather journal and metal pen in matte gift box'
  }
];

export const BUDGET_TABLE: BudgetRow[] = [
  {
    id: 'budget-shield-cg',
    item: 'Chief Guest Shield (Premium)',
    verifiedRange: 'PKR 6,500 to 8,000',
    workingBudget: 'PKR 7,000',
    targetGroup: 'Chief Guest',
    avgPrice: 7000
  },
  {
    id: 'budget-flowers',
    item: 'Flower Bouquet',
    verifiedRange: 'PKR 1,300 to 7,500',
    workingBudget: 'PKR 2,250',
    targetGroup: 'Chief Guest',
    avgPrice: 2250
  },
  {
    id: 'budget-shield-std',
    item: 'Standard Honor Shield',
    verifiedRange: 'PKR 2,500 to 5,500',
    workingBudget: 'PKR 5,000',
    targetGroup: 'Contributors & Vendors',
    avgPrice: 5000
  },
  {
    id: 'budget-cert',
    item: 'Certificate',
    verifiedRange: 'PKR 120 to 320',
    workingBudget: 'PKR 250',
    targetGroup: 'Contributors & Vendors',
    avgPrice: 250
  },
  {
    id: 'budget-pen-std',
    item: 'Custom Metal Pen (Standard)',
    verifiedRange: 'PKR 120 to 500',
    workingBudget: 'PKR 250',
    targetGroup: 'Remaining VIPs',
    avgPrice: 250
  },
  {
    id: 'budget-pen-exec',
    item: 'Executive Metal Pen',
    verifiedRange: 'PKR 800 to 2,500',
    workingBudget: 'PKR 1,000',
    targetGroup: 'Remaining VIPs',
    avgPrice: 1000
  },
  {
    id: 'budget-set',
    item: 'Notebook + Pen Boxed Set',
    verifiedRange: 'PKR 1,500 to 3,500',
    workingBudget: 'PKR 2,000',
    targetGroup: 'Remaining VIPs',
    avgPrice: 2000
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
    id: 'vendor-samad-brothers',
    name: 'Samad Brothers',
    url: 'https://samadbrothers.pk/trophy-manufacturers-in-pakistan/',
    tagline: 'Premier trophy, shield and crystal award manufacturers since 1965',
    description: 'One of the oldest and most respected trophy and shield makers in Pakistan, located in Aabpara Market, Islamabad. Decades of experience producing institutional awards for universities, armed forces, and government ministries.',
    whatTheyProvide: [
      'Heavy diamond-cut crystal awards for Chief Guests and dignitaries',
      'Traditional wooden shields with engraved brass emblems and plates',
      'Acrylic commemorative plaques, medal sets, and customized signboards'
    ],
    offerings: [
      {
        category: 'Chief Guest Shields',
        items: 'Multi-faceted beveled crystal trophies, heavy optic glass awards',
        priceGuide: 'PKR 6,500 to 8,000 (Premium tier)',
        notes: 'Deep optical etching and custom presentation gift box'
      },
      {
        category: 'Standard Shields',
        items: 'Polished walnut / mahogany base with brass shield cutouts and gold foil',
        priceGuide: 'PKR 2,500 to 5,000',
        notes: 'Standard tier for contributors, judges, and society sponsors'
      }
    ],
    pricingSummary: 'Standard Shields: PKR 2,500 to 5,000 | Chief Guest Tier: PKR 6,500 to 8,000',
    location: 'Aabpara Market, Islamabad (Physical factory and showroom)',
    turnaround: '5 to 7 working days',
    minimumOrder: 'Custom order basis; flexible on single or small batch VIP pieces',
    paymentTerms: 'Advance bank transfer or direct showroom pickup',
    highlights: [
      'Institutional legacy spanning over 60 years in Pakistan',
      'Physical showroom and manufacturing unit in Islamabad',
      'Expertise in high grade heavy crystal cutting'
    ],
    caveats: [
      'No automated online cart checkout; requires phone or WhatsApp coordination'
    ]
  },
  {
    id: 'vendor-glorious-gifts',
    name: 'Glorious Gifts',
    url: 'https://www.gloriousgifts.pk/collections/deal',
    tagline: 'Office & home decor brand with select gift combos and desk items',
    description: 'Branded as Pakistan office and home decoration brand specializing in desk name plates, Islamic wall frames, neon signage, and decor. They also offer select customized combo products such as metal pen + smart temperature flask sets, notebook + pen combos, and engraved keychains. For bulk society orders, confirm fulfillment capacity and lead times directly before ordering.',
    whatTheyProvide: [
      'Curated Gift Combos (Metal pen, smart temperature bottle, notebook, and keychain sets)',
      'Custom laser engraved smart temperature vacuum flasks',
      'Executive desk name plates, wooden frames, and desk decor mementos',
      'Engraved metal pens and personalized accessories'
    ],
    offerings: [
      {
        category: 'Curated Deals & Combos',
        items: 'Multi-piece gift sets (Smart Flask + Leather Diary + Metal Pen in presentation box)',
        priceGuide: 'PKR 1,800 to 3,800 per bundle deal',
        notes: 'Verify batch packaging and stock with sales team before placing large orders'
      },
      {
        category: 'Desk & Promotional Items',
        items: 'Laser engraved thermal flasks, keychains, and desk name plates',
        priceGuide: 'PKR 700 to 1,800 per item',
        notes: 'Direct WhatsApp coordination for layout proofing'
      }
    ],
    pricingSummary: 'Deal Bundles: PKR 1,800 to 3,800 | Flasks & Desk Items: PKR 700 to 1,800',
    location: 'Nationwide dispatch with active online store',
    turnaround: '4 to 6 working days',
    minimumOrder: 'Low minimums on featured deal packages',
    paymentTerms: 'Online payment and Cash on Delivery',
    highlights: [
      'Dedicated deals collection offering bundled savings',
      'Smart temperature sensor flasks popular for modern events',
      'Pre-assembled gift boxes save time for society executives'
    ],
    caveats: [
      'Catalog is primarily focused on office and home decor; verify bulk society packaging capacity and current stock with sales team prior to ordering.',
      'Stock on specific deal sets changes frequently; re-confirm active inventory.'
    ]
  },
  {
    id: 'vendor-design-your-own',
    name: 'Design Your Own (DYO)',
    url: 'https://designyourown.pk/',
    tagline: 'Interactive on-demand custom merchandise, apparel and branded swag',
    description: 'Pakistan on-demand customized apparel and merchandise platform with an interactive online design previewer. Ideal for society executive hoodies, volunteer team shirts, custom mugs, and reusable steel bottles.',
    whatTheyProvide: [
      'Custom Society Hoodies, sweatshirts, and embroidered polo shirts',
      'Crew T-shirts for event management and student volunteers',
      'Custom printed ceramic mugs, travel tumblers, and metal water bottles',
      'Branded canvas tote bags, caps, and custom souvenir stickers'
    ],
    offerings: [
      {
        category: 'Custom Event Apparel',
        items: 'Fleece hoodies, polo shirts, and 100% cotton crew t-shirts with screen or DTF print',
        priceGuide: 'T-shirts: PKR 800 to 1,400 | Hoodies: PKR 2,200 to 3,200',
        notes: 'Bulk order discounts applied on 20+ pieces'
      },
      {
        category: 'Custom Drinkware & Accessories',
        items: 'Personalized ceramic coffee mugs and matte stainless steel water bottles',
        priceGuide: 'Mugs: PKR 450 to 750 | Metal Bottles: PKR 1,200 to 1,800',
        notes: 'Full color logo printing with online preview'
      }
    ],
    pricingSummary: 'T-shirts: PKR 800 to 1,400 | Hoodies: PKR 2,200 to 3,200 | Mugs: PKR 450 to 750',
    location: 'Nationwide fulfillment with responsive online platform',
    turnaround: '5 to 7 working days',
    minimumOrder: '1 piece minimum (single unit ordering supported); bulk pricing available',
    paymentTerms: 'Bank transfer, debit/credit cards, and COD',
    highlights: [
      'Live online mockup preview before submitting order',
      'No strict minimum quantity constraint for test samples',
      'Wide apparel sizing range suitable for university teams'
    ],
    caveats: [
      'Detailed embroidery on hoodies requires slight extra lead time'
    ]
  },
  {
    id: 'vendor-safaprinters',
    name: 'Safa Printers',
    url: 'https://www.safaprinters.com/product/custom-shields/',
    tagline: 'Custom wooden, brass and crystal honor shields specialists',
    description: 'A commercial printing and awards specialist in Pakistan known for producing custom fabricated wooden honor shields, brass engraved plaques, and commemorative trophies for institutions, sports events, and corporate milestones.',
    whatTheyProvide: [
      'Custom wooden award shields with brass cutout logos and golden plate etching',
      'Optical crystal and beveled acrylic honor trophies',
      'Executive desk nameplates, commemorative plaques, and customized mementos'
    ],
    offerings: [
      {
        category: 'Custom Shields',
        items: 'Traditional hardwood shields with customized metal plates and velvet presentation boxes',
        priceGuide: 'PKR 2,000 to 7,500 per shield',
        notes: 'Available in standard, medium, and Chief Guest large dimensions'
      },
      {
        category: 'Desk Plaques',
        items: 'Engraved brass on polished wooden stands and acrylic desk blocks',
        priceGuide: 'PKR 1,500 to 4,000',
        notes: 'Suitable for speaker and judge appreciation'
      }
    ],
    pricingSummary: 'Honor Shields: PKR 2,000 to 7,500 | Plaques: PKR 1,500 to 4,000',
    location: 'Lahore and nationwide delivery',
    turnaround: '5 to 8 working days',
    minimumOrder: 'Custom quote per batch; small quantities welcomed',
    paymentTerms: 'Advance deposit and balance on completion',
    highlights: [
      'Specialized dedicated shield product catalog',
      'Classic institutional look with wood and brass accents',
      'Custom sizing tailored to society budget tiers'
    ],
    caveats: [
      'Digital proof confirmation required for brass layout before machining'
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
    text: 'Priority Spend Verification: Perform a direct WhatsApp or phone confirmation with the largest line item suppliers (Samad Brothers for Chief Guest shields and CorporateGifting.pk for bulk awards) to lock in exact production turnaround and current material rates.'
  },
  {
    id: 'check-moq-lanyards',
    text: 'MOQ and Batch Rules: Confirm product specific minimums prior to finalizing order quantities (for example, HelloPrint requires a 100 piece minimum on standard custom lanyard lines, while Aprints offers 1 piece MOQ on pens).'
  },
  {
    id: 'check-glorious-scope',
    text: 'Vendor Positioning Check: When ordering from GloriousGifts, verify corporate packaging capacity and inventory in advance since their catalog is primarily centered around home and office decor items.'
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
    text: 'Production and Buffer Schedule: Standard manufacturing takes 5 to 8 working days. Schedule a 2 to 3 day buffer before the Parallax event to account for courier transit to campus.'
  }
];
