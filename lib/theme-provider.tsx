'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isThemeLocked: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const isBeforeJan2026 = () => {
  const targetDate = new Date('2026-02-01T00:00:00');
  return new Date() < targetDate;
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (isBeforeJan2026()) return 'dark';
    
    if (typeof window === 'undefined') return 'light';
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme) {
      return savedTheme;
    }
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    if (!isBeforeJan2026()) {
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    if (isBeforeJan2026()) return;
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const isThemeLocked = isBeforeJan2026();

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isThemeLocked }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
