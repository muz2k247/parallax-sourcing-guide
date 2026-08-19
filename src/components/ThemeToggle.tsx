import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  theme: 'dark' | 'light';
  onToggle: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, onToggle }) => {
  return (
    <button
      id="theme-toggle-btn"
      type="button"
      onClick={onToggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="btn-toggle inline-flex items-center gap-1.5"
    >
      {theme === 'dark' ? (
        <>
          <Sun className="w-3.5 h-3.5" />
          <span>LIGHT THEME</span>
        </>
      ) : (
        <>
          <Moon className="w-3.5 h-3.5" />
          <span>DARK THEME</span>
        </>
      )}
    </button>
  );
};

