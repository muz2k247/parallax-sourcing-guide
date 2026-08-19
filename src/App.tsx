import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { BudgetCalculator } from './components/BudgetCalculator';
import { VendorsDirectory } from './components/VendorsDirectory';
import { GeneralGuidance } from './components/GeneralGuidance';
import { VerifiedSummaryModal } from './components/VerifiedSummaryModal';
import { DEFAULT_CALCULATOR_ITEMS, CalculatorItem, UNIFIED_VENDORS } from './data';
import { Calculator, Building2, CheckSquare, FileText, ArrowUp, Sparkles, Shield, BookmarkCheck } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('budget-calculator');
  const [calculatorItems, setCalculatorItems] = useState<CalculatorItem[]>(DEFAULT_CALCULATOR_ITEMS);
  const [isSummaryOpen, setIsSummaryOpen] = useState(false);

  useEffect(() => {
    // Initial theme setup (defaulting to dark as requested)
    const savedTheme = localStorage.getItem('parallax-theme') as 'dark' | 'light' | null;
    const initialTheme = savedTheme || 'dark';
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);

    const handleScroll = () => {
      if (window.scrollY > 350) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Check current visible section
      const sectionIds = ['budget-calculator', 'vendors-directory', 'general-guidance'];
      const scrollPos = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('parallax-theme', nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const totalSpend = calculatorItems.reduce((sum, item) => sum + (item.quantity * item.unitPrice), 0);
  const totalItemsCount = calculatorItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen selection:bg-[var(--accent)] selection:text-[var(--bg)]" style={{ backgroundColor: 'var(--bg)', color: 'var(--ink)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-9">
        
        {/* Main Grid Layout with Left-Hand Vertical Navigation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Section: Vertical Navigation Menu (arranged one after another vertically) */}
          <aside className="lg:col-span-3 lg:sticky lg:top-6 space-y-4">
            
            {/* Navigation Panel */}
            <div className="panel p-5 space-y-5 shadow-sm">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent)' }} />
                  <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: 'var(--ink-soft)' }}>
                    Operations &amp; Navigation
                  </span>
                </div>
                <div className="serif text-lg font-bold tracking-tight" style={{ color: 'var(--ink)' }}>
                  Parallax Sourcing
                </div>
                <p className="text-[11px] leading-relaxed opacity-75" style={{ color: 'var(--ink-secondary)' }}>
                  CSS Society Executive Procurement Guide
                </p>
              </div>

              {/* Vertical list of navigation buttons */}
              <nav className="flex flex-col space-y-2 rule-t pt-4">
                <a
                  href="#budget-calculator"
                  onClick={() => setActiveSection('budget-calculator')}
                  className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
                    activeSection === 'budget-calculator' 
                      ? 'shadow-xs border-[var(--accent)]' 
                      : 'hover:bg-[var(--surface-raised)] border-[var(--rule)]'
                  }`}
                  style={{
                    backgroundColor: activeSection === 'budget-calculator' ? 'var(--accent-dim)' : 'var(--surface-subtle)',
                    color: activeSection === 'budget-calculator' ? 'var(--accent)' : 'var(--ink)'
                  }}
                >
                  <div className="flex items-center gap-2.5">
                    <Calculator className="w-4 h-4 flex-shrink-0" />
                    <span>Budget Calculator</span>
                  </div>
                  <span className="font-mono text-[10px] px-1.5 py-0.5 rounded border opacity-75" style={{ borderColor: 'var(--rule)' }}>
                    Live
                  </span>
                </a>

                <a
                  href="#vendors-directory"
                  onClick={() => setActiveSection('vendors-directory')}
                  className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
                    activeSection === 'vendors-directory' 
                      ? 'shadow-xs border-[var(--accent)]' 
                      : 'hover:bg-[var(--surface-raised)] border-[var(--rule)]'
                  }`}
                  style={{
                    backgroundColor: activeSection === 'vendors-directory' ? 'var(--accent-dim)' : 'var(--surface-subtle)',
                    color: activeSection === 'vendors-directory' ? 'var(--accent)' : 'var(--ink)'
                  }}
                >
                  <div className="flex items-center gap-2.5">
                    <Building2 className="w-4 h-4 flex-shrink-0" />
                    <span>Suppliers Directory</span>
                  </div>
                  <span className="font-mono text-[10px] px-1.5 py-0.5 rounded border opacity-75" style={{ borderColor: 'var(--rule)' }}>
                    {UNIFIED_VENDORS.length}
                  </span>
                </a>

                <a
                  href="#general-guidance"
                  onClick={() => setActiveSection('general-guidance')}
                  className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
                    activeSection === 'general-guidance' 
                      ? 'shadow-xs border-[var(--accent)]' 
                      : 'hover:bg-[var(--surface-raised)] border-[var(--rule)]'
                  }`}
                  style={{
                    backgroundColor: activeSection === 'general-guidance' ? 'var(--accent-dim)' : 'var(--surface-subtle)',
                    color: activeSection === 'general-guidance' ? 'var(--accent)' : 'var(--ink)'
                  }}
                >
                  <div className="flex items-center gap-2.5">
                    <CheckSquare className="w-4 h-4 flex-shrink-0" />
                    <span>Ordering Checklist</span>
                  </div>
                  <span className="font-mono text-[10px] px-1.5 py-0.5 rounded border opacity-75" style={{ borderColor: 'var(--rule)' }}>
                    QC
                  </span>
                </a>
              </nav>

              {/* Action Button: Verified Summary */}
              <div className="pt-2 rule-t space-y-2">
                <button
                  type="button"
                  onClick={() => setIsSummaryOpen(true)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer shadow-xs hover:opacity-95"
                  style={{
                    backgroundColor: 'var(--accent)',
                    color: 'var(--bg)',
                    borderColor: 'var(--accent)'
                  }}
                >
                  <FileText className="w-4 h-4" />
                  <span>Verified Executive Summary</span>
                </button>
              </div>

              {/* Live Status Widget in Left Sidebar */}
              <div 
                className="p-4 rounded-xl border space-y-1.5 text-xs shadow-2xs" 
                style={{ backgroundColor: 'var(--surface-subtle)', borderColor: 'var(--rule)' }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold tracking-wider opacity-70" style={{ color: 'var(--ink-soft)' }}>
                    Live Total
                  </span>
                  <span className="text-[10px] font-mono opacity-60">PKR</span>
                </div>
                <div className="font-mono font-bold text-base tracking-tight" style={{ color: 'var(--good)' }}>
                  PKR {totalSpend.toLocaleString()}
                </div>
                <div className="text-[11px] opacity-75" style={{ color: 'var(--ink-secondary)' }}>
                  {totalItemsCount} items configured
                </div>
              </div>
            </div>

          </aside>

          {/* Right Section: Main Content Stream (9 cols) */}
          <main className="lg:col-span-9 space-y-3">
            {/* Header with scope and recipient allocation */}
            <Header 
              theme={theme} 
              onToggleTheme={toggleTheme} 
              onOpenSummary={() => setIsSummaryOpen(true)} 
            />

            {/* 1. Interactive Budget Calculator with Editable Unit Prices */}
            <BudgetCalculator 
              items={calculatorItems} 
              onItemsChange={setCalculatorItems} 
            />

            {/* 2. Vetted Vendors & Websites Directory (Text-driven, clean) */}
            <VendorsDirectory />

            {/* 3. Ordering Checklist */}
            <GeneralGuidance />

            {/* Footer */}
            <footer className="mt-10 pt-6 pb-8 rule-t text-xs flex flex-col sm:flex-row items-center justify-between gap-3 opacity-80" style={{ color: 'var(--ink-soft)' }}>
              <div>
                <span className="font-semibold" style={{ color: 'var(--ink)' }}>CSS Society</span> · Parallax 2026 Procurement Guide
              </div>
              <div className="text-center sm:text-right">
                Verified against active 2026 Pakistani commercial supplier catalogs.
              </div>
            </footer>
          </main>

        </div>
      </div>

      {/* Floating Scroll to Top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          type="button"
          aria-label="Scroll back to top"
          className="fixed bottom-6 right-6 p-3 rounded-full border shadow-lg transition-all cursor-pointer z-30 hover:scale-105"
          style={{
            backgroundColor: 'var(--surface)',
            borderColor: 'var(--rule)',
            color: 'var(--ink)'
          }}
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Verified Summary Modal */}
      <VerifiedSummaryModal
        isOpen={isSummaryOpen}
        onClose={() => setIsSummaryOpen(false)}
        items={calculatorItems}
      />
    </div>
  );
}
