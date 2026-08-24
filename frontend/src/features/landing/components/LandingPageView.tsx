'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Users,
  TrendingUp,
  ShieldCheck,
  Headphones,
  Search,
  X,
  Zap,
  LayoutGrid,
  Check,
  Star,
  Clock,
  Sparkles,
  BarChart3,
  PieChart,
  Layers,
  ChevronRight,
} from 'lucide-react';
import { ThemeToggle } from '@/features/auth/components/ThemeToggle';
import { AuthCard } from '@/features/auth/components/AuthCard';

export const LandingPageView: React.FC = () => {
  const router = useRouter();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    try {
      router.prefetch('/dashboard');
      router.prefetch('/proyek');
      router.prefetch('/jam-meeting');
      router.prefetch('/direktori');
      router.prefetch('/daftar');
    } catch (e) {
      // ignore
    }
  }, [router]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen w-full bg-[var(--color-bg-primary)] text-[var(--color-text-title)] transition-colors duration-300 font-sans relative overflow-x-hidden selection:bg-blue-500 selection:text-white">
      {/* -------------------------------------------------------------
          NAVIGATION BAR
         ------------------------------------------------------------- */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[var(--color-bg-primary)]/85 border-b border-[var(--color-card-border)] transition-colors">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
          {/* Logo */}
          <div
            onClick={scrollToTop}
            className="flex items-center gap-2.5 cursor-pointer group shrink-0"
          >
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-600/25 group-hover:scale-105 transition-transform duration-200">
              <Activity className="w-5 h-5 stroke-[2.5]" />
            </div>
            <span className="text-xl font-bold tracking-tight text-[var(--color-text-title)]">
              TeamPulse
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-xs sm:text-sm font-medium text-[var(--color-text-subtitle)]">
            <button
              type="button"
              onClick={() => scrollToSection('fitur')}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
            >
              Fitur
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('harga')}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
            >
              Harga
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('cara-kerja')}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
            >
              Cara Kerja
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('kontak')}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
            >
              Kontak
            </button>
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* Search Input Bar */}
            <div className="relative hidden lg:block w-44">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-subtitle)] pointer-events-none" />
              <input
                type="text"
                placeholder="Cari..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl bg-[var(--color-card-bg)] border border-[var(--color-card-border)] text-[var(--color-text-title)] placeholder-[var(--color-text-subtitle)] focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <ThemeToggle isFixed={false} />

            <button
              type="button"
              onClick={() => setIsAuthModalOpen(true)}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold text-[var(--color-text-title)] hover:text-blue-600 transition-all cursor-pointer"
            >
              Masuk
            </button>

            <button
              type="button"
              onClick={() => setIsAuthModalOpen(true)}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20 active:scale-95 transition-all cursor-pointer"
            >
              Mulai Gratis
            </button>
          </div>
        </div>
      </header>

      {/* -------------------------------------------------------------
          HERO SECTION
         ------------------------------------------------------------- */}
      <section className="relative max-w-[1280px] mx-auto px-4 sm:px-6 pt-10 sm:pt-16 pb-16 sm:pb-24 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Soft Background Glow */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

        {/* Left Content Column */}
        <div className="lg:col-span-6 space-y-6 relative z-10 text-left">
          {/* Tagline Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800/60 shadow-xs">
            <Zap className="w-3.5 h-3.5 fill-blue-600 dark:fill-blue-400 text-transparent" />
            <span>100% EFISIENSI TIM DIBANDINGKAN</span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-[var(--color-text-title)]">
            Pantau kinerja tim Anda dalam satu dasbor.
          </h1>

          {/* Hero Subtitle */}
          <p className="text-sm sm:text-base text-[var(--color-text-subtitle)] max-w-xl leading-relaxed">
            TeamPulse menggabungkan manajemen proyek, analisis beban kerja, dan direktori tim — sehingga Anda bisa fokus pada hasil, bukan administrasi.
          </p>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap pt-2">
            <button
              type="button"
              onClick={() => setIsAuthModalOpen(true)}
              className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/25 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Coba Gratis Sekarang</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => router.push('/dashboard')}
              className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold border border-[var(--color-card-border)] bg-[var(--color-card-bg)] text-[var(--color-text-title)] hover:bg-[var(--color-tab-container-bg)] transition-all shadow-xs cursor-pointer"
            >
              Lihat Demo Live
            </button>
          </div>

          {/* Guarantee Subtext */}
          <div className="pt-2 text-xs text-[var(--color-text-subtitle)] flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>Tanpa kartu kredit • 14 hari uji coba</span>
          </div>
        </div>

        {/* Right Content Column - Image & Floating Badge */}
        <div className="lg:col-span-6 relative z-10">
          <div className="relative w-full max-w-lg mx-auto">
            {/* Team Office Collaboration Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] aspect-4/3 sm:aspect-16/11 group">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="Tim berkolaborasi dalam kantor modern"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Metric Badge (+32% Produktivitas Tim) */}
            <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-xl flex items-center gap-3.5 animate-bounce-slow">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                <TrendingUp className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <div className="text-lg font-black text-slate-900 dark:text-white leading-tight">
                  +32%
                </div>
                <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                  Produktivitas Tim
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          STATISTICS / METRICS BAR SECTION
         ------------------------------------------------------------- */}
      <section className="border-y border-[var(--color-card-border)] bg-[var(--color-card-bg)]/50 py-8 transition-colors">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-[var(--color-card-border)]">
            <div className="py-2">
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 dark:text-blue-400 tracking-tight">
                500+
              </div>
              <div className="text-xs sm:text-sm font-medium text-[var(--color-text-subtitle)] mt-1">
                Tim Aktif
              </div>
            </div>
            <div className="py-2">
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 dark:text-blue-400 tracking-tight">
                12/bl
              </div>
              <div className="text-xs sm:text-sm font-medium text-[var(--color-text-subtitle)] mt-1">
                Laporan Otomatis
              </div>
            </div>
            <div className="py-2 pt-6 md:pt-2">
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 dark:text-blue-400 tracking-tight">
                98%
              </div>
              <div className="text-xs sm:text-sm font-medium text-[var(--color-text-subtitle)] mt-1">
                Kepuasan Pengguna
              </div>
            </div>
            <div className="py-2 pt-6 md:pt-2">
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 dark:text-blue-400 tracking-tight">
                4.9/5
              </div>
              <div className="text-xs sm:text-sm font-medium text-[var(--color-text-subtitle)] mt-1">
                Rating Pengguna
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          FEATURES SECTION ("Semua yang tim Anda butuhkan")
         ------------------------------------------------------------- */}
      <section id="fitur" className="py-20 sm:py-28 max-w-[1280px] mx-auto px-4 sm:px-6 scroll-mt-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
            Fitur Unggulan
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-text-title)] tracking-tight">
            Semua yang tim Anda butuhkan
          </h2>
          <p className="text-xs sm:text-sm text-[var(--color-text-subtitle)] leading-relaxed">
            Pengelola kerja yang dirancang untuk produktivitas modern, dari tim kecil hingga perusahaan berkembang.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1: Manajemen Proyek */}
          <div className="p-6 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] hover:border-blue-500/50 hover:shadow-xl transition-all duration-300 group space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/80 border border-blue-100 dark:border-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
              <LayoutGrid className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[var(--color-text-title)]">
              Manajemen Proyek
            </h3>
            <p className="text-xs sm:text-sm text-[var(--color-text-subtitle)] leading-relaxed">
              Pantau progres tugas secara aktual, tetapkan tenggat waktu, dan kelola alur kerja tim dengan mudah dalam satu papan terpadu.
            </p>
          </div>

          {/* Card 2: Alokasi Waktu */}
          <div className="p-6 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] hover:border-blue-500/50 hover:shadow-xl transition-all duration-300 group space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/80 border border-blue-100 dark:border-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[var(--color-text-title)]">
              Alokasi Waktu
            </h3>
            <p className="text-xs sm:text-sm text-[var(--color-text-subtitle)] leading-relaxed">
              Sinkronisasi otomatis dengan Google Calendar & Outlook. Lacak estimasi vs waktu aktual untuk manajemen beban kerja yang akurat.
            </p>
          </div>

          {/* Card 3: Direktori Tim */}
          <div className="p-6 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] hover:border-blue-500/50 hover:shadow-xl transition-all duration-300 group space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/80 border border-blue-100 dark:border-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[var(--color-text-title)]">
              Direktori Tim
            </h3>
            <p className="text-xs sm:text-sm text-[var(--color-text-subtitle)] leading-relaxed">
              Pusat informasi lengkap untuk tim Anda. Cari keahlian, peran, dan kontak anggota tim dalam hitungan detik.
            </p>
          </div>

          {/* Card 4: Insight & Laporan */}
          <div className="p-6 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] hover:border-blue-500/50 hover:shadow-xl transition-all duration-300 group space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/80 border border-blue-100 dark:border-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[var(--color-text-title)]">
              Insight & Laporan
            </h3>
            <p className="text-xs sm:text-sm text-[var(--color-text-subtitle)] leading-relaxed">
              Dapatkan analisis visual tentang produktivitas, alokasi jam kerja, dan tren pencapaian proyek secara otomatis.
            </p>
          </div>

          {/* Card 5: Aman & Terlindung */}
          <div className="p-6 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] hover:border-blue-500/50 hover:shadow-xl transition-all duration-300 group space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/80 border border-blue-100 dark:border-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[var(--color-text-title)]">
              Aman & Terlindung
            </h3>
            <p className="text-xs sm:text-sm text-[var(--color-text-subtitle)] leading-relaxed">
              Data Anda dilindungi dengan enkripsi tingkat tinggi, enkripsi penuh, kontrol akses berbasis peran, dan cadangan otomatis.
            </p>
          </div>

          {/* Card 6: Dukungan 24/7 */}
          <div className="p-6 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] hover:border-blue-500/50 hover:shadow-xl transition-all duration-300 group space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/80 border border-blue-100 dark:border-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
              <Headphones className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[var(--color-text-title)]">
              Dukungan 24/7
            </h3>
            <p className="text-xs sm:text-sm text-[var(--color-text-subtitle)] leading-relaxed">
              Tim bantuan kami selalu siap memberikan dukungan penuh kapan saja Anda membutuhkannya.
            </p>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          SPLIT VISUAL HIGHLIGHT SECTION ("Visibilitas penuh")
         ------------------------------------------------------------- */}
      <section className="py-20 sm:py-28 bg-[var(--color-card-bg)]/40 border-y border-[var(--color-card-border)] transition-colors">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Laptop Screen Illustration */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative mx-auto max-w-lg">
              {/* Laptop Body Mockup */}
              <div className="bg-slate-900 rounded-2xl p-3 shadow-2xl border border-slate-800 relative">
                {/* Laptop Display Header */}
                <div className="flex items-center gap-1.5 mb-2 px-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="text-[10px] text-slate-400 ml-2 font-mono">dashboard.teampulse.app</span>
                </div>
                
                {/* Mockup Dashboard Content Screen */}
                <div className="bg-slate-950 rounded-xl p-4 sm:p-5 text-white space-y-4 border border-slate-800">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div>
                      <div className="text-xs text-slate-400">Ringkasan Tim</div>
                      <div className="text-base font-bold">Laporan Beban Kerja</div>
                    </div>
                    <div className="px-2.5 py-1 rounded-lg bg-blue-600/20 text-blue-400 text-xs font-semibold border border-blue-500/30">
                      Real-time
                    </div>
                  </div>

                  {/* Charts & Graphs preview */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-slate-900/90 p-3 rounded-lg border border-slate-800">
                      <div className="text-[11px] text-slate-400 flex items-center justify-between">
                        <span>Meeting Time</span>
                        <Clock className="w-3 h-3 text-blue-400" />
                      </div>
                      <div className="text-lg font-bold mt-1 text-blue-400">14.2 jam</div>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                        <div className="bg-blue-500 h-full w-[65%]" />
                      </div>
                    </div>

                    <div className="bg-slate-900/90 p-3 rounded-lg border border-slate-800">
                      <div className="text-[11px] text-slate-400 flex items-center justify-between">
                        <span>Penyelesaian</span>
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      </div>
                      <div className="text-lg font-bold mt-1 text-emerald-400">92.4%</div>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                        <div className="bg-emerald-500 h-full w-[92%]" />
                      </div>
                    </div>
                  </div>

                  {/* Circular Pie representation */}
                  <div className="bg-slate-900/90 p-3.5 rounded-lg border border-slate-800 flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full border-4 border-blue-500 border-t-emerald-400 flex items-center justify-center font-bold text-xs">
                      84%
                    </div>
                    <div className="space-y-1 text-xs">
                      <div className="font-semibold text-slate-200">Efisiensi Alokasi Tim</div>
                      <div className="text-slate-400 text-[11px]">8 dari 10 proyek selesai tepat waktu minggu ini</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Laptop Stand Base */}
              <div className="w-[108%] -ml-[4%] h-3 bg-slate-800 rounded-b-xl shadow-md border-t border-slate-700" />
            </div>
          </div>

          {/* Right Text Description */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
              Informasi Terpusat
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-text-title)] tracking-tight leading-tight">
              Visibilitas penuh, keputusan lebih cepat
            </h2>

            <p className="text-xs sm:text-sm text-[var(--color-text-subtitle)] leading-relaxed">
              Saat semua data terhubung, Anda tidak perlu lagi meminta update status mingguan. Dasbor real-time memberikan kepastian yang Anda butuhkan.
            </p>

            <ul className="space-y-3 pt-1 text-xs sm:text-sm text-[var(--color-text-title)]">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-950 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Monitor kelancaran alur kerja tanpa me-manage mikro</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-950 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Ketahui proyek mana yang butuh perhatian segera</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-950 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Buat perkiraan kapasitas yang akurat berdasarkan data historis</span>
              </li>
            </ul>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => router.push('/dashboard')}
                className="px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20 active:scale-95 transition-all cursor-pointer"
              >
                Pelajari Fitur Lebih Lanjut
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          HOW IT WORKS SECTION ("Mulai dalam 3 langkah mudah")
         ------------------------------------------------------------- */}
      <section id="cara-kerja" className="py-20 sm:py-28 max-w-[1280px] mx-auto px-4 sm:px-6 scroll-mt-16">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
            Cara Kerja
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-text-title)] tracking-tight">
            Mulai dalam 3 langkah mudah
          </h2>
          <p className="text-xs sm:text-sm text-[var(--color-text-subtitle)]">
            Tidak perlu setup yang rumit. Mulai dalam hitungan menit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Step 01 */}
          <div className="p-8 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] relative space-y-4 hover:border-blue-500/50 transition-all shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 font-extrabold text-lg flex items-center justify-center border border-blue-100 dark:border-blue-900">
              01
            </div>
            <h3 className="text-lg font-bold text-[var(--color-text-title)]">
              Daftar & Buat Akun
            </h3>
            <p className="text-xs sm:text-sm text-[var(--color-text-subtitle)] leading-relaxed">
              Gunakan email tim Anda dan undang anggota tim hanya dalam beberapa klik.
            </p>
          </div>

          {/* Step 02 */}
          <div className="p-8 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] relative space-y-4 hover:border-blue-500/50 transition-all shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 font-extrabold text-lg flex items-center justify-center border border-blue-100 dark:border-blue-900">
              02
            </div>
            <h3 className="text-lg font-bold text-[var(--color-text-title)]">
              Hubungkan Google Calendar
            </h3>
            <p className="text-xs sm:text-sm text-[var(--color-text-subtitle)] leading-relaxed">
              Selesaikan sinkronisasi otomatis untuk melacak jadwal kerja dan jam rapat tim secara otomatis.
            </p>
          </div>

          {/* Step 03 */}
          <div className="p-8 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] relative space-y-4 hover:border-blue-500/50 transition-all shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 font-extrabold text-lg flex items-center justify-center border border-blue-100 dark:border-blue-900">
              03
            </div>
            <h3 className="text-lg font-bold text-[var(--color-text-title)]">
              Pantau & Optimalkan
            </h3>
            <p className="text-xs sm:text-sm text-[var(--color-text-subtitle)] leading-relaxed">
              Lihat visibilitas lengkap atas jam kerja, tugas, dan performa proyek seluruh tim.
            </p>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          TESTIMONIAL SECTION (Dark Banner)
         ------------------------------------------------------------- */}
      <section className="py-20 max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-[#0B0F19] text-white p-8 sm:p-14 relative overflow-hidden shadow-2xl border border-slate-800 text-center space-y-8">
          {/* Subtle Background Lighting */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
          
          {/* Big Quote Symbol Icon */}
          <div className="text-blue-500 text-5xl sm:text-6xl font-serif leading-none select-none opacity-80">
            “
          </div>

          {/* Testimonial Quote */}
          <p className="text-base sm:text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed text-slate-200">
            "Sejak menggunakan TeamPulse, kami berhasil mengurangi jam meeting yang tidak perlu sebesar 20% dan menyelesaikan proyek 2 minggu lebih cepat. Dasbor nya memberikan visibilitas yang sebelumnya tidak kami miliki."
          </p>

          {/* Author Details */}
          <div className="flex flex-col items-center justify-center space-y-2 pt-2">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
              alt="Sarah Wijaya"
              className="w-14 h-14 rounded-full object-cover border-2 border-blue-500 shadow-md"
            />
            <div className="font-bold text-sm sm:text-base text-white">Sarah Wijaya</div>
            <div className="text-xs text-blue-400 font-medium">VP of Engineering, TechCorp</div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          PRICING SECTION ("Pilih paket yang sesuai")
         ------------------------------------------------------------- */}
      <section id="harga" className="py-20 sm:py-28 max-w-[1280px] mx-auto px-4 sm:px-6 scroll-mt-16">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
            Harga
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-text-title)] tracking-tight">
            Pilih paket yang sesuai
          </h2>
          <p className="text-xs sm:text-sm text-[var(--color-text-subtitle)]">
            Mulai gratis, tingkatkan sesuai kebutuhan tim Anda. Tanpa biaya tersembunyi.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Card 1: Gratis */}
          <div className="rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] p-8 flex flex-col justify-between space-y-6 hover:shadow-lg transition-all">
            <div className="space-y-4">
              <div className="text-sm font-semibold text-[var(--color-text-subtitle)]">
                Gratis
              </div>
              <div className="text-xs text-[var(--color-text-subtitle)]">
                Untuk tim kecil yang baru mulai
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[var(--color-text-title)]">
                Gratis
              </div>

              <hr className="border-[var(--color-card-border)] my-4" />

              <ul className="space-y-3 text-xs sm:text-sm text-[var(--color-text-subtitle)]">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span>Hingga 5 anggota tim</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span>Manajemen tugas dasar</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span>Analisis jam kerja dasar</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span>Komunitas support</span>
                </li>
              </ul>
            </div>

            <button
              type="button"
              onClick={() => setIsAuthModalOpen(true)}
              className="w-full py-3 rounded-xl text-xs font-semibold border border-[var(--color-card-border)] bg-[var(--color-card-bg)] text-[var(--color-text-title)] hover:bg-[var(--color-tab-container-bg)] transition-all cursor-pointer"
            >
              Mulai Gratis
            </button>
          </div>

          {/* Card 2: Pro (Featured) */}
          <div className="rounded-2xl border-2 border-blue-600 bg-[var(--color-card-bg)] p-8 flex flex-col justify-between space-y-6 shadow-xl relative scale-105 z-10">
            {/* Featured Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[10px] font-extrabold tracking-wider bg-blue-600 text-white uppercase shadow-md">
              PALING POPULER
            </div>

            <div className="space-y-4">
              <div className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                Pro
              </div>
              <div className="text-xs text-[var(--color-text-subtitle)]">
                Untuk tim berkembang yang butuh efisiensi
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-[var(--color-text-title)]">
                  Rp 149rb
                </span>
                <span className="text-xs text-[var(--color-text-subtitle)]">/ bulan</span>
              </div>

              <hr className="border-[var(--color-card-border)] my-4" />

              <ul className="space-y-3 text-xs sm:text-sm text-[var(--color-text-title)]">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span>Anggota tim tanpa batas</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span>Papan Kanban & Gantt</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span>Analisis beban kerja mendalam</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span>Laporan kustomisasi</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span>Hari libur otomatis</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span>Support prioritas 24/7</span>
                </li>
              </ul>
            </div>

            <button
              type="button"
              onClick={() => setIsAuthModalOpen(true)}
              className="w-full py-3 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/25 active:scale-95 transition-all cursor-pointer"
            >
              Coba 14 Hari Gratis
            </button>
          </div>

          {/* Card 3: Kustom */}
          <div className="rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] p-8 flex flex-col justify-between space-y-6 hover:shadow-lg transition-all">
            <div className="space-y-4">
              <div className="text-sm font-semibold text-[var(--color-text-subtitle)]">
                Kustom
              </div>
              <div className="text-xs text-[var(--color-text-subtitle)]">
                Untuk perusahaan besar
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[var(--color-text-title)]">
                Kustom
              </div>

              <hr className="border-[var(--color-card-border)] my-4" />

              <ul className="space-y-3 text-xs sm:text-sm text-[var(--color-text-subtitle)]">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span>Pengaturan peran kustom</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span>Keamanan & SSO enterprise</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span>SLA & uptime terjamin</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span>Dedicated Account Manager</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span>Training khusus</span>
                </li>
              </ul>
            </div>

            <button
              type="button"
              onClick={() => setIsAuthModalOpen(true)}
              className="w-full py-3 rounded-xl text-xs font-semibold border border-[var(--color-card-border)] bg-[var(--color-card-bg)] text-[var(--color-text-title)] hover:bg-[var(--color-tab-container-bg)] transition-all cursor-pointer"
            >
              Hubungi Kami
            </button>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          BOTTOM CALL TO ACTION BANNER
         ------------------------------------------------------------- */}
      <section className="py-16 sm:py-24 max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="rounded-3xl border border-[var(--color-card-border)] bg-gradient-to-tr from-blue-900/10 via-[var(--color-card-bg)] to-indigo-900/10 p-10 sm:p-16 text-center space-y-6 shadow-xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-text-title)] tracking-tight">
              Siap mengoptimalkan tim Anda?
            </h2>
            <p className="text-xs sm:text-sm text-[var(--color-text-subtitle)] leading-relaxed">
              Bergabung dengan ratusan tim pengelola memenangi tantangan produktivitas bersama TeamPulse.
            </p>
          </div>

          <div className="flex items-center justify-center gap-4 flex-wrap pt-2">
            <button
              type="button"
              onClick={() => setIsAuthModalOpen(true)}
              className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/25 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Mulai Gratis Sekarang</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => router.push('/dashboard')}
              className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold border border-[var(--color-card-border)] bg-[var(--color-card-bg)] text-[var(--color-text-title)] hover:bg-[var(--color-tab-container-bg)] transition-all shadow-xs cursor-pointer"
            >
              Konsultasi Tim Produk
            </button>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          FOOTER SECTION
         ------------------------------------------------------------- */}
      <footer id="kontak" className="bg-[#070A10] text-slate-400 border-t border-slate-800/80 transition-colors pt-16 pb-12">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
            {/* Col 1 & 2: Brand Info */}
            <div className="md:col-span-2 space-y-4">
              <div
                onClick={scrollToTop}
                className="flex items-center gap-2.5 cursor-pointer group"
              >
                <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md">
                  <Activity className="w-4 h-4 stroke-[2.5]" />
                </div>
                <span className="text-lg font-extrabold tracking-tight text-white">
                  TeamPulse
                </span>
              </div>
              <p className="text-xs leading-relaxed max-w-sm text-slate-400">
                Platform manajemen kinerja dan jam kerja tim terbaik untuk tim modern. Tingkatkan produktivitas tanpa mengorbankan keseimbangan kerja.
              </p>
            </div>

            {/* Col 3: Produk */}
            <div className="space-y-3">
              <div className="text-xs font-bold text-white uppercase tracking-wider">Produk</div>
              <ul className="space-y-2 text-xs">
                <li>
                  <button type="button" onClick={() => scrollToSection('fitur')} className="hover:text-white transition-colors cursor-pointer">
                    Fitur
                  </button>
                </li>
                <li>
                  <button type="button" onClick={() => scrollToSection('harga')} className="hover:text-white transition-colors cursor-pointer">
                    Harga
                  </button>
                </li>
                <li>
                  <button type="button" onClick={() => router.push('/dashboard')} className="hover:text-white transition-colors cursor-pointer">
                    Integrasi
                  </button>
                </li>
                <li>
                  <button type="button" onClick={() => router.push('/dashboard')} className="hover:text-white transition-colors cursor-pointer">
                    Pembaruan
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 4: Perusahaan */}
            <div className="space-y-3">
              <div className="text-xs font-bold text-white uppercase tracking-wider">Perusahaan</div>
              <ul className="space-y-2 text-xs">
                <li><a href="#" className="hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Karir</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><button type="button" onClick={() => scrollToSection('kontak')} className="hover:text-white transition-colors cursor-pointer">Kontak</button></li>
              </ul>
            </div>

            {/* Col 5: Bantuan */}
            <div className="space-y-3">
              <div className="text-xs font-bold text-white uppercase tracking-wider">Bantuan</div>
              <ul className="space-y-2 text-xs">
                <li><a href="#" className="hover:text-white transition-colors">Dokumentasi</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pusat Bantuan</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status System</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privasi</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div>© 2026 TeamPulse. Hak Cipta Dilindungi.</div>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-slate-300 transition-colors">Syarat & Ketentuan</a>
              <a href="#" className="hover:text-slate-300 transition-colors">Kebijakan Privasi</a>
              <a href="#" className="hover:text-slate-300 transition-colors">Keamanan</a>
            </div>
          </div>
        </div>
      </footer>

      {/* -------------------------------------------------------------
          AUTH LOGIN / REGISTER MODAL POPUP
         ------------------------------------------------------------- */}
      {isAuthModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
          <div className="w-full max-w-md relative">
            <button
              type="button"
              onClick={() => setIsAuthModalOpen(false)}
              className="absolute -top-3 -right-3 z-50 p-2 rounded-full bg-slate-800 text-white hover:bg-slate-700 shadow-xl border border-slate-700 transition-transform active:scale-90 cursor-pointer"
              aria-label="Tutup modal"
            >
              <X className="w-4 h-4" />
            </button>
            <AuthCard />
          </div>
        </div>
      )}
    </div>
  );
};
