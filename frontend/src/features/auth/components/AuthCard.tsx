'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Mail, Lock, Info, ArrowRight, Activity, Pencil, Eye, EyeOff, AlertCircle, Loader2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface AuthCardProps {
  initialTab?: 'login' | 'register';
}

export const AuthCard: React.FC<AuthCardProps> = ({ initialTab = 'login' }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { signInWithEmail, signUpWithEmail, signInWithGoogle, user } = useAuth();

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
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  // If user is already logged in, redirect to dashboard
  useEffect(() => {
    if (user) {
      router.push('/dashboard');
    }
  }, [user, router]);

  useEffect(() => {
    if (pathname?.includes('/daftar') || pathname?.includes('/register')) {
      setActiveTab('register');
    } else if (pathname === '/' || pathname?.includes('/masuk')) {
      setActiveTab('login');
    }
    setErrorMsg(null);
    setSuccessMsg(null);
  }, [pathname]);

  const handleTabChange = (tab: 'login' | 'register') => {
    setActiveTab(tab);
    setErrorMsg(null);
    setSuccessMsg(null);
    if (pathname === '/daftar' || pathname === '/register') {
      if (tab === 'login') router.push('/');
    } else if (pathname === '/') {
      if (tab === 'register') router.push('/daftar');
    }
  };

  const getFirebaseErrorMessage = (error: any): string => {
    const code = error?.code || '';
    let msg = 'Terjadi kesalahan saat autentikasi.';
    switch (code) {
      case 'auth/invalid-email':
        msg = 'Format email tidak valid.';
        break;
      case 'auth/user-not-found':
      case 'auth/wrong-password':
      case 'auth/invalid-credential':
        msg = 'Email atau password yang Anda masukkan salah. Jika belum punya akun, silakan klik tab Daftar.';
        break;
      case 'auth/email-already-in-use':
        msg = 'Email sudah terdaftar. Silakan pilih tab Masuk.';
        break;
      case 'auth/weak-password':
        msg = 'Password terlalu lemah. Gunakan minimal 6 karakter.';
        break;
      case 'auth/operation-not-allowed':
        msg = 'Metode autentikasi ini belum diaktifkan di Firebase Console. Buka tab "Sign-in method" dan klik Enable.';
        break;
      case 'auth/popup-closed-by-user':
        msg = 'Jendela autentikasi Google ditutup sebelum selesai.';
        break;
      case 'auth/too-many-requests':
        msg = 'Terlalu banyak percobaan gagal. Silakan coba lagi nanti.';
        break;
      default:
        msg = error?.message || 'Terjadi kesalahan saat autentikasi. Silakan coba lagi.';
        break;
    }
    return code ? `${msg} (${code})` : msg;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);
    setSubmitting(true);

    try {
      if (activeTab === 'login') {
        await signInWithEmail(email, password);
        setSuccessMsg('Berhasil masuk! Mengalihkan ke dashboard...');
      } else {
        await signUpWithEmail(email, password, fullName);
        setSuccessMsg('Pendaftaran akun berhasil! Mengalihkan ke dashboard...');
      }
      setTimeout(() => {
        router.push('/dashboard');
      }, 500);
    } catch (err: any) {
      console.error('Auth error:', err);
      setErrorMsg(getFirebaseErrorMessage(err));
    } finally {
      setSubmitting(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setErrorMsg(null);
    setSuccessMsg(null);
    setSubmitting(true);
    try {
      await signInWithGoogle();
      setSuccessMsg('Berhasil masuk dengan Google! Mengalihkan...');
      setTimeout(() => {
        router.push('/dashboard');
      }, 500);
    } catch (err: any) {
      console.error('Google Auth error:', err);
      setErrorMsg(getFirebaseErrorMessage(err));
    } finally {
      setSubmitting(false);
    }
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

        {/* Error Alert */}
        {errorMsg && (
          <div className="mb-6 p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-medium flex items-center gap-2 animate-fade-in">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Success Alert */}
        {successMsg && (
          <div className="mb-6 p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium flex items-center gap-2 animate-fade-in">
            <Info className="w-4 h-4 shrink-0" />
            <span>{successMsg}</span>
          </div>
        )}

        {/* Authentication Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name Input (Register Only) */}
          {activeTab === 'register' && (
            <div>
              <label className="block text-xs font-semibold text-[var(--color-text-label)] mb-1.5">
                Nama Lengkap <span className="text-[var(--color-asterisk)]">*</span>
              </label>
              <div className="relative flex items-center">
                <Pencil className="absolute left-3.5 w-4 h-4 text-[var(--color-input-icon)] pointer-events-none" />
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Nama Anda"
                  required={activeTab === 'register'}
                  className="w-full pl-10 pr-10 py-2.5 text-sm rounded-xl border border-[var(--color-input-border)] bg-[var(--color-input-bg)] text-[var(--color-input-text)] placeholder-[var(--color-input-placeholder)] focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all"
                />
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
                placeholder="••••••••"
                required
                minLength={6}
                className="w-full pl-10 pr-10 py-2.5 text-sm rounded-xl border border-[var(--color-input-border)] bg-[var(--color-input-bg)] text-[var(--color-input-text)] placeholder-[var(--color-input-placeholder)] focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all"
              />
              <div className="absolute right-3.5 flex items-center gap-1.5 text-[var(--color-input-icon)]">
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="hover:text-[var(--color-text-title)] transition-colors"
                  title={showPassword ? 'Sembunyikan password' : 'Tampilkan password'}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Primary Action Button */}
          <button
            type="submit"
            disabled={submitting}
            className="w-full mt-2 py-3 px-4 rounded-xl bg-[#2563EB] hover:bg-blue-700 disabled:opacity-50 text-white font-semibold text-sm shadow-md shadow-blue-500/20 active:scale-[0.99] transition-all flex items-center justify-center gap-2 group cursor-pointer"
          >
            {submitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Memproses...</span>
              </>
            ) : (
              <>
                <span>{activeTab === 'login' ? 'Masuk' : 'Daftar Sekarang'}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[var(--color-card-border)]" />
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="bg-[var(--color-card-bg)] px-3 text-[var(--color-text-subtitle)]">
              atau lanjut dengan
            </span>
          </div>
        </div>

        {/* Google OAuth Button */}
        <button
          type="button"
          onClick={handleGoogleSignIn}
          disabled={submitting}
          className="w-full py-2.5 px-4 rounded-xl border border-[var(--color-card-border)] bg-[var(--color-tab-container-bg)] hover:bg-[var(--color-tab-active-bg)] text-[var(--color-text-title)] font-medium text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
        >
          <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            />
          </svg>
          <span>Google</span>
        </button>

        {/* Tab Toggle Secondary Link */}
        <div className="mt-8 text-center text-xs font-medium text-[var(--color-disclaimer-text)]">
          {activeTab === 'login' ? (
            <>
              Belum punya akun?{' '}
              <button
                type="button"
                onClick={() => handleTabChange('register')}
                className="font-bold text-[#2563EB] hover:underline ml-1 cursor-pointer"
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
                className="font-bold text-[#2563EB] hover:underline ml-1 cursor-pointer"
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
