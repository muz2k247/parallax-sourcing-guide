import React, { useState } from 'react';
import { ORDERING_CHECKLIST } from '../data';
import { CheckSquare, Square, ShieldCheck, Calendar } from 'lucide-react';

export const GeneralGuidance: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const toggleCheck = (id: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const totalCount = ORDERING_CHECKLIST.length;
  const progressPct = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  return (
    <section id="general-guidance" className="py-7 scroll-mt-6">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3 mb-5">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--good)' }} />
            <span className="label">Verification &amp; Quality Control</span>
          </div>
          <h2 className="serif text-2xl sm:text-3xl font-semibold tracking-tight" style={{ color: 'var(--ink)' }}>
            Ordering &amp; Verification Checklist
          </h2>
          <p className="text-xs sm:text-sm mt-1" style={{ color: 'var(--ink-secondary)' }}>
            Critical operational checks to confirm with vendors prior to issuing purchase orders or approving production runs.
          </p>
        </div>

        {/* Completion Badge & Progress */}
        <div 
          className="text-xs px-3.5 py-1.5 rounded-xl border self-start sm:self-auto flex items-center gap-2 shadow-2xs font-semibold"
          style={{ 
            backgroundColor: completedCount === totalCount ? 'var(--good-dim)' : 'var(--surface)',
            borderColor: completedCount === totalCount ? 'var(--good)' : 'var(--rule)',
            color: completedCount === totalCount ? 'var(--good)' : 'var(--ink)'
          }}
        >
          <ShieldCheck className="w-4 h-4" style={{ color: completedCount === totalCount ? 'var(--good)' : 'var(--accent)' }} />
          <span>{completedCount} of {totalCount} Verified</span>
        </div>
      </div>

      <div className="panel p-5 sm:p-6 space-y-4">
        {/* Progress bar */}
        <div className="w-full h-1.5 rounded-full bg-[var(--surface-subtle)] overflow-hidden">
          <div 
            className="h-full rounded-full transition-all duration-300"
            style={{ 
              width: `${progressPct}%`,
              backgroundColor: completedCount === totalCount ? 'var(--good)' : 'var(--accent)'
            }}
          />
        </div>

        {/* Checklist Grid */}
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
          {ORDERING_CHECKLIST.map((item) => {
            const isChecked = !!checkedItems[item.id];
            return (
              <li 
                key={item.id}
                onClick={() => toggleCheck(item.id)}
                className="flex items-start gap-3 p-3.5 rounded-xl cursor-pointer transition-all select-none border hover:border-[var(--accent)]"
                style={{ 
                  backgroundColor: isChecked ? 'var(--surface-subtle)' : 'var(--surface-raised)',
                  borderColor: isChecked ? 'var(--rule)' : 'var(--rule-light)'
                }}
              >
                <button
                  type="button"
                  className="mt-0.5 flex-shrink-0 cursor-pointer focus:outline-none"
                  aria-label={isChecked ? 'Mark incomplete' : 'Mark complete'}
                >
                  {isChecked ? (
                    <CheckSquare className="w-4 h-4" style={{ color: 'var(--good)' }} />
                  ) : (
                    <Square className="w-4 h-4 opacity-50" style={{ color: 'var(--ink-soft)' }} />
                  )}
                </button>
                <span 
                  className={`text-xs sm:text-[13px] leading-relaxed ${isChecked ? 'line-through opacity-60' : 'opacity-90'}`}
                  style={{ color: 'var(--ink)' }}
                >
                  {item.text}
                </span>
              </li>
            );
          })}
        </ul>

        {/* Checklist Footer */}
        <div className="mt-4 pt-4 rule-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs" style={{ color: 'var(--ink-soft)' }}>
          <p>
            Prepared for CSS Society Executive Committee &amp; Parallax Operations.
          </p>
          <span className="font-mono text-[11px] font-semibold flex items-center gap-1.5" style={{ color: 'var(--accent-gold)' }}>
            <Calendar className="w-3.5 h-3.5" />
            <span>EVENT DATE: AUGUST 2026</span>
          </span>
        </div>
      </div>
    </section>
  );
};
