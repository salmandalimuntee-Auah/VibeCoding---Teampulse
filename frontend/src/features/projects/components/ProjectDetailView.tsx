'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  ArrowLeft,
  Calendar,
  Users,
  Briefcase,
  Clock,
  RotateCw,
  CheckCircle2,
  CheckSquare,
  Building2,
  X,
  FileText,
  UserCheck,
  AlertCircle,
  Tag,
  ChevronRight,
} from 'lucide-react';
import { ThemeToggle } from '@/features/auth/components/ThemeToggle';
import { ProjectItem } from '../types';

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

interface ProjectDetailViewProps {
  projectId: string;
}

export const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({
  projectId,
}) => {
  const router = useRouter();
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 500);
  };

  // Detailed Project Database matching all 8 Figma screens
  const projectDataMap: Record<
    string,
    ProjectItem & {
      completedTasksCount: number;
      totalTasksCount: number;
      milestones: { title: string; isCompleted: boolean; date: string }[];
      memberDetails: { name: string; role: string; avatarColor: string; email: string }[];
    }
  > = {
    'proj-1': {
      id: 'proj-1',
      name: 'TeamPulse Web App Redesign v2.0',
      description:
        'Pengembangan ulang dashboard internal menggunakan Next.js, TypeScript, & Tailwind CSS.',
      status: 'Sedang Berjalan',
      progressPercent: 85,
      startDate: '01 Agt 2026',
      deadline: '30 Agt 2026',
      leadName: 'Sarah Connor',
      leadAvatarColor: 'from-blue-600 to-indigo-600',
      department: 'Teknologi',
      completedTasksCount: 12,
      totalTasksCount: 14,
      members: [
        { name: 'Sarah Connor', initials: 'SC', color: 'bg-blue-600' },
        { name: 'Clark Kent', initials: 'CK', color: 'bg-violet-600' },
        { name: 'Dick Grayson', initials: 'DG', color: 'bg-emerald-600' },
        { name: 'Barry Allen', initials: 'BA', color: 'bg-pink-600' },
      ],
      memberDetails: [
        { name: 'Sarah Connor', role: 'Lead Frontend Dev', avatarColor: 'from-blue-600 to-indigo-600', email: 'sarah.connor@teampulse.id' },
        { name: 'Clark Kent', role: 'Senior Backend Engineer', avatarColor: 'from-violet-600 to-purple-600', email: 'clark.kent@teampulse.id' },
        { name: 'Dick Grayson', role: 'Product Lead', avatarColor: 'from-emerald-500 to-teal-600', email: 'dick.grayson@teampulse.id' },
        { name: 'Barry Allen', role: 'UI/UX Designer', avatarColor: 'from-pink-500 to-rose-600', email: 'barry.allen@teampulse.id' },
      ],
      milestones: [
        { title: 'Persiapan Figma Component Library & Design Tokens', isCompleted: true, date: '05 Agt 2026' },
        { title: 'Integrasi Layout Next.js App Router & Dark Mode Engine', isCompleted: true, date: '12 Agt 2026' },
        { title: 'Implementasi Halaman Jam Meeting & Direktori Karyawan', isCompleted: true, date: '18 Agt 2026' },
        { title: 'Testing & Performance Optimization (Lighthouse 95+)', isCompleted: false, date: '28 Agt 2026' },
      ],
    },
    'proj-2': {
      id: 'proj-2',
      name: 'Enterprise Client Onboarding',
      description:
        'Pendampingan integrasi API dan konfigurasi SSO Google Workspace untuk klien enterprise.',
      status: 'Sedang Berjalan',
      progressPercent: 78,
      startDate: '10 Agt 2026',
      deadline: '15 Sep 2026',
      leadName: 'Bruce Wayne',
      leadAvatarColor: 'from-rose-600 to-red-700',
      department: 'Penjualan',
      completedTasksCount: 7,
      totalTasksCount: 9,
      members: [
        { name: 'Bruce Wayne', initials: 'BW', color: 'bg-rose-600' },
        { name: 'Hal Jordan', initials: 'HJ', color: 'bg-cyan-600' },
        { name: 'Barry Allen', initials: 'BA', color: 'bg-pink-600' },
      ],
      memberDetails: [
        { name: 'Bruce Wayne', role: 'Executive Sponsor', avatarColor: 'from-rose-600 to-red-700', email: 'bruce.wayne@teampulse.id' },
        { name: 'Hal Jordan', role: 'Technical Account Lead', avatarColor: 'from-cyan-500 to-blue-600', email: 'hal.jordan@teampulse.id' },
        { name: 'Barry Allen', role: 'UX Onboarding Specialist', avatarColor: 'from-pink-500 to-rose-600', email: 'barry.allen@teampulse.id' },
      ],
      milestones: [
        { title: 'Verifikasi Domain & Konfigurasi OAuth 2.0 Client', isCompleted: true, date: '12 Agt 2026' },
        { title: 'Setup Sandbox Environment & API Credentials', isCompleted: true, date: '16 Agt 2026' },
        { title: 'Pelatihan Administrator Client & User SLA Sign-off', isCompleted: false, date: '10 Sep 2026' },
      ],
    },
    'proj-3': {
      id: 'proj-3',
      name: 'SEO Strategy & Content Pipeline',
      description:
        'Optimasi SEO on-page dan produksi artikel edukasi performa kerja tim.',
      status: 'Sedang Berjalan',
      progressPercent: 80,
      startDate: '05 Agt 2026',
      deadline: '10 Sep 2026',
      leadName: 'Hal Jordan',
      leadAvatarColor: 'from-cyan-500 to-blue-600',
      department: 'Pemasaran',
      completedTasksCount: 8,
      totalTasksCount: 10,
      members: [
        { name: 'Hal Jordan', initials: 'HJ', color: 'bg-cyan-600' },
        { name: 'Wade Wilson', initials: 'WW', color: 'bg-amber-600' },
      ],
      memberDetails: [
        { name: 'Hal Jordan', role: 'Content Lead', avatarColor: 'from-cyan-500 to-blue-600', email: 'hal.jordan@teampulse.id' },
        { name: 'Wade Wilson', role: 'Growth Specialist', avatarColor: 'from-amber-500 to-orange-600', email: 'wade.wilson@teampulse.id' },
      ],
      milestones: [
        { title: 'Keyword Research & Competitor Gap Analysis', isCompleted: true, date: '08 Agt 2026' },
        { title: 'Penerbitan 5 Artikel Blog Edukasi Dashboard Kinerja', isCompleted: true, date: '15 Agt 2026' },
        { title: 'Technical SEO Audit & Schema Markup Injection', isCompleted: false, date: '05 Sep 2026' },
      ],
    },
    'proj-4': {
      id: 'proj-4',
      name: 'Cross-Department Process Audit',
      description:
        'Pemeriksaan alur kerja operasional antar divisi untuk efisiensi beban kerja.',
      status: 'Sedang Berjalan',
      progressPercent: 88,
      startDate: '01 Agt 2026',
      deadline: '05 Sep 2026',
      leadName: 'Oliver Queen',
      leadAvatarColor: 'from-emerald-600 to-teal-700',
      department: 'Operasional',
      completedTasksCount: 9,
      totalTasksCount: 10,
      members: [
        { name: 'Oliver Queen', initials: 'OQ', color: 'bg-emerald-600' },
        { name: 'Diana Prince', initials: 'DP', color: 'bg-amber-600' },
      ],
      memberDetails: [
        { name: 'Oliver Queen', role: 'Head of Operations', avatarColor: 'from-emerald-600 to-teal-700', email: 'oliver.queen@teampulse.id' },
        { name: 'Diana Prince', role: 'HR & People Manager', avatarColor: 'from-amber-600 to-red-600', email: 'diana.prince@teampulse.id' },
      ],
      milestones: [
        { title: 'Wawancara Beban Kerja dengan Head of Department', isCompleted: true, date: '05 Agt 2026' },
        { title: 'Penyusunan Rekomendasi Batas Maksimum Jam Meeting', isCompleted: true, date: '15 Agt 2026' },
        { title: 'Implementasi SOP Baru & Final Executive Report', isCompleted: false, date: '02 Sep 2026' },
      ],
    },
    'proj-5': {
      id: 'proj-5',
      name: 'Client Demo & Feedback Workshop',
      description:
        'Sesi demonstrasi langsung dan pengumpulan masukan fitur dari klien tier 1.',
      status: 'Selesai',
      progressPercent: 100,
      startDate: '01 Agt 2026',
      deadline: '17 Agt 2026',
      leadName: 'Dick Grayson',
      leadAvatarColor: 'from-emerald-500 to-teal-600',
      department: 'Produk',
      completedTasksCount: 8,
      totalTasksCount: 8,
      members: [
        { name: 'Dick Grayson', initials: 'DG', color: 'bg-emerald-600' },
        { name: 'Sarah Connor', initials: 'SC', color: 'bg-blue-600' },
      ],
      memberDetails: [
        { name: 'Dick Grayson', role: 'Product Lead', avatarColor: 'from-emerald-500 to-teal-600', email: 'dick.grayson@teampulse.id' },
        { name: 'Sarah Connor', role: 'Frontend Lead', avatarColor: 'from-blue-600 to-indigo-600', email: 'sarah.connor@teampulse.id' },
      ],
      milestones: [
        { title: 'Persiapan Slide Walkthrough & Live Demo Environment', isCompleted: true, date: '05 Agt 2026' },
        { title: 'Pelaksanaan Workshop Interaktif dengan Klien Tier 1', isCompleted: true, date: '14 Agt 2026' },
        { title: 'Dokumentasi Feedback & Action Items PRD', isCompleted: true, date: '17 Agt 2026' },
      ],
    },
    'proj-6': {
      id: 'proj-6',
      name: 'Design System & Token Engine',
      description:
        'Standardisasi token warna Apple-inspired dan komponen UI universal.',
      status: 'Hampir Selesai',
      progressPercent: 92,
      startDate: '15 Jul 2026',
      deadline: '25 Agt 2026',
      leadName: 'Barry Allen',
      leadAvatarColor: 'from-pink-500 to-rose-600',
      department: 'Desain',
      completedTasksCount: 11,
      totalTasksCount: 12,
      members: [
        { name: 'Barry Allen', initials: 'BA', color: 'bg-pink-600' },
        { name: 'Sarah Connor', initials: 'SC', color: 'bg-blue-600' },
      ],
      memberDetails: [
        { name: 'Barry Allen', role: 'Lead UI/UX Designer', avatarColor: 'from-pink-500 to-rose-600', email: 'barry.allen@teampulse.id' },
        { name: 'Sarah Connor', role: 'Design System Engineer', avatarColor: 'from-blue-600 to-indigo-600', email: 'sarah.connor@teampulse.id' },
      ],
      milestones: [
        { title: 'Audit Token Warna (Light & Dark Theme)', isCompleted: true, date: '20 Jul 2026' },
        { title: 'Pembuatan Komponen Button, Card, Modal, & Input', isCompleted: true, date: '05 Agt 2026' },
        { title: 'Dokumentasi Design System & Guideline Compliance', isCompleted: false, date: '24 Agt 2026' },
      ],
    },
    'proj-7': {
      id: 'proj-7',
      name: 'Dashboard Analytics Module PRD',
      description:
        'Penyusunan dokumen persyaratan produk untuk modul grafik analitik beban kerja.',
      status: 'Dalam Draft',
      progressPercent: 65,
      startDate: '12 Agt 2026',
      deadline: '15 Sep 2026',
      leadName: 'Dick Grayson',
      leadAvatarColor: 'from-emerald-500 to-teal-600',
      department: 'Produk',
      completedTasksCount: 5,
      totalTasksCount: 8,
      members: [
        { name: 'Dick Grayson', initials: 'DG', color: 'bg-emerald-600' },
        { name: 'Ray Palmer', initials: 'RP', color: 'bg-purple-600' },
      ],
      memberDetails: [
        { name: 'Dick Grayson', role: 'Product Lead', avatarColor: 'from-emerald-500 to-teal-600', email: 'dick.grayson@teampulse.id' },
        { name: 'Ray Palmer', role: 'Data Operations Analyst', avatarColor: 'from-indigo-500 to-violet-600', email: 'ray.palmer@teampulse.id' },
      ],
      milestones: [
        { title: 'Drafting Spesifikasi KPI Meeting & Productivity Score', isCompleted: true, date: '16 Agt 2026' },
        { title: 'Review Schema Data dengan Backend Team', isCompleted: false, date: '30 Agt 2026' },
        { title: 'Approval PRD Eksekutif & Handover Engineering', isCompleted: false, date: '10 Sep 2026' },
      ],
    },
    'proj-8': {
      id: 'proj-8',
      name: 'Security & Data Compliance Audit',
      description:
        'Penilaian standar keamanan data GDPR & SOC2 pada infrastruktur backend NestJS.',
      status: 'Dalam Draft',
      progressPercent: 50,
      startDate: '15 Agt 2026',
      deadline: '30 Sep 2026',
      leadName: 'Victor Stone',
      leadAvatarColor: 'from-blue-500 to-cyan-600',
      department: 'Penjualan',
      completedTasksCount: 4,
      totalTasksCount: 8,
      members: [
        { name: 'Victor Stone', initials: 'VS', color: 'bg-indigo-600' },
        { name: 'Clark Kent', initials: 'CK', color: 'bg-violet-600' },
      ],
      memberDetails: [
        { name: 'Victor Stone', role: 'Security Sales Engineer', avatarColor: 'from-blue-500 to-cyan-600', email: 'victor.stone@teampulse.id' },
        { name: 'Clark Kent', role: 'Senior Backend Engineer', avatarColor: 'from-violet-600 to-purple-600', email: 'clark.kent@teampulse.id' },
      ],
      milestones: [
        { title: 'Audit Enkripsi Database & JWT Session Validity', isCompleted: true, date: '18 Agt 2026' },
        { title: 'Penetration Testing Sandbox API Endpoints', isCompleted: false, date: '10 Sep 2026' },
        { title: 'Penerbitan Sertifikat Kepatuhan SOC2', isCompleted: false, date: '25 Sep 2026' },
      ],
    },
  };

  // Fallback to proj-1 if ID is missing or unknown
  const proj = projectDataMap[projectId] || projectDataMap['proj-1'];

  return (
    <div className="flex-1 p-6 md:p-8 space-y-6 overflow-y-auto max-w-[1600px] mx-auto transition-colors">
      {/* Header Bar with Back Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => router.push('/proyek')}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border border-[var(--color-card-border)] bg-[var(--color-card-bg)] text-[var(--color-text-title)] hover:bg-[var(--color-tab-container-bg)] transition-all shadow-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Proyek</span>
          </button>
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

      {/* Hero Project Banner Card */}
      <div className="p-6 sm:p-8 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[var(--color-card-border)] pb-6">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 flex-wrap">
              <span
                className={`text-[10px] font-bold px-2.5 py-0.5 rounded-md border ${
                  proj.status === 'Selesai'
                    ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                    : proj.status === 'Hampir Selesai'
                    ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
                    : proj.status === 'Sedang Berjalan'
                    ? 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                    : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                }`}
              >
                {proj.status}
              </span>
              <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                Divisi {proj.department}
              </span>
            </div>

            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--color-text-title)]">
              {proj.name}
            </h1>

            <p className="text-xs sm:text-sm text-[var(--color-text-subtitle)] leading-relaxed max-w-3xl">
              {proj.description}
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-auto shrink-0">
            <div
              onClick={() =>
                router.push(
                  `/direktori/${getEmployeeIdByName(proj.leadName)}`
                )
              }
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[var(--color-tab-container-bg)] border border-[var(--color-card-border)] hover:border-[#2563EB] text-xs cursor-pointer transition-all hover:bg-blue-500/5 group shadow-xs"
              title={`Lihat profil detail ${proj.leadName}`}
            >
              <div
                className={`w-7 h-7 rounded-full bg-gradient-to-tr ${proj.leadAvatarColor} text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-sm`}
              >
                {proj.leadName.substring(0, 2).toUpperCase()}
              </div>
              <div>
                <span className="text-[10px] block text-[var(--color-text-subtitle)]">
                  Penanggung Jawab
                </span>
                <span className="font-bold text-[#2563EB] group-hover:underline flex items-center gap-1">
                  {proj.leadName}
                  <ChevronRight className="w-3 h-3 text-blue-500" />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Project Metadata Specs Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-[var(--color-text-subtitle)]">
          <div className="space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-text-subtitle)]">
              Tanggal Mulai
            </span>
            <p className="font-semibold text-[var(--color-text-title)]">{proj.startDate}</p>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-text-subtitle)]">
              Tenggat Waktu
            </span>
            <p className="font-semibold text-[var(--color-text-title)]">{proj.deadline}</p>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-text-subtitle)]">
              Task Selesai
            </span>
            <p className="font-semibold text-[var(--color-text-title)]">
              {proj.completedTasksCount} / {proj.totalTasksCount} Task
            </p>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-text-subtitle)]">
              Anggota Tim
            </span>
            <p className="font-semibold text-[var(--color-text-title)]">
              {proj.members.length} Orang Terlibat
            </p>
          </div>
        </div>

        {/* Big Progress Bar Bar */}
        <div className="space-y-2 pt-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-[var(--color-text-title)]">
              Progres Keseluruhan Proyek
            </span>
            <span className="font-extrabold text-blue-500 text-sm">
              {proj.progressPercent}%
            </span>
          </div>

          <div className="h-3 rounded-full bg-[var(--color-tab-container-bg)] p-0.5 overflow-hidden border border-[var(--color-card-border)]">
            <div
              style={{ width: `${proj.progressPercent}%` }}
              className={`h-full rounded-full transition-all duration-500 ${
                proj.progressPercent === 100
                  ? 'bg-emerald-500 shadow-sm shadow-emerald-500/20'
                  : proj.progressPercent >= 90
                  ? 'bg-cyan-500'
                  : 'bg-blue-600 shadow-sm shadow-blue-500/20'
              }`}
            />
          </div>
        </div>
      </div>

      {/* Middle Section - 2 Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Panel: Task & Milestone Progress */}
        <div className="p-6 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-[var(--color-text-title)]">
              Milestone & Task Proyek
            </h2>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20">
              {proj.completedTasksCount}/{proj.totalTasksCount} Selesai
            </span>
          </div>

          <div className="space-y-3">
            {proj.milestones.map((m, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl border border-[var(--color-card-border)] bg-[var(--color-tab-container-bg)]/40 flex items-center justify-between gap-3 text-xs"
              >
                <div className="flex items-center gap-3">
                  {m.isCompleted ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  ) : (
                    <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                  )}
                  <span
                    className={`font-semibold ${
                      m.isCompleted
                        ? 'text-[var(--color-text-title)] line-through opacity-70'
                        : 'text-[var(--color-text-title)]'
                    }`}
                  >
                    {m.title}
                  </span>
                </div>

                <span className="text-[10px] text-[var(--color-text-subtitle)] shrink-0">
                  {m.date}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel: Tim Terlibat */}
        <div className="p-6 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-[var(--color-text-title)]">
              Tim yang Terlibat
            </h2>
            <span className="text-[10px] text-blue-400 font-medium">
              (Klik nama untuk profil)
            </span>
          </div>

          <div className="space-y-3">
            {proj.memberDetails.map((mem, idx) => (
              <div
                key={idx}
                onClick={() =>
                  router.push(
                    `/direktori/${getEmployeeIdByName(mem.name)}`
                  )
                }
                className="p-3.5 rounded-xl border border-[var(--color-card-border)] bg-[var(--color-tab-container-bg)]/40 hover:bg-[var(--color-tab-container-bg)] hover:border-[#2563EB]/50 flex items-center justify-between gap-3 text-xs cursor-pointer transition-all group shadow-xs active:scale-[0.99]"
                title={`Lihat detail profil ${mem.name}`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-full bg-gradient-to-tr ${mem.avatarColor} text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-sm`}
                  >
                    {mem.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--color-text-title)] group-hover:text-[#2563EB] transition-colors flex items-center gap-1">
                      <span>{mem.name}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-[11px] text-[var(--color-text-subtitle)]">
                      {mem.role}
                    </p>
                  </div>
                </div>

                <span className="text-[11px] text-[var(--color-text-subtitle)] truncate max-w-[160px]">
                  {mem.email}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
