'use client';

import React from 'react';
import { AuthCard } from '@/features/auth/components/AuthCard';
import { ThemeToggle } from '@/features/auth/components/ThemeToggle';

export default function DaftarPage() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center p-4 sm:p-6 bg-[var(--color-bg-primary)] transition-colors duration-300 relative overflow-hidden">
      {/* Background Decorative Glow Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-600/10 blur-[120px] pointer-events-none" />

      {/* Theme Toggle Button */}
      <ThemeToggle />

      {/* Auth Card Container (Daftar Mode) */}
      <div className="w-full relative z-10 py-8">
        <AuthCard initialTab="register" />
      </div>
    </main>
  );
}
