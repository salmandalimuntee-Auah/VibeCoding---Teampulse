'use client';

import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  isFixed?: boolean;
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  isFixed = true,
  className = '',
}) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    // Check initial dataset or default to dark
    const currentTheme =
      (document.documentElement.getAttribute('data-theme') as 'light' | 'dark') ||
      'dark';
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

  const positioningClass = isFixed ? 'fixed top-6 right-6 z-50' : 'relative z-10';

  return (
    <div
      className={`${positioningClass} flex items-center gap-1 p-1 rounded-xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] shadow-sm transition-all ${className}`}
    >
      <button
        type="button"
        onClick={() => toggleTheme('light')}
        className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
          theme === 'light'
            ? 'bg-[#2563EB] text-white shadow-xs'
            : 'text-[var(--color-text-subtitle)] hover:text-[var(--color-text-title)]'
        }`}
        title="Switch to Light Mode"
      >
        <Sun className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Light</span>
      </button>

      <button
        type="button"
        onClick={() => toggleTheme('dark')}
        className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
          theme === 'dark'
            ? 'bg-[#2563EB] text-white shadow-xs'
            : 'text-[var(--color-text-subtitle)] hover:text-[var(--color-text-title)]'
        }`}
        title="Switch to Dark Mode"
      >
        <Moon className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Dark</span>
      </button>
    </div>
  );
};

