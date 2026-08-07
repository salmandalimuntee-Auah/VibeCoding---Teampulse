'use client';

import React, { useState } from 'react';
import { Mail, Lock, Info, ArrowRight, Activity, Eye, EyeOff } from 'lucide-react';

export const AuthCard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="w-full max-w-[460px] mx-auto flex flex-col items-center">
      {/* Header Logo & App Title */}
      <div className="flex flex-col items-center mb-8 text-center">
        {/* Pulse Logo Badge */}
        <div className="w-12 h-12 rounded-xl bg-[#2563EB] flex items-center justify-center text-white shadow-lg shadow-blue-500/20 mb-4 transition-transform hover:scale-105">
          <Activity className="w-6 h-6 stroke-[2.5]" />
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
            onClick={() => setActiveTab('login')}
            className={`py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 ${
              activeTab === 'login'
                ? 'bg-[var(--color-tab-active-bg)] text-[var(--color-tab-active-text)] shadow-sm'
                : 'text-[var(--color-tab-inactive-text)] hover:text-[var(--color-tab-active-text)]'
            }`}
          >
            Masuk
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('register')}
            className={`py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 ${
              activeTab === 'register'
                ? 'bg-[var(--color-tab-active-bg)] text-[var(--color-tab-active-text)] shadow-sm'
                : 'text-[var(--color-tab-inactive-text)] hover:text-[var(--color-tab-active-text)]'
            }`}
          >
            Daftar
          </button>
        </div>

        {/* Card Header Content */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-[var(--color-text-title)] mb-1.5">
            {activeTab === 'login' ? 'Selamat datang kembali' : 'Buat Akun TeamPulse'}
          </h2>
          <p className="text-sm text-[var(--color-text-subtitle)] leading-relaxed">
            {activeTab === 'login'
              ? 'Masuk untuk melihat dashboard tim Anda.'
              : 'Daftar untuk mulai mengelola kinerja tim Anda.'}
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
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 text-[var(--color-input-icon)] hover:text-[var(--color-text-title)] transition-colors"
                title={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Info className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Action Button */}
          <button
            type="submit"
            className="w-full mt-2 py-3 px-4 rounded-xl bg-[var(--color-button-primary-bg)] hover:bg-[var(--color-button-primary-hover)] text-[var(--color-button-primary-text)] font-semibold text-sm shadow-md shadow-blue-500/20 active:scale-[0.99] transition-all flex items-center justify-center gap-2 group"
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
                onClick={() => setActiveTab('register')}
                className="font-bold text-[var(--color-link-text)] hover:underline ml-1"
              >
                Daftar di sini
              </button>
            </>
          ) : (
            <>
              Sudah punya akun?{' '}
              <button
                type="button"
                onClick={() => setActiveTab('login')}
                className="font-bold text-[var(--color-link-text)] hover:underline ml-1"
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
