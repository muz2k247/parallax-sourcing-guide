import React, { useState } from 'react';
import { CalculatorItem, DEFAULT_CALCULATOR_ITEMS, BUDGET_TABLE } from '../data';
import { RotateCcw, Plus, Trash2, CheckCircle2, DollarSign, PieChart, ArrowUpDown } from 'lucide-react';

interface BudgetCalculatorProps {
  items: CalculatorItem[];
  onItemsChange: (items: CalculatorItem[]) => void;
}

export const BudgetCalculator: React.FC<BudgetCalculatorProps> = ({ items, onItemsChange }) => {
  const [showAddCustom, setShowAddCustom] = useState(false);
  const [customLabel, setCustomLabel] = useState('');
  const [customPrice, setCustomPrice] = useState<number>(1000);
  const [customQty, setCustomQty] = useState<number>(10);

  const handleQtyChange = (id: string, deltaOrVal: number, isAbsolute = false) => {
    onItemsChange(
      items.map(item => {
        if (item.id !== id) return item;
        const nextQty = isAbsolute ? deltaOrVal : item.quantity + deltaOrVal;
        return {
          ...item,
          quantity: Math.max(0, isNaN(nextQty) ? 0 : nextQty)
        };
      })
    );
  };

  const handlePriceChange = (id: string, newPrice: number) => {
    onItemsChange(
      items.map(item => {
        if (item.id !== id) return item;
        return {
          ...item,
          unitPrice: Math.max(0, isNaN(newPrice) ? 0 : newPrice)
        };
      })
    );
  };

  const handleResetPriceToAvg = (id: string) => {
    onItemsChange(
      items.map(item => {
        if (item.id !== id) return item;
        return {
          ...item,
          unitPrice: item.avgPrice
        };
      })
    );
  };

  const handleResetAll = () => {
    onItemsChange(DEFAULT_CALCULATOR_ITEMS);
  };

  const handleAddCustomItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customLabel.trim()) return;

    const newItem: CalculatorItem = {
      id: `custom-${Date.now()}`,
      label: customLabel.trim(),
      category: 'Custom',
      avgPrice: customPrice,
      unitPrice: customPrice,
      quantity: customQty,
      note: 'Custom society event item'
    };

    onItemsChange([...items, newItem]);
    setCustomLabel('');
    setCustomPrice(1000);
    setCustomQty(10);
    setShowAddCustom(false);
  };

  const handleDeleteItem = (id: string) => {
    onItemsChange(items.filter(item => item.id !== id));
  };

  // Grouped subtotals
  const totalCost = items.reduce((sum, item) => sum + (item.quantity * item.unitPrice), 0);
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

  const categories = ['Chief Guest', 'Contributors & Vendors', 'VIP Gifts', 'Custom'] as const;

  const categoryColors: Record<string, string> = {
    'Chief Guest': 'var(--bar-kips)',
    'Contributors & Vendors': 'var(--bar-peer)',
    'VIP Gifts': 'var(--accent-gold)',
    'Custom': 'var(--bar-big)'
  };

  return (
    <section id="budget-calculator" className="py-7 rule-b scroll-mt-6">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--accent)' }} />
            <span className="label">Financial Modeling &amp; Sourcing</span>
          </div>
          <h2 className="serif text-2xl sm:text-3xl font-semibold tracking-tight" style={{ color: 'var(--ink)' }}>
            Budget Calculator &amp; Unit Rates
          </h2>
          <p className="text-xs sm:text-sm mt-1" style={{ color: 'var(--ink-secondary)' }}>
            Adjust item counts and edit unit prices directly based on live quotes. Default rates reflect verified Pakistani supplier benchmarks.
          </p>
        </div>

        <button
          type="button"
          onClick={handleResetAll}
          className="btn-toggle inline-flex items-center gap-1.5 self-start sm:self-auto cursor-pointer shadow-2xs"
          title="Reset all prices and quantities to default benchmarks"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Benchmarks</span>
        </button>
      </div>

      {/* Allocation Visual Bar */}
      {totalCost > 0 && (
        <div className="panel p-4 mb-6 space-y-2.5">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-1.5 font-semibold" style={{ color: 'var(--ink)' }}>
              <PieChart className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>Budget Allocation Distribution</span>
            </div>
            <span className="font-mono text-[11px] font-semibold" style={{ color: 'var(--ink-secondary)' }}>
              Total: PKR {totalCost.toLocaleString()}
            </span>
          </div>

          {/* Stacked Progress Bar */}
          <div className="w-full h-2.5 rounded-full bg-[var(--surface-subtle)] overflow-hidden flex">
            {categories.map((cat) => {
              const groupItems = items.filter(i => i.category === cat);
              const groupTotal = groupItems.reduce((sum, i) => sum + (i.quantity * i.unitPrice), 0);
              const pct = totalCost > 0 ? (groupTotal / totalCost) * 100 : 0;
              if (pct <= 0) return null;

              return (
                <div
                  key={cat}
                  style={{
                    width: `${pct}%`,
                    backgroundColor: categoryColors[cat]
                  }}
                  title={`${cat}: PKR ${groupTotal.toLocaleString()} (${pct.toFixed(1)}%)`}
                  className="h-full transition-all duration-300 first:rounded-l-full last:rounded-r-full"
                />
              );
            })}
          </div>

          {/* Allocation Legend */}
          <div className="flex flex-wrap items-center gap-4 pt-1 text-[11px]">
            {categories.map((cat) => {
              const groupItems = items.filter(i => i.category === cat);
              const groupTotal = groupItems.reduce((sum, i) => sum + (i.quantity * i.unitPrice), 0);
              const pct = totalCost > 0 ? (groupTotal / totalCost) * 100 : 0;
              if (groupItems.length === 0 || groupTotal === 0) return null;

              return (
                <div key={cat} className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: categoryColors[cat] }} />
                  <span className="opacity-80" style={{ color: 'var(--ink)' }}>{cat}:</span>
                  <span className="font-mono font-semibold" style={{ color: 'var(--ink)' }}>{pct.toFixed(0)}%</span>
                  <span className="font-mono text-[10px] opacity-60" style={{ color: 'var(--ink-soft)' }}>
                    (PKR {groupTotal.toLocaleString()})
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column: Detailed Items Table with Editable Unit Price and Quantity (8 cols) */}
        <div className="lg:col-span-8 space-y-5">
          {categories.map((cat) => {
            const groupItems = items.filter(i => i.category === cat);
            if (groupItems.length === 0) return null;

            const groupSubtotal = groupItems.reduce((sum, i) => sum + (i.quantity * i.unitPrice), 0);
            const groupCount = groupItems.reduce((sum, i) => sum + i.quantity, 0);

            return (
              <div key={cat} className="panel p-4 sm:p-5 space-y-3.5">
                <div className="flex items-center justify-between pb-2.5 rule-b">
                  <div className="flex items-center gap-2">
                    <span 
                      className="w-2.5 h-2.5 rounded-full" 
                      style={{ backgroundColor: categoryColors[cat] }} 
                    />
                    <h3 className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--ink)' }}>
                      {cat}
                    </h3>
                    <span className="text-[10.5px] px-2 py-0.5 rounded-full font-mono font-medium border" style={{ backgroundColor: 'var(--surface-subtle)', borderColor: 'var(--rule)', color: 'var(--ink-soft)' }}>
                      {groupCount} units
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold" style={{ color: 'var(--accent)' }}>
                    Subtotal: PKR {groupSubtotal.toLocaleString()}
                  </span>
                </div>

                <div className="space-y-2.5">
                  {groupItems.map((item) => {
                    const isCustomPrice = item.unitPrice !== item.avgPrice;
                    const itemTotal = item.quantity * item.unitPrice;

                    return (
                      <div 
                        key={item.id}
                        className="p-3.5 rounded-xl border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3.5 transition-all hover:border-[var(--accent)]"
                        style={{
                          backgroundColor: 'var(--surface-subtle)',
                          borderColor: isCustomPrice ? 'var(--accent-gold)' : 'var(--rule)'
                        }}
                      >
                        {/* Item Label & Notes */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold" style={{ color: 'var(--ink)' }}>
                              {item.label}
                            </span>
                            {item.category === 'Custom' && (
                              <button
                                type="button"
                                onClick={() => handleDeleteItem(item.id)}
                                className="text-xs opacity-60 hover:opacity-100 hover:text-red-500 cursor-pointer p-0.5"
                                title="Remove custom item"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            )}
                          </div>
                          {item.note && (
                            <p className="text-[11.5px] mt-0.5 leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
                              {item.note}
                            </p>
                          )}
                        </div>

                        {/* Controls: Editable Price + Quantity Stepper + Item Total */}
                        <div className="flex flex-wrap items-center gap-4 self-start sm:self-auto">
                          
                          {/* Unit Price Input */}
                          <div className="flex flex-col items-end">
                            <span className="text-[10px] font-semibold uppercase tracking-wider opacity-60 mb-0.5" style={{ color: 'var(--ink-soft)' }}>
                              Unit Price (PKR)
                            </span>
                            <div className="flex items-center gap-1.5">
                              <div className="relative">
                                <input
                                  type="number"
                                  min="0"
                                  step="50"
                                  value={item.unitPrice}
                                  onChange={(e) => handlePriceChange(item.id, parseInt(e.target.value) || 0)}
                                  className="w-24 px-2.5 py-1.5 text-right rounded-lg border font-mono text-xs font-semibold transition-colors focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
                                  style={{
                                    backgroundColor: 'var(--surface)',
                                    borderColor: isCustomPrice ? 'var(--accent-gold)' : 'var(--rule)',
                                    color: 'var(--ink)'
                                  }}
                                />
                              </div>
                              {isCustomPrice && (
                                <button
                                  type="button"
                                  onClick={() => handleResetPriceToAvg(item.id)}
                                  className="text-[10px] font-mono px-1.5 py-1 rounded-md border transition-colors cursor-pointer hover:bg-[var(--surface-raised)]"
                                  style={{
                                    backgroundColor: 'var(--surface)',
                                    borderColor: 'var(--accent-gold)',
                                    color: 'var(--accent-gold)'
                                  }}
                                  title={`Reset to benchmark average (PKR ${item.avgPrice.toLocaleString()})`}
                                >
                                  Avg
                                </button>
                              )}
                            </div>
                          </div>

                          {/* Quantity Stepper */}
                          <div className="flex flex-col items-center">
                            <span className="text-[10px] font-semibold uppercase tracking-wider opacity-60 mb-0.5" style={{ color: 'var(--ink-soft)' }}>
                              Quantity
                            </span>
                            <div className="flex items-center rounded-lg border overflow-hidden" style={{ borderColor: 'var(--rule)' }}>
                              <button
                                type="button"
                                onClick={() => handleQtyChange(item.id, -1)}
                                className="w-7 h-7 bg-[var(--surface)] text-xs font-bold flex items-center justify-center cursor-pointer hover:bg-[var(--surface-raised)] transition-colors"
                                style={{ color: 'var(--ink)' }}
                              >
                                -
                              </button>
                              <input
                                type="number"
                                min="0"
                                value={item.quantity}
                                onChange={(e) => handleQtyChange(item.id, parseInt(e.target.value) || 0, true)}
                                className="w-12 text-center py-1 bg-[var(--surface)] font-mono text-xs font-semibold border-x"
                                style={{
                                  borderColor: 'var(--rule)',
                                  color: 'var(--ink)'
                                }}
                              />
                              <button
                                type="button"
                                onClick={() => handleQtyChange(item.id, 1)}
                                className="w-7 h-7 bg-[var(--surface)] text-xs font-bold flex items-center justify-center cursor-pointer hover:bg-[var(--surface-raised)] transition-colors"
                                style={{ color: 'var(--ink)' }}
                              >
                                +
                              </button>
                            </div>
                          </div>

                          {/* Item Subtotal */}
                          <div className="w-24 text-right">
                            <span className="text-[10px] font-semibold uppercase tracking-wider opacity-60 block mb-0.5" style={{ color: 'var(--ink-soft)' }}>
                              Subtotal
                            </span>
                            <span className="text-xs font-mono font-bold block py-1" style={{ color: 'var(--ink)' }}>
                              PKR {itemTotal.toLocaleString()}
                            </span>
                          </div>

                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {/* Add Custom Item Button & Form */}
          {!showAddCustom ? (
            <button
              type="button"
              onClick={() => setShowAddCustom(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold border border-dashed transition-all cursor-pointer hover:bg-[var(--surface-raised)] hover:border-[var(--accent)]"
              style={{
                backgroundColor: 'var(--surface)',
                borderColor: 'var(--rule)',
                color: 'var(--accent)'
              }}
            >
              <Plus className="w-4 h-4" />
              <span>Add Custom Event Item / Additional Expense</span>
            </button>
          ) : (
            <form onSubmit={handleAddCustomItem} className="panel p-5 space-y-4">
              <div className="flex items-center justify-between pb-2 rule-b">
                <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--ink)' }}>
                  Add Custom Event Item
                </span>
                <button
                  type="button"
                  onClick={() => setShowAddCustom(false)}
                  className="text-xs opacity-60 hover:opacity-100 cursor-pointer"
                >
                  Cancel
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-xs">
                <div className="sm:col-span-1">
                  <label className="block text-[11px] font-semibold mb-1 opacity-80" style={{ color: 'var(--ink)' }}>
                    Item Description
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. VIP Lanyards / Badges"
                    value={customLabel}
                    onChange={(e) => setCustomLabel(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border text-xs"
                    style={{ backgroundColor: 'var(--surface-subtle)', borderColor: 'var(--rule)', color: 'var(--ink)' }}
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold mb-1 opacity-80" style={{ color: 'var(--ink)' }}>
                    Unit Price (PKR)
                  </label>
                  <input
                    type="number"
                    min="0"
                    required
                    value={customPrice}
                    onChange={(e) => setCustomPrice(parseInt(e.target.value) || 0)}
                    className="w-full px-3 py-2 rounded-lg border font-mono text-xs font-semibold"
                    style={{ backgroundColor: 'var(--surface-subtle)', borderColor: 'var(--rule)', color: 'var(--ink)' }}
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold mb-1 opacity-80" style={{ color: 'var(--ink)' }}>
                    Quantity
                  </label>
                  <input
                    type="number"
                    min="1"
                    required
                    value={customQty}
                    onChange={(e) => setCustomQty(parseInt(e.target.value) || 1)}
                    className="w-full px-3 py-2 rounded-lg border font-mono text-xs font-semibold"
                    style={{ backgroundColor: 'var(--surface-subtle)', borderColor: 'var(--rule)', color: 'var(--ink)' }}
                  />
                </div>
              </div>

              <div className="flex justify-end pt-1">
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer shadow-xs"
                  style={{
                    backgroundColor: 'var(--accent)',
                    color: 'var(--bg)'
                  }}
                >
                  Add to Sourcing Calculator
                </button>
              </div>
            </form>
          )}

        </div>

        {/* Right Column: Live Calculation Summary Card (4 cols) */}
        <div className="lg:col-span-4 space-y-4">
          <div 
            className="panel p-5 sm:p-6 space-y-5 border shadow-md relative overflow-hidden"
            style={{
              backgroundColor: 'var(--surface)',
              borderColor: 'var(--accent)'
            }}
          >
            {/* Top decorative accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--accent)]" />

            <div>
              <span className="label text-[10.5px] uppercase tracking-wider block mb-1" style={{ color: 'var(--ink-soft)' }}>
                Total Estimated Expenditure
              </span>
              <div className="serif text-3xl sm:text-4xl font-bold font-mono tracking-tight my-1.5" style={{ color: 'var(--good)' }}>
                PKR {totalCost.toLocaleString()}
              </div>
              <p className="text-xs leading-relaxed opacity-85" style={{ color: 'var(--ink-secondary)' }}>
                Calculated for <strong style={{ color: 'var(--ink)' }}>{totalQuantity} customized units</strong> across all configured categories.
              </p>
            </div>

            {/* Subtotal Summary Rows */}
            <div className="space-y-2 pt-3 rule-t text-xs">
              <span className="text-[10.5px] font-bold uppercase tracking-wider block opacity-70 mb-2" style={{ color: 'var(--ink-soft)' }}>
                Category Breakdown
              </span>
              {categories.map((cat) => {
                const groupItems = items.filter(i => i.category === cat);
                if (groupItems.length === 0) return null;
                const groupSubtotal = groupItems.reduce((sum, i) => sum + (i.quantity * i.unitPrice), 0);
                const count = groupItems.reduce((sum, i) => sum + i.quantity, 0);

                return (
                  <div key={cat} className="flex justify-between items-center py-1">
                    <span className="flex items-center gap-2 text-xs" style={{ color: 'var(--ink)' }}>
                      <span 
                        className="w-2 h-2 rounded-full" 
                        style={{ backgroundColor: categoryColors[cat] }} 
                      />
                      <span>{cat} ({count}):</span>
                    </span>
                    <span className="font-mono font-bold text-xs" style={{ color: 'var(--ink)' }}>
                      PKR {groupSubtotal.toLocaleString()}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="pt-3 rule-t flex items-start gap-2 text-[11.5px] opacity-80" style={{ color: 'var(--ink-secondary)' }}>
              <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-[var(--good)]" />
              <span>Unit prices update real-time and flow directly into the verified executive summary.</span>
            </div>
          </div>

          {/* Reference Market Benchmarks */}
          <div className="panel p-4 space-y-2.5">
            <span className="label block text-[10px]" style={{ color: 'var(--ink-soft)' }}>
              Verified Market Reference Ranges (2026)
            </span>
            <div className="space-y-2 text-xs">
              {BUDGET_TABLE.map((row) => (
                <div key={row.id} className="flex justify-between items-center py-1 rule-b last:border-b-0">
                  <span className="truncate pr-2 text-[11.5px] font-medium" style={{ color: 'var(--ink)' }}>
                    {row.item}
                  </span>
                  <span className="font-mono text-[11px] font-semibold flex-shrink-0" style={{ color: 'var(--accent)' }}>
                    {row.verifiedRange}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
