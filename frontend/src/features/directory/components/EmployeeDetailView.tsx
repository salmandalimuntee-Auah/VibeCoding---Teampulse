'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Briefcase,
  Clock,
  RotateCw,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Layers,
  Activity,
  FileText,
  UserCheck,
  Tag,
} from 'lucide-react';
import { ThemeToggle } from '@/features/auth/components/ThemeToggle';
import { Employee } from '../types';

interface EmployeeDetailViewProps {
  employeeId: string;
}

export const EmployeeDetailView: React.FC<EmployeeDetailViewProps> = ({
  employeeId,
}) => {
  const router = useRouter();
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 500);
  };

  // Detailed Employee Database matching 6 Figma screens
  const employeeDataMap: Record<string, Employee & {
    workloadScorePct: number;
    workloadStatus: 'Tinggi' | 'Sedang' | 'Optimal';
    weeklyBreakdown: { week: string; hours: number }[];
    assignedProjects: { name: string; role: string; progressPct: number; status: string }[];
    recentMeetings: { title: string; date: string; durationHours: number; category: string }[];
    recentLogs: { date: string; text: string }[];
  }> = {
    'emp-1': {
      id: 'emp-1',
      name: 'Sarah Connor',
      email: 'sarah.connor@teampulse.id',
      phone: '+62 812-3456-7890',
      role: 'Lead Frontend Engineer',
      department: 'Teknologi',
      position: 'Lead Frontend Engineer',
      status: 'Aktif',
      avatarColor: 'from-blue-600 to-indigo-600',
      activeProjectsCount: 3,
      meetingHours: 18.5,
      joinedDate: '15 Jan 2024',
      location: 'Jakarta (HQ)',
      workloadScorePct: 88,
      workloadStatus: 'Tinggi',
      weeklyBreakdown: [
        { week: 'Mgg 1', hours: 4.2 },
        { week: 'Mgg 2', hours: 5.0 },
        { week: 'Mgg 3', hours: 5.8 },
        { week: 'Mgg 4', hours: 3.5 },
      ],
      assignedProjects: [
        { name: 'TeamPulse Web App Redesign', role: 'Lead Frontend Dev', progressPct: 85, status: 'Sedang Berjalan' },
        { name: 'Design System & Token Engine', role: 'Architect', progressPct: 92, status: 'Hampir Selesai' },
        { name: 'Google Calendar API Integration', role: 'Reviewer', progressPct: 60, status: 'Dalam Review' },
      ],
      recentMeetings: [
        { title: 'Weekly Product & Engineering Sync', date: '20 Agt 2026', durationHours: 1.5, category: 'Internal Sync' },
        { title: '1-on-1 Mentorship & Career Review', date: '20 Agt 2026', durationHours: 0.75, category: '1-on-1' },
        { title: 'Design System Token & Contrast Audit', date: '18 Agt 2026', durationHours: 1.0, category: 'Internal Sync' },
      ],
      recentLogs: [
        { date: '20 Agt 2026', text: 'Menyelesaikan modul komponen UI direktori karyawan.' },
        { date: '19 Agt 2026', text: 'Melakukan Code Review PR #142 untuk integrasi JWT session.' },
      ],
    },
    'emp-4': {
      id: 'emp-4',
      name: 'Dick Grayson',
      email: 'dick.grayson@teampulse.id',
      phone: '+62 815-6789-0123',
      role: 'Lead Product Manager',
      department: 'Produk',
      position: 'Lead Product Manager',
      status: 'Aktif',
      avatarColor: 'from-emerald-500 to-teal-600',
      activeProjectsCount: 5,
      meetingHours: 16.2,
      joinedDate: '05 Jan 2024',
      location: 'Jakarta (HQ)',
      workloadScorePct: 82,
      workloadStatus: 'Tinggi',
      weeklyBreakdown: [
        { week: 'Mgg 1', hours: 3.8 },
        { week: 'Mgg 2', hours: 4.5 },
        { week: 'Mgg 3', hours: 4.9 },
        { week: 'Mgg 4', hours: 3.0 },
      ],
      assignedProjects: [
        { name: 'Q3 Product Roadmap Specification', role: 'Product Owner', progressPct: 78, status: 'Sedang Berjalan' },
        { name: 'Client Demo & Enterprise Feedback', role: 'Lead Presenter', progressPct: 90, status: 'Selesai' },
        { name: 'Dashboard Analytics Module PRD', role: 'Author', progressPct: 65, status: 'Dalam Draft' },
      ],
      recentMeetings: [
        { title: 'Weekly Product & Engineering Sync', date: '20 Agt 2026', durationHours: 1.5, category: 'Internal Sync' },
        { title: 'Quarterly Executive OKR Planning', date: '18 Agt 2026', durationHours: 2.0, category: 'Internal Sync' },
        { title: 'Client Demo: Workload Aggregator', date: '17 Agt 2026', durationHours: 1.0, category: 'Client Meeting' },
      ],
      recentLogs: [
        { date: '20 Agt 2026', text: 'Memperbarui dokumen spesifikasi fitur Jam Meeting.' },
        { date: '18 Agt 2026', text: 'Finalisasi OKR kuartal ketiga dengan tim eksekutif.' },
      ],
    },
    'emp-2': {
      id: 'emp-2',
      name: 'Clark Kent',
      email: 'clark.kent@teampulse.id',
      phone: '+62 813-4567-8901',
      role: 'Senior Backend Engineer',
      department: 'Teknologi',
      position: 'Senior Backend Engineer',
      status: 'Aktif',
      avatarColor: 'from-violet-600 to-purple-600',
      activeProjectsCount: 4,
      meetingHours: 14.0,
      joinedDate: '10 Feb 2024',
      location: 'Jakarta (HQ)',
      workloadScorePct: 70,
      workloadStatus: 'Sedang',
      weeklyBreakdown: [
        { week: 'Mgg 1', hours: 3.2 },
        { week: 'Mgg 2', hours: 3.8 },
        { week: 'Mgg 3', hours: 4.2 },
        { week: 'Mgg 4', hours: 2.8 },
      ],
      assignedProjects: [
        { name: 'NestJS REST API Architecture', role: 'Backend Lead', progressPct: 90, status: 'Sedang Berjalan' },
        { name: 'PostgreSQL Database Schema & TypeORM', role: 'DB Architect', progressPct: 95, status: 'Selesai' },
        { name: 'BullMQ Batch Sync Queue Worker', role: 'Developer', progressPct: 50, status: 'Dalam Review' },
      ],
      recentMeetings: [
        { title: 'Weekly Product & Engineering Sync', date: '20 Agt 2026', durationHours: 1.5, category: 'Internal Sync' },
        { title: 'Sprint Retrospective & Backlog Refinement', date: '19 Agt 2026', durationHours: 1.5, category: 'Internal Sync' },
      ],
      recentLogs: [
        { date: '19 Agt 2026', text: 'Refactoring modul TypeORM database migrations.' },
        { date: '17 Agt 2026', text: 'Deploying Redis cache layer to staging server.' },
      ],
    },
    'emp-3': {
      id: 'emp-3',
      name: 'Barry Allen',
      email: 'barry.allen@teampulse.id',
      phone: '+62 814-5678-9012',
      role: 'Senior UI/UX Designer',
      department: 'Desain',
      position: 'Senior UI/UX Designer',
      status: 'Aktif',
      avatarColor: 'from-pink-500 to-rose-600',
      activeProjectsCount: 2,
      meetingHours: 8.2,
      joinedDate: '01 Mar 2024',
      location: 'Bandung Hub',
      workloadScorePct: 45,
      workloadStatus: 'Optimal',
      weeklyBreakdown: [
        { week: 'Mgg 1', hours: 2.0 },
        { week: 'Mgg 2', hours: 2.2 },
        { week: 'Mgg 3', hours: 2.5 },
        { week: 'Mgg 4', hours: 1.5 },
      ],
      assignedProjects: [
        { name: 'Apple-Inspired Theme Tokens Design', role: 'Lead Designer', progressPct: 98, status: 'Selesai' },
        { name: 'Figma Component Library System', role: 'UI Architect', progressPct: 88, status: 'Sedang Berjalan' },
      ],
      recentMeetings: [
        { title: 'Design System Token & Accessibility Audit', date: '18 Agt 2026', durationHours: 1.0, category: 'Internal Sync' },
      ],
      recentLogs: [
        { date: '18 Agt 2026', text: 'Mempublikasikan komponen UI Figma versi 2.4.' },
      ],
    },
    'emp-5': {
      id: 'emp-5',
      name: 'Wade Wilson',
      email: 'wade.wilson@teampulse.id',
      phone: '+62 816-7890-1234',
      role: 'Growth Marketing Lead',
      department: 'Pemasaran',
      position: 'Growth Marketing Lead',
      status: 'Aktif',
      avatarColor: 'from-amber-500 to-orange-600',
      activeProjectsCount: 2,
      meetingHours: 12.5,
      joinedDate: '12 Apr 2024',
      location: 'Surabaya Office',
      workloadScorePct: 62,
      workloadStatus: 'Sedang',
      weeklyBreakdown: [
        { week: 'Mgg 1', hours: 3.0 },
        { week: 'Mgg 2', hours: 3.2 },
        { week: 'Mgg 3', hours: 3.8 },
        { week: 'Mgg 4', hours: 2.5 },
      ],
      assignedProjects: [
        { name: 'Q3 Enterprise Campaign Growth', role: 'Campaign Lead', progressPct: 75, status: 'Sedang Berjalan' },
        { name: 'User Acquisition & Funnel Analytics', role: 'Growth Lead', progressPct: 60, status: 'Sedang Berjalan' },
      ],
      recentMeetings: [
        { title: 'Sprint Retrospective & Refinement', date: '19 Agt 2026', durationHours: 1.5, category: 'Internal Sync' },
      ],
      recentLogs: [
        { date: '19 Agt 2026', text: 'Meluncurkan landing page campaign enterprise baru.' },
      ],
    },
    'emp-7': {
      id: 'emp-7',
      name: 'Bruce Wayne',
      email: 'bruce.wayne@teampulse.id',
      phone: '+62 818-9012-3456',
      role: 'VP of Enterprise Sales',
      department: 'Penjualan',
      position: 'VP of Enterprise Sales',
      status: 'Aktif',
      avatarColor: 'from-rose-600 to-red-700',
      activeProjectsCount: 4,
      meetingHours: 10.8,
      joinedDate: '01 Des 2023',
      location: 'Jakarta (HQ)',
      workloadScorePct: 55,
      workloadStatus: 'Optimal',
      weeklyBreakdown: [
        { week: 'Mgg 1', hours: 2.5 },
        { week: 'Mgg 2', hours: 2.8 },
        { week: 'Mgg 3', hours: 3.0 },
        { week: 'Mgg 4', hours: 2.5 },
      ],
      assignedProjects: [
        { name: 'Enterprise Client Onboarding', role: 'Executive Sponsor', progressPct: 82, status: 'Sedang Berjalan' },
        { name: 'Annual Strategic Partnerships', role: 'Deal Lead', progressPct: 90, status: 'Sedang Berjalan' },
      ],
      recentMeetings: [
        { title: 'Enterprise Client Onboarding & Review', date: '20 Agt 2026', durationHours: 1.0, category: 'Client Meeting' },
        { title: 'Quarterly Executive OKR Planning', date: '18 Agt 2026', durationHours: 2.0, category: 'Internal Sync' },
      ],
      recentLogs: [
        { date: '20 Agt 2026', text: 'Menandatangani kesepakatan enterprise dengan klien tier 1.' },
      ],
    },
    'emp-6': {
      id: 'emp-6',
      name: 'Hal Jordan',
      email: 'hal.jordan@teampulse.id',
      phone: '+62 817-8901-2345',
      role: 'SEO & Content Specialist',
      department: 'Pemasaran',
      position: 'SEO & Content Specialist',
      status: 'Aktif',
      avatarColor: 'from-cyan-500 to-blue-600',
      activeProjectsCount: 1,
      meetingHours: 9.5,
      joinedDate: '20 Mei 2024',
      location: 'Jakarta (HQ)',
      workloadScorePct: 48,
      workloadStatus: 'Optimal',
      weeklyBreakdown: [
        { week: 'Mgg 1', hours: 2.2 },
        { week: 'Mgg 2', hours: 2.5 },
        { week: 'Mgg 3', hours: 2.8 },
        { week: 'Mgg 4', hours: 2.0 },
      ],
      assignedProjects: [
        { name: 'SEO Strategy & Content Pipeline', role: 'Content Specialist', progressPct: 80, status: 'Sedang Berjalan' },
      ],
      recentMeetings: [
        { title: 'Weekly Marketing Sync', date: '19 Agt 2026', durationHours: 1.0, category: 'Internal Sync' },
        { title: 'Content Editorial Audit', date: '17 Agt 2026', durationHours: 0.75, category: 'Internal Sync' },
      ],
      recentLogs: [
        { date: '19 Agt 2026', text: 'Mempublikasikan laporan performa SEO Q2.' },
      ],
    },
    'emp-8': {
      id: 'emp-8',
      name: 'Arthur Curry',
      email: 'arthur.curry@teampulse.id',
      phone: '+62 819-0123-4567',
      role: 'Account Executive',
      department: 'Penjualan',
      position: 'Account Executive',
      status: 'Aktif',
      avatarColor: 'from-teal-500 to-emerald-600',
      activeProjectsCount: 2,
      meetingHours: 6.5,
      joinedDate: '18 Jun 2024',
      location: 'Bali Branch',
      workloadScorePct: 40,
      workloadStatus: 'Optimal',
      weeklyBreakdown: [
        { week: 'Mgg 1', hours: 1.5 },
        { week: 'Mgg 2', hours: 1.8 },
        { week: 'Mgg 3', hours: 2.0 },
        { week: 'Mgg 4', hours: 1.2 },
      ],
      assignedProjects: [
        { name: 'Mid-Market Client Sales Outreach', role: 'Account Exec', progressPct: 75, status: 'Sedang Berjalan' },
        { name: 'Regional Partnership Campaign', role: 'Sales Lead', progressPct: 60, status: 'Sedang Berjalan' },
      ],
      recentMeetings: [
        { title: 'Client Discovery Call', date: '19 Agt 2026', durationHours: 1.0, category: 'Client Meeting' },
        { title: 'Sales Pipeline Weekly Sync', date: '18 Agt 2026', durationHours: 1.0, category: 'Internal Sync' },
      ],
      recentLogs: [
        { date: '19 Agt 2026', text: 'Menutup deal paket regional Bali.' },
      ],
    },
    'emp-9': {
      id: 'emp-9',
      name: 'Ray Palmer',
      email: 'ray.palmer@teampulse.id',
      phone: '+62 820-1234-5678',
      role: 'Sales Operations Analyst',
      department: 'Penjualan',
      position: 'Sales Operations Analyst',
      status: 'Aktif',
      avatarColor: 'from-indigo-500 to-violet-600',
      activeProjectsCount: 1,
      meetingHours: 5.0,
      joinedDate: '02 Jul 2024',
      location: 'Jakarta (HQ)',
      workloadScorePct: 35,
      workloadStatus: 'Optimal',
      weeklyBreakdown: [
        { week: 'Mgg 1', hours: 1.2 },
        { week: 'Mgg 2', hours: 1.3 },
        { week: 'Mgg 3', hours: 1.5 },
        { week: 'Mgg 4', hours: 1.0 },
      ],
      assignedProjects: [
        { name: 'Sales Funnel Analytics Dashboard', role: 'Data Analyst', progressPct: 90, status: 'Hampir Selesai' },
      ],
      recentMeetings: [
        { title: 'Operations & Revenue Sync', date: '18 Agt 2026', durationHours: 1.0, category: 'Internal Sync' },
      ],
      recentLogs: [
        { date: '18 Agt 2026', text: 'Memperbarui model estimasi pendapatan Q4.' },
      ],
    },
    'emp-10': {
      id: 'emp-10',
      name: 'Victor Stone',
      email: 'victor.stone@teampulse.id',
      phone: '+62 821-2345-6789',
      role: 'Technical Sales Engineer',
      department: 'Penjualan',
      position: 'Technical Sales Engineer',
      status: 'Aktif',
      avatarColor: 'from-blue-500 to-cyan-600',
      activeProjectsCount: 3,
      meetingHours: 4.2,
      joinedDate: '15 Jul 2024',
      location: 'Jakarta (HQ)',
      workloadScorePct: 50,
      workloadStatus: 'Optimal',
      weeklyBreakdown: [
        { week: 'Mgg 1', hours: 1.0 },
        { week: 'Mgg 2', hours: 1.2 },
        { week: 'Mgg 3', hours: 1.2 },
        { week: 'Mgg 4', hours: 0.8 },
      ],
      assignedProjects: [
        { name: 'POC Technical Client Demo', role: 'Lead Demo Spec', progressPct: 85, status: 'Sedang Berjalan' },
        { name: 'Security Compliance Assessment', role: 'Security Analyst', progressPct: 70, status: 'Sedang Berjalan' },
      ],
      recentMeetings: [
        { title: 'Architecture Review: Microservices', date: '19 Agt 2026', durationHours: 1.5, category: 'Internal Sync' },
      ],
      recentLogs: [
        { date: '19 Agt 2026', text: 'Menyelesaikan dokumen arsitektur keamanan data.' },
      ],
    },
    'emp-11': {
      id: 'emp-11',
      name: 'Oliver Queen',
      email: 'oliver.queen@teampulse.id',
      phone: '+62 822-3456-7890',
      role: 'Head of Operations',
      department: 'Operasional',
      position: 'Head of Operations',
      status: 'Aktif',
      avatarColor: 'from-emerald-600 to-teal-700',
      activeProjectsCount: 3,
      meetingHours: 7.8,
      joinedDate: '10 Jan 2024',
      location: 'Jakarta (HQ)',
      workloadScorePct: 52,
      workloadStatus: 'Optimal',
      weeklyBreakdown: [
        { week: 'Mgg 1', hours: 2.0 },
        { week: 'Mgg 2', hours: 2.0 },
        { week: 'Mgg 3', hours: 2.3 },
        { week: 'Mgg 4', hours: 1.5 },
      ],
      assignedProjects: [
        { name: 'Cross-Department Process Audit', role: 'Ops Lead', progressPct: 88, status: 'Sedang Berjalan' },
        { name: 'Facility & Cloud Infrastructure', role: 'Sponsor', progressPct: 95, status: 'Selesai' },
      ],
      recentMeetings: [
        { title: 'Weekly Operations Alignment', date: '20 Agt 2026', durationHours: 1.5, category: 'Internal Sync' },
      ],
      recentLogs: [
        { date: '20 Agt 2026', text: 'Menyelesaikan revisi SOP operasional antar divisi.' },
      ],
    },
    'emp-12': {
      id: 'emp-12',
      name: 'Diana Prince',
      email: 'diana.prince@teampulse.id',
      phone: '+62 823-4567-8901',
      role: 'People & HR Manager',
      department: 'Operasional',
      position: 'People & HR Manager',
      status: 'Aktif',
      avatarColor: 'from-amber-600 to-red-600',
      activeProjectsCount: 2,
      meetingHours: 11.0,
      joinedDate: '01 Feb 2024',
      location: 'Jakarta (HQ)',
      workloadScorePct: 65,
      workloadStatus: 'Sedang',
      weeklyBreakdown: [
        { week: 'Mgg 1', hours: 2.8 },
        { week: 'Mgg 2', hours: 3.0 },
        { week: 'Mgg 3', hours: 3.2 },
        { week: 'Mgg 4', hours: 2.0 },
      ],
      assignedProjects: [
        { name: 'Employee Workload & Wellness Program', role: 'HR Lead', progressPct: 80, status: 'Sedang Berjalan' },
        { name: 'Q3 Talent Recruitment Drive', role: 'Recruiting Lead', progressPct: 75, status: 'Sedang Berjalan' },
      ],
      recentMeetings: [
        { title: 'HR & People Welfare Alignment', date: '19 Agt 2026', durationHours: 1.5, category: 'Internal Sync' },
      ],
      recentLogs: [
        { date: '19 Agt 2026', text: 'Melaunching survei kepuasan dan beban kerja karyawan.' },
      ],
    },
  };

  // Fallback to emp-1 if ID is missing or unknown
  const emp = employeeDataMap[employeeId] || employeeDataMap['emp-1'];

  return (
    <div className="flex-1 p-6 md:p-8 space-y-6 overflow-y-auto max-w-[1600px] mx-auto transition-colors">
      {/* Header Bar with Back Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => router.push('/direktori')}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border border-[var(--color-card-border)] bg-[var(--color-card-bg)] text-[var(--color-text-title)] hover:bg-[var(--color-tab-container-bg)] transition-all shadow-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Direktori</span>
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

      {/* Hero Profile Banner Card */}
      <div className="p-6 sm:p-8 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] shadow-sm relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Avatar & Main Info */}
          <div className="flex items-center gap-5">
            <div
              className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr ${emp.avatarColor} text-white font-extrabold text-xl sm:text-2xl flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20`}
            >
              {emp.name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--color-text-title)]">
                  {emp.name}
                </h1>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  {emp.department}
                </span>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{emp.status}</span>
                </span>
              </div>

              <p className="text-sm font-semibold text-[var(--color-text-subtitle)]">
                {emp.position}
              </p>
            </div>
          </div>

          {/* Quick Contact Specs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[var(--color-text-subtitle)] pt-4 md:pt-0 border-t md:border-t-0 border-[var(--color-card-border)]">
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-blue-500 shrink-0" />
              <span>{emp.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-blue-500 shrink-0" />
              <span>{emp.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-blue-500 shrink-0" />
              <span>{emp.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-blue-500 shrink-0" />
              <span>Bergabung: {emp.joinedDate}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Top 3 KPI Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Card 1: TOTAL JAM MEETING */}
        <div className="p-5 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <div className="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
              <Clock className="w-4 h-4" />
            </div>
            <span
              className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${
                emp.meetingHours > 15
                  ? 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                  : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
              }`}
            >
              {emp.meetingHours > 15 ? 'Beban Tinggi' : 'Beban Normal'}
            </span>
          </div>
          <p className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-text-subtitle)]">
            Total Jam Meeting (Bulan Ini)
          </p>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-[var(--color-text-title)] tracking-tight">
              {emp.meetingHours}j
            </span>
            <span className="text-xs font-medium text-[var(--color-text-subtitle)]">
              Rata-rata 4.6j / mgg
            </span>
          </div>
        </div>

        {/* Card 2: ALOKASI PROYEK */}
        <div className="p-5 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <div className="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
              <Briefcase className="w-4 h-4" />
            </div>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
              {emp.assignedProjects.length} Proyek Aktif
            </span>
          </div>
          <p className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-text-subtitle)]">
            Alokasi Proyek
          </p>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-[var(--color-text-title)] tracking-tight">
              {emp.activeProjectsCount}
            </span>
            <span className="text-xs font-medium text-[var(--color-text-subtitle)]">
              Proyek Sedang Berjalan
            </span>
          </div>
        </div>

        {/* Card 3: SKOR BEBAN KERJA */}
        <div className="p-5 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <div className="w-8 h-8 rounded-xl bg-violet-500/10 text-violet-500 flex items-center justify-center">
              <Activity className="w-4 h-4" />
            </div>
            <span
              className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${
                emp.workloadStatus === 'Tinggi'
                  ? 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                  : emp.workloadStatus === 'Sedang'
                  ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                  : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
              }`}
            >
              {emp.workloadStatus}
            </span>
          </div>
          <p className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-text-subtitle)]">
            Skor Beban Kerja
          </p>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-[var(--color-text-title)] tracking-tight">
              {emp.workloadScorePct}%
            </span>
            <span className="text-xs font-medium text-[var(--color-text-subtitle)]">
              Kapasitas Kerja Terpakai
            </span>
          </div>
        </div>
      </div>

      {/* Middle Section - 2 Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Panel: Jam Meeting per Minggu */}
        <div className="p-6 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-bold text-[var(--color-text-title)]">
                Jam Meeting per Minggu
              </h2>
              <span className="text-xs font-semibold text-rose-500 bg-rose-500/10 px-2.5 py-0.5 rounded-md border border-rose-500/20">
                Ideal &le; 15j / mgg
              </span>
            </div>
            <p className="text-xs text-[var(--color-text-subtitle)] mb-6">
              Rincian waktu meeting {emp.name} dalam 4 minggu terakhir.
            </p>
          </div>

          {/* Simple Bar Chart */}
          <div className="pt-4 pb-2 px-2 h-44 flex items-end justify-around gap-4 border-b border-[var(--color-card-border)]">
            {emp.weeklyBreakdown.map((item, idx) => {
              const maxH = 8;
              const fillPct = Math.round((item.hours / maxH) * 100);

              return (
                <div key={idx} className="flex-1 flex flex-col items-center gap-2 group">
                  <span className="text-[11px] font-bold text-[var(--color-text-title)]">
                    {item.hours}j
                  </span>
                  <div className="w-full max-w-[48px] h-32 bg-[var(--color-tab-container-bg)] rounded-xl p-1 flex items-end">
                    <div
                      style={{ height: `${fillPct}%` }}
                      className="w-full rounded-lg bg-gradient-to-t from-blue-600 to-indigo-400 shadow-xs transition-all duration-500"
                    />
                  </div>
                  <span className="text-xs font-semibold text-[var(--color-text-subtitle)]">
                    {item.week}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Panel: Alokasi Proyek & Peran */}
        <div className="p-6 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] shadow-sm space-y-4">
          <h2 className="text-base font-bold text-[var(--color-text-title)]">
            Alokasi Proyek & Peran
          </h2>
          <p className="text-xs text-[var(--color-text-subtitle)] mb-2">
            Proyek yang sedang ditangani oleh {emp.name}.
          </p>

          <div className="space-y-3">
            {emp.assignedProjects.map((proj, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] space-y-2"
              >
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xs font-bold text-[var(--color-text-title)]">
                      {proj.name}
                    </h3>
                    <p className="text-[11px] font-medium text-[var(--color-text-subtitle)]">
                      Peran: <strong className="text-[var(--color-text-title)]">{proj.role}</strong>
                    </p>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {proj.status}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex-1 h-2 rounded-full bg-[var(--color-tab-container-bg)] overflow-hidden border border-[var(--color-card-border)]">
                    <div
                      style={{ width: `${proj.progressPct}%` }}
                      className="h-full rounded-full bg-blue-600 transition-all duration-500"
                    />
                  </div>
                  <span className="text-xs font-extrabold text-[var(--color-text-title)] w-9 text-right">
                    {proj.progressPct}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section: Meeting Terakhir & Activity Logs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Meeting Terakhir */}
        <div className="p-6 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] shadow-sm space-y-4">
          <h2 className="text-base font-bold text-[var(--color-text-title)]">
            Daftar Meeting Terakhir
          </h2>

          <div className="space-y-2.5">
            {emp.recentMeetings.map((meet, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl border border-[var(--color-card-border)] bg-[var(--color-tab-container-bg)]/40 flex items-center justify-between gap-3 text-xs"
              >
                <div>
                  <h3 className="font-bold text-[var(--color-text-title)]">
                    {meet.title}
                  </h3>
                  <p className="text-[11px] text-[var(--color-text-subtitle)] mt-0.5">
                    {meet.date} • {meet.durationHours} Jam
                  </p>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0">
                  {meet.category}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Activity Logs */}
        <div className="p-6 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] shadow-sm space-y-4">
          <h2 className="text-base font-bold text-[var(--color-text-title)]">
            Aktivitas Terakhir
          </h2>

          <div className="space-y-3">
            {emp.recentLogs.map((log, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3 rounded-xl border border-[var(--color-card-border)] bg-[var(--color-tab-container-bg)]/40 text-xs"
              >
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                <div>
                  <p className="font-semibold text-[var(--color-text-title)]">
                    {log.text}
                  </p>
                  <span className="text-[10px] text-[var(--color-text-subtitle)] mt-0.5 block">
                    {log.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
