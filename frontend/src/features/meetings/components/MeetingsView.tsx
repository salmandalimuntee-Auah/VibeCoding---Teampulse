'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Clock,
  Calendar,
  Users,
  Video,
  RotateCw,
  Search,
  Filter,
  ChevronRight,
  TrendingUp,
  AlertTriangle,
  Info,
  CheckCircle2,
  X,
} from 'lucide-react';
import { ThemeToggle } from '@/features/auth/components/ThemeToggle';
import {
  EmployeeMeetingHours,
  MeetingItem,
  WeeklyMeetingTrend,
} from '../types';

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

export const MeetingsView: React.FC = () => {
  const router = useRouter();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedMeeting, setSelectedMeeting] = useState<MeetingItem | null>(null);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 600);
  };

  // KPI Data
  const kpiData = {
    totalHours: 14.5,
    avgHoursPerPerson: 2.9,
    totalHoursChangePct: 12,
    dailyAvgHours: 3.6,
    dailyAvgChangePct: -5,
    totalMeetings: 16,
    overloadPct: 12,
  };

  // Weekly Trend Chart Data
  const weeklyTrends: WeeklyMeetingTrend[] = [
    { weekLabel: 'Mgg 1', totalHours: 12.5, idealThresholdHours: 15 },
    { weekLabel: 'Mgg 2', totalHours: 14.0, idealThresholdHours: 15 },
    { weekLabel: 'Mgg 3', totalHours: 18.2, idealThresholdHours: 15 },
    { weekLabel: 'Mgg 4', totalHours: 14.5, idealThresholdHours: 15 },
  ];

  // Employee Workload Data
  const employees: EmployeeMeetingHours[] = [
    {
      id: 'emp-1',
      name: 'Sarah Connor',
      role: 'Lead Frontend Engineer • Tech',
      department: 'Technology',
      avatarColor: 'from-blue-600 to-indigo-600',
      totalHours: 18.5,
      meetingCount: 12,
      isOverloaded: true,
    },
    {
      id: 'emp-2',
      name: 'Dick Grayson',
      role: 'Product Manager • Product',
      department: 'Product',
      avatarColor: 'from-emerald-500 to-teal-600',
      totalHours: 16.2,
      meetingCount: 11,
      isOverloaded: true,
    },
    {
      id: 'emp-3',
      name: 'Clark Kent',
      role: 'Senior Backend Engineer • Tech',
      department: 'Technology',
      avatarColor: 'from-violet-600 to-purple-600',
      totalHours: 14.0,
      meetingCount: 9,
      isOverloaded: false,
    },
    {
      id: 'emp-4',
      name: 'Wade Wilson',
      role: 'QA Engineer • Technology',
      department: 'Technology',
      avatarColor: 'from-amber-500 to-orange-600',
      totalHours: 12.5,
      meetingCount: 8,
      isOverloaded: false,
    },
    {
      id: 'emp-5',
      name: 'Bruce Wayne',
      role: 'VP of Engineering • Executive',
      department: 'Executive',
      avatarColor: 'from-rose-500 to-red-600',
      totalHours: 10.8,
      meetingCount: 7,
      isOverloaded: false,
    },
    {
      id: 'emp-6',
      name: 'Hal Jordan',
      role: 'DevOps Specialist • Infrastructure',
      department: 'Infrastructure',
      avatarColor: 'from-cyan-500 to-blue-600',
      totalHours: 9.5,
      meetingCount: 6,
      isOverloaded: false,
    },
    {
      id: 'emp-7',
      name: 'Barry Allen',
      role: 'UX Researcher • Product',
      department: 'Product',
      avatarColor: 'from-pink-500 to-rose-600',
      totalHours: 8.2,
      meetingCount: 5,
      isOverloaded: false,
    },
    {
      id: 'emp-8',
      name: 'Arthur Curry',
      role: 'Database Administrator • Ops',
      department: 'Ops',
      avatarColor: 'from-teal-500 to-emerald-600',
      totalHours: 6.5,
      meetingCount: 4,
      isOverloaded: false,
    },
    {
      id: 'emp-9',
      name: 'Ray Palmer',
      role: 'Data Scientist • Analytics',
      department: 'Analytics',
      avatarColor: 'from-indigo-500 to-violet-600',
      totalHours: 5.0,
      meetingCount: 3,
      isOverloaded: false,
    },
    {
      id: 'emp-10',
      name: 'Victor Stone',
      role: 'Systems Architect • Tech',
      department: 'Technology',
      avatarColor: 'from-blue-500 to-cyan-600',
      totalHours: 4.2,
      meetingCount: 3,
      isOverloaded: false,
    },
  ];

  // Meetings Detailed List Data
  const meetings: MeetingItem[] = [
    {
      id: 'meet-1',
      title: 'Weekly Product & Engineering Sync',
      category: 'Internal Sync',
      date: '20 Agt 2026',
      timeRange: '09:00 - 10:30',
      durationHours: 1.5,
      organizer: 'Dick Grayson',
      location: 'Google Meet / Room Alpha',
      agenda: 'Review sprint deliverables, alignment on Q3 release timeline, and unblocking cross-functional dependencies.',
      attendees: [
        { name: 'Sarah Connor', initials: 'SC', color: 'bg-blue-600' },
        { name: 'Dick Grayson', initials: 'DG', color: 'bg-emerald-600' },
        { name: 'Clark Kent', initials: 'CK', color: 'bg-violet-600' },
        { name: 'Wade Wilson', initials: 'WW', color: 'bg-amber-600' },
      ],
    },
    {
      id: 'meet-2',
      title: 'Enterprise Client Onboarding & Review',
      category: 'Client Meeting',
      date: '20 Agt 2026',
      timeRange: '11:00 - 12:00',
      durationHours: 1.0,
      organizer: 'Bruce Wayne',
      location: 'Zoom Enterprise',
      agenda: 'Kickoff onboarding session for key enterprise partners, presenting API integration specs and SLA milestones.',
      attendees: [
        { name: 'Bruce Wayne', initials: 'BW', color: 'bg-rose-600' },
        { name: 'Hal Jordan', initials: 'HJ', color: 'bg-cyan-600' },
        { name: 'Barry Allen', initials: 'BA', color: 'bg-pink-600' },
      ],
    },
    {
      id: 'meet-3',
      title: '1-on-1 Mentorship & Performance Review',
      category: '1-on-1',
      date: '20 Agt 2026',
      timeRange: '13:30 - 14:15',
      durationHours: 0.75,
      organizer: 'Sarah Connor',
      location: 'Private Pod B',
      agenda: 'Bi-weekly 1-on-1 check-in regarding career development goals, technical growth, and workload balance.',
      attendees: [
        { name: 'Sarah Connor', initials: 'SC', color: 'bg-blue-600' },
        { name: 'Dick Grayson', initials: 'DG', color: 'bg-emerald-600' },
      ],
    },
    {
      id: 'meet-4',
      title: 'Sprint Retrospective & Backlog Refinement',
      category: 'Internal Sync',
      date: '19 Agt 2026',
      timeRange: '14:00 - 15:30',
      durationHours: 1.5,
      organizer: 'Wade Wilson',
      location: 'Google Meet',
      agenda: 'Analyze recent sprint velocity, action items for automated CI/CD pipelines, and user feedback triage.',
      attendees: [
        { name: 'Wade Wilson', initials: 'WW', color: 'bg-amber-600' },
        { name: 'Clark Kent', initials: 'CK', color: 'bg-violet-600' },
        { name: 'Arthur Curry', initials: 'AC', color: 'bg-teal-600' },
      ],
    },
    {
      id: 'meet-5',
      title: 'Architecture Review: Microservices & Redis Cache',
      category: 'Internal Sync',
      date: '19 Agt 2026',
      timeRange: '10:00 - 11:30',
      durationHours: 1.5,
      organizer: 'Victor Stone',
      location: 'Conference Room 3',
      agenda: 'Technical design proposal for Redis cluster caching strategy and BullMQ event queue partitioning.',
      attendees: [
        { name: 'Victor Stone', initials: 'VS', color: 'bg-indigo-600' },
        { name: 'Hal Jordan', initials: 'HJ', color: 'bg-cyan-600' },
        { name: 'Ray Palmer', initials: 'RP', color: 'bg-purple-600' },
      ],
    },
    {
      id: 'meet-6',
      title: 'Design System Token & Accessibility Audit',
      category: 'Internal Sync',
      date: '18 Agt 2026',
      timeRange: '15:00 - 16:00',
      durationHours: 1.0,
      organizer: 'Barry Allen',
      location: 'Figma Huddle',
      agenda: 'Evaluating WCAG 2.1 contrast compliance across light and dark theme design tokens.',
      attendees: [
        { name: 'Barry Allen', initials: 'BA', color: 'bg-pink-600' },
        { name: 'Sarah Connor', initials: 'SC', color: 'bg-blue-600' },
      ],
    },
    {
      id: 'meet-7',
      title: 'Quarterly Executive OKR Planning',
      category: 'Internal Sync',
      date: '18 Agt 2026',
      timeRange: '09:00 - 11:00',
      durationHours: 2.0,
      organizer: 'Bruce Wayne',
      location: 'Boardroom 1',
      agenda: 'Alignment on Q4 strategic OKRs, resource allocation, and team workload target threshold settings.',
      attendees: [
        { name: 'Bruce Wayne', initials: 'BW', color: 'bg-rose-600' },
        { name: 'Dick Grayson', initials: 'DG', color: 'bg-emerald-600' },
        { name: 'Ray Palmer', initials: 'RP', color: 'bg-purple-600' },
      ],
    },
    {
      id: 'meet-8',
      title: 'Client Demo: Workload Aggregator Dashboard',
      category: 'Client Meeting',
      date: '17 Agt 2026',
      timeRange: '14:00 - 15:00',
      durationHours: 1.0,
      organizer: 'Dick Grayson',
      location: 'Zoom Meeting',
      agenda: 'Live product walkthrough showcasing automated Google Calendar sync and team productivity analytics.',
      attendees: [
        { name: 'Dick Grayson', initials: 'DG', color: 'bg-emerald-600' },
        { name: 'Sarah Connor', initials: 'SC', color: 'bg-blue-600' },
      ],
    },
  ];

  // Filtered Meetings
  const filteredMeetings = meetings.filter((meeting) => {
    const matchesCategory =
      selectedCategory === 'Semua' || meeting.category === selectedCategory;
    const matchesSearch =
      meeting.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      meeting.organizer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex-1 p-6 md:p-8 space-y-6 overflow-y-auto max-w-[1600px] mx-auto transition-colors">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-[var(--color-text-title)]">
            Jam Meeting
          </h1>
          <p className="text-xs font-medium text-[var(--color-text-subtitle)] mt-1">
            Laporan dan analisis beban meeting karyawan.
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

      {/* Top 3 KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Card 1: TOTAL JAM MEETING */}
        <div className="p-5 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] shadow-sm relative overflow-hidden group hover:border-blue-500/30 transition-all">
          <div className="flex items-center justify-between mb-3">
            <div className="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
              <Clock className="w-4 h-4" />
            </div>
            <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
              +{kpiData.totalHoursChangePct}% vs mgg lalu
            </span>
          </div>

          <p className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-text-subtitle)]">
            Total Jam Meeting
          </p>

          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-[var(--color-text-title)] tracking-tight">
              {kpiData.totalHours}j
            </span>
            <span className="text-xs font-medium text-[var(--color-text-subtitle)]">
              {kpiData.avgHoursPerPerson}j/orang (rata-rata)
            </span>
          </div>
        </div>

        {/* Card 2: RATA-RATA HARIAN */}
        <div className="p-5 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] shadow-sm relative overflow-hidden group hover:border-blue-500/30 transition-all">
          <div className="flex items-center justify-between mb-3">
            <div className="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
            <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
              {kpiData.dailyAvgChangePct}% vs mgg lalu
            </span>
          </div>

          <p className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-text-subtitle)]">
            Rata-rata Harian
          </p>

          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-[var(--color-text-title)] tracking-tight">
              {kpiData.dailyAvgHours}j
            </span>
            <span className="text-xs font-medium text-[var(--color-text-subtitle)]">
              Per orang
            </span>
          </div>
        </div>

        {/* Card 3: TOTAL MEETING */}
        <div className="p-5 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] shadow-sm relative overflow-hidden group hover:border-rose-500/30 transition-all">
          <div className="flex items-center justify-between mb-3">
            <div className="w-8 h-8 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center">
              <Video className="w-4 h-4" />
            </div>
            <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20">
              {kpiData.overloadPct}% melebihi batas
            </span>
          </div>

          <p className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-text-subtitle)]">
            Total Meeting
          </p>

          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-[var(--color-text-title)] tracking-tight">
              {kpiData.totalMeetings}
            </span>
            <span className="text-xs font-medium text-[var(--color-text-subtitle)]">
              Meeting minggu ini
            </span>
          </div>
        </div>
      </div>

      {/* Middle Row - 2 Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart 1: Jam Meeting per Minggu (2 cols) */}
        <div className="lg:col-span-2 p-6 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-base font-bold text-[var(--color-text-title)]">
                Jam Meeting per Minggu
              </h2>
              <p className="text-xs text-[var(--color-text-subtitle)] mt-0.5">
                Total jam meeting dalam 4 minggu terakhir
              </p>
            </div>

            <div className="flex items-center gap-2 text-[11px] font-semibold text-rose-500 bg-rose-500/10 px-2.5 py-1 rounded-lg border border-rose-500/20">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              <span>Batas Ideal: 15j / minggu</span>
            </div>
          </div>

          {/* Bar Chart Canvas Simulation */}
          <div className="relative pt-6 pb-2 px-4 h-48 flex items-end justify-around gap-6 border-b border-[var(--color-card-border)]">
            {/* Threshold Line */}
            <div className="absolute left-0 right-0 top-12 border-t-2 border-dashed border-rose-500/40 z-0 flex items-center justify-end pr-2">
              <span className="text-[10px] font-bold text-rose-400 bg-[var(--color-card-bg)] px-1.5 py-0.5 rounded border border-rose-500/30">
                15.0j Threshold
              </span>
            </div>

            {weeklyTrends.map((trend, idx) => {
              const maxScale = 22; // max scale hours
              const heightPct = Math.round((trend.totalHours / maxScale) * 100);
              const isOver = trend.totalHours > trend.idealThresholdHours;

              return (
                <div key={idx} className="flex-1 flex flex-col items-center gap-2 z-10 group relative">
                  {/* Tooltip on Hover */}
                  <div className="absolute -top-9 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-lg pointer-events-none whitespace-nowrap z-20 border border-slate-700">
                    {trend.totalHours} Jam
                  </div>

                  {/* Bar fill */}
                  <div className="w-full max-w-[64px] h-36 bg-[var(--color-tab-container-bg)] rounded-xl flex items-end p-1 relative overflow-hidden">
                    <div
                      style={{ height: `${heightPct}%` }}
                      className={`w-full rounded-lg transition-all duration-500 ${
                        isOver
                          ? 'bg-gradient-to-t from-rose-600 to-rose-400 shadow-md shadow-rose-500/20'
                          : 'bg-gradient-to-t from-blue-600 to-blue-400 shadow-md shadow-blue-500/20'
                      }`}
                    />
                  </div>

                  <span className="text-xs font-semibold text-[var(--color-text-subtitle)]">
                    {trend.weekLabel}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-4 flex items-center justify-between text-xs text-[var(--color-text-subtitle)]">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-blue-500" />
              <span>Normal (&le; 15j)</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-rose-500" />
              <span>Overload (&gt; 15j)</span>
            </span>
          </div>
        </div>

        {/* Chart 2: Aksi Meeting (1 col) */}
        <div className="p-6 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] shadow-sm flex flex-col justify-between">
          <div>
            <h2 className="text-base font-bold text-[var(--color-text-title)]">
              Aksi Meeting
            </h2>
            <p className="text-xs text-[var(--color-text-subtitle)] mt-0.5">
              Distribusi tipe meeting minggu ini
            </p>
          </div>

          {/* SVG Donut Chart */}
          <div className="my-6 flex items-center justify-center relative">
            <svg className="w-40 h-40 transform -rotate-90" viewBox="0 0 100 100">
              {/* Outer Ring Background */}
              <circle
                cx="50"
                cy="50"
                r="38"
                stroke="currentColor"
                strokeWidth="12"
                className="text-[var(--color-tab-container-bg)] fill-none"
              />
              {/* Slice 1: Internal Sync (62.5% -> strokeDasharray 149 238) */}
              <circle
                cx="50"
                cy="50"
                r="38"
                stroke="#2563EB"
                strokeWidth="12"
                strokeDasharray="149 238"
                strokeDashoffset="0"
                className="fill-none transition-all duration-700"
              />
              {/* Slice 2: Client Meeting (25% -> strokeDasharray 60 238) */}
              <circle
                cx="50"
                cy="50"
                r="38"
                stroke="#06B6D4"
                strokeWidth="12"
                strokeDasharray="60 238"
                strokeDashoffset="-149"
                className="fill-none transition-all duration-700"
              />
              {/* Slice 3: 1-on-1 (12.5% -> strokeDasharray 30 238) */}
              <circle
                cx="50"
                cy="50"
                r="38"
                stroke="#10B981"
                strokeWidth="12"
                strokeDasharray="30 238"
                strokeDashoffset="-209"
                className="fill-none transition-all duration-700"
              />
            </svg>

            {/* Center Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-2xl font-black text-[var(--color-text-title)] tracking-tight">
                16
              </span>
              <span className="text-[10px] font-semibold text-[var(--color-text-subtitle)] uppercase tracking-wider">
                meeting
              </span>
            </div>
          </div>

          {/* Donut Legend */}
          <div className="space-y-2 pt-2 border-t border-[var(--color-card-border)]">
            <div className="flex items-center justify-between text-xs">
              <span className="flex items-center gap-2 text-[var(--color-text-title)]">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shrink-0" />
                <span className="font-semibold">Internal Sync</span>
              </span>
              <span className="font-bold text-[var(--color-text-subtitle)]">10 (62.5%)</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="flex items-center gap-2 text-[var(--color-text-title)]">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 shrink-0" />
                <span className="font-semibold">Client Meeting</span>
              </span>
              <span className="font-bold text-[var(--color-text-subtitle)]">4 (25.0%)</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="flex items-center gap-2 text-[var(--color-text-title)]">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
                <span className="font-semibold">1-on-1</span>
              </span>
              <span className="font-bold text-[var(--color-text-subtitle)]">2 (12.5%)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card 3: Jam Meeting per Karyawan */}
      <div className="p-6 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
          <div>
            <h2 className="text-base font-bold text-[var(--color-text-title)]">
              Jam Meeting per Karyawan
            </h2>
            <p className="text-xs text-[var(--color-text-subtitle)] mt-0.5">
              Urutan berdasarkan total jam meeting tertinggi.
            </p>
          </div>

          <span className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-[var(--color-tab-container-bg)] text-[var(--color-text-subtitle)] border border-[var(--color-card-border)] self-start sm:self-auto">
            10 Karyawan Terdaftar
          </span>
        </div>

        {/* Employee List */}
        <div className="space-y-3">
          {employees.map((emp) => {
            const maxVal = 20; // max scale 20h
            const barWidth = Math.min(100, Math.round((emp.totalHours / maxVal) * 100));

            return (
              <div
                key={emp.id}
                onClick={() => router.push(`/direktori/${emp.id}`)}
                className="p-3.5 rounded-xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] hover:bg-[var(--color-tab-container-bg)] hover:border-[#2563EB]/50 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 group cursor-pointer shadow-xs active:scale-[0.99]"
                title={`Lihat profil detail ${emp.name}`}
              >
                {/* Employee Info Left */}
                <div className="flex items-center gap-3 min-w-[220px]">
                  <div
                    className={`w-9 h-9 rounded-full bg-gradient-to-tr ${emp.avatarColor} text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-sm`}
                  >
                    {emp.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>
                  <div className="truncate">
                    <p className="text-xs font-bold text-[var(--color-text-title)] group-hover:text-blue-500 transition-colors truncate">
                      {emp.name}
                    </p>
                    <p className="text-[11px] font-medium text-[var(--color-text-subtitle)] truncate">
                      {emp.role}
                    </p>
                  </div>
                </div>

                {/* Hours Metric & Progress Bar Right */}
                <div className="flex-1 flex items-center gap-4 max-w-xl">
                  {/* Progress Bar Container */}
                  <div className="flex-1 h-3 rounded-full bg-[var(--color-tab-container-bg)] p-0.5 overflow-hidden border border-[var(--color-card-border)]">
                    <div
                      style={{ width: `${barWidth}%` }}
                      className={`h-full rounded-full transition-all duration-500 ${
                        emp.isOverloaded
                          ? 'bg-gradient-to-r from-rose-500 to-red-500 shadow-sm shadow-rose-500/20'
                          : emp.totalHours >= 10
                          ? 'bg-gradient-to-r from-amber-500 to-orange-500'
                          : 'bg-gradient-to-r from-blue-500 to-indigo-500'
                      }`}
                    />
                  </div>

                  {/* Right Hours Badge */}
                  <div className="w-20 text-right shrink-0">
                    <span className="text-xs font-extrabold text-[var(--color-text-title)]">
                      {emp.totalHours}j
                    </span>
                    <span className="block text-[10px] text-[var(--color-text-subtitle)]">
                      {emp.meetingCount} meeting
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Card 4: Daftar Meeting */}
      <div className="p-6 rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-base font-bold text-[var(--color-text-title)]">
              Daftar Meeting
            </h2>
            <p className="text-xs text-[var(--color-text-subtitle)] mt-0.5">
              Jadwal dan rincian seluruh meeting yang diselenggarakan.
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="flex items-center gap-3 flex-wrap">
            {/* Search Box */}
            <div className="relative flex items-center min-w-[200px]">
              <Search className="absolute left-3 w-3.5 h-3.5 text-[var(--color-input-icon)] pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari meeting atau organizer..."
                className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl border border-[var(--color-input-border)] bg-[var(--color-input-bg)] text-[var(--color-input-text)] placeholder-[var(--color-input-placeholder)] focus:outline-none focus:ring-2 focus:ring-blue-500/40"
              />
            </div>

            {/* Filter Dropdown Pill */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[var(--color-tab-container-bg)] border border-[var(--color-card-border)]">
              {['Semua', 'Internal Sync', 'Client Meeting', '1-on-1'].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-2.5 py-1 text-[11px] font-semibold rounded-lg transition-all ${
                    selectedCategory === cat
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-[var(--color-text-subtitle)] hover:text-[var(--color-text-title)]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Meetings List Table */}
        <div className="space-y-3">
          {filteredMeetings.map((meeting) => (
            <div
              key={meeting.id}
              className="p-4 rounded-xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] hover:bg-[var(--color-tab-container-bg)]/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
            >
              {/* Meeting Info Left */}
              <div className="space-y-1.5 max-w-xl">
                <div className="flex items-center gap-2 flex-wrap">
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${
                      meeting.category === 'Internal Sync'
                        ? 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                        : meeting.category === 'Client Meeting'
                        ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
                        : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                    }`}
                  >
                    {meeting.category}
                  </span>

                  <h3 className="text-xs font-bold text-[var(--color-text-title)] group-hover:text-blue-500 transition-colors">
                    {meeting.title}
                  </h3>
                </div>

                <div className="flex items-center gap-3 text-[11px] text-[var(--color-text-subtitle)] flex-wrap">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-blue-500" />
                    <span>{meeting.date}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-blue-500" />
                    <span>{meeting.timeRange} ({meeting.durationHours}j)</span>
                  </span>
                  <span>•</span>
                  <span>Organizer: <strong className="text-[var(--color-text-title)]">{meeting.organizer}</strong></span>
                </div>
              </div>

              {/* Right Side: Attendees Avatars & Detail Button */}
              <div className="flex items-center gap-4 self-end sm:self-auto shrink-0">
                {/* Attendee Avatars Stack */}
                <div className="flex items-center -space-x-2 overflow-hidden">
                  {meeting.attendees.map((att, i) => (
                    <div
                      key={i}
                      title={`Lihat profil ${att.name}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push(
                          `/direktori/${getEmployeeIdByName(att.name)}`
                        );
                      }}
                      className={`w-7 h-7 rounded-full ${att.color} text-white font-bold text-[10px] flex items-center justify-center ring-2 ring-[var(--color-card-bg)] shadow-xs hover:scale-110 cursor-pointer transition-transform`}
                    >
                      {att.initials}
                    </div>
                  ))}
                </div>

                {/* Detail Action Button */}
                <button
                  type="button"
                  onClick={() => setSelectedMeeting(meeting)}
                  className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] text-[var(--color-text-title)] hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-xs"
                >
                  <span>Detail</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}

          {filteredMeetings.length === 0 && (
            <div className="py-12 text-center text-xs text-[var(--color-text-subtitle)]">
              Tidak ada meeting yang sesuai dengan pencarian atau filter status.
            </div>
          )}
        </div>
      </div>

      {/* Meeting Detail Modal */}
      {selectedMeeting && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
          <div className="w-full max-w-md rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-[var(--color-card-border)] pb-3">
              <div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  {selectedMeeting.category}
                </span>
                <h3 className="text-sm font-bold text-[var(--color-text-title)] mt-1">
                  {selectedMeeting.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedMeeting(null)}
                className="p-1 rounded-lg text-[var(--color-text-subtitle)] hover:text-[var(--color-text-title)] hover:bg-[var(--color-tab-container-bg)]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-[var(--color-text-subtitle)]">
              <div>
                <span className="font-semibold block text-[var(--color-text-title)] mb-1">
                  Waktu & Durasi:
                </span>
                <p>{selectedMeeting.date} • {selectedMeeting.timeRange} ({selectedMeeting.durationHours} Jam)</p>
              </div>

              <div>
                <span className="font-semibold block text-[var(--color-text-title)] mb-1">
                  Lokasi / Room:
                </span>
                <p>{selectedMeeting.location || 'Google Meet'}</p>
              </div>

              <div>
                <span className="font-semibold block text-[var(--color-text-title)] mb-1">
                  Agenda:
                </span>
                <p className="leading-relaxed bg-[var(--color-tab-container-bg)] p-3 rounded-xl border border-[var(--color-card-border)]">
                  {selectedMeeting.agenda}
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-[var(--color-text-title)]">
                    Peserta ({selectedMeeting.attendees.length}):
                  </span>
                  <span className="text-[10px] text-blue-400 font-medium">
                    (Klik untuk lihat detail)
                  </span>
                </div>
                <div className="flex items-center gap-2 flex-wrap pt-1">
                  {selectedMeeting.attendees.map((att, idx) => (
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
                onClick={() => setSelectedMeeting(null)}
                className="px-4 py-2 text-xs font-semibold rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm"
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
