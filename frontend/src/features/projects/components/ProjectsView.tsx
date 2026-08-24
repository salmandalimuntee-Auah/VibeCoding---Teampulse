'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Search,
  Plus,
  RotateCw,
  Briefcase,
  Calendar,
  Users,
  CheckCircle2,
  Clock,
  Layers,
  ChevronRight,
  X,
  UserCheck,
  AlertCircle,
  FileText,
} from 'lucide-react';
import { ThemeToggle } from '@/features/auth/components/ThemeToggle';
import { ProjectItem, ProjectStatusName } from '../types';

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

export const ProjectsView: React.FC = () => {
  const router = useRouter();
  const [selectedStatus, setSelectedStatus] = useState<ProjectStatusName>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // New Project Form State
  const [newName, setNewName] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [newLead, setNewLead] = useState('Sarah Connor');
  const [newStatus, setNewStatus] =
    useState<Exclude<ProjectStatusName, 'Semua'>>('Sedang Berjalan');
  const [newProgress, setNewProgress] = useState(25);
  const [newDeadline, setNewDeadline] = useState('15 Sep 2026');

  const initialProjects: ProjectItem[] = [
    // 1. Sedang Berjalan (4)
    {
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
      members: [
        { name: 'Sarah Connor', initials: 'SC', color: 'bg-blue-600' },
        { name: 'Clark Kent', initials: 'CK', color: 'bg-violet-600' },
        { name: 'Dick Grayson', initials: 'DG', color: 'bg-emerald-600' },
        { name: 'Barry Allen', initials: 'BA', color: 'bg-pink-600' },
      ],
    },
    {
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
      members: [
        { name: 'Bruce Wayne', initials: 'BW', color: 'bg-rose-600' },
        { name: 'Hal Jordan', initials: 'HJ', color: 'bg-cyan-600' },
        { name: 'Barry Allen', initials: 'BA', color: 'bg-pink-600' },
      ],
    },
    {
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
      members: [
        { name: 'Hal Jordan', initials: 'HJ', color: 'bg-cyan-600' },
        { name: 'Wade Wilson', initials: 'WW', color: 'bg-amber-600' },
      ],
    },
    {
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
      members: [
        { name: 'Oliver Queen', initials: 'OQ', color: 'bg-emerald-600' },
        { name: 'Diana Prince', initials: 'DP', color: 'bg-amber-600' },
      ],
    },

    // 2. Selesai (1)
    {
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
      members: [
        { name: 'Dick Grayson', initials: 'DG', color: 'bg-emerald-600' },
        { name: 'Sarah Connor', initials: 'SC', color: 'bg-blue-600' },
      ],
    },

    // 3. Hampir Selesai (1)
    {
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
      members: [
        { name: 'Barry Allen', initials: 'BA', color: 'bg-pink-600' },
        { name: 'Sarah Connor', initials: 'SC', color: 'bg-blue-600' },
      ],
    },

    // 4. Dalam Draft (2)
    {
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
      members: [
        { name: 'Dick Grayson', initials: 'DG', color: 'bg-emerald-600' },
        { name: 'Ray Palmer', initials: 'RP', color: 'bg-purple-600' },
      ],
    },
    {
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
      members: [
        { name: 'Victor Stone', initials: 'VS', color: 'bg-indigo-600' },
        { name: 'Clark Kent', initials: 'CK', color: 'bg-violet-600' },
      ],
    },
  ];

  const [projectList, setProjectList] = useState<ProjectItem[]>(initialProjects);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 500);
  };

  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newDesc) return;

    const created: ProjectItem = {
      id: `proj-${Date.now()}`,
      name: newName,
      description: newDesc,
      status: newStatus,
      progressPercent: Number(newProgress) || 25,
      startDate: 'Hari ini',
      deadline: newDeadline || '30 Sep 2026',
      leadName: newLead,
      leadAvatarColor: 'from-blue-600 to-indigo-600',
      department: 'Teknologi',
      members: [
        { name: newLead, initials: newLead.substring(0, 2).toUpperCase(), color: 'bg-blue-600' },
      ],
    };

    setProjectList([created, ...projectList]);
    setNewName('');
    setNewDesc('');
    setIsCreateModalOpen(false);
  };

  const statusList: ProjectStatusName[] = [
    'Semua',
    'Sedang Berjalan',
    'Selesai',
    'Hampir Selesai',
    'Dalam Draft',
  ];

  const getStatusCount = (status: ProjectStatusName) => {
    if (status === 'Semua') return projectList.length;
    return projectList.filter((p) => p.status === status).length;
  };

  const filteredProjects = projectList.filter((proj) => {
    const matchesStatus =
      selectedStatus === 'Semua' || proj.status === selectedStatus;
    const matchesSearch =
      proj.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.leadName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="flex-1 p-6 md:p-8 space-y-6 overflow-y-auto max-w-[1600px] mx-auto transition-colors">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-[var(--color-text-title)]">
            Proyek
          </h1>
          <p className="text-xs font-medium text-[var(--color-text-subtitle)] mt-1">
            Kelola dan pantau alokasi proyek perusahaan.
          </p>
        </div>

        <div className="flex items-center gap-3 self-end sm:self-auto flex-wrap">
          <ThemeToggle isFixed={false} />
          <button
            type="button"
            onClick={handleRefresh}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold border border-[var(--color-card-border)] bg-[var(--color-card-bg)] text-[var(--color-text-title)] hover:bg-[var(--color-tab-container-bg)] transition-all shadow-sm active:scale-95"
          >
            <RotateCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
            <span>Segarkan</span>
          </button>
          <button
            type="button"
            onClick={() => setIsCreateModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-[#2563EB] hover:bg-blue-700 text-white shadow-md shadow-blue-500/20 active:scale-95 transition-all"
          >
            <Plus className="w-4 h-4 stroke-[2.5]" />
            <span>Buat Proyek</span>
          </button>
        </div>
      </div>

      {/* Search & Status Filter Tabs Bar */}
      <div className="p-4 sm:p-5 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] shadow-sm space-y-4">
        {/* Search Bar */}
        <div className="relative flex items-center">
          <Search className="absolute left-3.5 w-4 h-4 text-[var(--color-input-icon)] pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari nama proyek, deskripsi, atau penanggung jawab..."
            className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl border border-[var(--color-input-border)] bg-[var(--color-input-bg)] text-[var(--color-input-text)] placeholder-[var(--color-input-placeholder)] focus:outline-none focus:ring-2 focus:ring-blue-500/40"
          />
        </div>

        {/* Status Filter Tabs (5 Tabs from Figma) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {statusList.map((st) => {
            const count = getStatusCount(st);
            const isSelected = selectedStatus === st;

            return (
              <button
                key={st}
                type="button"
                onClick={() => setSelectedStatus(st)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-[#2563EB] text-white shadow-sm shadow-blue-500/20 font-bold'
                    : 'bg-[var(--color-tab-container-bg)] text-[var(--color-text-subtitle)] hover:text-[var(--color-text-title)] border border-[var(--color-card-border)]'
                }`}
              >
                <span>{st}</span>
                <span
                  className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                    isSelected
                      ? 'bg-white/20 text-white'
                      : 'bg-[var(--color-card-bg)] text-[var(--color-text-title)] border border-[var(--color-card-border)]'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {filteredProjects.map((proj) => (
          <div
            key={proj.id}
            onClick={() => setSelectedProject(proj)}
            className="p-6 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] shadow-sm hover:shadow-md hover:border-blue-500/40 transition-all flex flex-col justify-between group cursor-pointer"
          >
            <div>
              {/* Top Header & Status Badge */}
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="text-base font-bold text-[var(--color-text-title)] group-hover:text-blue-500 transition-colors">
                  {proj.name}
                </h3>
                <span
                  className={`text-[10px] font-bold px-2.5 py-0.5 rounded-md border shrink-0 ${
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
              </div>

              {/* Description */}
              <p className="text-xs text-[var(--color-text-subtitle)] leading-relaxed mb-4 line-clamp-2">
                {proj.description}
              </p>

              {/* Progress Bar & Percentage */}
              <div className="space-y-1.5 mb-5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-[var(--color-text-subtitle)]">
                    Progress Proyek
                  </span>
                  <span className="font-extrabold text-[var(--color-text-title)]">
                    {proj.progressPercent}%
                  </span>
                </div>
                <div className="h-2.5 rounded-full bg-[var(--color-tab-container-bg)] p-0.5 overflow-hidden border border-[var(--color-card-border)]">
                  <div
                    style={{ width: `${proj.progressPercent}%` }}
                    className={`h-full rounded-full transition-all duration-500 ${
                      proj.progressPercent === 100
                        ? 'bg-emerald-500'
                        : proj.progressPercent >= 90
                        ? 'bg-cyan-500'
                        : 'bg-blue-600'
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* Bottom Metadata & Members Row */}
            <div className="pt-4 border-t border-[var(--color-card-border)] flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-6 h-6 rounded-full bg-gradient-to-tr ${proj.leadAvatarColor} text-white font-bold text-[10px] flex items-center justify-center`}
                  >
                    {proj.leadName.substring(0, 2).toUpperCase()}
                  </div>
                  <span className="font-semibold text-[var(--color-text-title)]">
                    PJ: {proj.leadName}
                  </span>
                </div>

                <div className="flex items-center gap-1 text-[var(--color-text-subtitle)]">
                  <Calendar className="w-3.5 h-3.5 text-blue-500" />
                  <span>Tenggat: {proj.deadline}</span>
                </div>
              </div>

              {/* Team Members Stack */}
              <div className="flex items-center -space-x-1.5 overflow-hidden">
                {proj.members.map((m, idx) => (
                  <div
                    key={idx}
                    title={m.name}
                    className={`w-6 h-6 rounded-full ${m.color} text-white font-bold text-[9px] flex items-center justify-center ring-2 ring-[var(--color-card-bg)]`}
                  >
                    {m.initials}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="p-12 text-center rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)]">
          <p className="text-sm font-semibold text-[var(--color-text-title)]">
            Tidak ada proyek ditemukan
          </p>
          <p className="text-xs text-[var(--color-text-subtitle)] mt-1">
            Coba ubah kata kunci pencarian atau pilih tab status lain.
          </p>
        </div>
      )}

      {/* Modal 1: + Buat Proyek Dialog */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
          <div className="w-full max-w-lg rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] p-6 shadow-2xl space-y-5">
            <div className="flex items-center justify-between border-b border-[var(--color-card-border)] pb-3">
              <h3 className="text-base font-bold text-[var(--color-text-title)]">
                Buat Proyek Baru
              </h3>
              <button
                type="button"
                onClick={() => setIsCreateModalOpen(false)}
                className="p-1 rounded-lg text-[var(--color-text-subtitle)] hover:text-[var(--color-text-title)] hover:bg-[var(--color-tab-container-bg)]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleCreateProject} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[var(--color-text-label)] mb-1">
                  Nama Proyek *
                </label>
                <input
                  type="text"
                  required
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="Contoh: Mobile App Notification Engine"
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-[var(--color-input-border)] bg-[var(--color-input-bg)] text-[var(--color-input-text)] focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[var(--color-text-label)] mb-1">
                  Deskripsi Proyek *
                </label>
                <textarea
                  required
                  rows={3}
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  placeholder="Jelaskan tujuan dan ruang lingkup proyek..."
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-[var(--color-input-border)] bg-[var(--color-input-bg)] text-[var(--color-input-text)] focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[var(--color-text-label)] mb-1">
                    Penanggung Jawab (PJ)
                  </label>
                  <input
                    type="text"
                    value={newLead}
                    onChange={(e) => setNewLead(e.target.value)}
                    placeholder="Sarah Connor"
                    className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-[var(--color-input-border)] bg-[var(--color-input-bg)] text-[var(--color-input-text)] focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[var(--color-text-label)] mb-1">
                    Status Awal
                  </label>
                  <select
                    value={newStatus}
                    onChange={(e) =>
                      setNewStatus(
                        e.target.value as Exclude<ProjectStatusName, 'Semua'>
                      )
                    }
                    className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-[var(--color-input-border)] bg-[var(--color-input-bg)] text-[var(--color-input-text)] focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                  >
                    <option value="Sedang Berjalan">Sedang Berjalan</option>
                    <option value="Hampir Selesai">Hampir Selesai</option>
                    <option value="Dalam Draft">Dalam Draft</option>
                    <option value="Selesai">Selesai</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[var(--color-text-label)] mb-1">
                    Progress Awal (%)
                  </label>
                  <input
                    type="number"
                    min={0}
                    max={100}
                    value={newProgress}
                    onChange={(e) => setNewProgress(Number(e.target.value))}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-[var(--color-input-border)] bg-[var(--color-input-bg)] text-[var(--color-input-text)] focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[var(--color-text-label)] mb-1">
                    Tenggat Waktu
                  </label>
                  <input
                    type="text"
                    value={newDeadline}
                    onChange={(e) => setNewDeadline(e.target.value)}
                    placeholder="30 Sep 2026"
                    className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-[var(--color-input-border)] bg-[var(--color-input-bg)] text-[var(--color-input-text)] focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                  />
                </div>
              </div>

              <div className="pt-3 border-t border-[var(--color-card-border)] flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsCreateModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold rounded-xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] text-[var(--color-text-title)] hover:bg-[var(--color-tab-container-bg)]"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-semibold rounded-xl bg-[#2563EB] hover:bg-blue-700 text-white shadow-sm"
                >
                  Simpan Proyek
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal 2: Project Detail View */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
          <div className="w-full max-w-md rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-[var(--color-card-border)] pb-3">
              <div>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  {selectedProject.status}
                </span>
                <h3 className="text-sm font-bold text-[var(--color-text-title)] mt-1">
                  {selectedProject.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="p-1 rounded-lg text-[var(--color-text-subtitle)] hover:text-[var(--color-text-title)] hover:bg-[var(--color-tab-container-bg)]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-[var(--color-text-subtitle)]">
              <div>
                <span className="font-semibold block text-[var(--color-text-title)] mb-1">
                  Deskripsi:
                </span>
                <p className="leading-relaxed bg-[var(--color-tab-container-bg)] p-3 rounded-xl border border-[var(--color-card-border)]">
                  {selectedProject.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 p-3 rounded-xl bg-[var(--color-tab-container-bg)] border border-[var(--color-card-border)]">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[var(--color-text-subtitle)]">
                    PJ Proyek
                  </span>
                  <p
                    onClick={() =>
                      router.push(
                        `/direktori/${getEmployeeIdByName(selectedProject.leadName)}`
                      )
                    }
                    className="text-xs font-bold text-[#2563EB] hover:underline cursor-pointer transition-colors flex items-center gap-1 mt-0.5"
                    title={`Lihat profil ${selectedProject.leadName}`}
                  >
                    <span>{selectedProject.leadName}</span>
                    <ChevronRight className="w-3 h-3 text-blue-500" />
                  </p>
                </div>

                <div>
                  <span className="text-[10px] uppercase font-bold text-[var(--color-text-subtitle)]">
                    Tenggat Waktu
                  </span>
                  <p className="text-xs font-bold text-[var(--color-text-title)] mt-0.5">
                    {selectedProject.deadline}
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-[var(--color-text-title)]">
                    Anggota Tim ({selectedProject.members.length}):
                  </span>
                  <span className="text-[10px] text-blue-400 font-medium">
                    (Klik untuk lihat detail)
                  </span>
                </div>
                <div className="flex items-center gap-2 flex-wrap pt-1">
                  {selectedProject.members.map((m, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() =>
                        router.push(
                          `/direktori/${getEmployeeIdByName(m.name)}`
                        )
                      }
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[var(--color-tab-container-bg)] border border-[var(--color-card-border)] text-xs font-semibold text-[var(--color-text-title)] hover:bg-[#2563EB] hover:text-white hover:border-[#2563EB] transition-all cursor-pointer shadow-xs active:scale-95 group"
                      title={`Lihat profil detail ${m.name}`}
                    >
                      <span className={`w-2 h-2 rounded-full ${m.color}`} />
                      <span>{m.name}</span>
                      <ChevronRight className="w-3 h-3 text-blue-400 group-hover:text-white transition-colors" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[var(--color-card-border)] flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 text-xs font-semibold rounded-xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] text-[var(--color-text-title)] hover:bg-[var(--color-tab-container-bg)]"
              >
                Tutup
              </button>
              <button
                type="button"
                onClick={() => router.push(`/proyek/${selectedProject.id}`)}
                className="px-4 py-2 text-xs font-semibold rounded-xl bg-[#2563EB] text-white hover:bg-blue-700 transition-colors shadow-sm flex items-center gap-1.5"
              >
                <span>Lihat Detail Lengkap</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
