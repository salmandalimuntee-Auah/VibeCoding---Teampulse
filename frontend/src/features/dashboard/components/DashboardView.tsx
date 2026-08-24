'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  FileText,
  Users,
  Clock,
  AlertTriangle,
  RotateCw,
  TrendingUp,
  ArrowRight,
  Briefcase,
  Layers,
  Calendar,
  CheckCircle2,
  ChevronRight,
  X,
} from 'lucide-react';
import { ThemeToggle } from '@/features/auth/components/ThemeToggle';

const getEmployeeIdByName = (name: string): string => {
  const map: Record<string, string> = {
    'Sarah Connor': 'emp-1',
    'Clark Kent': 'emp-2',
    'Barry Allen': 'emp-3',
    'Dick Grayson': 'emp-4',
    'Wade Wilson': 'emp-5',
    'Hal Jordan': 'emp-6',
    'Bruce Wayne': 'emp-7',
    'Arthur Curry': 'emp-8',
    'Ray Palmer': 'emp-9',
    'Victor Stone': 'emp-10',
    'Oliver Queen': 'emp-11',
    'Diana Prince': 'emp-12',
  };
  return map[name] || 'emp-1';
};

export const DashboardView: React.FC = () => {
  const router = useRouter();
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    try {
      router.prefetch('/proyek');
      router.prefetch('/direktori');
      router.prefetch('/jam-meeting');
    } catch (e) {
      // ignore
    }
  }, [router]);

  const [selectedMeetingModal, setSelectedMeetingModal] = useState<{
    title: string;
    date: string;
    durationHours?: number;
    category: string;
    agenda: string;
    attendees: { name: string; initials: string; color: string }[];
  } | null>(null);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 800);
  };

  return (
    <div className="flex-1 p-6 md:p-8 space-y-6 overflow-y-auto max-w-[1600px] mx-auto">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-[var(--color-text-title)]">
            Ringkasan
          </h1>
          <p className="text-xs font-medium text-[var(--color-text-subtitle)] mt-1">
            Pantau kinerja tim, proyek, dan beban meeting perusahaan.
          </p>
        </div>

        <div className="flex items-center gap-3 self-end sm:self-auto">
          <ThemeToggle isFixed={false} />
          <button
            type="button"
            onClick={handleRefresh}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold border border-[var(--color-card-border)] bg-[var(--color-card-bg)] text-[var(--color-text-title)] hover:bg-[var(--color-tab-container-bg)] transition-all shadow-sm active:scale-95"
          >
            <RotateCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
            <span>Segarkan</span>
          </button>
        </div>
      </div>

      {/* Top 4 KPI Metric Cards (Interactive) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Proyek Aktif */}
        <div
          onClick={() => router.push('/proyek')}
          className="p-5 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] shadow-sm hover:shadow-md hover:border-blue-500/50 transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
              <FileText className="w-4 h-4" />
            </div>
            <span className="text-[11px] font-semibold text-emerald-500 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> +2 bulan ini
            </span>
          </div>
          <p className="text-[10px] font-semibold tracking-wider text-[var(--color-text-subtitle)] uppercase">
            PROYEK AKTIF
          </p>
          <div className="flex items-baseline justify-between mt-1">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-[var(--color-text-title)] group-hover:text-blue-500 transition-colors">6</span>
              <span className="text-xs font-medium text-[var(--color-text-subtitle)]">1 selesai</span>
            </div>
            <ChevronRight className="w-4 h-4 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>

        {/* Card 2: Karyawan Aktif */}
        <div
          onClick={() => router.push('/direktori')}
          className="p-5 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] shadow-sm hover:shadow-md hover:border-indigo-500/50 transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-8 h-8 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <p className="text-[10px] font-semibold tracking-wider text-[var(--color-text-subtitle)] uppercase">
            KARYAWAN AKTIF
          </p>
          <div className="flex items-baseline justify-between mt-1">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-[var(--color-text-title)] group-hover:text-indigo-500 transition-colors">12</span>
              <span className="text-xs font-medium text-[var(--color-text-subtitle)]">dari 12 total</span>
            </div>
            <ChevronRight className="w-4 h-4 text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>

        {/* Card 3: Jam Meeting */}
        <div
          onClick={() => router.push('/jam-meeting')}
          className="p-5 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] shadow-sm hover:shadow-md hover:border-amber-500/50 transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Clock className="w-4 h-4" />
            </div>
            <span className="text-[11px] font-semibold text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded-full">
              Di bawah ambang
            </span>
          </div>
          <p className="text-[10px] font-semibold tracking-wider text-[var(--color-text-subtitle)] uppercase">
            JAM MEETING (4 MINGGU)
          </p>
          <div className="flex items-baseline justify-between mt-1">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-[var(--color-text-title)] group-hover:text-amber-500 transition-colors">14.5j</span>
              <span className="text-xs font-medium text-[var(--color-text-subtitle)]">3.6j/mgg rata-rata</span>
            </div>
            <ChevronRight className="w-4 h-4 text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>

        {/* Card 4: Proyek Berisiko */}
        <div
          onClick={() => router.push('/proyek')}
          className="p-5 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] shadow-sm hover:shadow-md hover:border-red-500/50 transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-8 h-8 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center group-hover:scale-110 transition-transform">
              <AlertTriangle className="w-4 h-4" />
            </div>
            <span className="text-[11px] font-semibold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">
              Tindakan diperlukan
            </span>
          </div>
          <p className="text-[10px] font-semibold tracking-wider text-[var(--color-text-subtitle)] uppercase">
            PROYEK BERISIKO
          </p>
          <div className="flex items-baseline justify-between mt-1">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-[var(--color-text-title)] group-hover:text-red-500 transition-colors">5</span>
              <span className="text-xs font-medium text-[var(--color-text-subtitle)]">perlu perhatian</span>
            </div>
            <ChevronRight className="w-4 h-4 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>

      {/* Middle Grid Row: Charts & Upcoming */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Widget 1: Jam Meeting per Minggu (6 Columns) */}
        <div className="lg:col-span-6 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] p-6 flex flex-col justify-between shadow-sm">
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-semibold text-[var(--color-text-subtitle)] uppercase tracking-wider">
                Tren 8 minggu
              </span>
              <button
                type="button"
                onClick={() => router.push('/jam-meeting')}
                className="text-xs font-semibold text-[#2563EB] hover:underline flex items-center gap-1 cursor-pointer"
              >
                Lihat detail <ArrowRight className="w-3 h-3" />
              </button>
            </div>
            <h2 className="text-lg font-bold text-[var(--color-text-title)]">
              Jam Meeting per Minggu
            </h2>
            <p className="text-xs text-[var(--color-text-subtitle)]">
              Total durasi meeting yang tidak dikecualikan, per minggu.
            </p>
          </div>

          {/* Bar Chart Area */}
          <div
            onClick={() => router.push('/jam-meeting')}
            className="mt-8 space-y-4 cursor-pointer"
          >
            {/* Threshold Line */}
            <div className="relative border-b border-dashed border-red-500/60 pb-1">
              <span className="text-[10px] font-medium text-red-500 bg-red-500/10 px-2 py-0.5 rounded">
                Garis ambang: 15j/minggu
              </span>
            </div>

            {/* Bars Container */}
            <div className="grid grid-cols-4 gap-4 items-end h-32 pt-4">
              <div className="flex flex-col items-center gap-2 group">
                <div className="w-full bg-[var(--color-tab-container-bg)] group-hover:bg-[#2563EB] transition-colors rounded-t-md h-24" />
                <span className="text-[10px] text-[var(--color-text-subtitle)] font-medium">6 Jul</span>
              </div>
              <div className="flex flex-col items-center gap-2 group">
                <div className="w-full bg-[var(--color-tab-container-bg)] group-hover:bg-[#2563EB] transition-colors rounded-t-md h-20" />
                <span className="text-[10px] text-[var(--color-text-subtitle)] font-medium">13 Jul</span>
              </div>
              <div className="flex flex-col items-center gap-2 group">
                <div className="w-full bg-[var(--color-tab-container-bg)] group-hover:bg-[#2563EB] transition-colors rounded-t-md h-28" />
                <span className="text-[10px] text-[var(--color-text-subtitle)] font-medium">20 Jul</span>
              </div>
              <div className="flex flex-col items-center gap-2 group">
                <div className="w-full bg-[var(--color-tab-container-bg)] group-hover:bg-[#2563EB] transition-colors rounded-t-md h-16" />
                <span className="text-[10px] text-[var(--color-text-subtitle)] font-medium">27 Jul</span>
              </div>
            </div>
          </div>
        </div>

        {/* Widget 2: Status Proyek Donut (3 Columns) */}
        <div
          onClick={() => router.push('/proyek')}
          className="lg:col-span-3 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] p-6 flex flex-col justify-between shadow-sm cursor-pointer hover:border-blue-500/40 transition-all group"
        >
          <div>
            <span className="text-[11px] font-semibold text-[var(--color-text-subtitle)] uppercase tracking-wider">
              Distribusi
            </span>
            <h2 className="text-lg font-bold text-[var(--color-text-title)] mt-0.5 group-hover:text-blue-500 transition-colors">
              Status Proyek
            </h2>
          </div>

          {/* Donut Graphic */}
          <div className="my-6 flex justify-center items-center relative">
            <svg className="w-36 h-36 transform -rotate-90 group-hover:scale-105 transition-transform" viewBox="0 0 36 36">
              <path
                className="text-gray-200 dark:text-gray-800"
                strokeWidth="3.8"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-blue-600"
                strokeDasharray="50, 100"
                strokeWidth="3.8"
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-emerald-500"
                strokeDasharray="25, 100"
                strokeDashoffset="-50"
                strokeWidth="3.8"
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-purple-500"
                strokeDasharray="12.5, 100"
                strokeDashoffset="-75"
                strokeWidth="3.8"
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <div className="absolute flex flex-col items-center justify-center text-center">
              <span className="text-2xl font-bold text-[var(--color-text-title)]">8</span>
              <span className="text-[10px] text-[var(--color-text-subtitle)] font-medium">Total proyek</span>
            </div>
          </div>

          {/* Legend */}
          <div className="space-y-1.5 text-xs font-semibold">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-[var(--color-text-subtitle)]">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600" /> Berjalan
              </span>
              <span className="text-[var(--color-text-title)]">4</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-[var(--color-text-subtitle)]">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Perencanaan
              </span>
              <span className="text-[var(--color-text-title)]">2</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-[var(--color-text-subtitle)]">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-500" /> Selesai
              </span>
              <span className="text-[var(--color-text-title)]">1</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-[var(--color-text-subtitle)]">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-500" /> Ditunda
              </span>
              <span className="text-[var(--color-text-title)]">1</span>
            </div>
          </div>
        </div>

        {/* Widget 3: Meeting Mendatang (3 Columns) */}
        <div className="lg:col-span-3 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] p-6 flex flex-col justify-between shadow-sm">
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-semibold text-[var(--color-text-subtitle)] uppercase tracking-wider">
                Agenda
              </span>
              <button
                type="button"
                onClick={() => router.push('/jam-meeting')}
                className="text-xs font-semibold text-[#2563EB] hover:underline flex items-center gap-1 cursor-pointer"
              >
                Semua <ArrowRight className="w-3 h-3" />
              </button>
            </div>
            <h2 className="text-lg font-bold text-[var(--color-text-title)]">
              Meeting Mendatang
            </h2>
          </div>

          <div className="my-auto py-12 text-center">
            <p className="text-xs text-[var(--color-text-subtitle)]">
              Tidak ada meeting mendatang.
            </p>
          </div>
        </div>
      </div>

      {/* Lower Row Grid: Proyek Berisiko, Karyawan Overload, Per Departemen */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Widget 4: Proyek Berisiko List (5 Columns) - INTERACTIVE */}
        <div className="lg:col-span-5 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] p-6 shadow-sm">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[11px] font-semibold text-[var(--color-text-subtitle)] uppercase tracking-wider">
              Perhatian
            </span>
            <button
              type="button"
              onClick={() => router.push('/proyek')}
              className="text-xs font-semibold text-[#2563EB] hover:underline flex items-center gap-1 cursor-pointer"
            >
              Semua <ArrowRight className="w-3 h-3" />
            </button>
          </div>
          <h2 className="text-lg font-bold text-[var(--color-text-title)] mb-1">
            Proyek Berisiko
          </h2>
          <p className="text-xs text-[var(--color-text-subtitle)] mb-5">
            Proyek yang tertinggal dari jadwal atau mendekati tenggat.
          </p>

          <div className="space-y-4">
            {/* Item 1 -> proj-8 */}
            <div
              onClick={() => router.push('/proyek/proj-8')}
              className="p-3.5 rounded-xl border border-[var(--color-card-border)] bg-[var(--color-tab-container-bg)]/40 hover:bg-[var(--color-tab-container-bg)] hover:border-[#2563EB]/60 transition-all cursor-pointer group shadow-xs active:scale-[0.99] space-y-2"
              title="Klik untuk lihat detail proyek"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xs font-bold text-[var(--color-text-title)] group-hover:text-blue-500 transition-colors flex items-center gap-1">
                    <span>Calendar Sync Integration</span>
                    <ChevronRight className="w-3.5 h-3.5 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-[10px] text-[var(--color-text-subtitle)]">
                    Maya Lestari · 25 Jul 2026
                  </p>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-500">
                  Berjalan
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 rounded-full" style={{ width: '38%' }} />
                </div>
                <span className="text-[10px] font-bold text-[var(--color-text-title)]">38%</span>
              </div>
              <div className="flex items-center justify-between text-[10px]">
                <div className="flex items-center gap-2 text-red-500 font-semibold">
                  <span>⚠️ Tertinggal 62%</span>
                  <span>⏰ Terlambat 9 hari</span>
                </div>
                <span className="font-semibold text-red-500">Prioritas: Kritis</span>
              </div>
            </div>

            {/* Item 2 -> proj-2 */}
            <div
              onClick={() => router.push('/proyek/proj-2')}
              className="p-3.5 rounded-xl border border-[var(--color-card-border)] bg-[var(--color-tab-container-bg)]/40 hover:bg-[var(--color-tab-container-bg)] hover:border-[#2563EB]/60 transition-all cursor-pointer group shadow-xs active:scale-[0.99] space-y-2"
              title="Klik untuk lihat detail proyek"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xs font-bold text-[var(--color-text-title)] group-hover:text-blue-500 transition-colors flex items-center gap-1">
                    <span>Onboarding Flow</span>
                    <ChevronRight className="w-3.5 h-3.5 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-[10px] text-[var(--color-text-subtitle)]">
                    Sari Wulandari · 20 Jul 2026
                  </p>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-500">
                  Berjalan
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 rounded-full" style={{ width: '46%' }} />
                </div>
                <span className="text-[10px] font-bold text-[var(--color-text-title)]">46%</span>
              </div>
              <div className="flex items-center justify-between text-[10px]">
                <div className="flex items-center gap-2 text-red-500 font-semibold">
                  <span>⚠️ Tertinggal 55%</span>
                  <span>⏰ Terlambat 14 hari</span>
                </div>
                <span className="font-semibold text-amber-500">Prioritas: Sedang</span>
              </div>
            </div>

            {/* Item 3 -> proj-7 */}
            <div
              onClick={() => router.push('/proyek/proj-7')}
              className="p-3.5 rounded-xl border border-[var(--color-card-border)] bg-[var(--color-tab-container-bg)]/40 hover:bg-[var(--color-tab-container-bg)] hover:border-[#2563EB]/60 transition-all cursor-pointer group shadow-xs active:scale-[0.99] space-y-2"
              title="Klik untuk lihat detail proyek"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xs font-bold text-[var(--color-text-title)] group-hover:text-blue-500 transition-colors flex items-center gap-1">
                    <span>Reporting Engine</span>
                    <ChevronRight className="w-3.5 h-3.5 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-[10px] text-[var(--color-text-subtitle)]">
                    Budi Santoso · 5 Agu 2026
                  </p>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-500">
                  Berjalan
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 rounded-full" style={{ width: '74%' }} />
                </div>
                <span className="text-[10px] font-bold text-[var(--color-text-title)]">74%</span>
              </div>
              <div className="flex items-center justify-between text-[10px]">
                <div className="flex items-center gap-2 text-red-500 font-semibold">
                  <span>⚠️ Tertinggal 24%</span>
                  <span>⏰ 2 hari lagi</span>
                </div>
                <span className="font-semibold text-amber-500">Prioritas: Tinggi</span>
              </div>
            </div>
          </div>
        </div>

        {/* Widget 5: Karyawan Overload (4 Columns) */}
        <div className="lg:col-span-4 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-semibold text-[var(--color-text-subtitle)] uppercase tracking-wider">
                Beban kerja
              </span>
              <button
                type="button"
                onClick={() => router.push('/direktori')}
                className="text-xs font-semibold text-[#2563EB] hover:underline flex items-center gap-1 cursor-pointer"
              >
                Direktori <ArrowRight className="w-3 h-3" />
              </button>
            </div>
            <h2 className="text-lg font-bold text-[var(--color-text-title)] mb-1">
              Karyawan Overload
            </h2>
            <p className="text-xs text-[var(--color-text-subtitle)]">
              Ambang: 15j/minggu.
            </p>
          </div>

          <div className="py-16 text-center">
            <p className="text-xs text-[var(--color-text-subtitle)]">
              Tidak ada karyawan yang melebihi ambang batas meeting.
            </p>
          </div>
        </div>

        {/* Widget 6: Per Departemen (3 Columns) */}
        <div className="lg:col-span-3 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] p-6 shadow-sm">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[11px] font-semibold text-[var(--color-text-subtitle)] uppercase tracking-wider">
              Organisasi
            </span>
            <button
              type="button"
              onClick={() => router.push('/direktori')}
              className="text-xs font-semibold text-[#2563EB] hover:underline flex items-center gap-1 cursor-pointer"
            >
              Detail <ArrowRight className="w-3 h-3" />
            </button>
          </div>
          <h2 className="text-lg font-bold text-[var(--color-text-title)] mb-4">
            Per Departemen
          </h2>

          <div className="space-y-3">
            {[
              { name: 'Engineering', count: '4 orang', hours: '24.6j/meeting' },
              { name: 'Design', count: '2 orang', hours: '3.0j/meeting' },
              { name: 'Marketing', count: '2 orang', hours: '3.0j/meeting' },
              { name: 'Product', count: '2 orang', hours: '6.3j/meeting' },
              { name: 'Operations', count: '1 orang', hours: '2.8j/meeting' },
              { name: 'People Ops', count: '1 orang', hours: '1.5j/meeting' },
            ].map((dept) => (
              <div
                key={dept.name}
                onClick={() => router.push('/direktori')}
                className="flex items-center justify-between p-2.5 rounded-xl border border-[var(--color-card-border)] bg-[var(--color-tab-container-bg)]/30 hover:bg-[var(--color-tab-container-bg)] hover:border-blue-500/40 transition-all cursor-pointer group"
              >
                <div>
                  <p className="text-xs font-bold text-[var(--color-text-title)] group-hover:text-blue-500 transition-colors">
                    {dept.name}
                  </p>
                  <p className="text-[10px] text-[var(--color-text-subtitle)]">
                    {dept.count}
                  </p>
                </div>
                <span className="text-[10px] font-semibold text-[var(--color-text-subtitle)]">
                  {dept.hours}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Row Grid: Aktivitas Terbaru & Proyek Diperbarui */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Widget 7: Aktivitas Terbaru (5 Columns) */}
        <div className="lg:col-span-5 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] p-6 shadow-sm">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[11px] font-semibold text-[var(--color-text-subtitle)] uppercase tracking-wider">
              Riwayat
            </span>
            <button
              type="button"
              onClick={() => router.push('/jam-meeting')}
              className="text-xs font-semibold text-[#2563EB] hover:underline flex items-center gap-1 cursor-pointer"
            >
              Jam Meeting <ArrowRight className="w-3 h-3" />
            </button>
          </div>
          <h2 className="text-lg font-bold text-[var(--color-text-title)] mb-1">
            Aktivitas Terbaru
          </h2>
          <p className="text-xs text-[var(--color-text-subtitle)] mb-4">
            Meeting yang baru saja berlangsung.
          </p>

          <div className="space-y-3">
            {[
              {
                title: '1:1 Rani & Fajar',
                date: '30 Jul 2026 · 30m · 2 peserta',
                category: '1-on-1',
                agenda: 'Diskusi performa kuartalan dan rencana pengembangan karir.',
                attendees: [
                  { name: 'Sarah Connor', initials: 'SC', color: 'bg-blue-600' },
                  { name: 'Clark Kent', initials: 'CK', color: 'bg-violet-600' },
                ],
              },
              {
                title: 'Dashboard v2 Sprint Planning',
                date: '29 Jul 2026 · 1j 30m · 4 peserta',
                category: 'Internal Sync',
                agenda: 'Penetapan backlog sprint 14 dan estimasi story points.',
                attendees: [
                  { name: 'Sarah Connor', initials: 'SC', color: 'bg-blue-600' },
                  { name: 'Dick Grayson', initials: 'DG', color: 'bg-emerald-600' },
                  { name: 'Clark Kent', initials: 'CK', color: 'bg-violet-600' },
                  { name: 'Barry Allen', initials: 'BA', color: 'bg-pink-600' },
                ],
              },
              {
                title: 'Weekly Engineering Sync',
                date: '28 Jul 2026 · 45m · 6 peserta',
                category: 'Internal Sync',
                agenda: 'Review arsitektur microservices dan penyelesaian blocker.',
                attendees: [
                  { name: 'Sarah Connor', initials: 'SC', color: 'bg-blue-600' },
                  { name: 'Clark Kent', initials: 'CK', color: 'bg-violet-600' },
                  { name: 'Hal Jordan', initials: 'HJ', color: 'bg-cyan-600' },
                ],
              },
              {
                title: 'All-Hands Company Alignment',
                date: '25 Jul 2026 · 1j · 4 peserta',
                category: 'Internal Sync',
                agenda: 'Penyampaian pencapaian OKR Q2 dan target kuartal berikutnya.',
                attendees: [
                  { name: 'Bruce Wayne', initials: 'BW', color: 'bg-rose-600' },
                  { name: 'Oliver Queen', initials: 'OQ', color: 'bg-emerald-600' },
                  { name: 'Diana Prince', initials: 'DP', color: 'bg-amber-600' },
                ],
              },
              {
                title: 'Reporting Engine Retro',
                date: '24 Jul 2026 · 1j · 8 peserta',
                category: 'Internal Sync',
                agenda: 'Retrospektif peluncuran modul engine pelaporan otomatis.',
                attendees: [
                  { name: 'Ray Palmer', initials: 'RP', color: 'bg-indigo-600' },
                  { name: 'Victor Stone', initials: 'VS', color: 'bg-blue-600' },
                ],
              },
            ].map((activity, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedMeetingModal(activity)}
                className="flex items-center gap-3 p-3 rounded-xl border border-[var(--color-card-border)] bg-[var(--color-tab-container-bg)]/30 hover:bg-[var(--color-tab-container-bg)] hover:border-blue-500/40 transition-all cursor-pointer group shadow-xs"
                title="Klik untuk detail meeting"
              >
                <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div className="flex-1 truncate">
                  <p className="text-xs font-bold text-[var(--color-text-title)] group-hover:text-blue-500 transition-colors truncate">
                    {activity.title}
                  </p>
                  <p className="text-[10px] text-[var(--color-text-subtitle)] truncate">
                    {activity.date}
                  </p>
                </div>
                <ChevronRight className="w-3.5 h-3.5 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>

        {/* Widget 8: Proyek Diperbarui (7 Columns) - INTERACTIVE */}
        <div className="lg:col-span-7 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] p-6 shadow-sm">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[11px] font-semibold text-[var(--color-text-subtitle)] uppercase tracking-wider">
              Aktivitas terbaru
            </span>
            <button
              type="button"
              onClick={() => router.push('/proyek')}
              className="text-xs font-semibold text-[#2563EB] hover:underline flex items-center gap-1 cursor-pointer"
            >
              Lihat semua <ArrowRight className="w-3 h-3" />
            </button>
          </div>
          <h2 className="text-lg font-bold text-[var(--color-text-title)] mb-5">
            Proyek Diperbarui
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'Dashboard v2 Redesign', targetId: 'proj-1', status: 'Berjalan', lead: 'Sarah Connor', progress: 85, statusColor: 'bg-blue-500/10 text-blue-500' },
              { title: 'Calendar Sync Integration', targetId: 'proj-8', status: 'Berjalan', lead: 'Victor Stone', progress: 50, statusColor: 'bg-blue-500/10 text-blue-500' },
              { title: 'Mobile App MVP', targetId: 'proj-6', status: 'Hampir Selesai', lead: 'Barry Allen', progress: 92, statusColor: 'bg-cyan-500/10 text-cyan-500' },
              { title: 'Reporting Engine', targetId: 'proj-7', status: 'Dalam Draft', lead: 'Dick Grayson', progress: 65, statusColor: 'bg-amber-500/10 text-amber-500' },
            ].map((project) => (
              <div
                key={project.title}
                onClick={() => router.push(`/proyek/${project.targetId}`)}
                className="p-4 rounded-xl border border-[var(--color-card-border)] bg-[var(--color-tab-container-bg)]/30 hover:bg-[var(--color-tab-container-bg)] hover:border-[#2563EB]/60 transition-all cursor-pointer group shadow-xs active:scale-[0.99] space-y-3"
                title="Klik untuk buka detail proyek"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold text-[var(--color-text-title)] group-hover:text-blue-500 transition-colors flex items-center gap-1">
                    <span>{project.title}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${project.statusColor}`}>
                    {project.status}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-full" style={{ width: `${project.progress}%` }} />
                  </div>
                  <span className="text-[10px] font-bold text-[var(--color-text-title)]">{project.progress}%</span>
                </div>
                <p className="text-[10px] text-[var(--color-text-subtitle)]">
                  PJ: {project.lead}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Meeting Detail Modal Popup */}
      {selectedMeetingModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
          <div className="w-full max-w-md rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-[var(--color-card-border)] pb-3">
              <div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  {selectedMeetingModal.category}
                </span>
                <h3 className="text-sm font-bold text-[var(--color-text-title)] mt-1">
                  {selectedMeetingModal.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedMeetingModal(null)}
                className="p-1 rounded-lg text-[var(--color-text-subtitle)] hover:text-[var(--color-text-title)] hover:bg-[var(--color-tab-container-bg)]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-[var(--color-text-subtitle)]">
              <div>
                <span className="font-semibold block text-[var(--color-text-title)] mb-1">
                  Waktu & Tanggal:
                </span>
                <p>{selectedMeetingModal.date}</p>
              </div>

              <div>
                <span className="font-semibold block text-[var(--color-text-title)] mb-1">
                  Agenda:
                </span>
                <p className="leading-relaxed bg-[var(--color-tab-container-bg)] p-3 rounded-xl border border-[var(--color-card-border)]">
                  {selectedMeetingModal.agenda}
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-[var(--color-text-title)]">
                    Peserta ({selectedMeetingModal.attendees.length}):
                  </span>
                  <span className="text-[10px] text-blue-400 font-medium">
                    (Klik untuk profil)
                  </span>
                </div>
                <div className="flex items-center gap-2 flex-wrap pt-1">
                  {selectedMeetingModal.attendees.map((att, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() =>
                        router.push(
                          `/direktori/${getEmployeeIdByName(att.name)}`
                        )
                      }
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[var(--color-tab-container-bg)] border border-[var(--color-card-border)] text-xs font-semibold text-[var(--color-text-title)] hover:bg-[#2563EB] hover:text-white hover:border-[#2563EB] transition-all cursor-pointer shadow-xs active:scale-95 group"
                      title={`Lihat profil detail ${att.name}`}
                    >
                      <span className={`w-2 h-2 rounded-full ${att.color}`} />
                      <span>{att.name}</span>
                      <ChevronRight className="w-3 h-3 text-blue-400 group-hover:text-white transition-colors" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[var(--color-card-border)] flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedMeetingModal(null)}
                className="px-4 py-2 text-xs font-semibold rounded-xl bg-[#2563EB] text-white hover:bg-blue-700 transition-colors shadow-sm"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
