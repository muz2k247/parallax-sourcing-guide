import React, { useState } from 'react';
import { UNIFIED_VENDORS } from '../data';
import { ExternalLink, Check, MapPin, Clock, PackageCheck, Search, ShieldCheck, Globe, AlertCircle } from 'lucide-react';

export const VendorsDirectory: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterTags = [
    { id: 'all', label: 'All Suppliers (10)' },
    { id: 'shields', label: 'Honor Shields & Awards' },
    { id: 'certificates', label: 'Certificates & Passes' },
    { id: 'pens', label: 'Pens & Presentation Sets' },
    { id: 'apparel', label: 'Apparel & Society Swag' },
    { id: 'flowers', label: 'Fresh Floral Bouquets' }
  ];

  const filteredVendors = UNIFIED_VENDORS.filter((vendor) => {
    // Search query filter
    const matchesSearch = 
      vendor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vendor.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vendor.whatTheyProvide.some(item => item.toLowerCase().includes(searchQuery.toLowerCase())) ||
      vendor.tagline.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    // Tag filter
    if (selectedTag === 'all') return true;
    if (selectedTag === 'shields') {
      return ['vendor-samad-brothers', 'vendor-corporate-gifting', 'vendor-safaprinters'].includes(vendor.id);
    }
    if (selectedTag === 'certificates') {
      return ['vendor-aprints', 'vendor-click2print', 'vendor-helloprint'].includes(vendor.id);
    }
    if (selectedTag === 'pens') {
      return ['vendor-toobas', 'vendor-corporate-gifting', 'vendor-aprints', 'vendor-glorious-gifts'].includes(vendor.id);
    }
    if (selectedTag === 'apparel') {
      return ['vendor-design-your-own', 'vendor-glorious-gifts', 'vendor-helloprint'].includes(vendor.id);
    }
    if (selectedTag === 'flowers') {
      return vendor.id === 'vendor-bloom-and-beyond';
    }
    return true;
  });

  return (
    <section id="vendors-directory" className="py-7 rule-b scroll-mt-6">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--accent)' }} />
            <span className="label">Vetted Suppliers &amp; Catalog</span>
          </div>
          <h2 className="serif text-2xl sm:text-3xl font-semibold tracking-tight" style={{ color: 'var(--ink)' }}>
            Vetted Vendors &amp; Websites
          </h2>
          <p className="text-xs sm:text-sm mt-1" style={{ color: 'var(--ink-secondary)' }}>
            Detailed breakdown of items available from each verified supplier, verified price benchmarks, minimum order requirements, and delivery logistics.
          </p>
        </div>

        <span 
          className="text-xs font-semibold px-3 py-1.5 rounded-full border self-start sm:self-auto inline-flex items-center gap-1.5 shadow-2xs"
          style={{ backgroundColor: 'var(--surface-raised)', borderColor: 'var(--rule)', color: 'var(--accent)' }}
        >
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>{filteredVendors.length} Verified Sources</span>
        </span>
      </div>

      {/* Search & Tag Filter Toolbar */}
      <div className="space-y-3.5 mb-6">
        {/* Search Bar */}
        <div className="relative w-full max-w-md">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 opacity-50" style={{ color: 'var(--ink)' }} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search vendor, item, or specialty (e.g. shield, pen, hoodie, flowers)..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border text-xs transition-all focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
            style={{
              backgroundColor: 'var(--surface)',
              borderColor: 'var(--rule)',
              color: 'var(--ink)'
            }}
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs opacity-60 hover:opacity-100 cursor-pointer font-medium"
            >
              Clear
            </button>
          )}
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {filterTags.map((tag) => {
            const isActive = selectedTag === tag.id;
            return (
              <button
                key={tag.id}
                type="button"
                onClick={() => setSelectedTag(tag.id)}
                className="px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer border"
                style={{
                  backgroundColor: isActive ? 'var(--accent)' : 'var(--surface)',
                  color: isActive ? 'var(--bg)' : 'var(--ink)',
                  borderColor: isActive ? 'var(--accent)' : 'var(--rule)'
                }}
              >
                {tag.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Vendor Cards List (Clean, Text-Driven, Professional) */}
      <div className="space-y-6">
        {filteredVendors.map((vendor) => (
          <div 
            key={vendor.id}
            id={vendor.id}
            className="panel p-5 sm:p-6 transition-all hover:border-[var(--accent)] scroll-mt-16 space-y-4"
          >
            {/* Card Header: Name, Tagline, Domain Badge & Direct Link */}
            <div className="flex flex-wrap items-start justify-between gap-3 pb-3 rule-b">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="serif text-xl sm:text-2xl font-bold tracking-tight" style={{ color: 'var(--ink)' }}>
                    {vendor.name}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-[10.5px] font-mono px-2 py-0.5 rounded-md border opacity-75" style={{ backgroundColor: 'var(--surface-subtle)', borderColor: 'var(--rule)' }}>
                    <Globe className="w-3 h-3" />
                    <span>{new URL(vendor.url).hostname.replace('www.', '')}</span>
                  </span>
                </div>
                <p className="text-xs font-semibold mt-1" style={{ color: 'var(--accent)' }}>
                  {vendor.tagline}
                </p>
              </div>

              <a
                href={vendor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer hover:bg-[var(--accent-dim)] hover:border-[var(--accent)] shadow-2xs"
                style={{
                  backgroundColor: 'var(--surface-raised)',
                  borderColor: 'var(--rule)',
                  color: 'var(--accent)'
                }}
              >
                <span>Visit {vendor.name}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Simple Description */}
            <p className="text-xs sm:text-[13.5px] leading-relaxed" style={{ color: 'var(--ink-secondary)' }}>
              {vendor.description}
            </p>

            {/* "What we can source from here" Box */}
            <div 
              className="p-4 rounded-xl border space-y-2.5"
              style={{
                backgroundColor: 'var(--surface-subtle)',
                borderColor: 'var(--rule)'
              }}
            >
              <div className="text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5" style={{ color: 'var(--ink)' }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--accent)' }} />
                <span>What we can source from here:</span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs opacity-90 pl-1" style={{ color: 'var(--ink)' }}>
                {vendor.whatTheyProvide.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: 'var(--accent)' }} />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price & Offerings Breakdown */}
            <div className="space-y-2.5">
              <span className="text-[11px] font-bold uppercase tracking-wider opacity-70" style={{ color: 'var(--ink-soft)' }}>
                Offerings and Price Estimates
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
                {vendor.offerings.map((offering, idx) => (
                  <div 
                    key={idx}
                    className="p-3.5 rounded-xl border flex flex-col justify-between"
                    style={{
                      backgroundColor: 'var(--surface-raised)',
                      borderColor: 'var(--rule)'
                    }}
                  >
                    <div>
                      <div className="font-bold text-xs" style={{ color: 'var(--ink)' }}>
                        {offering.category}
                      </div>
                      {offering.priceGuide && (
                        <div className="font-mono text-xs font-semibold my-1.5" style={{ color: 'var(--accent)' }}>
                          {offering.priceGuide}
                        </div>
                      )}
                      <p className="text-[11.5px] opacity-85 leading-relaxed" style={{ color: 'var(--ink-secondary)' }}>
                        {offering.items}
                      </p>
                    </div>
                    {offering.notes && (
                      <div className="text-[10.5px] opacity-70 mt-2.5 pt-1.5 rule-t" style={{ color: 'var(--ink-soft)' }}>
                        {offering.notes}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Logistics & Practical Notes footer */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-3.5 rule-t text-xs">
              <div className="flex flex-wrap items-center gap-2 text-[11px]">
                {vendor.location && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[var(--surface-subtle)] border border-[var(--rule)] opacity-90 font-medium">
                    <MapPin className="w-3 h-3 text-[var(--accent)]" />
                    <span>{vendor.location}</span>
                  </span>
                )}
                {vendor.turnaround && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[var(--surface-subtle)] border border-[var(--rule)] opacity-90 font-medium">
                    <Clock className="w-3 h-3 text-[var(--good)]" />
                    <span>{vendor.turnaround}</span>
                  </span>
                )}
                {vendor.minimumOrder && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[var(--surface-subtle)] border border-[var(--rule)] opacity-90 font-medium">
                    <PackageCheck className="w-3 h-3 text-[var(--bar-kips)]" />
                    <span>{vendor.minimumOrder}</span>
                  </span>
                )}
              </div>

              <div className="text-xs font-mono font-semibold" style={{ color: 'var(--ink)' }}>
                {vendor.pricingSummary}
              </div>
            </div>

            {/* Sourcing Highlights */}
            {vendor.highlights && vendor.highlights.length > 0 && (
              <div className="space-y-1 pt-1">
                {vendor.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-1.5 text-[11.5px]" style={{ color: 'var(--ink-secondary)' }}>
                    <Check className="w-3.5 h-3.5 text-[var(--good)] mt-0.5 flex-shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Caveats & Verification Advisory Notes */}
            {vendor.caveats && vendor.caveats.length > 0 && (
              <div 
                className="p-3 rounded-xl border text-[11.5px] space-y-1 mt-2"
                style={{
                  backgroundColor: 'var(--accent-gold-dim)',
                  borderColor: 'var(--accent-gold)',
                  color: 'var(--ink)'
                }}
              >
                <div className="font-bold flex items-center gap-1.5 text-[11px] uppercase tracking-wider" style={{ color: 'var(--accent-gold)' }}>
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>Sourcing Advisory &amp; Verification Note:</span>
                </div>
                {vendor.caveats.map((caveat, idx) => (
                  <p key={idx} className="opacity-90 leading-relaxed pl-5">
                    • {caveat}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Empty Search State */}
      {filteredVendors.length === 0 && (
        <div className="panel text-center py-12 space-y-3">
          <p className="text-sm font-semibold" style={{ color: 'var(--ink)' }}>
            No vendors found matching "{searchQuery}"
          </p>
          <button
            type="button"
            onClick={() => { setSearchQuery(''); setSelectedTag('all'); }}
            className="px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer"
            style={{
              backgroundColor: 'var(--accent)',
              color: 'var(--bg)'
            }}
          >
            Clear Search Filters
          </button>
        </div>
      )}
    </section>
  );
};
