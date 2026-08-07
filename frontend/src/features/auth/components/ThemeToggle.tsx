'use client';

import React, { useState, useEffect } from 'react';
import { Sun, Moon, Sparkles } from 'lucide-react';

export const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    // Check initial dataset or default to dark
    const currentTheme = document.documentElement.getAttribute('data-theme') as 'light' | 'dark' || 'dark';
    setTheme(currentTheme);
  }, []);

  const toggleTheme = (newTheme: 'light' | 'dark') => {
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-1.5 p-1.5 rounded-full border border-[var(--color-card-border)] bg-[var(--color-card-bg)] shadow-md backdrop-blur-md transition-all">
      <button
        type="button"
        onClick={() => toggleTheme('light')}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
          theme === 'light'
            ? 'bg-[var(--color-button-primary-bg)] text-white shadow-sm'
            : 'text-[var(--color-text-subtitle)] hover:text-[var(--color-text-title)]'
        }`}
        title="Switch to Light Mode"
      >
        <Sun className="w-3.5 h-3.5" />
        <span>Light</span>
      </button>

      <button
        type="button"
        onClick={() => toggleTheme('dark')}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
          theme === 'dark'
            ? 'bg-[var(--color-button-primary-bg)] text-white shadow-sm'
            : 'text-[var(--color-text-subtitle)] hover:text-[var(--color-text-title)]'
        }`}
        title="Switch to Dark Mode"
      >
        <Moon className="w-3.5 h-3.5" />
        <span>Dark</span>
      </button>
    </div>
  );
};
