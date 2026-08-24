'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Mail, Lock, Info, ArrowRight, Activity, Pencil, Eye, EyeOff } from 'lucide-react';

interface AuthCardProps {
  initialTab?: 'login' | 'register';
}

export const AuthCard: React.FC<AuthCardProps> = ({ initialTab = 'login' }) => {
  const router = useRouter();
  const pathname = usePathname();

  // Determine active tab based on prop or current path
  const [activeTab, setActiveTab] = useState<'login' | 'register'>(() => {
    if (pathname?.includes('/daftar') || pathname?.includes('/register')) {
      return 'register';
    }
    return initialTab;
  });

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (pathname?.includes('/daftar') || pathname?.includes('/register')) {
      setActiveTab('register');
    } else if (pathname === '/' || pathname?.includes('/masuk')) {
      setActiveTab('login');
    }
  }, [pathname]);

  const handleTabChange = (tab: 'login' | 'register') => {
    setActiveTab(tab);
    if (pathname === '/daftar' || pathname === '/register') {
      if (tab === 'login') router.push('/');
    } else if (pathname === '/') {
      if (tab === 'register') router.push('/daftar');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      localStorage.setItem(
        'teampulse_user',
        JSON.stringify({
          name: fullName || 'fanalpotocopy01',
          email: email || 'user@perusahaan.id',
          role: 'Anggota Tim',
          loggedInAt: new Date().toISOString(),
        })
      );
    } catch (err) {
      // ignore
    }

    setTimeout(() => {
      router.push('/dashboard');
    }, 600);
  };

  return (
    <div className="w-full max-w-[460px] mx-auto flex flex-col items-center">
      {/* Header Logo & App Title */}
      <div className="flex flex-col items-center mb-8 text-center">
        {/* Pulse Logo Badge */}
        <div className="w-11 h-11 rounded-xl bg-[#2563EB] flex items-center justify-center text-white shadow-lg shadow-blue-500/20 mb-3 transition-transform hover:scale-105">
          <Activity className="w-5 h-5 stroke-[2.5]" />
        </div>

        {/* App Title */}
        <h1 className="text-2xl font-bold tracking-tight text-[var(--color-text-title)] mb-1">
          TeamPulse
        </h1>

        {/* Tagline */}
        <p className="text-sm font-medium text-[var(--color-text-subtitle)]">
          Dashboard Kinerja Tim
        </p>
      </div>

      {/* Main Authentication Card */}
      <div className="w-full rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] p-6 sm:p-8 shadow-xl transition-all duration-300">
        {/* Segmented Control (Masuk / Daftar) */}
        <div className="grid grid-cols-2 p-1 mb-8 rounded-xl bg-[var(--color-tab-container-bg)] transition-colors">
          <button
            type="button"
            onClick={() => handleTabChange('login')}
            className={`py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 ${
              activeTab === 'login'
                ? 'bg-[var(--color-tab-active-bg)] text-[var(--color-tab-active-text)] shadow-sm font-bold'
                : 'text-[var(--color-tab-inactive-text)] hover:text-[var(--color-tab-active-text)]'
            }`}
          >
            Masuk
          </button>
          <button
            type="button"
            onClick={() => handleTabChange('register')}
            className={`py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 ${
              activeTab === 'register'
                ? 'bg-[var(--color-tab-active-bg)] text-[var(--color-tab-active-text)] shadow-sm font-bold'
                : 'text-[var(--color-tab-inactive-text)] hover:text-[var(--color-tab-active-text)]'
            }`}
          >
            Daftar
          </button>
        </div>

        {/* Card Header Content */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-[var(--color-text-title)] mb-1.5">
            {activeTab === 'login' ? 'Selamat datang kembali' : 'Buat akun baru'}
          </h2>
          <p className="text-sm text-[var(--color-text-subtitle)] leading-relaxed">
            {activeTab === 'login'
              ? 'Masuk untuk melihat dashboard kinerja tim Anda.'
              : 'Daftar untuk mulai memantau kinerja tim.'}
          </p>
        </div>

        {/* Feedback Alert */}
        {submitted && (
          <div className="mb-6 p-3.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-500 text-xs font-medium flex items-center gap-2 animate-fade-in">
            <Info className="w-4 h-4 shrink-0" />
            <span>
              {activeTab === 'login'
                ? 'Permintaan masuk berhasil dikirim.'
                : 'Pendaftaran akun berhasil dikirim.'}
            </span>
          </div>
        )}

        {/* Authentication Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name Input (Register Only) */}
          {activeTab === 'register' && (
            <div>
              <label className="block text-xs font-semibold text-[var(--color-text-label)] mb-1.5">
                Full Name <span className="text-[var(--color-asterisk)]">*</span>
              </label>
              <div className="relative flex items-center">
                <Pencil className="absolute left-3.5 w-4 h-4 text-[var(--color-input-icon)] pointer-events-none" />
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Dick Grayson"
                  required={activeTab === 'register'}
                  className="w-full pl-10 pr-10 py-2.5 text-sm rounded-xl border border-[var(--color-input-border)] bg-[var(--color-input-bg)] text-[var(--color-input-text)] placeholder-[var(--color-input-placeholder)] focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all"
                />
                <Info className="absolute right-3.5 w-4 h-4 text-[var(--color-input-icon)] cursor-help" />
              </div>
            </div>
          )}

          {/* Email Input */}
          <div>
            <label className="block text-xs font-semibold text-[var(--color-text-label)] mb-1.5">
              Email <span className="text-[var(--color-asterisk)]">*</span>
            </label>
            <div className="relative flex items-center">
              <Mail className="absolute left-3.5 w-4 h-4 text-[var(--color-input-icon)] pointer-events-none" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="anda@perusahaan.id"
                required
                className="w-full pl-10 pr-10 py-2.5 text-sm rounded-xl border border-[var(--color-input-border)] bg-[var(--color-input-bg)] text-[var(--color-input-text)] placeholder-[var(--color-input-placeholder)] focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all"
              />
              <Info className="absolute right-3.5 w-4 h-4 text-[var(--color-input-icon)] cursor-help" />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-xs font-semibold text-[var(--color-text-label)] mb-1.5">
              Password <span className="text-[var(--color-asterisk)]">*</span>
            </label>
            <div className="relative flex items-center">
              <Lock className="absolute left-3.5 w-4 h-4 text-[var(--color-input-icon)] pointer-events-none" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="........"
                required
                className="w-full pl-10 pr-10 py-2.5 text-sm rounded-xl border border-[var(--color-input-border)] bg-[var(--color-input-bg)] text-[var(--color-input-text)] placeholder-[var(--color-input-placeholder)] focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all"
              />
              <div className="absolute right-3.5 flex items-center gap-1.5 text-[var(--color-input-icon)]">
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="hover:text-[var(--color-text-title)] transition-colors"
                  title={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
                <Info className="w-4 h-4 cursor-help" />
              </div>
            </div>
          </div>

          {/* Action Button */}
          <button
            type="submit"
            className="w-full mt-2 py-3 px-4 rounded-xl bg-[#2563EB] hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-500/20 active:scale-[0.99] transition-all flex items-center justify-center gap-2 group"
          >
            <span>{activeTab === 'login' ? 'Masuk' : 'Daftar Sekarang'}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </form>

        {/* Tab Toggle Secondary Link */}
        <div className="mt-8 text-center text-xs font-medium text-[var(--color-disclaimer-text)]">
          {activeTab === 'login' ? (
            <>
              Belum punya akun?{' '}
              <button
                type="button"
                onClick={() => handleTabChange('register')}
                className="font-bold text-[#2563EB] hover:underline ml-1"
              >
                Daftar di sini
              </button>
            </>
          ) : (
            <>
              Sudah punya akun?{' '}
              <button
                type="button"
                onClick={() => handleTabChange('login')}
                className="font-bold text-[#2563EB] hover:underline ml-1"
              >
                Masuk di sini
              </button>
            </>
          )}
        </div>
      </div>

      {/* Card Footer Legal Disclaimer */}
      <p className="mt-6 text-center text-xs leading-relaxed text-[var(--color-disclaimer-text)] max-w-sm">
        Dengan masuk, Anda menyetujui Ketentuan Layanan dan Kebijakan Privasi TeamPulse.
      </p>
    </div>
  );
};

