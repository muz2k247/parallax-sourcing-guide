import React from 'react';
import { ThemeToggle } from './ThemeToggle';
import { RECIPIENT_PLAN } from '../data';
import { Award, Users, UserCheck, FileText, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeaderProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  onOpenSummary: () => void;
}

export const Header: React.FC<HeaderProps> = ({ theme, onToggleTheme, onOpenSummary }) => {
  const getRecipientAccent = (index: number) => {
    switch (index) {
      case 0:
        return {
          icon: <Award className="w-4 h-4" style={{ color: 'var(--bar-kips)' }} />,
          barColor: 'var(--bar-kips)',
          tag: 'Tier 1 Dignitary'
        };
      case 1:
        return {
          icon: <Users className="w-4 h-4" style={{ color: 'var(--bar-peer)' }} />,
          barColor: 'var(--bar-peer)',
          tag: 'Tier 2 Institutional'
        };
      default:
        return {
          icon: <UserCheck className="w-4 h-4" style={{ color: 'var(--bar-big)' }} />,
          barColor: 'var(--bar-big)',
          tag: 'Tier 3 Delegates'
        };
    }
  };

  return (
    <header className="pb-8 rule-b">
      {/* Top Utility & Status Row */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
        <div className="flex flex-wrap items-center gap-2">
          <span 
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide border shadow-2xs"
            style={{ 
              backgroundColor: 'var(--surface-raised)',
              borderColor: 'var(--rule)',
              color: 'var(--ink)'
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--good)' }} />
            <span>CSS Society</span>
            <span className="opacity-40">/</span>
            <span style={{ color: 'var(--accent)' }}>Parallax 2026</span>
          </span>

          <span 
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10.5px] font-medium border"
            style={{
              backgroundColor: 'var(--surface-subtle)',
              borderColor: 'var(--rule-light)',
              color: 'var(--ink-secondary)'
            }}
          >
            <CheckCircle2 className="w-3 h-3 text-[var(--good)]" />
            <span>Procurement &amp; Vendor Guide</span>
          </span>
        </div>
        
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button
            type="button"
            onClick={onOpenSummary}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer hover:shadow-xs hover:border-[var(--accent)]"
            style={{
              backgroundColor: 'var(--accent-dim)',
              borderColor: 'var(--accent)',
              color: 'var(--accent)'
            }}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Verified Summary</span>
          </button>
          
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
      </div>

      {/* Hero Headline and Context */}
      <div className="max-w-3xl space-y-2.5">
        <h1 
          className="serif font-semibold tracking-tight text-3xl sm:text-4xl lg:text-[40px] leading-tight"
          style={{ color: 'var(--ink)' }}
        >
          Gift &amp; Vendor Sourcing Guide
        </h1>
        <p 
          className="text-xs sm:text-sm leading-relaxed"
          style={{ color: 'var(--ink-secondary)' }}
        >
          Executive procurement manual for the Parallax signature event. Includes verified Pakistani vendors, itemized price benchmarks, direct website links, and an interactive budget calculator with customizable unit costs.
        </p>
      </div>

      {/* Recipient Protocol Cards */}
      <div className="mt-7 pt-6 rule-t">
        <div className="flex items-center justify-between gap-2 mb-3.5">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" style={{ color: 'var(--accent-gold)' }} />
            <h2 className="label" style={{ color: 'var(--ink-secondary)' }}>
              Gifting Protocol by Recipient Tier
            </h2>
          </div>
          <span className="text-[11px] font-mono opacity-70" style={{ color: 'var(--ink-soft)' }}>
            3 Tier Allocations
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {RECIPIENT_PLAN.map((plan, idx) => {
            const accent = getRecipientAccent(idx);
            return (
              <div 
                key={plan.group}
                className="panel p-4 flex flex-col justify-between relative overflow-hidden transition-all hover:translate-y-[-1px]"
              >
                {/* Subtle top accent bar */}
                <div 
                  className="absolute top-0 left-0 right-0 h-[2px]" 
                  style={{ backgroundColor: accent.barColor }} 
                />

                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-1.5">
                      {accent.icon}
                      <span className="font-bold text-xs" style={{ color: 'var(--ink)' }}>
                        {plan.group}
                      </span>
                    </div>
                    <span 
                      className="text-[9.5px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded"
                      style={{
                        backgroundColor: 'var(--surface-subtle)',
                        color: 'var(--ink-soft)'
                      }}
                    >
                      {accent.tag}
                    </span>
                  </div>

                  <p className="text-xs font-semibold leading-snug mb-2" style={{ color: 'var(--accent)' }}>
                    {plan.items}
                  </p>
                </div>

                {plan.rationale && (
                  <p className="text-[11.5px] leading-relaxed pt-2 rule-t" style={{ color: 'var(--ink-secondary)' }}>
                    {plan.rationale}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </header>
  );
};
