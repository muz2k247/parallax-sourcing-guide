import React, { useState } from 'react';
import { CalculatorItem, RECIPIENT_PLAN, UNIFIED_VENDORS } from '../data';
import { Copy, Check, X, FileText, CheckCircle2, Building2, Download, Printer } from 'lucide-react';

interface VerifiedSummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CalculatorItem[];
}

export const VerifiedSummaryModal: React.FC<VerifiedSummaryModalProps> = ({ isOpen, onClose, items }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const totalCost = items.reduce((sum, i) => sum + (i.quantity * i.unitPrice), 0);
  const totalUnits = items.reduce((sum, i) => sum + i.quantity, 0);

  const categories = ['Chief Guest', 'Contributors & Vendors', 'VIP Gifts', 'Custom'] as const;

  const generatePlainTextSummary = () => {
    let text = `====================================================\n`;
    text += `PARALLAX 2026 : VERIFIED SOURCING & PROCUREMENT SUMMARY\n`;
    text += `CSS Society Executive Committee & Event Management\n`;
    text += `====================================================\n\n`;

    text += `1. TOTAL ESTIMATED BUDGET: PKR ${totalCost.toLocaleString()} (${totalUnits} total items)\n\n`;

    text += `2. DETAILED ITEM BREAKDOWN & ALLOCATED BUDGET:\n`;
    categories.forEach(cat => {
      const catItems = items.filter(i => i.category === cat);
      if (catItems.length > 0) {
        const catTotal = catItems.reduce((s, i) => s + (i.quantity * i.unitPrice), 0);
        text += `[${cat.toUpperCase()}] : Subtotal PKR ${catTotal.toLocaleString()}\n`;
        catItems.forEach(i => {
          text += `  * ${i.label}: ${i.quantity} units @ PKR ${i.unitPrice.toLocaleString()}/unit = PKR ${(i.quantity * i.unitPrice).toLocaleString()}\n`;
        });
      }
    });

    text += `\n3. RECIPIENT PROTOCOL PLAN:\n`;
    RECIPIENT_PLAN.forEach(plan => {
      text += `  * ${plan.group}: ${plan.items}\n`;
    });

    text += `\n4. VETTED PAKISTANI SUPPLIERS DIRECTORY:\n`;
    UNIFIED_VENDORS.forEach(v => {
      text += `  * ${v.name} (${v.url})\n    What to source: ${v.whatTheyProvide.slice(0, 2).join('; ')}\n    Pricing Guide: ${v.pricingSummary}\n`;
    });

    text += `\n5. KEY SOURCING & PROCUREMENT PROTOCOL:\n`;
    text += `  1. Top Spend Verification: Conduct a quick WhatsApp or phone check with CorporateGifting.pk before locking production for bulk awards and shields.\n`;
    text += `  2. Artwork Approval: Always demand a digital proof for spelling, logo resolution, and date formatting before authorizing bulk engraving or printing.\n`;
    text += `  3. MOQ Verification: Confirm item specific minimums directly (for example, HelloPrint requires 100 pcs on custom lanyards, while Aprints offers 1 pc on custom pens).\n`;
    text += `  4. Schedule Buffer: Standard production takes 3 to 8 working days. Allow 2 to 3 days buffer for courier delivery to campus.\n`;

    return text;
  };

  const handleCopy = () => {
    const text = generatePlainTextSummary();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-xs">
      <div 
        className="panel-raised w-full max-w-4xl max-h-[92vh] flex flex-col p-6 sm:p-7 shadow-2xl border overflow-hidden"
        style={{
          backgroundColor: 'var(--surface)',
          borderColor: 'var(--rule)'
        }}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 rule-b">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[var(--surface-subtle)] border border-[var(--rule)]">
              <FileText className="w-5 h-5 text-[var(--accent)]" />
            </div>
            <div>
              <h3 className="serif text-xl sm:text-2xl font-bold tracking-tight" style={{ color: 'var(--ink)' }}>
                Verified Procurement Summary
              </h3>
              <p className="text-xs opacity-75" style={{ color: 'var(--ink-secondary)' }}>
                Executive document for CSS Society committee review and vendor sign-off
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer shadow-xs"
              style={{
                backgroundColor: copied ? 'var(--good-dim)' : 'var(--accent)',
                color: copied ? 'var(--good)' : 'var(--bg)',
                borderColor: copied ? 'var(--good)' : 'var(--accent)'
              }}
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied to Clipboard' : 'Copy Summary Text'}</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl border text-xs opacity-70 hover:opacity-100 cursor-pointer transition-colors"
              style={{ borderColor: 'var(--rule)', color: 'var(--ink)' }}
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto space-y-6 py-5 text-xs pr-1.5">
          
          {/* Key Summary Stat Banner */}
          <div 
            className="p-5 rounded-2xl border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shadow-sm" 
            style={{ backgroundColor: 'var(--surface-subtle)', borderColor: 'var(--rule)' }}
          >
            <div>
              <span className="text-[11px] uppercase font-bold tracking-wider opacity-70 block mb-1" style={{ color: 'var(--ink-soft)' }}>
                Total Estimated Expenditure
              </span>
              <div className="serif text-3xl sm:text-4xl font-bold font-mono tracking-tight" style={{ color: 'var(--good)' }}>
                PKR {totalCost.toLocaleString()}
              </div>
            </div>
            <div className="text-left sm:text-right sm:border-l sm:pl-5 space-y-0.5" style={{ borderColor: 'var(--rule)' }}>
              <div className="font-bold text-xs" style={{ color: 'var(--ink)' }}>
                {totalUnits} Customized Units Configured
              </div>
              <div className="text-[11.5px] opacity-75" style={{ color: 'var(--ink-secondary)' }}>
                Parallax 2026 Signature Gathering
              </div>
            </div>
          </div>

          {/* Configured Item Details */}
          <div className="space-y-3">
            <span className="font-bold text-xs uppercase tracking-wider block opacity-75" style={{ color: 'var(--ink-soft)' }}>
              1. Itemized Procurement &amp; Budget Allocation
            </span>
            <div className="space-y-3.5">
              {categories.map((cat) => {
                const groupItems = items.filter(i => i.category === cat);
                if (groupItems.length === 0) return null;
                const catTotal = groupItems.reduce((s, i) => s + (i.quantity * i.unitPrice), 0);

                return (
                  <div key={cat} className="p-4 rounded-xl border" style={{ backgroundColor: 'var(--surface-raised)', borderColor: 'var(--rule)' }}>
                    <div className="flex justify-between items-center pb-2 rule-b mb-2.5 font-bold">
                      <span className="text-xs uppercase tracking-wide" style={{ color: 'var(--ink)' }}>{cat}</span>
                      <span className="font-mono text-xs" style={{ color: 'var(--accent)' }}>
                        Subtotal: PKR {catTotal.toLocaleString()}
                      </span>
                    </div>
                    <div className="space-y-1.5">
                      {groupItems.map(i => (
                        <div key={i.id} className="flex justify-between items-center text-[12px] opacity-90 py-0.5">
                          <span style={{ color: 'var(--ink)' }}>
                            {i.label} <span className="opacity-65">({i.quantity} units @ PKR {i.unitPrice.toLocaleString()})</span>
                          </span>
                          <span className="font-mono font-semibold" style={{ color: 'var(--ink)' }}>
                            PKR {(i.quantity * i.unitPrice).toLocaleString()}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Recipient Protocol */}
          <div className="space-y-3">
            <span className="font-bold text-xs uppercase tracking-wider block opacity-75" style={{ color: 'var(--ink-soft)' }}>
              2. Gifting Protocol by Recipient Tier
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {RECIPIENT_PLAN.map((plan) => (
                <div key={plan.group} className="p-3.5 rounded-xl border flex flex-col justify-between" style={{ backgroundColor: 'var(--surface-raised)', borderColor: 'var(--rule)' }}>
                  <div>
                    <div className="font-bold text-xs mb-1" style={{ color: 'var(--ink)' }}>{plan.group}</div>
                    <p className="text-[11.5px] font-semibold leading-relaxed" style={{ color: 'var(--accent)' }}>{plan.items}</p>
                  </div>
                  {plan.rationale && (
                    <p className="text-[11px] opacity-75 mt-2 pt-1.5 rule-t" style={{ color: 'var(--ink-soft)' }}>
                      {plan.rationale}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Vetted Suppliers Directory Overview */}
          <div className="space-y-3">
            <span className="font-bold text-xs uppercase tracking-wider block opacity-75" style={{ color: 'var(--ink-soft)' }}>
              3. Vetted Vendor Directory Summary
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              {UNIFIED_VENDORS.map((v) => (
                <div key={v.id} className="p-3 rounded-xl border flex flex-col justify-between" style={{ backgroundColor: 'var(--surface-raised)', borderColor: 'var(--rule)' }}>
                  <div>
                    <div className="font-bold text-xs" style={{ color: 'var(--ink)' }}>{v.name}</div>
                    <div className="text-[11.5px] opacity-80 mt-0.5" style={{ color: 'var(--ink-secondary)' }}>{v.tagline}</div>
                  </div>
                  <div className="font-mono text-[10.5px] font-semibold mt-2 opacity-85" style={{ color: 'var(--accent)' }}>
                    {v.pricingSummary}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="pt-4 rule-t flex items-center justify-between">
          <div className="flex items-center gap-2 text-[11.5px] opacity-80" style={{ color: 'var(--ink-secondary)' }}>
            <CheckCircle2 className="w-4 h-4 text-[var(--good)]" />
            <span>Ready for executive circulation &amp; procurement approvals</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold border cursor-pointer hover:bg-[var(--surface-subtle)] transition-colors"
            style={{ borderColor: 'var(--rule)', color: 'var(--ink)' }}
          >
            Close Summary
          </button>
        </div>
      </div>
    </div>
  );
};
